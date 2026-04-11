__d(
  "WAPromiseCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        ((this.promise = t),
          (this.lastUsedTime = this.createdTime = +Date.now()));
      },
      l = (function () {
        function t(e, t) {
          var n = t.maxCached,
            r = n === void 0 ? 10 : n,
            o = t.maxAge,
            a = o === void 0 ? 1 / 0 : o,
            i = t.shouldCache;
          ((this.$1 = {}),
            (this.$2 = r),
            (this.$3 = a),
            (this.$4 = e),
            (this.$5 = i));
        }
        var n = t.prototype;
        return (
          (n.delete = function (t) {
            delete this.$1[t];
          }),
          (n.getOrRun = function (n) {
            var t = this,
              r = this.$1;
            if (this.$3 !== 1 / 0)
              for (
                var o = Date.now() - this.$3, a = Object.keys(r), i = 0;
                i < a.length;
                i++
              ) {
                var l = a[i];
                r[l].createdTime < o && delete r[l];
              }
            var s = r[n];
            if (s) return ((s.lastUsedTime = +Date.now()), s.promise);
            var u = Object.keys(r);
            if (u.length >= this.$2) {
              for (var c, d, m = 0; m < u.length; m++) {
                var p = u[m],
                  _ = r[p];
                (d == null || _.lastUsedTime < d) &&
                  ((d = _.lastUsedTime), (c = p));
              }
              c != null && delete r[c];
            }
            for (
              var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), h = 1;
              h < f;
              h++
            )
              g[h - 1] = arguments[h];
            var y = this.$4.apply(void 0, [n].concat(g));
            return (
              (r[n] = new e(y)),
              y
                .then(function (e) {
                  var r = t.$5;
                  t.$1[n] === y && !r(e) && delete t.$1[n];
                })
                .catch(function () {
                  t.$1[n] === y && delete t.$1[n];
                }),
              y
            );
          }),
          (n.isCached = function (t) {
            var e = this.$1,
              n = e[t];
            if (n) {
              var r = !0;
              if (this.$3 !== 1 / 0) {
                var o = Date.now() - this.$3;
                r = n.createdTime >= o;
              }
              return r && !!n;
            }
            return !1;
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
