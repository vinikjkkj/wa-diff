__d(
  "WAWebVoipReactionDisplay.react",
  ["react", "react-compiler-runtime", "stylex"],
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
      var n = o("react-compiler-runtime").c(15),
        a = t.emojiSize,
        i = t.reaction,
        l = t.shouldHaveOffset,
        s = t.spacing,
        c = a === void 0 ? "default" : a,
        g = l === void 0 ? !1 : l,
        h = s === void 0 ? "compact" : s,
        y = p(!1),
        C = y[0],
        b = y[1],
        v = p(null),
        S = v[0],
        R = v[1],
        L = p(null),
        E = L[0],
        k = L[1],
        I = m(null);
      i !== E && (k(i), i != null && i !== "" ? (R(i), b(!0)) : b(!1));
      var T, D;
      if (
        (n[0] !== i
          ? ((T = function () {
              return (
                i == null || i === ""
                  ? (I.current = window.setTimeout(function () {
                      (R(null), (I.current = null));
                    }, _))
                  : I.current != null &&
                    (window.clearTimeout(I.current), (I.current = null)),
                function () {
                  I.current != null &&
                    (window.clearTimeout(I.current), (I.current = null));
                }
              );
            }),
            (D = [i]),
            (n[0] = i),
            (n[1] = T),
            (n[2] = D))
          : ((T = n[1]), (D = n[2])),
        d(T, D),
        S == null)
      )
        return null;
      var x = null;
      g &&
        (h === "large" && c === "large"
          ? (x = f.offsetLargeEmojiLarge)
          : h === "large"
            ? (x = f.offsetLarge)
            : (x = f.offset));
      var $;
      n[3] !== x || n[4] !== h
        ? (($ = (e || (e = r("stylex"))).props(
            f.container,
            h === "large" ? f.spacingLarge : f.spacingCompact,
            x,
          )),
          (n[3] = x),
          (n[4] = h),
          (n[5] = $))
        : ($ = n[5]);
      var P;
      n[6] !== c || n[7] !== C
        ? ((P = {
            0: { className: "xngnso2 xo5v014 xldrc09 xg01cxk x12y6twl" },
            2: { className: "xo5v014 xldrc09 x579bpy xg01cxk x12y6twl" },
            1: { className: "xngnso2 xo5v014 xldrc09 x1hc1fzr x3oybdh" },
            3: { className: "xo5v014 xldrc09 x579bpy x1hc1fzr x3oybdh" },
          }[((c === "large") << 1) | (!!C << 0)]),
          (n[6] = c),
          (n[7] = C),
          (n[8] = P))
        : (P = n[8]);
      var N;
      n[9] !== S || n[10] !== P
        ? ((N = u.jsx("span", babelHelpers.extends({}, P, { children: S }))),
          (n[9] = S),
          (n[10] = P),
          (n[11] = N))
        : (N = n[11]);
      var M;
      return (
        n[12] !== $ || n[13] !== N
          ? ((M = u.jsx(
              "div",
              babelHelpers.extends({}, $, {
                "data-testid": void 0,
                children: N,
              }),
            )),
            (n[12] = $),
            (n[13] = N),
            (n[14] = M))
          : (M = n[14]),
        M
      );
    }
    l.default = g;
  },
  98,
);
