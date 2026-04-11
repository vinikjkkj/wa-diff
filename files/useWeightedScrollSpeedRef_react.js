__d(
  "useWeightedScrollSpeedRef.react",
  ["VirtualizationContainerContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useContext,
      c = s.useEffect,
      d = 10,
      m = typeof WeakMap == "function" ? WeakMap : Map,
      p = new m(),
      _ = new m();
    function f(e) {
      var t, n;
      e === void 0 && (e = null);
      var o = u(r("VirtualizationContainerContext")),
        a =
          typeof e == "function"
            ? e()
            : o == null || (t = o.rootElementRef) == null
              ? void 0
              : t.current,
        i = a != null ? a : window,
        l =
          (n = _.get(i)) != null
            ? n
            : {
                lastScrollY: 0,
                lastTime: Date.now(),
                speedHistory: [],
                weightedSpeed: 0,
              };
      return (
        _.set(i, l),
        c(
          function () {
            if (!p.has(i)) {
              var e = function () {
                var e,
                  t = l.lastScrollY,
                  n = l.lastTime,
                  r = l.speedHistory,
                  o =
                    (e =
                      i === window
                        ? window.scrollY
                        : a == null
                          ? void 0
                          : a.scrollTop) != null
                      ? e
                      : 0,
                  s = Date.now(),
                  u = o - t,
                  c = s - n;
                if (c > 0 && u > 0 && c > 0) {
                  var m = Math.abs(u / (c / 1e3));
                  (r.push({ speed: m }), r.length > d && r.shift());
                }
                ((l.lastScrollY = o), (l.lastTime = s));
                var p = 0,
                  _ = 0;
                (r.forEach(function (e, t) {
                  var n = e.speed,
                    r = t + 1;
                  ((p += n * r), (_ += r));
                }),
                  (l.weightedSpeed = _ > 0 ? p / _ : 0));
              };
              (i.addEventListener("scroll", e),
                p.set(i, { handleScroll: e, subscribers: 0 }));
            }
            var t = p.get(i);
            return (
              t && t.subscribers++,
              function () {
                t &&
                  --t.subscribers === 0 &&
                  (i.removeEventListener("scroll", t.handleScroll),
                  p.delete(i),
                  _.delete(i));
              }
            );
          },
          [i, l, a],
        ),
        l
      );
    }
    l.default = f;
  },
  98,
);
