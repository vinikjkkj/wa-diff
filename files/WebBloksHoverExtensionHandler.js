__d(
  "WebBloksHoverExtensionHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "#",
      l = "$",
      s = "&",
      u = {
        getStyles: function (t) {
          return { pointerEvents: "auto" };
        },
        onMount: function (n, r, o) {
          var t,
            a = n.getExpression(e),
            i = n.getExpression(l),
            u = n.getExpression(s),
            c = !1,
            d = !1;
          function m(e) {
            if (c) {
              c = !1;
              return;
            }
            a != null &&
              (o.executeCatch(r.current, a, [r.current, o.bloksContext]),
              (d = !1));
          }
          function p(e) {
            if (d) {
              d = !1;
              return;
            }
            i != null &&
              o.executeCatch(r.current, i, [r.current, o.bloksContext]);
          }
          function _(e) {
            ((c = !0), (d = !0));
          }
          var f =
            (t = r.current.uiMutableContainer.domNode) == null
              ? void 0
              : t.current;
          if (!f) return;
          var g = f,
            h = null,
            y = null,
            C = null;
          function b() {
            (h != null &&
              y != null &&
              u != null &&
              o.executeCatch(r.current, u, [r.current, o.bloksContext, h, y]),
              (h = null),
              (y = null),
              (C = null));
          }
          function v(e) {
            if (u != null) {
              var t = g.getBoundingClientRect();
              ((h = Math.max(0, Math.min(e.clientX - t.left, t.width))),
                (y = Math.max(0, Math.min(e.clientY - t.top, t.height))),
                C == null && (C = window.requestAnimationFrame(b)));
            }
          }
          return (
            f.addEventListener("mouseenter", m),
            f.addEventListener("mouseleave", p),
            f.addEventListener("touchstart", _),
            u != null && f.addEventListener("mousemove", v),
            function () {
              (f.removeEventListener("mouseenter", m),
                f.removeEventListener("mouseleave", p),
                f.removeEventListener("touchstart", _),
                f.removeEventListener("mousemove", v),
                C != null && window.cancelAnimationFrame(C));
            }
          );
        },
      },
      c = u;
    i.default = c;
  },
  66,
);
