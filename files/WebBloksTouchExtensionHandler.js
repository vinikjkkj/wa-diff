__d(
  "WebBloksTouchExtensionHandler",
  ["WebBloksConstants", "WebBloksModel", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      s = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      u = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      c = {
        getStyles: function (t) {
          return { cursor: "pointer", pointerEvents: "auto" };
        },
        onMount: function (n, r, a, i) {
          var t,
            l = n.getExpression(s),
            c = n.getExpression(u),
            d = n.getExpression(e);
          function m() {
            return o("WebBloksUtils").isBloksModelEnabled(r.current, i);
          }
          var p =
            (t = r.current.uiMutableContainer.domNode) == null
              ? void 0
              : t.current;
          if (!p) return;
          var _ = p,
            f = 0,
            g = 0,
            h = -1,
            y = !1,
            C = !1;
          function b() {
            var e = _.getBoundingClientRect();
            ((f = e.left),
              (g = e.top),
              l != null &&
                m() &&
                a.executeCatch(r.current, l, [r.current, a.bloksContext]));
          }
          function v() {
            c != null &&
              m() &&
              a.executeCatch(r.current, c, [r.current, a.bloksContext]);
          }
          function S() {
            d != null &&
              m() &&
              a.executeCatch(r.current, d, [r, a.bloksContext]);
          }
          function R(e) {
            if (((C = !0), h === -1)) {
              var t = e.targetTouches[0];
              ((h = t.identifier), b());
            }
          }
          function L(e) {
            if (C) {
              e.preventDefault();
              return;
            }
            e.button === 0 && (e.preventDefault(), (y = !0), b());
          }
          function E(e) {
            (e.keyCode === o("WebBloksConstants").KEY_SPACE &&
              e.preventDefault(),
              (e.keyCode === o("WebBloksConstants").KEY_SPACE ||
                e.keyCode === o("WebBloksConstants").KEY_RETURN) &&
                b());
          }
          function k(e) {
            (e.key === "Enter" || e.key === " ") && v();
          }
          function I(e) {
            var t = e.changedTouches[0];
            if (t.identifier === h)
              if (
                ((h = -1),
                o("WebBloksUtils").shouldCancelTouchEvent(_, f, g, t))
              )
                S();
              else {
                var n = window.setTimeout(function () {
                    v();
                  }, 50),
                  r = function () {
                    (v(),
                      window.clearTimeout(n),
                      _.removeEventListener("click", r));
                  };
                _.addEventListener("click", r);
              }
          }
          function T() {
            if (C) {
              C = !1;
              return;
            }
            y && ((y = !1), v());
          }
          function D(e) {
            ((h = -1), S());
          }
          function x(e) {
            C || (y && ((y = !1), S()));
          }
          return (
            _.addEventListener(
              "touchstart",
              R,
              o("WebBloksUtils").passiveTouchEventOptions,
            ),
            _.addEventListener("keydown", E),
            _.addEventListener("keyup", k),
            _.addEventListener("touchend", I),
            _.addEventListener("touchcancel", D),
            _.addEventListener("mousedown", L),
            _.addEventListener("mouseleave", x),
            _.addEventListener("mouseup", T),
            function () {
              (_.removeEventListener("touchstart", R),
                _.removeEventListener("keydown", E),
                _.removeEventListener("keyup", k),
                _.removeEventListener("touchend", I),
                _.removeEventListener("touchcancel", D),
                _.removeEventListener("mousedown", L),
                _.removeEventListener("mouseleave", x),
                _.removeEventListener("mouseup", T));
            }
          );
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
