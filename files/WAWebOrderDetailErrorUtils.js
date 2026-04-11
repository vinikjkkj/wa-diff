__d(
  "WAWebOrderDetailErrorUtils",
  [
    "fbt",
    "WATypeUtils",
    "WAWebCurrencyUtils",
    "WAWebOrderDetailMath",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
            for (var t in e) {
              var n = e[t];
              n != null &&
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    duration: 1e4,
                    id: t + n.toString(),
                    msg: n,
                    action: {
                      actionText: s._(/*BTDS*/ "OK"),
                      dismiss: !0,
                      theme: "success",
                    },
                  }),
                );
            }
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        c(n, r));
    }
    function m() {
      return s._(/*BTDS*/ "Enter a valid number");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Enter a positive number");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = function (t) {
        return s._(/*BTDS*/ "{input_label} cannot be more than 100\u0025", [
          s._param("input_label", t),
        ]);
      },
      f = function (t) {
        return s._(/*BTDS*/ "{input_label} cannot be more than subtotal", [
          s._param("input_label", t),
        ]);
      };
    function g(e) {
      var t = e.currency,
        n = e.enablePercentValueCheck,
        r = e.fieldType,
        a = e.label,
        i = e.maxFlatValue,
        l = e.value;
      if (!o("WAWebCurrencyUtils").validatePriceString(t, l)) return m();
      var s =
        o("WAWebCurrencyUtils").valueFromString(t, l) /
        o("WAWebOrderDetailMath").DEFAULT_OFFSET;
      if (s < 0) return p();
      if (r === o("WAWebOrderDetailMath").PERCENTAGE_SYMBOL) {
        if (n && s > 100) return _(a != null ? a : "");
      } else if (o("WATypeUtils").isNumber(i) && s > i)
        return f(a != null ? a : "");
      return "";
    }
    ((l.useShowToastErrors = d),
      (l.getOrderDetailInvalidNumberErrorMessage = m),
      (l.getOrderDetailNegativeNumberErrorMessage = p),
      (l.errorMessageBigPercentageValue = _),
      (l.errorMessageBigFlatValue = f),
      (l.additionalChargeErrorHandler = g));
  },
  226,
);
