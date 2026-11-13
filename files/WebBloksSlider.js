__d(
  "WebBloksSlider",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksModel",
    "WebBloksMutations",
    "WebBloksSliderMinificationKeys",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "onChange",
        "onChangeEnd",
        "onChangeStart",
        "railColor",
        "thumbColor",
        "thumbSize",
        "trackColor",
        "trackHeight",
        "value",
      ],
      s = ["aria-label", "disabled"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useMemo,
      f = d.useRef,
      g = d.useState,
      h = 0,
      y = 100,
      C = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("1"),
      v = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      S = o("WebBloksModel").defineWebBloksAttributeKey(")"),
      R = o("WebBloksModel").defineWebBloksAttributeKey("*"),
      L = o("WebBloksModel").defineWebBloksAttributeKey(","),
      E = o("WebBloksModel").defineWebBloksAttributeKey("-"),
      k = o("WebBloksModel").defineWebBloksAttributeKey("."),
      I = o("WebBloksModel").defineWebBloksAttributeKey("0"),
      T = o("WebBloksStyle").createStyles({
        wrapper: {
          touchAction: "none",
          pointerEvents: "all",
          position: "relative",
          cursor: "pointer",
          width: "100%",
        },
        rail: {
          borderRadius: 2,
          width: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
          marginTop: "auto",
          marginBottom: "auto",
        },
        track: {
          borderRadius: 2,
          position: "absolute",
          top: 0,
          bottom: 0,
          marginTop: "auto",
          marginBottom: "auto",
        },
        thumbWrapper: { position: "relative" },
        thumb: {
          borderRadius: "50%",
          boxShadow: "0 0 5px gainsboro",
          position: "absolute",
          cursor: "pointer",
        },
      });
    function D(e) {
      var t,
        n = o("react-compiler-runtime").c(52),
        r = e.externalStyle,
        a = e.node,
        i;
      n[0] !== a ? ((i = a.get(E)), (n[0] = a), (n[1] = i)) : (i = n[1]);
      var l = i,
        s;
      n[2] !== a ? ((s = a.get(k)), (n[2] = a), (n[3] = s)) : (s = n[3]);
      var u = s,
        d = a.getSubNode(L),
        m = a.getSubNode(I),
        _ = a.getSubNode(C),
        f;
      n[4] !== a ? ((f = a.get(b)), (n[4] = a), (n[5] = f)) : (f = n[5]);
      var h = f,
        T = a.get(o("WebBloksSliderMinificationKeys").SLIDER_PROGRESS),
        D;
      n[6] !== a
        ? ((D = a.getExpression(v)), (n[6] = a), (n[7] = D))
        : (D = n[7]);
      var $ = D,
        P;
      n[8] !== a
        ? ((P = a.getExpression(R)), (n[8] = a), (n[9] = P))
        : (P = n[9]);
      var N = P,
        M;
      n[10] !== a
        ? ((M = a.getExpression(S)), (n[10] = a), (n[11] = M))
        : (M = n[11]);
      var w = M,
        A = o("WebBloksComponentContext").useWebBloksContext(),
        F = A.bloksContext,
        O = A.executeCatch,
        B = o("WebBloksTheme").useTheme().getTheme(),
        W = o("WebBloksStyle").useStyle(a, r),
        q = W.wrapper,
        U = W.wrapperProps,
        V = l != null ? parseFloat(l) : 24,
        H = u != null ? parseFloat(u) : 4,
        G =
          d != null
            ? o("WebBloksUtils").getRGBColorWithTheme(d, B)
            : o("WebBloksTheme").WebBloksThemeVars["primary-bg"],
        z =
          m != null ? o("WebBloksUtils").getRGBColorWithTheme(m, B) : "#DBDBDB",
        j =
          _ != null
            ? o("WebBloksUtils").getRGBColorWithTheme(_, B)
            : o("WebBloksTheme").WebBloksThemeVars["fds-gray-65"],
        K = g(((t = h != null ? h : T) != null ? t : 0) * y),
        Q = K[0],
        X = K[1],
        Y = g(!1),
        J = Y[0],
        Z = Y[1],
        ee;
      n[12] !== F.treeManager || n[13] !== J || n[14] !== a || n[15] !== T
        ? ((ee = function () {
            !J &&
              T != null &&
              (X(T * y),
              o("WebBloksMutations").updateProperty(
                F.treeManager,
                a,
                o("WebBloksSliderMinificationKeys").SLIDER_PROGRESS,
                null,
              ));
          }),
          (n[12] = F.treeManager),
          (n[13] = J),
          (n[14] = a),
          (n[15] = T),
          (n[16] = ee))
        : (ee = n[16]);
      var te;
      (n[17] !== F.treeManager ||
      n[18] !== J ||
      n[19] !== a ||
      n[20] !== T ||
      n[21] !== Q
        ? ((te = [F.treeManager, J, a, T, Q]),
          (n[17] = F.treeManager),
          (n[18] = J),
          (n[19] = a),
          (n[20] = T),
          (n[21] = Q),
          (n[22] = te))
        : (te = n[22]),
        p(ee, te));
      var ne;
      n[23] !== F || n[24] !== O || n[25] !== a || n[26] !== $
        ? ((ne = function (t) {
            ($ != null && O(a, $, [Number(t) / y, F]), X(Number(t)));
          }),
          (n[23] = F),
          (n[24] = O),
          (n[25] = a),
          (n[26] = $),
          (n[27] = ne))
        : (ne = n[27]);
      var re = ne,
        oe;
      n[28] !== F || n[29] !== O || n[30] !== a || n[31] !== N
        ? ((oe = function (t) {
            (N != null && O(a, N, [t, F]), Z(!0));
          }),
          (n[28] = F),
          (n[29] = O),
          (n[30] = a),
          (n[31] = N),
          (n[32] = oe))
        : (oe = n[32]);
      var ae = oe,
        ie;
      n[33] !== F || n[34] !== O || n[35] !== a || n[36] !== w
        ? ((ie = function (t) {
            (w != null && O(a, w, [t, F]), Z(!1));
          }),
          (n[33] = F),
          (n[34] = O),
          (n[35] = a),
          (n[36] = w),
          (n[37] = ie))
        : (ie = n[37]);
      var le = ie,
        se;
      n[38] !== j ||
      n[39] !== re ||
      n[40] !== le ||
      n[41] !== ae ||
      n[42] !== G ||
      n[43] !== V ||
      n[44] !== H ||
      n[45] !== z ||
      n[46] !== Q ||
      n[47] !== U
        ? ((se = c.jsx(
            x,
            babelHelpers.extends({}, U, {
              onChange: re,
              onChangeStart: ae,
              onChangeEnd: le,
              value: Q,
              thumbSize: V,
              railColor: z,
              trackColor: j,
              trackHeight: H,
              thumbColor: G,
            }),
          )),
          (n[38] = j),
          (n[39] = re),
          (n[40] = le),
          (n[41] = ae),
          (n[42] = G),
          (n[43] = V),
          (n[44] = H),
          (n[45] = z),
          (n[46] = Q),
          (n[47] = U),
          (n[48] = se))
        : (se = n[48]);
      var ue;
      return (
        n[49] !== se || n[50] !== q
          ? ((ue = q(se)), (n[49] = se), (n[50] = q), (n[51] = ue))
          : (ue = n[51]),
        ue
      );
    }
    function x(t) {
      var n = o("react-compiler-runtime").c(71),
        r,
        a,
        i,
        l,
        u,
        d,
        m,
        p,
        _,
        f;
      n[0] !== t
        ? ((a = t.onChange),
          (r = t.onChangeEnd),
          (i = t.onChangeStart),
          (l = t.railColor),
          (d = t.thumbColor),
          (m = t.thumbSize),
          (p = t.trackColor),
          (_ = t.trackHeight),
          (f = t.value),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i),
          (n[4] = l),
          (n[5] = u),
          (n[6] = d),
          (n[7] = m),
          (n[8] = p),
          (n[9] = _),
          (n[10] = f))
        : ((r = n[1]),
          (a = n[2]),
          (i = n[3]),
          (l = n[4]),
          (u = n[5]),
          (d = n[6]),
          (m = n[7]),
          (p = n[8]),
          (_ = n[9]),
          (f = n[10]));
      var C;
      n[11] !== i
        ? ((C = function (t) {
            i == null || i(t);
          }),
          (n[11] = i),
          (n[12] = C))
        : (C = n[12]);
      var b = C,
        v;
      n[13] !== a
        ? ((v = function (t) {
            a == null || a(t);
          }),
          (n[13] = a),
          (n[14] = v))
        : (v = n[14]);
      var S = v,
        R;
      n[15] !== r
        ? ((R = function (t) {
            r == null || r(t);
          }),
          (n[15] = r),
          (n[16] = R))
        : (R = n[16]);
      var L = R,
        E = "calc(" + f + "% - " + m / 2 + "px)",
        k;
      n[17] !== S || n[18] !== L || n[19] !== b || n[20] !== f
        ? ((k = {
            onChange: S,
            onChangeStart: b,
            onChangeEnd: L,
            min: h,
            max: y,
            value: f,
          }),
          (n[17] = S),
          (n[18] = L),
          (n[19] = b),
          (n[20] = f),
          (n[21] = k))
        : (k = n[21]);
      var I = $(k),
        D = I.onMouseDown,
        x = I.onPointerDown,
        P = I.onTouchStart,
        N = I.thumbRef,
        M = I.wrapperRef,
        w = g(!1),
        A = w[0],
        F = w[1],
        O;
      n[22] !== A || n[23] !== S || n[24] !== b || n[25] !== f
        ? ((O = function (t) {
            var e = f;
            if (t.keyCode === o("WebBloksConstants").KEY_LEFT) e = e - 1;
            else if (t.keyCode === o("WebBloksConstants").KEY_RIGHT) e = e + 1;
            else return;
            (A || (F(!0), b(e)), S(e));
          }),
          (n[22] = A),
          (n[23] = S),
          (n[24] = b),
          (n[25] = f),
          (n[26] = O))
        : (O = n[26]);
      var B = O,
        W;
      n[27] !== L || n[28] !== f
        ? ((W = function (t) {
            (t.keyCode !== o("WebBloksConstants").KEY_LEFT &&
              t.keyCode !== o("WebBloksConstants").KEY_RIGHT) ||
              (F(!1), L(f));
          }),
          (n[27] = L),
          (n[28] = f),
          (n[29] = W))
        : (W = n[29]);
      var q = W,
        U,
        V,
        H;
      if (n[30] !== u) {
        var G = u;
        ((U = G["aria-label"]),
          (V = G.disabled),
          (H = babelHelpers.objectWithoutPropertiesLoose(G, s)),
          (n[30] = u),
          (n[31] = U),
          (n[32] = V),
          (n[33] = H));
      } else ((U = n[31]), (V = n[32]), (H = n[33]));
      var z;
      n[34] !== m
        ? ((z = { height: m }), (n[34] = m), (n[35] = z))
        : (z = n[35]);
      var j;
      n[36] !== l || n[37] !== _
        ? ((j = c.jsx("div", {
            className: T.rail,
            style: { height: _, backgroundColor: l },
          })),
          (n[36] = l),
          (n[37] = _),
          (n[38] = j))
        : (j = n[38]);
      var K = f + "%",
        Q;
      n[39] !== K || n[40] !== p || n[41] !== _
        ? ((Q = c.jsx("div", {
            className: T.track,
            style: { width: K, height: _, backgroundColor: p },
          })),
          (n[39] = K),
          (n[40] = p),
          (n[41] = _),
          (n[42] = Q))
        : (Q = n[42]);
      var X = m / 2,
        Y = m / 2,
        J;
      n[43] !== X || n[44] !== Y
        ? ((J = { marginLeft: X, marginRight: Y }),
          (n[43] = X),
          (n[44] = Y),
          (n[45] = J))
        : (J = n[45]);
      var Z;
      n[46] !== d || n[47] !== E || n[48] !== m
        ? ((Z = {
            marginInlineStart: E,
            WebkitMarginStart: E,
            height: m,
            width: m,
            backgroundColor: d,
          }),
          (n[46] = d),
          (n[47] = E),
          (n[48] = m),
          (n[49] = Z))
        : (Z = n[49]);
      var ee;
      n[50] !== U ||
      n[51] !== V ||
      n[52] !== B ||
      n[53] !== q ||
      n[54] !== Z ||
      n[55] !== N ||
      n[56] !== f
        ? ((ee = c.jsx("div", {
            ref: N,
            className: T.thumb,
            role: "slider",
            "aria-label": U,
            "aria-valuenow": f,
            "aria-valuemin": h,
            "aria-valuemax": y,
            disabled: V,
            onKeyDown: B,
            onKeyUp: q,
            tabIndex: 0,
            style: Z,
          })),
          (n[50] = U),
          (n[51] = V),
          (n[52] = B),
          (n[53] = q),
          (n[54] = Z),
          (n[55] = N),
          (n[56] = f),
          (n[57] = ee))
        : (ee = n[57]);
      var te;
      n[58] !== J || n[59] !== ee
        ? ((te = c.jsx("div", {
            className: T.thumbWrapper,
            style: J,
            children: ee,
          })),
          (n[58] = J),
          (n[59] = ee),
          (n[60] = te))
        : (te = n[60]);
      var ne;
      return (
        n[61] !== D ||
        n[62] !== x ||
        n[63] !== P ||
        n[64] !== H ||
        n[65] !== Q ||
        n[66] !== te ||
        n[67] !== z ||
        n[68] !== j ||
        n[69] !== M
          ? ((ne = c.jsxs(
              "div",
              babelHelpers.extends({}, H, {
                ref: M,
                className: T.wrapper,
                onMouseDown: D,
                onPointerDown: x,
                onTouchStart: P,
                style: z,
                children: [j, Q, te],
              }),
            )),
            (n[61] = D),
            (n[62] = x),
            (n[63] = P),
            (n[64] = H),
            (n[65] = Q),
            (n[66] = te),
            (n[67] = z),
            (n[68] = j),
            (n[69] = M),
            (n[70] = ne))
          : (ne = n[70]),
        ne
      );
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(42),
        n = e.max,
        r = e.min,
        a = e.onChange,
        i = e.onChangeEnd,
        l = e.onChangeStart,
        s = e.value,
        u = f(null),
        c = f(null),
        d = f(null),
        m = f(!1),
        p;
      t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== l
        ? ((p = function (t) {
            var e,
              o = t.clientX,
              i = u.current;
            if (i != null) {
              m.current = window.getComputedStyle(i).direction === "rtl";
              var s = N(i, o, r, n, m.current);
              ((e = c.current) == null || e.focus(),
                l == null || l(s),
                a == null || a(s));
            }
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = l),
          (t[4] = p))
        : (p = t[4]);
      var _ = p,
        g;
      t[5] !== n || t[6] !== r || t[7] !== a
        ? ((g = function (t) {
            var e = t.clientX;
            if (u.current != null) {
              var o = N(u.current, e, r, n, m.current);
              a == null || a(o);
            }
          }),
          (t[5] = n),
          (t[6] = r),
          (t[7] = a),
          (t[8] = g))
        : (g = t[8]);
      var h = g,
        y;
      t[9] !== i || t[10] !== s
        ? ((y = function () {
            i == null || i(s);
          }),
          (t[9] = i),
          (t[10] = s),
          (t[11] = y))
        : (y = t[11]);
      var C = y,
        b;
      if (window.PointerEvent === void 0) {
        var v;
        t[12] !== h
          ? ((v = function (t) {
              t.button === 0 &&
                (h == null ||
                  h({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }));
            }),
            (t[12] = h),
            (t[13] = v))
          : (v = t[13]);
        var S = v,
          R;
        t[14] !== S || t[15] !== C
          ? ((R = function (t) {
              t.button === 0 &&
                (C == null || C(),
                window.removeEventListener("mousemove", S, !1),
                window.removeEventListener("mouseup", R, !1));
            }),
            (t[14] = S),
            (t[15] = C),
            (t[16] = R))
          : (R = t[16]);
        var L;
        t[17] !== S || t[18] !== R || t[19] !== _
          ? ((L = function (t) {
              t.button === 0 &&
                (_ == null ||
                  _({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }),
                t.stopPropagation(),
                t.preventDefault(),
                window.addEventListener("mousemove", S, !1),
                window.addEventListener("mouseup", R, !1));
            }),
            (t[17] = S),
            (t[18] = R),
            (t[19] = _),
            (t[20] = L))
          : (L = t[20]);
        var E = L,
          k;
        t[21] !== h
          ? ((k = function (t) {
              var e = P(t, d);
              if (e != null) {
                var n = e.clientX,
                  r = e.pageX,
                  o = e.pageY;
                h == null || h({ clientX: n, pageX: r, pageY: o });
              }
            }),
            (t[21] = h),
            (t[22] = k))
          : (k = t[22]);
        var I = k,
          T;
        t[23] !== C || t[24] !== I
          ? ((T = function (t) {
              var e = P(t, d);
              e != null &&
                (C == null || C(),
                (d.current = null),
                window.removeEventListener("touchmove", I, !1),
                window.removeEventListener("touchend", T, !1),
                window.removeEventListener("touchcancel", T, !1));
            }),
            (t[23] = C),
            (t[24] = I),
            (t[25] = T))
          : (T = t[25]);
        var D;
        t[26] !== _ || t[27] !== T || t[28] !== I
          ? ((D = function (t) {
              if (!(t.changedTouches.length === 0 || d.current != null)) {
                var e = t.changedTouches[0];
                (t.stopPropagation(),
                  t.preventDefault(),
                  (d.current = e.identifier),
                  _ == null ||
                    _({ clientX: e.clientX, pageX: e.pageX, pageY: e.pageY }),
                  window.addEventListener("touchmove", I, !1),
                  window.addEventListener("touchend", T, !1),
                  window.addEventListener("touchcancel", T, !1));
              }
            }),
            (t[26] = _),
            (t[27] = T),
            (t[28] = I),
            (t[29] = D))
          : (D = t[29]);
        var x = D,
          $;
        (t[30] !== E || t[31] !== x
          ? (($ = {
              onMouseDown: E,
              onTouchStart: x,
              wrapperRef: u,
              thumbRef: c,
            }),
            (t[30] = E),
            (t[31] = x),
            (t[32] = $))
          : ($ = t[32]),
          (b = $));
      } else {
        var M;
        t[33] !== h
          ? ((M = function (t) {
              t.pointerId === d.current &&
                (h == null ||
                  h({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }));
            }),
            (t[33] = h),
            (t[34] = M))
          : (M = t[34]);
        var w = M,
          A;
        t[35] !== C || t[36] !== w
          ? ((A = function (t) {
              t.pointerId === d.current &&
                (C == null || C(),
                (d.current = null),
                window.removeEventListener("pointermove", w, !1),
                window.removeEventListener("pointerup", A, !1),
                window.removeEventListener("pointercancel", A, !1));
            }),
            (t[35] = C),
            (t[36] = w),
            (t[37] = A))
          : (A = t[37]);
        var F;
        if (t[38] !== _ || t[39] !== w || t[40] !== A) {
          var O = function (t) {
            t.button === 0 &&
              d.current == null &&
              (_ == null ||
                _({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }),
              t.stopPropagation(),
              t.preventDefault(),
              (d.current = t.pointerId),
              window.addEventListener("pointermove", w, !1),
              window.addEventListener("pointerup", A, !1),
              window.addEventListener("pointercancel", A, !1));
          };
          ((F = { onPointerDown: O, wrapperRef: u, thumbRef: c }),
            (t[38] = _),
            (t[39] = w),
            (t[40] = A),
            (t[41] = F));
        } else F = t[41];
        b = F;
      }
      return b;
    }
    function P(e, t) {
      var n = Array.from(e.changedTouches).findIndex(function (e) {
        var n = e.identifier;
        return n === t.current;
      });
      return n < 0 ? null : e.changedTouches[n];
    }
    function N(e, t, n, r, o) {
      var a = e.getBoundingClientRect(),
        i = a.left,
        l = a.width,
        s = t - i;
      return (o && (s = i + l - t), M((s / l) * (r - n) + n, n, r));
    }
    function M(e, t, n) {
      return Math.min(Math.max(Math.round(e), t), n);
    }
    l.default = D;
  },
  98,
);
