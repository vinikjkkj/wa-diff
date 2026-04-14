__d(
  "WAWebOrderExpansionNotSupportedPopup.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = o("WAWebFrontendContactGetters").getFormattedUser(t.contact);
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "order-expansion-not-supported",
        },
        testid: void 0,
        title: o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
          ? s._(/*BTDS*/ "Couldn't charge buyer")
          : s._(/*BTDS*/ "Couldn't create order"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
          testid: void 0,
          children: o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(
                /*BTDS*/ "This feature isn't available in {contact-name}'s location.",
                [s._param("contact-name", n)],
              )
            : s._(
                /*BTDS*/ "Orders aren't available in {contact-name}'s location.",
                [s._param("contact-name", n)],
              ),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
