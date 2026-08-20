__d(
  "WorkerSyncedMessagePortWithErrored",
  ["WorkerMessagePort"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        ((r = e.call(this, t, n) || this),
          (r.$WorkerSyncedMessagePortWithErrored$p_1 = !1));
        var o = function () {
          r.$WorkerSyncedMessagePortWithErrored$p_1 = !0;
        };
        return (r.onError.add(o), r.fullyConnected.catch(o), r);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.hasErrored = function () {
          return this.$WorkerSyncedMessagePortWithErrored$p_1;
        }),
        t
      );
    })(o("WorkerMessagePort").WorkerSyncedMessagePort);
    l.WorkerSyncedMessagePortWithErrored = e;
  },
  98,
);
