__d(
  "WAWebVoipRaisedHandDisplay.react",
  ["fbt", "react", "stylex"],
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
      var n,
        o = t.emojiSize,
        a = o === void 0 ? "default" : o,
        i = t.inlinePosition,
        l = i === void 0 ? "start" : i,
        s = t.isHandRaised,
        u = s === void 0 ? !1 : s,
        d = t.participantName,
        C = d === void 0 ? null : d,
        v = t.spacing,
        S = v === void 0 ? "compact" : v,
        R = _(!1),
        L = R[0],
        E = R[1],
        k = _(!1),
        I = k[0],
        T = k[1],
        D = _(!1),
        x = D[0],
        $ = D[1],
        P = p(null);
      return (
        u !== x && ($(u), u ? (T(!0), E(!0)) : E(!1)),
        m(
          function () {
            return (
              u
                ? P.current != null &&
                  (window.clearTimeout(P.current), (P.current = null))
                : (P.current = window.setTimeout(function () {
                    (T(!1), (P.current = null));
                  }, f)),
              function () {
                P.current != null &&
                  (window.clearTimeout(P.current), (P.current = null));
              }
            );
          },
          [u],
        ),
        I
          ? c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  g.container,
                  (n = y[S]) == null ? void 0 : n[l],
                ),
                {
                  "aria-live": "polite",
                  "data-testid": void 0,
                  role: "status",
                  children: [
                    c.jsx(
                      "span",
                      babelHelpers.extends(
                        { "aria-hidden": !0 },
                        {
                          0: {
                            className:
                              "xngnso2 xo5v014 xldrc09 xg01cxk x12y6twl",
                          },
                          2: {
                            className:
                              "xo5v014 xldrc09 x579bpy xg01cxk x12y6twl",
                          },
                          1: {
                            className:
                              "xngnso2 xo5v014 xldrc09 x1hc1fzr x3oybdh",
                          },
                          3: {
                            className:
                              "xo5v014 xldrc09 x579bpy x1hc1fzr x3oybdh",
                          },
                        }[((a === "large") << 1) | (!!L << 0)],
                        { children: h },
                      ),
                    ),
                    c.jsx("span", {
                      className:
                        "x10l6tqk x1i1rx1s xjm9jq1 xexx8yu xyri2b x18d9i69 x1c1uobl x1y332i5 xjn30re x1jyxor1 x1hb08if x6ikm8r x10wlt62 xzpqnlu xuxw1ft x972fbf x10w94by x1qhh985 x14e42zd",
                      children: b(L, C),
                    }),
                  ],
                },
              ),
            )
          : null
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
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
