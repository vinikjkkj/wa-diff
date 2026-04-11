__d(
  "intlRenderCLDRDate",
  ["CLDRDateFormatConfig", "FBLogger", "intlRenderJSDateSymbol"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /\w+/;
    function s(e, t, n) {
      for (
        var o = r("CLDRDateFormatConfig").intlDateSpecialChars,
          a = "",
          i = "",
          l = !1,
          s = [],
          c,
          d = e
            .split(o.cldrDelimiter + o.singleQuote)
            .join(o.singleQuoteHolder),
          m = 0,
          p = d.length;
        m < p;
        m++
      ) {
        var _ = d.charAt(m);
        l
          ? (a.length !== 0 && ((c = u(a, n, t)), s.push(c.rendered), (a = "")),
            _ === o.cldrDelimiter
              ? ((l = !1), s.push(i), (i = ""))
              : _ === o.singleQuoteHolder
                ? (i += o.singleQuote)
                : (i += _))
          : _ === o.cldrDelimiter
            ? (l = !0)
            : a.length === 0 || a[0] === _
              ? (a += _)
              : _ === o.singleQuoteHolder
                ? (a += o.singleQuote)
                : ((c = u(a, n, t)), s.push(c.rendered), (a = _));
      }
      if (i.length !== 0)
        throw r("FBLogger")("internationalization").mustfixThrow(
          'Format: "%s" must contain closing str literal delimiter',
          d,
        );
      return (
        a.length !== 0 && ((c = u(a, n, t)), s.push(c.rendered)),
        s.join("")
      );
    }
    function u(e, t, n) {
      var o = c(e);
      return r("intlRenderJSDateSymbol")(t, o, n);
    }
    function c(t) {
      if (t in r("CLDRDateFormatConfig").CLDRToPHPSymbolConversion)
        return r("CLDRDateFormatConfig").CLDRToPHPSymbolConversion[t];
      if (e.test(t))
        throw r("FBLogger")("internationalization").mustfixThrow(
          'Unsupported CLDR symbol: "%s". If string literal, wrap in delimiters',
          t,
        );
      return t;
    }
    i.exports = s;
  },
  34,
);
