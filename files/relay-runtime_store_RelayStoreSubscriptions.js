__d(
  "relay-runtime/store/RelayStoreSubscriptions",
  [
    "relay-runtime/store/RelayReader",
    "relay-runtime/store/hasOverlappingIDs",
    "relay-runtime/store/hasSignificantOverlappingIDs",
    "relay-runtime/util/RelayFeatureFlags",
    "relay-runtime/util/deepFreeze",
    "relay-runtime/util/recycleNodesInto",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = (function () {
        function t(e, t, n) {
          ((this.$1 = new Set()),
            (this.$4 = new Set()),
            (this.__log = e),
            (this.$2 = t),
            (this.$3 = n));
        }
        var r = t.prototype;
        return (
          (r.subscribe = function (t, r) {
            var e = this,
              o = { backup: null, callback: r, snapshot: t, stale: !1 },
              a = function () {
                (e.$1.delete(o),
                  n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY &&
                    o.stale &&
                    e.$4.delete(o));
              };
            return (this.$1.add(o), { dispose: a });
          }),
          (r.snapshotSubscriptions = function (t) {
            var e = this;
            this.$1.forEach(function (r) {
              if (!r.stale) {
                r.backup = r.snapshot;
                return;
              }
              var o = r.snapshot,
                a = n("relay-runtime/store/RelayReader").read(
                  t,
                  o.selector,
                  e.__log,
                  e.$2,
                  e.$3,
                ),
                i = n("relay-runtime/util/recycleNodesInto")(o.data, a.data);
              ((a.data = i), (r.backup = a));
            });
          }),
          (r.restoreSubscriptions = function () {
            var e = this;
            this.$1.forEach(function (t) {
              var r = t.backup;
              ((t.backup = null),
                r
                  ? (r.data !== t.snapshot.data &&
                      ((t.stale = !0),
                      n("relay-runtime/util/RelayFeatureFlags")
                        .OPTIMIZE_NOTIFY && e.$4.add(t)),
                    (t.snapshot = {
                      data: t.snapshot.data,
                      fieldErrors: r.fieldErrors,
                      isMissingData: r.isMissingData,
                      missingClientEdges: r.missingClientEdges,
                      missingLiveResolverFields: r.missingLiveResolverFields,
                      seenRecords: r.seenRecords,
                      selector: r.selector,
                    }))
                  : ((t.stale = !0),
                    n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY &&
                      e.$4.add(t)));
            });
          }),
          (r.updateSubscriptions = function (t, n, r, o) {
            var e = this,
              a = n.size !== 0;
            this.$1.forEach(function (i) {
              var l = e.$5(t, i, n, a, o);
              l != null && r.push(l);
            });
          }),
          (r.updateStaleSubscriptions = function (t, n, r, o) {
            var e = this,
              a = n.size !== 0;
            this.$4.forEach(function (i) {
              var l = e.$5(t, i, n, a, o);
              l != null && r.push(l);
            });
          }),
          (r.$5 = function (r, o, a, i, l) {
            var t = o.backup,
              s = o.callback,
              u = o.snapshot,
              c = o.stale,
              d =
                i &&
                (e || (e = n("relay-runtime/store/hasOverlappingIDs")))(
                  u.seenRecords,
                  a,
                );
            if (!(!c && !d)) {
              var m =
                  d || !t
                    ? n("relay-runtime/store/RelayReader").read(
                        r,
                        u.selector,
                        this.__log,
                        this.$2,
                        this.$3,
                      )
                    : t,
                p = n("relay-runtime/util/recycleNodesInto")(u.data, m.data);
              if (
                ((m = {
                  data: p,
                  fieldErrors: m.fieldErrors,
                  isMissingData: m.isMissingData,
                  missingClientEdges: m.missingClientEdges,
                  missingLiveResolverFields: m.missingLiveResolverFields,
                  seenRecords: m.seenRecords,
                  selector: m.selector,
                }),
                (o.snapshot = m),
                (o.stale = !1),
                n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY &&
                  c &&
                  this.$4.delete(o),
                m.data !== u.data)
              )
                return (
                  this.__log &&
                    n("relay-runtime/util/RelayFeatureFlags")
                      .ENABLE_NOTIFY_SUBSCRIPTION &&
                    this.__log({
                      name: "store.notify.subscription",
                      nextSnapshot: m,
                      snapshot: u,
                      sourceOperation: l,
                    }),
                  s(m),
                  u.selector.owner
                );
              if (
                n("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_LOOSE_SUBSCRIPTION_ATTRIBUTION &&
                (c ||
                  n("relay-runtime/store/hasSignificantOverlappingIDs")(
                    u.seenRecords,
                    a,
                  ))
              )
                return u.selector.owner;
            }
          }),
          (r.size = function () {
            return this.$1.size;
          }),
          t
        );
      })();
    a.exports = s;
  },
  null,
);
