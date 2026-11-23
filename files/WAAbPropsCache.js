__d(
  "WAAbPropsCache",
  ["WAAbPropConverters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 86400,
      s = (function () {
        function t(e) {
          var t = e.abHash,
            n = e.abKey,
            r = e.expoKeyStr,
            o = e.internalExpoKeys,
            a = e.lastSyncTime,
            i = e.overridePropValues,
            l = e.propExpoKeys,
            s = e.propValues,
            u = e.refresh;
          ((this.$1 = i != null ? i : {}),
            (this.$2 = s),
            (this.$4 = t),
            (this.$3 = n),
            (this.$5 = a),
            (this.$7 = u),
            (this.$6 = r),
            (this.$8 = o),
            (this.$9 = l));
        }
        var n = t.prototype;
        return (
          (n.getAbProp = function (t) {
            var e;
            return this.$1[t] != null
              ? this.$1[t]
              : (e = this.$2) == null
                ? void 0
                : e[t];
          }),
          (n.getHash = function () {
            return this.$4;
          }),
          (n.getRefreshSecs = function () {
            var t;
            return (t = this.$7) != null ? t : e;
          }),
          (n.overrideAbProp = function (t, n) {
            this.$1[t] = n;
          }),
          (n.readAll = function () {
            var e = {
              abKey: this.$3,
              hash: this.getHash(),
              refresh: this.getRefreshSecs(),
              lastSyncTime: this.$5 || 0,
            };
            if (
              (this.$9 != null && (e.propExpoKeys = this.$9),
              this.$8 != null && (e.internalExpoKeys = this.$8),
              this.$6 != null && (e.expoKeyStr = this.$6),
              this.$2 != null)
            ) {
              var t = this.$2;
              t != null &&
                ((e.propValues =
                  o("WAAbPropConverters").convertAbPropsToPlainObject(t)),
                this.$1 != null &&
                  (e.propValues = babelHelpers.extends(
                    {},
                    e.propValues,
                    o("WAAbPropConverters").convertAbPropsToPlainObject(
                      this.$1,
                    ),
                  )));
            }
            return e;
          }),
          (n.rewrite = function (t) {
            var e = t.abHash,
              n = t.abKey,
              r = t.expoKeyStr,
              o = t.internalExpoKeys,
              a = t.lastSyncTime,
              i = t.propExpoKeys,
              l = t.propValues,
              s = t.refresh;
            ((this.$2 = l),
              (this.$4 = e),
              (this.$3 = n),
              (this.$5 = a),
              (this.$7 = s),
              (this.$6 = r),
              (this.$8 = o),
              (this.$9 = i));
          }),
          t
        );
      })();
    l.AbPropsCache = s;
  },
  98,
);
