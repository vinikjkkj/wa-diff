__d(
  "WAWebStripBrazilPaymentState",
  ["WAWebBrazilPaymentState", "WAWebBrazilPaymentStateKeys"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function s(e, t) {
      if (typeof e != "object" || !e) return e;
      var n =
        e[typeof Symbol == "function" ? Symbol.toPrimitive : "@@toPrimitive"];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    function u(e) {
      if (e != null) {
        var t = c(o("WAWebBrazilPaymentState").getPaymentRequestParamsJson(e));
        if (t == null || !Array.isArray(e.buttons)) return e;
        var n = e.buttons,
          r = n[0],
          a = babelHelpers.arrayLikeToArray(n).slice(1);
        return babelHelpers.extends({}, e, {
          buttons: [
            babelHelpers.extends({}, r, {
              buttonParamsJson: JSON.stringify(t),
            }),
          ].concat(a),
        });
      }
    }
    function c(t) {
      if (t == null) return null;
      try {
        var n = JSON.parse(t);
        if (
          n == null ||
          typeof n != "object" ||
          Array.isArray(n) ||
          (!Object.hasOwn(
            n,
            o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY,
          ) &&
            !Object.hasOwn(
              n,
              o("WAWebBrazilPaymentStateKeys").BUBBLE_VIEW_LOGGED_KEY,
            ))
        )
          return null;
        var r = n[o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY],
          a = n[o("WAWebBrazilPaymentStateKeys").BUBBLE_VIEW_LOGGED_KEY],
          i = babelHelpers.objectWithoutPropertiesLoose(
            n,
            [
              o("WAWebBrazilPaymentStateKeys").BRAZIL_PAYMENT_STATE_KEY,
              o("WAWebBrazilPaymentStateKeys").BUBBLE_VIEW_LOGGED_KEY,
            ].map(e),
          );
        return i;
      } catch (e) {
        return null;
      }
    }
    l.stripBrazilPaymentState = u;
  },
  98,
);
