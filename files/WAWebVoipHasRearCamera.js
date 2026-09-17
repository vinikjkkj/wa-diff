__d(
  "WAWebVoipHasRearCamera",
  [
    "WALogger",
    "WAWebAudioDeviceManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        /back|rear|environment|belakang|trasera|traseira|posterior|arrière|rück|hinten|arka|\u092A\u093F\u091B\u0932\u093E|\u092A\u0940\u091B\u0947/i,
      c = 2;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t != null ? t : navigator.mediaDevices;
          if ((n == null ? void 0 : n.enumerateDevices) == null) return !1;
          try {
            var a = yield o(
                "WAWebAudioDeviceManager",
              ).coalescedEnumerateDevices(n),
              i = a.filter(function (e) {
                return e.kind === "videoinput";
              }),
              l = i.some(function (e) {
                return u.test(e.label);
              }),
              d = i.length >= c || l;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [hasRearCameraLikely] result=",
                    " videoInputs=",
                    " labelMatch=",
                    "",
                  ])),
                String(d),
                String(i.length),
                String(l),
              ),
              d
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] hasRearCameraLikely failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-has-rear-camera-failed"),
              !1
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.hasRearCameraLikely = d;
  },
  98,
);
