__d(
  "BaseTooltipGroup.react",
  [
    "BaseAnchorPositioningUtils",
    "BaseTooltipTargetWrapper.react",
    "FBLogger",
    "react",
    "react-compiler-runtime",
    "useBaseAnchorElement",
    "useDelayedState",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "disabled",
        "hideDelayMs",
        "showDelayMs",
        "children",
        "forceInlineDisplay",
        "onVisibilityChange",
        "persistAfterClick",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useId,
      _ = c.useMemo,
      f = c.useRef,
      g = c.useState,
      h = u.createContext(null);
    function y(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.children,
        a = e.tooltipImpl,
        i = r("useDelayedState")(!1),
        l = i[0],
        s = i[1],
        c = g(null),
        d = c[0],
        m = c[1],
        _ = p(),
        f;
      t[0] !== d || t[1] !== l || t[2] !== s || t[3] !== _ || t[4] !== a
        ? ((f = {
            activeContentKey: d,
            isVisible: l,
            onHide: function (t, n) {
              s(!1, t, n);
            },
            onShow: function (t, n, r) {
              (m(t), s(!0, n, r));
            },
            tooltipIdentifier: _,
            tooltipImpl: a,
          }),
          (t[0] = d),
          (t[1] = l),
          (t[2] = s),
          (t[3] = _),
          (t[4] = a),
          (t[5] = f))
        : (f = t[5]);
      var y = f,
        C;
      return (
        t[6] !== n || t[7] !== y
          ? ((C = u.jsx(h.Provider, { value: y, children: n })),
            (t[6] = n),
            (t[7] = y),
            (t[8] = C))
          : (C = t[8]),
        C
      );
    }
    var C = 0,
      b = {};
    function v() {
      return "tooltip-" + C++;
    }
    function S(t) {
      var n,
        a = o("react-compiler-runtime").c(46),
        i,
        l,
        s,
        c,
        d,
        p,
        _,
        g;
      a[0] !== t
        ? ((_ = t.disabled),
          (s = t.hideDelayMs),
          (p = t.showDelayMs),
          (i = t.children),
          (l = t.forceInlineDisplay),
          (c = t.onVisibilityChange),
          (d = t.persistAfterClick),
          (g = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = s),
          (a[4] = c),
          (a[5] = d),
          (a[6] = p),
          (a[7] = _),
          (a[8] = g))
        : ((i = a[1]),
          (l = a[2]),
          (s = a[3]),
          (c = a[4]),
          (d = a[5]),
          (p = a[6]),
          (_ = a[7]),
          (g = a[8]));
      var y = _ === void 0 ? !1 : _,
        C = r("useStable")(v),
        S = f(null),
        R = (n = m(h)) != null ? n : b,
        L = r("useBaseAnchorElement")(),
        E = L[0],
        k = L[1],
        I = L[2],
        T = R.activeContentKey,
        D = R.isVisible,
        x = R.onHide,
        $ = R.onShow,
        P = R.tooltipIdentifier,
        N = R.tooltipImpl,
        M = D === void 0 ? !1 : D,
        w;
      a[9] !== C || a[10] !== y || a[11] !== $ || a[12] !== c || a[13] !== p
        ? ((w = function () {
            !y && $ && $(C, p, c);
          }),
          (a[9] = C),
          (a[10] = y),
          (a[11] = $),
          (a[12] = c),
          (a[13] = p),
          (a[14] = w))
        : (w = a[14]);
      var A = w,
        F;
      a[15] !== s || a[16] !== x || a[17] !== c
        ? ((F = function () {
            x && x(s, c);
          }),
          (a[15] = s),
          (a[16] = x),
          (a[17] = c),
          (a[18] = F))
        : (F = a[18]);
      var O = F;
      R == null &&
        r("FBLogger")("comet_ui").mustfix(
          "BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component.",
        );
      var B;
      a[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = o(
            "BaseAnchorPositioningUtils",
          ).passesAnchorPositionExperiment()),
          (a[19] = B))
        : (B = a[19]);
      var W = B,
        q;
      a[20] !== I || a[21] !== k
        ? ((q = W ? { ref: I, xstyle: k } : { ref: S }),
          (a[20] = I),
          (a[21] = k),
          (a[22] = q))
        : (q = a[22]);
      var U = q,
        V;
      a[23] !== E || a[24] !== I || a[25] !== g
        ? ((V = W
            ? babelHelpers.extends({ anchorPosName: E, anchorPosRef: I }, g)
            : g),
          (a[23] = E),
          (a[24] = I),
          (a[25] = g),
          (a[26] = V))
        : (V = a[26]);
      var H = V,
        G = M && T === C ? P : void 0,
        z;
      a[27] !== i || a[28] !== P
        ? ((z = typeof i == "function" ? i(P) : i),
          (a[27] = i),
          (a[28] = P),
          (a[29] = z))
        : (z = a[29]);
      var j;
      a[30] !== N ||
      a[31] !== T ||
      a[32] !== C ||
      a[33] !== M ||
      a[34] !== H ||
      a[35] !== P
        ? ((j =
            N != null &&
            C === T &&
            u.jsx(
              N,
              babelHelpers.extends({}, H, {
                contentKey: C,
                contextRef: S,
                id: M ? P : void 0,
                isVisible: M,
              }),
            )),
          (a[30] = N),
          (a[31] = T),
          (a[32] = C),
          (a[33] = M),
          (a[34] = H),
          (a[35] = P),
          (a[36] = j))
        : (j = a[36]);
      var K;
      return (
        a[37] !== l ||
        a[38] !== O ||
        a[39] !== A ||
        a[40] !== d ||
        a[41] !== U ||
        a[42] !== j ||
        a[43] !== G ||
        a[44] !== z
          ? ((K = u.jsxs(
              r("BaseTooltipTargetWrapper.react"),
              babelHelpers.extends({}, U, {
                forceInlineDisplay: l,
                onHide: O,
                onShow: A,
                persistAfterClick: d,
                tooltipIdentifier: G,
                children: [z, j],
              }),
            )),
            (a[37] = l),
            (a[38] = O),
            (a[39] = A),
            (a[40] = d),
            (a[41] = U),
            (a[42] = j),
            (a[43] = G),
            (a[44] = z),
            (a[45] = K))
          : (K = a[45]),
        K
      );
    }
    ((l.Context = h), (l.Container = y), (l.Child = S));
  },
  98,
);
