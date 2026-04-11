__d(
  "url-search-params-polyfill-5.1.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function (e) {
        var t =
            e.URLSearchParams && e.URLSearchParams.prototype.get
              ? e.URLSearchParams
              : null,
          n = t && new t({ a: 1 }).toString() === "a=1",
          r = t && new t("s=%2B").get("s") === "+",
          o = "__URLSearchParams__",
          a = t
            ? (function () {
                var e = new t();
                return (e.append("s", " &"), e.toString() === "s=+%26");
              })()
            : !0,
          i = s.prototype,
          l = !!(e.Symbol && e.Symbol.iterator);
        if (t && n && r && a) return;
        function s(e) {
          ((e = e || ""),
            (e instanceof URLSearchParams || e instanceof s) &&
              (e = e.toString()),
            (this[o] = f(e)));
        }
        ((i.append = function (e, t) {
          g(this[o], e, t);
        }),
          (i.delete = function (e) {
            delete this[o][e];
          }),
          (i.get = function (e) {
            var t = this[o];
            return e in t ? t[e][0] : null;
          }),
          (i.getAll = function (e) {
            var t = this[o];
            return e in t ? t[e].slice(0) : [];
          }),
          (i.has = function (e) {
            return e in this[o];
          }),
          (i.set = function (t, n) {
            this[o][t] = ["" + n];
          }),
          (i.toString = function () {
            var e = this[o],
              t = [],
              n,
              r,
              a,
              i;
            for (r in e)
              for (a = m(r), n = 0, i = e[r]; n < i.length; n++)
                t.push(a + "=" + m(i[n]));
            return t.join("&");
          }));
        var u = !r,
          c = !u && t && !n && e.Proxy;
        Object.defineProperty(e, "URLSearchParams", {
          value: c
            ? new Proxy(t, {
                construct: function (e, t) {
                  return new e(new s(t[0]).toString());
                },
              })
            : s,
        });
        var d = e.URLSearchParams.prototype;
        ((d.polyfill = !0),
          (d.forEach =
            d.forEach ||
            function (e, t) {
              var n = f(this.toString());
              Object.getOwnPropertyNames(n).forEach(function (r) {
                n[r].forEach(function (n) {
                  e.call(t, n, r, this);
                }, this);
              }, this);
            }),
          (d.sort =
            d.sort ||
            function () {
              var e = f(this.toString()),
                t = [],
                n,
                r,
                o;
              for (n in e) t.push(n);
              for (t.sort(), r = 0; r < t.length; r++) this.delete(t[r]);
              for (r = 0; r < t.length; r++) {
                var a = t[r],
                  i = e[a];
                for (o = 0; o < i.length; o++) this.append(a, i[o]);
              }
            }),
          (d.keys =
            d.keys ||
            function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                _(e)
              );
            }),
          (d.values =
            d.values ||
            function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                _(e)
              );
            }),
          (d.entries =
            d.entries ||
            function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                _(e)
              );
            }),
          l && (d[e.Symbol.iterator] = d[e.Symbol.iterator] || d.entries));
        function m(e) {
          var t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0",
          };
          return encodeURIComponent(e).replace(
            /[!'\(\)~]|%20|%00/g,
            function (e) {
              return t[e];
            },
          );
        }
        function p(e) {
          return decodeURIComponent(e.replace(/\+/g, " "));
        }
        function _(t) {
          var n = {
            next: function () {
              var e = t.shift();
              return { done: e === void 0, value: e };
            },
          };
          return (
            l &&
              (n[e.Symbol.iterator] = function () {
                return n;
              }),
            n
          );
        }
        function f(e) {
          var t = {};
          if (typeof e == "object")
            for (var n in e) e.hasOwnProperty(n) && g(t, n, e[n]);
          else {
            e.indexOf("?") === 0 && (e = e.slice(1));
            for (var r = e.split("&"), o = 0; o < r.length; o++) {
              var a = r[o],
                i = a.indexOf("=");
              -1 < i
                ? g(t, p(a.slice(0, i)), p(a.slice(i + 1)))
                : a && g(t, p(a), "");
            }
          }
          return t;
        }
        function g(e, t, n) {
          var r =
            typeof n == "string"
              ? n
              : n != null && typeof n.toString == "function"
                ? n.toString()
                : JSON.stringify(n);
          t in e ? e[t].push(r) : (e[t] = [r]);
        }
      })(
        typeof t != "undefined"
          ? t
          : typeof window != "undefined"
            ? window
            : this,
      );
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
