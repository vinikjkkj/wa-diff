__d(
  "smoothscroll-polyfill-0.4.4",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function () {
        function t() {
          var e = window,
            t = document;
          if (
            "scrollBehavior" in t.documentElement.style &&
            e.__forceSmoothScrollPolyfill__ !== !0
          )
            return;
          var n = e.HTMLElement || e.Element,
            r = 468,
            o = {
              scroll: e.scroll || e.scrollTo,
              scrollBy: e.scrollBy,
              elementScroll: n.prototype.scroll || s,
              scrollIntoView: n.prototype.scrollIntoView,
            },
            a =
              e.performance && e.performance.now
                ? e.performance.now.bind(e.performance)
                : Date.now;
          function i(e) {
            var t = ["MSIE ", "Trident/", "Edge/"];
            return new RegExp(t.join("|")).test(e);
          }
          var l = i(e.navigator.userAgent) ? 1 : 0;
          function s(e, t) {
            ((this.scrollLeft = e), (this.scrollTop = t));
          }
          function u(e) {
            return 0.5 * (1 - Math.cos(Math.PI * e));
          }
          function c(e) {
            if (
              e === null ||
              typeof e != "object" ||
              e.behavior === void 0 ||
              e.behavior === "auto" ||
              e.behavior === "instant"
            )
              return !0;
            if (typeof e == "object" && e.behavior === "smooth") return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                e.behavior +
                " is not a valid value for enumeration ScrollBehavior.",
            );
          }
          function d(e, t) {
            if (t === "Y") return e.clientHeight + l < e.scrollHeight;
            if (t === "X") return e.clientWidth + l < e.scrollWidth;
          }
          function m(t, n) {
            var r = e.getComputedStyle(t, null)["overflow" + n];
            return r === "auto" || r === "scroll";
          }
          function p(e) {
            var t = d(e, "Y") && m(e, "Y"),
              n = d(e, "X") && m(e, "X");
            return t || n;
          }
          function _(e) {
            for (; e !== t.body && p(e) === !1; ) e = e.parentNode || e.host;
            return e;
          }
          function f(t) {
            var n = a(),
              o,
              i,
              l,
              s = (n - t.startTime) / r;
            ((s = s > 1 ? 1 : s),
              (o = u(s)),
              (i = t.startX + (t.x - t.startX) * o),
              (l = t.startY + (t.y - t.startY) * o),
              t.method.call(t.scrollable, i, l),
              (i !== t.x || l !== t.y) &&
                e.requestAnimationFrame(f.bind(e, t)));
          }
          function g(n, r, i) {
            var l,
              u,
              c,
              d,
              m = a();
            (n === t.body
              ? ((l = e),
                (u = e.scrollX || e.pageXOffset),
                (c = e.scrollY || e.pageYOffset),
                (d = o.scroll))
              : ((l = n), (u = n.scrollLeft), (c = n.scrollTop), (d = s)),
              f({
                scrollable: l,
                method: d,
                startTime: m,
                startX: u,
                startY: c,
                x: r,
                y: i,
              }));
          }
          ((e.scroll = e.scrollTo =
            function () {
              if (arguments[0] !== void 0) {
                if (c(arguments[0]) === !0) {
                  o.scroll.call(
                    e,
                    arguments[0].left !== void 0
                      ? arguments[0].left
                      : typeof arguments[0] != "object"
                        ? arguments[0]
                        : e.scrollX || e.pageXOffset,
                    arguments[0].top !== void 0
                      ? arguments[0].top
                      : arguments[1] !== void 0
                        ? arguments[1]
                        : e.scrollY || e.pageYOffset,
                  );
                  return;
                }
                g.call(
                  e,
                  t.body,
                  arguments[0].left !== void 0
                    ? ~~arguments[0].left
                    : e.scrollX || e.pageXOffset,
                  arguments[0].top !== void 0
                    ? ~~arguments[0].top
                    : e.scrollY || e.pageYOffset,
                );
              }
            }),
            (e.scrollBy = function () {
              if (arguments[0] !== void 0) {
                if (c(arguments[0])) {
                  o.scrollBy.call(
                    e,
                    arguments[0].left !== void 0
                      ? arguments[0].left
                      : typeof arguments[0] != "object"
                        ? arguments[0]
                        : 0,
                    arguments[0].top !== void 0
                      ? arguments[0].top
                      : arguments[1] !== void 0
                        ? arguments[1]
                        : 0,
                  );
                  return;
                }
                g.call(
                  e,
                  t.body,
                  ~~arguments[0].left + (e.scrollX || e.pageXOffset),
                  ~~arguments[0].top + (e.scrollY || e.pageYOffset),
                );
              }
            }),
            (n.prototype.scroll = n.prototype.scrollTo =
              function () {
                if (arguments[0] !== void 0) {
                  if (c(arguments[0]) === !0) {
                    if (
                      typeof arguments[0] == "number" &&
                      arguments[1] === void 0
                    )
                      throw new SyntaxError("Value could not be converted");
                    o.elementScroll.call(
                      this,
                      arguments[0].left !== void 0
                        ? ~~arguments[0].left
                        : typeof arguments[0] != "object"
                          ? ~~arguments[0]
                          : this.scrollLeft,
                      arguments[0].top !== void 0
                        ? ~~arguments[0].top
                        : arguments[1] !== void 0
                          ? ~~arguments[1]
                          : this.scrollTop,
                    );
                    return;
                  }
                  var e = arguments[0].left,
                    t = arguments[0].top;
                  g.call(
                    this,
                    this,
                    typeof e == "undefined" ? this.scrollLeft : ~~e,
                    typeof t == "undefined" ? this.scrollTop : ~~t,
                  );
                }
              }),
            (n.prototype.scrollBy = function () {
              if (arguments[0] !== void 0) {
                if (c(arguments[0]) === !0) {
                  o.elementScroll.call(
                    this,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left + this.scrollLeft
                      : ~~arguments[0] + this.scrollLeft,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top + this.scrollTop
                      : ~~arguments[1] + this.scrollTop,
                  );
                  return;
                }
                this.scroll({
                  left: ~~arguments[0].left + this.scrollLeft,
                  top: ~~arguments[0].top + this.scrollTop,
                  behavior: arguments[0].behavior,
                });
              }
            }),
            (n.prototype.scrollIntoView = function () {
              if (c(arguments[0]) === !0) {
                o.scrollIntoView.call(
                  this,
                  arguments[0] === void 0 ? !0 : arguments[0],
                );
                return;
              }
              var n = _(this),
                r = n.getBoundingClientRect(),
                a = this.getBoundingClientRect();
              n !== t.body
                ? (g.call(
                    this,
                    n,
                    n.scrollLeft + a.left - r.left,
                    n.scrollTop + a.top - r.top,
                  ),
                  e.getComputedStyle(n).position !== "fixed" &&
                    e.scrollBy({
                      left: r.left,
                      top: r.top,
                      behavior: "smooth",
                    }))
                : e.scrollBy({ left: a.left, top: a.top, behavior: "smooth" });
            }));
        }
        typeof e == "object" && typeof l != "undefined"
          ? (l.exports = { polyfill: t })
          : t();
      })();
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
