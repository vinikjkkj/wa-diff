__d(
  "WebBloksSlider",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksEnvironmentContext",
    "WebBloksMutations",
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
      C = "+",
      b = "1",
      v = "&",
      S = ")",
      R = "*",
      L = "(",
      E = ",",
      k = "-",
      I = ".",
      T = "0",
      D = o("WebBloksStyle").createStyles({
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
          transform: "translate(-50%, 0)",
        },
      });
    function x(e) {
      var t,
        n = o("react-compiler-runtime").c(52),
        r = e.externalStyle,
        a = e.node,
        i;
      n[0] !== a ? ((i = a.get(k)), (n[0] = a), (n[1] = i)) : (i = n[1]);
      var l = i,
        s;
      n[2] !== a ? ((s = a.get(I)), (n[2] = a), (n[3] = s)) : (s = n[3]);
      var u = s,
        d = a.getSubNode(E),
        m = a.getSubNode(T),
        _ = a.getSubNode(C),
        f;
      n[4] !== a ? ((f = a.get(b)), (n[4] = a), (n[5] = f)) : (f = n[5]);
      var h = f,
        D = a.get(L),
        x;
      n[6] !== a
        ? ((x = a.getExpression(v)), (n[6] = a), (n[7] = x))
        : (x = n[7]);
      var P = x,
        N;
      n[8] !== a
        ? ((N = a.getExpression(R)), (n[8] = a), (n[9] = N))
        : (N = n[9]);
      var M = N,
        w;
      n[10] !== a
        ? ((w = a.getExpression(S)), (n[10] = a), (n[11] = w))
        : (w = n[11]);
      var A = w,
        F = o("WebBloksComponentContext").useWebBloksContext(),
        O = F.bloksContext,
        B = F.executeCatch,
        W = o("WebBloksTheme").useTheme().getTheme(),
        q = o("WebBloksStyle").useStyle(a, r),
        U = q.wrapper,
        V = q.wrapperProps,
        H = l != null ? parseFloat(l) : 24,
        G = u != null ? parseFloat(u) : 4,
        z =
          d != null
            ? o("WebBloksUtils").getRGBColorWithTheme(d, W)
            : o("WebBloksTheme").WebBloksThemeVars["primary-bg"],
        j =
          m != null ? o("WebBloksUtils").getRGBColorWithTheme(m, W) : "#DBDBDB",
        K =
          _ != null
            ? o("WebBloksUtils").getRGBColorWithTheme(_, W)
            : o("WebBloksTheme").WebBloksThemeVars["fds-gray-65"],
        Q = g(((t = h != null ? h : D) != null ? t : 0) * y),
        X = Q[0],
        Y = Q[1],
        J = g(!1),
        Z = J[0],
        ee = J[1],
        te;
      n[12] !== O.treeManager || n[13] !== Z || n[14] !== a || n[15] !== D
        ? ((te = function () {
            !Z &&
              D != null &&
              (Y(D * y),
              o("WebBloksMutations").updateProperty(O.treeManager, a, L, null));
          }),
          (n[12] = O.treeManager),
          (n[13] = Z),
          (n[14] = a),
          (n[15] = D),
          (n[16] = te))
        : (te = n[16]);
      var ne;
      (n[17] !== O.treeManager ||
      n[18] !== Z ||
      n[19] !== a ||
      n[20] !== D ||
      n[21] !== X
        ? ((ne = [O.treeManager, Z, a, D, X]),
          (n[17] = O.treeManager),
          (n[18] = Z),
          (n[19] = a),
          (n[20] = D),
          (n[21] = X),
          (n[22] = ne))
        : (ne = n[22]),
        p(te, ne));
      var re;
      n[23] !== O || n[24] !== B || n[25] !== a || n[26] !== P
        ? ((re = function (t) {
            (P != null && B(a, P, [Number(t) / y, O]), Y(Number(t)));
          }),
          (n[23] = O),
          (n[24] = B),
          (n[25] = a),
          (n[26] = P),
          (n[27] = re))
        : (re = n[27]);
      var oe = re,
        ae;
      n[28] !== O || n[29] !== B || n[30] !== a || n[31] !== M
        ? ((ae = function (t) {
            (M != null && B(a, M, [t, O]), ee(!0));
          }),
          (n[28] = O),
          (n[29] = B),
          (n[30] = a),
          (n[31] = M),
          (n[32] = ae))
        : (ae = n[32]);
      var ie = ae,
        le;
      n[33] !== O || n[34] !== B || n[35] !== a || n[36] !== A
        ? ((le = function (t) {
            (A != null && B(a, A, [t, O]), ee(!1));
          }),
          (n[33] = O),
          (n[34] = B),
          (n[35] = a),
          (n[36] = A),
          (n[37] = le))
        : (le = n[37]);
      var se = le,
        ue;
      n[38] !== K ||
      n[39] !== oe ||
      n[40] !== se ||
      n[41] !== ie ||
      n[42] !== z ||
      n[43] !== H ||
      n[44] !== G ||
      n[45] !== j ||
      n[46] !== X ||
      n[47] !== V
        ? ((ue = c.jsx(
            $,
            babelHelpers.extends({}, V, {
              onChange: oe,
              onChangeStart: ie,
              onChangeEnd: se,
              value: X,
              thumbSize: H,
              railColor: j,
              trackColor: K,
              trackHeight: G,
              thumbColor: z,
            }),
          )),
          (n[38] = K),
          (n[39] = oe),
          (n[40] = se),
          (n[41] = ie),
          (n[42] = z),
          (n[43] = H),
          (n[44] = G),
          (n[45] = j),
          (n[46] = X),
          (n[47] = V),
          (n[48] = ue))
        : (ue = n[48]);
      var ce;
      return (
        n[49] !== ue || n[50] !== U
          ? ((ce = U(ue)), (n[49] = ue), (n[50] = U), (n[51] = ce))
          : (ce = n[51]),
        ce
      );
    }
    function $(t) {
      var n = o("react-compiler-runtime").c(76),
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
      var C = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        b;
      n[11] !== i
        ? ((b = function (t) {
            i == null || i(t);
          }),
          (n[11] = i),
          (n[12] = b))
        : (b = n[12]);
      var v = b,
        S;
      n[13] !== a
        ? ((S = function (t) {
            a == null || a(t);
          }),
          (n[13] = a),
          (n[14] = S))
        : (S = n[14]);
      var R = S,
        L;
      n[15] !== r
        ? ((L = function (t) {
            r == null || r(t);
          }),
          (n[15] = r),
          (n[16] = L))
        : (L = n[16]);
      var E = L,
        k = C ? y - f : f,
        I;
      n[17] !== C || n[18] !== k
        ? ((I = P(k, C)), (n[17] = C), (n[18] = k), (n[19] = I))
        : (I = n[19]);
      var T = I,
        x = T.trackEnd,
        $ = T.trackStart,
        M;
      n[20] !== C || n[21] !== R || n[22] !== E || n[23] !== v || n[24] !== f
        ? ((M = {
            onChange: R,
            onChangeStart: v,
            onChangeEnd: E,
            min: h,
            max: y,
            isRTL: C,
            value: f,
          }),
          (n[20] = C),
          (n[21] = R),
          (n[22] = E),
          (n[23] = v),
          (n[24] = f),
          (n[25] = M))
        : (M = n[25]);
      var w = N(M),
        A = w.onMouseDown,
        F = w.onPointerDown,
        O = w.onTouchStart,
        B = w.thumbRef,
        W = w.wrapperRef,
        q = g(!1),
        U = q[0],
        V = q[1],
        H;
      n[26] !== U || n[27] !== R || n[28] !== v || n[29] !== f
        ? ((H = function (t) {
            var e = f;
            if (t.keyCode === o("WebBloksConstants").KEY_LEFT) e = e - 1;
            else if (t.keyCode === o("WebBloksConstants").KEY_RIGHT) e = e + 1;
            else return;
            (U || (V(!0), v(e)), R(e));
          }),
          (n[26] = U),
          (n[27] = R),
          (n[28] = v),
          (n[29] = f),
          (n[30] = H))
        : (H = n[30]);
      var G = H,
        z;
      n[31] !== E || n[32] !== f
        ? ((z = function (t) {
            (t.keyCode !== o("WebBloksConstants").KEY_LEFT &&
              t.keyCode !== o("WebBloksConstants").KEY_RIGHT) ||
              (V(!1), E(f));
          }),
          (n[31] = E),
          (n[32] = f),
          (n[33] = z))
        : (z = n[33]);
      var j = z,
        K,
        Q,
        X;
      if (n[34] !== u) {
        var Y = u;
        ((K = Y["aria-label"]),
          (Q = Y.disabled),
          (X = babelHelpers.objectWithoutPropertiesLoose(Y, s)),
          (n[34] = u),
          (n[35] = K),
          (n[36] = Q),
          (n[37] = X));
      } else ((K = n[35]), (Q = n[36]), (X = n[37]));
      var J;
      n[38] !== m
        ? ((J = { height: m }), (n[38] = m), (n[39] = J))
        : (J = n[39]);
      var Z;
      n[40] !== l || n[41] !== _
        ? ((Z = c.jsx("div", {
            className: D.rail,
            style: { height: _, backgroundColor: l },
          })),
          (n[40] = l),
          (n[41] = _),
          (n[42] = Z))
        : (Z = n[42]);
      var ee = $ + "%",
        te = x + "%",
        ne;
      n[43] !== ee || n[44] !== te || n[45] !== p || n[46] !== _
        ? ((ne = c.jsx("div", {
            className: D.track,
            style: { left: ee, right: te, height: _, backgroundColor: p },
          })),
          (n[43] = ee),
          (n[44] = te),
          (n[45] = p),
          (n[46] = _),
          (n[47] = ne))
        : (ne = n[47]);
      var re = m / 2,
        oe = m / 2,
        ae;
      n[48] !== re || n[49] !== oe
        ? ((ae = { marginLeft: re, marginRight: oe }),
          (n[48] = re),
          (n[49] = oe),
          (n[50] = ae))
        : (ae = n[50]);
      var ie = k + "%",
        le;
      n[51] !== ie || n[52] !== d || n[53] !== m
        ? ((le = { left: ie, height: m, width: m, backgroundColor: d }),
          (n[51] = ie),
          (n[52] = d),
          (n[53] = m),
          (n[54] = le))
        : (le = n[54]);
      var se;
      n[55] !== K ||
      n[56] !== Q ||
      n[57] !== G ||
      n[58] !== j ||
      n[59] !== le ||
      n[60] !== B ||
      n[61] !== f
        ? ((se = c.jsx("div", {
            ref: B,
            className: D.thumb,
            role: "slider",
            "aria-label": K,
            "aria-valuenow": f,
            "aria-valuemin": h,
            "aria-valuemax": y,
            disabled: Q,
            onKeyDown: G,
            onKeyUp: j,
            tabIndex: 0,
            style: le,
          })),
          (n[55] = K),
          (n[56] = Q),
          (n[57] = G),
          (n[58] = j),
          (n[59] = le),
          (n[60] = B),
          (n[61] = f),
          (n[62] = se))
        : (se = n[62]);
      var ue;
      n[63] !== ae || n[64] !== se
        ? ((ue = c.jsx("div", {
            className: D.thumbWrapper,
            style: ae,
            children: se,
          })),
          (n[63] = ae),
          (n[64] = se),
          (n[65] = ue))
        : (ue = n[65]);
      var ce;
      return (
        n[66] !== A ||
        n[67] !== F ||
        n[68] !== O ||
        n[69] !== X ||
        n[70] !== ne ||
        n[71] !== ue ||
        n[72] !== J ||
        n[73] !== Z ||
        n[74] !== W
          ? ((ce = c.jsxs(
              "div",
              babelHelpers.extends({}, X, {
                ref: W,
                className: D.wrapper,
                onMouseDown: A,
                onPointerDown: F,
                onTouchStart: O,
                style: J,
                children: [Z, ne, ue],
              }),
            )),
            (n[66] = A),
            (n[67] = F),
            (n[68] = O),
            (n[69] = X),
            (n[70] = ne),
            (n[71] = ue),
            (n[72] = J),
            (n[73] = Z),
            (n[74] = W),
            (n[75] = ce))
          : (ce = n[75]),
        ce
      );
    }
    function P(e, t) {
      var n, r;
      if (((n = h), (r = y - e), t)) {
        var o = n;
        ((n = r), (r = o));
      }
      return { trackStart: n, trackEnd: r };
    }
    function N(e) {
      var t = o("react-compiler-runtime").c(44),
        n = e.isRTL,
        r = e.max,
        a = e.min,
        i = e.onChange,
        l = e.onChangeEnd,
        s = e.onChangeStart,
        u = e.value,
        c = f(null),
        d = f(null),
        m = f(null),
        p;
      t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== s
        ? ((p = function (t) {
            var e,
              o = t.clientX;
            if (c.current != null) {
              var l = w(c.current, o, a, r, n);
              ((e = d.current) == null || e.focus(),
                s == null || s(l),
                i == null || i(l));
            }
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = s),
          (t[5] = p))
        : (p = t[5]);
      var _ = p,
        g;
      t[6] !== n || t[7] !== r || t[8] !== a || t[9] !== i
        ? ((g = function (t) {
            var e = t.clientX;
            if (c.current != null) {
              var o = w(c.current, e, a, r, n);
              i == null || i(o);
            }
          }),
          (t[6] = n),
          (t[7] = r),
          (t[8] = a),
          (t[9] = i),
          (t[10] = g))
        : (g = t[10]);
      var h = g,
        y;
      t[11] !== l || t[12] !== u
        ? ((y = function () {
            l == null || l(u);
          }),
          (t[11] = l),
          (t[12] = u),
          (t[13] = y))
        : (y = t[13]);
      var C = y,
        b;
      if (window.PointerEvent === void 0) {
        var v;
        t[14] !== h
          ? ((v = function (t) {
              t.button === 0 &&
                (h == null ||
                  h({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }));
            }),
            (t[14] = h),
            (t[15] = v))
          : (v = t[15]);
        var S = v,
          R;
        t[16] !== S || t[17] !== C
          ? ((R = function (t) {
              t.button === 0 &&
                (C == null || C(),
                window.removeEventListener("mousemove", S, !1),
                window.removeEventListener("mouseup", R, !1));
            }),
            (t[16] = S),
            (t[17] = C),
            (t[18] = R))
          : (R = t[18]);
        var L;
        t[19] !== S || t[20] !== R || t[21] !== _
          ? ((L = function (t) {
              t.button === 0 &&
                (_ == null ||
                  _({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }),
                t.stopPropagation(),
                t.preventDefault(),
                window.addEventListener("mousemove", S, !1),
                window.addEventListener("mouseup", R, !1));
            }),
            (t[19] = S),
            (t[20] = R),
            (t[21] = _),
            (t[22] = L))
          : (L = t[22]);
        var E = L,
          k;
        t[23] !== h
          ? ((k = function (t) {
              var e = M(t, m);
              if (e != null) {
                var n = e.clientX,
                  r = e.pageX,
                  o = e.pageY;
                h == null || h({ clientX: n, pageX: r, pageY: o });
              }
            }),
            (t[23] = h),
            (t[24] = k))
          : (k = t[24]);
        var I = k,
          T;
        t[25] !== C || t[26] !== I
          ? ((T = function (t) {
              var e = M(t, m);
              e != null &&
                (C == null || C(),
                (m.current = null),
                window.removeEventListener("touchmove", I, !1),
                window.removeEventListener("touchend", T, !1),
                window.removeEventListener("touchcancel", T, !1));
            }),
            (t[25] = C),
            (t[26] = I),
            (t[27] = T))
          : (T = t[27]);
        var D;
        t[28] !== _ || t[29] !== T || t[30] !== I
          ? ((D = function (t) {
              if (!(t.changedTouches.length === 0 || m.current != null)) {
                var e = t.changedTouches[0];
                (t.stopPropagation(),
                  t.preventDefault(),
                  (m.current = e.identifier),
                  _ == null ||
                    _({ clientX: e.clientX, pageX: e.pageX, pageY: e.pageY }),
                  window.addEventListener("touchmove", I, !1),
                  window.addEventListener("touchend", T, !1),
                  window.addEventListener("touchcancel", T, !1));
              }
            }),
            (t[28] = _),
            (t[29] = T),
            (t[30] = I),
            (t[31] = D))
          : (D = t[31]);
        var x = D,
          $;
        (t[32] !== E || t[33] !== x
          ? (($ = {
              onMouseDown: E,
              onTouchStart: x,
              wrapperRef: c,
              thumbRef: d,
            }),
            (t[32] = E),
            (t[33] = x),
            (t[34] = $))
          : ($ = t[34]),
          (b = $));
      } else {
        var P;
        t[35] !== h
          ? ((P = function (t) {
              t.pointerId === m.current &&
                (h == null ||
                  h({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }));
            }),
            (t[35] = h),
            (t[36] = P))
          : (P = t[36]);
        var N = P,
          A;
        t[37] !== C || t[38] !== N
          ? ((A = function (t) {
              t.pointerId === m.current &&
                (C == null || C(),
                (m.current = null),
                window.removeEventListener("pointermove", N, !1),
                window.removeEventListener("pointerup", A, !1),
                window.removeEventListener("pointercancel", A, !1));
            }),
            (t[37] = C),
            (t[38] = N),
            (t[39] = A))
          : (A = t[39]);
        var F;
        if (t[40] !== _ || t[41] !== N || t[42] !== A) {
          var O = function (t) {
            t.button === 0 &&
              m.current == null &&
              (_ == null ||
                _({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }),
              t.stopPropagation(),
              t.preventDefault(),
              (m.current = t.pointerId),
              window.addEventListener("pointermove", N, !1),
              window.addEventListener("pointerup", A, !1),
              window.addEventListener("pointercancel", A, !1));
          };
          ((F = { onPointerDown: O, wrapperRef: c, thumbRef: d }),
            (t[40] = _),
            (t[41] = N),
            (t[42] = A),
            (t[43] = F));
        } else F = t[43];
        b = F;
      }
      return b;
    }
    function M(e, t) {
      var n = Array.from(e.changedTouches).findIndex(function (e) {
        var n = e.identifier;
        return n === t.current;
      });
      return n < 0 ? null : e.changedTouches[n];
    }
    function w(e, t, n, r, o) {
      var a = e.getBoundingClientRect(),
        i = a.left,
        l = a.width,
        s = t - i;
      return (o && (s = i + l - t), A((s / l) * (r - n) + n, n, r));
    }
    function A(e, t, n) {
      return Math.min(Math.max(Math.round(e), t), n);
    }
    l.default = x;
  },
  98,
);
