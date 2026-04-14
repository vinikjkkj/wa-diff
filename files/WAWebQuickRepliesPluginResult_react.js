__d(
  "WAWebQuickRepliesPluginResult.react",
  ["WAWebUISpacing", "WDSText.react", "react", "stylex", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        quickReplyResult: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          fontSize: "x1nxh6w3",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        quickReplyResultSelected: {
          color: "x14ug900",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("useWAWebModelValues").useModelValues(t.quickReply, [
          "shortcut",
          "message",
        ]),
        a = n.message,
        i = n.shortcut,
        l = t.onMouseDown,
        s = t.onMouseEnter,
        d = t.onMouseUp,
        m = t.query,
        p = t.selected,
        _ = i.slice(m.length),
        f = [
          c.quickReplyResult,
          o("WAWebUISpacing").uiPadding.vert10,
          o("WAWebUISpacing").uiPadding.horiz8,
        ];
      return (
        p === !0 && f.push(c.quickReplyResultSelected),
        u.jsx(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(f), {
            onMouseDown: l,
            onMouseUp: d,
            onMouseEnter: s,
            "data-testid": void 0,
            children: u.jsxs("div", {
              className: "x78zum5 xeuugli xdt5ytf xh8yej3",
              children: [
                u.jsxs("div", {
                  className: "x78zum5 x6s0dn4",
                  children: [
                    u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: m,
                    }),
                    u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: _,
                    }),
                  ],
                }),
                u.jsx("div", {
                  "data-testid": void 0,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: a,
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
