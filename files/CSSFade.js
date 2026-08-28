__d(
  "CSSFade",
  [
    "cx",
    "invariant",
    "Style",
    "cr:5662",
    "cr:6108",
    "cr:6669",
    "requestAnimationFrameAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = "css-fade-animation",
      c = "css-show-animation",
      d = "_4rh4",
      m = "CSSFade_hide",
      p = "CSSFade_show",
      _ = document.createElement("div").animate !== void 0,
      f = { cancel: function () {} };
    function g(e, t) {
      e != null || u(0, 5875);
      var r = n("cr:6669").get(e, t);
      return (r && r.cancel(), r);
    }
    function h(e, t, n) {
      var r,
        o = (e == null || (r = e.style) == null ? void 0 : r.animation) || "",
        a = t + "s " + n;
      return (o.length > 5 && (a = o.slice(0, -1) + (", " + a)), a);
    }
    function y(e, t) {
      var n,
        r = (e == null || (n = e.style) == null ? void 0 : n.animation) || "",
        o = r.split(","),
        a = o.findIndex(function (e) {
          return e.indexOf(t) > -1;
        });
      return (a !== -1 && o.splice(a, 1), o.join(","));
    }
    var C = {
        show: function (o, a) {
          a === void 0 && (a = {});
          var t = a.duration != null ? a.duration / 1e3 : 0.3;
          (g(o, e),
            g(o, c),
            n("cr:6108").removeClass(
              o,
              a.invisible === !0 ? "invisible_elem" : "hidden_elem",
            ),
            r("requestAnimationFrameAcrossTransitions")(function () {
              o.style.animation = h(o, t, p);
            }));
          var i = n("cr:5662").listen(o, "animationend", function () {
              (a.callback && a.callback(), (o.style.animation = y(o, p)));
            }),
            l = {
              cancel: function () {
                ((o.style.animation = y(o, p)),
                  i.remove(),
                  (l.cancel = function () {}));
              },
            };
          return (n("cr:6669").set(o, c, l), l);
        },
        hide: function (o, a) {
          a === void 0 && (a = {});
          var t = function () {
            (n("cr:6108").addClass(
              o,
              a.invisible === !0 ? "invisible_elem" : "hidden_elem",
            ),
              a.callback && a.callback(),
              (o.style.animation = y(o, m)));
          };
          if (a.simple === !0) return (t(), f);
          var i = a.duration != null ? a.duration / 1e3 : 0.3;
          (g(o, c),
            g(o, e),
            r("requestAnimationFrameAcrossTransitions")(function () {
              o.style.animation = h(o, i, m);
            }));
          var l = n("cr:5662").listen(o, "animationend", t),
            s = {
              cancel: function () {
                ((o.style.animation = y(o, m)),
                  l.remove(),
                  (s.cancel = function () {}));
              },
            };
          return (n("cr:6669").set(o, e, s), s);
        },
      },
      b = {
        show: function (o, a) {
          a === void 0 && (a = {});
          var t = a.duration != null ? a.duration : 300;
          (g(o, e),
            g(o, c),
            n("cr:6108").removeClass(
              o,
              a.invisible === !0 ? "invisible_elem" : "hidden_elem",
            ),
            r("Style").set(o, "opacity", "1"));
          var i = a.peekStateFade === !0 ? "0.6" : "0",
            l = o.animate([{ opacity: i }, { opacity: "1.0" }], {
              duration: t,
            });
          return (
            a.callback && (l.onfinish = a.callback),
            n("cr:6669").set(o, c, l),
            l
          );
        },
        hide: function (o, a) {
          a === void 0 && (a = {});
          var t = a.duration != null ? a.duration : 300;
          if ((g(o, c), a.simple === !0))
            return (
              n("cr:6108").addClass(
                o,
                a.invisible === !0 ? "invisible_elem" : "hidden_elem",
              ),
              f
            );
          (g(o, e), r("Style").set(o, "opacity", "0"));
          var i = a.peekStateFade === !0 ? "0.4" : "0",
            l = o.animate([{ opacity: "1.0" }, { opacity: i }], {
              duration: t,
            });
          return (
            (l.onfinish = function () {
              (n("cr:6108").addClass(
                o,
                a.invisible === !0 ? "invisible_elem" : "hidden_elem",
              ),
                a.callback && a.callback());
            }),
            n("cr:6669").set(o, e, l),
            l
          );
        },
      },
      v = _ ? b : C;
    l.default = v;
  },
  98,
);
