__d(
  "CometFeedCacheOperationLoggingDeferred",
  ["CometFeedCacheOperationVPVObserver", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("CometFeedCacheOperationLoggingImpl").__setRef(
        "CometFeedCacheOperationLoggingDeferred",
      ),
      s = e.getModuleIfRequireable(),
      u = new Set();
    function c(e) {
      o("CometFeedCacheOperationVPVObserver").setObserver(function (t, n) {
        return e.observeVPV(t, n);
      });
    }
    (s != null && c(s),
      e.onReady(function (e) {
        ((s = e), c(e));
        for (var t of u) e.register(t);
        u.clear();
      }));
    function d() {
      return s != null ? s : e.getModuleIfRequireable();
    }
    var m = {
      complete: function (t, n, r) {
        var e;
        (e = d()) == null || e.complete(t, n, r);
      },
      getUndoObservation: function (t, n) {
        var e, r;
        return (e = (r = d()) == null ? void 0 : r.getUndoObservation(t, n)) !=
          null
          ? e
          : null;
      },
      observeVPV: function (t, n) {
        var e;
        (e = d()) == null || e.observeVPV(t, n);
      },
      prepare: function (t, n, r, o, a) {
        var e, i;
        return (e = (i = d()) == null ? void 0 : i.prepare(t, n, r, o, a)) !=
          null
          ? e
          : null;
      },
      recordRejected: function (t, n, r, o) {
        var e;
        (e = d()) == null || e.recordRejected(t, n, r, o);
      },
      recordSkipped: function (t, n, r, o) {
        var e;
        (e = d()) == null || e.recordSkipped(t, n, r, o);
      },
      undo: function (t, n) {
        var e;
        (e = d()) == null || e.undo(t, n);
      },
      wrapHandlerProvider: function (t, n) {
        return (
          d() == null && u.add(t),
          function (e) {
            var r, o;
            return (r =
              (o = d()) == null ? void 0 : o.wrapHandlerProvider(t, n)(e)) !=
              null
              ? r
              : n(e);
          }
        );
      },
    };
    l.default = m;
  },
  98,
);
