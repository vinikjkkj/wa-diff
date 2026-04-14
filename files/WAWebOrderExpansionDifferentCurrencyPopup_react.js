__d(
  "WAWebOrderExpansionDifferentCurrencyPopup.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        title: o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
          ? s._(/*BTDS*/ "Items can't have different currencies")
          : s._(/*BTDS*/ "Orders can't have items with different currencies"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
          testid: void 0,
          children: o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Make sure all items have the same currency.")
            : s._(
                /*BTDS*/ "Make sure all items in your order have the same currency.",
              ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
