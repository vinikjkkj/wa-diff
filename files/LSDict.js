__d(
  "LSDict",
  ["FBLogger", "I64", "LSVec"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (t != null) {
        var n = (e || (e = o("I64"))).cast(t);
        return n != null
          ? JSON.stringify([(e || (e = o("I64"))).to_string(n)])
          : JSON.stringify(t);
      }
    }
    function u(t) {
      if (t != null) {
        var n = JSON.parse(t);
        return Array.isArray(n) ? (e || (e = o("I64"))).of_string(n[0]) : n;
      }
    }
    var c = (function () {
      function e(e) {
        this.size = 0;
        var t = new Map(
          Array.from(e || [])
            .map(function (e) {
              var t = e[0],
                n = e[1];
              return t == null ? null : [s(t), n];
            })
            .filter(Boolean),
        );
        ((this.$1 = t),
          Object.defineProperties(this, {
            size: {
              get: function () {
                return t.size;
              },
            },
          }));
      }
      var t = e.prototype;
      return (
        (t.get = function (t) {
          if (t != null) return this.$1.get(s(t));
        }),
        (t.set = function (t, n) {
          return t == null ? this : (this.$1.set(s(t), n), this);
        }),
        (t.delete = function (t) {
          return t == null ? !1 : this.$1.delete(s(t));
        }),
        (t.clear = function () {
          return this.$1.clear();
        }),
        (t.forEach = function (t) {
          var e = this;
          this.$1.forEach(function (n, r) {
            return t(n, u(r), e);
          });
        }),
        (t.has = function (t) {
          return t == null ? !1 : this.$1.has(s(t));
        }),
        (t.entries = function* () {
          for (var e of this.$1.entries()) {
            var t = e[0],
              n = e[1];
            yield [u(t), n];
          }
        }),
        (t.keys = function () {
          return r("LSVec").from(
            Array.from(this.$1.keys()).map(function (e) {
              return u(e);
            }),
          );
        }),
        (t.values = function () {
          return this.$1.values();
        }),
        (e.fromObject = function (n) {
          return new e(Object.entries(n));
        }),
        (e.shapeToRecord = function (t) {
          return Array.from(t.entries()).reduce(function (e, t) {
            var n,
              o = t[0],
              a = t[1];
            if (typeof o != "string")
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "Cannot convert dicts with mixed keys to records",
              );
            return babelHelpers.extends({}, e, ((n = {}), (n[o] = a), n));
          }, {});
        }),
        e
      );
    })();
    l.default = c;
  },
  98,
);
