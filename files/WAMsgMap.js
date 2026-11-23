__d(
  "WAMsgMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$1 = new Map()),
          e == null ||
            e.forEach(function (e) {
              var n = e[0],
                r = e[1];
              t.set(n, r);
            }));
      }
      var t = e.prototype;
      return (
        (t.clear = function () {
          this.$1.clear();
        }),
        (t.delete = function (t) {
          var e;
          (e = this.$1.get(t.externalId)) == null ||
            (e = e.get(t.author)) == null ||
            e.delete(t.chat);
        }),
        (t.get = function (t) {
          var e;
          return (e = this.$1.get(t.externalId)) == null ||
            (e = e.get(t.author)) == null
            ? void 0
            : e.get(t.chat);
        }),
        (t.has = function (t) {
          var e, n;
          return (e =
            (n = this.$1.get(t.externalId)) == null ||
            (n = n.get(t.author)) == null
              ? void 0
              : n.has(t.chat)) != null
            ? e
            : !1;
        }),
        (t.set = function (t, n) {
          var e,
            r,
            o = (e = this.$1.get(t.externalId)) != null ? e : new Map();
          this.$1.has(t.externalId) || this.$1.set(t.externalId, o);
          var a = (r = o.get(t.author)) != null ? r : new Map();
          return (
            o.has(t.author) || o.set(t.author, a),
            a.set(t.chat, n),
            this
          );
        }),
        (t.keys = function () {
          var e = [],
            t = this.$1;
          for (var n of t.keys()) {
            var r,
              o = (r = t.get(n)) != null ? r : new Map();
            for (var a of o.keys()) {
              var i,
                l = (i = o.get(a)) != null ? i : new Map();
              for (var s of l.keys())
                e.push({ externalId: n, author: a, chat: s });
            }
          }
          return e;
        }),
        (t.entries = function () {
          var e = [],
            t = this.$1;
          for (var n of t.keys()) {
            var r,
              o = (r = t.get(n)) != null ? r : new Map();
            for (var a of o.keys()) {
              var i,
                l = (i = o.get(a)) != null ? i : new Map();
              for (var s of l.keys()) {
                var u = l.get(s);
                u != null && e.push([{ externalId: n, author: a, chat: s }, u]);
              }
            }
          }
          return e;
        }),
        (t.values = function () {
          return this.entries().map(function (e) {
            return e[1];
          });
        }),
        e
      );
    })();
    i.MsgMap = e;
  },
  66,
);
