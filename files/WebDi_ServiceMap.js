__d(
  "WebDi.ServiceMap",
  ["WebDi.RunErrors", "WebDi.UnsafeCoerce"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Symbol("webdi/not-found"),
      s = (function () {
        function t(e, t, n) {
          ((this.$1 = e), (this.$2 = t), (this.$3 = n));
        }
        ((t.empty = function () {
          return new t(void 0, new Map(), void 0);
        }),
          (t.of = function (n) {
            return new t(void 0, n, void 0);
          }),
          (t.root = function (n) {
            return new t(void 0, new Map(), n);
          }));
        var n = t.prototype;
        return (
          (n.lookup = function (n) {
            for (var t = this; t != null; ) {
              if (t.$2.has(n)) return t.$2.get(n);
              t = t.$1;
            }
            return e;
          }),
          (n.resolvable = function (t) {
            for (var e = this; e != null; ) {
              var n,
                r = (n = e.$3) == null ? void 0 : n.get(t);
              if (r != null) return r;
              e = e.$1;
            }
          }),
          (n.getMaybe = function (n) {
            var t = this.lookup(n.id);
            return t === e ? void 0 : o("WebDi.UnsafeCoerce").coerce(t);
          }),
          (n.get = function (n) {
            var t = this.lookup(n.id);
            if (t === e) throw new (o("WebDi.RunErrors").MissingProvider)(n.id);
            return o("WebDi.UnsafeCoerce").coerce(t);
          }),
          (n.has = function (n) {
            return this.lookup(n.id) !== e;
          }),
          (n.with = function (n, r) {
            return new t(this, new Map([[n.id, r]]), void 0);
          }),
          (n.withAll = function (n) {
            return new t(
              this,
              new Map(
                n.map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [t.id, n];
                }),
              ),
              void 0,
            );
          }),
          (n.child = function () {
            return new t(this, new Map(), void 0);
          }),
          (n.unsafeSet = function (t, n) {
            this.$2.set(t.id, n);
          }),
          (n.names = function () {
            for (var e = new Set(), t = this; t != null; ) {
              for (var n of t.$2.keys()) e.add(n);
              t = t.$1;
            }
            return Array.from(e).sort();
          }),
          t
        );
      })();
    function u() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return s.of(
        new Map(
          t.map(function (e) {
            var t = e[0],
              n = e[1];
            return [t.id, n];
          }),
        ),
      );
    }
    ((l.NOT_FOUND = e), (l.ServiceMap = s), (l.services = u));
  },
  98,
);
