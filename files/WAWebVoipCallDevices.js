__d(
  "WAWebVoipCallDevices",
  [
    "WAWebAudioDeviceEvents",
    "WAWebAudioDeviceManager",
    "WAWebUserPrefsVoip",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipVideoCameraCapture",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === "audioinput"
        ? o("WAWebAudioDeviceManager").getCurrentSelectedAudioDevice()
        : e === "audiooutput"
          ? o("WAWebAudioDeviceManager").getCurrentSelectedAudioOutputDevice()
          : e === "videoinput"
            ? o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture
                .currentDeviceId
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function s(e, t, n) {
      return e === "audioinput"
        ? o("WAWebVoipAudioCaptureAndPlayback").switchAudioInputDevice(t, n)
        : e === "audiooutput"
          ? o("WAWebVoipAudioCaptureAndPlayback").switchAudioOutputDevice(t)
          : e === "videoinput"
            ? o(
                "WAWebVoipVideoCameraCapture",
              ).WAWebVoipVideoCameraCapture.switchVideoDevice(t, n)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(e) {
      return e === "audioinput"
        ? o("WAWebUserPrefsVoip").getSelectedAudioInputDevice()
        : e === "audiooutput"
          ? o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice()
          : e === "videoinput"
            ? o("WAWebUserPrefsVoip").getSelectedVideoInputDevice()
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function c(e, t) {
      e: {
        if (e === "audioinput") {
          o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(t);
          break e;
        }
        if (e === "audiooutput") {
          o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(t);
          break e;
        }
        if (e === "videoinput") {
          o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(t);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function d(e, t) {
      e: {
        if (e === "audioinput") {
          return (
            o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
              "deviceSelectionChanged",
              t,
            ),
            function () {
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "deviceSelectionChanged",
                t,
              );
            }
          );
          break e;
        }
        if (e === "audiooutput") {
          return (
            o("WAWebAudioDeviceEvents").AudioDeviceEvents.on(
              "speakerDeviceSelectionChanged",
              t,
            ),
            function () {
              o("WAWebAudioDeviceEvents").AudioDeviceEvents.off(
                "speakerDeviceSelectionChanged",
                t,
              );
            }
          );
          break e;
        }
        if (e === "videoinput") {
          return (
            o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on(
              "deviceSelectionChanged",
              t,
            ),
            function () {
              o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off(
                "deviceSelectionChanged",
                t,
              );
            }
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.getCallDeviceId = e),
      (l.switchCallDevice = s),
      (l.getSavedDeviceChoice = u),
      (l.saveDeviceChoice = c),
      (l.subscribeToCallDeviceSelection = d));
  },
  98,
);
