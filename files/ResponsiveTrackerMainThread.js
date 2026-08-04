__d(
  "ResponsiveTrackerMainThread",
  [
    "ClientServiceWorkerMessage",
    "FBLogger",
    "Promise",
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
    var e;
    r("RSTEventsRegisterUseCasesMainThread")();
    var s = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = new Set()),
            (this.$3 = !1),
            (this.$4 = !1));
        }
        var a = t.prototype;
        return (
          (a.init = function (t) {
            ((this.$1 = t),
              this.startLoggingUnresponsiveEvents(),
              this.startSendingHeartBeatToWorker(),
              this.startMonitorPageHiding(),
              this.startMonitoringPageUnload(),
              o("RSTMetadataCollectorMainThread").start(),
              r("RSTLocalStorageMainThread").probeAndInit(),
              r("RSTIndexedDBSafe").maybeClearObsoleteIncidents());
          }),
          (a.startLoggingUnresponsiveEvents = function () {
            var e = this;
            (this.logAndDeleteUnresponsiveEvents(),
              window.setInterval(function () {
                e.logAndDeleteUnresponsiveEvents();
              }, r("RSTConfig").MAIN_THREAD_LOGGING_INTERVAL_MS));
          }),
          (a.startSendingHeartBeatToWorker = function () {
            var e = this;
            window.setInterval(function () {
              e.postEvent(o("RSTEvents").RSTEvent.HEART_BEAT);
            }, r("RSTConfig").HEART_BEAT_INTERVAL_MS);
          }),
          (a.startMonitorPageHiding = function () {
            var e = this;
            document.addEventListener("visibilitychange", function () {
              document.hidden
                ? e.postEvent(o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND)
                : e.postEvent(o("RSTEvents").RSTEvent.BROWSER_TAB_FOREGROUND);
            });
          }),
          (a.startMonitoringPageUnload = function () {
            o("RSTCloseObserver").initPageCloseObserver();
          }),
          (a.postEvent = function (t, n) {
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
          (a.postEventLightweight = function (t, n) {
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
          (a.$6 = function (t) {
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
          (a.$5 = function (t) {
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
          (a.$7 = function (t) {
            var e;
            return (
              Date.now() - ((e = t.remoteLoggerProposeTime) != null ? e : 0) >
              r("RSTConfig").INCIDENT_PROPOSED_PROCESSOR_OWNERSHIP_EXPIRE_MS
            );
          }),
          (a.$8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                if (e != null) {
                  var a = e.incidentID;
                  if (
                    o("RSTIncidentLoggingMainThread")
                      .getLoggedIncidentIDs()
                      .has(a)
                  ) {
                    t.add(a);
                    return;
                  }
                  var i = e.sessionID === o("RSTSessionID").getSessionID();
                  if (i) {
                    ((e.hasRecovered = !0),
                      o("RSTEventsMessageQueue").notify(
                        o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS,
                        { unresponsiveEventRecord: e },
                      ),
                      t.add(a));
                    return;
                  }
                  var l = Date.now() - e.lastHeartBeatTimeStamp;
                  if (
                    !(
                      l <
                      r("RSTConfig").WAIT_MS_FOR_OTHER_SESSION_BEFORE_PROCESSING
                    )
                  ) {
                    if (
                      l > r("RSTConfig").OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS
                    ) {
                      if (
                        o("RSTUtilsMainThread").shouldSkipProcessingIncident(a)
                      )
                        return;
                      (o("RSTUtils").debugLogImportant(
                        "pending incident " + a + " cleaned",
                      ),
                        t.add(a));
                      return;
                    }
                    var s = e.remoteLoggerSessionID == null || this.$7(e);
                    if (s) {
                      (o("RSTUtils").debugLogImportant(
                        "propose as logger for incident " + a,
                      ),
                        n.add(a));
                      return;
                    }
                    if (
                      e.remoteLoggerSessionID ===
                        o("RSTSessionID").getSessionID() &&
                      !this.$7(e)
                    )
                      if (
                        (o("RSTUtils").debugLogImportant(
                          "act as logger for incident " + a,
                        ),
                        e.hasRecovered)
                      )
                        (o("RSTEventsMessageQueue").notify(
                          o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS,
                          { unresponsiveEventRecord: e },
                        ),
                          t.add(a));
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
                                a +
                                " " +
                                ("from session " +
                                  e.sessionID +
                                  " since it has been logged"),
                            ),
                          t.add(a));
                      }
                  }
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$9 = function (a, i) {
            var t = this;
            if (a.size === 0 && i.size === 0)
              return (e || (e = n("Promise"))).resolve();
            var l = o("RSTSessionID").getSessionID(),
              s = Date.now();
            return r("RSTIndexedDBSafe").mutateIncidentsInDB(function (e) {
              var n = e.incidentID;
              return a.has(n)
                ? "delete"
                : i.has(n)
                  ? e.remoteLoggerSessionID != null &&
                    e.remoteLoggerSessionID !== l &&
                    !t.$7(e)
                    ? "keep"
                    : ((e.remoteLoggerSessionID = l),
                      (e.remoteLoggerProposeTime = s),
                      "update")
                  : "keep";
            });
          }),
          (a.logAndDeleteUnresponsiveEvents = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                o("RSTEventsMessageQueue").notify(
                  o("RSTEvents").RSTEvent.CHECKING_INDEXDB_FOR_EVENTS,
                  {},
                );
                var e = yield r("RSTIndexedDBSafe").readEventsFromDB(),
                  t = new Set(),
                  n = new Set();
                for (var a of e)
                  try {
                    (yield o("RSTUtils").scheduleYield(),
                      yield this.$8(a, t, n));
                  } catch (e) {
                    var i,
                      l = r("getErrorSafe")(e);
                    r("FBLogger")("responsive-tracker")
                      .catching(l)
                      .warn(
                        (i = l.message) != null
                          ? i
                          : "Failed to process incident",
                      );
                  }
                yield this.$9(t, n);
              } catch (e) {
                var s,
                  u = r("getErrorSafe")(e);
                r("FBLogger")("responsive-tracker")
                  .catching(u)
                  .warn(
                    (s = u.message) != null ? s : "Failed to log incidents",
                  );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
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
