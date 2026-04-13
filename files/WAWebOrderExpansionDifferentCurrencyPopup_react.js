__d(
  "WAWebOrderExpansionDifferentCurrencyPopup.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Items can't have different currencies")
            : s._(
                /*BTDS*/ "Orders can't have items with different currencies",
              )),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: void 0,
              title: t,
              onOK: o("WAWebModalManager").closeModalManager,
              children: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                testid: void 0,
                children: o(
                  "WAWebBizGatingUtils",
                ).isOrderContentOptimizationEnabled()
                  ? s._(/*BTDS*/ "Make sure all items have the same currency.")
                  : s._(
                      /*BTDS*/ "Make sure all items in your order have the same currency.",
                    ),
              }),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.default = c;
  },
  226,
);
