__d(
  "cachedGraphAPI",
  ["DateConsts", "LFUCache", "getByPath", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.15,
      s = new (r("LFUCache"))(),
      u = {};
    function c(e, t) {
      return new f(e, t);
    }
    function d(e, t, n, r) {
      var o = babelHelpers.extends({}, n);
      if (r) for (var a of r) delete o[a];
      return e + ":" + t + ":" + JSON.stringify(o);
    }
    function m(e) {
      delete u[e];
    }
    function p(e) {
      return !r("isStringNullOrEmpty")(e);
    }
    function _(e, t, n) {
      (u[e] == null && (u[e] = {}), (u[e][t] = n));
    }
    var f = (function () {
      function t(e, t) {
        ((this.$1 = !1),
          (this.requestSpec = e),
          (this.$2 = void 0),
          (this.$3 = !1),
          (this.$4 = t));
      }
      var n = t.prototype;
      return (
        (n.cacheFor = function (t) {
          return ((this.$2 = t), this);
        }),
        (n.clearCache = function () {
          return ((this.$1 = !0), this);
        }),
        (n.setReturnIsCached = function () {
          return ((this.$3 = !0), this);
        }),
        (n.get = function (n, a) {
          this.requestSpec = this.requestSpec.__setCacheInfo({
            duration: this.$2 == null ? -1 : this.$2,
            clearCache: this.$1,
            topLevelCacheKey: a,
            returnIsCached: this.$3,
          });
          var t = d(
            this.requestSpec.name,
            this.requestSpec.path,
            babelHelpers.extends({}, this.requestSpec.params, n),
            this.$4,
          );
          if (!this.$1)
            if (p(a)) {
              var i = r("getByPath")(u, [a, t]);
              if (i != null) return i;
            } else {
              var l = s.get(t);
              if (l)
                return this.$3
                  ? l.then(function (e) {
                      return babelHelpers.extends({}, e, { __isCached: !0 });
                    })
                  : l;
            }
          var c = this.requestSpec.get(n).catch(function (n) {
            if (p(a)) {
              _(a, t, c);
              var r = u[a];
              window.setTimeout(
                function () {
                  delete r[t];
                },
                e * o("DateConsts").SEC_PER_MIN * o("DateConsts").MS_PER_SEC,
              );
            } else s.set(t, c, null, e);
            throw n;
          });
          return (p(a) ? _(a, t, c) : s.set(t, c, null, this.$2), c);
        }),
        t
      );
    })();
    ((c.createCacheKey = d),
      (c.clearTopLevelCache = m),
      (c._cache = s),
      (c.CACHE_ERROR_FOR = e),
      (l.default = c));
  },
  98,
);
