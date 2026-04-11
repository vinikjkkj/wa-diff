__d(
  "ContextualConfigParseInteger",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = /^[-\+]?([1-9]\d*|0)$/;
    function u(t) {
      (e || (e = r("ContextualConfigAssert")))(
        s.test(t),
        o("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT,
      );
      var n = parseInt(t, 10);
      return (
        e(
          o("ContextualConfigValidators").isNumber(n),
          o("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT,
        ),
        n
      );
    }
    l.default = u;
  },
  98,
);
