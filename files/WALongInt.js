__d(
  "WALongInt",
  ["WAHex", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      if (typeof t != "number")
        throw (
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " is not a safe integer",
                ])),
              t,
            )
            .color("red"),
          new Error("numberOrThrowIfTooLarge is given a non-safe integer")
        );
      return t;
    }
    var d = function (t) {
      return t == null ? t : c(t);
    };
    function m(e) {
      return e == null || typeof e != "number" ? null : e;
    }
    function p(e, t) {
      if (typeof e == "number" && typeof t == "number") return e > t;
      var n = typeof e == "number" ? o("WAHex").hexLongFromNumber(e) : e,
        r = typeof t == "number" ? o("WAHex").hexLongFromNumber(t) : t;
      return o("WAHex").isBiggerHexLong(n, r);
    }
    function _(e) {
      if (typeof e == "number") return e.toString(10);
      for (
        var t = o("WAHex").hexLongToHex(e), n = [0], r = 0, a = 0;
        a < t.length;
        a++
      ) {
        r = o("WAHex").hexAt(t, a);
        for (var i = 0; i < n.length; i++)
          ((n[i] = n[i] * 16 + r), (r = (n[i] / 10) | 0), (n[i] %= 10));
        for (; r > 0; ) (n.push(r % 10), (r = (r / 10) | 0));
      }
      var l = n.reverse().join("");
      return o("WAHex").hexLongIsNegative(e) ? "-" + l : l;
    }
    function f(e) {
      if (!/^-?\d+$/.test(e))
        throw (
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  '"',
                  '" is not a valid decimal string',
                ])),
              e,
            )
            .color("red"),
          new Error("decimalStringToLongInt is given an invalid decimal string")
        );
      var t = e[0] === "-",
        n = e.replace(/^-?0*/, ""),
        r = n.length;
      if (r < 16 || (r === 16 && n <= "9007199254740991"))
        return t ? -Number(n) : Number(n);
      if (
        r > 20 ||
        (r === 20 && n > "18446744073709551615") ||
        (t && (r > 19 || (r === 19 && n > "9223372036854775807")))
      )
        throw (
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  '"',
                  '" is over 64 bits',
                ])),
              e,
            )
            .color("red"),
          new Error("decimalStringToHexLong is given value over 64 bits")
        );
      for (var a = 0, i = 0, l = 0; l < r; l++)
        ((a = a * 10 + Number(n[l])),
          (i = i * 10 + Math.floor(a / 4294967296)),
          (a = a % 4294967296));
      return o("WAHex").createHexLongFrom32Bits(i, a, t);
    }
    ((l.numberOrThrowIfTooLarge = c),
      (l.maybeNumberOrThrowIfTooLarge = d),
      (l.maybeNumber = m),
      (l.isBiggerLongInt = p),
      (l.longIntToDecimalString = _),
      (l.decimalStringToLongInt = f));
  },
  98,
);
