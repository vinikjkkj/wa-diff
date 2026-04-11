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
    function f(e) {
      var t;
      return (e === void 0 && (e = 0), (t = d.get(e)) != null ? t : null);
    }
    function g() {
      return new Map(d);
    }
    function h() {
      return m;
    }
    function y(e) {
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
    function C(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (typeof window.VideoEncoder != "function") return !1;
          try {
            var e = yield window.VideoEncoder.isConfigSupported({
              codec: c,
              width: 320,
              height: 240,
              latencyMode: "realtime",
              bitrateMode: "constant",
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
        v.apply(this, arguments)
      );
    }
    function S() {
      (d.clear(), p.clear());
    }
    ((l.WEBCODECS_H264_CODEC = c),
      (l.updateWebCodecsEncodeParams = _),
      (l.getWebCodecsEncodeParams = f),
      (l.getAllWebCodecsEncodeParams = g),
      (l.isWebCodecsEncoderEnabled = h),
      (l.setWebCodecsEncoderEnabled = y),
      (l.subscribeToEncodeParamsChanges = C),
      (l.checkEncoderSupport = b),
      (l.resetWebCodecsEncoderState = S));
  },
  98,
);
