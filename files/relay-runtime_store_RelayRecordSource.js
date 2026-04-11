__d(
  "relay-runtime/store/RelayRecordSource",
  [
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordState",
    "relay-runtime/store/RelayStoreUtils",
    "relay-runtime/util/RelayFeatureFlags",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = n(
        "relay-runtime/store/RelayStoreUtils",
      ).RELAY_RESOLVER_RECORD_TYPENAME,
      s = n("relay-runtime/store/RelayRecordState").EXISTENT,
      u = n("relay-runtime/store/RelayRecordState").NONEXISTENT,
      c = n("relay-runtime/store/RelayRecordState").UNKNOWN,
      d = (function () {
        function t(t) {
          var r = this;
          ((this.$1 = new Map()),
            t != null &&
              Object.keys(t).forEach(function (o) {
                var a = t[o],
                  i = (
                    e || (e = n("relay-runtime/store/RelayModernRecord"))
                  ).fromObject(a);
                r.$1.set(o, i);
              }));
        }
        t.create = function (n) {
          return new t(n);
        };
        var r = t.prototype;
        return (
          (r.clear = function () {
            this.$1 = new Map();
          }),
          (r.delete = function (t) {
            this.$1.set(t, null);
          }),
          (r.get = function (t) {
            return this.$1.get(t);
          }),
          (r.getRecordIDs = function () {
            return Array.from(this.$1.keys());
          }),
          (r.getStatus = function (t) {
            return this.$1.has(t) ? (this.$1.get(t) == null ? u : s) : c;
          }),
          (r.has = function (t) {
            return this.$1.has(t);
          }),
          (r.remove = function (t) {
            this.$1.delete(t);
          }),
          (r.set = function (t, n) {
            this.$1.set(t, n);
          }),
          (r.size = function () {
            return this.$1.size;
          }),
          (r.toJSON = function () {
            var t = {};
            for (var r of this.$1) {
              var o = r[0],
                a = r[1];
              (n("relay-runtime/util/RelayFeatureFlags")
                .FILTER_OUT_RELAY_RESOLVER_RECORDS &&
                a != null &&
                (e || (e = n("relay-runtime/store/RelayModernRecord"))).getType(
                  a,
                ) === l) ||
                (t[o] = (
                  e || (e = n("relay-runtime/store/RelayModernRecord"))
                ).toJSON(a));
            }
            return t;
          }),
          t
        );
      })();
    a.exports = d;
  },
  null,
);
