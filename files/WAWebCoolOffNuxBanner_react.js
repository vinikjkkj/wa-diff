__d(
  "WAWebCoolOffNuxBanner.react",
  ["WDSBanner.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.actionText,
        a = e.bannerTextTestid,
        i = e.icon,
        l = e.nuxManager,
        c = e.onClick,
        d = e.onDismiss,
        m = e.subtitle,
        p = e.title,
        _ = u(!0),
        f = _[0],
        g = _[1];
      l.show();
      var h;
      t[0] !== l || t[1] !== d
        ? ((h = function () {
            (l.dismiss(), d == null || d(), g(!1));
          }),
          (t[0] = l),
          (t[1] = d),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] !== l || t[4] !== c
        ? ((C = function () {
            (l.click(), c == null || c());
          }),
          (t[3] = l),
          (t[4] = c),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v;
      t[6] !== n ||
      t[7] !== a ||
      t[8] !== b ||
      t[9] !== y ||
      t[10] !== i ||
      t[11] !== c ||
      t[12] !== f ||
      t[13] !== m ||
      t[14] !== p
        ? ((v =
            f &&
            s.jsx("div", {
              className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
              children: s.jsx(r("WDSBanner.react"), {
                type: "default",
                title: m != null ? p : void 0,
                body: m != null ? m : p,
                actionText: n,
                icon: i,
                onAction: c != null ? b : void 0,
                onDismiss: y,
                testid: void 0,
              }),
            })),
          (t[6] = n),
          (t[7] = a),
          (t[8] = b),
          (t[9] = y),
          (t[10] = i),
          (t[11] = c),
          (t[12] = f),
          (t[13] = m),
          (t[14] = p),
          (t[15] = v))
        : (v = t[15]);
      var S;
      return (
        t[16] !== v
          ? ((S = s.jsx(s.Fragment, { children: v })), (t[16] = v), (t[17] = S))
          : (S = t[17]),
        S
      );
    }
    l.default = c;
  },
  98,
);
