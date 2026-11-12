__d(
  "relay-runtime/store/RelayStoreSubscriptions",
  [
    "relay-runtime/store/RelayReader",
    "relay-runtime/store/hasOverlappingIDs",
    "relay-runtime/store/hasOverlappingIDsPerf",
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
        function t(t, r, o) {
          ((this.$1 = new Set()),
            (this.$4 = new Set()),
            (this.__log = t),
            (this.$2 = r),
            (this.$3 = o),
            (this.$5 = n("relay-runtime/util/RelayFeatureFlags")
              .ENABLE_PERF_NOTIFY
              ? n("relay-runtime/store/hasOverlappingIDsPerf")
              : e || (e = n("relay-runtime/store/hasOverlappingIDs"))));
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
              var l = e.$6(t, i, n, a, o);
              l != null && r.push(l);
            });
          }),
          (r.updateStaleSubscriptions = function (t, n, r, o) {
            var e = this,
              a = n.size !== 0;
            this.$4.forEach(function (i) {
              var l = e.$6(t, i, n, a, o);
              l != null && r.push(l);
            });
          }),
          (r.$6 = function (t, r, o, a, i) {
            var e = r.backup,
              l = r.callback,
              s = r.snapshot,
              u = r.stale,
              c = a && this.$5(s.seenRecords, o);
            if (!(!u && !c)) {
              var d =
                  c || !e
                    ? n("relay-runtime/store/RelayReader").read(
                        t,
                        s.selector,
                        this.__log,
                        this.$2,
                        this.$3,
                      )
                    : e,
                m = n("relay-runtime/util/recycleNodesInto")(s.data, d.data);
              if (
                ((d = {
                  data: m,
                  fieldErrors: d.fieldErrors,
                  isMissingData: d.isMissingData,
                  missingClientEdges: d.missingClientEdges,
                  missingLiveResolverFields: d.missingLiveResolverFields,
                  seenRecords: d.seenRecords,
                  selector: d.selector,
                }),
                (r.snapshot = d),
                (r.stale = !1),
                n("relay-runtime/util/RelayFeatureFlags").OPTIMIZE_NOTIFY &&
                  u &&
                  this.$4.delete(r),
                d.data !== s.data)
              )
                return (
                  this.__log &&
                    n("relay-runtime/util/RelayFeatureFlags")
                      .ENABLE_NOTIFY_SUBSCRIPTION &&
                    this.__log({
                      name: "store.notify.subscription",
                      nextSnapshot: d,
                      snapshot: s,
                      sourceOperation: i,
                    }),
                  l(d),
                  s.selector.owner
                );
              if (
                n("relay-runtime/util/RelayFeatureFlags")
                  .ENABLE_LOOSE_SUBSCRIPTION_ATTRIBUTION &&
                (u ||
                  n("relay-runtime/store/hasSignificantOverlappingIDs")(
                    s.seenRecords,
                    o,
                  ))
              )
                return s.selector.owner;
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
