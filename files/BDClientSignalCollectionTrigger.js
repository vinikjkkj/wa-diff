__d(
  "BDClientSignalCollectionTrigger",
  [
    "BDClientConfig",
    "BDCollectionTypeEnum",
    "BDLoggingConstants",
    "BDOperationLogHelper",
    "BDServerConfig",
    "BDSignalBuffer",
    "BDSignalCollectorBase",
    "BDUtils",
    "BdPdcSignalsFalcoEvent",
    "Promise",
    "SignalCollectionManager",
    "SignalValueContext",
    "StringSignalValueType",
    "WebStorage",
    "asyncToGeneratorRuntime",
    "cr:8616",
    "getErrorSafe",
    "javascript-blowfish",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "BDClientSignalCollectionTrigger",
      c = "signal_flush_timestamp",
      d = !1,
      m = !1,
      p = !1,
      _ = !1,
      f = 0,
      g = 0,
      h = 0,
      y = 30,
      C = 5,
      b,
      v,
      S = o("BDUtils").uuid(),
      R = r("BDClientConfig").get(),
      L = Object.freeze({ NONE: 0, VITAL: 1, CRITICAL: 2 }),
      E = {
        startSignalCollection: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if ((R.setSID(e.sid), !d)) {
              if (
                ((d = !0),
                o("BDServerConfig").parseConfig(e),
                !R.isParsingDone())
              ) {
                (o("BDOperationLogHelper").logError(
                  u,
                  o("BDLoggingConstants").OPERATIONS.PARSE_CONFIG_ERROR,
                  { config: JSON.stringify(e) },
                ),
                  (d = !1));
                return;
              }
              (e != null &&
                ((g = e.hbcbc && e.hbcbc > 0 ? e.hbcbc : g),
                (h = e.hbvbc && e.hbvbc > 0 ? e.hbvbc : h),
                (y = e.hbbi && e.hbbi > 0 ? e.hbbi : y)),
                E.startHeartbeatDelayed(),
                (v = new (s || (s = n("Promise")))(function (e, t) {
                  try {
                    (R.getDynamicSignals().length > 0 &&
                      (E.collectDynamicSignals(),
                      o("BDOperationLogHelper").logInfo(
                        u,
                        o("BDLoggingConstants").OPERATIONS
                          .DYNAMIC_SIGNAL_COLLECTION_STARTED,
                        { ts: Date.now().toString() },
                      )),
                      R.getBiometricSignals().length > 0 &&
                        (E.collectBiometricSignals(),
                        o("BDOperationLogHelper").logInfo(
                          u,
                          o("BDLoggingConstants").OPERATIONS
                            .BIOMETRIC_SIGNAL_COLLECTION_STARTED,
                          { ts: Date.now().toString() },
                        )),
                      e());
                  } catch (e) {
                    t(e);
                  }
                })),
                yield v,
                yield E.startSignalPosting());
            }
            d &&
              !p &&
              !_ &&
              C > 0 &&
              ((C -= 1),
              o("BDOperationLogHelper").logWarning(
                u,
                o("BDLoggingConstants").OPERATIONS.TRY_RESTARTING_HB,
              ),
              E.startHeartbeatDelayed());
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        retrieveSignals: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield v,
              yield E.postSignals([
                r("BDCollectionTypeEnum").DYNAMIC,
                r("BDCollectionTypeEnum").BIOMETRIC,
                r("BDCollectionTypeEnum").STATIC,
              ]));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        retrieveSignalsSkipLogging: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield v, yield E.collectStaticSignals());
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        postSignals: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (yield E.collectStaticSignals(),
              E._postSignalsHelper(
                o("BDSignalBuffer").getSignalsAsJSONString(e),
                L.NONE,
              ) && E.setTimestampInStorage(Date.now(), c));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        _postSignalsHelper: function (t, n) {
          if (t.length <= 2) return !1;
          var e = R.getConfigGenerationTimeStamp(),
            a = E.encryptDataUsingAsid(S, t),
            i = function () {
              return { asid: S, ct: e, sjd: a, sid: R.sid };
            },
            l = !1;
          try {
            (n === L.CRITICAL
              ? r("BdPdcSignalsFalcoEvent").logCritical(i)
              : n === L.VITAL
                ? r("BdPdcSignalsFalcoEvent").logImmediately(i)
                : r("BdPdcSignalsFalcoEvent").log(i),
              (l = !0));
          } catch (e) {
            var s = r("getErrorSafe")(e);
            (o("BDOperationLogHelper").logError(
              u,
              o("BDLoggingConstants").OPERATIONS.BANZAI_LOG_ERROR,
              { error: s.message },
            ),
              (l = !1));
          } finally {
            return l;
          }
        },
        getInitialVector: function (t) {
          if (t.length !== 16)
            return (
              o("BDOperationLogHelper").logError(
                u,
                o("BDLoggingConstants").OPERATIONS.INVALID_LENGTH,
              ),
              ""
            );
          for (var e = "", n = 0; n < 8; n++)
            e += String.fromCharCode(t.charCodeAt(n) ^ t.charCodeAt(8 + n));
          return e;
        },
        encryptDataUsingAsid: function (t, n) {
          if (t.length !== 36)
            return (
              o("BDOperationLogHelper").logError(
                u,
                o("BDLoggingConstants").OPERATIONS.INVALID_GUID,
              ),
              n
            );
          var e = t.slice(19, 23) + t.slice(24, 36),
            a = E.getInitialVector(e),
            i = new (r("javascript-blowfish"))(e, "cbc");
          return i.base64Encode(i.encrypt(n, a));
        },
        startSignalPosting: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = E.getTimestampInStorage(c),
              t = Date.now() - e;
            t >= R.getAllTiersFlushDurationMs()
              ? yield E.postSignalsIntermittently()
              : window.setTimeout(function () {
                  E.postSignalsIntermittently();
                }, R.getAllTiersFlushDurationMs() - t);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        postSignalsIntermittently: function () {
          (E.postSignals([r("BDCollectionTypeEnum").STATIC]),
            window.setInterval(function () {
              E.postSignals([
                r("BDCollectionTypeEnum").STATIC,
                r("BDCollectionTypeEnum").DYNAMIC,
                r("BDCollectionTypeEnum").BIOMETRIC,
              ]);
            }, R.getAllTiersFlushDurationMs()));
        },
        setTimestampInStorage: function (n, a) {
          var t = (e || (e = r("WebStorage"))).getLocalStorage();
          if (!t) {
            o("BDOperationLogHelper").logWarning(
              u,
              o("BDLoggingConstants").OPERATIONS.GET_LOCAL_STORAGE_ERROR,
            );
            return;
          }
          var i = e.setItemGuarded(t, a, n.toString());
          i != null &&
            o("BDOperationLogHelper").logWarning(
              u,
              o("BDLoggingConstants").OPERATIONS.WEB_STORAGE,
              { error: i.message },
            );
        },
        getTimestampInStorage: function (n) {
          var t = (e || (e = r("WebStorage"))).getLocalStorage();
          if (!t)
            return (
              o("BDOperationLogHelper").logWarning(
                u,
                o("BDLoggingConstants").OPERATIONS.GET_LOCAL_STORAGE_ERROR,
              ),
              0
            );
          var a = t.getItem(n);
          if (a == null) return 0;
          var i = Number.parseInt(a, 10);
          return Number.isFinite(i) ? i : 0;
        },
        resetHeartbeatStartedForTest: function () {
          ((p = !1), (_ = !1));
        },
        startHeartbeatDelayed: function () {
          if (!(p || _)) {
            var e = E.getTimestampInStorage(E.HEARTBEAT_TIMESTAMP_STORAGE_KEY),
              t = Date.now() - e;
            try {
              t >= R.getHeartbeatIntervalMs()
                ? E.startHeartbeat()
                : (window.setTimeout(function () {
                    return E.startHeartbeat();
                  }, R.getHeartbeatIntervalMs() - t),
                  (_ = !0));
            } catch (e) {
              var n = r("getErrorSafe")(e);
              o("BDOperationLogHelper").logError(
                u,
                o("BDLoggingConstants").OPERATIONS.HB_START_FAILURE,
                {
                  lastBeatSince: t.toString(),
                  hbi: R.getHeartbeatIntervalMs().toString(),
                  error: n.message,
                },
              );
            }
          }
        },
        HEARTBEAT_TIMESTAMP_STORAGE_KEY: "hb_timestamp",
        startHeartbeat: function () {
          !p &&
            R.getHeartbeatIntervalMs() > 0 &&
            (E.collectHeartbeatTimes(g, h),
            f !== 0 &&
              (window.clearInterval(f),
              o("BDOperationLogHelper").logWarning(
                u,
                o("BDLoggingConstants").OPERATIONS.HB_ALREADY_RUNNING,
              )),
            (f = window.setInterval(function () {
              return E.collectHeartbeatTimes(g, h);
            }, R.getHeartbeatIntervalMs())),
            (p = !0));
        },
        collectHeartbeatTimes: function (t, n) {
          (t <= 0 && n <= 0) ||
            (t > 0 && E.collectHeartbeat(L.CRITICAL),
            n > 0 && E.collectHeartbeat(L.VITAL),
            (t > 1 || n > 1) &&
              window.setTimeout(function () {
                return E.collectHeartbeatTimes(t - 1, n - 1);
              }, y * 1e3));
        },
        collectHeartbeat: function (t) {
          var e,
            n =
              R == null ||
              (e = R.getHeartbeatSignal()) == null ||
              (e = e.getSignalCollector()) == null
                ? void 0
                : e.executeSignalCollection();
          if (n == null) {
            o("BDOperationLogHelper").logError(
              u,
              o("BDLoggingConstants").OPERATIONS.HB_COLLECTION_FAILED,
              { urgency: t.toString() },
            );
            return;
          } else
            o("BDOperationLogHelper").logInfo(
              u,
              o("BDLoggingConstants").OPERATIONS.HB_COLLECTED,
              { urgency: t.toString() },
            );
          E.postHeartbeat(t, n) &&
            E.setTimestampInStorage(
              Date.now(),
              E.HEARTBEAT_TIMESTAMP_STORAGE_KEY,
            );
        },
        postHeartbeat: function (t, n) {
          var e = {};
          e[38001] = [n == null ? void 0 : n.valueOrError];
          var r = JSON.stringify(e);
          return E._postSignalsHelper(r, t);
        },
        collectStaticSignals: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield E.collectSignalsOneTime(R.getStaticSignals());
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        collectDynamicSignals: function () {
          (E.stopDynamicSignalCollection(),
            (b = window.setInterval(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield E.collectSignalsOneTime(R.getDynamicSignals());
              }),
              R.getPeriodicCollectionIntervalMs(),
            )));
        },
        collectBiometricSignals: function () {
          E.collectSignalsOneTime(R.getBiometricSignals());
        },
        stopDynamicSignalCollection: function () {
          b != null && (window.clearInterval(b), (b = null));
        },
        collectSignalsOneTime: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield r("SignalCollectionManager").get().collectSignals(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        startLoginTimeSignalCollection: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (
              !m &&
              ((m = !0),
              o("BDServerConfig").parseConfig(e),
              yield E.collectSignalsOneTime(R.getDynamicSignals()),
              yield E.collectSignalsOneTime(R.getBiometricSignals()),
              yield E.collectSignalsOneTime(R.getStaticSignals()),
              n("cr:8616") != null)
            ) {
              var t = yield n("cr:8616").genFingerprint();
              t != null && E.collectCipCanvasIDSignal(t);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getSignalsAsJSONString: function () {
          return o("BDSignalBuffer").getSignalsAsJSONString([
            r("BDCollectionTypeEnum").DYNAMIC,
            r("BDCollectionTypeEnum").STATIC,
            r("BDCollectionTypeEnum").BIOMETRIC,
          ]);
        },
        collectCipCanvasIDSignal: function (t) {
          var e = R.getStaticSignals().find(function (e) {
            return e.signalType === 30109;
          });
          if (e != null) {
            var n = {
              valueOrError: new (r("StringSignalValueType"))(
                Date.now(),
                new (r("SignalValueContext"))(
                  r("BDSignalCollectorBase").getSanitizedURI(),
                ),
                t,
              ),
            };
            r("SignalCollectionManager").get().addSignalToBuffer(n, e);
          }
        },
      },
      k = E;
    l.default = k;
  },
  98,
);
