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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(13),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.count,
        s = i.disabled,
        m = i.endIcon,
        p = i.id,
        _ = i.label,
        f = i.listId,
        g = i.listType,
        h = i.onClick,
        y = i.onFocus,
        C = i.restrictSize,
        b = i.selected,
        v = i.startIcon,
        S = i.tabOrder,
        R = i.testIdSuffix,
        L = i.theme,
        E = L === void 0 ? "list-filter" : L,
        k = o("WAWebThemeContext").useIsDarkTheme(),
        I = c(null),
        T = o(
          "WAWebListChatListFilterRightClickMenu.react",
        ).allowToDisplayListFilterPillContextMenu(g),
        D = T
          ? o(
              "WAWebListChatListFilterRightClickMenu.react",
            ).buildFilterPillContextMenu(g, f)
          : null,
        x = r("useWDSMenu")({ targetRef: I, menu: D, enableUIM: !1 }),
        $ = x.menuPortal,
        P = x.openMenu,
        N = function (t) {
          !T || D == null || (t.preventDefault(), P(t));
        },
        M = l == null ? 0 : l,
        w;
      n[0] !== M
        ? ((w = M > 0 ? { endNumber: M } : {}), (n[0] = M), (n[1] = w))
        : (w = n[1]);
      var A = w;
      if (
        o("WAWebABProps").getABPropConfigValue("wds_web_chip") &&
        m == null &&
        !!v == !!i.startWDSIcon
      )
        return u.jsxs(u.Fragment, {
          children: [
            u.jsx("div", {
              ref: I,
              "data-testid": void 0,
              role: "none",
              onContextMenu: T ? N : void 0,
              children: u.jsx(
                r("WDSChip.react"),
                babelHelpers.extends(
                  {
                    tabOrder: Number(i.tabIndex) >= 0 ? S : void 0,
                    truncateText: !0,
                    ref: a,
                    id: p,
                    isDisabled: s,
                    label: _,
                  },
                  A,
                  {
                    isSelected: b,
                    onPress: function (t) {
                      h == null || h(t);
                    },
                    onFocus: y != null ? y : r("WAWebNoop"),
                    role: i.role,
                    "aria-selected": i["aria-selected"],
                    "aria-controls": i["aria-controls"],
                    Icon: i.startWDSIcon,
                    showEndDropdownIcon: i.showEndDropdownIcon,
                    testid: void 0,
                  },
                ),
              ),
            }),
            $,
          ],
        });
      var F = [
        o("WAWebUISpacing").uiPadding.vert6,
        o("WAWebUISpacing").uiPadding.horiz12,
      ];
      if (
        (F.push(
          d.filterRefreshed,
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        ),
        b ? F.push(d.selectedRefreshed) : F.push(d.filterHoverRefreshed),
        E === "drawer-header")
      ) {
        var O;
        (n[2] !== k
          ? ((O = k ? [d.drawerHeader, d.drawerHeaderDark] : d.drawerHeader),
            (n[2] = k),
            (n[3] = O))
          : (O = n[3]),
          F.push(O));
      }
      var B = l != null && l > 0 ? " " + l : "",
        W = i.id,
        q = i.role,
        U = i["aria-selected"],
        V = i["aria-controls"],
        H = i.tabIndex,
        G = o("WAWebFlex.react").FlexRow,
        z = 8,
        j = "center",
        K = "list-filter-button-text",
        Q = {
          0: {},
          1: { className: "x6ikm8r x10wlt62 xuxw1ft xlyipyv x1qh4rir" },
        }[!!C << 0],
        X;
      n[4] !== B || n[5] !== _ || n[6] !== Q
        ? ((X = u.jsxs(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, Q, {
              children: [_, B],
            }),
          )),
          (n[4] = B),
          (n[5] = _),
          (n[6] = Q),
          (n[7] = X))
        : (X = n[7]);
      var Y;
      return (
        n[8] !== G || n[9] !== m || n[10] !== v || n[11] !== X
          ? ((Y = u.jsxs(G, { columnGap: z, align: j, children: [v, X, m] })),
            (n[8] = G),
            (n[9] = m),
            (n[10] = v),
            (n[11] = X),
            (n[12] = Y))
          : (Y = n[12]),
        u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WAWebUnstyledButton.react"), {
              ref: a,
              testid: void 0,
              dataTab: S,
              onClick: h,
              onFocus: y,
              onContextMenu: T ? N : null,
              "aria-pressed": b,
              disabled: s,
              xstyle: F,
              id: W,
              role: q,
              "aria-selected": U,
              "aria-controls": V,
              tabIndex: H,
              children: Y,
            }),
            $,
          ],
        })
      );
    }
    l.default = m;
  },
  98,
);
