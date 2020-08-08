from imutils.video import WebcamVideoStream
from flask import Response
from flask import Flask
from flask import render_template
import threading
import datetime
import imutils
import yaml
import time
import cv2
import numpy as np
from flask import jsonify

app = Flask(
    __name__,
    static_url_path='',
    static_folder='static',
    template_folder='templates')
app.config['CSRF_ENALBLED'] = True


@app.route("/")
@app.route("/home")
def home_page():
    return render_template("home.html", title='Home Page')


outputFrame = None
lock = threading.Lock()


@app.route("/live")
def live():
    # return the rendered template
    return render_template("live.html")


def generate():
    # grab global references to the output frame and lock variables
    global outputFrame, lock

    # loop over frames from the output stream
    while True:
        # wait until the lock is acquired
        with lock:
            # check if the output frame is available, otherwise skip
            # the iteration of the loop
            if outputFrame is None:
                continue

            # encode the frame in JPEG format
            (flag, encodedImage) = cv2.imencode(".jpg", outputFrame)

            # ensure the frame was successfully encoded
            if not flag:
                continue

        # yield the output frame in the byte format
        yield(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' +
              bytearray(encodedImage) + b'\r\n')


@app.route("/video_feed")
def video_feed():
    # return the response generated along with the specific media
    # type (mime type)
    return Response(generate(),
                    mimetype="multipart/x-mixed-replace; boundary=frame")

# check to see if this is the main thread of execution


def start_detect(cam_info):

    global vs, outputFrame, lock
    vs = WebcamVideoStream(src=cam_info).start()
    frame = vs.read()

    # loop over frames from the video stream
    while True:

        frame = vs.read()
        frame = vs.read()
        #frame = imutils.resize(frame, width=400)

        with lock:
            outputFrame = np.rot90(frame, 3)
    vs.stop()


if __name__ == '__main__':

    with open("camera_info.yaml", "r") as f:
        try:
            data = yaml.safe_load(f)
            cam_info = data['cam_info']
        except yaml.YAMLError as exc:
            print(exc)
            sys.exit()
    t = threading.Thread(target=start_detect, args=(cam_info,))
    t.daemon = True
    t.start()
    # start the flask app
    app.run(host='0.0.0.0', port=2810, debug=True,
            threaded=True, use_reloader=False)
