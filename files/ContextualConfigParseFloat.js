__d(
  "ContextualConfigParseFloat",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = /^[-\+]?([1-9]\d*|0)(\.\d+)?$/;
    function u(t) {
      (e || (e = r("ContextualConfigAssert")))(
        s.test(t),
        o("ContextualConfigConstants").ERROR.BAD_NUMBER_FORMAT,
      );
      var n = parseFloat(t);
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
