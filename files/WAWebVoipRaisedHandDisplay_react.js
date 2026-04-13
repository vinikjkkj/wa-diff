__d(
  "WAWebVoipRaisedHandDisplay.react",
  ["fbt", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState,
      f = 300,
      g = {
        container: {
          position: "x10l6tqk",
          zIndex: "x1n327nk",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        spacingCompactStart: {
          bottom: "xajswfj",
          insetInlineStart: "x1gzglq8",
          left: null,
          right: null,
          $$css: !0,
        },
        spacingCompactEnd: {
          bottom: "xajswfj",
          insetInlineEnd: "xe9xzdg",
          left: null,
          right: null,
          $$css: !0,
        },
        spacingLargeStart: {
          bottom: "x1t6nodo",
          insetInlineStart: "x4brfc7",
          left: null,
          right: null,
          $$css: !0,
        },
        spacingLargeEnd: {
          bottom: "x1t6nodo",
          insetInlineEnd: "x67dgr1",
          left: null,
          right: null,
          $$css: !0,
        },
      },
      h = "\u270B",
      y = {
        large: { start: g.spacingLargeStart, end: g.spacingLargeEnd },
        compact: { start: g.spacingCompactStart, end: g.spacingCompactEnd },
      };
    function C(t) {
      var n = o("react-compiler-runtime").c(21),
        a = t.emojiSize,
        i = t.inlinePosition,
        l = t.isHandRaised,
        s = t.participantName,
        u = t.spacing,
        d = a === void 0 ? "default" : a,
        C = i === void 0 ? "start" : i,
        v = l === void 0 ? !1 : l,
        S = s === void 0 ? null : s,
        R = u === void 0 ? "compact" : u,
        L = _(!1),
        E = L[0],
        k = L[1],
        I = _(!1),
        T = I[0],
        D = I[1],
        x = _(!1),
        $ = x[0],
        P = x[1],
        N = p(null);
      v !== $ && (P(v), v ? (D(!0), k(!0)) : k(!1));
      var M, w;
      if (
        (n[0] !== v
          ? ((M = function () {
              return (
                v
                  ? N.current != null &&
                    (window.clearTimeout(N.current), (N.current = null))
                  : (N.current = window.setTimeout(function () {
                      (D(!1), (N.current = null));
                    }, f)),
                function () {
                  N.current != null &&
                    (window.clearTimeout(N.current), (N.current = null));
                }
              );
            }),
            (w = [v]),
            (n[0] = v),
            (n[1] = M),
            (n[2] = w))
          : ((M = n[1]), (w = n[2])),
        m(M, w),
        !T)
      )
        return null;
      var A;
      if (n[3] !== C || n[4] !== R) {
        var F;
        ((A = (e || (e = r("stylex"))).props(
          g.container,
          (F = y[R]) == null ? void 0 : F[C],
        )),
          (n[3] = C),
          (n[4] = R),
          (n[5] = A));
      } else A = n[5];
      var O;
      n[6] !== d || n[7] !== E
        ? ((O = {
            0: { className: "xngnso2 xo5v014 xldrc09 xg01cxk x12y6twl" },
            2: { className: "xo5v014 xldrc09 x579bpy xg01cxk x12y6twl" },
            1: { className: "xngnso2 xo5v014 xldrc09 x1hc1fzr x3oybdh" },
            3: { className: "xo5v014 xldrc09 x579bpy x1hc1fzr x3oybdh" },
          }[((d === "large") << 1) | (!!E << 0)]),
          (n[6] = d),
          (n[7] = E),
          (n[8] = O))
        : (O = n[8]);
      var B;
      n[9] !== O
        ? ((B = c.jsx(
            "span",
            babelHelpers.extends({ "aria-hidden": !0 }, O, { children: h }),
          )),
          (n[9] = O),
          (n[10] = B))
        : (B = n[10]);
      var W;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = {
            className:
              "x10l6tqk x1i1rx1s xjm9jq1 xexx8yu xyri2b x18d9i69 x1c1uobl x1y332i5 xjn30re x1jyxor1 x1hb08if x6ikm8r x10wlt62 xzpqnlu xuxw1ft x972fbf x10w94by x1qhh985 x14e42zd",
          }),
          (n[11] = W))
        : (W = n[11]);
      var q;
      n[12] !== E || n[13] !== S
        ? ((q = b(E, S)), (n[12] = E), (n[13] = S), (n[14] = q))
        : (q = n[14]);
      var U;
      n[15] !== q
        ? ((U = c.jsx("span", babelHelpers.extends({}, W, { children: q }))),
          (n[15] = q),
          (n[16] = U))
        : (U = n[16]);
      var V;
      return (
        n[17] !== B || n[18] !== U || n[19] !== A
          ? ((V = c.jsxs(
              "div",
              babelHelpers.extends({}, A, {
                "aria-live": "polite",
                "data-testid": void 0,
                role: "status",
                children: [B, U],
              }),
            )),
            (n[17] = B),
            (n[18] = U),
            (n[19] = A),
            (n[20] = V))
          : (V = n[20]),
        V
      );
    }
    function b(e, t) {
      return e
        ? t != null
          ? s._(/*BTDS*/ "{name} raised their hand", [s._param("name", t)])
          : s._(/*BTDS*/ "You raised your hand")
        : t != null
          ? s._(/*BTDS*/ "{name} lowered their hand", [s._param("name", t)])
          : s._(/*BTDS*/ "You lowered your hand");
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
