__d(
  "WAWebListButton.react",
  [
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "react",
    "useWAWebActiveSelection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 60,
      c = {
        container: {
          height: "xng8ra",
          fontSize: "x1jchvi3",
          paddingInlineStart: "xbcx4z0",
          color: "x1v5yvga",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        hover: { ":hover_backgroundColor": "x17gydlx", $$css: !0 },
        active: { backgroundColor: "x4wrhlh", $$css: !0 },
        button: {
          width: "xh8yej3",
          height: "x5yr21d",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        textColorRefreshed: { color: "x1v5yvga", $$css: !0 },
      };
    function d(e) {
      var t = e.children,
        n = e.id,
        a = e.onClick,
        i = e.testid,
        l = r("useWAWebActiveSelection")(e.active, n != null ? n : ""),
        u = l[0],
        d = l[1];
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        ref: u,
        xstyle: [c.container, d && c.active, !d && c.hover],
        align: "center",
        justify: "center",
        testid: void 0,
        children: s.jsx(r("WAWebUnstyledButton.react"), {
          xstyle: c.button,
          onClick: a,
          children:
            e.isRefresh === !0
              ? s.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
                  xstyle: c.textColorRefreshed,
                  children: t,
                })
              : t,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.LIST_BUTTON_HEIGHT = u),
      (l.ListButton = d));
  },
  98,
);
