__d(
  "WAWebVoipWebCodecsEncoderVoipParams",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "options.web_vid_enc_refresh_br_on_resize",
      l = "options.web_vid_enc_bitrate_mode",
      s = "options.web_vid_enc_keyframe_interval_ms",
      u = 1e3,
      c = 6e4,
      d = 3e3;
    function m(e, t, n) {
      if (t || n) return "variable";
      try {
        return g(e, l) ? "constant" : "variable";
      } catch (e) {
        return "variable";
      }
    }
    function p(t) {
      try {
        return g(t, e);
      } catch (e) {
        return !1;
      }
    }
    function _(e, t) {
      if (t) return d;
      try {
        var n = Number(e == null ? void 0 : e.getVoipParam(s));
        return n >= u && n <= c ? n : d;
      } catch (e) {
        return d;
      }
    }
    function f(e, t, n) {
      return e === t ? n + 1 : null;
    }
    function g(e, t) {
      var n = e == null ? void 0 : e.getVoipParam(t).trim().toLowerCase();
      return n === "1" || n === "true";
    }
    ((i.DEFAULT_KEYFRAME_INTERVAL_MS = d),
      (i.getEncoderBitrateMode = m),
      (i.shouldRefreshBitrateOnResize = p),
      (i.getKeyframeIntervalMs = _),
      (i.getBitrateRefreshAfterResize = f));
  },
  66,
);
