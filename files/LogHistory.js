__d(
  "LogHistory",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 500,
      l = {},
      s = [];
    function u(t, n, r, o) {
      var a = o[0];
      typeof a != "string" ||
        o.length !== 1 ||
        (s.push({ date: Date.now(), level: t, category: n, event: r, args: a }),
        s.length > e && s.shift());
    }
    var c = (function () {
      function e(e) {
        this.category = e;
      }
      var t = e.prototype;
      return (
        (t.debug = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (u("debug", this.category, t, n), this);
        }),
        (t.log = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (u("log", this.category, t, n), this);
        }),
        (t.warn = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (u("warn", this.category, t, n), this);
        }),
        (t.error = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return (u("error", this.category, t, n), this);
        }),
        e
      );
    })();
    function d(e) {
      return (l[e] || (l[e] = new c(e)), l[e]);
    }
    function m() {
      return s;
    }
    function p() {
      s.length = 0;
    }
    function _(e) {
      return e
        .map(function (e) {
          var t = new Date(e.date).toISOString();
          return [t, e.level, e.category, e.event, e.args].join(" | ");
        })
        .join("\n");
    }
    ((i.getInstance = d),
      (i.getEntries = m),
      (i.clearEntries = p),
      (i.formatEntries = _));
  },
  66,
);
