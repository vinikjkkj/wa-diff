__d(
  "VideoPlayerOnViewability.react",
  [
    "DOMRectIsEqual",
    "DOMRectReadOnly",
    "VideoPlayerViewabilityConstants",
    "react",
    "useIntersectionObserver",
    "useUnsafeRef_DEPRECATED",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useRef,
      _ = function (t) {},
      f = 10,
      g = [0.25, 0.75, 0.99, 1].concat(
        new Array(10).fill().map(function (e, t) {
          return t / 10;
        }),
      );
    function h(t) {
      var n = t.viewportMargins,
        o = p(-1),
        a = p(-1),
        i = p(
          r("DOMRectReadOnly").fromRect({ height: 0, width: 0, x: 0, y: 0 }),
        ),
        l = p(null),
        s = p(null),
        c =
          -n.top +
          "px " +
          -n.right +
          "px " +
          -n.bottom +
          "px " +
          -n.left +
          "px",
        h = t.onVideoPlayerViewabilityInfoChange || _,
        y = f,
        C = d(
          function (e) {
            if (
              e.time > a.current &&
              !r("DOMRectIsEqual")(e.boundingClientRect, i.current)
            ) {
              var t = e.boundingClientRect,
                n = t.height,
                o = t.width,
                s = t.x,
                u = t.y,
                c = l.current,
                d = r("DOMRectReadOnly").fromRect({
                  height: n,
                  width: o,
                  x: s,
                  y: u,
                });
              if (
                ((i.current = d),
                (a.current = e.time),
                c === null ||
                  c <= 0 ||
                  c <=
                    r("VideoPlayerViewabilityConstants")
                      .DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE)
              )
                return;
              h({ positionToViewport: d, visiblePercentage: c });
            }
          },
          [i, l, h],
        ),
        b = d(
          function (e) {
            if (
              e.time > o.current &&
              (e.intersectionRatio !== l.current ||
                !r("DOMRectIsEqual")(e.boundingClientRect, i.current))
            ) {
              var t = e.boundingClientRect,
                n = t.height,
                u = t.width,
                c = t.x,
                d = t.y,
                m = e.intersectionRatio,
                p = r("DOMRectReadOnly").fromRect({
                  height: n,
                  width: u,
                  x: c,
                  y: d,
                }),
                _ = s.current,
                f = _,
                g = !1,
                y = Math.abs((_ || 0) * 100 - (m || 0) * 100);
              ((y >= 1 || (y > 0 && m < (_ || 0))) &&
                ((f = m), (s.current = m), (g = !0)),
                (l.current = m),
                (o.current = e.time));
              var C = i.current;
              if (
                ((i.current = p),
                (a.current = e.time),
                !g && r("DOMRectIsEqual")(C, p))
              )
                return;
              f !== null && h({ positionToViewport: p, visiblePercentage: f });
            }
          },
          [a, i, l, h, o],
        ),
        v = m(
          function () {
            for (var e = [], t = 1; t <= y; t++)
              e.push("-" + (100 - (t / y) * 100) + "% 0% 0% 0%");
            return e;
          },
          [y],
        ),
        S = (e || (e = r("useUnsafeRef_DEPRECATED")))([]);
      S.current = [];
      for (var R = 0; R < v.length; R++)
        S.current.push(
          d(
            r("useIntersectionObserver")(C, {
              root: null,
              rootMargin: v[R],
              threshold: g,
            }),
            [v[R], g, r("useIntersectionObserver")],
          ),
        );
      var L = S.current.length,
        E = d(
          function (e) {
            for (var t = 0; t < L; t++) S.current[t](e);
          },
          [L, S],
        ),
        k = d(
          r("useIntersectionObserver")(b, {
            root: null,
            rootMargin: c,
            threshold: g,
          }),
          [b, c, g, r("useIntersectionObserver")],
        ),
        I = d(
          function (e) {
            (k(e), E(e));
          },
          [k, E],
        );
      return u.jsx("div", {
        className: "x5yr21d x1uhb9sk xh8yej3",
        ref: I,
        children: u.Children.only(t.children),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
