__d(
  "WAWebContactInfoLinkedAccountRow.react",
  [
    "WAWebBusinessLogEvents",
    "WAWebCellFrame.react",
    "WAWebDrawerContext",
    "WAWebExternalLink.react",
    "WAWebProductCatalogContext",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = { button: { width: "xh8yej3", $$css: !0 } };
    function p(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.Icon,
        a = e.hasCoverPhoto,
        i = e.href,
        l = e.linkedAccountType,
        u = e.onClick,
        p = e.rowTheme,
        _ = e.secondary,
        f = e.text,
        g = c(o("WAWebDrawerContext").DrawerContext),
        h;
      t[0] !== g
        ? ((h = o("WAWebProductCatalogContext").getProductCatalogSessionId(g)),
          (t[0] = g),
          (t[1] = h))
        : (h = t[1]);
      var y = h,
        C,
        b;
      (t[2] !== y || t[3] !== a || t[4] !== l
        ? ((C = function () {
            o("WAWebBusinessLogEvents").logLinkedAccountImpression(y, l, a);
          }),
          (b = [y, l, a]),
          (t[2] = y),
          (t[3] = a),
          (t[4] = l),
          (t[5] = C),
          (t[6] = b))
        : ((C = t[5]), (b = t[6])),
        d(C, b));
      var v;
      t[7] !== i || t[8] !== u
        ? ((v = function (t) {
            i !== void 0 &&
              (o("WAWebExternalLink.react").openExternalLink(i),
              u == null || u());
          }),
          (t[7] = i),
          (t[8] = u),
          (t[9] = v))
        : (v = t[9]);
      var S = v,
        R = i === void 0,
        L = i === void 0,
        E;
      t[10] !== n || t[11] !== p || t[12] !== _ || t[13] !== L || t[14] !== f
        ? ((E = s.jsx(r("WAWebCellFrame.react"), {
            image: n,
            primary: f,
            secondary: _,
            theme: p,
            idle: L,
          })),
          (t[10] = n),
          (t[11] = p),
          (t[12] = _),
          (t[13] = L),
          (t[14] = f),
          (t[15] = E))
        : (E = t[15]);
      var k;
      return (
        t[16] !== S || t[17] !== R || t[18] !== E
          ? ((k = s.jsx(r("WAWebUnstyledButton.react"), {
              testid: void 0,
              onClick: S,
              disabled: R,
              xstyle: m.button,
              children: E,
            })),
            (t[16] = S),
            (t[17] = R),
            (t[18] = E),
            (t[19] = k))
          : (k = t[19]),
        k
      );
    }
    l.default = p;
  },
  98,
);
