__d(
  "WALongInt",
  ["WAHex", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      if (typeof t != "number") {
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " is not a safe integer",
              ])),
            t,
          )
          .color("red");
        var n = new Error(
          "numberOrThrowIfTooLarge is given a non-safe integer",
        );
        throw (n.stack, n);
      }
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
      if (!/^-?\d+$/.test(e)) {
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                '"',
                '" is not a valid decimal string',
              ])),
            e,
          )
          .color("red");
        var t = new Error(
          "decimalStringToLongInt is given an invalid decimal string",
        );
        throw (t.stack, t);
      }
      var n = e[0] === "-",
        r = e.replace(/^-?0*/, ""),
        a = r.length;
      if (a < 16 || (a === 16 && r <= "9007199254740991"))
        return n ? -Number(r) : Number(r);
      if (
        a > 20 ||
        (a === 20 && r > "18446744073709551615") ||
        (n && (a > 19 || (a === 19 && r > "9223372036854775807")))
      ) {
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                '"',
                '" is over 64 bits',
              ])),
            e,
          )
          .color("red");
        var i = new Error("decimalStringToHexLong is given value over 64 bits");
        throw (i.stack, i);
      }
      for (var l = 0, c = 0, d = 0; d < a; d++)
        ((l = l * 10 + Number(r[d])),
          (c = c * 10 + Math.floor(l / 4294967296)),
          (l = l % 4294967296));
      return o("WAHex").createHexLongFrom32Bits(c, l, n);
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
