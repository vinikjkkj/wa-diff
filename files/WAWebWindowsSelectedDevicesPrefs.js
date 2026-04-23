__d(
  "WAWebWindowsSelectedDevicesPrefs",
  ["WAWebMediaCaptureStreamType", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = "selected_audio_input",
      s = "selected_video_input",
      u = "selected_audio_output";
    function c(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "string" ? t : "";
    }
    function d() {
      return c(e);
    }
    function m(t) {
      r("WAWebUserPrefsStore").setUser(e, t);
    }
    function p() {
      return c(s);
    }
    function _(e) {
      r("WAWebUserPrefsStore").setUser(s, e);
    }
    function f() {
      return c(u);
    }
    function g(e) {
      r("WAWebUserPrefsStore").setUser(u, e);
    }
    function h(e, t) {
      return [].concat(
        e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? y(t)
          : e ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE
            ? C(t)
            : e ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .CAMERA_AND_MICROPHONE
              ? [].concat(y(t), C(t))
              : e ===
                  o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                    .DESKTOP
                ? []
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })(),
        t,
      );
    }
    function y(e) {
      var t = p().trim();
      return b(t, e, "video");
    }
    function C(e) {
      var t = d().trim();
      return b(t, e, "audio");
    }
    function b(e, t, n) {
      var r = [];
      if (e !== "")
        for (var o of [!0, !1])
          for (var a of t) {
            var i = v(a[n], e, o);
            if (i) {
              var l;
              r.push(((l = {}), (l[n] = i), l));
            }
          }
      return r;
    }
    function v(e, t, n) {
      var r = {};
      return (
        e != null && typeof e == "object" && (r = e),
        n
          ? babelHelpers.extends({ deviceId: { exact: t } }, r)
          : babelHelpers.extends({ deviceId: t }, r)
      );
    }
    ((l.getSelectedAudioInput = d),
      (l.setSelectedAudioInput = m),
      (l.getSelectedVideoInput = p),
      (l.setSelectedVideoInput = _),
      (l.getSelectedAudioOutput = f),
      (l.setSelectedAudioOutput = g),
      (l.addSelectedDeviceConstraints = h));
  },
  98,
);
