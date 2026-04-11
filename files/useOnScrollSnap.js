__d(
  "useOnScrollSnap",
  ["WebBloksCollectionScrollRefs", "WebBloksUtils", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t, n) {
      var r = e.getBoundingClientRect(),
        o = t.getBoundingClientRect();
      return n === "column"
        ? o.top >= r.top && o.bottom <= r.bottom
        : o.left >= r.left && o.right <= r.right;
    }
    function m(e, t, n) {
      var r = e.getBoundingClientRect();
      if (t === "column")
        switch (n) {
          case "center":
            return r.top + r.height / 2;
          case "start":
            return r.top;
          case "end":
            return r.bottom;
          default:
            return -1;
        }
      else
        switch (n) {
          case "center":
            return r.left + r.width / 2;
          case "start":
            return r.left;
          case "end":
            return r.right;
          default:
            return -1;
        }
    }
    function p(e, t) {
      if (!e) return [[], []];
      var n = Array.from(e.querySelectorAll(":scope > *")),
        r = n.map(function (e) {
          return t === "column" ? e.offsetTop : e.offsetLeft;
        });
      return [n, r];
    }
    function _(e, t, n) {
      var r = e.containerElement,
        o = e.scrollableElement,
        a = Array.from(r.querySelectorAll(":scope > *"));
      if (a.length === 0) return null;
      if (n === "center") {
        if (d(o, a[0], t)) return 0;
        if (d(o, a[a.length - 1], t)) return a.length - 1;
      }
      for (
        var i = m(o, t, n), l = -1, s = Number.MAX_VALUE, u = 0;
        u < a.length;
        u++
      ) {
        var c = m(a[u], t, n),
          p = Math.abs(i - c);
        p < s && ((s = p), (l = u));
      }
      return l;
    }
    function f(e, t) {
      var n = t.onPageScroll,
        r = t.onScroll,
        a = t.onScrollSnap,
        i = e.getValues(),
        l = i.direction,
        s = i.snap,
        d = i.starting_index,
        m = c(d),
        f = l === "column",
        g = o("WebBloksCollectionScrollRefs").findWebbloksCollectionScrollRefs(
          e,
        ),
        h = g.containerElementRef,
        y = g.scrollableElementRef;
      u(
        function () {
          var e = h == null ? void 0 : h.current,
            t = y == null ? void 0 : y.current;
          if (
            !(e == null || t == null || (a == null && r == null && n == null))
          ) {
            var i = p(e, l),
              u = i[0],
              c = i[1],
              d = function () {
                if ((r && r(), t != null && n)) {
                  var o = f ? t.scrollTop : t.scrollLeft,
                    i = Math.max(
                      c.findIndex(function (e) {
                        return e > o;
                      }),
                      1,
                    ),
                    u = i - 1,
                    d = o - c[u],
                    p = d / (c[i] - c[u]);
                  n(u, d, p);
                }
                if (t != null && s != null && s !== "none" && a) {
                  var g = _(
                    { containerElement: e, scrollableElement: t },
                    l,
                    s,
                  );
                  g !== m.current && ((m.current = g), a(g));
                }
              };
            return (
              t.addEventListener(
                "scroll",
                d,
                o("WebBloksUtils").passiveTouchEventOptions,
              ),
              t.addEventListener(
                "touchend",
                d,
                o("WebBloksUtils").passiveTouchEventOptions,
              ),
              function () {
                (t.removeEventListener("scroll", d),
                  t.removeEventListener("touchend", d));
              }
            );
          }
        },
        [l, s, a, r],
      );
    }
    l.default = f;
  },
  98,
);
