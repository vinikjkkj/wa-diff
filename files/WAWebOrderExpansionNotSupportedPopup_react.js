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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        r;
      t[0] !== n.contact
        ? ((r = o("WAWebFrontendContactGetters").getFormattedUser(n.contact)),
          (t[0] = n.contact),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            surface: "unknown",
            viewName: "order-expansion-not-supported",
          }),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
            ? s._(/*BTDS*/ "Couldn't charge buyer")
            : s._(/*BTDS*/ "Couldn't create order")),
          (t[3] = l))
        : (l = t[3]);
      var c;
      return (
        t[4] !== a
          ? ((c = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: i,
              testid: void 0,
              title: l,
              onOK: o("WAWebModalManager").closeModalManager,
              children: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                testid: void 0,
                children: o(
                  "WAWebBizGatingUtils",
                ).isOrderContentOptimizationEnabled()
                  ? s._(
                      /*BTDS*/ "This feature isn't available in {contact-name}'s location.",
                      [s._param("contact-name", a)],
                    )
                  : s._(
                      /*BTDS*/ "Orders aren't available in {contact-name}'s location.",
                      [s._param("contact-name", a)],
                    ),
              }),
            })),
            (t[4] = a),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = c;
  },
  226,
);
