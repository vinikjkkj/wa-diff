__d(
  "RSTExternalLoggingDataStoreMainThread",
  [
    "FBLogger",
    "RSTConfig",
    "RSTLogForCrash",
    "getErrorSafe",
    "nextCrashLoggingSpanId",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e5,
      s = 5e3,
      u = 500,
      c = (function () {
        function t() {
          ((this.$5 = !1),
            (this.$1 = new Map()),
            (this.$2 = new Map()),
            (this.$3 = new Map()),
            (this.$4 = new Map()));
        }
        var n = t.prototype;
        return (
          (n.isValidValue = function (t) {
            return t == null || t.length <= s;
          }),
          (n.$6 = function (n, o, a) {
            if (n.length > e || !this.isValidValue(o)) {
              if (!this.$5) {
                var t;
                r("FBLogger")("responsive-tracker").warn(
                  a,
                  n.length,
                  (t = o == null ? void 0 : o.length) != null ? t : 0,
                );
              }
              return ((this.$5 = !0), !1);
            }
            return this.totalStoredPairCount() > u
              ? (this.$5 ||
                  r("FBLogger")("responsive-tracker").warn(
                    "Too many key-value pairs for external span logging data (ignored)",
                  ),
                (this.$5 = !0),
                !1)
              : !0;
          }),
          (n.logSpanEnd = function (t) {
            this.$4.delete(t);
          }),
          (n.logSpanStart = function (t, n) {
            if (
              (n === void 0 && (n = null),
              !this.$6(
                t,
                n,
                "Invalid key or annotation for external logging data (ignored), key size: %s, annotation size: %s",
              ))
            )
              return -1;
            var e = this.$7(t, n),
              r = o("nextCrashLoggingSpanId").nextCrashLoggingSpanId();
            return (
              this.$4.set(r, {
                id: r,
                name: t,
                start: Date.now(),
                annotation: e,
              }),
              r
            );
          }),
          (n.log = function (t, n, a) {
            if (
              !this.$6(
                t,
                n,
                "Invalid key or value for external logging data (ignored), key size: %s, value size: %s",
              )
            )
              return !1;
            var e = !1;
            if (a === o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_HEARTBEAT)
              ((e = this.$8(this.$2, t, n)), this.$2.set(t, n));
            else if (
              a === o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE
            )
              ((e = this.$8(this.$1, t, n)), this.$1.set(t, n));
            else if (
              a === o("RSTLogForCrash").RSTLogMode.VALID_FOR_5_SECONDS ||
              a === o("RSTLogForCrash").RSTLogMode.VALID_FOR_2_MINUTES
            ) {
              var i;
              ((e = !0),
                this.$3.set(t, {
                  value: n,
                  createTime: Date.now(),
                  expirationTime:
                    (i = o("RSTLogForCrash").getExpirationTime(a)) != null
                      ? i
                      : Date.now(),
                }));
            } else r("FBLogger")("responsive-tracker").warn("Invalid logMode");
            return e;
          }),
          (n.$8 = function (t, n, r) {
            return !t.has(n) || t.get(n) !== r;
          }),
          (n.totalStoredPairCount = function () {
            return this.$1.size + this.$2.size + this.$3.size + this.$4.size;
          }),
          (n.get = function (t) {
            if (this.$2.has(t)) return this.$2.get(t) || null;
            if (this.$1.has(t)) return this.$1.get(t) || null;
            var e = this.$3.get(t);
            if (e != null) {
              if (Date.now() < e.expirationTime) return e.value;
              this.$3.delete(t);
            }
            return null;
          }),
          (n.clear = function () {
            (this.$1.clear(), this.clearNextHeartbeatStore());
          }),
          (n.clearNextHeartbeatStore = function () {
            this.$2.clear();
          }),
          (n.clearSpanStore = function () {
            this.$4.clear();
          }),
          (n.getAllSpanData = function () {
            var e = {};
            return (
              this.$4.forEach(function (t, n) {
                e["" + n] = t;
              }),
              e
            );
          }),
          (n.$9 = function () {
            var e = Date.now();
            for (var t of this.$3) {
              var n = t[0],
                r = t[1];
              e >= r.expirationTime && this.$3.delete(n);
            }
          }),
          (n.getTimedStoreData = function () {
            return (
              this.$9(),
              Object.fromEntries(
                Array.from(this.$3.entries()).map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [t, n.value];
                }),
              )
            );
          }),
          (n.getAll = function () {
            return babelHelpers.extends(
              {},
              this.getTimedStoreData(),
              Object.fromEntries(this.$1),
              Object.fromEntries(this.$2),
            );
          }),
          (n.$7 = function (t, n) {
            var e = r("RSTConfig").logSpanAnnotationsMapping.get(t);
            if (e != null)
              try {
                return e(t, n);
              } catch (e) {
                r("FBLogger")("responsive-tracker")
                  .catching(r("getErrorSafe")(e))
                  .warn("Failed to attach built-in annotations for key %s", t);
              }
            return n;
          }),
          t
        );
      })(),
      d = new c();
    l.loggingDataStore = d;
  },
  98,
);
