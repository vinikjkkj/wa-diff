__d(
  "ResponsiveTrackerWorker",
  [
    "RSTBlockingTime",
    "RSTConfig",
    "RSTConstants",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTEventsRegisterUseCasesInWorker",
    "RSTIncidentID",
    "RSTIndexedDBSafe",
    "RSTMainThreadDataInWorker",
    "RSTUtils",
    "RSTWeakRefList",
    "RSTWorkerUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = new (r("RSTWeakRefList"))();
    (r("RSTEventsRegisterUseCasesInWorker")(),
      r("RSTBlockingTime").startMonitoring());
    var u = (function () {
        function t() {
          this.$1 = null;
        }
        var a = t.prototype;
        return (
          (a.init = function (t) {
            ((this.$1 = t),
              this.startReceivingCommandFromMainThread(),
              this.startMonitoringMainThread(),
              r("RSTIndexedDBSafe").maybeClearObsoleteIncidents());
          }),
          (a.startReceivingCommandFromMainThread = function () {
            var e;
            (e = this.$1) == null ||
              e.addMessageListener(r("RSTConfig").MESSAGE_TYPE, function (e) {
                var t = e.event,
                  n = e.eventTime,
                  a = e.metadata,
                  i = e.sessionID;
                if (
                  (o("RSTEventsMessageQueue").notify(t, {
                    mainToWorkerMessage: e,
                  }),
                  i != null)
                ) {
                  var l = r("RSTMainThreadDataInWorker").getDataEntry(i);
                  if (
                    l != null &&
                    ((a == null ? void 0 : a.isLightweight) === !0
                      ? (l.lastEventMetadata = o(
                          "RSTWorkerUtils",
                        ).mergeMetadata(l.lastEventMetadata, a))
                      : a != null && (l.lastEventMetadata = a),
                    !o("RSTEvents").isRSTFlushEvent(t))
                  ) {
                    n > l.lastHeartBeatTimeStamp &&
                      (l.lastHeartBeatTimeStamp = n);
                    var s = l.incidentsNotRecovered,
                      u = l.incidentsRecovered;
                    (l.incidentsNotRecovered.forEach(function (e) {
                      u.add(e);
                    }),
                      s.clear());
                  }
                }
              });
          }),
          (a.$2 = function () {
            var e = this;
            self.setInterval(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (o("RSTUtils").debugLog(
                  "RST web worker heart beat checking...",
                ),
                  yield r("RSTMainThreadDataInWorker").iterateOverAllEntries(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          yield e.$3(t.mainThreadSessionID);
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  ));
              }),
              r("RSTConfig").HEART_BEAT_INTERVAL_MS,
            );
          }),
          (a.$3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = r("RSTMainThreadDataInWorker").getDataEntry(t);
                if (n != null && n.heartBeatCheckOn !== !1) {
                  var a = n.incidentsNotRecovered,
                    i = n.lastEventMetadata,
                    l = n.lastHeartBeatTimeStamp,
                    u = n.loggedFreezeTimeStamp,
                    c = n.tracesManager,
                    d = Date.now();
                  if (l < 0) {
                    performance.now() >=
                      r("RSTConfig").FIRST_HEART_BEAT_THRESHOLD_MS &&
                      o("RSTEventsMessageQueue").notify(
                        o("RSTEvents").RSTEvent.NO_HEART_BEAT_SINCE_ORIGIN,
                        {},
                      );
                    return;
                  }
                  if (!u.has(l)) {
                    var m = d - l - r("RSTBlockingTime").getBlockingTime(l, d);
                    if (m > r("RSTConfig").FREEZE_THRESHOLD_MS) {
                      if (s.getSize() > e) return;
                      var p = o("RSTIncidentID").getUniqueIncidentID(t);
                      a.add(p);
                      var _ = c.getCurrentTraces(),
                        f = c.getLastTraceWithPolicySet(),
                        g = {
                          incidentID: p,
                          detectTime: Date.now(),
                          lastHeartBeatTimeStamp: l,
                          message: "unresponsive",
                          sessionID: t,
                          lastHeartBeatMetadata: i,
                          traces: _,
                          lastTrace: f,
                          hasRecovered: !1,
                          unrecoverLastsForMs: d - l,
                          incidentType:
                            r("RSTConstants").incidentType.unresponsive,
                        };
                      (u.add(l),
                        s.add(g),
                        o("RSTUtils").debugLog(
                          "incident to indexedDB: " + g.incidentID,
                        ),
                        yield r("RSTIndexedDBSafe").persistLog(g));
                    }
                  }
                }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$4 = function () {
            var e = this;
            self.setInterval(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield r("RSTMainThreadDataInWorker").iterateOverAllEntries(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        yield e.$5(t.mainThreadSessionID);
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                );
              }),
              r("RSTConfig").WEB_WORKER_UPDATE_INCIDENTS_INTERVAL_MS,
            );
          }),
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = r("RSTMainThreadDataInWorker").getDataEntry(e);
                if (t != null) {
                  var n = t.backgroundInfoManager,
                    a = t.incidentsNotRecovered,
                    i = t.incidentsRecovered;
                  if (!(a.size === 0 && i.size === 0)) {
                    var l = Date.now();
                    yield r("RSTIndexedDBSafe").updateIncidentInDB(
                      function (e) {
                        if (
                          e.incidentType ===
                          r("RSTConstants").incidentType.unexpectedExit
                        )
                          return !1;
                        if (i.has(e.incidentID))
                          return (
                            o("RSTUtils").debugLog(
                              "Update as recovered: " + e.incidentID,
                            ),
                            (e.hasRecovered = !0),
                            i.delete(e.incidentID),
                            !0
                          );
                        if (a.has(e.incidentID)) {
                          var t = e.lastHeartBeatTimeStamp,
                            s =
                              l -
                              t -
                              n.getBackgroundTime(t, l) -
                              r("RSTBlockingTime").getBlockingTime(t, l);
                          o("RSTUtils").debugLog(
                            "Update unrecovered duration for " +
                              (e.incidentID + ": " + s + "ms"),
                          );
                          var u = e.unrecoverLastsForMs;
                          return ((e.unrecoverLastsForMs = s), u !== s);
                        }
                        return !1;
                      },
                    );
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.startMonitoringMainThread = function () {
            (this.$2(), this.$4());
          }),
          t
        );
      })(),
      c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
