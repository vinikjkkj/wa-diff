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
      C = o("WebBloksStyle").createStyles({
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
    function b(e) {
      var t,
        n = o("react-compiler-runtime").c(52),
        r = e.externalStyle,
        a = e.node,
        i;
      n[0] !== a
        ? ((i = a.get("thumb_diameter")), (n[0] = a), (n[1] = i))
        : (i = n[1]);
      var l = i,
        s;
      n[2] !== a
        ? ((s = a.get("track_height")), (n[2] = a), (n[3] = s))
        : (s = n[3]);
      var u = s,
        d = a.getSubNode("thumb_color"),
        m = a.getSubNode("unfilled_track_color"),
        _ = a.getSubNode("filled_track_color"),
        f;
      n[4] !== a
        ? ((f = a.get("initial_value")), (n[4] = a), (n[5] = f))
        : (f = n[5]);
      var h = f,
        C = a.get("progress"),
        b;
      n[6] !== a
        ? ((b = a.getExpression("on_change")), (n[6] = a), (n[7] = b))
        : (b = n[7]);
      var S = b,
        R;
      n[8] !== a
        ? ((R = a.getExpression("on_start_touch")), (n[8] = a), (n[9] = R))
        : (R = n[9]);
      var L = R,
        E;
      n[10] !== a
        ? ((E = a.getExpression("on_end_touch")), (n[10] = a), (n[11] = E))
        : (E = n[11]);
      var k = E,
        I = o("WebBloksComponentContext").useWebBloksContext(),
        T = I.bloksContext,
        D = I.executeCatch,
        x = o("WebBloksTheme").useTheme().getTheme(),
        $ = o("WebBloksStyle").useStyle(a, r),
        P = $.wrapper,
        N = $.wrapperProps,
        M = l != null ? parseFloat(l) : 24,
        w = u != null ? parseFloat(u) : 4,
        A =
          d != null
            ? o("WebBloksUtils").getRGBColorWithTheme(d, x)
            : o("WebBloksTheme").WebBloksThemeVars["primary-bg"],
        F =
          m != null ? o("WebBloksUtils").getRGBColorWithTheme(m, x) : "#DBDBDB",
        O =
          _ != null
            ? o("WebBloksUtils").getRGBColorWithTheme(_, x)
            : o("WebBloksTheme").WebBloksThemeVars["fds-gray-65"],
        B = g(((t = h != null ? h : C) != null ? t : 0) * y),
        W = B[0],
        q = B[1],
        U = g(!1),
        V = U[0],
        H = U[1],
        G;
      n[12] !== T.treeManager || n[13] !== V || n[14] !== a || n[15] !== C
        ? ((G = function () {
            !V &&
              C != null &&
              (q(C * y),
              o("WebBloksMutations").updateProperty(
                T.treeManager,
                a,
                "progress",
                null,
              ));
          }),
          (n[12] = T.treeManager),
          (n[13] = V),
          (n[14] = a),
          (n[15] = C),
          (n[16] = G))
        : (G = n[16]);
      var z;
      (n[17] !== T.treeManager ||
      n[18] !== V ||
      n[19] !== a ||
      n[20] !== C ||
      n[21] !== W
        ? ((z = [T.treeManager, V, a, C, W]),
          (n[17] = T.treeManager),
          (n[18] = V),
          (n[19] = a),
          (n[20] = C),
          (n[21] = W),
          (n[22] = z))
        : (z = n[22]),
        p(G, z));
      var j;
      n[23] !== T || n[24] !== D || n[25] !== a || n[26] !== S
        ? ((j = function (t) {
            (S != null && D(a, S, [Number(t) / y, T]), q(Number(t)));
          }),
          (n[23] = T),
          (n[24] = D),
          (n[25] = a),
          (n[26] = S),
          (n[27] = j))
        : (j = n[27]);
      var K = j,
        Q;
      n[28] !== T || n[29] !== D || n[30] !== a || n[31] !== L
        ? ((Q = function (t) {
            (L != null && D(a, L, [t, T]), H(!0));
          }),
          (n[28] = T),
          (n[29] = D),
          (n[30] = a),
          (n[31] = L),
          (n[32] = Q))
        : (Q = n[32]);
      var X = Q,
        Y;
      n[33] !== T || n[34] !== D || n[35] !== a || n[36] !== k
        ? ((Y = function (t) {
            (k != null && D(a, k, [t, T]), H(!1));
          }),
          (n[33] = T),
          (n[34] = D),
          (n[35] = a),
          (n[36] = k),
          (n[37] = Y))
        : (Y = n[37]);
      var J = Y,
        Z;
      n[38] !== O ||
      n[39] !== K ||
      n[40] !== J ||
      n[41] !== X ||
      n[42] !== A ||
      n[43] !== M ||
      n[44] !== w ||
      n[45] !== F ||
      n[46] !== W ||
      n[47] !== N
        ? ((Z = c.jsx(
            v,
            babelHelpers.extends({}, N, {
              onChange: K,
              onChangeStart: X,
              onChangeEnd: J,
              value: W,
              thumbSize: M,
              railColor: F,
              trackColor: O,
              trackHeight: w,
              thumbColor: A,
            }),
          )),
          (n[38] = O),
          (n[39] = K),
          (n[40] = J),
          (n[41] = X),
          (n[42] = A),
          (n[43] = M),
          (n[44] = w),
          (n[45] = F),
          (n[46] = W),
          (n[47] = N),
          (n[48] = Z))
        : (Z = n[48]);
      var ee;
      return (
        n[49] !== Z || n[50] !== P
          ? ((ee = P(Z)), (n[49] = Z), (n[50] = P), (n[51] = ee))
          : (ee = n[51]),
        ee
      );
    }
    function v(t) {
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
      var b = o("WebBloksEnvironmentContext").useWebBloksEnvironment().isRtl,
        v;
      n[11] !== i
        ? ((v = function (t) {
            i == null || i(t);
          }),
          (n[11] = i),
          (n[12] = v))
        : (v = n[12]);
      var L = v,
        E;
      n[13] !== a
        ? ((E = function (t) {
            a == null || a(t);
          }),
          (n[13] = a),
          (n[14] = E))
        : (E = n[14]);
      var k = E,
        I;
      n[15] !== r
        ? ((I = function (t) {
            r == null || r(t);
          }),
          (n[15] = r),
          (n[16] = I))
        : (I = n[16]);
      var T = I,
        D = b ? y - f : f,
        x;
      n[17] !== b || n[18] !== D
        ? ((x = S(D, b)), (n[17] = b), (n[18] = D), (n[19] = x))
        : (x = n[19]);
      var $ = x,
        P = $.trackEnd,
        N = $.trackStart,
        M;
      n[20] !== b || n[21] !== k || n[22] !== T || n[23] !== L || n[24] !== f
        ? ((M = {
            onChange: k,
            onChangeStart: L,
            onChangeEnd: T,
            min: h,
            max: y,
            isRTL: b,
            value: f,
          }),
          (n[20] = b),
          (n[21] = k),
          (n[22] = T),
          (n[23] = L),
          (n[24] = f),
          (n[25] = M))
        : (M = n[25]);
      var w = R(M),
        A = w.onMouseDown,
        F = w.onPointerDown,
        O = w.onTouchStart,
        B = w.thumbRef,
        W = w.wrapperRef,
        q = g(!1),
        U = q[0],
        V = q[1],
        H;
      n[26] !== U || n[27] !== k || n[28] !== L || n[29] !== f
        ? ((H = function (t) {
            var e = f;
            if (t.keyCode === o("WebBloksConstants").KEY_LEFT) e = e - 1;
            else if (t.keyCode === o("WebBloksConstants").KEY_RIGHT) e = e + 1;
            else return;
            (U || (V(!0), L(e)), k(e));
          }),
          (n[26] = U),
          (n[27] = k),
          (n[28] = L),
          (n[29] = f),
          (n[30] = H))
        : (H = n[30]);
      var G = H,
        z;
      n[31] !== T || n[32] !== f
        ? ((z = function (t) {
            (t.keyCode !== o("WebBloksConstants").KEY_LEFT &&
              t.keyCode !== o("WebBloksConstants").KEY_RIGHT) ||
              (V(!1), T(f));
          }),
          (n[31] = T),
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
            className: C.rail,
            style: { height: _, backgroundColor: l },
          })),
          (n[40] = l),
          (n[41] = _),
          (n[42] = Z))
        : (Z = n[42]);
      var ee = N + "%",
        te = P + "%",
        ne;
      n[43] !== ee || n[44] !== te || n[45] !== p || n[46] !== _
        ? ((ne = c.jsx("div", {
            className: C.track,
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
      var ie = D + "%",
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
            className: C.thumb,
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
            className: C.thumbWrapper,
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
                className: C.wrapper,
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
    function S(e, t) {
      var n, r;
      if (((n = h), (r = y - e), t)) {
        var o = n;
        ((n = r), (r = o));
      }
      return { trackStart: n, trackEnd: r };
    }
    function R(e) {
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
              var l = E(c.current, o, a, r, n);
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
              var o = E(c.current, e, a, r, n);
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
        var k;
        t[19] !== S || t[20] !== R || t[21] !== _
          ? ((k = function (t) {
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
            (t[22] = k))
          : (k = t[22]);
        var I = k,
          T;
        t[23] !== h
          ? ((T = function (t) {
              var e = L(t, m);
              if (e != null) {
                var n = e.clientX,
                  r = e.pageX,
                  o = e.pageY;
                h == null || h({ clientX: n, pageX: r, pageY: o });
              }
            }),
            (t[23] = h),
            (t[24] = T))
          : (T = t[24]);
        var D = T,
          x;
        t[25] !== C || t[26] !== D
          ? ((x = function (t) {
              var e = L(t, m);
              e != null &&
                (C == null || C(),
                (m.current = null),
                window.removeEventListener("touchmove", D, !1),
                window.removeEventListener("touchend", x, !1),
                window.removeEventListener("touchcancel", x, !1));
            }),
            (t[25] = C),
            (t[26] = D),
            (t[27] = x))
          : (x = t[27]);
        var $;
        t[28] !== _ || t[29] !== x || t[30] !== D
          ? (($ = function (t) {
              if (!(t.changedTouches.length === 0 || m.current != null)) {
                var e = t.changedTouches[0];
                (t.stopPropagation(),
                  t.preventDefault(),
                  (m.current = e.identifier),
                  _ == null ||
                    _({ clientX: e.clientX, pageX: e.pageX, pageY: e.pageY }),
                  window.addEventListener("touchmove", D, !1),
                  window.addEventListener("touchend", x, !1),
                  window.addEventListener("touchcancel", x, !1));
              }
            }),
            (t[28] = _),
            (t[29] = x),
            (t[30] = D),
            (t[31] = $))
          : ($ = t[31]);
        var P = $,
          N;
        (t[32] !== I || t[33] !== P
          ? ((N = {
              onMouseDown: I,
              onTouchStart: P,
              wrapperRef: c,
              thumbRef: d,
            }),
            (t[32] = I),
            (t[33] = P),
            (t[34] = N))
          : (N = t[34]),
          (b = N));
      } else {
        var M;
        t[35] !== h
          ? ((M = function (t) {
              t.pointerId === m.current &&
                (h == null ||
                  h({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }));
            }),
            (t[35] = h),
            (t[36] = M))
          : (M = t[36]);
        var w = M,
          A;
        t[37] !== C || t[38] !== w
          ? ((A = function (t) {
              t.pointerId === m.current &&
                (C == null || C(),
                (m.current = null),
                window.removeEventListener("pointermove", w, !1),
                window.removeEventListener("pointerup", A, !1),
                window.removeEventListener("pointercancel", A, !1));
            }),
            (t[37] = C),
            (t[38] = w),
            (t[39] = A))
          : (A = t[39]);
        var F;
        if (t[40] !== _ || t[41] !== w || t[42] !== A) {
          var O = function (t) {
            t.button === 0 &&
              m.current == null &&
              (_ == null ||
                _({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }),
              t.stopPropagation(),
              t.preventDefault(),
              (m.current = t.pointerId),
              window.addEventListener("pointermove", w, !1),
              window.addEventListener("pointerup", A, !1),
              window.addEventListener("pointercancel", A, !1));
          };
          ((F = { onPointerDown: O, wrapperRef: c, thumbRef: d }),
            (t[40] = _),
            (t[41] = w),
            (t[42] = A),
            (t[43] = F));
        } else F = t[43];
        b = F;
      }
      return b;
    }
    function L(e, t) {
      var n = Array.from(e.changedTouches).findIndex(function (e) {
        var n = e.identifier;
        return n === t.current;
      });
      return n < 0 ? null : e.changedTouches[n];
    }
    function E(e, t, n, r, o) {
      var a = e.getBoundingClientRect(),
        i = a.left,
        l = a.width,
        s = t - i;
      return (o && (s = i + l - t), k((s / l) * (r - n) + n, n, r));
    }
    function k(e, t, n) {
      return Math.min(Math.max(Math.round(e), t), n);
    }
    l.default = b;
  },
  98,
);
