__d(
  "velocity-animate-1.5.2",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      ((function (e) {
        if (e.jQuery) return;
        var t = function (e, n) {
          return new t.fn.init(e, n);
        };
        ((t.isWindow = function (e) {
          return e && e === e.window;
        }),
          (t.type = function (e) {
            return e
              ? typeof e == "object" || typeof e == "function"
                ? o[i.call(e)] || "object"
                : typeof e
              : e + "";
          }),
          (t.isArray =
            Array.isArray ||
            function (e) {
              return t.type(e) === "array";
            }));
        function n(e) {
          var n = e.length,
            r = t.type(e);
          return r === "function" || t.isWindow(e)
            ? !1
            : e.nodeType === 1 && n
              ? !0
              : r === "array" ||
                n === 0 ||
                (typeof n == "number" && n > 0 && n - 1 in e);
        }
        ((t.isPlainObject = function (e) {
          var n;
          if (!e || t.type(e) !== "object" || e.nodeType || t.isWindow(e))
            return !1;
          try {
            if (
              e.constructor &&
              !a.call(e, "constructor") &&
              !a.call(e.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (e) {
            return !1;
          }
          for (n in e);
          return n === void 0 || a.call(e, n);
        }),
          (t.each = function (e, t, r) {
            var o,
              a = 0,
              i = e.length,
              l = n(e);
            if (r) {
              if (l) for (; a < i && ((o = t.apply(e[a], r)), o !== !1); a++);
              else
                for (a in e)
                  if (e.hasOwnProperty(a) && ((o = t.apply(e[a], r)), o === !1))
                    break;
            } else if (l)
              for (; a < i && ((o = t.call(e[a], a, e[a])), o !== !1); a++);
            else
              for (a in e)
                if (
                  e.hasOwnProperty(a) &&
                  ((o = t.call(e[a], a, e[a])), o === !1)
                )
                  break;
            return e;
          }),
          (t.data = function (e, n, o) {
            if (o === void 0) {
              var a = e[t.expando],
                i = a && r[a];
              if (n === void 0) return i;
              if (i && n in i) return i[n];
            } else if (n !== void 0) {
              var l = e[t.expando] || (e[t.expando] = ++t.uuid);
              return ((r[l] = r[l] || {}), (r[l][n] = o), o);
            }
          }),
          (t.removeData = function (e, n) {
            var o = e[t.expando],
              a = o && r[o];
            a &&
              (n
                ? t.each(n, function (e, t) {
                    delete a[t];
                  })
                : delete r[o]);
          }),
          (t.extend = function () {
            var e,
              n,
              r,
              o,
              a,
              i,
              l = arguments[0] || {},
              s = 1,
              u = arguments.length,
              c = !1;
            for (
              typeof l == "boolean" && ((c = l), (l = arguments[s] || {}), s++),
                typeof l != "object" && t.type(l) !== "function" && (l = {}),
                s === u && ((l = this), s--);
              s < u;
              s++
            )
              if ((a = arguments[s]))
                for (o in a)
                  a.hasOwnProperty(o) &&
                    ((e = l[o]),
                    (r = a[o]),
                    l !== r &&
                      (c && r && (t.isPlainObject(r) || (n = t.isArray(r)))
                        ? (n
                            ? ((n = !1), (i = e && t.isArray(e) ? e : []))
                            : (i = e && t.isPlainObject(e) ? e : {}),
                          (l[o] = t.extend(c, i, r)))
                        : r !== void 0 && (l[o] = r)));
            return l;
          }),
          (t.queue = function (e, r, o) {
            function a(e, t) {
              var r = t || [];
              return (
                e &&
                  (n(Object(e))
                    ? (function (e, t) {
                        for (var n = +t.length, r = 0, o = e.length; r < n; )
                          e[o++] = t[r++];
                        if (n !== n) for (; t[r] !== void 0; ) e[o++] = t[r++];
                        return ((e.length = o), e);
                      })(r, typeof e == "string" ? [e] : e)
                    : [].push.call(r, e)),
                r
              );
            }
            if (e) {
              r = (r || "fx") + "queue";
              var i = t.data(e, r);
              return o
                ? (!i || t.isArray(o) ? (i = t.data(e, r, a(o))) : i.push(o), i)
                : i || [];
            }
          }),
          (t.dequeue = function (e, n) {
            t.each(e.nodeType ? [e] : e, function (e, r) {
              n = n || "fx";
              var o = t.queue(r, n),
                a = o.shift();
              (a === "inprogress" && (a = o.shift()),
                a &&
                  (n === "fx" && o.unshift("inprogress"),
                  a.call(r, function () {
                    t.dequeue(r, n);
                  })));
            });
          }),
          (t.fn = t.prototype =
            {
              init: function (e) {
                if (e.nodeType) return ((this[0] = e), this);
                throw new Error("Not a DOM node.");
              },
              offset: function () {
                var t = this[0].getBoundingClientRect
                  ? this[0].getBoundingClientRect()
                  : { top: 0, left: 0 };
                return {
                  top:
                    t.top +
                    (e.pageYOffset || document.scrollTop || 0) -
                    (document.clientTop || 0),
                  left:
                    t.left +
                    (e.pageXOffset || document.scrollLeft || 0) -
                    (document.clientLeft || 0),
                };
              },
              position: function () {
                function e(e) {
                  for (
                    var t = e.offsetParent;
                    t &&
                    t.nodeName.toLowerCase() !== "html" &&
                    t.style &&
                    t.style.position.toLowerCase() === "static";
                  )
                    t = t.offsetParent;
                  return t || document;
                }
                var n = this[0],
                  r = e(n),
                  o = this.offset(),
                  a = /^(?:body|html)$/i.test(r.nodeName)
                    ? { top: 0, left: 0 }
                    : t(r).offset();
                return (
                  (o.top -= parseFloat(n.style.marginTop) || 0),
                  (o.left -= parseFloat(n.style.marginLeft) || 0),
                  r.style &&
                    ((a.top += parseFloat(r.style.borderTopWidth) || 0),
                    (a.left += parseFloat(r.style.borderLeftWidth) || 0)),
                  { top: o.top - a.top, left: o.left - a.left }
                );
              },
            }));
        var r = {};
        ((t.expando = "velocity" + new Date().getTime()), (t.uuid = 0));
        for (
          var o = {},
            a = o.hasOwnProperty,
            i = o.toString,
            l =
              "Boolean Number String Function Array Date RegExp Object Error".split(
                " ",
              ),
            s = 0;
          s < l.length;
          s++
        )
          o["[object " + l[s] + "]"] = l[s].toLowerCase();
        ((t.fn.init.prototype = t.fn), (e.Velocity = { Utilities: t }));
      })(window),
        (function (e) {
          typeof l == "object" && typeof l.exports == "object"
            ? (l.exports = e())
            : e();
        })(function () {
          return (function (e, t, n, r) {
            var o = (function () {
                if (n.documentMode) return n.documentMode;
                for (var e = 7; e > 4; e--) {
                  var t = n.createElement("div");
                  if (
                    ((t.innerHTML =
                      "<!--[if IE " + e + "]><span></span><![endif]-->"),
                    t.getElementsByTagName("span").length)
                  )
                    return ((t = null), e);
                }
                return r;
              })(),
              a = (function () {
                var e = 0;
                return (
                  t.webkitRequestAnimationFrame ||
                  t.mozRequestAnimationFrame ||
                  function (t) {
                    var n = new Date().getTime(),
                      r;
                    return (
                      (r = Math.max(0, 16 - (n - e))),
                      (e = n + r),
                      setTimeout(function () {
                        t(n + r);
                      }, r)
                    );
                  }
                );
              })(),
              i = (function () {
                var e = t.performance || {};
                if (typeof e.now != "function") {
                  var n =
                    e.timing && e.timing.navigationStart
                      ? e.timing.navigationStart
                      : new Date().getTime();
                  e.now = function () {
                    return new Date().getTime() - n;
                  };
                }
                return e;
              })();
            function l(e) {
              for (var t = -1, n = e ? e.length : 0, r = []; ++t < n; ) {
                var o = e[t];
                o && r.push(o);
              }
              return r;
            }
            var s = (function () {
                var e = Array.prototype.slice;
                try {
                  return (e.call(n.documentElement), e);
                } catch (t) {
                  return function (t, n) {
                    var r = this.length;
                    if (
                      (typeof t != "number" && (t = 0),
                      typeof n != "number" && (n = r),
                      this.slice)
                    )
                      return e.call(this, t, n);
                    var o,
                      a = [],
                      i = t >= 0 ? t : Math.max(0, r + t),
                      l = n < 0 ? r + n : Math.min(n, r),
                      s = l - i;
                    if (s > 0)
                      if (((a = new Array(s)), this.charAt))
                        for (o = 0; o < s; o++) a[o] = this.charAt(i + o);
                      else for (o = 0; o < s; o++) a[o] = this[i + o];
                    return a;
                  };
                }
              })(),
              u = function () {
                return Array.prototype.includes
                  ? function (e, t) {
                      return e.includes(t);
                    }
                  : Array.prototype.indexOf
                    ? function (e, t) {
                        return e.indexOf(t) >= 0;
                      }
                    : function (e, t) {
                        for (var n = 0; n < e.length; n++)
                          if (e[n] === t) return !0;
                        return !1;
                      };
              };
            function c(e) {
              return (
                d.isWrapped(e) ? (e = s.call(e)) : d.isNode(e) && (e = [e]),
                e
              );
            }
            var d = {
                isNumber: function (e) {
                  return typeof e == "number";
                },
                isString: function (e) {
                  return typeof e == "string";
                },
                isArray:
                  Array.isArray ||
                  function (e) {
                    return (
                      Object.prototype.toString.call(e) === "[object Array]"
                    );
                  },
                isFunction: function (e) {
                  return (
                    Object.prototype.toString.call(e) === "[object Function]"
                  );
                },
                isNode: function (e) {
                  return e && e.nodeType;
                },
                isWrapped: function (e) {
                  return (
                    e &&
                    e !== t &&
                    d.isNumber(e.length) &&
                    !d.isString(e) &&
                    !d.isFunction(e) &&
                    !d.isNode(e) &&
                    (e.length === 0 || d.isNode(e[0]))
                  );
                },
                isSVG: function (e) {
                  return t.SVGElement && e instanceof t.SVGElement;
                },
                isEmptyObject: function (e) {
                  for (var t in e) if (e.hasOwnProperty(t)) return !1;
                  return !0;
                },
              },
              m,
              p = !1;
            if (
              (e.fn && e.fn.jquery
                ? ((m = e), (p = !0))
                : (m = t.Velocity.Utilities),
              o <= 8 && !p)
            )
              throw new Error(
                "Velocity: IE8 and below require jQuery to be loaded before Velocity.",
              );
            if (o <= 7) {
              jQuery.fn.velocity = jQuery.fn.animate;
              return;
            }
            var _ = 400,
              f = "swing",
              g = {
                State: {
                  isMobile:
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      t.navigator.userAgent,
                    ),
                  isAndroid: /Android/i.test(t.navigator.userAgent),
                  isGingerbread: /Android 2\.3\.[3-7]/i.test(
                    t.navigator.userAgent,
                  ),
                  isChrome: t.chrome,
                  isFirefox: /Firefox/i.test(t.navigator.userAgent),
                  prefixElement: n.createElement("div"),
                  prefixMatches: {},
                  scrollAnchor: null,
                  scrollPropertyLeft: null,
                  scrollPropertyTop: null,
                  isTicking: !1,
                  calls: [],
                  delayedElements: { count: 0 },
                },
                CSS: {},
                Utilities: m,
                Redirects: {},
                Easings: {},
                Promise: t.Promise,
                defaults: {
                  queue: "",
                  duration: _,
                  easing: f,
                  begin: r,
                  complete: r,
                  progress: r,
                  display: r,
                  visibility: r,
                  loop: !1,
                  delay: !1,
                  mobileHA: !0,
                  _cacheValues: !0,
                  promiseRejectEmpty: !0,
                },
                init: function (e) {
                  m.data(e, "velocity", {
                    isSVG: d.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {},
                  });
                },
                hook: null,
                mock: !1,
                version: { major: 1, minor: 5, patch: 2 },
                debug: !1,
                timestamp: !0,
                pauseAll: function (e) {
                  var t = new Date().getTime();
                  (m.each(g.State.calls, function (t, n) {
                    if (n) {
                      if (e !== r && (n[2].queue !== e || n[2].queue === !1))
                        return !0;
                      n[5] = { resume: !1 };
                    }
                  }),
                    m.each(g.State.delayedElements, function (e, n) {
                      n && y(n, t);
                    }));
                },
                resumeAll: function (e) {
                  (new Date().getTime(),
                    m.each(g.State.calls, function (t, n) {
                      if (n) {
                        if (e !== r && (n[2].queue !== e || n[2].queue === !1))
                          return !0;
                        n[5] && (n[5].resume = !0);
                      }
                    }),
                    m.each(g.State.delayedElements, function (e, t) {
                      t && C(t);
                    }));
                },
              };
            t.pageYOffset !== r
              ? ((g.State.scrollAnchor = t),
                (g.State.scrollPropertyLeft = "pageXOffset"),
                (g.State.scrollPropertyTop = "pageYOffset"))
              : ((g.State.scrollAnchor =
                  n.documentElement || n.body.parentNode || n.body),
                (g.State.scrollPropertyLeft = "scrollLeft"),
                (g.State.scrollPropertyTop = "scrollTop"));
            function h(e) {
              var t = m.data(e, "velocity");
              return t === null ? r : t;
            }
            function y(e, t) {
              var n = h(e);
              n &&
                n.delayTimer &&
                !n.delayPaused &&
                ((n.delayRemaining = n.delay - t + n.delayBegin),
                (n.delayPaused = !0),
                clearTimeout(n.delayTimer.setTimeout));
            }
            function C(e, t) {
              var n = h(e);
              n &&
                n.delayTimer &&
                n.delayPaused &&
                ((n.delayPaused = !1),
                (n.delayTimer.setTimeout = setTimeout(
                  n.delayTimer.next,
                  n.delayRemaining,
                )));
            }
            function b(e) {
              return function (t) {
                return Math.round(t * e) * (1 / e);
              };
            }
            function v(e, n, r, o) {
              var a = 4,
                i = 0.001,
                l = 1e-7,
                s = 10,
                u = 11,
                c = 1 / (u - 1),
                d = "Float32Array" in t;
              if (arguments.length !== 4) return !1;
              for (var m = 0; m < 4; ++m)
                if (
                  typeof arguments[m] != "number" ||
                  isNaN(arguments[m]) ||
                  !isFinite(arguments[m])
                )
                  return !1;
              ((e = Math.min(e, 1)),
                (r = Math.min(r, 1)),
                (e = Math.max(e, 0)),
                (r = Math.max(r, 0)));
              var p = d ? new Float32Array(u) : new Array(u);
              function _(e, t) {
                return 1 - 3 * t + 3 * e;
              }
              function f(e, t) {
                return 3 * t - 6 * e;
              }
              function g(e) {
                return 3 * e;
              }
              function h(e, t, n) {
                return ((_(t, n) * e + f(t, n)) * e + g(t)) * e;
              }
              function y(e, t, n) {
                return 3 * _(t, n) * e * e + 2 * f(t, n) * e + g(t);
              }
              function C(t, n) {
                for (var o = 0; o < a; ++o) {
                  var i = y(n, e, r);
                  if (i === 0) return n;
                  var l = h(n, e, r) - t;
                  n -= l / i;
                }
                return n;
              }
              function b() {
                for (var t = 0; t < u; ++t) p[t] = h(t * c, e, r);
              }
              function v(t, n, o) {
                var a,
                  i,
                  u = 0;
                do
                  ((i = n + (o - n) / 2),
                    (a = h(i, e, r) - t),
                    a > 0 ? (o = i) : (n = i));
                while (Math.abs(a) > l && ++u < s);
                return i;
              }
              function S(t) {
                for (var n = 0, o = 1, a = u - 1; o !== a && p[o] <= t; ++o)
                  n += c;
                --o;
                var l = (t - p[o]) / (p[o + 1] - p[o]),
                  s = n + l * c,
                  d = y(s, e, r);
                return d >= i ? C(t, s) : d === 0 ? s : v(t, n, n + c);
              }
              var R = !1;
              function L() {
                ((R = !0), (e !== n || r !== o) && b());
              }
              var E = function (t) {
                return (
                  R || L(),
                  e === n && r === o
                    ? t
                    : t === 0
                      ? 0
                      : t === 1
                        ? 1
                        : h(S(t), n, o)
                );
              };
              E.getControlPoints = function () {
                return [
                  { x: e, y: n },
                  { x: r, y: o },
                ];
              };
              var k = "generateBezier(" + [e, n, r, o] + ")";
              return (
                (E.toString = function () {
                  return k;
                }),
                E
              );
            }
            var S = (function () {
              function e(e) {
                return -e.tension * e.x - e.friction * e.v;
              }
              function t(t, n, r) {
                var o = {
                  x: t.x + r.dx * n,
                  v: t.v + r.dv * n,
                  tension: t.tension,
                  friction: t.friction,
                };
                return { dx: o.v, dv: e(o) };
              }
              function n(n, r) {
                var o = { dx: n.v, dv: e(n) },
                  a = t(n, r * 0.5, o),
                  i = t(n, r * 0.5, a),
                  l = t(n, r, i),
                  s = (1 / 6) * (o.dx + 2 * (a.dx + i.dx) + l.dx),
                  u = (1 / 6) * (o.dv + 2 * (a.dv + i.dv) + l.dv);
                return ((n.x = n.x + s * r), (n.v = n.v + u * r), n);
              }
              return function e(t, r, o) {
                var a = { x: -1, v: 0, tension: null, friction: null },
                  i = [0],
                  l = 0,
                  s = 1 / 1e4,
                  u = 16 / 1e3,
                  c,
                  d,
                  m;
                for (
                  t = parseFloat(t) || 500,
                    r = parseFloat(r) || 20,
                    o = o || null,
                    a.tension = t,
                    a.friction = r,
                    c = o !== null,
                    c ? ((l = e(t, r)), (d = (l / o) * u)) : (d = u);
                  (m = n(m || a, d)),
                    i.push(1 + m.x),
                    (l += 16),
                    Math.abs(m.x) > s && Math.abs(m.v) > s;
                );
                return c
                  ? function (e) {
                      return i[(e * (i.length - 1)) | 0];
                    }
                  : l;
              };
            })();
            ((g.Easings = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              spring: function (e) {
                return 1 - Math.cos(e * 4.5 * Math.PI) * Math.exp(-e * 6);
              },
            }),
              m.each(
                [
                  ["ease", [0.25, 0.1, 0.25, 1]],
                  ["ease-in", [0.42, 0, 1, 1]],
                  ["ease-out", [0, 0, 0.58, 1]],
                  ["ease-in-out", [0.42, 0, 0.58, 1]],
                  ["easeInSine", [0.47, 0, 0.745, 0.715]],
                  ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                  ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                  ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                  ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                  ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                  ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                  ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                  ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                  ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                  ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                  ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                  ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                  ["easeOutQuint", [0.23, 1, 0.32, 1]],
                  ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                  ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                  ["easeOutExpo", [0.19, 1, 0.22, 1]],
                  ["easeInOutExpo", [1, 0, 0, 1]],
                  ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                  ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                  ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]],
                ],
                function (e, t) {
                  g.Easings[t[0]] = v.apply(null, t[1]);
                },
              ));
            function R(e, t) {
              var n = e;
              return (
                d.isString(e)
                  ? g.Easings[e] || (n = !1)
                  : d.isArray(e) && e.length === 1
                    ? (n = b.apply(null, e))
                    : d.isArray(e) && e.length === 2
                      ? (n = S.apply(null, e.concat([t])))
                      : d.isArray(e) && e.length === 4
                        ? (n = v.apply(null, e))
                        : (n = !1),
                n === !1 &&
                  (g.Easings[g.defaults.easing]
                    ? (n = g.defaults.easing)
                    : (n = f)),
                n
              );
            }
            var L = (g.CSS = {
              RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted:
                  /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi,
              },
              Lists: {
                colors: [
                  "fill",
                  "stroke",
                  "stopColor",
                  "color",
                  "backgroundColor",
                  "borderColor",
                  "borderTopColor",
                  "borderRightColor",
                  "borderBottomColor",
                  "borderLeftColor",
                  "outlineColor",
                ],
                transformsBase: [
                  "translateX",
                  "translateY",
                  "scale",
                  "scaleX",
                  "scaleY",
                  "skewX",
                  "skewY",
                  "rotateZ",
                ],
                transforms3D: [
                  "transformPerspective",
                  "translateZ",
                  "scaleZ",
                  "rotateX",
                  "rotateY",
                ],
                units: [
                  "%",
                  "em",
                  "ex",
                  "ch",
                  "rem",
                  "vw",
                  "vh",
                  "vmin",
                  "vmax",
                  "cm",
                  "mm",
                  "Q",
                  "in",
                  "pc",
                  "pt",
                  "px",
                  "deg",
                  "grad",
                  "rad",
                  "turn",
                  "s",
                  "ms",
                ],
                colorNames: {
                  aliceblue: "240,248,255",
                  antiquewhite: "250,235,215",
                  aquamarine: "127,255,212",
                  aqua: "0,255,255",
                  azure: "240,255,255",
                  beige: "245,245,220",
                  bisque: "255,228,196",
                  black: "0,0,0",
                  blanchedalmond: "255,235,205",
                  blueviolet: "138,43,226",
                  blue: "0,0,255",
                  brown: "165,42,42",
                  burlywood: "222,184,135",
                  cadetblue: "95,158,160",
                  chartreuse: "127,255,0",
                  chocolate: "210,105,30",
                  coral: "255,127,80",
                  cornflowerblue: "100,149,237",
                  cornsilk: "255,248,220",
                  crimson: "220,20,60",
                  cyan: "0,255,255",
                  darkblue: "0,0,139",
                  darkcyan: "0,139,139",
                  darkgoldenrod: "184,134,11",
                  darkgray: "169,169,169",
                  darkgrey: "169,169,169",
                  darkgreen: "0,100,0",
                  darkkhaki: "189,183,107",
                  darkmagenta: "139,0,139",
                  darkolivegreen: "85,107,47",
                  darkorange: "255,140,0",
                  darkorchid: "153,50,204",
                  darkred: "139,0,0",
                  darksalmon: "233,150,122",
                  darkseagreen: "143,188,143",
                  darkslateblue: "72,61,139",
                  darkslategray: "47,79,79",
                  darkturquoise: "0,206,209",
                  darkviolet: "148,0,211",
                  deeppink: "255,20,147",
                  deepskyblue: "0,191,255",
                  dimgray: "105,105,105",
                  dimgrey: "105,105,105",
                  dodgerblue: "30,144,255",
                  firebrick: "178,34,34",
                  floralwhite: "255,250,240",
                  forestgreen: "34,139,34",
                  fuchsia: "255,0,255",
                  gainsboro: "220,220,220",
                  ghostwhite: "248,248,255",
                  gold: "255,215,0",
                  goldenrod: "218,165,32",
                  gray: "128,128,128",
                  grey: "128,128,128",
                  greenyellow: "173,255,47",
                  green: "0,128,0",
                  honeydew: "240,255,240",
                  hotpink: "255,105,180",
                  indianred: "205,92,92",
                  indigo: "75,0,130",
                  ivory: "255,255,240",
                  khaki: "240,230,140",
                  lavenderblush: "255,240,245",
                  lavender: "230,230,250",
                  lawngreen: "124,252,0",
                  lemonchiffon: "255,250,205",
                  lightblue: "173,216,230",
                  lightcoral: "240,128,128",
                  lightcyan: "224,255,255",
                  lightgoldenrodyellow: "250,250,210",
                  lightgray: "211,211,211",
                  lightgrey: "211,211,211",
                  lightgreen: "144,238,144",
                  lightpink: "255,182,193",
                  lightsalmon: "255,160,122",
                  lightseagreen: "32,178,170",
                  lightskyblue: "135,206,250",
                  lightslategray: "119,136,153",
                  lightsteelblue: "176,196,222",
                  lightyellow: "255,255,224",
                  limegreen: "50,205,50",
                  lime: "0,255,0",
                  linen: "250,240,230",
                  magenta: "255,0,255",
                  maroon: "128,0,0",
                  mediumaquamarine: "102,205,170",
                  mediumblue: "0,0,205",
                  mediumorchid: "186,85,211",
                  mediumpurple: "147,112,219",
                  mediumseagreen: "60,179,113",
                  mediumslateblue: "123,104,238",
                  mediumspringgreen: "0,250,154",
                  mediumturquoise: "72,209,204",
                  mediumvioletred: "199,21,133",
                  midnightblue: "25,25,112",
                  mintcream: "245,255,250",
                  mistyrose: "255,228,225",
                  moccasin: "255,228,181",
                  navajowhite: "255,222,173",
                  navy: "0,0,128",
                  oldlace: "253,245,230",
                  olivedrab: "107,142,35",
                  olive: "128,128,0",
                  orangered: "255,69,0",
                  orange: "255,165,0",
                  orchid: "218,112,214",
                  palegoldenrod: "238,232,170",
                  palegreen: "152,251,152",
                  paleturquoise: "175,238,238",
                  palevioletred: "219,112,147",
                  papayawhip: "255,239,213",
                  peachpuff: "255,218,185",
                  peru: "205,133,63",
                  pink: "255,192,203",
                  plum: "221,160,221",
                  powderblue: "176,224,230",
                  purple: "128,0,128",
                  red: "255,0,0",
                  rosybrown: "188,143,143",
                  royalblue: "65,105,225",
                  saddlebrown: "139,69,19",
                  salmon: "250,128,114",
                  sandybrown: "244,164,96",
                  seagreen: "46,139,87",
                  seashell: "255,245,238",
                  sienna: "160,82,45",
                  silver: "192,192,192",
                  skyblue: "135,206,235",
                  slateblue: "106,90,205",
                  slategray: "112,128,144",
                  snow: "255,250,250",
                  springgreen: "0,255,127",
                  steelblue: "70,130,180",
                  tan: "210,180,140",
                  teal: "0,128,128",
                  thistle: "216,191,216",
                  tomato: "255,99,71",
                  turquoise: "64,224,208",
                  violet: "238,130,238",
                  wheat: "245,222,179",
                  whitesmoke: "245,245,245",
                  white: "255,255,255",
                  yellowgreen: "154,205,50",
                  yellow: "255,255,0",
                },
              },
              Hooks: {
                templates: {
                  textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                  boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                  clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                  backgroundPosition: ["X Y", "0% 0%"],
                  transformOrigin: ["X Y Z", "50% 50% 0px"],
                  perspectiveOrigin: ["X Y", "50% 50%"],
                },
                registered: {},
                register: function () {
                  for (var e = 0; e < L.Lists.colors.length; e++) {
                    var t =
                      L.Lists.colors[e] === "color"
                        ? "0 0 0 1"
                        : "255 255 255 1";
                    L.Hooks.templates[L.Lists.colors[e]] = [
                      "Red Green Blue Alpha",
                      t,
                    ];
                  }
                  var n, r, a;
                  if (o) {
                    for (n in L.Hooks.templates)
                      if (L.Hooks.templates.hasOwnProperty(n)) {
                        ((r = L.Hooks.templates[n]), (a = r[0].split(" ")));
                        var i = r[1].match(L.RegEx.valueSplit);
                        a[0] === "Color" &&
                          (a.push(a.shift()),
                          i.push(i.shift()),
                          (L.Hooks.templates[n] = [a.join(" "), i.join(" ")]));
                      }
                  }
                  for (n in L.Hooks.templates)
                    if (L.Hooks.templates.hasOwnProperty(n)) {
                      ((r = L.Hooks.templates[n]), (a = r[0].split(" ")));
                      for (var l in a)
                        if (a.hasOwnProperty(l)) {
                          var s = n + a[l],
                            u = l;
                          L.Hooks.registered[s] = [n, u];
                        }
                    }
                },
                getRoot: function (e) {
                  var t = L.Hooks.registered[e];
                  return t ? t[0] : e;
                },
                getUnit: function (e, t) {
                  var n =
                    (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                  return n && u(L.Lists.units) ? n : "";
                },
                fixColors: function (e) {
                  return e.replace(
                    /(rgba?\(\s*)?(\b[a-z]+\b)/g,
                    function (e, t, n) {
                      return L.Lists.colorNames.hasOwnProperty(n)
                        ? (t || "rgba(") +
                            L.Lists.colorNames[n] +
                            (t ? "" : ",1)")
                        : t + n;
                    },
                  );
                },
                cleanRootPropertyValue: function (e, t) {
                  return (
                    L.RegEx.valueUnwrap.test(t) &&
                      (t = t.match(L.RegEx.valueUnwrap)[1]),
                    L.Values.isCSSNullValue(t) && (t = L.Hooks.templates[e][1]),
                    t
                  );
                },
                extractValue: function (e, t) {
                  var n = L.Hooks.registered[e];
                  if (n) {
                    var r = n[0],
                      o = n[1];
                    return (
                      (t = L.Hooks.cleanRootPropertyValue(r, t)),
                      t.toString().match(L.RegEx.valueSplit)[o]
                    );
                  } else return t;
                },
                injectValue: function (e, t, n) {
                  var r = L.Hooks.registered[e];
                  if (r) {
                    var o = r[0],
                      a = r[1],
                      i,
                      l;
                    return (
                      (n = L.Hooks.cleanRootPropertyValue(o, n)),
                      (i = n.toString().match(L.RegEx.valueSplit)),
                      (i[a] = t),
                      (l = i.join(" ")),
                      l
                    );
                  } else return n;
                },
              },
              Normalizations: {
                registered: {
                  clip: function (e, t, n) {
                    switch (e) {
                      case "name":
                        return "clip";
                      case "extract":
                        var r;
                        return (
                          L.RegEx.wrappedValueAlreadyExtracted.test(n)
                            ? (r = n)
                            : ((r = n.toString().match(L.RegEx.valueUnwrap)),
                              (r = r ? r[1].replace(/,(\s+)?/g, " ") : n)),
                          r
                        );
                      case "inject":
                        return "rect(" + n + ")";
                    }
                  },
                  blur: function (e, t, n) {
                    switch (e) {
                      case "name":
                        return g.State.isFirefox ? "filter" : "-webkit-filter";
                      case "extract":
                        var r = parseFloat(n);
                        if (!(r || r === 0)) {
                          var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                          o ? (r = o[1]) : (r = 0);
                        }
                        return r;
                      case "inject":
                        return parseFloat(n) ? "blur(" + n + ")" : "none";
                    }
                  },
                  opacity: function (e, t, n) {
                    if (o <= 8)
                      switch (e) {
                        case "name":
                          return "filter";
                        case "extract":
                          var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                          return (r ? (n = r[1] / 100) : (n = 1), n);
                        case "inject":
                          return (
                            (t.style.zoom = 1),
                            parseFloat(n) >= 1
                              ? ""
                              : "alpha(opacity=" +
                                parseInt(parseFloat(n) * 100, 10) +
                                ")"
                          );
                      }
                    else
                      switch (e) {
                        case "name":
                          return "opacity";
                        case "extract":
                          return n;
                        case "inject":
                          return n;
                      }
                  },
                },
                register: function () {
                  (!o || o > 9) &&
                    !g.State.isGingerbread &&
                    (L.Lists.transformsBase = L.Lists.transformsBase.concat(
                      L.Lists.transforms3D,
                    ));
                  for (var e = 0; e < L.Lists.transformsBase.length; e++)
                    (function () {
                      var t = L.Lists.transformsBase[e];
                      L.Normalizations.registered[t] = function (e, n, o) {
                        switch (e) {
                          case "name":
                            return "transform";
                          case "extract":
                            return h(n) === r || h(n).transformCache[t] === r
                              ? /^scale/i.test(t)
                                ? 1
                                : 0
                              : h(n).transformCache[t].replace(/[()]/g, "");
                          case "inject":
                            var a = !1;
                            switch (t.substr(0, t.length - 1)) {
                              case "translate":
                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                break;
                              case "scal":
                              case "scale":
                                (g.State.isAndroid &&
                                  h(n).transformCache[t] === r &&
                                  o < 1 &&
                                  (o = 1),
                                  (a = !/(\d)$/i.test(o)));
                                break;
                              case "skew":
                                a = !/(deg|\d)$/i.test(o);
                                break;
                              case "rotate":
                                a = !/(deg|\d)$/i.test(o);
                                break;
                            }
                            return (
                              a || (h(n).transformCache[t] = "(" + o + ")"),
                              h(n).transformCache[t]
                            );
                        }
                      };
                    })();
                  for (var t = 0; t < L.Lists.colors.length; t++)
                    (function () {
                      var e = L.Lists.colors[t];
                      L.Normalizations.registered[e] = function (t, n, a) {
                        switch (t) {
                          case "name":
                            return e;
                          case "extract":
                            var i;
                            if (L.RegEx.wrappedValueAlreadyExtracted.test(a))
                              i = a;
                            else {
                              var l,
                                s = {
                                  black: "rgb(0, 0, 0)",
                                  blue: "rgb(0, 0, 255)",
                                  gray: "rgb(128, 128, 128)",
                                  green: "rgb(0, 128, 0)",
                                  red: "rgb(255, 0, 0)",
                                  white: "rgb(255, 255, 255)",
                                };
                              (/^[A-z]+$/i.test(a)
                                ? s[a] !== r
                                  ? (l = s[a])
                                  : (l = s.black)
                                : L.RegEx.isHex.test(a)
                                  ? (l =
                                      "rgb(" +
                                      L.Values.hexToRgb(a).join(" ") +
                                      ")")
                                  : /^rgba?\(/i.test(a) || (l = s.black),
                                (i = (l || a)
                                  .toString()
                                  .match(L.RegEx.valueUnwrap)[1]
                                  .replace(/,(\s+)?/g, " ")));
                            }
                            return (
                              (!o || o > 8) &&
                                i.split(" ").length === 3 &&
                                (i += " 1"),
                              i
                            );
                          case "inject":
                            return /^rgb/.test(a)
                              ? a
                              : (o <= 8
                                  ? a.split(" ").length === 4 &&
                                    (a = a.split(/\s+/).slice(0, 3).join(" "))
                                  : a.split(" ").length === 3 && (a += " 1"),
                                (o <= 8 ? "rgb" : "rgba") +
                                  "(" +
                                  a
                                    .replace(/\s+/g, ",")
                                    .replace(/\.(\d)+(?=,)/g, "") +
                                  ")");
                        }
                      };
                    })();
                  function n(e, t, n) {
                    var r =
                      L.getPropertyValue(t, "boxSizing")
                        .toString()
                        .toLowerCase() === "border-box";
                    if (r === (n || !1)) {
                      var o,
                        a,
                        i = 0,
                        l =
                          e === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
                        s = [
                          "padding" + l[0],
                          "padding" + l[1],
                          "border" + l[0] + "Width",
                          "border" + l[1] + "Width",
                        ];
                      for (o = 0; o < s.length; o++)
                        ((a = parseFloat(L.getPropertyValue(t, s[o]))),
                          isNaN(a) || (i += a));
                      return n ? -i : i;
                    }
                    return 0;
                  }
                  function a(e, t) {
                    return function (r, o, a) {
                      switch (r) {
                        case "name":
                          return e;
                        case "extract":
                          return parseFloat(a) + n(e, o, t);
                        case "inject":
                          return parseFloat(a) - n(e, o, t) + "px";
                      }
                    };
                  }
                  ((L.Normalizations.registered.innerWidth = a("width", !0)),
                    (L.Normalizations.registered.innerHeight = a("height", !0)),
                    (L.Normalizations.registered.outerWidth = a("width")),
                    (L.Normalizations.registered.outerHeight = a("height")));
                },
              },
              Names: {
                camelCase: function (e) {
                  return e.replace(/-(\w)/g, function (e, t) {
                    return t.toUpperCase();
                  });
                },
                SVGAttribute: function (e) {
                  var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                  return (
                    (o || (g.State.isAndroid && !g.State.isChrome)) &&
                      (t += "|transform"),
                    new RegExp("^(" + t + ")$", "i").test(e)
                  );
                },
                prefixCheck: function (e) {
                  if (g.State.prefixMatches[e])
                    return [g.State.prefixMatches[e], !0];
                  for (
                    var t = ["", "Webkit", "Moz", "ms", "O"],
                      n = 0,
                      r = t.length;
                    n < r;
                    n++
                  ) {
                    var o;
                    if (
                      (n === 0
                        ? (o = e)
                        : (o =
                            t[n] +
                            e.replace(/^\w/, function (e) {
                              return e.toUpperCase();
                            })),
                      d.isString(g.State.prefixElement.style[o]))
                    )
                      return ((g.State.prefixMatches[e] = o), [o, !0]);
                  }
                  return [e, !1];
                },
              },
              Values: {
                hexToRgb: function (e) {
                  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                    r;
                  return (
                    (e = e.replace(t, function (e, t, n, r) {
                      return t + t + n + n + r + r;
                    })),
                    (r = n.exec(e)),
                    r
                      ? [
                          parseInt(r[1], 16),
                          parseInt(r[2], 16),
                          parseInt(r[3], 16),
                        ]
                      : [0, 0, 0]
                  );
                },
                isCSSNullValue: function (e) {
                  return (
                    !e ||
                    /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                  );
                },
                getUnitType: function (e) {
                  return /^(rotate|skew)/i.test(e)
                    ? "deg"
                    : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(
                          e,
                        )
                      ? ""
                      : "px";
                },
                getDisplayType: function (e) {
                  var t = e && e.tagName.toString().toLowerCase();
                  return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(
                    t,
                  )
                    ? "inline"
                    : /^(li)$/i.test(t)
                      ? "list-item"
                      : /^(tr)$/i.test(t)
                        ? "table-row"
                        : /^(table)$/i.test(t)
                          ? "table"
                          : /^(tbody)$/i.test(t)
                            ? "table-row-group"
                            : "block";
                },
                addClass: function (e, t) {
                  if (e)
                    if (e.classList) e.classList.add(t);
                    else if (d.isString(e.className))
                      e.className += (e.className.length ? " " : "") + t;
                    else {
                      var n =
                        e.getAttribute(o <= 7 ? "className" : "class") || "";
                      e.setAttribute("class", n + (n ? " " : "") + t);
                    }
                },
                removeClass: function (e, t) {
                  if (e)
                    if (e.classList) e.classList.remove(t);
                    else if (d.isString(e.className))
                      e.className = e.className
                        .toString()
                        .replace(
                          new RegExp(
                            "(^|\\s)" + t.split(" ").join("|") + "(\\s|$)",
                            "gi",
                          ),
                          " ",
                        );
                    else {
                      var n =
                        e.getAttribute(o <= 7 ? "className" : "class") || "";
                      e.setAttribute(
                        "class",
                        n.replace(
                          new RegExp(
                            "(^|s)" + t.split(" ").join("|") + "(s|$)",
                            "gi",
                          ),
                          " ",
                        ),
                      );
                    }
                },
              },
              getPropertyValue: function (e, n, a, i) {
                function l(e, n) {
                  var a = 0;
                  if (o <= 8) a = m.css(e, n);
                  else {
                    var s = !1;
                    /^(width|height)$/.test(n) &&
                      L.getPropertyValue(e, "display") === 0 &&
                      ((s = !0),
                      L.setPropertyValue(
                        e,
                        "display",
                        L.Values.getDisplayType(e),
                      ));
                    var u = function () {
                      s && L.setPropertyValue(e, "display", "none");
                    };
                    if (!i) {
                      if (
                        n === "height" &&
                        L.getPropertyValue(e, "boxSizing")
                          .toString()
                          .toLowerCase() !== "border-box"
                      ) {
                        var c =
                          e.offsetHeight -
                          (parseFloat(
                            L.getPropertyValue(e, "borderTopWidth"),
                          ) || 0) -
                          (parseFloat(
                            L.getPropertyValue(e, "borderBottomWidth"),
                          ) || 0) -
                          (parseFloat(L.getPropertyValue(e, "paddingTop")) ||
                            0) -
                          (parseFloat(L.getPropertyValue(e, "paddingBottom")) ||
                            0);
                        return (u(), c);
                      } else if (
                        n === "width" &&
                        L.getPropertyValue(e, "boxSizing")
                          .toString()
                          .toLowerCase() !== "border-box"
                      ) {
                        var d =
                          e.offsetWidth -
                          (parseFloat(
                            L.getPropertyValue(e, "borderLeftWidth"),
                          ) || 0) -
                          (parseFloat(
                            L.getPropertyValue(e, "borderRightWidth"),
                          ) || 0) -
                          (parseFloat(L.getPropertyValue(e, "paddingLeft")) ||
                            0) -
                          (parseFloat(L.getPropertyValue(e, "paddingRight")) ||
                            0);
                        return (u(), d);
                      }
                    }
                    var p;
                    (h(e) === r
                      ? (p = t.getComputedStyle(e, null))
                      : h(e).computedStyle
                        ? (p = h(e).computedStyle)
                        : (p = h(e).computedStyle =
                            t.getComputedStyle(e, null)),
                      n === "borderColor" && (n = "borderTopColor"),
                      o === 9 && n === "filter"
                        ? (a = p.getPropertyValue(n))
                        : (a = p[n]),
                      (a === "" || a === null) && (a = e.style[n]),
                      u());
                  }
                  if (a === "auto" && /^(top|right|bottom|left)$/i.test(n)) {
                    var _ = l(e, "position");
                    (_ === "fixed" ||
                      (_ === "absolute" && /top|left/i.test(n))) &&
                      (a = m(e).position()[n] + "px");
                  }
                  return a;
                }
                var s;
                if (L.Hooks.registered[n]) {
                  var u = n,
                    c = L.Hooks.getRoot(u);
                  (a === r &&
                    (a = L.getPropertyValue(e, L.Names.prefixCheck(c)[0])),
                    L.Normalizations.registered[c] &&
                      (a = L.Normalizations.registered[c]("extract", e, a)),
                    (s = L.Hooks.extractValue(u, a)));
                } else if (L.Normalizations.registered[n]) {
                  var d, p;
                  ((d = L.Normalizations.registered[n]("name", e)),
                    d !== "transform" &&
                      ((p = l(e, L.Names.prefixCheck(d)[0])),
                      L.Values.isCSSNullValue(p) &&
                        L.Hooks.templates[n] &&
                        (p = L.Hooks.templates[n][1])),
                    (s = L.Normalizations.registered[n]("extract", e, p)));
                }
                if (!/^[\d-]/.test(s)) {
                  var _ = h(e);
                  if (_ && _.isSVG && L.Names.SVGAttribute(n))
                    if (/^(height|width)$/i.test(n))
                      try {
                        s = e.getBBox()[n];
                      } catch (e) {
                        s = 0;
                      }
                    else s = e.getAttribute(n);
                  else s = l(e, L.Names.prefixCheck(n)[0]);
                }
                return (
                  L.Values.isCSSNullValue(s) && (s = 0),
                  g.debug >= 2 && "" + n + s,
                  s
                );
              },
              setPropertyValue: function (e, n, r, a, i) {
                var l = n;
                if (n === "scroll")
                  i.container
                    ? (i.container["scroll" + i.direction] = r)
                    : i.direction === "Left"
                      ? t.scrollTo(r, i.alternateValue)
                      : t.scrollTo(i.alternateValue, r);
                else if (
                  L.Normalizations.registered[n] &&
                  L.Normalizations.registered[n]("name", e) === "transform"
                )
                  (L.Normalizations.registered[n]("inject", e, r),
                    (l = "transform"),
                    (r = h(e).transformCache[n]));
                else {
                  if (L.Hooks.registered[n]) {
                    var s = n,
                      u = L.Hooks.getRoot(n);
                    ((a = a || L.getPropertyValue(e, u)),
                      (r = L.Hooks.injectValue(s, r, a)),
                      (n = u));
                  }
                  if (
                    (L.Normalizations.registered[n] &&
                      ((r = L.Normalizations.registered[n]("inject", e, r)),
                      (n = L.Normalizations.registered[n]("name", e))),
                    (l = L.Names.prefixCheck(n)[0]),
                    o <= 8)
                  )
                    try {
                      e.style[l] = r;
                    } catch (e) {
                      g.debug && "" + r + l;
                    }
                  else {
                    var c = h(e);
                    c && c.isSVG && L.Names.SVGAttribute(n)
                      ? e.setAttribute(n, r)
                      : (e.style[l] = r);
                  }
                  g.debug >= 2 && "" + n + l + r;
                }
                return [l, r];
              },
              flushTransformCache: function (e) {
                var t = "",
                  n = h(e);
                if (
                  (o || (g.State.isAndroid && !g.State.isChrome)) &&
                  n &&
                  n.isSVG
                ) {
                  var r = function (t) {
                      return parseFloat(L.getPropertyValue(e, t));
                    },
                    a = {
                      translate: [r("translateX"), r("translateY")],
                      skewX: [r("skewX")],
                      skewY: [r("skewY")],
                      scale:
                        r("scale") !== 1
                          ? [r("scale"), r("scale")]
                          : [r("scaleX"), r("scaleY")],
                      rotate: [r("rotateZ"), 0, 0],
                    };
                  m.each(h(e).transformCache, function (e) {
                    (/^translate/i.test(e)
                      ? (e = "translate")
                      : /^scale/i.test(e)
                        ? (e = "scale")
                        : /^rotate/i.test(e) && (e = "rotate"),
                      a[e] &&
                        ((t += e + "(" + a[e].join(" ") + ") "), delete a[e]));
                  });
                } else {
                  var i, l;
                  (m.each(h(e).transformCache, function (n) {
                    if (
                      ((i = h(e).transformCache[n]),
                      n === "transformPerspective")
                    )
                      return ((l = i), !0);
                    (o === 9 && n === "rotateZ" && (n = "rotate"),
                      (t += n + i + " "));
                  }),
                    l && (t = "perspective" + l + " " + t));
                }
                L.setPropertyValue(e, "transform", t);
              },
            });
            (L.Hooks.register(),
              L.Normalizations.register(),
              (g.hook = function (e, t, n) {
                var o;
                return (
                  (e = c(e)),
                  m.each(e, function (e, a) {
                    if ((h(a) === r && g.init(a), n === r))
                      o === r && (o = L.getPropertyValue(a, t));
                    else {
                      var i = L.setPropertyValue(a, t, n);
                      (i[0] === "transform" && g.CSS.flushTransformCache(a),
                        (o = i));
                    }
                  }),
                  o
                );
              }));
            var E = function () {
              var e;
              function o() {
                return i ? v.promise || null : l;
              }
              var a =
                  arguments[0] &&
                  (arguments[0].p ||
                    (m.isPlainObject(arguments[0].properties) &&
                      !arguments[0].properties.names) ||
                    d.isString(arguments[0].properties)),
                i,
                l,
                s,
                p,
                f,
                b;
              d.isWrapped(this)
                ? ((i = !1), (s = 0), (p = this), (l = this))
                : ((i = !0),
                  (s = 1),
                  (p = a
                    ? arguments[0].elements || arguments[0].e
                    : arguments[0]));
              var v = { promise: null, resolver: null, rejecter: null };
              if (
                (i &&
                  g.Promise &&
                  (v.promise = new g.Promise(function (e, t) {
                    ((v.resolver = e), (v.rejecter = t));
                  })),
                a
                  ? ((f = arguments[0].properties || arguments[0].p),
                    (b = arguments[0].options || arguments[0].o))
                  : ((f = arguments[s]), (b = arguments[s + 1])),
                (p = c(p)),
                !p)
              ) {
                v.promise &&
                  (!f || !b || b.promiseRejectEmpty !== !1
                    ? v.rejecter()
                    : v.resolver());
                return;
              }
              var S = p.length,
                k = 0;
              if (
                !/^(stop|finish|finishAll|pause|resume)$/i.test(f) &&
                !m.isPlainObject(b)
              ) {
                var I = s + 1;
                b = {};
                for (var T = I; T < arguments.length; T++)
                  !d.isArray(arguments[T]) &&
                  (/^(fast|normal|slow)$/i.test(arguments[T]) ||
                    /^\d/.test(arguments[T]))
                    ? (b.duration = arguments[T])
                    : d.isString(arguments[T]) || d.isArray(arguments[T])
                      ? (b.easing = arguments[T])
                      : d.isFunction(arguments[T]) &&
                        (b.complete = arguments[T]);
              }
              var D;
              switch (f) {
                case "scroll":
                  D = "scroll";
                  break;
                case "reverse":
                  D = "reverse";
                  break;
                case "pause":
                  var P = new Date().getTime();
                  return (
                    m.each(p, function (e, t) {
                      y(t, P);
                    }),
                    m.each(g.State.calls, function (e, t) {
                      var n = !1;
                      t &&
                        m.each(t[1], function (e, o) {
                          var a = b === r ? "" : b;
                          if (
                            a !== !0 &&
                            t[2].queue !== a &&
                            !(b === r && t[2].queue === !1)
                          )
                            return !0;
                          if (
                            (m.each(p, function (e, r) {
                              if (r === o)
                                return ((t[5] = { resume: !1 }), (n = !0), !1);
                            }),
                            n)
                          )
                            return !1;
                        });
                    }),
                    o()
                  );
                case "resume":
                  return (
                    m.each(p, function (e, t) {
                      C(t);
                    }),
                    m.each(g.State.calls, function (e, t) {
                      var n = !1;
                      t &&
                        m.each(t[1], function (e, o) {
                          var a = b === r ? "" : b;
                          if (
                            (a !== !0 &&
                              t[2].queue !== a &&
                              !(b === r && t[2].queue === !1)) ||
                            !t[5]
                          )
                            return !0;
                          if (
                            (m.each(p, function (e, r) {
                              if (r === o)
                                return ((t[5].resume = !0), (n = !0), !1);
                            }),
                            n)
                          )
                            return !1;
                        });
                    }),
                    o()
                  );
                case "finish":
                case "finishAll":
                case "stop":
                  m.each(p, function (e, t) {
                    (h(t) &&
                      h(t).delayTimer &&
                      (clearTimeout(h(t).delayTimer.setTimeout),
                      h(t).delayTimer.next && h(t).delayTimer.next(),
                      delete h(t).delayTimer),
                      f === "finishAll" &&
                        (b === !0 || d.isString(b)) &&
                        (m.each(
                          m.queue(t, d.isString(b) ? b : ""),
                          function (e, t) {
                            d.isFunction(t) && t();
                          },
                        ),
                        m.queue(t, d.isString(b) ? b : "", [])));
                  });
                  var N = [];
                  return (
                    m.each(g.State.calls, function (e, t) {
                      t &&
                        m.each(t[1], function (n, o) {
                          var a = b === r ? "" : b;
                          if (
                            a !== !0 &&
                            t[2].queue !== a &&
                            !(b === r && t[2].queue === !1)
                          )
                            return !0;
                          m.each(p, function (n, r) {
                            if (r === o)
                              if (
                                ((b === !0 || d.isString(b)) &&
                                  (m.each(
                                    m.queue(r, d.isString(b) ? b : ""),
                                    function (e, t) {
                                      d.isFunction(t) && t(null, !0);
                                    },
                                  ),
                                  m.queue(r, d.isString(b) ? b : "", [])),
                                f === "stop")
                              ) {
                                var i = h(r);
                                (i &&
                                  i.tweensContainer &&
                                  (a === !0 || a === "") &&
                                  m.each(i.tweensContainer, function (e, t) {
                                    t.endValue = t.currentValue;
                                  }),
                                  N.push(e));
                              } else
                                (f === "finish" || f === "finishAll") &&
                                  (t[2].duration = 1);
                          });
                        });
                    }),
                    f === "stop" &&
                      (m.each(N, function (e, t) {
                        $(t, !0);
                      }),
                      v.promise && v.resolver(p)),
                    o()
                  );
                default:
                  if (m.isPlainObject(f) && !d.isEmptyObject(f)) D = "start";
                  else if (d.isString(f) && g.Redirects[f]) {
                    e = m.extend({}, b);
                    var M = e.duration,
                      w = e.delay || 0;
                    return (
                      e.backwards === !0 && (p = m.extend(!0, [], p).reverse()),
                      m.each(p, function (t, n) {
                        (parseFloat(e.stagger)
                          ? (e.delay = w + parseFloat(e.stagger) * t)
                          : d.isFunction(e.stagger) &&
                            (e.delay = w + e.stagger.call(n, t, S)),
                          e.drag &&
                            ((e.duration =
                              parseFloat(M) ||
                              (/^(callout|transition)/.test(f) ? 1e3 : _)),
                            (e.duration = Math.max(
                              e.duration *
                                (e.backwards ? 1 - t / S : (t + 1) / S),
                              e.duration * 0.75,
                              200,
                            ))),
                          g.Redirects[f].call(
                            n,
                            n,
                            e || {},
                            t,
                            S,
                            p,
                            v.promise ? v : r,
                          ));
                      }),
                      o()
                    );
                  } else {
                    var A =
                      "Velocity: First argument (" +
                      f +
                      ") was not a property map, a known action, or a registered redirect. Aborting.";
                    return (
                      v.promise ? v.rejecter(new Error(A)) : t.console,
                      o()
                    );
                  }
              }
              var F = {
                  lastParent: null,
                  lastPosition: null,
                  lastFontSize: null,
                  lastPercentToPxWidth: null,
                  lastPercentToPxHeight: null,
                  lastEmToPx: null,
                  remToPx: null,
                  vwToPx: null,
                  vhToPx: null,
                },
                O = [];
              function B(e, o) {
                var a = m.extend({}, g.defaults, b),
                  i = {},
                  l;
                switch (
                  (h(e) === r && g.init(e),
                  parseFloat(a.delay) &&
                    a.queue !== !1 &&
                    m.queue(e, a.queue, function (t, n) {
                      if (n === !0) return !0;
                      g.velocityQueueEntryFlag = !0;
                      var r = g.State.delayedElements.count++;
                      g.State.delayedElements[r] = e;
                      var o = (function (e) {
                        return function () {
                          ((g.State.delayedElements[e] = !1), t());
                        };
                      })(r);
                      ((h(e).delayBegin = new Date().getTime()),
                        (h(e).delay = parseFloat(a.delay)),
                        (h(e).delayTimer = {
                          setTimeout: setTimeout(t, parseFloat(a.delay)),
                          next: o,
                        }));
                    }),
                  a.duration.toString().toLowerCase())
                ) {
                  case "fast":
                    a.duration = 200;
                    break;
                  case "normal":
                    a.duration = _;
                    break;
                  case "slow":
                    a.duration = 600;
                    break;
                  default:
                    a.duration = parseFloat(a.duration) || 1;
                }
                (g.mock !== !1 &&
                  (g.mock === !0
                    ? (a.duration = a.delay = 1)
                    : ((a.duration *= parseFloat(g.mock) || 1),
                      (a.delay *= parseFloat(g.mock) || 1))),
                  (a.easing = R(a.easing, a.duration)),
                  a.begin && !d.isFunction(a.begin) && (a.begin = null),
                  a.progress &&
                    !d.isFunction(a.progress) &&
                    (a.progress = null),
                  a.complete &&
                    !d.isFunction(a.complete) &&
                    (a.complete = null),
                  a.display !== r &&
                    a.display !== null &&
                    ((a.display = a.display.toString().toLowerCase()),
                    a.display === "auto" &&
                      (a.display = g.CSS.Values.getDisplayType(e))),
                  a.visibility !== r &&
                    a.visibility !== null &&
                    (a.visibility = a.visibility.toString().toLowerCase()),
                  (a.mobileHA =
                    a.mobileHA && g.State.isMobile && !g.State.isGingerbread));
                function s(s) {
                  var c, _;
                  if (a.begin && k === 0)
                    try {
                      a.begin.call(p, p);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 1);
                    }
                  if (D === "scroll") {
                    var y = /^x$/i.test(a.axis) ? "Left" : "Top",
                      C = parseFloat(a.offset) || 0,
                      E,
                      I,
                      T;
                    (a.container
                      ? d.isWrapped(a.container) || d.isNode(a.container)
                        ? ((a.container = a.container[0] || a.container),
                          (E = a.container["scroll" + y]),
                          (T = E + m(e).position()[y.toLowerCase()] + C))
                        : (a.container = null)
                      : ((E =
                          g.State.scrollAnchor[g.State["scrollProperty" + y]]),
                        (I =
                          g.State.scrollAnchor[
                            g.State[
                              "scrollProperty" + (y === "Left" ? "Top" : "Left")
                            ]
                          ]),
                        (T = m(e).offset()[y.toLowerCase()] + C)),
                      (i = {
                        scroll: {
                          rootPropertyValue: !1,
                          startValue: E,
                          currentValue: E,
                          endValue: T,
                          unitType: "",
                          easing: a.easing,
                          scrollData: {
                            container: a.container,
                            direction: y,
                            alternateValue: I,
                          },
                        },
                        element: e,
                      }),
                      g.debug && i.scroll);
                  } else if (D === "reverse") {
                    if (((c = h(e)), !c)) return;
                    if (c.tweensContainer) {
                      (c.opts.display === "none" && (c.opts.display = "auto"),
                        c.opts.visibility === "hidden" &&
                          (c.opts.visibility = "visible"),
                        (c.opts.loop = !1),
                        (c.opts.begin = null),
                        (c.opts.complete = null),
                        b.easing || delete a.easing,
                        b.duration || delete a.duration,
                        (a = m.extend({}, c.opts, a)),
                        (_ = m.extend(!0, {}, c ? c.tweensContainer : null)));
                      for (var $ in _)
                        if (_.hasOwnProperty($) && $ !== "element") {
                          var P = _[$].startValue;
                          ((_[$].startValue = _[$].currentValue =
                            _[$].endValue),
                            (_[$].endValue = P),
                            d.isEmptyObject(b) || (_[$].easing = a.easing),
                            g.debug && "" + $ + JSON.stringify(_[$]));
                        }
                      i = _;
                    } else {
                      m.dequeue(e, a.queue);
                      return;
                    }
                  } else if (D === "start") {
                    ((c = h(e)),
                      c &&
                        c.tweensContainer &&
                        c.isAnimating === !0 &&
                        (_ = c.tweensContainer));
                    var N = function (t, n) {
                        var r, i, l;
                        return (
                          d.isFunction(t) && (t = t.call(e, o, S)),
                          d.isArray(t)
                            ? ((r = t[0]),
                              (!d.isArray(t[1]) && /^[\d-]/.test(t[1])) ||
                              d.isFunction(t[1]) ||
                              L.RegEx.isHex.test(t[1])
                                ? (l = t[1])
                                : (d.isString(t[1]) &&
                                      !L.RegEx.isHex.test(t[1]) &&
                                      g.Easings[t[1]]) ||
                                    d.isArray(t[1])
                                  ? ((i = n ? t[1] : R(t[1], a.duration)),
                                    (l = t[2]))
                                  : (l = t[1] || t[2]))
                            : (r = t),
                          n || (i = i || a.easing),
                          d.isFunction(r) && (r = r.call(e, o, S)),
                          d.isFunction(l) && (l = l.call(e, o, S)),
                          [r || 0, i, l]
                        );
                      },
                      M = function (o, s) {
                        var u = L.Hooks.getRoot(o),
                          p = !1,
                          f = s[0],
                          h = s[1],
                          y = s[2],
                          C;
                        if (
                          (!c || !c.isSVG) &&
                          u !== "tween" &&
                          L.Names.prefixCheck(u)[1] === !1 &&
                          L.Normalizations.registered[u] === r
                        ) {
                          g.debug && "" + u;
                          return;
                        }
                        (((a.display !== r &&
                          a.display !== null &&
                          a.display !== "none") ||
                          (a.visibility !== r && a.visibility !== "hidden")) &&
                          /opacity|filter/.test(o) &&
                          !y &&
                          f !== 0 &&
                          (y = 0),
                          a._cacheValues && _ && _[o]
                            ? (y === r && (y = _[o].endValue + _[o].unitType),
                              (p = c.rootPropertyValueCache[u]))
                            : L.Hooks.registered[o]
                              ? y === r
                                ? ((p = L.getPropertyValue(e, u)),
                                  (y = L.getPropertyValue(e, o, p)))
                                : (p = L.Hooks.templates[u][1])
                              : y === r && (y = L.getPropertyValue(e, o)));
                        var b,
                          v,
                          S,
                          R = !1,
                          E = function (e, t) {
                            var n, r;
                            return (
                              (r = (t || "0")
                                .toString()
                                .toLowerCase()
                                .replace(/[%A-z]+$/, function (e) {
                                  return ((n = e), "");
                                })),
                              n || (n = L.Values.getUnitType(e)),
                              [r, n]
                            );
                          };
                        if (y !== f && d.isString(y) && d.isString(f)) {
                          C = "";
                          var k = 0,
                            I = 0,
                            T = [],
                            D = [],
                            x = 0,
                            $ = 0,
                            P = 0;
                          for (
                            y = L.Hooks.fixColors(y), f = L.Hooks.fixColors(f);
                            k < y.length && I < f.length;
                          ) {
                            var N = y[k],
                              M = f[I];
                            if (/[\d\.-]/.test(N) && /[\d\.-]/.test(M)) {
                              for (
                                var w = N, A = M, O = ".", B = ".";
                                ++k < y.length;
                              ) {
                                if (((N = y[k]), N === O)) O = "..";
                                else if (!/\d/.test(N)) break;
                                w += N;
                              }
                              for (; ++I < f.length; ) {
                                if (((M = f[I]), M === B)) B = "..";
                                else if (!/\d/.test(M)) break;
                                A += M;
                              }
                              var W = L.Hooks.getUnit(y, k),
                                q = L.Hooks.getUnit(f, I);
                              if (((k += W.length), (I += q.length), W === q))
                                w === A
                                  ? (C += w + W)
                                  : ((C +=
                                      "{" +
                                      T.length +
                                      ($ ? "!" : "") +
                                      "}" +
                                      W),
                                    T.push(parseFloat(w)),
                                    D.push(parseFloat(A)));
                              else {
                                var U = parseFloat(w),
                                  V = parseFloat(A);
                                ((C +=
                                  (x < 5 ? "calc" : "") +
                                  "(" +
                                  (U
                                    ? "{" + T.length + ($ ? "!" : "") + "}"
                                    : "0") +
                                  W +
                                  " + " +
                                  (V
                                    ? "{" +
                                      (T.length + (U ? 1 : 0)) +
                                      ($ ? "!" : "") +
                                      "}"
                                    : "0") +
                                  q +
                                  ")"),
                                  U && (T.push(U), D.push(0)),
                                  V && (T.push(0), D.push(V)));
                              }
                            } else if (N === M)
                              ((C += N),
                                k++,
                                I++,
                                (x === 0 && N === "c") ||
                                (x === 1 && N === "a") ||
                                (x === 2 && N === "l") ||
                                (x === 3 && N === "c") ||
                                (x >= 4 && N === "(")
                                  ? x++
                                  : ((x && x < 5) ||
                                      (x >= 4 && N === ")" && --x < 5)) &&
                                    (x = 0),
                                ($ === 0 && N === "r") ||
                                ($ === 1 && N === "g") ||
                                ($ === 2 && N === "b") ||
                                ($ === 3 && N === "a") ||
                                ($ >= 3 && N === "(")
                                  ? ($ === 3 && N === "a" && (P = 1), $++)
                                  : P && N === ","
                                    ? ++P > 3 && ($ = P = 0)
                                    : ((P && $ < (P ? 5 : 4)) ||
                                        ($ >= (P ? 4 : 3) &&
                                          N === ")" &&
                                          --$ < (P ? 5 : 4))) &&
                                      ($ = P = 0));
                            else {
                              x = 0;
                              break;
                            }
                          }
                          ((k !== y.length || I !== f.length) &&
                            (g.debug && "" + f + y, (C = r)),
                            C &&
                              (T.length
                                ? (g.debug && ("" + C, "" + y + f),
                                  (y = T),
                                  (f = D),
                                  (v = S = ""))
                                : (C = r)));
                        }
                        C ||
                          ((b = E(o, y)),
                          (y = b[0]),
                          (S = b[1]),
                          (b = E(o, f)),
                          (f = b[0].replace(/^([+-\/*])=/, function (e, t) {
                            return ((R = t), "");
                          })),
                          (v = b[1]),
                          (y = parseFloat(y) || 0),
                          (f = parseFloat(f) || 0),
                          v === "%" &&
                            (/^(fontSize|lineHeight)$/.test(o)
                              ? ((f = f / 100), (v = "em"))
                              : /^scale/.test(o)
                                ? ((f = f / 100), (v = ""))
                                : /(Red|Green|Blue)$/i.test(o) &&
                                  ((f = (f / 100) * 255), (v = ""))));
                        var H = function () {
                          var r = {
                              myParent: e.parentNode || n.body,
                              position: L.getPropertyValue(e, "position"),
                              fontSize: L.getPropertyValue(e, "fontSize"),
                            },
                            o =
                              r.position === F.lastPosition &&
                              r.myParent === F.lastParent,
                            a = r.fontSize === F.lastFontSize;
                          ((F.lastParent = r.myParent),
                            (F.lastPosition = r.position),
                            (F.lastFontSize = r.fontSize));
                          var i = 100,
                            l = {};
                          if (!a || !o) {
                            var s =
                              c && c.isSVG
                                ? n.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    "rect",
                                  )
                                : n.createElement("div");
                            (g.init(s),
                              r.myParent.appendChild(s),
                              m.each(
                                ["overflow", "overflowX", "overflowY"],
                                function (e, t) {
                                  g.CSS.setPropertyValue(s, t, "hidden");
                                },
                              ),
                              g.CSS.setPropertyValue(s, "position", r.position),
                              g.CSS.setPropertyValue(s, "fontSize", r.fontSize),
                              g.CSS.setPropertyValue(
                                s,
                                "boxSizing",
                                "content-box",
                              ),
                              m.each(
                                [
                                  "minWidth",
                                  "maxWidth",
                                  "width",
                                  "minHeight",
                                  "maxHeight",
                                  "height",
                                ],
                                function (e, t) {
                                  g.CSS.setPropertyValue(s, t, i + "%");
                                },
                              ),
                              g.CSS.setPropertyValue(
                                s,
                                "paddingLeft",
                                i + "em",
                              ),
                              (l.percentToPxWidth = F.lastPercentToPxWidth =
                                (parseFloat(
                                  L.getPropertyValue(s, "width", null, !0),
                                ) || 1) / i),
                              (l.percentToPxHeight = F.lastPercentToPxHeight =
                                (parseFloat(
                                  L.getPropertyValue(s, "height", null, !0),
                                ) || 1) / i),
                              (l.emToPx = F.lastEmToPx =
                                (parseFloat(
                                  L.getPropertyValue(s, "paddingLeft"),
                                ) || 1) / i),
                              r.myParent.removeChild(s));
                          } else
                            ((l.emToPx = F.lastEmToPx),
                              (l.percentToPxWidth = F.lastPercentToPxWidth),
                              (l.percentToPxHeight = F.lastPercentToPxHeight));
                          return (
                            F.remToPx === null &&
                              (F.remToPx =
                                parseFloat(
                                  L.getPropertyValue(n.body, "fontSize"),
                                ) || 16),
                            F.vwToPx === null &&
                              ((F.vwToPx = parseFloat(t.innerWidth) / 100),
                              (F.vhToPx = parseFloat(t.innerHeight) / 100)),
                            (l.remToPx = F.remToPx),
                            (l.vwToPx = F.vwToPx),
                            (l.vhToPx = F.vhToPx),
                            g.debug >= 1 && "" + JSON.stringify(l),
                            l
                          );
                        };
                        if (/[\/*]/.test(R)) v = S;
                        else if (S !== v && y !== 0)
                          if (f === 0) v = S;
                          else {
                            l = l || H();
                            var G =
                              /margin|padding|left|right|width|text|word|letter/i.test(
                                o,
                              ) ||
                              /X$/.test(o) ||
                              o === "x"
                                ? "x"
                                : "y";
                            switch (S) {
                              case "%":
                                y *=
                                  G === "x"
                                    ? l.percentToPxWidth
                                    : l.percentToPxHeight;
                                break;
                              case "px":
                                break;
                              default:
                                y *= l[S + "ToPx"];
                            }
                            switch (v) {
                              case "%":
                                y *=
                                  1 /
                                  (G === "x"
                                    ? l.percentToPxWidth
                                    : l.percentToPxHeight);
                                break;
                              case "px":
                                break;
                              default:
                                y *= 1 / l[v + "ToPx"];
                            }
                          }
                        switch (R) {
                          case "+":
                            f = y + f;
                            break;
                          case "-":
                            f = y - f;
                            break;
                          case "*":
                            f = y * f;
                            break;
                          case "/":
                            f = y / f;
                            break;
                        }
                        ((i[o] = {
                          rootPropertyValue: p,
                          startValue: y,
                          currentValue: y,
                          endValue: f,
                          unitType: v,
                          easing: h,
                        }),
                          C && (i[o].pattern = C),
                          g.debug && "" + o + JSON.stringify(i[o]));
                      };
                    for (var w in f)
                      if (f.hasOwnProperty(w)) {
                        var A = L.Names.camelCase(w),
                          B = N(f[w]);
                        if (u(L.Lists.colors)) {
                          var W = B[0],
                            q = B[1],
                            U = B[2];
                          if (L.RegEx.isHex.test(W)) {
                            for (
                              var V = ["Red", "Green", "Blue"],
                                H = L.Values.hexToRgb(W),
                                G = U ? L.Values.hexToRgb(U) : r,
                                z = 0;
                              z < V.length;
                              z++
                            ) {
                              var j = [H[z]];
                              (q && j.push(q),
                                G !== r && j.push(G[z]),
                                M(A + V[z], j));
                            }
                            continue;
                          }
                        }
                        M(A, B);
                      }
                    i.element = e;
                  }
                  i.element &&
                    (L.Values.addClass(e, "velocity-animating"),
                    O.push(i),
                    (c = h(e)),
                    c &&
                      (a.queue === "" &&
                        ((c.tweensContainer = i), (c.opts = a)),
                      (c.isAnimating = !0)),
                    k === S - 1
                      ? (g.State.calls.push([
                          O,
                          p,
                          a,
                          null,
                          v.resolver,
                          null,
                          0,
                        ]),
                        g.State.isTicking === !1 &&
                          ((g.State.isTicking = !0), x()))
                      : k++);
                }
                if (a.queue === !1)
                  if (a.delay) {
                    var c = g.State.delayedElements.count++;
                    g.State.delayedElements[c] = e;
                    var y = (function (e) {
                      return function () {
                        ((g.State.delayedElements[e] = !1), s());
                      };
                    })(c);
                    ((h(e).delayBegin = new Date().getTime()),
                      (h(e).delay = parseFloat(a.delay)),
                      (h(e).delayTimer = {
                        setTimeout: setTimeout(s, parseFloat(a.delay)),
                        next: y,
                      }));
                  } else s();
                else
                  m.queue(e, a.queue, function (e, t) {
                    if (t === !0) return (v.promise && v.resolver(p), !0);
                    ((g.velocityQueueEntryFlag = !0), s());
                  });
                (a.queue === "" || a.queue === "fx") &&
                  m.queue(e)[0] !== "inprogress" &&
                  m.dequeue(e);
              }
              (m.each(p, function (e, t) {
                d.isNode(t) && B(t, e);
              }),
                (e = m.extend({}, g.defaults, b)),
                (e.loop = parseInt(e.loop, 10)));
              var W = e.loop * 2 - 1;
              if (e.loop)
                for (var q = 0; q < W; q++) {
                  var U = { delay: e.delay, progress: e.progress };
                  (q === W - 1 &&
                    ((U.display = e.display),
                    (U.visibility = e.visibility),
                    (U.complete = e.complete)),
                    E(p, "reverse", U));
                }
              return o();
            };
            ((g = m.extend(E, g)), (g.animate = E));
            var k = t.requestAnimationFrame || a,
              I = 16,
              T = I;
            if (
              ((g.enableSmoothBackgroundAnimations = function () {
                T = 0;
              }),
              (g.disableSmoothBackgroundAnimations = function () {
                T = I;
              }),
              !g.State.isMobile && n.hidden !== r)
            ) {
              var D = function () {
                n.hidden
                  ? ((k = function (e) {
                      return setTimeout(function () {
                        e(!0);
                      }, T);
                    }),
                    x())
                  : (k = t.requestAnimationFrame || a);
              };
              (D(), n.addEventListener("visibilitychange", D));
            }
            function x(e) {
              if (e) {
                var t = g.timestamp && e !== !0 ? e : i.now(),
                  n = g.State.calls.length;
                n > 1e4 &&
                  ((g.State.calls = l(g.State.calls)),
                  (n = g.State.calls.length));
                for (var a = 0; a < n; a++)
                  if (g.State.calls[a]) {
                    var s = g.State.calls[a],
                      u = s[0],
                      c = s[2],
                      p = s[3],
                      _ = !p,
                      f = null,
                      y = s[5],
                      C = s[6];
                    if ((p || (p = g.State.calls[a][3] = t - 16), y))
                      if (y.resume === !0)
                        ((p = s[3] = Math.round(t - C - 16)), (s[5] = null));
                      else continue;
                    C = s[6] = t - p;
                    for (
                      var b = Math.min(C / c.duration, 1), v = 0, S = u.length;
                      v < S;
                      v++
                    ) {
                      var R = u[v],
                        E = R.element;
                      if (h(E)) {
                        var I = !1;
                        if (
                          c.display !== r &&
                          c.display !== null &&
                          c.display !== "none"
                        ) {
                          if (c.display === "flex") {
                            var T = [
                              "-webkit-box",
                              "-moz-box",
                              "-ms-flexbox",
                              "-webkit-flex",
                            ];
                            m.each(T, function (e, t) {
                              L.setPropertyValue(E, "display", t);
                            });
                          }
                          L.setPropertyValue(E, "display", c.display);
                        }
                        c.visibility !== r &&
                          c.visibility !== "hidden" &&
                          L.setPropertyValue(E, "visibility", c.visibility);
                        for (var D in R)
                          if (R.hasOwnProperty(D) && D !== "element") {
                            var P = R[D],
                              N,
                              M = d.isString(P.easing)
                                ? g.Easings[P.easing]
                                : P.easing;
                            if (d.isString(P.pattern)) {
                              var w =
                                b === 1
                                  ? function (e, t, n) {
                                      var r = P.endValue[t];
                                      return n ? Math.round(r) : r;
                                    }
                                  : function (e, t, n) {
                                      var r = P.startValue[t],
                                        o = P.endValue[t] - r,
                                        a = r + o * M(b, c, o);
                                      return n ? Math.round(a) : a;
                                    };
                              N = P.pattern.replace(/{(\d+)(!)?}/g, w);
                            } else if (b === 1) N = P.endValue;
                            else {
                              var A = P.endValue - P.startValue;
                              N = P.startValue + A * M(b, c, A);
                            }
                            if (!_ && N === P.currentValue) continue;
                            if (((P.currentValue = N), D === "tween")) f = N;
                            else {
                              var F;
                              if (L.Hooks.registered[D]) {
                                F = L.Hooks.getRoot(D);
                                var O = h(E).rootPropertyValueCache[F];
                                O && (P.rootPropertyValue = O);
                              }
                              var B = L.setPropertyValue(
                                E,
                                D,
                                P.currentValue +
                                  (o < 9 && parseFloat(N) === 0
                                    ? ""
                                    : P.unitType),
                                P.rootPropertyValue,
                                P.scrollData,
                              );
                              (L.Hooks.registered[D] &&
                                (L.Normalizations.registered[F]
                                  ? (h(E).rootPropertyValueCache[F] =
                                      L.Normalizations.registered[F](
                                        "extract",
                                        null,
                                        B[1],
                                      ))
                                  : (h(E).rootPropertyValueCache[F] = B[1])),
                                B[0] === "transform" && (I = !0));
                            }
                          }
                        (c.mobileHA &&
                          h(E).transformCache.translate3d === r &&
                          ((h(E).transformCache.translate3d =
                            "(0px, 0px, 0px)"),
                          (I = !0)),
                          I && L.flushTransformCache(E));
                      }
                    }
                    (c.display !== r &&
                      c.display !== "none" &&
                      (g.State.calls[a][2].display = !1),
                      c.visibility !== r &&
                        c.visibility !== "hidden" &&
                        (g.State.calls[a][2].visibility = !1),
                      c.progress &&
                        c.progress.call(
                          s[1],
                          s[1],
                          b,
                          Math.max(0, p + c.duration - t),
                          p,
                          f,
                        ),
                      b === 1 && $(a));
                  }
              }
              g.State.isTicking && k(x);
            }
            function $(e, t) {
              if (!g.State.calls[e]) return !1;
              for (
                var n = g.State.calls[e][0],
                  o = g.State.calls[e][1],
                  a = g.State.calls[e][2],
                  i = g.State.calls[e][4],
                  l = !1,
                  s = 0,
                  u = n.length;
                s < u;
                s++
              ) {
                var c = n[s].element;
                !t &&
                  !a.loop &&
                  (a.display === "none" &&
                    L.setPropertyValue(c, "display", a.display),
                  a.visibility === "hidden" &&
                    L.setPropertyValue(c, "visibility", a.visibility));
                var d = h(c);
                if (
                  a.loop !== !0 &&
                  (m.queue(c)[1] === r ||
                    !/\.velocityQueueEntryFlag/i.test(m.queue(c)[1])) &&
                  d
                ) {
                  ((d.isAnimating = !1), (d.rootPropertyValueCache = {}));
                  var p = !1;
                  (m.each(L.Lists.transforms3D, function (e, t) {
                    var n = /^scale/.test(t) ? 1 : 0,
                      o = d.transformCache[t];
                    d.transformCache[t] !== r &&
                      new RegExp("^\\(" + n + "[^.]").test(o) &&
                      ((p = !0), delete d.transformCache[t]);
                  }),
                    a.mobileHA &&
                      ((p = !0), delete d.transformCache.translate3d),
                    p && L.flushTransformCache(c),
                    L.Values.removeClass(c, "velocity-animating"));
                }
                if (!t && a.complete && !a.loop && s === u - 1)
                  try {
                    a.complete.call(o, o);
                  } catch (e) {
                    setTimeout(function () {
                      throw e;
                    }, 1);
                  }
                (i && a.loop !== !0 && i(o),
                  d &&
                    a.loop === !0 &&
                    !t &&
                    (m.each(d.tweensContainer, function (e, t) {
                      if (
                        /^rotate/.test(e) &&
                        (parseFloat(t.startValue) - parseFloat(t.endValue)) %
                          360 ===
                          0
                      ) {
                        var n = t.startValue;
                        ((t.startValue = t.endValue), (t.endValue = n));
                      }
                      /^backgroundPosition/.test(e) &&
                        parseFloat(t.endValue) === 100 &&
                        t.unitType === "%" &&
                        ((t.endValue = 0), (t.startValue = 100));
                    }),
                    g(c, "reverse", { loop: !0, delay: a.delay })),
                  a.queue !== !1 && m.dequeue(c, a.queue));
              }
              g.State.calls[e] = !1;
              for (var _ = 0, f = g.State.calls.length; _ < f; _++)
                if (g.State.calls[_] !== !1) {
                  l = !0;
                  break;
                }
              l === !1 &&
                ((g.State.isTicking = !1),
                delete g.State.calls,
                (g.State.calls = []));
            }
            return (
              (e.Velocity = g),
              e !== t &&
                ((e.fn.velocity = E), (e.fn.velocity.defaults = g.defaults)),
              m.each(["Down", "Up"], function (e, t) {
                g.Redirects["slide" + t] = function (e, n, o, a, i, l) {
                  var s = m.extend({}, n),
                    u = s.begin,
                    c = s.complete,
                    d = {},
                    p = {
                      height: "",
                      marginTop: "",
                      marginBottom: "",
                      paddingTop: "",
                      paddingBottom: "",
                    };
                  (s.display === r &&
                    (s.display =
                      t === "Down"
                        ? g.CSS.Values.getDisplayType(e) === "inline"
                          ? "inline-block"
                          : "block"
                        : "none"),
                    (s.begin = function () {
                      o === 0 && u && u.call(i, i);
                      for (var n in p)
                        if (p.hasOwnProperty(n)) {
                          d[n] = e.style[n];
                          var r = L.getPropertyValue(e, n);
                          p[n] = t === "Down" ? [r, 0] : [0, r];
                        }
                      ((d.overflow = e.style.overflow),
                        (e.style.overflow = "hidden"));
                    }),
                    (s.complete = function () {
                      for (var t in d)
                        d.hasOwnProperty(t) && (e.style[t] = d[t]);
                      o === a - 1 && (c && c.call(i, i), l && l.resolver(i));
                    }),
                    g(e, p, s));
                };
              }),
              m.each(["In", "Out"], function (e, t) {
                g.Redirects["fade" + t] = function (e, n, o, a, i, l) {
                  var s = m.extend({}, n),
                    u = s.complete,
                    c = { opacity: t === "In" ? 1 : 0 };
                  (o !== 0 && (s.begin = null),
                    o !== a - 1
                      ? (s.complete = null)
                      : (s.complete = function () {
                          (u && u.call(i, i), l && l.resolver(i));
                        }),
                    s.display === r &&
                      (s.display = t === "In" ? "auto" : "none"),
                    g(this, c, s));
                };
              }),
              g
            );
          })(
            window.jQuery || window.Zepto || window,
            window,
            window ? window.document : void 0,
          );
        }));
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      (function (e) {
        typeof n == "function" && typeof d == "object"
          ? (m.exports = e())
          : e();
      })(function () {
        return (function (e, t, n, r) {
          var o = e.Velocity;
          if (!o || !o.Utilities) {
            t.console;
            return;
          }
          var a = o.Utilities,
            i = o.version,
            l = { major: 1, minor: 1, patch: 0 };
          function s(e, t) {
            var n = [];
            return !e || !t
              ? !1
              : (a.each([e, t], function (e, t) {
                  var r = [];
                  (a.each(t, function (e, t) {
                    for (; t.toString().length < 5; ) t = "0" + t;
                    r.push(t);
                  }),
                    n.push(r.join("")));
                }),
                parseFloat(n[0]) > parseFloat(n[1]));
          }
          if (s(l, i)) {
            var u =
              "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw (alert(u), new Error(u));
          }
          ((o.RegisterEffect = o.RegisterUI =
            function (e, t) {
              function n(e, t, n, r) {
                var i = 0,
                  l;
                (a.each(e.nodeType ? [e] : e, function (e, t) {
                  (r && (n += e * r), (l = t.parentNode));
                  var s = [
                    "height",
                    "paddingTop",
                    "paddingBottom",
                    "marginTop",
                    "marginBottom",
                  ];
                  (o.CSS.getPropertyValue(t, "boxSizing")
                    .toString()
                    .toLowerCase() === "border-box" && (s = ["height"]),
                    a.each(s, function (e, n) {
                      i += parseFloat(o.CSS.getPropertyValue(t, n));
                    }));
                }),
                  o.animate(
                    l,
                    { height: (t === "In" ? "+" : "-") + "=" + i },
                    {
                      queue: !1,
                      easing: "ease-in-out",
                      duration: n * (t === "In" ? 0.6 : 1),
                    },
                  ));
              }
              return (
                (o.Redirects[e] = function (i, l, s, u, c, d, m) {
                  var p = s === u - 1,
                    _ = 0;
                  ((m = m || t.loop),
                    typeof t.defaultDuration == "function"
                      ? (t.defaultDuration = t.defaultDuration.call(c, c))
                      : (t.defaultDuration = parseFloat(t.defaultDuration)));
                  for (var f = 0; f < t.calls.length; f++)
                    ((b = t.calls[f][1]), typeof b == "number" && (_ += b));
                  var g =
                    _ >= 1 ? 0 : t.calls.length ? (1 - _) / t.calls.length : 1;
                  for (f = 0; f < t.calls.length; f++) {
                    var h = t.calls[f],
                      y = h[0],
                      C = 1e3,
                      b = h[1],
                      v = h[2] || {},
                      S = {};
                    if (
                      (l.duration !== r
                        ? (C = l.duration)
                        : t.defaultDuration !== r && (C = t.defaultDuration),
                      (S.duration = C * (typeof b == "number" ? b : g)),
                      (S.queue = l.queue || ""),
                      (S.easing = v.easing || "ease"),
                      (S.delay = parseFloat(v.delay) || 0),
                      (S.loop = !t.loop && v.loop),
                      (S._cacheValues = v._cacheValues || !0),
                      f === 0)
                    ) {
                      if (
                        ((S.delay += parseFloat(l.delay) || 0),
                        s === 0 &&
                          (S.begin = function () {
                            l.begin && l.begin.call(c, c);
                            var t = e.match(/(In|Out)$/);
                            (t &&
                              t[0] === "In" &&
                              y.opacity !== r &&
                              a.each(c.nodeType ? [c] : c, function (e, t) {
                                o.CSS.setPropertyValue(t, "opacity", 0);
                              }),
                              l.animateParentHeight &&
                                t &&
                                n(c, t[0], C + S.delay, l.stagger));
                          }),
                        l.display !== null)
                      ) {
                        if (l.display !== r && l.display !== "none")
                          S.display = l.display;
                        else if (/In$/.test(e)) {
                          var R = o.CSS.Values.getDisplayType(i);
                          S.display = R === "inline" ? "inline-block" : R;
                        }
                      }
                      l.visibility &&
                        l.visibility !== "hidden" &&
                        (S.visibility = l.visibility);
                    }
                    if (f === t.calls.length - 1) {
                      var L = function () {
                        ((l.display === r || l.display === "none") &&
                          /Out$/.test(e) &&
                          a.each(c.nodeType ? [c] : c, function (e, t) {
                            o.CSS.setPropertyValue(t, "display", "none");
                          }),
                          l.complete && l.complete.call(c, c),
                          d && d.resolver(c || i));
                      };
                      ((S.complete = function () {
                        if (
                          (m &&
                            o.Redirects[e](
                              i,
                              l,
                              s,
                              u,
                              c,
                              d,
                              m === !0 ? !0 : Math.max(0, m - 1),
                            ),
                          t.reset)
                        ) {
                          for (var n in t.reset)
                            if (t.reset.hasOwnProperty(n)) {
                              var a = t.reset[n];
                              o.CSS.Hooks.registered[n] === r &&
                                (typeof a == "string" ||
                                  typeof a == "number") &&
                                (t.reset[n] = [t.reset[n], t.reset[n]]);
                            }
                          var _ = { duration: 0, queue: !1 };
                          (p && (_.complete = L), o.animate(i, t.reset, _));
                        } else p && L();
                      }),
                        l.visibility === "hidden" &&
                          (S.visibility = l.visibility));
                    }
                    o.animate(i, y, S);
                  }
                }),
                o
              );
            }),
            (o.RegisterEffect.packagedEffects = {
              "callout.bounce": {
                defaultDuration: 550,
                calls: [
                  [{ translateY: -30 }, 0.25],
                  [{ translateY: 0 }, 0.125],
                  [{ translateY: -15 }, 0.125],
                  [{ translateY: 0 }, 0.25],
                ],
              },
              "callout.shake": {
                defaultDuration: 800,
                calls: [
                  [{ translateX: -11 }],
                  [{ translateX: 11 }],
                  [{ translateX: -11 }],
                  [{ translateX: 11 }],
                  [{ translateX: -11 }],
                  [{ translateX: 11 }],
                  [{ translateX: -11 }],
                  [{ translateX: 0 }],
                ],
              },
              "callout.flash": {
                defaultDuration: 1100,
                calls: [
                  [{ opacity: [0, "easeInOutQuad", 1] }],
                  [{ opacity: [1, "easeInOutQuad"] }],
                  [{ opacity: [0, "easeInOutQuad"] }],
                  [{ opacity: [1, "easeInOutQuad"] }],
                ],
              },
              "callout.pulse": {
                defaultDuration: 825,
                calls: [
                  [{ scaleX: 1.1, scaleY: 1.1 }, 0.5, { easing: "easeInExpo" }],
                  [{ scaleX: 1, scaleY: 1 }, 0.5],
                ],
              },
              "callout.swing": {
                defaultDuration: 950,
                calls: [
                  [{ rotateZ: 15 }],
                  [{ rotateZ: -10 }],
                  [{ rotateZ: 5 }],
                  [{ rotateZ: -5 }],
                  [{ rotateZ: 0 }],
                ],
              },
              "callout.tada": {
                defaultDuration: 1e3,
                calls: [
                  [{ scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.1],
                  [{ scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.1],
                  [{ scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.1],
                  ["reverse", 0.125],
                  ["reverse", 0.125],
                  ["reverse", 0.125],
                  ["reverse", 0.125],
                  ["reverse", 0.125],
                  [{ scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.2],
                ],
              },
              "transition.fadeIn": {
                defaultDuration: 500,
                calls: [[{ opacity: [1, 0] }]],
              },
              "transition.fadeOut": {
                defaultDuration: 500,
                calls: [[{ opacity: [0, 1] }]],
              },
              "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformPerspective: [800, 800],
                      rotateY: [0, -55],
                    },
                  ],
                ],
                reset: { transformPerspective: 0 },
              },
              "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformPerspective: [800, 800],
                      rotateY: 55,
                    },
                  ],
                ],
                reset: { transformPerspective: 0, rotateY: 0 },
              },
              "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformPerspective: [800, 800],
                      rotateX: [0, -45],
                    },
                  ],
                ],
                reset: { transformPerspective: 0 },
              },
              "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformPerspective: [800, 800],
                      rotateX: 25,
                    },
                  ],
                ],
                reset: { transformPerspective: 0, rotateX: 0 },
              },
              "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                  [
                    {
                      opacity: [0.725, 0],
                      transformPerspective: [400, 400],
                      rotateY: [-10, 90],
                    },
                    0.5,
                  ],
                  [{ opacity: 0.8, rotateY: 10 }, 0.25],
                  [{ opacity: 1, rotateY: 0 }, 0.25],
                ],
                reset: { transformPerspective: 0 },
              },
              "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                  [
                    {
                      opacity: [0.9, 1],
                      transformPerspective: [400, 400],
                      rotateY: -10,
                    },
                  ],
                  [{ opacity: 0, rotateY: 90 }],
                ],
                reset: { transformPerspective: 0, rotateY: 0 },
              },
              "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                  [
                    {
                      opacity: [0.725, 0],
                      transformPerspective: [400, 400],
                      rotateX: [-10, 90],
                    },
                    0.5,
                  ],
                  [{ opacity: 0.8, rotateX: 10 }, 0.25],
                  [{ opacity: 1, rotateX: 0 }, 0.25],
                ],
                reset: { transformPerspective: 0 },
              },
              "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                  [
                    {
                      opacity: [0.9, 1],
                      transformPerspective: [400, 400],
                      rotateX: -15,
                    },
                  ],
                  [{ opacity: 0, rotateX: 90 }],
                ],
                reset: { transformPerspective: 0, rotateX: 0 },
              },
              "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformOriginX: ["100%", "50%"],
                      transformOriginY: ["100%", "100%"],
                      scaleX: [1, 0],
                      scaleY: [1, 0],
                      translateX: [0, -700],
                      translateZ: 0,
                    },
                  ],
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%" },
              },
              "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformOriginX: ["50%", "100%"],
                      transformOriginY: ["100%", "100%"],
                      scaleX: 0,
                      scaleY: 0,
                      translateX: -700,
                      translateZ: 0,
                    },
                  ],
                ],
                reset: {
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                  scaleX: 1,
                  scaleY: 1,
                  translateX: 0,
                },
              },
              "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformOriginX: ["50%", "50%"],
                      transformOriginY: ["50%", "50%"],
                      scaleX: [1, 0],
                      scaleY: [1, 0],
                      rotateY: [0, 160],
                    },
                    1,
                    { easing: "easeInOutSine" },
                  ],
                ],
              },
              "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                  [
                    {
                      opacity: [0, "easeInOutQuint", 1],
                      transformOriginX: ["50%", "50%"],
                      transformOriginY: ["50%", "50%"],
                      scaleX: 0,
                      scaleY: 0,
                      rotateY: 160,
                    },
                    1,
                    { easing: "swing" },
                  ],
                ],
                reset: { scaleX: 1, scaleY: 1, rotateY: 0 },
              },
              "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformOriginX: ["50%", "50%"],
                      transformOriginY: ["50%", "50%"],
                      scaleX: [1, 1.5],
                      scaleY: [1, 1.5],
                      translateZ: 0,
                    },
                  ],
                ],
              },
              "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformOriginX: ["50%", "50%"],
                      transformOriginY: ["50%", "50%"],
                      scaleX: 1.3,
                      scaleY: 1.3,
                      translateZ: 0,
                    },
                  ],
                ],
                reset: { scaleX: 1, scaleY: 1 },
              },
              "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformOriginX: ["50%", "50%"],
                      transformOriginY: ["50%", "50%"],
                      scaleX: [1, 0.625],
                      scaleY: [1, 0.625],
                      translateZ: 0,
                    },
                  ],
                ],
              },
              "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformOriginX: ["50%", "50%"],
                      transformOriginY: ["50%", "50%"],
                      scaleX: 0.5,
                      scaleY: 0.5,
                      translateZ: 0,
                    },
                  ],
                ],
                reset: { scaleX: 1, scaleY: 1 },
              },
              "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      scaleX: [1.05, 0.3],
                      scaleY: [1.05, 0.3],
                    },
                    0.35,
                  ],
                  [{ scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.2],
                  [{ scaleX: 1, scaleY: 1 }, 0.45],
                ],
              },
              "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                  [{ scaleX: 0.95, scaleY: 0.95 }, 0.35],
                  [{ scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35],
                  [{ opacity: [0, 1], scaleX: 0.3, scaleY: 0.3 }, 0.3],
                ],
                reset: { scaleX: 1, scaleY: 1 },
              },
              "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                  [
                    { opacity: [1, 0], translateY: [-30, 1e3] },
                    0.6,
                    { easing: "easeOutCirc" },
                  ],
                  [{ translateY: 10 }, 0.2],
                  [{ translateY: 0 }, 0.2],
                ],
              },
              "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [
                  [{ translateY: 20 }, 0.2],
                  [{ opacity: [0, "easeInCirc", 1], translateY: -1e3 }, 0.8],
                ],
                reset: { translateY: 0 },
              },
              "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                  [
                    { opacity: [1, 0], translateY: [30, -1e3] },
                    0.6,
                    { easing: "easeOutCirc" },
                  ],
                  [{ translateY: -10 }, 0.2],
                  [{ translateY: 0 }, 0.2],
                ],
              },
              "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [
                  [{ translateY: -20 }, 0.2],
                  [{ opacity: [0, "easeInCirc", 1], translateY: 1e3 }, 0.8],
                ],
                reset: { translateY: 0 },
              },
              "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                  [
                    { opacity: [1, 0], translateX: [30, -1250] },
                    0.6,
                    { easing: "easeOutCirc" },
                  ],
                  [{ translateX: -10 }, 0.2],
                  [{ translateX: 0 }, 0.2],
                ],
              },
              "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                  [{ translateX: 30 }, 0.2],
                  [{ opacity: [0, "easeInCirc", 1], translateX: -1250 }, 0.8],
                ],
                reset: { translateX: 0 },
              },
              "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                  [
                    { opacity: [1, 0], translateX: [-30, 1250] },
                    0.6,
                    { easing: "easeOutCirc" },
                  ],
                  [{ translateX: 10 }, 0.2],
                  [{ translateX: 0 }, 0.2],
                ],
              },
              "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                  [{ translateX: -30 }, 0.2],
                  [{ opacity: [0, "easeInCirc", 1], translateX: 1250 }, 0.8],
                ],
                reset: { translateX: 0 },
              },
              "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                  [{ opacity: [1, 0], translateY: [0, 20], translateZ: 0 }],
                ],
              },
              "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [[{ opacity: [0, 1], translateY: -20, translateZ: 0 }]],
                reset: { translateY: 0 },
              },
              "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                  [{ opacity: [1, 0], translateY: [0, -20], translateZ: 0 }],
                ],
              },
              "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [[{ opacity: [0, 1], translateY: 20, translateZ: 0 }]],
                reset: { translateY: 0 },
              },
              "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [
                  [{ opacity: [1, 0], translateX: [0, -20], translateZ: 0 }],
                ],
              },
              "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [[{ opacity: [0, 1], translateX: -20, translateZ: 0 }]],
                reset: { translateX: 0 },
              },
              "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [
                  [{ opacity: [1, 0], translateX: [0, 20], translateZ: 0 }],
                ],
              },
              "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [[{ opacity: [0, 1], translateX: 20, translateZ: 0 }]],
                reset: { translateX: 0 },
              },
              "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                  [{ opacity: [1, 0], translateY: [0, 75], translateZ: 0 }],
                ],
              },
              "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [[{ opacity: [0, 1], translateY: -75, translateZ: 0 }]],
                reset: { translateY: 0 },
              },
              "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                  [{ opacity: [1, 0], translateY: [0, -75], translateZ: 0 }],
                ],
              },
              "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [[{ opacity: [0, 1], translateY: 75, translateZ: 0 }]],
                reset: { translateY: 0 },
              },
              "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                  [{ opacity: [1, 0], translateX: [0, -75], translateZ: 0 }],
                ],
              },
              "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [[{ opacity: [0, 1], translateX: -75, translateZ: 0 }]],
                reset: { translateX: 0 },
              },
              "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                  [{ opacity: [1, 0], translateX: [0, 75], translateZ: 0 }],
                ],
              },
              "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [[{ opacity: [0, 1], translateX: 75, translateZ: 0 }]],
                reset: { translateX: 0 },
              },
              "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformPerspective: [800, 800],
                      transformOriginX: [0, 0],
                      transformOriginY: ["100%", "100%"],
                      rotateX: [0, -180],
                    },
                  ],
                ],
                reset: {
                  transformPerspective: 0,
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                },
              },
              "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformPerspective: [800, 800],
                      transformOriginX: [0, 0],
                      transformOriginY: ["100%", "100%"],
                      rotateX: -180,
                    },
                  ],
                ],
                reset: {
                  transformPerspective: 0,
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                  rotateX: 0,
                },
              },
              "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformPerspective: [800, 800],
                      transformOriginX: [0, 0],
                      transformOriginY: [0, 0],
                      rotateX: [0, 180],
                    },
                  ],
                ],
                reset: {
                  transformPerspective: 0,
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                },
              },
              "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformPerspective: [800, 800],
                      transformOriginX: [0, 0],
                      transformOriginY: [0, 0],
                      rotateX: 180,
                    },
                  ],
                ],
                reset: {
                  transformPerspective: 0,
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                  rotateX: 0,
                },
              },
              "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformPerspective: [2e3, 2e3],
                      transformOriginX: [0, 0],
                      transformOriginY: [0, 0],
                      rotateY: [0, -180],
                    },
                  ],
                ],
                reset: {
                  transformPerspective: 0,
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                },
              },
              "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformPerspective: [2e3, 2e3],
                      transformOriginX: [0, 0],
                      transformOriginY: [0, 0],
                      rotateY: -180,
                    },
                  ],
                ],
                reset: {
                  transformPerspective: 0,
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                  rotateY: 0,
                },
              },
              "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                  [
                    {
                      opacity: [1, 0],
                      transformPerspective: [2e3, 2e3],
                      transformOriginX: ["100%", "100%"],
                      transformOriginY: [0, 0],
                      rotateY: [0, 180],
                    },
                  ],
                ],
                reset: {
                  transformPerspective: 0,
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                },
              },
              "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                  [
                    {
                      opacity: [0, 1],
                      transformPerspective: [2e3, 2e3],
                      transformOriginX: ["100%", "100%"],
                      transformOriginY: [0, 0],
                      rotateY: 180,
                    },
                  ],
                ],
                reset: {
                  transformPerspective: 0,
                  transformOriginX: "50%",
                  transformOriginY: "50%",
                  rotateY: 0,
                },
              },
            }));
          for (var c in o.RegisterEffect.packagedEffects)
            o.RegisterEffect.packagedEffects.hasOwnProperty(c) &&
              o.RegisterEffect(c, o.RegisterEffect.packagedEffects[c]);
          o.RunSequence = function (e) {
            var t = a.extend(!0, [], e);
            (t.length > 1 &&
              (a.each(t.reverse(), function (e, n) {
                var r = t[e + 1];
                if (r) {
                  var i = n.o || n.options,
                    l = r.o || r.options,
                    s = i && i.sequenceQueue === !1 ? "begin" : "complete",
                    u = l && l[s],
                    c = {};
                  ((c[s] = function () {
                    var e = r.e || r.elements,
                      t = e.nodeType ? [e] : e;
                    (u && u.call(t, t), o(n));
                  }),
                    r.o
                      ? (r.o = a.extend({}, l, c))
                      : (r.options = a.extend({}, l, c)));
                }
              }),
              t.reverse()),
              o(t[0]));
          };
        })(window.jQuery || window.Zepto || window, window);
      });
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    function g(e) {
      switch (e) {
        case void 0:
          return c();
        case "/velocity.ui":
          return f();
        case "/velocity.ui":
          return f();
      }
    }
    a.exports = g;
  },
  null,
);
