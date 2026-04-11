__d(
  "WAWebBizAdCreationPaymentAdAccountRow.react",
  [
    "fbt",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSIconIcAccountBalanceWallet.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationOpenAdAccountSelectorModal",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = {
        container: { height: "xnnlda6", $$css: !0 },
        iconAndTextContainer: {
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          $$css: !0,
        },
        icon: {
          color: "xhslqc4",
          height: "x1nqnulx",
          width: "x1xvr5cs",
          $$css: !0,
        },
      };
    function _(e) {
      var t,
        n = o("react-compiler-runtime").c(18),
        a = e.adAccountsRef,
        i = e.legacyAccountID,
        l = e.name,
        c = r("useWAWebBizAdCreationOpenAdAccountSelectorModal")(i, a),
        d = m(r("WAWebBizAdCreationLoggerContext")),
        _ = m(r("WAWebBizAdCreationSpecContext")),
        f =
          _ == null ||
          (t = _.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        g;
      n[0] !== f || n[1] !== d || n[2] !== c
        ? ((g = function () {
            (d != null &&
              r("WAWebBizAdLogger").log({
                event: "payment_ad_account_change_button_click",
                loggerContext: d,
                adAccountID: f,
              }),
              c());
          }),
          (n[0] = f),
          (n[1] = d),
          (n[2] = c),
          (n[3] = g))
        : (g = n[3]);
      var h = g,
        y;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSIconIcAccountBalanceWallet.react"), {
            iconXstyle: p.icon,
          })),
          (n[4] = y))
        : (y = n[4]);
      var C = l != null ? l : i,
        b;
      n[5] !== C
        ? ((b = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: C,
          })),
          (n[5] = C),
          (n[6] = b))
        : (b = n[6]);
      var v;
      n[7] !== i
        ? ((v = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: i,
          })),
          (n[7] = i),
          (n[8] = v))
        : (v = n[8]);
      var S;
      n[9] !== b || n[10] !== v
        ? ((S = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: p.iconAndTextContainer,
            children: [
              y,
              u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [b, v] }),
            ],
          })),
          (n[9] = b),
          (n[10] = v),
          (n[11] = S))
        : (S = n[11]);
      var R;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Change")), (n[12] = R))
        : (R = n[12]);
      var L;
      n[13] !== h
        ? ((L = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WDSButton.react"), {
              variant: "borderless",
              size: "medium",
              label: R,
              onPress: h,
            }),
          })),
          (n[13] = h),
          (n[14] = L))
        : (L = n[14]);
      var E;
      return (
        n[15] !== S || n[16] !== L
          ? ((E = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              xstyle: p.container,
              children: [S, L],
            })),
            (n[15] = S),
            (n[16] = L),
            (n[17] = E))
          : (E = n[17]),
        E
      );
    }
    var f = r("withWAWebBizAdCreationSpecContext")(_, function (e) {
      return {
        legacyAccountID: e.adAccountData.legacyAccountID,
        name: e.adAccountData.name,
      };
    });
    l.default = f;
  },
  226,
);
