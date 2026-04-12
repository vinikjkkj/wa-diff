__d(
  "WAWebVoipReactionDisplay.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = 300,
      f = {
        container: {
          position: "x10l6tqk",
          zIndex: "x1n327nk",
          pointerEvents: "x47corl",
          $$css: !0,
        },
        spacingCompact: {
          bottom: "xajswfj",
          insetInlineStart: "x1gzglq8",
          $$css: !0,
        },
        spacingLarge: {
          bottom: "x1t6nodo",
          insetInlineStart: "x4brfc7",
          $$css: !0,
        },
        offset: {
          insetInlineStart: "xr2ch4k",
          left: null,
          right: null,
          $$css: !0,
        },
        offsetLarge: {
          insetInlineStart: "x9pwknu",
          left: null,
          right: null,
          $$css: !0,
        },
        offsetLargeEmojiLarge: {
          insetInlineStart: "xyx8ycp",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function g(t) {
      var n = t.emojiSize,
        o = n === void 0 ? "default" : n,
        a = t.reaction,
        i = t.shouldHaveOffset,
        l = i === void 0 ? !1 : i,
        s = t.spacing,
        c = s === void 0 ? "compact" : s,
        g = p(!1),
        h = g[0],
        y = g[1],
        C = p(null),
        b = C[0],
        v = C[1],
        S = p(null),
        R = S[0],
        L = S[1],
        E = m(null);
      if (
        (a !== R && (L(a), a != null && a !== "" ? (v(a), y(!0)) : y(!1)),
        d(
          function () {
            return (
              a == null || a === ""
                ? (E.current = window.setTimeout(function () {
                    (v(null), (E.current = null));
                  }, _))
                : E.current != null &&
                  (window.clearTimeout(E.current), (E.current = null)),
              function () {
                E.current != null &&
                  (window.clearTimeout(E.current), (E.current = null));
              }
            );
          },
          [a],
        ),
        b == null)
      )
        return null;
      var k = null;
      return (
        l &&
          (c === "large" && o === "large"
            ? (k = f.offsetLargeEmojiLarge)
            : c === "large"
              ? (k = f.offsetLarge)
              : (k = f.offset)),
        u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              f.container,
              c === "large" ? f.spacingLarge : f.spacingCompact,
              k,
            ),
            {
              "data-testid": void 0,
              children: u.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className: "xngnso2 xo5v014 xldrc09 xg01cxk x12y6twl",
                    },
                    2: {
                      className: "xo5v014 xldrc09 x579bpy xg01cxk x12y6twl",
                    },
                    1: {
                      className: "xngnso2 xo5v014 xldrc09 x1hc1fzr x3oybdh",
                    },
                    3: {
                      className: "xo5v014 xldrc09 x579bpy x1hc1fzr x3oybdh",
                    },
                  }[((o === "large") << 1) | (!!h << 0)],
                  { children: b },
                ),
              ),
            },
          ),
        )
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
