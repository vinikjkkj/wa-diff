__d(
  "useWebBloksCollectionChildSizes",
  [
    "WebBloksCollectionChildSizesLayoutReady",
    "WebBloksCollectionHelpers",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ =
        (e =
          (s = window.CSS) == null || s.supports == null
            ? void 0
            : s.supports("width", "100cqw")) != null
          ? e
          : !1;
    function f(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.collectionNode,
        r = e.node,
        a = e.scrollerRef,
        i,
        l,
        s;
      if (t[0] !== n || t[1] !== r) {
        var u = n.getValues();
        i = u.direction;
        var c;
        if (t[5] !== r) {
          var m, f, h, y, C, b;
          ((c =
            (m =
              (f =
                (h =
                  (y = r.getStyle("collection")) == null
                    ? void 0
                    : y.getValues()) != null
                  ? h
                  : (C = r.getStyle("bk.style.Base")) == null
                    ? void 0
                    : C.getValues()) != null
                ? f
                : (b = r.getStyle("flex")) == null
                  ? void 0
                  : b.getValues()) != null
              ? m
              : {}),
            (t[5] = r),
            (t[6] = c));
        } else c = t[6];
        ((l = c),
          (s = o("WebBloksCollectionHelpers").getDirectionPropNames(i)),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s));
      } else ((i = t[2]), (l = t[3]), (s = t[4]));
      var v = s,
        S = v.crossAxisSize,
        R = v.mainAxisSize,
        L;
      t[7] !== i || t[8] !== r || t[9] !== l.height || t[10] !== l.width
        ? ((L = g({ width: l.width, height: l.height, direction: i, node: r })),
          (t[7] = i),
          (t[8] = r),
          (t[9] = l.height),
          (t[10] = l.width),
          (t[11] = L))
        : (L = t[11]);
      var E = L,
        k = p(null),
        I = k[0],
        T = k[1],
        D;
      t[12] !== E.__MainAxisCqUnitBasis || t[13] !== R || t[14] !== a
        ? ((D = function () {
            var e;
            if (!_ && E.__MainAxisCqUnitBasis != null) {
              var t =
                  (e = a.current) == null
                    ? void 0
                    : e.getBoundingClientRect()[R],
                n = E.__MainAxisCqUnitBasis;
              t != null && n != null && T(t * n);
            }
          }),
          (t[12] = E.__MainAxisCqUnitBasis),
          (t[13] = R),
          (t[14] = a),
          (t[15] = D))
        : (D = t[15]);
      var x;
      (t[16] !== E || t[17] !== R || t[18] !== a
        ? ((x = [E, R, a]), (t[16] = E), (t[17] = R), (t[18] = a), (t[19] = x))
        : (x = t[19]),
        d(D, x));
      var $;
      (t[20] !== I || t[21] !== a
        ? (($ = function () {
            if (I != null) {
              var e;
              (e = a.current) == null ||
                e.dispatchEvent(
                  o("WebBloksCollectionChildSizesLayoutReady")
                    .LAYOUT_READY_EVENT,
                );
            }
          }),
          (t[20] = I),
          (t[21] = a),
          (t[22] = $))
        : ($ = t[22]),
        d($, void 0));
      var P = S,
        N = E[S],
        M = R,
        w = I != null ? I : E[R],
        A;
      if (t[23] !== P || t[24] !== N || t[25] !== M || t[26] !== w) {
        var F;
        ((A = ((F = {}), (F[P] = N), (F[M] = w), F)),
          (t[23] = P),
          (t[24] = N),
          (t[25] = M),
          (t[26] = w),
          (t[27] = A));
      } else A = t[27];
      return A;
    }
    var g = function (t) {
      var e,
        n,
        r = t.direction,
        a = t.height,
        i = t.node,
        l = t.width,
        s = o("WebBloksCollectionHelpers").getDirectionPropNames(r),
        u = s.crossAxisSize,
        c = s.mainAxisSize,
        d = ((e = {}), (e[c] = "auto"), (e[u] = "auto"), e),
        m = c === "width" ? l : a,
        p = u === "width" ? l : a;
      if ((p != null && (d[u] = o("WebBloksUtils").toPx(p)), m == null))
        return d;
      if (!o("WebBloksCollectionHelpers").hasCollectionDimensionInPct(i, c))
        return (m != null && (d[c] = o("WebBloksUtils").toPx(m)), d);
      var _ = (n = o("WebBloksUtils").toPercentageValue(m)) != null ? n : 1,
        f = c === "width" ? "cqw" : "cqh";
      return ((d[c] = "" + _ * 100 + f), (d.__MainAxisCqUnitBasis = _), d);
    };
    l.default = f;
  },
  98,
);
