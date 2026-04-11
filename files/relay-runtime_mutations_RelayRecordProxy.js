__d(
  "relay-runtime/mutations/RelayRecordProxy",
  [
    "invariant",
    "relay-runtime/store/ClientID",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/store/ClientID").generateClientID,
      s = n("relay-runtime/store/RelayStoreUtils").getStableStorageKey,
      u = (function () {
        function t(e, t, n) {
          ((this.$1 = n), (this.$2 = t), (this.$3 = e));
        }
        var n = t.prototype;
        return (
          (n.copyFieldsFrom = function (t) {
            this.$2.copyFields(t.getDataID(), this.$1);
          }),
          (n.getDataID = function () {
            return this.$1;
          }),
          (n.getType = function () {
            var e = this.$2.getType(this.$1);
            return (e != null || l(0, 4314, this.$1), e);
          }),
          (n.getValue = function (t, n) {
            var e = s(t, n);
            return this.$2.getValue(this.$1, e);
          }),
          (n.setValue = function (t, n, r, o) {
            return (
              c(t) || l(0, 4315, JSON.stringify(t)),
              this.setValue__UNSAFE(t, n, r, o)
            );
          }),
          (n.getErrors = function (t, n) {
            var e = s(t, n);
            return this.$2.getErrors(this.$1, e);
          }),
          (n.setValue__UNSAFE = function (t, n, r, o) {
            var e = s(n, r);
            return (
              this.$2.setValue(this.$1, e, t),
              o != null &&
                (o.length === 0
                  ? this.$2.setErrors(this.$1, e)
                  : this.$2.setErrors(this.$1, e, o)),
              this
            );
          }),
          (n.getLinkedRecord = function (t, n) {
            var e = s(t, n),
              r = this.$2.getLinkedRecordID(this.$1, e);
            return r != null ? this.$3.get(r) : r;
          }),
          (n.setLinkedRecord = function (n, r, o) {
            n instanceof t || l(0, 4316, n);
            var e = s(r, o),
              a = n.getDataID();
            return (this.$2.setLinkedRecordID(this.$1, e, a), this);
          }),
          (n.getOrCreateLinkedRecord = function (n, r, o) {
            var t = this.getLinkedRecord(n, o);
            if (!t) {
              var a,
                i = s(n, o),
                l = e(this.getDataID(), i);
              ((t = (a = this.$3.get(l)) != null ? a : this.$3.create(l, r)),
                this.setLinkedRecord(t, n, o));
            }
            return t;
          }),
          (n.getLinkedRecords = function (t, n) {
            var e = this,
              r = s(t, n),
              o = this.$2.getLinkedRecordIDs(this.$1, r);
            return o == null
              ? o
              : o.map(function (t) {
                  return t != null ? e.$3.get(t) : t;
                });
          }),
          (n.setLinkedRecords = function (t, n, r) {
            Array.isArray(t) || l(0, 4317, t);
            var e = s(n, r),
              o = t.map(function (e) {
                return e && e.getDataID();
              });
            return (this.$2.setLinkedRecordIDs(this.$1, e, o), this);
          }),
          (n.invalidateRecord = function () {
            this.$3.markIDForInvalidation(this.$1);
          }),
          t
        );
      })();
    function c(e) {
      return (
        e == null || typeof e != "object" || (Array.isArray(e) && e.every(c))
      );
    }
    a.exports = u;
  },
  null,
);
