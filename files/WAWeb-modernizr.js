__d(
  "WAWeb-modernizr",
  [],
  function (t, n, r, o, a, i) {
    (function (e, t, n, r) {
      function o(e, t) {
        return typeof e === t;
      }
      function a(e) {
        var t = L.className,
          n = S._config.classPrefix || "";
        if ((E && (t = t.baseVal), S._config.enableJSClass)) {
          var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
          t = t.replace(r, "$1" + n + "js$2");
        }
        S._config.enableClasses &&
          (e.length > 0 && (t += " " + n + e.join(" " + n)),
          E ? (L.className.baseVal = t) : (L.className = t));
      }
      function i() {
        return typeof n.createElement != "function"
          ? n.createElement(arguments[0])
          : E
            ? n.createElementNS.call(
                n,
                "http://www.w3.org/2000/svg",
                arguments[0],
              )
            : n.createElement.apply(n, arguments);
      }
      function l(e, t) {
        return !!~("" + e).indexOf(t);
      }
      function s() {
        var e = n.body;
        return (e || ((e = i(E ? "svg" : "body")), (e.fake = !0)), e);
      }
      function u(e, t, r, o) {
        var a,
          l,
          u,
          c,
          d = "modernizr",
          m = i("div"),
          p = s();
        if (parseInt(r, 10))
          for (; r--; )
            ((u = i("div")), (u.id = o ? o[r] : d + (r + 1)), m.appendChild(u));
        return (
          (a = i("style")),
          (a.type = "text/css"),
          (a.id = "s" + d),
          (p.fake ? p : m).appendChild(a),
          p.appendChild(m),
          a.styleSheet
            ? (a.styleSheet.cssText = e)
            : a.appendChild(n.createTextNode(e)),
          (m.id = d),
          p.fake &&
            ((p.style.background = ""),
            (p.style.overflow = "hidden"),
            (c = L.style.overflow),
            (L.style.overflow = "hidden"),
            L.appendChild(p)),
          (l = t(m, e)),
          p.fake && p.parentNode
            ? (p.parentNode.removeChild(p),
              (L.style.overflow = c),
              L.offsetHeight)
            : m.parentNode.removeChild(m),
          !!l
        );
      }
      function c(e) {
        return e
          .replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase();
          })
          .replace(/^ms-/, "-ms-");
      }
      function d(e, n, r) {
        var o;
        if ("getComputedStyle" in t) {
          o = getComputedStyle.call(t, e, n);
          var a = t.console;
          if (o !== null) r && (o = o.getPropertyValue(r));
          else if (a) {
            var i = a.error ? "error" : "log";
            a[i].call(
              a,
              "getComputedStyle returning null, its possible modernizr test results are inaccurate",
            );
          }
        } else o = !n && e.currentStyle && e.currentStyle[r];
        return o;
      }
      function m(e, n) {
        var o = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
          for (; o--; ) if (t.CSS.supports(c(e[o]), n)) return !0;
          return !1;
        }
        if ("CSSSupportsRule" in t) {
          for (var a = []; o--; ) a.push("(" + c(e[o]) + ":" + n + ")");
          return (
            (a = a.join(" or ")),
            u(
              "@supports (" + a + ") { #modernizr { position: absolute; } }",
              function (e) {
                return d(e, null, "position") === "absolute";
              },
            )
          );
        }
        return r;
      }
      function p(e) {
        return e
          .replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase();
          })
          .replace(/^-/, "");
      }
      function _(e, t, n, a) {
        function s() {
          c && (delete P.style, delete P.modElem);
        }
        if (((a = !o(a, "undefined") && a), !o(n, "undefined"))) {
          var u = m(e, n);
          if (!o(u, "undefined")) return u;
        }
        for (
          var c, d, _, f, g, h = ["modernizr", "tspan", "samp"];
          !P.style && h.length;
        )
          ((c = !0), (P.modElem = i(h.shift())), (P.style = P.modElem.style));
        for (_ = e.length, d = 0; d < _; d++)
          if (
            ((f = e[d]),
            (g = P.style[f]),
            l(f, "-") && (f = p(f)),
            P.style[f] !== r)
          ) {
            if (a || o(n, "undefined")) return (s(), t !== "pfx" || f);
            try {
              P.style[f] = n;
            } catch (e) {}
            if (P.style[f] !== g) return (s(), t !== "pfx" || f);
          }
        return (s(), !1);
      }
      function f(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      function g(e, t, n) {
        var r;
        for (var a in e)
          if (e[a] in t)
            return n === !1
              ? e[a]
              : ((r = t[e[a]]), o(r, "function") ? f(r, n || t) : r);
        return !1;
      }
      function h(e, t, n, r, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
          l = (e + " " + x.join(i + " ") + i).split(" ");
        return o(t, "string") || o(t, "undefined")
          ? _(l, t, r, a)
          : ((l = (e + " " + I.join(i + " ") + i).split(" ")), g(l, t, n));
      }
      function y(e, t, n) {
        return h(e, r, r, t, n);
      }
      function C(e, t) {
        if (typeof e == "object") for (var n in e) M(e, n) && C(n, e[n]);
        else {
          e = e.toLowerCase();
          var r = e.split("."),
            o = S[r[0]];
          if ((r.length === 2 && (o = o[r[1]]), o !== void 0)) return S;
          ((t = typeof t == "function" ? t() : t),
            r.length === 1
              ? (S[r[0]] = t)
              : (!S[r[0]] ||
                  S[r[0]] instanceof Boolean ||
                  (S[r[0]] = new Boolean(S[r[0]])),
                (S[r[0]][r[1]] = t)),
            a([(t && t !== !1 ? "" : "no-") + r.join("-")]),
            S._trigger(e, t));
        }
        return S;
      }
      var b = [],
        v = {
          _version: "3.11.8",
          _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0,
          },
          _q: [],
          on: function (e, t) {
            var n = this;
            setTimeout(function () {
              t(n[e]);
            }, 0);
          },
          addTest: function (e, t, n) {
            b.push({ name: e, fn: t, options: n });
          },
          addAsyncTest: function (e) {
            b.push({ name: null, fn: e });
          },
        },
        S = function () {};
      ((S.prototype = v), (S = new S()));
      var R = [],
        L = n.documentElement,
        E = L.nodeName.toLowerCase() === "svg",
        k = "Moz O ms Webkit",
        I = v._config.usePrefixes ? k.toLowerCase().split(" ") : [];
      v._domPrefixes = I;
      var T = v._config.usePrefixes
        ? " -webkit- -moz- -o- -ms- ".split(" ")
        : ["", ""];
      v._prefixes = T;
      var D = (function () {
        function e(e, n) {
          var o;
          return (
            !!e &&
            ((n && typeof n != "string") || (n = i(n || "div")),
            (e = "on" + e),
            (o = e in n),
            !o &&
              t &&
              (n.setAttribute || (n = i("div")),
              n.setAttribute(e, ""),
              (o = typeof n[e] == "function"),
              n[e] !== r && (n[e] = r),
              n.removeAttribute(e)),
            o)
          );
        }
        var t = !("onblur" in L);
        return e;
      })();
      v.hasEvent = D;
      var x = v._config.usePrefixes ? k.split(" ") : [];
      v._cssomPrefixes = x;
      var $ = { elem: i("modernizr") };
      S._q.push(function () {
        delete $.elem;
      });
      var P = { style: $.elem.style };
      (S._q.unshift(function () {
        delete P.style;
      }),
        (v.testAllProps = h));
      var N = function (e) {
        var n,
          o = T.length,
          a = t.CSSRule;
        if (a === void 0) return r;
        if (!e) return !1;
        if (
          ((e = e.replace(/^@/, "")),
          (n = e.replace(/-/g, "_").toUpperCase() + "_RULE") in a)
        )
          return "@" + e;
        for (var i = 0; i < o; i++) {
          var l = T[i];
          if (l.toUpperCase() + "_" + n in a)
            return "@-" + l.toLowerCase() + "-" + e;
        }
        return !1;
      };
      ((v.atRule = N),
        (v.prefixed = function (e, t, n) {
          return e.indexOf("@") === 0
            ? N(e)
            : (e.indexOf("-") !== -1 && (e = p(e)),
              t ? h(e, t, n) : h(e, "pfx"));
        }),
        (v.testAllProps = y));
      var M;
      ((v.testProp = function (e, t, n) {
        return _([e], r, t, n);
      }),
        (function () {
          var e = {}.hasOwnProperty;
          M =
            o(e, "undefined") || o(e.call, "undefined")
              ? function (e, t) {
                  return t in e && o(e.constructor.prototype[t], "undefined");
                }
              : function (t, n) {
                  return e.call(t, n);
                };
        })(),
        (v._l = {}),
        (v.on = function (e, t) {
          (this._l[e] || (this._l[e] = []),
            this._l[e].push(t),
            S.hasOwnProperty(e) &&
              setTimeout(function () {
                S._trigger(e, S[e]);
              }, 0));
        }),
        (v._trigger = function (e, t) {
          if (this._l[e]) {
            var n = this._l[e];
            (setTimeout(function () {
              var e;
              for (e = 0; e < n.length; e++) (0, n[e])(t);
            }, 0),
              delete this._l[e]);
          }
        }),
        S._q.push(function () {
          v.addTest = C;
        }),
        S.addAsyncTest(function () {
          function e(e, t, n) {
            function r(t) {
              var r = !(!t || t.type !== "load") && o.width === 1;
              (C(e, e === "webp" && r ? new Boolean(r) : r), n && n(t));
            }
            var o = new Image();
            ((o.onerror = r), (o.onload = r), (o.src = t));
          }
          var t = [
              {
                uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                name: "webp",
              },
              {
                uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                name: "webp.alpha",
              },
              {
                uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                name: "webp.animation",
              },
              {
                uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                name: "webp.lossless",
              },
            ],
            n = t.shift();
          e(n.name, n.uri, function (n) {
            if (n && n.type === "load")
              for (var r = 0; r < t.length; r++) e(t[r].name, t[r].uri);
          });
        }),
        S.addTest("serviceworker", "serviceWorker" in navigator),
        S.addAsyncTest(function () {
          var e = new Image();
          ((e.onerror = function () {
            C("exiforientation", !1, { aliases: ["exif-orientation"] });
          }),
            (e.onload = function () {
              C("exiforientation", e.width !== 2, {
                aliases: ["exif-orientation"],
              });
            }),
            (e.src =
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="));
        }),
        S.addTest("adownload", !t.externalHost && "download" in i("a")),
        S.addTest("cssanimations", y("animationName", "a", !0)),
        S.addTest("csstransitions", y("transition", "all", !0)),
        (function () {
          var e, t, n, r, a, i, l;
          for (var s in b)
            if (b.hasOwnProperty(s)) {
              if (
                ((e = []),
                (t = b[s]),
                t.name &&
                  (e.push(t.name.toLowerCase()),
                  t.options && t.options.aliases && t.options.aliases.length))
              )
                for (n = 0; n < t.options.aliases.length; n++)
                  e.push(t.options.aliases[n].toLowerCase());
              for (
                r = o(t.fn, "function") ? t.fn() : t.fn, a = 0;
                a < e.length;
                a++
              )
                ((i = e[a]),
                  (l = i.split(".")),
                  l.length === 1
                    ? (S[l[0]] = r)
                    : ((S[l[0]] && (!S[l[0]] || S[l[0]] instanceof Boolean)) ||
                        (S[l[0]] = new Boolean(S[l[0]])),
                      (S[l[0]][l[1]] = r)),
                  R.push((r ? "" : "no-") + l.join("-")));
            }
        })(),
        a(R),
        delete v.addTest,
        delete v.addAsyncTest);
      for (var w = 0; w < S._q.length; w++) S._q[w]();
      e.Modernizr = S;
    })(window, window, document);
  },
  null,
);
