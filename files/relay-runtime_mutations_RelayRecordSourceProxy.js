__d(
  "relay-runtime/mutations/RelayRecordSourceProxy",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordProxy",
    "relay-runtime/mutations/readUpdatableFragment",
    "relay-runtime/mutations/readUpdatableQuery",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayRecordState",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("relay-runtime/store/RelayRecordState").EXISTENT,
      u = n("relay-runtime/store/RelayRecordState").NONEXISTENT,
      c = n("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      d = n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      m = n(
        "relay-runtime/mutations/readUpdatableFragment",
      ).readUpdatableFragment,
      p = n("relay-runtime/mutations/readUpdatableQuery").readUpdatableQuery,
      _ = (function () {
        function t(e, t, n, r, o) {
          ((this.__mutator = e),
            (this.$1 = n || null),
            (this.$2 = {}),
            (this.$3 = t),
            (this.$4 = !1),
            (this.$5 = new Set()),
            (this.$6 = r),
            (this.$7 = o != null ? o : function (e) {}));
        }
        var r = t.prototype;
        return (
          (r.publishSource = function (r, o) {
            var t = this,
              a = r.getRecordIDs();
            (a.forEach(function (o) {
              var a = r.getStatus(o);
              if (a === s) {
                var i = r.get(o);
                i &&
                  (t.__mutator.getStatus(o) !== s &&
                    t.create(
                      o,
                      (
                        e || (e = n("relay-runtime/store/RelayModernRecord"))
                      ).getType(i),
                    ),
                  t.__mutator.copyFieldsFromRecord(i, o));
              } else a === u && t.delete(o);
            }),
              o &&
                o.length &&
                o.forEach(function (e) {
                  var n = t.$1 && t.$1(e.handle);
                  (n || l(0, 681, e.handle), n.update(t, e));
                }));
          }),
          (r.create = function (t, n) {
            (this.__mutator.create(t, n), delete this.$2[t]);
            var e = this.get(t);
            return (e || l(0, 2120), e);
          }),
          (r.delete = function (t) {
            (t !== c || l(0, 2121),
              delete this.$2[t],
              this.__mutator.delete(t));
          }),
          (r.get = function (t) {
            if (!Object.prototype.hasOwnProperty.call(this.$2, t)) {
              var e = this.__mutator.getStatus(t);
              e === s
                ? (this.$2[t] = new (n(
                    "relay-runtime/mutations/RelayRecordProxy",
                  ))(this, this.__mutator, t))
                : (this.$2[t] = e === u ? null : void 0);
            }
            return this.$2[t];
          }),
          (r.getRoot = function () {
            var e = this.get(c);
            return (
              e || (e = this.create(c, d)),
              (e && e.getType() === d) ||
                l(
                  0,
                  21125,
                  e == null
                    ? "no root record found"
                    : "found a root record of type `" + e.getType() + "`",
                ),
              e
            );
          }),
          (r.invalidateStore = function () {
            this.$4 = !0;
          }),
          (r.isStoreMarkedForInvalidation = function () {
            return this.$4;
          }),
          (r.markIDForInvalidation = function (t) {
            this.$5.add(t);
          }),
          (r.getIDsMarkedForInvalidation = function () {
            return this.$5;
          }),
          (r.readUpdatableQuery = function (t, n) {
            return p(t, n, this, this.$6);
          }),
          (r.readUpdatableFragment = function (t, n) {
            return m(t, n, this, this.$6);
          }),
          t
        );
      })();
    a.exports = _;
  },
  null,
);
