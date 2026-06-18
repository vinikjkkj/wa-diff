__d(
  "WAWebVoipWebCodecsEncoderState",
  ["WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "avc1.42001f",
      d = [
        { code: 31, maxFs: 3600, maxMbps: 108e3 },
        { code: 32, maxFs: 5120, maxMbps: 216e3 },
        { code: 40, maxFs: 8192, maxMbps: 245760 },
        { code: 42, maxFs: 8704, maxMbps: 522240 },
        { code: 50, maxFs: 22080, maxMbps: 589824 },
        { code: 51, maxFs: 36864, maxMbps: 983040 },
        { code: 52, maxFs: 36864, maxMbps: 2073600 },
      ];
    function m(e, t) {
      return Math.ceil(e / 16) * Math.ceil(t / 16);
    }
    function p(e) {
      return "avc1.4200" + e.toString(16).padStart(2, "0");
    }
    function _(e, t, n) {
      var r = m(e, t),
        o = r * Math.max(n, 1);
      for (var a of d) if (r <= a.maxFs && o <= a.maxMbps) return p(a.code);
      return p(d[d.length - 1].code);
    }
    var f = new Map(),
      g = !1,
      h = new Set();
    function y(e) {
      var t = e.streamId;
      f.set(t, e);
      for (var n of h)
        try {
          n(e);
        } catch (e) {}
    }
    function C() {
      return new Map(f);
    }
    function b() {
      return g;
    }
    function v(e) {
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [webcodec-encode] setEnabled: ",
            "",
          ])),
        e,
      ),
        (g = e));
    }
    function S(e) {
      return (
        h.add(e),
        function () {
          h.delete(e);
        }
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        L.apply(this, arguments)
      );
    }
    function E() {
      (f.clear(), h.clear());
    }
    ((l.WEBCODECS_H264_CODEC = c),
      (l.getH264CodecString = _),
      (l.updateWebCodecsEncodeParams = y),
      (l.getAllWebCodecsEncodeParams = C),
      (l.isWebCodecsEncoderEnabled = b),
      (l.setWebCodecsEncoderEnabled = v),
      (l.subscribeToEncodeParamsChanges = S),
      (l.checkEncoderSupport = R),
      (l.resetWebCodecsEncoderState = E));
  },
  98,
);
