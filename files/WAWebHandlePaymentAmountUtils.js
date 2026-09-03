__d(
  "WAWebHandlePaymentAmountUtils",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = 2;
    function c(e) {
      e.assertTag("money");
      var t = parseFloat(e.attrString("value")),
        n = e.attrString("currency"),
        r = e.maybeAttrInt("offset"),
        o = r != null && r !== 0 ? r : s,
        a = (t * s) / o;
      return { currency: n, amount1000: a };
    }
    function d(t) {
      if (t.hasChild("amount")) {
        var n = t.child("amount");
        return c(n.child("money"));
      } else if (t.hasAttr("amount")) {
        var a = parseFloat(t.attrString("amount"));
        return { amount1000: a * s, currency: t.attrString("currency") };
      }
      throw (
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Amount missing in pay or transaction node",
            ])),
        ),
        r("err")("Amount missing in pay or transaction node")
      );
    }
    function m(e) {
      return d(e);
    }
    function p(e) {
      return e.hasChild("amount") || e.hasAttr("amount");
    }
    function _(e) {
      return e.maybeAttrInt("version") === u && !p(e);
    }
    ((l.getAmount1000AndCurrency = m), (l.isDehydratedPaymentNode = _));
  },
  98,
);
