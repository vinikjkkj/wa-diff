__d(
  "WAWebPttComposerRangeInput.react",
  [
    "WANullthrows",
    "WAWebKeyboardConstants",
    "WAWebMiscGatingUtils",
    "WDSFocusStateStyles",
    "clamp",
    "react",
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
      var n = t.ariaLabel,
        a = t.value,
        i = t.valueText,
        l = t.min,
        s = t.max,
        c = t.smallSkip,
        g = t.largeSkip,
        h = t.onChange,
        y = t.onCommit,
        C = t.disabled,
        b = t.children,
        v = t.tabIndex,
        S = t.inset,
        R = S === void 0 ? [0, 0] : S,
        L = _(!1),
        E = L[0],
        k = L[1],
        I = _(!1),
        T = I[0],
        D = I[1],
        x = d(
          function () {
            k(!0);
          },
          [k],
        ),
        $ = d(
          function () {
            k(!1);
          },
          [k],
        ),
        P = p(),
        N = p(),
        M = p(),
        w = function (t) {
          var e = r("WANullthrows")(N.current),
            n = r("WANullthrows")(M.current),
            o = t.clientX,
            a = r("clamp")((o - e) / (n - e), 0, 1);
          return l + a * (s - l);
        },
        A = r("useWAWebStableCallback")(function (e) {
          (e.preventDefault(), h == null || h(w(e)));
        }),
        F = r("useWAWebStableCallback")(function (e) {
          if (e.button === 0) {
            $();
            var t = w(e);
            (h == null || h(t), y(t));
          }
        }),
        O = function (t) {
          var e;
          if (t.button === 0 && C !== !0) {
            t.preventDefault();
            var n = r("WANullthrows")(
                (e = P.current) == null ? void 0 : e.getBoundingClientRect(),
              ),
              o = R[0],
              a = R[1];
            ((N.current = n.left + o),
              (M.current = n.left + n.width - a),
              x(),
              h == null || h(w(t)));
          }
        },
        B = function (t) {
          if (C !== !0) {
            var e;
            if (o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled())
              switch (t.key) {
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .ARROW_RIGHT:
                  T && ((e = c), t.stopPropagation());
                  break;
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .ARROW_LEFT:
                  T && ((e = -c), t.stopPropagation());
                  break;
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .PAGE_UP:
                  T && (e = g);
                  break;
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .PAGE_DOWN:
                  T && (e = -g);
                  break;
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ENTER:
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.SPACE:
                  D(!0);
                  break;
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .ESCAPE:
                  (D(!1), t.stopPropagation());
                  break;
              }
            else
              switch (t.key) {
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .ARROW_RIGHT:
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .ARROW_UP:
                  e = c;
                  break;
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .ARROW_LEFT:
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .ARROW_DOWN:
                  e = -c;
                  break;
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .PAGE_UP:
                  e = g;
                  break;
                case o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE
                  .PAGE_DOWN:
                  e = -g;
                  break;
              }
            if (e != null) {
              t.preventDefault();
              var n = r("clamp")(a + e, l, s);
              y(n);
            }
          }
        },
        W = function () {
          D(!1);
        };
      return (
        m(
          function () {
            if (E)
              return (
                window.addEventListener("mousemove", A),
                window.addEventListener("mouseup", F),
                function () {
                  (window.removeEventListener("mousemove", A),
                    window.removeEventListener("mouseup", F));
                }
              );
          },
          [A, F, E],
        ),
        u.jsx(
          "div",
          babelHelpers.extends(
            { ref: P },
            (e || (e = r("stylex"))).props(
              f.base,
              C === !0 && f.disabled,
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            ),
            {
              onBlur: W,
              role: "slider",
              "aria-label": n,
              "aria-valuenow": a,
              "aria-valuetext": i,
              "aria-valuemin": l,
              "aria-valuemax": s,
              "data-tab": v,
              tabIndex: 0,
              onMouseDown: O,
              onKeyDown: B,
              children: b,
            },
          ),
        )
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
