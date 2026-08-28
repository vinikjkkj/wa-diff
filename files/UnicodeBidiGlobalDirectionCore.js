__d(
  "UnicodeBidiGlobalDirectionCore",
  ["FBLogger", "UnicodeBidiDirection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      e = t;
    }
    function u() {
      s(o("UnicodeBidiDirection").LTR);
    }
    function c() {
      if ((e || this.initDir(), !e))
        throw r("FBLogger")("internationalization").mustfixThrow(
          "Global direction not set.",
        );
      return e;
    }
    var d = { setDir: s, initDir: u, getDir: c };
    i.exports = d;
  },
  34,
);
