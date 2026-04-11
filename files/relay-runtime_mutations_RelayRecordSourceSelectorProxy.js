__d(
  "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
  [
    "invariant",
    "relay-runtime/mutations/readUpdatableFragment",
    "relay-runtime/mutations/readUpdatableQuery",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/store/RelayStoreUtils").ROOT_TYPE,
      s = n("relay-runtime/store/RelayStoreUtils").getStorageKey,
      u = n(
        "relay-runtime/mutations/readUpdatableFragment",
      ).readUpdatableFragment,
      c = n("relay-runtime/mutations/readUpdatableQuery").readUpdatableQuery,
      d = (function () {
        function t(e, t, n, r) {
          ((this.__mutator = e),
            (this.__recordSource = t),
            (this.$1 = n),
            (this.$2 = r));
        }
        var n = t.prototype;
        return (
          (n.create = function (t, n) {
            return this.__recordSource.create(t, n);
          }),
          (n.delete = function (t) {
            this.__recordSource.delete(t);
          }),
          (n.get = function (t) {
            return this.__recordSource.get(t);
          }),
          (n.getRoot = function () {
            return this.__recordSource.getRoot();
          }),
          (n.getOperationRoot = function () {
            var t = this.__recordSource.get(this.$1.dataID);
            return (
              t || (t = this.__recordSource.create(this.$1.dataID, e)),
              t
            );
          }),
          (n.$3 = function (t, n, r) {
            var e = t.node.selections.find(function (e) {
              return (
                (e.kind === "LinkedField" && e.name === n) ||
                (e.kind === "RequiredField" && e.field.name === n)
              );
            });
            return (
              e && e.kind === "RequiredField" && (e = e.field),
              (e && e.kind === "LinkedField") || l(0, 1951, n, t.node.name),
              e.plural === r || l(0, 1952, n, r ? "plural" : "singular"),
              e
            );
          }),
          (n.getRootField = function (t) {
            var e = this.$3(this.$1, t, !1),
              n = s(e, this.$1.variables);
            return this.getOperationRoot().getLinkedRecord(n);
          }),
          (n.getPluralRootField = function (t) {
            var e = this.$3(this.$1, t, !0),
              n = s(e, this.$1.variables);
            return this.getOperationRoot().getLinkedRecords(n);
          }),
          (n.invalidateStore = function () {
            this.__recordSource.invalidateStore();
          }),
          (n.readUpdatableQuery = function (t, n) {
            return c(t, n, this, this.$2);
          }),
          (n.readUpdatableFragment = function (t, n) {
            return u(t, n, this, this.$2);
          }),
          t
        );
      })();
    a.exports = d;
  },
  null,
);
