__d(
  "WAWebVoipWebCodecsEncoderVoipParams",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "options.web_vid_enc_refresh_br_on_resize",
      l = "options.web_vid_enc_bitrate_mode";
    function s(e, t, n) {
      if (t || n) return "variable";
      try {
        return d(e, l) ? "constant" : "variable";
      } catch (e) {
        return "variable";
      }
    }
    function u(t) {
      try {
        return d(t, e);
      } catch (e) {
        return !1;
      }
    }
    function c(e, t, n) {
      return e === t ? n + 1 : null;
    }
    function d(e, t) {
      var n = e == null ? void 0 : e.getVoipParam(t).trim().toLowerCase();
      return n === "1" || n === "true";
    }
    ((i.getEncoderBitrateMode = s),
      (i.shouldRefreshBitrateOnResize = u),
      (i.getBitrateRefreshAfterResize = c));
  },
  66,
);
