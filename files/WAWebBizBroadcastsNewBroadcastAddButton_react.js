__d(
  "WAWebBizBroadcastsNewBroadcastAddButton.react",
  [
    "WAWebUnstyledButton.react",
    "WDSIconIcAdd.react",
    "WDSText.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useRef,
      d = u.useState,
      m = {
        addButtonContainer: {
          alignItems: "x6s0dn4",
          columnGap: "x1s70e7g",
          cursor: "x1ypdohk",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          width: "xh8yej3",
          $$css: !0,
        },
        addButtonContainerHovered: {
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          marginInlineStart: "x1ho36z8",
          marginInlineEnd: "xpuwrge",
          marginLeft: null,
          marginRight: null,
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          width: "x7g32hz",
          $$css: !0,
        },
      };
    function p(e) {
      var t = e.buttonLabel,
        n = e.contextMenu,
        o = e.onButtonClick,
        a = e.position,
        i = e.testid,
        l = c(null),
        u = d(!1),
        p = u[0],
        _ = u[1],
        f = r("useWDSMenu")({
          enableUIM: !1,
          menu: n,
          position: a,
          targetRef: l,
        }),
        g = f.isMenuOpen,
        h = f.menuPortal,
        y = f.openMenu;
      return s.jsxs(s.Fragment, {
        children: [
          s.jsxs(r("WAWebUnstyledButton.react"), {
            ref: l,
            "aria-expanded": g,
            "aria-haspopup": "menu",
            "aria-label": t,
            xstyle: [m.addButtonContainer, p && m.addButtonContainerHovered],
            onClick: function () {
              (o == null || o(), y());
            },
            onMouseEnter: function () {
              return _(!0);
            },
            onMouseLeave: function () {
              return _(!1);
            },
            testid: void 0,
            children: [
              s.jsx("div", {
                className:
                  "x6s0dn4 x4wrhlh x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 xc9qbxq xl56j7k x14qfxbe",
                children: s.jsx(r("WDSIconIcAdd.react"), { testid: void 0 }),
              }),
              s.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                testid: void 0,
                children: t,
              }),
            ],
          }),
          h,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
