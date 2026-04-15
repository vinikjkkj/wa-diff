__d(
  "WAWebBizAdCreationPaymentDescription.react",
  [
    "CometRelay",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationPaymentDescriptionData.graphql",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdLogger",
    "WAWebClickableLink.react",
    "WAWebFlex.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationPaymentDescriptionData.graphql"));
    function _(e, t) {
      return (e == null ? void 0 : e.label) == null
        ? null
        : u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentActionEmphasized",
            children: u.jsxs("span", {
              children: [
                " ",
                u.jsx(r("WAWebClickableLink.react"), {
                  onClick: function () {
                    return void t(e);
                  },
                  children: e.label,
                }),
              ],
            }),
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        a = o("react-compiler-runtime").c(13),
        i = e.openBillingWizard,
        l = e.paymentSectionRef,
        s = o("CometRelay").useFragment(p, l),
        c = m(r("WAWebBizAdCreationLoggerContext")),
        d = m(r("WAWebBizAdCreationSpecContext")),
        f =
          d == null ||
          (t = d.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        g;
      a[0] !== f || a[1] !== c || a[2] !== i
        ? ((g = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (c != null &&
                  r("WAWebBizAdLogger").log({
                    event: "click_change_payment_link",
                    loggerContext: c,
                    adAccountID: f,
                  }),
                  yield i(e));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[0] = f),
          (a[1] = c),
          (a[2] = i),
          (a[3] = g))
        : (g = a[3]);
      var h = g;
      if (s.description == null) return null;
      var y;
      a[4] !== s.description || a[5] !== s.descriptionAx
        ? ((y = u.jsx("span", {
            "aria-label": s.descriptionAx,
            children: s.description,
          })),
          (a[4] = s.description),
          (a[5] = s.descriptionAx),
          (a[6] = y))
        : (y = a[6]);
      var C;
      a[7] !== s.inlineAction || a[8] !== h
        ? ((C = _(s.inlineAction, h)),
          (a[7] = s.inlineAction),
          (a[8] = h),
          (a[9] = C))
        : (C = a[9]);
      var b;
      return (
        a[10] !== y || a[11] !== C
          ? ((b = u.jsx(o("WAWebFlex.react").FlexRow, {
              children: u.jsxs(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: [y, C],
              }),
            })),
            (a[10] = y),
            (a[11] = C),
            (a[12] = b))
          : (b = a[12]),
        b
      );
    }
    l.default = f;
  },
  98,
);
