__d(
  "WAWebMAIBAPrimaryRedirectPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = s._(
          /*BTDS*/ "AI knowledge isn't available on the web, but you can manage your AI's new knowledge using WhatsApp Business app on your primary device.",
        ),
        t = u.jsx(o("WAWebText.react").WAWebTextSmall, {
          testid: void 0,
          children: e,
        });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "mai-ba-primary-redirect",
        },
        title: s._(/*BTDS*/ "Use a mobile device to manage knowledge"),
        okText: s._(/*BTDS*/ "OK"),
        onOK: o("WAWebModalManager").closeModalManager,
        children: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
