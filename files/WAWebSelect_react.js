__d(
  "WAWebSelect.react",
  [
    "WAWebDropdownV2.react",
    "WAWebMenuSearch.react",
    "WAWebSelectButton.react",
    "WAWebSelectMenuItem.react",
    "WAWebToArray",
    "WDSText.react",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.Children,
      m = c.useRef,
      p = c.useState;
    function _(t) {
      var n = o("react-compiler-runtime").c(35),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.ariaRoleDescription,
        s = i.children,
        c = i.customLabel,
        _ = i.defaultLabel,
        g = i.includeSearchInput,
        h = i.label,
        y = i.menuMaxHeight,
        C = i.menuMinWidth,
        b = i.popoverControllerRef,
        v = i.testid,
        S = i.theme,
        R = i.width,
        L;
      typeof R == "number" && (L = C != null ? Math.max(C, R) : R);
      var E = new Map(r("compactMap")(d.toArray(s), f)),
        k = function (t) {
          var e, n;
          if ((c != null && (n = c(t)), n == null && t != null && t.size)) {
            var o = r("compactMap")(Array.from(t), function (e) {
                var t,
                  n = (t = E.get(e)) == null ? void 0 : t.label;
                return n != null ? [n, ", "] : null;
              }),
              a = o.flat().slice(0, -1);
            n = a.length ? a : null;
          }
          return (e = n != null ? n : _) != null ? e : "";
        },
        I = m(null),
        T = r("useMergeRefs")(a, I),
        D = o("WAWebToArray").toArray(i.initialSelection),
        x = p(D),
        $ = x[0],
        P = x[1],
        N = p(k(new Set(D))),
        M = N[0],
        w = N[1],
        A;
      n[0] !== k || n[1] !== i || n[2] !== P
        ? ((A = function (t, n, r) {
            var e = k(r);
            (w(e),
              P(Array.from(r)),
              i.multiselect === !0
                ? i.onChange == null || i.onChange(t, r.has(t), new Set(r))
                : i.onChange == null || i.onChange(t));
          }),
          (n[0] = k),
          (n[1] = i),
          (n[2] = P),
          (n[3] = A))
        : (A = n[3]);
      var F = A,
        O;
      n[4] !== i.multiselect || n[5] !== $
        ? ((O =
            i.multiselect === !0
              ? { multiselect: !0, initialSelection: $ }
              : { multiselect: !1, initialSelection: $[0] }),
          (n[4] = i.multiselect),
          (n[5] = $),
          (n[6] = O))
        : (O = n[6]);
      var B = O,
        W = h != null && S === "about-20-screen",
        q;
      n[7] !== g
        ? ((q =
            g === !0
              ? u.jsx(o("WAWebMenuSearch.react").MenuSearchInput, {})
              : null),
          (n[7] = g),
          (n[8] = q))
        : (q = n[8]);
      var U;
      n[9] !== s || n[10] !== B || n[11] !== F
        ? ((U = u.jsx(
            o("WAWebSelectMenuItem.react").SelectMenuItemGroup,
            babelHelpers.extends({}, B, { onSelect: F, children: s }),
          )),
          (n[9] = s),
          (n[10] = B),
          (n[11] = F),
          (n[12] = U))
        : (U = n[12]);
      var V;
      n[13] !== L ||
      n[14] !== y ||
      n[15] !== b ||
      n[16] !== $[0] ||
      n[17] !== q ||
      n[18] !== U
        ? ((V = u.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
            target: I,
            controllerRef: b,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
            maxHeight: y,
            minWidth: L,
            initHandling: "click",
            initialActiveOptionId: $[0],
            children: [q, U],
          })),
          (n[13] = L),
          (n[14] = y),
          (n[15] = b),
          (n[16] = $[0]),
          (n[17] = q),
          (n[18] = U),
          (n[19] = V))
        : (V = n[19]);
      var H;
      n[20] !== l ||
      n[21] !== M ||
      n[22] !== T ||
      n[23] !== V ||
      n[24] !== v ||
      n[25] !== S ||
      n[26] !== R
        ? ((H = u.jsx(o("WAWebSelectButton.react").SelectButton, {
            ref: T,
            ariaRoleDescription: l,
            label: M,
            theme: S,
            width: R,
            testid: void 0,
            children: V,
          })),
          (n[20] = l),
          (n[21] = M),
          (n[22] = T),
          (n[23] = V),
          (n[24] = v),
          (n[25] = S),
          (n[26] = R),
          (n[27] = H))
        : (H = n[27]);
      var G = H;
      if (W) {
        var z, j;
        n[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = { className: "x1n2onr6 x1xmf6yo xh8yej3" }),
            (j = {
              className:
                "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
            }),
            (n[28] = z),
            (n[29] = j))
          : ((z = n[28]), (j = n[29]));
        var K;
        n[30] !== h
          ? ((K = u.jsx(
              "div",
              babelHelpers.extends({}, j, {
                children: u.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  children: h,
                }),
              }),
            )),
            (n[30] = h),
            (n[31] = K))
          : (K = n[31]);
        var Q;
        return (
          n[32] !== G || n[33] !== K
            ? ((Q = u.jsxs(
                "div",
                babelHelpers.extends({}, z, { children: [K, G] }),
              )),
              (n[32] = G),
              (n[33] = K),
              (n[34] = Q))
            : (Q = n[34]),
          Q
        );
      }
      return G;
    }
    function f(e) {
      var t = e.props,
        n = t.optionId,
        r = t.primary;
      return n == null ? null : [n, { optionId: n, label: r }];
    }
    l.Select = _;
  },
  98,
);
