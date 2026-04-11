__d(
  "WAWebResizeObserver",
  ["err", "resize-observer-polyfill-deprecated"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return (e == null && (e = new WeakMap()), e);
    }
    var u;
    function c() {
      return (
        u == null &&
          (u = new (r("resize-observer-polyfill-deprecated"))(function (e) {
            for (var t of e) {
              var n = s().get(t.target),
                r = t.contentRect,
                o = r.bottom,
                a = r.height,
                i = r.left,
                l = r.right,
                u = r.top,
                c = r.width,
                d = r.x,
                m = r.y;
              n != null &&
                n({
                  x: d,
                  y: m,
                  width: c,
                  height: a,
                  top: u,
                  left: i,
                  bottom: o,
                  right: l,
                });
            }
          })),
        u
      );
    }
    function d(e, t) {
      var n = c(),
        o = s();
      if (o.has(e)) throw r("err")("You can't observe the same element twice.");
      return (
        o.set(e, t),
        n.observe(e),
        function () {
          (n.unobserve(e), o.delete(e));
        }
      );
    }
    l.observe = d;
  },
  98,
);
