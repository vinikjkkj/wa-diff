__d(
  "XMDSDialogPage.react",
  [
    "BaseHeadingContextWrapper.react",
    "BaseScrollRegionObserver.react",
    "BaseScrollableArea.react",
    "CDSDialogHeaderFooterContainerContext",
    "FocusInertRegion.react",
    "XMDSMiniToastProvider.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "useEventHandler",
    "useMatchViewport",
    "useMergeRefs",
    "useWindowEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useLayoutEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState,
      f = {
        footerShadow: { boxShadow: "x1pzs5fi", $$css: !0 },
        inert: { pointerEvents: "x47corl", userSelect: "x87ps6o", $$css: !0 },
        scrollableArea: {
          flexGrow: "x1iyjqo2",
          overscrollBehaviorY: "xy5w88m",
          $$css: !0,
        },
        scrollSectionObserver: { height: "x1ycjhwn", $$css: !0 },
      };
    function g(e) {
      var t = o("react-compiler-runtime").c(70),
        n = e.ref,
        a = e.children,
        i = e.footer,
        l = e.header,
        u = e.isContentInert,
        m = e.isFooterSticky,
        g = e.onScroll,
        h = e.onScrollBottom,
        y = e.testid,
        C = e.withFooterShadow,
        b = u === void 0 ? !1 : u,
        v = C === void 0 ? !1 : C,
        S = r("useMatchViewport")("max", "width", 679),
        R = p(null),
        L,
        E;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            R.current = window.innerHeight;
          }),
          (E = []),
          (t[0] = L),
          (t[1] = E))
        : ((L = t[0]), (E = t[1])),
        d(L, E));
      var k;
      t[2] !== h
        ? ((k = function () {
            h && h();
          }),
          (t[2] = h),
          (t[3] = k))
        : (k = t[3]);
      var I = r("useEventHandler")(k),
        T;
      t[4] !== g
        ? ((T = function () {
            g && g();
          }),
          (t[4] = g),
          (t[5] = T))
        : (T = t[5]);
      var D = r("useEventHandler")(T),
        x;
      t[6] !== D || t[7] !== I
        ? ((x = function (t) {
            var e, n;
            (D(),
              R.current != null &&
                window.pageYOffset >=
                  ((e =
                    (n = document.body) == null ? void 0 : n.offsetHeight) !=
                  null
                    ? e
                    : 0) -
                    R.current &&
                I());
          }),
          (t[6] = D),
          (t[7] = I),
          (t[8] = x))
        : (x = t[8]);
      var $ = r("useEventHandler")(x),
        P;
      t[9] !== $
        ? ((P = function (t) {
            var e;
            ((R.current = Math.max(
              (e = R.current) != null ? e : 0,
              window.innerHeight,
            )),
              $(t));
          }),
          (t[9] = $),
          (t[10] = P))
        : (P = t[10]);
      var N = r("useEventHandler")(P),
        M,
        w;
      (t[11] !== I
        ? ((w = function () {
            var e, t;
            window.innerWidth > 679 ||
              (R.current != null &&
                window.pageYOffset >=
                  ((e =
                    (t = document.body) == null ? void 0 : t.offsetHeight) !=
                  null
                    ? e
                    : 0) -
                    R.current &&
                I());
          }),
          (M = [I]),
          (t[11] = I),
          (t[12] = M),
          (t[13] = w))
        : ((M = t[12]), (w = t[13])),
        c(w, M),
        r("useWindowEvent")("scroll", $),
        r("useWindowEvent")("resize", N));
      var A;
      t[14] !== I
        ? ((A = function () {
            window.innerWidth <= 679 || I();
          }),
          (t[14] = I),
          (t[15] = A))
        : (A = t[15]);
      var F = A,
        O;
      t[16] !== D
        ? ((O = function () {
            window.innerWidth <= 679 || D();
          }),
          (t[16] = D),
          (t[17] = O))
        : (O = t[17]);
      var B = O,
        W = _(!1),
        q = W[0],
        U = W[1],
        V = _(!1),
        H = V[0],
        G = V[1],
        z = p(null),
        j = r("useMergeRefs")(z, n),
        K = p(null),
        Q;
      t[18] !== q
        ? ((Q = { showBackground: q }), (t[18] = q), (t[19] = Q))
        : (Q = t[19]);
      var X = Q,
        Y = v ? f.footerShadow : null,
        J;
      t[20] !== m || t[21] !== H || t[22] !== Y
        ? ((J = { isInner: !1, isSticky: m, showBackground: H, xstyle: Y }),
          (t[20] = m),
          (t[21] = H),
          (t[22] = Y),
          (t[23] = J))
        : (J = t[23]);
      var Z = J,
        ee = v ? f.footerShadow : null,
        te;
      t[24] !== m || t[25] !== H || t[26] !== ee
        ? ((te = { isInner: !0, isSticky: m, showBackground: H, xstyle: ee }),
          (t[24] = m),
          (t[25] = H),
          (t[26] = ee),
          (t[27] = te))
        : (te = t[27]);
      var ne = te,
        re;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = {
            callback: function (t) {
              U(!t);
            },
            heightXStyle: f.scrollSectionObserver,
          }),
          (t[28] = re))
        : (re = t[28]);
      var oe = re,
        ae;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = {
            callback: function (t) {
              G(!t);
            },
            heightXStyle: f.scrollSectionObserver,
          }),
          (t[29] = ae))
        : (ae = t[29]);
      var ie = ae,
        le;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = {
            className:
              "x1fmog5m xu25z0z x140muxe xo1y3bh x78zum5 xdt5ytf x1iyjqo2 x1yr2tfi xbt77o1 x1jxyteu x1n2onr6 x1ja2u2z",
          }),
          (t[30] = le))
        : (le = t[30]);
      var se = S ? ie : null,
        ue = S ? oe : null,
        ce;
      t[31] !== se || t[32] !== ue
        ? ((ce = s.jsx(r("BaseScrollRegionObserver.react"), {
            end: se,
            start: ue,
          })),
          (t[31] = se),
          (t[32] = ue),
          (t[33] = ce))
        : (ce = t[33]);
      var de;
      t[34] !== l || t[35] !== X
        ? ((de = s.jsx(r("CDSDialogHeaderFooterContainerContext").Provider, {
            value: X,
            children: l,
          })),
          (t[34] = l),
          (t[35] = X),
          (t[36] = de))
        : (de = t[36]);
      var me = i != null,
        pe = l != null,
        _e = b && f.inert,
        fe;
      t[37] !== _e
        ? ((fe = [f.scrollableArea, _e]), (t[37] = _e), (t[38] = fe))
        : (fe = t[38]);
      var ge = S ? null : ie,
        he = S ? null : oe,
        ye;
      t[39] !== ge || t[40] !== he
        ? ((ye = s.jsx(r("BaseScrollRegionObserver.react"), {
            end: ge,
            rootRef: z,
            start: he,
          })),
          (t[39] = ge),
          (t[40] = he),
          (t[41] = ye))
        : (ye = t[41]);
      var Ce = !b,
        be;
      t[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((be = { className: "x78zum5 xdt5ytf x1iyjqo2 xx6bls6 x889kno" }),
          (t[42] = be))
        : (be = t[42]);
      var ve;
      t[43] !== a
        ? ((ve = s.jsx(
            "div",
            babelHelpers.extends({}, be, { ref: K, children: a }),
          )),
          (t[43] = a),
          (t[44] = ve))
        : (ve = t[44]);
      var Se;
      t[45] !== Ce || t[46] !== ve
        ? ((Se = s.jsx(r("FocusInertRegion.react"), {
            disabled: Ce,
            focusQuery: o("focusScopeQueries").tabbableScopeQuery,
            children: ve,
          })),
          (t[45] = Ce),
          (t[46] = ve),
          (t[47] = Se))
        : (Se = t[47]);
      var Re;
      t[48] !== i || t[49] !== ne
        ? ((Re = s.jsx(r("CDSDialogHeaderFooterContainerContext").Provider, {
            value: ne,
            children: i,
          })),
          (t[48] = i),
          (t[49] = ne),
          (t[50] = Re))
        : (Re = t[50]);
      var Le;
      t[51] !== B ||
      t[52] !== F ||
      t[53] !== me ||
      t[54] !== pe ||
      t[55] !== fe ||
      t[56] !== ye ||
      t[57] !== Se ||
      t[58] !== Re
        ? ((Le = s.jsx(r("BaseHeadingContextWrapper.react"), {
            children: s.jsxs(r("BaseScrollableArea.react"), {
              contentRef: K,
              hideScrollbar: !1,
              horizontal: !1,
              onScroll: B,
              onScrollBottom: F,
              vertical: !0,
              withBottomShadow: me,
              withTopShadow: pe,
              xstyle: fe,
              children: [ye, Se, Re],
            }),
          })),
          (t[51] = B),
          (t[52] = F),
          (t[53] = me),
          (t[54] = pe),
          (t[55] = fe),
          (t[56] = ye),
          (t[57] = Se),
          (t[58] = Re),
          (t[59] = Le))
        : (Le = t[59]);
      var Ee;
      t[60] !== i || t[61] !== Z
        ? ((Ee = s.jsx(r("CDSDialogHeaderFooterContainerContext").Provider, {
            value: Z,
            children: i,
          })),
          (t[60] = i),
          (t[61] = Z),
          (t[62] = Ee))
        : (Ee = t[62]);
      var ke;
      return (
        t[63] !== j ||
        t[64] !== ce ||
        t[65] !== de ||
        t[66] !== Le ||
        t[67] !== Ee ||
        t[68] !== y
          ? ((ke = s.jsx(r("XMDSMiniToastProvider.react"), {
              children: s.jsxs(
                "div",
                babelHelpers.extends({}, le, {
                  "data-testid": void 0,
                  ref: j,
                  children: [ce, de, Le, Ee],
                }),
              ),
            })),
            (t[63] = j),
            (t[64] = ce),
            (t[65] = de),
            (t[66] = Le),
            (t[67] = Ee),
            (t[68] = y),
            (t[69] = ke))
          : (ke = t[69]),
        ke
      );
    }
    l.default = g;
  },
  98,
);
