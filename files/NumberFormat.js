__d(
  "NumberFormat",
  ["NumberFormatConfig", "intlNumUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /(\d{3})(?=\d)/g;
    function s(e) {
      return ("" + e).split("").reverse().join("");
    }
    function u(t, n) {
      if (
        Math.abs(t).toString().length <
        r("NumberFormatConfig").minDigitsForThousandsSeparator
      )
        return t.toString();
      var o = s("" + t);
      return s(o.replace(e, "$1" + n));
    }
    function c(e) {
      return o("intlNumUtils").formatNumberWithThousandDelimiters(e);
    }
    ((l.formatIntegerWithDelimiter = u), (l.formatInteger = c));
  },
  98,
);
