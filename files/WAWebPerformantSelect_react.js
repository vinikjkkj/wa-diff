__d(
  "WAWebPerformantSelect.react",
  [
    "WAWebCheckmarkIcon.react",
    "WAWebDropdownV2.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebPerformantMenu.react",
    "WAWebSearchInput",
    "WAWebSelectButton.react",
    "WAWebSimpleSearch",
    "WDSThemes",
    "react",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = { tealColor: { color: "x1v5yvga", $$css: !0 } };
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.customLabel,
        l = a.defaultLabel,
        s = a.includeSearchInput,
        c = a.initialSelection,
        f = a.items,
        g = a.menuMaxHeight,
        h = g === void 0 ? 350 : g,
        y = a.menuMinWidth,
        C = a.popoverControllerRef,
        b = a.testid,
        v = a.theme,
        S = a.width,
        R = p(),
        L = R[0],
        E = R[1],
        k = f;
      L != null &&
        L.length &&
        (k = f.filter(function (e) {
          return o("WAWebSimpleSearch").simpleSearch(L, [
            e.menuItem.searchCriteria,
          ]);
        }));
      var I = k,
        T = function (t) {
          var e, n;
          if ((i != null && (n = i(t)), n == null && t != null)) {
            var r = I.find(function (e) {
              return e.itemKey === t;
            });
            r != null && (n = r.menuItem.primary);
          }
          return (e = n != null ? n : l) != null ? e : "";
        },
        D = m(null),
        x = r("useMergeRefs")(n, D),
        $ = m(),
        P = C != null ? C : $,
        N = p(c),
        M = N[0],
        w = N[1],
        A = p(T(c)),
        F = A[0],
        O = A[1],
        B = function (t) {
          var e,
            n = T(t);
          (O(n),
            w(t),
            a.onChange == null || a.onChange(t),
            (e = P.current) == null || e.hidePopover());
        },
        W = function (t) {
          return u.jsx(
            o("WAWebMenuItems.react").ActionMenuItem,
            babelHelpers.extends({}, t.menuItem, {
              detailRight:
                t.itemKey === M
                  ? u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                      iconXstyle: _.tealColor,
                    })
                  : t.menuItem.detailRight,
            }),
          );
        },
        q = p(y),
        U = q[0],
        V = q[1];
      d(
        function () {
          if (y == null) {
            var e;
            V((e = D.current) == null ? void 0 : e.clientWidth);
          }
        },
        [y],
      );
      var H = m(null),
        G = function () {
          var e;
          (e = H.current) == null || e.focus();
        },
        z = {
          data: I,
          material: !0,
          renderItem: W,
          initialActiveOptionId: M,
          onSelect: B,
          maxHeight: h,
          minWidth: U,
          reorderAnimationsEnabled: !1,
          setFocusRef: H,
        },
        j =
          s === !0
            ? u.jsx(o("WAWebSearchInput").SearchInput, {
                colorScheme: "darker",
                onArrowDown: G,
                onSearch: E,
                padding: [16, 16, 8, 16],
                children: u.jsx(
                  o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
                  babelHelpers.extends({}, z),
                ),
              })
            : u.jsx(
                o("WAWebPerformantMenu.react").WDSPerformantMenu,
                babelHelpers.extends({}, z),
              );
      return u.jsx(o("WAWebSelectButton.react").SelectButton, {
        label: F,
        ref: x,
        testid: void 0,
        theme: v,
        width: S != null ? S : "100%",
        children: u.jsx(o("WAWebDropdownV2.react").DropdownV2, {
          alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
          buffer: 4,
          controllerRef: P,
          initHandling: "click",
          material: !0,
          position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
          target: D,
          xstyle:
            v === "link-devices-screen" ? o("WDSThemes").WDSLightTheme : void 0,
          children: j,
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.Select = f));
  },
  98,
);
