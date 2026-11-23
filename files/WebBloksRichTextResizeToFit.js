__d(
  "WebBloksRichTextResizeToFit",
  ["WebBloksModel", "WebBloksRichTextContext", "WebBloksUtils", "react"],
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
      h = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      y = "bk.style.textspan.ResizeToFitStyle",
      C = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("$");
    function v(e) {
      var t = e.children,
        n = e.node,
        o = p(null),
        a = p(null),
        i = p(null),
        l = d(r("WebBloksRichTextContext")),
        u = l.maxNumberOfLines,
        y = n.get(h),
        C = R(y),
        b = C.maxFontSize,
        v = C.minFontSize,
        L = _(function () {
          return S(f, g);
        }),
        E = L[0],
        k = L[1],
        I = c(
          function () {
            var e = E.min,
              t = E.max;
            function n() {
              var e,
                t,
                n =
                  (e =
                    o == null || (t = o.current) == null
                      ? void 0
                      : t.offsetHeight) != null
                    ? e
                    : 0,
                r = window
                  .getComputedStyle(o == null ? void 0 : o.current)
                  .getPropertyValue("line-height");
              return Math.floor(n / parseInt(r, 10));
            }
            var r = n() <= u,
              a = Math.floor((e + t) / 2);
            (r ? (e = E.mid + 1) : (t = E.mid - 1),
              k(function (n) {
                return babelHelpers.extends({}, n, { mid: a, max: t, min: e });
              }));
          },
          [u, E.max, E.mid, E.min],
        );
      return (
        m(
          function () {
            return I();
          },
          [I, u, E.max, E.mid, E.min],
        ),
        m(
          function () {
            i.current !== u &&
              ((i.current = u),
              k(function () {
                return S(v - 1, b);
              }));
          },
          [b, u, v],
        ),
        m(
          function () {
            var e = o.current;
            if (e != null) {
              var t = new ResizeObserver(function () {
                var e;
                (window.clearTimeout((e = a.current) != null ? e : void 0),
                  (a.current = window.setTimeout(function () {
                    k(function () {
                      return S(v, b);
                    });
                  }, 100)));
              });
              return (
                t.observe(e),
                function () {
                  var n;
                  (t.unobserve(e),
                    window.clearTimeout((n = a.current) != null ? n : void 0));
                }
              );
            }
          },
          [b, v],
        ),
        s.jsx("span", {
          ref: o,
          style: { fontSize: E.mid + "px", display: "inline-block" },
          children: t,
        })
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e, t) {
      return { min: e, max: t, mid: Math.floor(t / 2) };
    }
    function R(e) {
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
