__d(
  "WAWebMenuItem.react",
  [
    "WAWebMenuController.react",
    "WAWebNoop",
    "WAWebUnstyledButton.react",
    "err",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n = o("WAWebMenuController.react").useMenu();
      if (n == null)
        throw r("err")("[Menu] MenuItem must be a child of a MenuItemList");
      var a = (n == null ? void 0 : n.activeItemId) === e,
        i;
      t[0] !== n.filteredItems || t[1] !== e
        ? ((i = n.filteredItems != null && n.filteredItems.has(e) === !1),
          (t[0] = n.filteredItems),
          (t[1] = e),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== n || t[4] !== a || t[5] !== i
          ? ((l = {
              menu: n,
              colorScheme: n.colorScheme,
              size: n.size,
              isActive: a,
              isFiltered: i,
              material: n.material,
              allowTabNavigation: n.allowTabNavigation,
              border: n.border,
              useLegacyDesign: n.useLegacyDesign,
            }),
            (t[3] = n),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function _(e, t) {
      return (o("WAWebMenuController.react").useRegisterItem(e, t), p(e));
    }
    var f = {
      container: {
        textAlign: "x1yc453h",
        overflowX: "x6ikm8r",
        overflowY: "x10wlt62",
        display: "x78zum5",
        flexGrow: "x1iyjqo2",
        flexShrink: "x2lah0s",
        flexBasis: "xdl72j9",
        alignSelf: "xkh2ocl",
        width: "xh8yej3",
        $$css: !0,
      },
      disabled: { cursor: "x1h6gzvc", $$css: !0 },
    };
    function g(t) {
      var n = o("react-compiler-runtime").c(36),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.ariaLabel,
        c = l.children,
        p = l.disabled,
        g = l.onActive,
        h = l.onInactive,
        y = l.onSelect,
        C = l.optionId,
        b = l.primary,
        v = l.searchCriteria,
        S = l.testid,
        R = l.type,
        L = R === void 0 ? "action" : R,
        E = m(null),
        k = r("useMergeRefs")(E, i),
        I = p !== !0 ? y : r("WAWebNoop"),
        T;
      n[3] !== C || n[4] !== b || n[5] !== v || n[6] !== I || n[7] !== L
        ? ((T = {
            id: C,
            type: L,
            label: b,
            searchCriteria: v,
            onSelect: I,
            ref: E,
          }),
          (n[3] = C),
          (n[4] = b),
          (n[5] = v),
          (n[6] = I),
          (n[7] = L),
          (n[8] = T))
        : (T = n[8]);
      var D = _(C, T),
        x = D.allowTabNavigation,
        $ = D.isActive,
        P = D.isFiltered,
        N = D.menu,
        M = r("useWAWebPrevious")($),
        w,
        A;
      if (
        (n[9] !== $ || n[10] !== g || n[11] !== h || n[12] !== M
          ? ((w = function () {
              $ === !0 && M !== !0
                ? g == null || g()
                : $ === !1 && M === !0 && (h == null || h());
            }),
            (A = [$, M, g, h]),
            (n[9] = $),
            (n[10] = g),
            (n[11] = h),
            (n[12] = M),
            (n[13] = w),
            (n[14] = A))
          : ((w = n[13]), (A = n[14])),
        d(w, A),
        P === !0)
      )
        return null;
      var F;
      n[15] !== N || n[16] !== C
        ? ((F = function (t) {
            (t.stopPropagation(), N.selectItem(C));
          }),
          (n[15] = N),
          (n[16] = C),
          (n[17] = F))
        : (F = n[17]);
      var O = F,
        B;
      n[18] !== N || n[19] !== C
        ? ((B = function () {
            N.activateItem(C);
          }),
          (n[18] = N),
          (n[19] = C),
          (n[20] = B))
        : (B = n[20]);
      var W = B,
        q;
      n[21] !== N
        ? ((q = function () {
            N.activateItem(null);
          }),
          (n[21] = N),
          (n[22] = q))
        : (q = n[22]);
      var U = q,
        V = p === !0 && f.disabled,
        H;
      n[23] !== V
        ? ((H = [f.container, V]), (n[23] = V), (n[24] = H))
        : (H = n[24]);
      var G = p !== !0 ? O : null,
        z = x ? 0 : -1,
        j = x ? 0 : -1,
        K = x ? W : null,
        Q = x ? U : null,
        X;
      return (
        n[25] !== s ||
        n[26] !== c ||
        n[27] !== k ||
        n[28] !== H ||
        n[29] !== G ||
        n[30] !== z ||
        n[31] !== j ||
        n[32] !== K ||
        n[33] !== Q ||
        n[34] !== S
          ? ((X = u.jsx(r("WAWebUnstyledButton.react"), {
              ref: k,
              role: "listitem",
              xstyle: H,
              onClick: G,
              tabIndex: z,
              dataTab: j,
              testid: void 0,
              onFocus: K,
              onBlur: Q,
              "aria-label": s,
              children: c,
            })),
            (n[25] = s),
            (n[26] = c),
            (n[27] = k),
            (n[28] = H),
            (n[29] = G),
            (n[30] = z),
            (n[31] = j),
            (n[32] = K),
            (n[33] = Q),
            (n[34] = S),
            (n[35] = X))
          : (X = n[35]),
        X
      );
    }
    ((l.useMenuItem = p), (l.WAWebMenuItem = g));
  },
  98,
);
