__d(
  "RSTMainThreadDataInWorker",
  [
    "Promise",
    "RSTBackgroundInfo",
    "RSTTracesManagerInWorker",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          ((this.$1 = new Map()), (this.$2 = new Set()));
        }
        var r = t.prototype;
        return (
          (r.getDataEntry = function (t) {
            if (this.$2.has(t)) return null;
            var e = this.$1.get(t);
            if (e != null) return e;
            var n = {
              lastHeartBeatTimeStamp: -1,
              lastEventMetadata: null,
              mainThreadSessionID: t,
              isClosed: !1,
              isBackgrounded: !1,
              backgroundInfoManager: new (o(
                "RSTBackgroundInfo",
              ).RSTBackgroundInfoManager)(),
              heartBeatCheckOn: !0,
              incidentsNotRecovered: new Set(),
              incidentsRecovered: new Set(),
              loggedFreezeTimeStamp: new Set([0]),
              tracesManager: new (o(
                "RSTTracesManagerInWorker",
              ).TracesManager)(),
            };
            return (this.$1.set(t, n), n);
          }),
          (r.deleteDataEntry = function (t) {
            (this.$1.delete(t), this.$2.add(t));
          }),
          (r.iterateOverAllEntries = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                try {
                  yield (e || (e = n("Promise"))).all(
                    Array.from(this.$1.values()).map(function (e) {
                      return t(e);
                    }),
                  );
                } catch (e) {}
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })(),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
