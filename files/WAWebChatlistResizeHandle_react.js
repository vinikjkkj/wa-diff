__d(
  "WAWebChatlistResizeHandle.react",
  ["fbt", "react", "react-compiler-runtime", "stylex", "useHoverState"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = 24,
      f = 8,
      g = {
        zIndex: "x1ks9yow",
        pointerEvents: "x47corl",
        position: "x10l6tqk",
        width: "x1xc55vz",
        top: "x13vifvy",
        bottom: "x1ey2m1c",
        insetInlineEnd: "xqxgn94",
        left: "",
        right: "",
        background: "xudi1rl",
        $$css: !0,
      },
      h = {
        resizeIndicator: function (t) {
          return [
            g,
            {
              "--x-insetInlineEnd": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("calc(" + t + "px - " + f + "px)"),
            },
          ];
        },
      };
    function y(t) {
      var n = o("react-compiler-runtime").c(4),
        a = t.offset,
        i;
      n[0] !== a
        ? ((i = (e || (e = r("stylex"))).props(h.resizeIndicator(a))),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l;
      return (
        n[2] !== i
          ? ((l = c.jsx(
              "div",
              babelHelpers.extends({}, i, { "data-testid": void 0 }),
            )),
            (n[2] = i),
            (n[3] = l))
          : (l = n[3]),
        l
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.maxWidth,
        a = e.minWidth,
        i = e.onResize,
        l = e.onResizeEnd,
        u = e.onResizeReset,
        d = m(0),
        _ = m(0),
        f = m(null),
        g = m(!1),
        h = p(!1),
        C = h[0],
        b = h[1],
        v = p(0),
        S = v[0],
        R = v[1],
        L = r("useHoverState")(),
        E = L.isHovered,
        k = L.onMouseEnter,
        I = L.onMouseLeave,
        T;
      t[0] !== n || t[1] !== a
        ? ((T = function (t) {
            var e = t - d.current;
            return Math.max(a, Math.min(n, _.current + e));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = T))
        : (T = t[2]);
      var D = T,
        x;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = function (t) {
            if (t.button === 0) {
              (t.preventDefault(), (g.current = !0), b(!0));
              var e = t.currentTarget;
              (e.setPointerCapture(t.pointerId), (d.current = t.clientX));
              var n = e.parentElement;
              n && (_.current = n.getBoundingClientRect().width);
            }
          }),
          (t[3] = x))
        : (x = t[3]);
      var $ = x,
        P;
      t[4] !== D || t[5] !== i
        ? ((P = function (t) {
            if (g.current) {
              var e = D(t.clientX);
              (R(_.current - e), i == null || i(e));
            }
          }),
          (t[4] = D),
          (t[5] = i),
          (t[6] = P))
        : (P = t[6]);
      var N = P,
        M;
      t[7] !== D || t[8] !== l
        ? ((M = function (t) {
            var e = t.currentTarget;
            e.hasPointerCapture(t.pointerId) &&
              e.releasePointerCapture(t.pointerId);
            var n = D(t.clientX);
            (l == null || l(n), (g.current = !1), b(!1), R(0));
          }),
          (t[7] = D),
          (t[8] = l),
          (t[9] = M))
        : (M = t[9]);
      var w = M,
        A;
      t[10] !== w
        ? ((A = function (t) {
            g.current && w(t);
          }),
          (t[10] = w),
          (t[11] = A))
        : (A = t[11]);
      var F = A,
        O;
      t[12] !== S || t[13] !== E || t[14] !== C
        ? ((O = (C || E) && c.jsx(y, { offset: S })),
          (t[12] = S),
          (t[13] = E),
          (t[14] = C),
          (t[15] = O))
        : (O = t[15]);
      var B;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = {
            className:
              "x10l6tqk xvy4d1p x13vifvy x1ey2m1c x15z6fc2 x7eptgl x1oy9qf3",
          }),
          (t[16] = B))
        : (B = t[16]);
      var W;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Resize the chat list panel")), (t[17] = W))
        : (W = t[17]);
      var q;
      t[18] !== F ||
      t[19] !== N ||
      t[20] !== w ||
      t[21] !== k ||
      t[22] !== I ||
      t[23] !== u
        ? ((q = c.jsx(
            "button",
            babelHelpers.extends(
              { ref: f, onMouseEnter: k, onMouseLeave: I, onDoubleClick: u },
              B,
              {
                onPointerDown: $,
                onPointerMove: N,
                onPointerUp: w,
                onPointerLeave: F,
                "aria-label": W,
                "data-testid": void 0,
              },
            ),
          )),
          (t[18] = F),
          (t[19] = N),
          (t[20] = w),
          (t[21] = k),
          (t[22] = I),
          (t[23] = u),
          (t[24] = q))
        : (q = t[24]);
      var U;
      return (
        t[25] !== O || t[26] !== q
          ? ((U = c.jsxs(c.Fragment, { children: [O, q] })),
            (t[25] = O),
            (t[26] = q),
            (t[27] = U))
          : (U = t[27]),
        U
      );
    }
    l.default = C;
  },
  226,
);
