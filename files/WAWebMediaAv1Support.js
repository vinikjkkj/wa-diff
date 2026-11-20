__d(
  "WAWebMediaAv1Support",
  [
    "WALogger",
    "WAPromiseTimeout",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        type: "file",
        video: {
          bitrate: 4e6,
          contentType: 'video/mp4; codecs="av01.0.08M.08"',
          framerate: 30,
          height: 1080,
          width: 1920,
        },
      },
      c = !1,
      d = !1,
      m = new Set(),
      p = 1e3,
      _ = r("once")(function () {
        return o("WAPromiseTimeout")
          .promiseTimeout(
            h()
              .then(
                function (e) {
                  c = e;
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
              )
              .then(function () {
                ((d = !0),
                  m.forEach(function (e) {
                    return e();
                  }));
              }),
            p,
          )
          .catch(function () {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] AV1 decoding probe timed out",
                  ])),
              )
              .sendLogs("av1-decoding-probe-timed-out");
          });
      }),
      f = {
        isKnown: function () {
          return d;
        },
        subscribe: function (t) {
          return (
            m.add(t),
            function () {
              m.delete(t);
            }
          );
        },
        whenKnown: function () {
          return d ? null : _();
        },
      };
    function g() {
      return (_(), c);
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = window.navigator.mediaCapabilities;
          if (e == null) return !1;
          var t = yield e.decodingInfo(u);
          return t.supported && t.smooth && t.powerEfficient;
        })),
        y.apply(this, arguments)
      );
    }
    ((l.av1SupportSource = f),
      (l.browserSupportsAV1 = g),
      (l.probeEfficientAv1Decoding = h));
  },
  98,
);
