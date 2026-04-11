__d(
  "debug-4.1.1",
  ["ms-2.1.1", "supports-color-5.5.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("ms-2.1.1")),
      s = e(n("supports-color-5.5.0")),
      u = {},
      c = { exports: u };
    function d() {
      function e(e) {
        ((n.debug = n),
          (n.default = n),
          (n.coerce = c),
          (n.disable = i),
          (n.enable = a),
          (n.enabled = s),
          (n.humanize = l()),
          Object.keys(e).forEach(function (t) {
            n[t] = e[t];
          }),
          (n.instances = []),
          (n.names = []),
          (n.skips = []),
          (n.formatters = {}));
        function t(e) {
          for (var t = 0, r = 0; r < e.length; r++)
            ((t = (t << 5) - t + e.charCodeAt(r)), (t |= 0));
          return n.colors[Math.abs(t) % n.colors.length];
        }
        n.selectColor = t;
        function n(e) {
          var a;
          function i() {
            var e = arguments;
            if (i.enabled) {
              var t = i,
                r = Number(new Date()),
                o = r - (a || r);
              ((t.diff = o),
                (t.prev = a),
                (t.curr = r),
                (a = r),
                (e[0] = n.coerce(e[0])),
                typeof e[0] != "string" && e.unshift("%O"));
              var l = 0;
              ((e[0] = e[0].replace(/%([a-zA-Z%])/g, function (r, o) {
                if (r === "%%") return r;
                l++;
                var a = n.formatters[o];
                if (typeof a == "function") {
                  var i = e[l];
                  ((r = a.call(t, i)), e.splice(l, 1), l--);
                }
                return r;
              })),
                n.formatArgs.call(t, e));
              var s = t.log || n.log;
              s.apply(t, e);
            }
          }
          return (
            (i.namespace = e),
            (i.enabled = n.enabled(e)),
            (i.useColors = n.useColors()),
            (i.color = t(e)),
            (i.destroy = r),
            (i.extend = o),
            typeof n.init == "function" && n.init(i),
            n.instances.push(i),
            i
          );
        }
        function r() {
          var e = n.instances.indexOf(this);
          return e !== -1 ? (n.instances.splice(e, 1), !0) : !1;
        }
        function o(e, t) {
          var r = n(this.namespace + (typeof t == "undefined" ? ":" : t) + e);
          return ((r.log = this.log), r);
        }
        function a(e) {
          (n.save(e), (n.names = []), (n.skips = []));
          var t,
            r = (typeof e == "string" ? e : "").split(/[\s,]+/),
            o = r.length;
          for (t = 0; t < o; t++)
            r[t] &&
              ((e = r[t].replace(/\*/g, ".*?")),
              e[0] === "-"
                ? n.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : n.names.push(new RegExp("^" + e + "$")));
          for (t = 0; t < n.instances.length; t++) {
            var a = n.instances[t];
            a.enabled = n.enabled(a.namespace);
          }
        }
        function i() {
          var e = [].join(",");
          return (n.enable(""), e);
        }
        function s(e) {
          if (e[e.length - 1] === "*") return !0;
          var t, r;
          for (t = 0, r = n.skips.length; t < r; t++)
            if (n.skips[t].test(e)) return !1;
          for (t = 0, r = n.names.length; t < r; t++)
            if (n.names[t].test(e)) return !0;
          return !1;
        }
        function u(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, "*");
        }
        function c(e) {
          return e instanceof Error ? e.stack || e.message : e;
        }
        return (n.enable(n.load()), n);
      }
      c.exports = e;
    }
    var m = !1;
    function p() {
      return (m || ((m = !0), d()), c.exports);
    }
    var _ = {},
      f = { exports: _ };
    function g() {
      ((_.log = n),
        (_.formatArgs = t),
        (_.save = r),
        (_.load = o),
        (_.useColors = e),
        (_.storage = a()),
        (_.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]));
      function e() {
        return typeof window != "undefined" &&
          window.process &&
          (window.process.type === "renderer" || window.process.__nwjs)
          ? !0
          : typeof navigator != "undefined" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            ? !1
            : (typeof document != "undefined" &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              (typeof window != "undefined" &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              (typeof navigator != "undefined" &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              (typeof navigator != "undefined" &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
      }
      function t(e) {
        if (
          ((e[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            e[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            f.exports.humanize(this.diff)),
          !!this.useColors)
        ) {
          var t = "color: " + this.color;
          e.splice(1, 0, t, "color: inherit");
          var n = 0,
            r = 0;
          (e[0].replace(/%[a-zA-Z%]/g, function (e) {
            e !== "%%" && (n++, e === "%c" && (r = n));
          }),
            e.splice(r, 0, t));
        }
      }
      function n() {
        return (
          typeof console == "object" &&
          console.log &&
          console.log.apply(console, arguments)
        );
      }
      function r(e) {
        try {
          e ? _.storage.setItem("debug", e) : _.storage.removeItem("debug");
        } catch (e) {}
      }
      function o() {
        var e;
        try {
          e = _.storage.getItem("debug");
        } catch (e) {}
        return (
          !e &&
            typeof process != "undefined" &&
            "env" in process &&
            (e = process.env.DEBUG),
          e
        );
      }
      function a() {
        try {
          return localStorage;
        } catch (e) {}
      }
      f.exports = p()(_);
      var i = f.exports.formatters;
      i.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };
    }
    var h = !1;
    function y() {
      return (h || ((h = !0), g()), f.exports);
    }
    var C = {},
      b = { exports: C };
    function v() {
      var e = {};
      ((C.init = u),
        (C.log = a),
        (C.formatArgs = r),
        (C.save = i),
        (C.load = l),
        (C.useColors = n),
        (C.colors = [6, 2, 3, 4, 5, 1]));
      try {
        var t = s();
        t &&
          (t.stderr || t).level >= 2 &&
          (C.colors = [
            20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
            63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112,
            113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165,
            166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196,
            197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209,
            214, 215, 220, 221,
          ]);
      } catch (e) {}
      C.inspectOpts = Object.keys(process.env)
        .filter(function (e) {
          return /^debug_/i.test(e);
        })
        .reduce(function (e, t) {
          var n = t
              .substring(6)
              .toLowerCase()
              .replace(/_([a-z])/g, function (e, t) {
                return t.toUpperCase();
              }),
            r = process.env[t];
          return (
            /^(yes|on|true|enabled)$/i.test(r)
              ? (r = !0)
              : /^(no|off|false|disabled)$/i.test(r)
                ? (r = !1)
                : r === "null"
                  ? (r = null)
                  : (r = Number(r)),
            (e[n] = r),
            e
          );
        }, {});
      function n() {
        return "colors" in C.inspectOpts ? !!C.inspectOpts.colors : !1;
      }
      function r(e) {
        var t = this.namespace,
          n = this.useColors;
        if (n) {
          var r = this.color,
            a = "\x1B[3" + (r < 8 ? r : "8;5;" + r),
            i = a + ";1m$" + t + "\x1B[0m";
          ((e[0] = i + e[0].split("\n").join("\n" + i)),
            e.push(a + "m+" + b.exports.humanize(this.diff) + "\x1B[0m"));
        } else e[0] = o() + t + " " + e[0];
      }
      function o() {
        return C.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
      }
      function a() {
        return process.stderr.write(e.format.apply(e, arguments) + "\n");
      }
      function i(e) {
        e ? (process.env.DEBUG = e) : delete process.env.DEBUG;
      }
      function l() {
        return process.env.DEBUG;
      }
      function u(e) {
        e.inspectOpts = {};
        for (var t = Object.keys(C.inspectOpts), n = 0; n < t.length; n++)
          e.inspectOpts[t[n]] = C.inspectOpts[t[n]];
      }
      b.exports = p()(C);
      var c = b.exports.formatters;
      ((c.o = function (t) {
        return (
          (this.inspectOpts.colors = this.useColors),
          e.inspect(t, this.inspectOpts).replace(/\s*\n\s*/g, " ")
        );
      }),
        (c.O = function (t) {
          return (
            (this.inspectOpts.colors = this.useColors),
            e.inspect(t, this.inspectOpts)
          );
        }));
    }
    var S = !1;
    function R() {
      return (S || ((S = !0), v()), b.exports);
    }
    var L = {},
      E = { exports: L };
    function k() {
      typeof process == "undefined" ||
      process.type === "renderer" ||
      process.browser === !0 ||
      process.__nwjs
        ? (E.exports = y())
        : (E.exports = R());
    }
    var I = !1;
    function T() {
      return (I || ((I = !0), k()), E.exports);
    }
    function D(e) {
      switch (e) {
        case void 0:
          return T();
      }
    }
    a.exports = D;
  },
  null,
);
