__d(
  "BillingLocalizedCurrency",
  [
    "fbt",
    "BillingCurrencyAmount",
    "BillingWizardText.react",
    "PECurrency",
    "react",
    "react-compiler-runtime",
    "useBillingLocalizedCurrencyExchangeRate",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = function (t, n, o) {
        var e,
          a = t * n,
          i = (e = r("PECurrency").getCurrencyOffset(o)) != null ? e : 100,
          l = i === 1 ? 0 : 2,
          s = parseFloat(a).toFixed(l);
        return l === 0
          ? String(parseInt(s, 10) * r("PECurrency").DEFAULT_AMOUNT_OFFSET)
          : s.replace(".", "");
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.amount,
        a = e.country,
        i = e.showLocalizedCurrency,
        l = e.showOriginalAmount,
        m = n.currency,
        p = r("useBillingLocalizedCurrencyExchangeRate")(m, a),
        _ = p.exchange_rate,
        f = p.quote_currency,
        g;
      t[0] !== n || t[1] !== _ || t[2] !== f
        ? ((g =
            _ != null &&
            f != null &&
            o("BillingCurrencyAmount").getFromPECurrencyAmount({
              amount_with_offset: d(
                Number(n.getRawAmountForLoggingOnly()),
                Number(_ != null ? _ : 0),
                f != null ? f : "",
              ),
              currency: f != null ? f : "",
            }) != null),
          (t[0] = n),
          (t[1] = _),
          (t[2] = f),
          (t[3] = g))
        : (g = t[3]);
      var h = g,
        y,
        C;
      if (
        (t[4] !== h || t[5] !== i
          ? ((y = function () {
              i != null && i(h);
            }),
            (C = [h, i]),
            (t[4] = h),
            (t[5] = i),
            (t[6] = y),
            (t[7] = C))
          : ((y = t[6]), (C = t[7])),
        c(y, C),
        _ == null || f == null)
      )
        return null;
      var b, v;
      if (t[8] !== n || t[9] !== _ || t[10] !== f) {
        v = Symbol.for("react.early_return_sentinel");
        e: {
          var S;
          t[13] !== n
            ? ((S = n.getRawAmountForLoggingOnly()), (t[13] = n), (t[14] = S))
            : (S = t[14]);
          var R = o("BillingCurrencyAmount").getFromPECurrencyAmount({
            amount_with_offset: d(Number(S), Number(_), f),
            currency: f,
          });
          if (R == null) {
            v = null;
            break e;
          }
          b = R.toString();
        }
        ((t[8] = n), (t[9] = _), (t[10] = f), (t[11] = b), (t[12] = v));
      } else ((b = t[11]), (v = t[12]));
      if (v !== Symbol.for("react.early_return_sentinel")) return v;
      var L = b + (f === "JOD" ? " JOD" : ""),
        E;
      t[15] !== n
        ? ((E = n.toString()), (t[15] = n), (t[16] = E))
        : (E = t[16]);
      var k = E,
        I;
      t[17] !== k || t[18] !== L || t[19] !== l
        ? ((I = l
            ? s._(
                /*BTDS*/ "Estimated conversion: {originalCurrencyString} = {localizedCurrency}",
                [
                  s._param("originalCurrencyString", k),
                  s._param("localizedCurrency", L),
                ],
              )
            : s._(/*BTDS*/ "({localizedCurrency})", [
                s._param("localizedCurrency", L),
              ])),
          (t[17] = k),
          (t[18] = L),
          (t[19] = l),
          (t[20] = I))
        : (I = t[20]);
      var T = I,
        D;
      return (
        t[21] !== T || t[22] !== l
          ? ((D = l
              ? u.jsx(r("BillingWizardText.react"), { body: T, level: 4 })
              : T),
            (t[21] = T),
            (t[22] = l),
            (t[23] = D))
          : (D = t[23]),
        D
      );
    }
    l.default = m;
  },
  226,
);
