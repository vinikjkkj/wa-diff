__d(
  "WAWebVoipDevicePermissionRequest",
  ["WAGetUserMedia", "WALogger", "WAWebUserPrefsVoip"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        granted: { camera: !1, microphone: !1 },
        isRefused: !1,
        microphoneStream: null,
      };
    async function c(t) {
      if (o("WAGetUserMedia").getUserMedia == null) return u;
      var n = Date.now();
      try {
        var r,
          a,
          i = await o("WAGetUserMedia").getUserMedia({
            audio: t.microphone && m(),
            video: t.camera,
          }),
          l = p(i),
          c = i.getAudioTracks()[0];
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] device permission request granted after ",
                "ms, camera=",
                ", microphone=",
                "",
              ])),
            Date.now() - n,
            String(l),
            (r =
              c == null || (a = c.getSettings().deviceId) == null
                ? void 0
                : a.slice(0, 8)) != null
              ? r
              : "none",
          ),
          {
            granted: { camera: l, microphone: c != null },
            isRefused: !1,
            microphoneStream: c != null ? i : null,
          }
        );
      } catch (e) {
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] device permission request not granted: ",
                "",
              ])),
            e,
          ),
          babelHelpers.extends({}, u, { isRefused: d(e) })
        );
      }
    }
    function d(e) {
      return (
        e != null &&
        typeof e == "object" &&
        "name" in e &&
        (e.name === "NotAllowedError" || e.name === "PermissionDeniedError")
      );
    }
    function m() {
      var e = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
      return e != null ? { deviceId: { ideal: e } } : !0;
    }
    function p(e) {
      var t = e.getVideoTracks();
      return (
        t.forEach(function (t) {
          (t.stop(), e.removeTrack(t));
        }),
        t.length > 0
      );
    }
    ((l.requestVoipDevicePermissions = c), (l.getMicrophoneConstraints = m));
  },
  98,
);
