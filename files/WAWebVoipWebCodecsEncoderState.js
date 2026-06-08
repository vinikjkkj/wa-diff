__d(
  "WAWebVoipWebCodecsEncoderState",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "avc1.42001f",
      d = new Map(),
      m = !1,
      p = new Set();
    function _(e) {
      var t = e.streamId;
      d.set(t, e);
      for (var n of p)
        try {
          n(e);
        } catch (e) {}
    }
    function f() {
      return new Map(d);
    }
    function g() {
      return m;
    }
    function h(e) {
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [webcodec-encode] setEnabled: ",
            "",
          ])),
        e,
      ),
        (m = e));
    }
    function y(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (typeof window.VideoEncoder != "function") return !1;
          try {
            var e = yield window.VideoEncoder.isConfigSupported({
              codec: c,
              width: 320,
              height: 240,
              hardwareAcceleration: "prefer-hardware",
              latencyMode: "realtime",
              bitrateMode: "variable",
              avc: { format: "annexb" },
            });
            return e.supported === !0;
          } catch (e) {
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [webcodec-encode] isConfigSupported check failed: ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      (d.clear(), p.clear());
    }
    ((l.WEBCODECS_H264_CODEC = c),
      (l.updateWebCodecsEncodeParams = _),
      (l.getAllWebCodecsEncodeParams = f),
      (l.isWebCodecsEncoderEnabled = g),
      (l.setWebCodecsEncoderEnabled = h),
      (l.subscribeToEncodeParamsChanges = y),
      (l.checkEncoderSupport = C),
      (l.resetWebCodecsEncoderState = v));
  },
  98,
);
