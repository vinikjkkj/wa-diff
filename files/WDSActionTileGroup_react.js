__d(
  "WDSActionTileGroup.react",
  ["Locale", "WALogger", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = r("react")),
      c = {
        container: {
          display: "x78zum5",
          width: "xh8yej3",
          justifyContent: "xl56j7k",
          columnGap: "x1s70e7g",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          boxSizing: "x9f619",
          $$css: !0,
        },
      },
      d = o("Locale").isRTL();
    function m(t) {
      var n = t.children,
        r = t.testid,
        a = u.Children.count(n);
      if (a < 2 || a > 5) {
        o("WALogger")
          .DEV(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Expected between 2 and 5 WDSActionTile components, but received ",
                ".",
              ])),
            a,
          )
          .tags("wds")
          .devConsole(t);
        return;
      }
      return u.jsx(o("react-strict-dom").html.div, {
        dir: d ? "rtl" : "ltr",
        style: c.container,
        "data-testid": void 0,
        children: n,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
