__d(
  "WebBloksHoverExtensionHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        getStyles: function (t) {
          return { pointerEvents: "auto" };
        },
        onMount: function (t, n, r) {
          var e,
            o = t.getExpression("on_pointer_enter"),
            a = t.getExpression("on_pointer_leave"),
            i = t.getExpression("on_pointer_move"),
            l = !1,
            s = !1;
          function u(e) {
            if (l) {
              l = !1;
              return;
            }
            o != null &&
              (r.executeCatch(n.current, o, [n.current, r.bloksContext]),
              (s = !1));
          }
          function c(e) {
            if (s) {
              s = !1;
              return;
            }
            a != null &&
              r.executeCatch(n.current, a, [n.current, r.bloksContext]);
          }
          function d(e) {
            ((l = !0), (s = !0));
          }
          var m =
            (e = n.current.uiMutableContainer.domNode) == null
              ? void 0
              : e.current;
          if (!m) return;
          var p = m,
            _ = null,
            f = null,
            g = null;
          function h() {
            (_ != null &&
              f != null &&
              i != null &&
              r.executeCatch(n.current, i, [n.current, r.bloksContext, _, f]),
              (_ = null),
              (f = null),
              (g = null));
          }
          function y(e) {
            if (i != null) {
              var t = p.getBoundingClientRect();
              ((_ = Math.max(0, Math.min(e.clientX - t.left, t.width))),
                (f = Math.max(0, Math.min(e.clientY - t.top, t.height))),
                g == null && (g = window.requestAnimationFrame(h)));
            }
          }
          return (
            m.addEventListener("mouseenter", u),
            m.addEventListener("mouseleave", c),
            m.addEventListener("touchstart", d),
            i != null && m.addEventListener("mousemove", y),
            function () {
              (m.removeEventListener("mouseenter", u),
                m.removeEventListener("mouseleave", c),
                m.removeEventListener("touchstart", d),
                m.removeEventListener("mousemove", y),
                g != null && window.cancelAnimationFrame(g));
            }
          );
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
