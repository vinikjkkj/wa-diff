__d(
  "WADecimalStringMod",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      if (!/^\d+$/.test(t))
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                '"',
                '" is not a valid decimal string',
              ])),
            t,
          ),
          r("err")("decimalStringMod is given an invalid decimal string")
        );
      var a = t.length;
      if (a < 16 || (a === 16 && t <= "9007199254740991")) return Number(t) % n;
      if (a > 20 || (a === 20 && t > "18446744073709551615"))
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                '"',
                '" is over 64 bits',
              ])),
            t,
          ),
          r("err")("decimalStringMod is given value over 64 bits")
        );
      for (var i = 0, l = 0; l < t.length; l++) {
        var u = Number(t[l]);
        i = (i * 10 + u) % n;
      }
      return i;
    }
    l.decimalStringMod = u;
  },
  98,
);
