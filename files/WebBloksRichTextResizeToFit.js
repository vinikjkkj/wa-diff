__d(
  "WebBloksRichTextResizeToFit",
  [
    "WebBloksRichTextContext",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useLayoutEffect,
      p = u.useRef,
      _ = u.useState,
      f = 12,
      g = 128,
      h = "&",
      y = "\u41FB",
      C = "#",
      b = "$";
    function v(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.children,
        a = e.node,
        i = p(null),
        l = p(null),
        u = p(null),
        c = d(r("WebBloksRichTextContext")),
        f = c.maxNumberOfLines,
        g;
      if (t[0] !== a) {
        var y = a.get(h);
        ((g = L(y)), (t[0] = a), (t[1] = g));
      } else g = t[1];
      var C = g,
        b = C.maxFontSize,
        v = C.minFontSize,
        E = _(S),
        k = E[0],
        I = E[1],
        T;
      t[2] !== f || t[3] !== k.max || t[4] !== k.mid || t[5] !== k.min
        ? ((T = function () {
            var e = k.min,
              t = k.max,
              n = function () {
                var e,
                  t,
                  n =
                    (e =
                      i == null || (t = i.current) == null
                        ? void 0
                        : t.offsetHeight) != null
                      ? e
                      : 0,
                  r = window
                    .getComputedStyle(i == null ? void 0 : i.current)
                    .getPropertyValue("line-height");
                return Math.floor(n / parseInt(r, 10));
              },
              r = n() <= f,
              o = Math.floor((e + t) / 2);
            (r ? (e = k.mid + 1) : (t = k.mid - 1),
              I(function (n) {
                return babelHelpers.extends({}, n, { mid: o, max: t, min: e });
              }));
          }),
          (t[2] = f),
          (t[3] = k.max),
          (t[4] = k.mid),
          (t[5] = k.min),
          (t[6] = T))
        : (T = t[6]);
      var D = T,
        x;
      t[7] !== D
        ? ((x = function () {
            return D();
          }),
          (t[7] = D),
          (t[8] = x))
        : (x = t[8]);
      var $;
      (t[9] !== D ||
      t[10] !== f ||
      t[11] !== k.max ||
      t[12] !== k.mid ||
      t[13] !== k.min
        ? (($ = [D, f, k.max, k.mid, k.min]),
          (t[9] = D),
          (t[10] = f),
          (t[11] = k.max),
          (t[12] = k.mid),
          (t[13] = k.min),
          (t[14] = $))
        : ($ = t[14]),
        m(x, $));
      var P, N;
      (t[15] !== b || t[16] !== f || t[17] !== v
        ? ((P = function () {
            u.current !== f &&
              ((u.current = f),
              I(function () {
                return R(v - 1, b);
              }));
          }),
          (N = [b, f, v]),
          (t[15] = b),
          (t[16] = f),
          (t[17] = v),
          (t[18] = P),
          (t[19] = N))
        : ((P = t[18]), (N = t[19])),
        m(P, N));
      var M, w;
      (t[20] !== b || t[21] !== v
        ? ((M = function () {
            var e = i.current;
            if (e != null) {
              var t = new ResizeObserver(function () {
                (window.clearTimeout(l.current),
                  (l.current = window.setTimeout(function () {
                    I(function () {
                      return R(v, b);
                    });
                  }, 100)));
              });
              return (
                t.observe(e),
                function () {
                  (t.unobserve(e), window.clearTimeout(l.current));
                }
              );
            }
          }),
          (w = [b, v]),
          (t[20] = b),
          (t[21] = v),
          (t[22] = M),
          (t[23] = w))
        : ((M = t[22]), (w = t[23])),
        m(M, w));
      var A = k.mid + "px",
        F;
      t[24] !== A
        ? ((F = { fontSize: A, display: "inline-block" }),
          (t[24] = A),
          (t[25] = F))
        : (F = t[25]);
      var O;
      return (
        t[26] !== n || t[27] !== F
          ? ((O = s.jsx("span", { ref: i, style: F, children: n })),
            (t[26] = n),
            (t[27] = F),
            (t[28] = O))
          : (O = t[28]),
        O
      );
    }
    function S() {
      return R(f, g);
    }
    function R(e, t) {
      return { min: e, max: t, mid: Math.floor(t / 2) };
    }
    function L(e) {
      var t = g,
        n = f;
      if (e != null)
        for (var r of e)
          switch (r == null ? void 0 : r.styleId) {
            case y:
            case "bk.style.textspan.ResizeToFitStyle": {
              var a = o("WebBloksUtils").cast(r),
                i = a.get(b);
              i != null && (n = parseFloat(o("WebBloksUtils").toPx(i)));
              var l = a.get(C);
              l != null && (t = parseFloat(o("WebBloksUtils").toPx(l)));
            }
          }
      return { maxFontSize: t, minFontSize: n };
    }
    l.default = v;
  },
  98,
);
