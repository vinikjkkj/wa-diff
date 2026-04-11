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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(35),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.customLabel,
        s = i.defaultLabel,
        c = i.includeSearchInput,
        f = i.initialSelection,
        g = i.items,
        h = i.menuMaxHeight,
        y = i.menuMinWidth,
        C = i.popoverControllerRef,
        b = i.testid,
        v = i.theme,
        S = i.width,
        R = h === void 0 ? 350 : h,
        L = p(),
        E = L[0],
        k = L[1],
        I = g;
      if (E != null && E.length) {
        var T;
        (n[0] !== E
          ? ((T = function (t) {
              return o("WAWebSimpleSearch").simpleSearch(E, [
                t.menuItem.searchCriteria,
              ]);
            }),
            (n[0] = E),
            (n[1] = T))
          : (T = n[1]),
          (I = g.filter(T)));
      }
      var D = I,
        x = function (t) {
          var e, n;
          if ((l != null && (n = l(t)), n == null && t != null)) {
            var r = D.find(function (e) {
              return e.itemKey === t;
            });
            r != null && (n = r.menuItem.primary);
          }
          return (e = n != null ? n : s) != null ? e : "";
        },
        $ = m(null),
        P = r("useMergeRefs")(a, $),
        N = m(),
        M = C != null ? C : N,
        w = p(f),
        A = w[0],
        F = w[1],
        O = p(x(f)),
        B = O[0],
        W = O[1],
        q;
      n[2] !== M || n[3] !== x || n[4] !== i || n[5] !== F
        ? ((q = function (t) {
            var e,
              n = x(t);
            (W(n),
              F(t),
              i.onChange == null || i.onChange(t),
              (e = M.current) == null || e.hidePopover());
          }),
          (n[2] = M),
          (n[3] = x),
          (n[4] = i),
          (n[5] = F),
          (n[6] = q))
        : (q = n[6]);
      var U = q,
        V;
      n[7] !== A
        ? ((V = function (t) {
            return u.jsx(
              o("WAWebMenuItems.react").ActionMenuItem,
              babelHelpers.extends({}, t.menuItem, {
                detailRight:
                  t.itemKey === A
                    ? u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                        iconXstyle: _.tealColor,
                      })
                    : t.menuItem.detailRight,
              }),
            );
          }),
          (n[7] = A),
          (n[8] = V))
        : (V = n[8]);
      var H = V,
        G = p(y),
        z = G[0],
        j = G[1],
        K,
        Q;
      (n[9] !== y
        ? ((K = function () {
            if (y == null) {
              var e;
              j((e = $.current) == null ? void 0 : e.clientWidth);
            }
          }),
          (Q = [y]),
          (n[9] = y),
          (n[10] = K),
          (n[11] = Q))
        : ((K = n[10]), (Q = n[11])),
        d(K, Q));
      var X = m(null),
        Y;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = function () {
            var e;
            (e = X.current) == null || e.focus();
          }),
          (n[12] = Y))
        : (Y = n[12]);
      var J = Y,
        Z;
      n[13] !== D ||
      n[14] !== H ||
      n[15] !== U ||
      n[16] !== R ||
      n[17] !== z ||
      n[18] !== A
        ? ((Z = {
            data: D,
            material: !0,
            renderItem: H,
            initialActiveOptionId: A,
            onSelect: U,
            maxHeight: R,
            minWidth: z,
            reorderAnimationsEnabled: !1,
            setFocusRef: X,
          }),
          (n[13] = D),
          (n[14] = H),
          (n[15] = U),
          (n[16] = R),
          (n[17] = z),
          (n[18] = A),
          (n[19] = Z))
        : (Z = n[19]);
      var ee = Z,
        te;
      n[20] !== c || n[21] !== ee || n[22] !== k
        ? ((te =
            c === !0
              ? u.jsx(o("WAWebSearchInput").SearchInput, {
                  colorScheme: "darker",
                  onArrowDown: J,
                  onSearch: k,
                  padding: [16, 16, 8, 16],
                  children: u.jsx(
                    o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
                    babelHelpers.extends({}, ee),
                  ),
                })
              : u.jsx(
                  o("WAWebPerformantMenu.react").WDSPerformantMenu,
                  babelHelpers.extends({}, ee),
                )),
          (n[20] = c),
          (n[21] = ee),
          (n[22] = k),
          (n[23] = te))
        : (te = n[23]);
      var ne = te,
        re = S != null ? S : "100%",
        oe =
          v === "link-devices-screen" ? o("WDSThemes").WDSLightTheme : void 0,
        ae;
      n[24] !== M || n[25] !== ne || n[26] !== oe
        ? ((ae = u.jsx(o("WAWebDropdownV2.react").DropdownV2, {
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
            buffer: 4,
            controllerRef: M,
            initHandling: "click",
            material: !0,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            target: $,
            xstyle: oe,
            children: ne,
          })),
          (n[24] = M),
          (n[25] = ne),
          (n[26] = oe),
          (n[27] = ae))
        : (ae = n[27]);
      var ie;
      return (
        n[28] !== B ||
        n[29] !== P ||
        n[30] !== ae ||
        n[31] !== re ||
        n[32] !== b ||
        n[33] !== v
          ? ((ie = u.jsx(o("WAWebSelectButton.react").SelectButton, {
              label: B,
              ref: P,
              testid: void 0,
              theme: v,
              width: re,
              children: ae,
            })),
            (n[28] = B),
            (n[29] = P),
            (n[30] = ae),
            (n[31] = re),
            (n[32] = b),
            (n[33] = v),
            (n[34] = ie))
          : (ie = n[34]),
        ie
      );
    }
    l.Select = f;
  },
  98,
);
