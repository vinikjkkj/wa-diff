__d(
  "WebBloksTouchExtensionHandler",
  ["WebBloksConstants", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = {
        getStyles: function (t) {
          return { cursor: "pointer", pointerEvents: "auto" };
        },
        onMount: function (t, n, r) {
          var e,
            a = t.getExpression("on_touch_down"),
            i = t.getExpression("on_touch_up"),
            l = t.getExpression("on_touch_cancel"),
            s =
              (e = n.current.uiMutableContainer.domNode) == null
                ? void 0
                : e.current;
          if (!s) return;
          var u = s,
            c = 0,
            d = 0,
            m = -1,
            p = !1,
            _ = !1;
          function f() {
            var e = u.getBoundingClientRect();
            ((c = e.left),
              (d = e.top),
              a != null &&
                o("WebBloksUtils").isBloksModelEnabled(n.current) &&
                r.executeCatch(n.current, a, [n.current, r.bloksContext]));
          }
          function g() {
            i != null &&
              o("WebBloksUtils").isBloksModelEnabled(n.current) &&
              r.executeCatch(n.current, i, [n.current, r.bloksContext]);
          }
          function h() {
            l != null &&
              o("WebBloksUtils").isBloksModelEnabled(n.current) &&
              r.executeCatch(n.current, l, [n, r.bloksContext]);
          }
          function y(e) {
            if (((_ = !0), m === -1)) {
              var t = e.targetTouches[0];
              ((m = t.identifier), f());
            }
          }
          function C(e) {
            if (_) {
              e.preventDefault();
              return;
            }
            e.button === 0 && (e.preventDefault(), (p = !0), f());
          }
          function b(e) {
            (e.keyCode === o("WebBloksConstants").KEY_SPACE &&
              e.preventDefault(),
              (e.keyCode === o("WebBloksConstants").KEY_SPACE ||
                e.keyCode === o("WebBloksConstants").KEY_RETURN) &&
                f());
          }
          function v(e) {
            (e.key === "Enter" || e.key === " ") && g();
          }
          function S(e) {
            var t = e.changedTouches[0];
            if (t.identifier === m)
              if (
                ((m = -1),
                o("WebBloksUtils").shouldCancelTouchEvent(u, c, d, t))
              )
                h();
              else {
                var n = window.setTimeout(function () {
                    g();
                  }, 50),
                  r = function () {
                    (g(),
                      window.clearTimeout(n),
                      u.removeEventListener("click", r));
                  };
                u.addEventListener("click", r);
              }
          }
          function R() {
            if (_) {
              _ = !1;
              return;
            }
            p && ((p = !1), g());
          }
          function L(e) {
            ((m = -1), h());
          }
          function E(e) {
            _ || (p && ((p = !1), h()));
          }
          return (
            u.addEventListener(
              "touchstart",
              y,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            u.addEventListener("keydown", b),
            u.addEventListener("keyup", v),
            u.addEventListener("touchend", S),
            u.addEventListener("touchcancel", L),
            u.addEventListener("mousedown", C),
            u.addEventListener("mouseleave", E),
            u.addEventListener("mouseup", R),
            function () {
              (u.removeEventListener("touchstart", y),
                u.removeEventListener("keydown", b),
                u.removeEventListener("keyup", v),
                u.removeEventListener("touchend", S),
                u.removeEventListener("touchcancel", L),
                u.removeEventListener("mousedown", C),
                u.removeEventListener("mouseleave", E),
                u.removeEventListener("mouseup", R));
            }
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
