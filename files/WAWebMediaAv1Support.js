__d(
  "WAWebMediaAv1Support",
  ["WALogger", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        type: "file",
        video: {
          bitrate: 4e6,
          contentType: 'video/mp4; codecs="av01.0.08M.08"',
          framerate: 30,
          height: 1080,
          width: 1920,
        },
      },
      u = !1,
      c = !1;
    function d() {
      c ||
        ((c = !0),
        p().then(
          function (e) {
            u = e;
          },
          function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] AV1 decoding probe failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("av1-decoding-probe-failed");
          },
        ));
    }
    function m() {
      return (d(), u);
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = window.navigator.mediaCapabilities;
          if (e == null) return !1;
          var t = yield e.decodingInfo(s);
          return t.supported && t.smooth && t.powerEfficient;
        })),
        _.apply(this, arguments)
      );
    }
    ((l.startAv1DecodingProbe = d),
      (l.browserSupportsAV1 = m),
      (l.probeEfficientAv1Decoding = p));
  },
  98,
);
