__d(
  "WAWebPonyfillsHeaders",
  ["WAIterableOperators", "WAWebPonyfillsSymbol"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var c =
      "Headers" in window && Headers
        ? Headers
        : ((s =
            typeof r("WAWebPonyfillsSymbol") == "function"
              ? r("WAWebPonyfillsSymbol").iterator
              : "@@iterator"),
          (e = (function () {
            function e(t) {
              var n = this;
              if (((this.$1 = {}), t instanceof e)) {
                var r = function () {
                  var e = o[0],
                    t = o[1],
                    r = t.split(", ");
                  r.forEach(function (t) {
                    n.append(e, t);
                  });
                };
                for (var o of t.entries()) r();
              } else if (typeof t == "object") {
                var a = function (r) {
                  var e = t[r],
                    o = e.split(", ");
                  o.forEach(function (e) {
                    n.append(r, e);
                  });
                };
                for (var i in t) a(i);
              }
            }
            var t = e.prototype;
            return (
              (t.append = function (t, n) {
                var e = t.toLowerCase();
                e in this.$1 ? this.$1[e].push(n) : (this.$1[e] = [n]);
              }),
              (t.delete = function (t) {
                var e = t.toLowerCase();
                delete this.$1[e];
              }),
              (t.entries = function () {
                var e = this,
                  t = Object.keys(this.$1).map(function (t) {
                    return [t, e.get(t) || ""];
                  });
                return o("WAIterableOperators").iteratorFromArray(t);
              }),
              (t.get = function (t) {
                var e = t.toLowerCase();
                return e in this.$1 ? this.$1[e].join(", ") : null;
              }),
              (t.has = function (t) {
                var e = t.toLowerCase();
                return e in this.$1;
              }),
              (t.keys = function () {
                return o("WAIterableOperators").mapIterator(
                  this.entries(),
                  function (e) {
                    var t = e[0];
                    return t;
                  },
                );
              }),
              (t.set = function (t, n) {
                var e = t.toLowerCase();
                this.$1[e] = [n];
              }),
              (t.values = function () {
                return o("WAIterableOperators").mapIterator(
                  this.entries(),
                  function (e) {
                    var t = e[0],
                      n = e[1];
                    return n;
                  },
                );
              }),
              (t[s] = function () {
                return this.entries();
              }),
              (t.toString = function () {
                return "[Object Headers]";
              }),
              e
            );
          })()),
          e);
    l.default = c;
  },
  98,
);
