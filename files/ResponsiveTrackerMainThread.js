__d(
  "ResponsiveTrackerMainThread",
  [
    "ClientServiceWorkerMessage",
    "FBLogger",
    "RSTCloseObserver",
    "RSTConfig",
    "RSTConstants",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTEventsRegisterUseCasesMainThread",
    "RSTIncidentLoggingMainThread",
    "RSTIndexedDBSafe",
    "RSTLocalStorageMainThread",
    "RSTMarkFirstUnrecoverableMainThread",
    "RSTMetadataCollectorMainThread",
    "RSTMetadataMainThread",
    "RSTSessionID",
    "RSTUtils",
    "RSTUtilsMainThread",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    r("RSTEventsRegisterUseCasesMainThread")();
    var e = (function () {
        function e() {
          ((this.$1 = null),
            (this.$2 = new Set()),
            (this.$3 = !1),
            (this.$4 = !1));
        }
        var t = e.prototype;
        return (
          (t.init = function (t) {
            ((this.$1 = t),
              this.startLoggingUnresponsiveEvents(),
              this.startSendingHeartBeatToWorker(),
              this.startMonitorPageHiding(),
              this.startMonitoringPageUnload(),
              o("RSTMetadataCollectorMainThread").start(),
              r("RSTLocalStorageMainThread").probeAndInit(),
              r("RSTIndexedDBSafe").maybeClearObsoleteIncidents());
          }),
          (t.startLoggingUnresponsiveEvents = function () {
            var e = this;
            (this.logAndDeleteUnresponsiveEvents(),
              window.setInterval(function () {
                e.logAndDeleteUnresponsiveEvents();
              }, r("RSTConfig").MAIN_THREAD_LOGGING_INTERVAL_MS));
          }),
          (t.startSendingHeartBeatToWorker = function () {
            var e = this;
            window.setInterval(function () {
              e.postEvent(o("RSTEvents").RSTEvent.HEART_BEAT);
            }, r("RSTConfig").HEART_BEAT_INTERVAL_MS);
          }),
          (t.startMonitorPageHiding = function () {
            var e = this;
            document.addEventListener("visibilitychange", function () {
              document.hidden
                ? e.postEvent(o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND)
                : e.postEvent(o("RSTEvents").RSTEvent.BROWSER_TAB_FOREGROUND);
            });
          }),
          (t.startMonitoringPageUnload = function () {
            o("RSTCloseObserver").initPageCloseObserver();
          }),
          (t.postEvent = function (t, n) {
            n === void 0 &&
              (n = o("RSTMetadataMainThread").getMainThreadMetadata());
            var e = {
              type: r("RSTConfig").MESSAGE_TYPE,
              event: t,
              eventTime: Date.now(),
              DOMData: { hidden: document.hidden },
              sessionID: o("RSTSessionID").getSessionID(),
              metadata: n,
            };
            (o("RSTEventsMessageQueue").notify(t, { mainToWorkerMessage: e }),
              this.$5(e),
              this.$6(e));
          }),
          (t.postEventLightweight = function (t, n) {
            n === void 0 &&
              (n = o(
                "RSTMetadataMainThread",
              ).getMainThreadMetadataWithExternalAnnotationsOnly());
            var e = {
              type: r("RSTConfig").MESSAGE_TYPE,
              event: t,
              eventTime: Date.now(),
              DOMData: { hidden: document.hidden },
              sessionID: o("RSTSessionID").getSessionID(),
              metadata: n,
            };
            (o("RSTEventsMessageQueue").notify(t, { mainToWorkerMessage: e }),
              this.$5(e),
              this.$6(e));
          }),
          (t.$6 = function (t) {
            try {
              var e;
              (e = this.$1) == null || e.postMessage(t);
            } catch (e) {
              var n;
              if (this.$4) return;
              var o = r("getErrorSafe")(e);
              (r("FBLogger")("responsive-tracker")
                .catching(o)
                .warn(
                  (n = o.message) != null
                    ? n
                    : "Failed to post message to web worker",
                ),
                (this.$4 = !0));
            }
          }),
          (t.$5 = function (t) {
            if (r("RSTConfig").ENABLE_SERVICE_WORKER)
              try {
                new (r("ClientServiceWorkerMessage"))(
                  r("RSTConfig").MESSAGE_TYPE,
                  t,
                ).sendViaController();
              } catch (t) {
                var e;
                if (this.$3) return;
                var n = r("getErrorSafe")(t);
                (r("FBLogger")("responsive-tracker")
                  .catching(n)
                  .warn(
                    (e = n.message) != null
                      ? e
                      : "Failed to post message to service worker",
                  ),
                  (this.$3 = !0));
              }
          }),
          (t.$7 = function (t) {
            var e;
            return (
              Date.now() - ((e = t.remoteLoggerProposeTime) != null ? e : 0) >
              r("RSTConfig").INCIDENT_PROPOSED_PROCESSOR_OWNERSHIP_EXPIRE_MS
            );
          }),
          (t.$8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (e != null) {
                  var n = e.incidentID;
                  if (
                    o("RSTIncidentLoggingMainThread")
                      .getLoggedIncidentIDs()
                      .has(n)
                  ) {
                    t.add(n);
                    return;
                  }
                  var a = e.sessionID === o("RSTSessionID").getSessionID();
                  if (a) {
                    ((e.hasRecovered = !0),
                      o("RSTEventsMessageQueue").notify(
                        o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS,
                        { unresponsiveEventRecord: e },
                      ),
                      t.add(n));
                    return;
                  }
                  var i = Date.now() - e.lastHeartBeatTimeStamp;
                  if (
                    !(
                      i <
                      r("RSTConfig").WAIT_MS_FOR_OTHER_SESSION_BEFORE_PROCESSING
                    )
                  ) {
                    if (
                      i > r("RSTConfig").OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS
                    ) {
                      if (
                        o("RSTUtilsMainThread").shouldSkipProcessingIncident(n)
                      )
                        return;
                      (o("RSTUtils").debugLogImportant(
                        "pending incident " + n + " cleaned",
                      ),
                        t.add(n));
                      return;
                    }
                    var l = e.remoteLoggerSessionID == null || this.$7(e);
                    if (l) {
                      yield r("RSTIndexedDBSafe").updateIncidentInDB(
                        function (e) {
                          return e.incidentID !== n
                            ? !1
                            : (o("RSTUtils").debugLogImportant(
                                "propose as logger for incident " +
                                  e.incidentID,
                              ),
                              (e.remoteLoggerSessionID =
                                o("RSTSessionID").getSessionID()),
                              (e.remoteLoggerProposeTime = Date.now()),
                              !0);
                        },
                      );
                      return;
                    }
                    if (
                      e.remoteLoggerSessionID ===
                        o("RSTSessionID").getSessionID() &&
                      !this.$7(e)
                    )
                      if (
                        (o("RSTUtils").debugLogImportant(
                          "act as logger for incident " + n,
                        ),
                        e.hasRecovered)
                      )
                        (o("RSTEventsMessageQueue").notify(
                          o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS,
                          { unresponsiveEventRecord: e },
                        ),
                          t.add(n));
                      else {
                        if (
                          e.incidentType !==
                            r("RSTConstants").incidentType.unexpectedExit &&
                          e.unrecoverLastsForMs <
                            r("RSTConfig").UNRECOVER_LASTS_THRESHOLD_MS
                        )
                          return;
                        (!r("RSTConfig")
                          .ONE_UNRECOVERABLE_INCIDENT_PER_SESSION ||
                        !this.$2.has(e.sessionID)
                          ? (yield o(
                              "RSTMarkFirstUnrecoverableMainThread",
                            ).markFirstUnrecoverableIncident(e),
                            o("RSTEventsMessageQueue").notify(
                              o("RSTEvents").RSTEvent.CRASH_INCIDENT,
                              { unresponsiveEventRecord: e },
                            ),
                            this.$2.add(e.sessionID))
                          : o("RSTUtils").debugLogImportant(
                              "skip logging unrecoverable incident " +
                                n +
                                " " +
                                ("from session " +
                                  e.sessionID +
                                  " since it has been logged"),
                            ),
                          t.add(n));
                      }
                  }
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.logAndDeleteUnresponsiveEvents = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                o("RSTEventsMessageQueue").notify(
                  o("RSTEvents").RSTEvent.CHECKING_INDEXDB_FOR_EVENTS,
                  {},
                );
                var e = yield r("RSTIndexedDBSafe").readEventsFromDB(),
                  t = new Set();
                for (var n of e)
                  try {
                    (yield o("RSTUtils").scheduleYield(), yield this.$8(n, t));
                  } catch (e) {
                    var a,
                      i = r("getErrorSafe")(e);
                    r("FBLogger")("responsive-tracker")
                      .catching(i)
                      .warn(
                        (a = i.message) != null
                          ? a
                          : "Failed to process incident",
                      );
                  }
                yield r("RSTIndexedDBSafe").clearIncidentFromDB(t);
              } catch (e) {
                var l,
                  s = r("getErrorSafe")(e);
                r("FBLogger")("responsive-tracker")
                  .catching(s)
                  .warn(
                    (l = s.message) != null ? l : "Failed to log incidents",
                  );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
