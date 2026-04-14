__d(
  "WAWebPhoneNumberPrivacyNux.react",
  [
    "WAWebConfirmPopup.react",
    "WAWebPnhSelfDisplayName.react",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.cancelText,
        n = e.customContent,
        a = e.displayName,
        i = e.okButtonType,
        l = e.okText,
        u = e.onCancel,
        c = e.onOK,
        d = e.pictureWid,
        m = e.subTitle,
        p = e.testid,
        _ = e.title;
      return s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "phone-number-privacy-nux",
        },
        onOK: c,
        okText: l,
        onCancel: u,
        cancelText: t,
        okButtonType: i,
        testid: void 0,
        children: s.jsxs("div", {
          className:
            "x1anpbxc x1wcu8vx xyorhqc x1ult018 x9f619 x78zum5 xdt5ytf xl56j7k x6s0dn4",
          children: [
            !r("isStringNullOrEmpty")(a) &&
              s.jsx(r("WAWebPnhSelfDisplayName.react"), {
                displayName: a,
                pictureWid: d,
              }),
            s.jsx("div", {
              className:
                "xh8yej3 x1aueamr x98l61r x14z9mp x1ua1l7f x1lziwak x1hkbg2g x1s688f x14ug900 x2b8uid",
              children: _,
            }),
            m != null &&
              s.jsx("div", {
                className: "x1jchvi3 xefnzgg xo1l8bm x1xet1wb xhslqc4 x2b8uid",
                children: m,
              }),
            n,
          ],
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
