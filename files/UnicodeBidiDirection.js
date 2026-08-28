__d(
  "UnicodeBidiDirection",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "NEUTRAL",
      s = "LTR",
      u = "RTL";
    function c(e) {
      return e === s || e === u;
    }
    function d(e) {
      if (!c(e))
        throw r("FBLogger")("internationalization").mustfixThrow(
          "`dir` must be a strong direction to be converted to HTML Direction",
        );
      return e === s ? "ltr" : "rtl";
    }
    function m(e, t) {
      if (!c(e))
        throw r("FBLogger")("internationalization").mustfixThrow(
          "`dir` must be a strong direction to be converted to HTML Direction",
        );
      if (!c(t))
        throw r("FBLogger")("internationalization").mustfixThrow(
          "`otherDir` must be a strong direction to be converted to HTML Direction",
        );
      return e === t ? null : d(e);
    }
    ((l.NEUTRAL = e),
      (l.LTR = s),
      (l.RTL = u),
      (l.isStrong = c),
      (l.getHTMLDir = d),
      (l.getHTMLDirIfDifferent = m));
  },
  98,
);
