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
      g = 128;
    function h(e) {
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
        var h = a.get("styles");
        ((g = b(h)), (t[0] = a), (t[1] = g));
      } else g = t[1];
      var v = g,
        S = v.maxFontSize,
        R = v.minFontSize,
        L = _(y),
        E = L[0],
        k = L[1],
        I;
      t[2] !== f || t[3] !== E.max || t[4] !== E.mid || t[5] !== E.min
        ? ((I = function () {
            var e = E.min,
              t = E.max,
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
            (r ? (e = E.mid + 1) : (t = E.mid - 1),
              k(function (n) {
                return babelHelpers.extends({}, n, { mid: o, max: t, min: e });
              }));
          }),
          (t[2] = f),
          (t[3] = E.max),
          (t[4] = E.mid),
          (t[5] = E.min),
          (t[6] = I))
        : (I = t[6]);
      var T = I,
        D;
      t[7] !== T
        ? ((D = function () {
            return T();
          }),
          (t[7] = T),
          (t[8] = D))
        : (D = t[8]);
      var x;
      (t[9] !== T ||
      t[10] !== f ||
      t[11] !== E.max ||
      t[12] !== E.mid ||
      t[13] !== E.min
        ? ((x = [T, f, E.max, E.mid, E.min]),
          (t[9] = T),
          (t[10] = f),
          (t[11] = E.max),
          (t[12] = E.mid),
          (t[13] = E.min),
          (t[14] = x))
        : (x = t[14]),
        m(D, x));
      var $, P;
      (t[15] !== S || t[16] !== f || t[17] !== R
        ? (($ = function () {
            u.current !== f &&
              ((u.current = f),
              k(function () {
                return C(R - 1, S);
              }));
          }),
          (P = [S, f, R]),
          (t[15] = S),
          (t[16] = f),
          (t[17] = R),
          (t[18] = $),
          (t[19] = P))
        : (($ = t[18]), (P = t[19])),
        m($, P));
      var N, M;
      (t[20] !== S || t[21] !== R
        ? ((N = function () {
            var e = i.current;
            if (e != null) {
              var t = new ResizeObserver(function () {
                (window.clearTimeout(l.current),
                  (l.current = window.setTimeout(function () {
                    k(function () {
                      return C(R, S);
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
          (M = [S, R]),
          (t[20] = S),
          (t[21] = R),
          (t[22] = N),
          (t[23] = M))
        : ((N = t[22]), (M = t[23])),
        m(N, M));
      var w = E.mid + "px",
        A;
      t[24] !== w
        ? ((A = { fontSize: w, display: "inline-block" }),
          (t[24] = w),
          (t[25] = A))
        : (A = t[25]);
      var F;
      return (
        t[26] !== n || t[27] !== A
          ? ((F = s.jsx("span", { ref: i, style: A, children: n })),
            (t[26] = n),
            (t[27] = A),
            (t[28] = F))
          : (F = t[28]),
        F
      );
    }
    function y() {
      return C(f, g);
    }
    function C(e, t) {
      return { min: e, max: t, mid: Math.floor(t / 2) };
    }
    function b(e) {
      var t = g,
        n = f;
      if (e != null)
        for (var r of e)
          switch (r == null ? void 0 : r.styleId) {
            case "bk.style.textspan.ResizeToFitStyle": {
              var a = r.get("min_text_size");
              a != null && (n = parseFloat(o("WebBloksUtils").toPx(a)));
              var i = r.get("max_text_size");
              i != null && (t = parseFloat(o("WebBloksUtils").toPx(i)));
            }
          }
      return { maxFontSize: t, minFontSize: n };
    }
    l.default = h;
  },
  98,
);
