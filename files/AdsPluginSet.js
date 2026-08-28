__d(
  "AdsPluginSet",
  ["invariant", "adsMemoizeWithArgs", "areEqual", "immutable", "pickDeep"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function () {
        function t(e, t, n) {
          var o = this;
          ((this.getByMixed = r("adsMemoizeWithArgs")(
            function (e) {
              return o.$2.$1().find(function (t) {
                return t.key === e;
              });
            },
            function (e) {
              return String(e);
            },
            i.id,
          )),
            (this.get = r("adsMemoizeWithArgs")(
              function (e) {
                return o.$2
                  .filter(function (t) {
                    return t.key === e;
                  })
                  .getOne();
              },
              function (e) {
                return String(e);
              },
              i.id,
            )),
            (this.getArray = function () {
              return o.getList().toArray();
            }),
            (this.$1 = e),
            (this.$2 = t || this),
            (this.$3 = n));
        }
        var n = t.prototype;
        return (
          (n.default = function (n) {
            return new t(this.$1, this.$2, n);
          }),
          (n.filter = function (t) {
            return this.$4(this.getList().filter(t));
          }),
          (n.keys = function (t) {
            var e = new Set(t);
            return this.filter(function (t) {
              return e.has(t.key);
            }).$5(t);
          }),
          (n.withShape = function (n) {
            var t = c(n),
              o = function (a) {
                return (e || (e = r("areEqual")))(n, r("pickDeep")(a, t));
              };
            return this.filter(o);
          }),
          (n.sort = function (t) {
            return this.$4(this.getList().sort(t));
          }),
          (n.$5 = function (t) {
            var e = new Map(
                t.map(function (e, t) {
                  return [e, t];
                }),
              ),
              n = function (n, r) {
                var t = n && n.key,
                  o = r && r.key,
                  a = e.get(t) || 0,
                  i = e.get(o) || 0,
                  l = a != null,
                  s = i != null;
                return l && s ? a - i : l ? -1 : s ? 1 : 0;
              };
            return this.sort(n);
          }),
          (n.getList = function () {
            var e = this,
              t = this.$1();
            return t.size === 0 && this.$3
              ? this.$2.$1().filter(function (t) {
                  return t.key === e.$3;
                })
              : t;
          }),
          (n.getMap = function () {
            return r("immutable").Map(
              this.getArray().map(function (e) {
                return [e.key, e];
              }),
            );
          }),
          (n.getNonEmptyArray = function () {
            return this.assertNotEmpty().getArray();
          }),
          (n.getNonEmptyList = function () {
            return this.assertNotEmpty().getList();
          }),
          (n.getNonEmptySet = function () {
            return this.assertNotEmpty().getSet();
          }),
          (n.getOne = function () {
            return this.assertOne().getList().get(0);
          }),
          (n.getSet = function () {
            return this.getList().toSet();
          }),
          (n.collect = function (t) {
            return this.getList().reduce(function (e, n) {
              var r = t(n);
              return r ? e.concat(r) : e;
            }, r("immutable").List());
          }),
          (n.assertNotEmpty = function () {
            return (this.getList().size !== 0 || s(0, 4777), this);
          }),
          (n.assertOne = function () {
            return (
              this.getList().size <= 1 || s(0, 4778),
              this.getList().size === 1 || s(0, 4779),
              this
            );
          }),
          (n.$4 = function (n) {
            return n === this.getList()
              ? this
              : new t(
                  function () {
                    return n;
                  },
                  this.$2,
                  this.$3,
                );
          }),
          t
        );
      })();
    function c(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          var r = e[n];
          r &&
          typeof r == "object" &&
          !Array.isArray(r) &&
          {}.toString.call(r) === "[object Object]"
            ? (t[n] = c(r))
            : (t[n] = null);
        }),
        t
      );
    }
    l.default = u;
  },
  98,
);
