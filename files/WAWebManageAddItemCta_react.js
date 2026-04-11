__d(
  "WAWebManageAddItemCta.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebNoop",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        addIcon: {
          position: "x1n2onr6",
          width: "x1d7z9mz",
          height: "x14baz6b",
          borderTopWidth: "xamhcws",
          borderInlineEndWidth: "x1alpsbp",
          borderBottomWidth: "xlxy82",
          borderInlineStartWidth: "xyumdvf",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1vynwtf",
          borderInlineEndColor: "xxmg6um",
          borderBottomColor: "x1j5b3ru",
          borderInlineStartColor: "x1mov0ff",
          borderStartStartRadius: "xrxyp3c",
          borderStartEndRadius: "xv0oops",
          borderEndEndRadius: "x1isl5vh",
          borderEndStartRadius: "xn8zj9a",
          "::before_position": "x1hmns74",
          "::before_top": "x1knuo7r",
          "::before_left": "xgdch9p",
          "::before_insetInlineStart": null,
          "::before_insetInlineEnd": null,
          "::before_display": "x1fgarty",
          "::before_width": "x1j6c3ea",
          "::before_height": "xv7f310",
          "::before_content": "x1cpjm7i",
          "::before_backgroundColor": "x1oi0s10",
          "::before_transform": "xbnewub",
          "::after_position": "x1j6awrg",
          "::after_top": "xoqv437",
          "::after_left": "x16v8oms",
          "::after_insetInlineStart": null,
          "::after_insetInlineEnd": null,
          "::after_display": "xhkezso",
          "::after_width": "xqysinb",
          "::after_height": "x6giem4",
          "::after_content": "x1s928wv",
          "::after_backgroundColor": "xwvaqp7",
          "::after_transform": "x128ww4c",
          $$css: !0,
        },
        addItemButton: { borderTopStyle: "x1ejq31n", $$css: !0 },
        themeCollections: {
          borderTopStyle: "x1ejq31n",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.onClick,
        i = t.testid,
        l = i === void 0 ? "add-item" : i,
        u;
      n[0] !== t.theme
        ? ((u = (e || (e = r("stylex")))(
            d.addItemButton,
            t.theme === "default" && o("WAWebUISpacing").uiPadding.vert15,
            t.theme === "default" && o("WAWebUISpacing").uiMargin.top8,
            t.theme === "in-list" && o("WAWebUISpacing").uiPadding.vert8,
            t.theme === "in-list" && o("WAWebUISpacing").uiPadding.horiz15,
            t.theme === "collections" && d.themeCollections,
            t.theme === "collections" && o("WAWebUISpacing").uiPadding.vert8,
            t.theme === "collections" && o("WAWebUISpacing").uiPadding.horiz15,
            t.theme === "collections" && o("WAWebUISpacing").uiMargin.bottom1,
          )),
          (n[0] = t.theme),
          (n[1] = u))
        : (u = n[1]);
      var m = u,
        p;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Add new item")), (n[2] = p))
        : (p = n[2]);
      var _;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = c.jsx(r("WAWebUnstyledButton.react"), {
            title: p,
            onClick: r("WAWebNoop"),
            xstyle: [
              d.addIcon,
              o("WAWebUISpacing").uiMargin.start12,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ],
            children: c.jsx(c.Fragment, {}),
          })),
          (n[3] = _))
        : (_ = n[3]);
      var f = _,
        g;
      if (n[4] !== t.title) {
        var h;
        ((g = (h = t.title) != null ? h : s._(/*BTDS*/ "Add new item")),
          (n[4] = t.title),
          (n[5] = g));
      } else g = n[5];
      var y;
      return (
        n[6] !== m || n[7] !== a || n[8] !== t.idle || n[9] !== g || n[10] !== l
          ? ((y = c.jsx(r("WAWebCellFrame.react"), {
              theme: "add-item",
              image: f,
              customImage: !0,
              primary: g,
              className: m,
              onClick: a,
              idle: t.idle,
              testid: void 0,
            })),
            (n[6] = m),
            (n[7] = a),
            (n[8] = t.idle),
            (n[9] = g),
            (n[10] = l),
            (n[11] = y))
          : (y = n[11]),
        y
      );
    }
    l.default = m;
  },
  226,
);
