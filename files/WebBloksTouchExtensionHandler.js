__d(
  "WebBloksTouchExtensionHandler",
  ["WebBloksConstants", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "#",
      s = "$",
      u = "&",
      c = {
        getStyles: function (t) {
          return { cursor: "pointer", pointerEvents: "auto" };
        },
        onMount: function (n, r, a) {
          var t,
            i = n.getExpression(s),
            l = n.getExpression(u),
            c = n.getExpression(e),
            d =
              (t = r.current.uiMutableContainer.domNode) == null
                ? void 0
                : t.current;
          if (!d) return;
          var m = d,
            p = 0,
            _ = 0,
            f = -1,
            g = !1,
            h = !1;
          function y() {
            var e = m.getBoundingClientRect();
            ((p = e.left),
              (_ = e.top),
              i != null &&
                o("WebBloksUtils").isBloksModelEnabled(r.current) &&
                a.executeCatch(r.current, i, [r.current, a.bloksContext]));
          }
          function C() {
            l != null &&
              o("WebBloksUtils").isBloksModelEnabled(r.current) &&
              a.executeCatch(r.current, l, [r.current, a.bloksContext]);
          }
          function b() {
            c != null &&
              o("WebBloksUtils").isBloksModelEnabled(r.current) &&
              a.executeCatch(r.current, c, [r, a.bloksContext]);
          }
          function v(e) {
            if (((h = !0), f === -1)) {
              var t = e.targetTouches[0];
              ((f = t.identifier), y());
            }
          }
          function S(e) {
            if (h) {
              e.preventDefault();
              return;
            }
            e.button === 0 && (e.preventDefault(), (g = !0), y());
          }
          function R(e) {
            (e.keyCode === o("WebBloksConstants").KEY_SPACE &&
              e.preventDefault(),
              (e.keyCode === o("WebBloksConstants").KEY_SPACE ||
                e.keyCode === o("WebBloksConstants").KEY_RETURN) &&
                y());
          }
          function L(e) {
            (e.key === "Enter" || e.key === " ") && C();
          }
          function E(e) {
            var t = e.changedTouches[0];
            if (t.identifier === f)
              if (
                ((f = -1),
                o("WebBloksUtils").shouldCancelTouchEvent(m, p, _, t))
              )
                b();
              else {
                var n = window.setTimeout(function () {
                    C();
                  }, 50),
                  r = function () {
                    (C(),
                      window.clearTimeout(n),
                      m.removeEventListener("click", r));
                  };
                m.addEventListener("click", r);
              }
          }
          function k() {
            if (h) {
              h = !1;
              return;
            }
            g && ((g = !1), C());
          }
          function I(e) {
            ((f = -1), b());
          }
          function T(e) {
            h || (g && ((g = !1), b()));
          }
          return (
            m.addEventListener(
              "touchstart",
              v,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            m.addEventListener("keydown", R),
            m.addEventListener("keyup", L),
            m.addEventListener("touchend", E),
            m.addEventListener("touchcancel", I),
            m.addEventListener("mousedown", S),
            m.addEventListener("mouseleave", T),
            m.addEventListener("mouseup", k),
            function () {
              (m.removeEventListener("touchstart", v),
                m.removeEventListener("keydown", R),
                m.removeEventListener("keyup", L),
                m.removeEventListener("touchend", E),
                m.removeEventListener("touchcancel", I),
                m.removeEventListener("mousedown", S),
                m.removeEventListener("mouseleave", T),
                m.removeEventListener("mouseup", k));
            }
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
