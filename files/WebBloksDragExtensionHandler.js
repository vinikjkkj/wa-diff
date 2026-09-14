__d(
  "WebBloksDragExtensionHandler",
  ["WebBloksModel", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = "ease-out",
      u = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      m = 4,
      p = { axis: "vertical", allowsPositive: !0, allowsNegative: !1 },
      _ = new Map([
        ["down", p],
        ["up", { axis: "vertical", allowsPositive: !1, allowsNegative: !0 }],
        [
          "vertical",
          { axis: "vertical", allowsPositive: !0, allowsNegative: !0 },
        ],
        [
          "right",
          { axis: "horizontal", allowsPositive: !0, allowsNegative: !1 },
        ],
        [
          "left",
          { axis: "horizontal", allowsPositive: !1, allowsNegative: !0 },
        ],
        [
          "horizontal",
          { axis: "horizontal", allowsPositive: !0, allowsNegative: !0 },
        ],
        ["both", { axis: "both", allowsPositive: !0, allowsNegative: !0 }],
      ]);
    function f(e) {
      return e.axis === "both"
        ? "none"
        : e.axis === "vertical"
          ? "pan-x pinch-zoom"
          : "pan-y pinch-zoom";
    }
    function g(e, t) {
      for (var n = 0; n < e.length; n++) if (e[n].identifier === t) return e[n];
      return null;
    }
    function h(e) {
      var t, n;
      return (t = _.get((n = e.get(u)) != null ? n : "")) != null ? t : p;
    }
    function y(e, t) {
      return e > 0
        ? t.allowsPositive
          ? e
          : 0
        : e < 0 && t.allowsNegative
          ? e
          : 0;
    }
    var C = {
        getStyles: function (t) {
          if (t.get(d) == null) return {};
          var e = h(t);
          return { pointerEvents: "auto", touchAction: f(e) };
        },
        onMount: function (n, r, a) {
          var t,
            i =
              (t = r.current.uiMutableContainer.domNode) == null
                ? void 0
                : t.current;
          if (i != null) {
            var l = n.getExpression(c),
              u = n.getExpression(d);
            if (u != null) {
              var p = 0,
                _ = 0,
                f = 0,
                C = 0,
                b = null,
                v = !1,
                S = 0,
                R = 0,
                L = null,
                E = function (t, n) {
                  return "translate(" + t + "px, " + n + "px)";
                },
                k = function (n, r) {
                  ((i.style.transition = r ? "transform " + e + "ms " + s : ""),
                    (i.style.transform = n));
                },
                I = function () {
                  ((i.style.transition = ""), (i.style.transform = ""));
                },
                T = function () {
                  L != null && (window.clearTimeout(L), (L = null));
                },
                D = function () {
                  (k(E(p, _), !0),
                    (L = window.setTimeout(function () {
                      ((L = null), p === 0 && _ === 0 && I());
                    }, e)));
                },
                x = function () {
                  ((p += f), (_ += C), k(E(p, _), !1));
                },
                $ = function (t) {
                  return o("WebBloksUtils").isBloksModelEnabled(r.current)
                    ? a.executeCatch(n, u, [f, C, t]) === !0
                    : !1;
                },
                P = function () {
                  ((b = null), v && ($(!1) ? x() : D()));
                },
                N = function (t) {
                  if (b == null) {
                    var e = t.changedTouches[0];
                    e != null &&
                      ((b = e.identifier),
                      (v = !1),
                      (f = 0),
                      (C = 0),
                      (S = e.clientX),
                      (R = e.clientY));
                  }
                },
                M = function (t) {
                  var e = b;
                  if (e != null) {
                    var i = g(t.touches, e);
                    if (i != null) {
                      var s = h(n),
                        u = i.clientY - R,
                        c = i.clientX - S;
                      if (!v) {
                        if (Math.abs(u) < m && Math.abs(c) < m) return;
                        if (s.axis !== "both") {
                          var d = s.axis === "vertical" ? u : c,
                            L = s.axis === "vertical" ? c : u;
                          if (
                            Math.abs(d) <= Math.abs(L) ||
                            (d > 0 && !s.allowsPositive) ||
                            (d < 0 && !s.allowsNegative)
                          ) {
                            b = null;
                            return;
                          }
                        }
                        ((v = !0),
                          T(),
                          l != null &&
                            o("WebBloksUtils").isBloksModelEnabled(r.current) &&
                            a.executeCatch(n, l, []));
                      }
                      (t.preventDefault(),
                        (f = s.axis === "vertical" ? 0 : y(c, s)),
                        (C = s.axis === "horizontal" ? 0 : y(u, s)),
                        k(E(p + f, _ + C), !1));
                    }
                  }
                },
                w = function (t) {
                  var e = b;
                  e == null || g(t.changedTouches, e) == null || P();
                },
                A = function () {
                  var e = b != null && v;
                  ((b = null), e && ($(!0), D()));
                };
              return (
                i.addEventListener(
                  "touchstart",
                  N,
                  o("WebBloksUtils").passiveTouchEventOptions,
                ),
                i.addEventListener("touchmove", M, { passive: !1 }),
                i.addEventListener("touchend", w),
                i.addEventListener("touchcancel", A),
                function () {
                  (T(),
                    I(),
                    i.removeEventListener("touchstart", N),
                    i.removeEventListener("touchmove", M),
                    i.removeEventListener("touchend", w),
                    i.removeEventListener("touchcancel", A));
                }
              );
            }
          }
        },
      },
      b = C;
    l.default = b;
  },
  98,
);
