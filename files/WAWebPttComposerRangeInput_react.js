__d(
  "WAWebPttComposerRangeInput.react",
  [
    "WANullthrows",
    "WAWebKeyboardConstants",
    "WAWebMiscGatingUtils",
    "WDSFocusStateStyles",
    "clamp",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        base: {
          cursor: "x1ypdohk",
          borderStartStartRadius: "xr9e8f9",
          borderStartEndRadius: "x1e4oeot",
          borderEndEndRadius: "x1ui04y5",
          borderEndStartRadius: "x6en5u8",
          $$css: !0,
        },
        disabled: { cursor: "x1h6gzvc", $$css: !0 },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(47),
        a = t.ariaLabel,
        i = t.value,
        l = t.valueText,
        s = t.min,
        c = t.max,
        d = t.smallSkip,
        g = t.largeSkip,
        h = t.onChange,
        y = t.onCommit,
        C = t.disabled,
        b = t.children,
        v = t.tabIndex,
        S = t.inset,
        R;
      n[0] !== S
        ? ((R = S === void 0 ? [0, 0] : S), (n[0] = S), (n[1] = R))
        : (R = n[1]);
      var L = R,
        E = _(!1),
        k = E[0],
        I = E[1],
        T = _(!1),
        D = T[0],
        x = T[1],
        $;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            I(!0);
          }),
          (n[2] = $))
        : ($ = n[2]);
      var P = $,
        N;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            I(!1);
          }),
          (n[3] = N))
        : (N = n[3]);
      var M = N,
        w = p(),
        A = p(),
        F = p(),
        O;
      n[4] !== c || n[5] !== s
        ? ((O = function (t) {
            var e = r("WANullthrows")(A.current),
              n = r("WANullthrows")(F.current),
              o = t.clientX,
              a = r("clamp")((o - e) / (n - e), 0, 1);
            return s + a * (c - s);
          }),
          (n[4] = c),
          (n[5] = s),
          (n[6] = O))
        : (O = n[6]);
      var B = O,
        W;
      n[7] !== B || n[8] !== h
        ? ((W = function (t) {
            (t.preventDefault(), h == null || h(B(t)));
          }),
          (n[7] = B),
          (n[8] = h),
          (n[9] = W))
        : (W = n[9]);
      var q = r("useWAWebStableCallback")(W),
        U;
      n[10] !== B || n[11] !== h || n[12] !== y
        ? ((U = function (t) {
            if (t.button === 0) {
              M();
              var e = B(t);
              (h == null || h(e), y(e));
            }
          }),
          (n[10] = B),
          (n[11] = h),
          (n[12] = y),
          (n[13] = U))
        : (U = n[13]);
      var V = r("useWAWebStableCallback")(U),
        H;
      n[14] !== B || n[15] !== C || n[16] !== L || n[17] !== h
        ? ((H = function (t) {
            var e;
            if (t.button === 0 && C !== !0) {
              t.preventDefault();
              var n = r("WANullthrows")(
                  (e = w.current) == null ? void 0 : e.getBoundingClientRect(),
                ),
                o = L[0],
                a = L[1];
              ((A.current = n.left + o),
                (F.current = n.left + n.width - a),
                P(),
                h == null || h(B(t)));
            }
          }),
          (n[14] = B),
          (n[15] = C),
          (n[16] = L),
          (n[17] = h),
          (n[18] = H))
        : (H = n[18]);
      var G = H,
        z;
      n[19] !== C ||
      n[20] !== D ||
      n[21] !== g ||
      n[22] !== c ||
      n[23] !== s ||
      n[24] !== y ||
      n[25] !== d ||
      n[26] !== i
        ? ((z = function (t) {
            if (C !== !0) {
              var e;
              if (o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled())
                e: switch (t.key) {
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .ARROW_RIGHT: {
                    D && ((e = d), t.stopPropagation());
                    break e;
                  }
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .ARROW_LEFT: {
                    D && ((e = -d), t.stopPropagation());
                    break e;
                  }
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .PAGE_UP: {
                    D && (e = g);
                    break e;
                  }
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .PAGE_DOWN: {
                    D && (e = -g);
                    break e;
                  }
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .ENTER:
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .SPACE: {
                    x(!0);
                    break e;
                  }
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .ESCAPE:
                    (x(!1), t.stopPropagation());
                }
              else
                e: switch (t.key) {
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .ARROW_RIGHT:
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .ARROW_UP: {
                    e = d;
                    break e;
                  }
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .ARROW_LEFT:
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .ARROW_DOWN: {
                    e = -d;
                    break e;
                  }
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .PAGE_UP: {
                    e = g;
                    break e;
                  }
                  case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                    .PAGE_DOWN:
                    e = -g;
                }
              if (e != null) {
                t.preventDefault();
                var n = r("clamp")(i + e, s, c);
                y(n);
              }
            }
          }),
          (n[19] = C),
          (n[20] = D),
          (n[21] = g),
          (n[22] = c),
          (n[23] = s),
          (n[24] = y),
          (n[25] = d),
          (n[26] = i),
          (n[27] = z))
        : (z = n[27]);
      var j = z,
        K;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = function () {
            x(!1);
          }),
          (n[28] = K))
        : (K = n[28]);
      var Q = K,
        X,
        Y;
      (n[29] !== q || n[30] !== V || n[31] !== k
        ? ((X = function () {
            if (k)
              return (
                window.addEventListener("mousemove", q),
                window.addEventListener("mouseup", V),
                function () {
                  (window.removeEventListener("mousemove", q),
                    window.removeEventListener("mouseup", V));
                }
              );
          }),
          (Y = [q, V, k]),
          (n[29] = q),
          (n[30] = V),
          (n[31] = k),
          (n[32] = X),
          (n[33] = Y))
        : ((X = n[32]), (Y = n[33])),
        m(X, Y));
      var J;
      n[34] !== C
        ? ((J = (e || (e = r("stylex"))).props(
            f.base,
            C === !0 && f.disabled,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
          )),
          (n[34] = C),
          (n[35] = J))
        : (J = n[35]);
      var Z;
      return (
        n[36] !== a ||
        n[37] !== b ||
        n[38] !== j ||
        n[39] !== G ||
        n[40] !== c ||
        n[41] !== s ||
        n[42] !== J ||
        n[43] !== v ||
        n[44] !== i ||
        n[45] !== l
          ? ((Z = u.jsx(
              "div",
              babelHelpers.extends({ ref: w }, J, {
                onBlur: Q,
                role: "slider",
                "aria-label": a,
                "aria-valuenow": i,
                "aria-valuetext": l,
                "aria-valuemin": s,
                "aria-valuemax": c,
                "data-tab": v,
                tabIndex: 0,
                onMouseDown: G,
                onKeyDown: j,
                children: b,
              }),
            )),
            (n[36] = a),
            (n[37] = b),
            (n[38] = j),
            (n[39] = G),
            (n[40] = c),
            (n[41] = s),
            (n[42] = J),
            (n[43] = v),
            (n[44] = i),
            (n[45] = l),
            (n[46] = Z))
          : (Z = n[46]),
        Z
      );
    }
    l.default = g;
  },
  98,
);
