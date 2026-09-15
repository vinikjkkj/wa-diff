__d(
  "WebBloksTouchExtensionHandler",
  ["WebBloksConstants", "WebBloksModel", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 50,
      s = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      u = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      d = {
        getStyles: function (t) {
          return { cursor: "pointer", pointerEvents: "auto" };
        },
        onMount: function (n, r, a, i) {
          var t,
            l = n.getExpression(u),
            d = n.getExpression(c),
            m = n.getExpression(s);
          function p() {
            return o("WebBloksUtils").isBloksModelEnabled(r.current, i);
          }
          var _ =
            (t = r.current.uiMutableContainer.domNode) == null
              ? void 0
              : t.current;
          if (!_) return;
          var f = _,
            g = 0,
            h = 0,
            y = -1,
            C = !1,
            b = !1;
          function v() {
            var e = f.getBoundingClientRect();
            ((g = e.left),
              (h = e.top),
              l != null &&
                p() &&
                a.executeCatch(r.current, l, [r.current, a.bloksContext]));
          }
          function S() {
            d != null &&
              p() &&
              a.executeCatch(r.current, d, [r.current, a.bloksContext]);
          }
          function R() {
            m != null &&
              p() &&
              a.executeCatch(r.current, m, [r, a.bloksContext]);
          }
          function L(e) {
            if (((b = !0), y === -1)) {
              var t = e.targetTouches[0];
              ((y = t.identifier), v());
            }
          }
          function E(e) {
            if (b) {
              e.preventDefault();
              return;
            }
            e.button === 0 && (e.preventDefault(), (C = !0), v());
          }
          function k(e) {
            (e.keyCode === o("WebBloksConstants").KEY_SPACE &&
              e.preventDefault(),
              (e.keyCode === o("WebBloksConstants").KEY_SPACE ||
                e.keyCode === o("WebBloksConstants").KEY_RETURN) &&
                v());
          }
          function I(e) {
            (e.key === "Enter" || e.key === " ") && S();
          }
          function T(t) {
            var n = t.changedTouches[0];
            if (n.identifier === y)
              if (
                ((y = -1),
                o("WebBloksUtils").shouldCancelTouchEvent(f, g, h, n))
              )
                R();
              else {
                var r = window.setTimeout(function () {
                    S();
                  }, e),
                  a = function () {
                    (S(),
                      window.clearTimeout(r),
                      f.removeEventListener("click", a));
                  };
                f.addEventListener("click", a);
              }
          }
          function D() {
            if (b) {
              b = !1;
              return;
            }
            C && ((C = !1), S());
          }
          function x(e) {
            ((y = -1), R());
          }
          function $(e) {
            b || (C && ((C = !1), R()));
          }
          return (
            f.addEventListener(
              "touchstart",
              L,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            f.addEventListener("keydown", k),
            f.addEventListener("keyup", I),
            f.addEventListener("touchend", T),
            f.addEventListener("touchcancel", x),
            f.addEventListener("mousedown", E),
            f.addEventListener("mouseleave", $),
            f.addEventListener("mouseup", D),
            function () {
              (f.removeEventListener("touchstart", L),
                f.removeEventListener("keydown", k),
                f.removeEventListener("keyup", I),
                f.removeEventListener("touchend", T),
                f.removeEventListener("touchcancel", x),
                f.removeEventListener("mousedown", E),
                f.removeEventListener("mouseleave", $),
                f.removeEventListener("mouseup", D));
            }
          );
        },
      },
      m = d;
    l.default = m;
  },
  98,
);
