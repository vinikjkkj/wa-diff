__d(
  "WAWebHandlePaymentAmountUtils",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3;
    function u(e) {
      e.assertTag("money");
      var t = parseFloat(e.attrString("value")),
        n = e.attrString("currency"),
        r = e.maybeAttrInt("offset"),
        o = r != null && r !== 0 ? r : s,
        a = (t * s) / o;
      return { currency: n, amount1000: a };
    }
    function c(t) {
      if (t.hasChild("amount")) {
        var n = t.child("amount");
        return u(n.child("money"));
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
    function d(e) {
      return c(e);
    }
    l.getAmount1000AndCurrency = d;
  },
  98,
);
