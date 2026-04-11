__d(
  "WAWebListButton.react",
  [
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(14),
        n = e.children,
        a = e.id,
        i = e.onClick,
        l = e.testid,
        u = r("useWAWebActiveSelection")(e.active, a != null ? a : ""),
        d = u[0],
        m = u[1],
        p = m && c.active,
        _ = !m && c.hover,
        f;
      t[0] !== p || t[1] !== _
        ? ((f = [c.container, p, _]), (t[0] = p), (t[1] = _), (t[2] = f))
        : (f = t[2]);
      var g;
      t[3] !== n || t[4] !== e.isRefresh
        ? ((g =
            e.isRefresh === !0
              ? s.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
                  xstyle: c.textColorRefreshed,
                  children: n,
                })
              : n),
          (t[3] = n),
          (t[4] = e.isRefresh),
          (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== i || t[7] !== g
        ? ((h = s.jsx(r("WAWebUnstyledButton.react"), {
            xstyle: c.button,
            onClick: i,
            children: g,
          })),
          (t[6] = i),
          (t[7] = g),
          (t[8] = h))
        : (h = t[8]);
      var y;
      return (
        t[9] !== d || t[10] !== f || t[11] !== h || t[12] !== l
          ? ((y = s.jsx(o("WAWebFlex.react").FlexRow, {
              ref: d,
              xstyle: f,
              align: "center",
              justify: "center",
              testid: void 0,
              children: h,
            })),
            (t[9] = d),
            (t[10] = f),
            (t[11] = h),
            (t[12] = l),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    ((l.LIST_BUTTON_HEIGHT = u), (l.ListButton = d));
  },
  98,
);
