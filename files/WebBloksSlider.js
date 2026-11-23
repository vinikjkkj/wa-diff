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
        n = e.externalStyle,
        r = e.node,
        a = r.get(E),
        i = r.get(k),
        l = r.getSubNode(L),
        s = r.getSubNode(I),
        u = r.getSubNode(C),
        d = r.get(b),
        m = r.get(o("WebBloksSliderMinificationKeys").SLIDER_PROGRESS),
        _ = r.getExpression(v),
        f = r.getExpression(R),
        h = r.getExpression(S),
        T = o("WebBloksComponentContext").useWebBloksContext(),
        D = T.bloksContext,
        $ = T.executeCatch,
        P = o("WebBloksTheme").useTheme().getTheme(),
        N = o("WebBloksStyle").useStyle(r, n),
        M = N.wrapper,
        w = N.wrapperProps,
        A = a != null ? parseFloat(a) : 24,
        F = i != null ? parseFloat(i) : 4,
        O =
          l != null
            ? o("WebBloksUtils").getRGBColorWithTheme(l, P)
            : o("WebBloksTheme").WebBloksThemeVars["primary-bg"],
        B =
          s != null ? o("WebBloksUtils").getRGBColorWithTheme(s, P) : "#DBDBDB",
        W =
          u != null
            ? o("WebBloksUtils").getRGBColorWithTheme(u, P)
            : o("WebBloksTheme").WebBloksThemeVars["fds-gray-65"],
        q = g(((t = d != null ? d : m) != null ? t : 0) * y),
        U = q[0],
        V = q[1],
        H = g(!1),
        G = H[0],
        z = H[1];
      p(
        function () {
          !G &&
            m != null &&
            (V(m * y),
            o("WebBloksMutations").updateProperty(
              D.treeManager,
              r,
              o("WebBloksSliderMinificationKeys").SLIDER_PROGRESS,
              null,
            ));
        },
        [D.treeManager, G, r, m, U],
      );
      var j = function (t) {
          (_ != null && $(r, _, [Number(t) / y, D]), V(Number(t)));
        },
        K = function (t) {
          (f != null && $(r, f, [t, D]), z(!0));
        },
        Q = function (t) {
          (h != null && $(r, h, [t, D]), z(!1));
        };
      return M(
        c.jsx(
          x,
          babelHelpers.extends({}, w, {
            onChange: j,
            onChangeStart: K,
            onChangeEnd: Q,
            value: U,
            thumbSize: A,
            railColor: B,
            trackColor: W,
            trackHeight: F,
            thumbColor: O,
          }),
        ),
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(t) {
      var n = t.onChange,
        r = t.onChangeEnd,
        a = t.onChangeStart,
        i = t.railColor,
        l = t.thumbColor,
        u = t.thumbSize,
        d = t.trackColor,
        p = t.trackHeight,
        _ = t.value,
        f = babelHelpers.objectWithoutPropertiesLoose(t, e),
        C = m(
          function (e) {
            a == null || a(e);
          },
          [a],
        ),
        b = m(
          function (e) {
            n == null || n(e);
          },
          [n],
        ),
        v = m(
          function (e) {
            r == null || r(e);
          },
          [r],
        ),
        S = "calc(" + _ + "% - " + u / 2 + "px)",
        R = $({
          onChange: b,
          onChangeStart: C,
          onChangeEnd: v,
          min: h,
          max: y,
          value: _,
        }),
        L = R.onMouseDown,
        E = R.onPointerDown,
        k = R.onTouchStart,
        I = R.thumbRef,
        D = R.wrapperRef,
        x = g(!1),
        P = x[0],
        N = x[1],
        M = m(
          function (e) {
            var t = _;
            if (e.keyCode === o("WebBloksConstants").KEY_LEFT) t -= 1;
            else if (e.keyCode === o("WebBloksConstants").KEY_RIGHT) t += 1;
            else return;
            (P || (N(!0), C(t)), b(t));
          },
          [P, b, C, _],
        ),
        w = m(
          function (e) {
            (e.keyCode !== o("WebBloksConstants").KEY_LEFT &&
              e.keyCode !== o("WebBloksConstants").KEY_RIGHT) ||
              (N(!1), v(_));
          },
          [v, _],
        ),
        A = f["aria-label"],
        F = f.disabled,
        O = babelHelpers.objectWithoutPropertiesLoose(f, s);
      return c.jsxs(
        "div",
        babelHelpers.extends({}, O, {
          ref: D,
          className: T.wrapper,
          onMouseDown: L,
          onPointerDown: E,
          onTouchStart: k,
          style: { height: u },
          children: [
            c.jsx("div", {
              className: T.rail,
              style: { height: p, backgroundColor: i },
            }),
            c.jsx("div", {
              className: T.track,
              style: { width: _ + "%", height: p, backgroundColor: d },
            }),
            c.jsx("div", {
              className: T.thumbWrapper,
              style: { marginLeft: u / 2, marginRight: u / 2 },
              children: c.jsx("div", {
                ref: I,
                className: T.thumb,
                role: "slider",
                "aria-label": A,
                "aria-valuenow": _,
                "aria-valuemin": h,
                "aria-valuemax": y,
                disabled: F,
                onKeyDown: M,
                onKeyUp: w,
                tabIndex: 0,
                style: {
                  marginInlineStart: S,
                  WebkitMarginStart: S,
                  height: u,
                  width: u,
                  backgroundColor: l,
                },
              }),
            }),
          ],
        }),
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      var t = e.max,
        n = e.min,
        r = e.onChange,
        o = e.onChangeEnd,
        a = e.onChangeStart,
        i = e.value,
        l = f(null),
        s = f(null),
        u = f(null),
        c = f(!1),
        d = m(
          function (e) {
            var o,
              i = e.clientX,
              u = l.current;
            if (u != null) {
              c.current = window.getComputedStyle(u).direction === "rtl";
              var d = N(u, i, n, t, c.current);
              ((o = s.current) == null || o.focus(),
                a == null || a(d),
                r == null || r(d));
            }
          },
          [t, n, r, a],
        ),
        p = m(
          function (e) {
            var o = e.clientX;
            if (l.current != null) {
              var a = N(l.current, o, n, t, c.current);
              r == null || r(a);
            }
          },
          [t, n, r],
        ),
        g = m(
          function () {
            o == null || o(i);
          },
          [o, i],
        );
      return _(
        function () {
          if (window.PointerEvent === void 0) {
            var e = function (t) {
                t.button === 0 &&
                  (p == null ||
                    p({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }));
              },
              t = function (r) {
                r.button === 0 &&
                  (g == null || g(),
                  window.removeEventListener("mousemove", e, !1),
                  window.removeEventListener("mouseup", t, !1));
              },
              n = function (r) {
                r.button === 0 &&
                  (d == null ||
                    d({ clientX: r.clientX, pageX: r.pageX, pageY: r.pageY }),
                  r.stopPropagation(),
                  r.preventDefault(),
                  window.addEventListener("mousemove", e, !1),
                  window.addEventListener("mouseup", t, !1));
              },
              r = function (t) {
                var e = P(t, u);
                if (e != null) {
                  var n = e.clientX,
                    r = e.pageX,
                    o = e.pageY;
                  p == null || p({ clientX: n, pageX: r, pageY: o });
                }
              },
              o = function (t) {
                var e = P(t, u);
                e != null &&
                  (g == null || g(),
                  (u.current = null),
                  window.removeEventListener("touchmove", r, !1),
                  window.removeEventListener("touchend", o, !1),
                  window.removeEventListener("touchcancel", o, !1));
              },
              a = function (t) {
                if (!(t.changedTouches.length === 0 || u.current != null)) {
                  var e = t.changedTouches[0];
                  (t.stopPropagation(),
                    t.preventDefault(),
                    (u.current = e.identifier),
                    d == null ||
                      d({ clientX: e.clientX, pageX: e.pageX, pageY: e.pageY }),
                    window.addEventListener("touchmove", r, !1),
                    window.addEventListener("touchend", o, !1),
                    window.addEventListener("touchcancel", o, !1));
                }
              };
            return {
              onMouseDown: n,
              onTouchStart: a,
              wrapperRef: l,
              thumbRef: s,
            };
          } else {
            var i = function (t) {
                t.pointerId === u.current &&
                  (p == null ||
                    p({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }));
              },
              c = function (t) {
                t.pointerId === u.current &&
                  (g == null || g(),
                  (u.current = null),
                  window.removeEventListener("pointermove", i, !1),
                  window.removeEventListener("pointerup", c, !1),
                  window.removeEventListener("pointercancel", c, !1));
              },
              m = function (t) {
                t.button === 0 &&
                  u.current == null &&
                  (d == null ||
                    d({ clientX: t.clientX, pageX: t.pageX, pageY: t.pageY }),
                  t.stopPropagation(),
                  t.preventDefault(),
                  (u.current = t.pointerId),
                  window.addEventListener("pointermove", i, !1),
                  window.addEventListener("pointerup", c, !1),
                  window.addEventListener("pointercancel", c, !1));
              };
            return { onPointerDown: m, wrapperRef: l, thumbRef: s };
          }
        },
        [d, p, g],
      );
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
