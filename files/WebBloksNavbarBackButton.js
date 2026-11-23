__d(
  "WebBloksNavbarBackButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksStyle",
    "WebBloksTheme",
    "react",
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
      var t = e.onClick,
        n = o("WebBloksTheme").useTheme().getTheme(),
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.objectSet,
        l =
          n === o("WebBloksTheme").THEME.light
            ? i.getAsset("chevronLeft")
            : i.getAsset("chevronLeftDark");
      return s.jsx("div", {
        className: u.backButton,
        children: s.jsx(r("WebBloksAbstractButton"), {
          trailing: !0,
          icon: l,
          accessibility_label: "Back",
          onClick: t,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
