__d(
  "WebBloksNavbarBackButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "WebBloksTheme",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksStyle").createStyles({
        backButton: {
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          flexGrow: 0,
          flexDirection: "row",
          justifyContent: "center",
        },
      });
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onClick,
        a = o("WebBloksTheme").useTheme(),
        i;
      t[0] !== a ? ((i = a.getTheme()), (t[0] = a), (t[1] = i)) : (i = t[1]);
      var l = i,
        c = o("WebBloksComponentContext").useWebBloksContext(),
        d = c.objectSet,
        m;
      t[2] !== d || t[3] !== l
        ? ((m =
            l === o("WebBloksTheme").THEME.light
              ? d.getAsset("chevronLeft")
              : d.getAsset("chevronLeftDark")),
          (t[2] = d),
          (t[3] = l),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      return (
        t[5] !== p || t[6] !== n
          ? ((_ = s.jsx("div", {
              className: u.backButton,
              children: s.jsx(r("WebBloksAbstractButton"), {
                trailing: !0,
                icon: p,
                accessibility_label: "Back",
                onClick: n,
              }),
            })),
            (t[5] = p),
            (t[6] = n),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    l.default = c;
  },
  98,
);
