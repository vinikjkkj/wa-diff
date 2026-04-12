__d(
  "WAWebListFilterButton.react",
  [
    "WAWebABProps",
    "WAWebFlex.react",
    "WAWebListChatListFilterRightClickMenu.react",
    "WAWebNoop",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSChip.react",
    "WDSFocusStateStyles",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        filterRefreshed: {
          borderStartStartRadius: "xtf1z3e",
          borderStartEndRadius: "x18i4vdl",
          borderEndEndRadius: "x17ka9pb",
          borderEndStartRadius: "xaozknv",
          fontSize: "x6prxxf",
          fontWeight: "xo1l8bm",
          lineHeight: "x1btupbp",
          color: "xhslqc4",
          backgroundColor: "x1280gxy",
          boxShadow: "x1hdfv4t",
          $$css: !0,
        },
        filterHoverRefreshed: {
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        selectedRefreshed: {
          color: "xk4n5i7",
          backgroundColor: "x1abdmlv",
          $$css: !0,
        },
        drawerHeader: {
          backgroundColor: "x1hqk2wv",
          color: "xk4n5i7",
          borderTopColor: "xx42vgk",
          borderBottomColor: "x120ee7l",
          borderInlineEndColor: "xbogo7e",
          borderInlineStartColor: "x1vb5itz",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          ":disabled_color": "x1f47i5p",
          ":disabled_backgroundColor": "x182k0kv",
          ":disabled_cursor": "x1s07b3s",
          $$css: !0,
        },
        drawerHeaderDark: { backgroundColor: "xjbqb8w", $$css: !0 },
      };
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.count,
        l = a.disabled,
        s = a.endIcon,
        m = a.id,
        p = a.label,
        _ = a.listId,
        f = a.listType,
        g = a.onClick,
        h = a.onFocus,
        y = a.restrictSize,
        C = a.selected,
        b = a.startIcon,
        v = a.tabOrder,
        S = a.testIdSuffix,
        R = a.theme,
        L = R === void 0 ? "list-filter" : R,
        E = o("WAWebThemeContext").useIsDarkTheme(),
        k = c(null),
        I = o(
          "WAWebListChatListFilterRightClickMenu.react",
        ).allowToDisplayListFilterPillContextMenu(f),
        T = I
          ? o(
              "WAWebListChatListFilterRightClickMenu.react",
            ).buildFilterPillContextMenu(f, _)
          : null,
        D = r("useWDSMenu")({ targetRef: k, menu: T, enableUIM: !1 }),
        x = D.menuPortal,
        $ = D.openMenu,
        P = function (t) {
          !I || T == null || (t.preventDefault(), $(t));
        },
        N = i == null ? 0 : i,
        M = N > 0 ? { endNumber: N } : {};
      if (
        o("WAWebABProps").getABPropConfigValue("wds_web_chip") &&
        s == null &&
        !!b == !!a.startWDSIcon
      )
        return u.jsxs(u.Fragment, {
          children: [
            u.jsx("div", {
              ref: k,
              "data-testid": void 0,
              role: "none",
              onContextMenu: I ? P : void 0,
              children: u.jsx(
                r("WDSChip.react"),
                babelHelpers.extends(
                  {
                    tabOrder: Number(a.tabIndex) >= 0 ? v : void 0,
                    truncateText: !0,
                    ref: n,
                    id: m,
                    isDisabled: l,
                    label: p,
                  },
                  M,
                  {
                    isSelected: C,
                    onPress: function (t) {
                      g == null || g(t);
                    },
                    onFocus: h != null ? h : r("WAWebNoop"),
                    role: a.role,
                    "aria-selected": a["aria-selected"],
                    "aria-controls": a["aria-controls"],
                    Icon: a.startWDSIcon,
                    showEndDropdownIcon: a.showEndDropdownIcon,
                    testid: void 0,
                  },
                ),
              ),
            }),
            x,
          ],
        });
      var w = [
        o("WAWebUISpacing").uiPadding.vert6,
        o("WAWebUISpacing").uiPadding.horiz12,
      ];
      (w.push(
        d.filterRefreshed,
        o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
      ),
        C ? w.push(d.selectedRefreshed) : w.push(d.filterHoverRefreshed),
        L === "drawer-header" &&
          w.push(E ? [d.drawerHeader, d.drawerHeaderDark] : d.drawerHeader));
      var A = i != null && i > 0 ? " " + i : "";
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WAWebUnstyledButton.react"), {
            ref: n,
            testid: void 0,
            dataTab: v,
            onClick: g,
            onFocus: h,
            onContextMenu: I ? P : null,
            "aria-pressed": C,
            disabled: l,
            xstyle: w,
            id: a.id,
            role: a.role,
            "aria-selected": a["aria-selected"],
            "aria-controls": a["aria-controls"],
            tabIndex: a.tabIndex,
            children: u.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 8,
              align: "center",
              children: [
                b,
                u.jsxs(
                  "div",
                  babelHelpers.extends(
                    { "data-testid": void 0 },
                    {
                      0: {},
                      1: {
                        className: "x6ikm8r x10wlt62 xuxw1ft xlyipyv x1qh4rir",
                      },
                    }[!!y << 0],
                    { children: [p, A] },
                  ),
                ),
                s,
              ],
            }),
          }),
          x,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
