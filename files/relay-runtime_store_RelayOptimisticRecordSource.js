__d(
  "relay-runtime/store/RelayOptimisticRecordSource",
  [
    "invariant",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordSource",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = n("relay-runtime/store/RelayModernRecord"))).fromObject(
        Object.freeze({ __UNPUBLISH_RECORD_SENTINEL: !0 }),
      ),
      u = (function () {
        function t(e) {
          ((this.$1 = e),
            (this.$2 = n("relay-runtime/store/RelayRecordSource").create()));
        }
        var r = t.prototype;
        return (
          (r.has = function (t) {
            if (this.$2.has(t)) {
              var e = this.$2.get(t);
              return e !== s;
            } else return this.$1.has(t);
          }),
          (r.get = function (t) {
            if (this.$2.has(t)) {
              var e = this.$2.get(t);
              return e === s ? void 0 : e;
            } else return this.$1.get(t);
          }),
          (r.getStatus = function (t) {
            var e = this.get(t);
            return e === void 0
              ? "UNKNOWN"
              : e === null
                ? "NONEXISTENT"
                : "EXISTENT";
          }),
          (r.clear = function () {
            ((this.$1 = n("relay-runtime/store/RelayRecordSource").create()),
              this.$2.clear());
          }),
          (r.delete = function (t) {
            this.$2.delete(t);
          }),
          (r.remove = function (t) {
            this.$2.set(t, s);
          }),
          (r.set = function (t, n) {
            this.$2.set(t, n);
          }),
          (r.getRecordIDs = function () {
            return Object.keys(this.toJSON());
          }),
          (r.size = function () {
            return Object.keys(this.toJSON()).length;
          }),
          (r.toJSON = function () {
            var t = this,
              r = babelHelpers.extends({}, this.$1.toJSON());
            return (
              this.$2.getRecordIDs().forEach(function (o) {
                var a = t.get(o);
                a === void 0
                  ? delete r[o]
                  : (r[o] = (
                      e || (e = n("relay-runtime/store/RelayModernRecord"))
                    ).toJSON(a));
              }),
              r
            );
          }),
          (r.getOptimisticRecordIDs = function () {
            return new Set(this.$2.getRecordIDs());
          }),
          t
        );
      })();
    function c(e) {
      return new u(e);
    }
    function d(e) {
      return (e instanceof u || l(0, 60670), e.getOptimisticRecordIDs());
    }
    a.exports = { create: c, getOptimisticRecordIDs: d };
  },
  null,
);
