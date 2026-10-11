__d(
  "WAWebVoipDevicePermissionRequest",
  [
    "WAGetUserMedia",
    "WALogger",
    "WAWebUserPrefsVoip",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        granted: { camera: !1, microphone: !1 },
        isRefused: !1,
        microphoneStream: null,
      };
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAGetUserMedia").getUserMedia == null) return u;
          var n = Date.now();
          try {
            var r,
              a,
              i = yield o("WAGetUserMedia").getUserMedia({
                audio: t.microphone && p(),
                video: t.camera,
              }),
              l = _(i),
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
              babelHelpers.extends({}, u, { isRefused: m(e) })
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return (
        e != null &&
        typeof e == "object" &&
        "name" in e &&
        (e.name === "NotAllowedError" || e.name === "PermissionDeniedError")
      );
    }
    function p() {
      var e = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
      return e != null ? { deviceId: { ideal: e } } : !0;
    }
    function _(e) {
      var t = e.getVideoTracks();
      return (
        t.forEach(function (t) {
          (t.stop(), e.removeTrack(t));
        }),
        t.length > 0
      );
    }
    ((l.requestVoipDevicePermissions = c), (l.getMicrophoneConstraints = p));
  },
  98,
);
