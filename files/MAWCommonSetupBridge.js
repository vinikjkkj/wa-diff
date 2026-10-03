__d(
  "MAWCommonSetupBridge",
  [
    "BroadcastChannelFallback",
    "BrowserLockManager",
    "CurrentAppID",
    "CurrentUser",
    "FBLogger",
    "InteractionTracingMetrics",
    "LSDatabaseSingleton",
    "MAWBridge",
    "MAWCrossWorkerPortal",
    "MAWCurrentUser",
    "MAWDbMedia",
    "MAWInit",
    "MAWMIC",
    "MAWReportSendMessageSuccessResult",
    "MAWThreadCutover",
    "ODS",
    "Promise",
    "QPLEvent",
    "QPLUserFlow",
    "WAExceededStorageQuota",
    "WAJids",
    "WALRUMap",
    "justknobx",
    "requireDeferred",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("MAWMainThreadLogger").__setRef(
        "MAWCommonSetupBridge",
      ),
      p = new (o("WALRUMap").LRUMap)({ max: 100 }),
      _ = new Set([25312111, 25311870]),
      f = new Map([
        [(d = o("MAWDbMedia")).MEDIA_TYPE.IMAGE, 8],
        [d.MEDIA_TYPE.VIDEO, 10],
        [d.MEDIA_TYPE.GIF, 6],
        [d.MEDIA_TYPE.STICKER, 4],
        [d.MEDIA_TYPE.PTT, 11],
        [d.MEDIA_TYPE.DOCUMENT_FILE, 9],
      ]),
      g = new Set([25312150, 25313100, 1056840931]);
    function h(e, t, n) {
      return (s || (s = o("LSDatabaseSingleton"))).LSDatabaseSingleton.then(
        function (a) {
          return o("MAWThreadCutover")
            .isCutoverSecureThreadFromChatJid(a, e)
            .then(function (e) {
              r("QPLUserFlow").addAnnotations(
                t,
                { bool: { is_cutover: e } },
                { instanceKey: n },
              );
            });
        },
      );
    }
    var y = /[^a-zA-Z0-9._-]/g,
      C = /[.]+/g,
      b = /[\s_.-]+/g;
    function v(e) {
      return e.replace(b, ".").replace(y, "").replace(C, ".");
    }
    var S = {
        broadcastChannelFallback: function (t) {
          var e = t.event,
            n = t.namespace;
          o("BroadcastChannelFallback").handleBroadcastChannelFallbackMessage(
            n,
            e,
          );
        },
        handleMessageSendResult: function (t) {
          t.success &&
            o(
              "MAWReportSendMessageSuccessResult",
            ).reportSendMessageSuccessResult(t.report);
        },
        interactionTracingEvent: function (t) {
          var e = t.data,
            n = t.interactionId,
            o = t.pointName,
            a = t.pointType;
          if (
            (r("InteractionTracingMetrics").addMarkerPoint(n, o, a), e != null)
          )
            for (var i in e) {
              var l = e[i];
              Array.isArray(l) ||
                r("InteractionTracingMetrics").addMetadata(n, i, l);
            }
        },
        log: function (t) {
          var e = t.logLevel,
            n = t.logString,
            r = t.tags,
            a = r.length > 0,
            i = "" + (o("CurrentAppID").getAppID() || "unknown");
          switch (e) {
            case "count":
              ((u || (u = o("ODS"))).bumpEntityKey(
                3185,
                v("e2ee." + (a ? r.join(".") : n)),
                v("count." + (a ? n + "." + i : i)),
                1,
              ),
                m.onReadyImmediately(function (e) {
                  var t = e.count;
                  return t(n, r);
                }));
              return;
            case "log":
              m.onReadyImmediately(function (e) {
                var t = e.info;
                return t(n, r);
              });
              return;
            case "warn":
              m.onReadyImmediately(function (e) {
                var t = e.warn;
                return t(n, r);
              });
              return;
            case "logRestricted":
              m.onReadyImmediately(function (e) {
                var t = e.logRestricted;
                return t(n, r);
              });
              return;
            case "debug":
              break;
            case "error":
              break;
            default:
              break;
          }
        },
        logError: function (t) {
          var e = t.entriesToReport,
            n = t.framesToPop,
            r = t.logString,
            o = t.message,
            a = t.stack,
            i = t.tags;
          m.onReadyImmediately(function (t) {
            var l = t.logError;
            return l(r, i, o, a, n, e);
          });
        },
        odsBumpEntityKey: function (t) {
          var e = t.amount,
            n = t.entity,
            r = t.key;
          (u || (u = o("ODS"))).bumpEntityKey(
            3185,
            n,
            r + "." + (o("CurrentAppID").getAppID() || "unknown"),
            e,
          );
        },
        onJobFinished: function (t) {
          t.type === "createGroup" &&
            t.originalArgs.key != null &&
            p.set(t.originalArgs.key, t.result);
        },
        qplEvent: function (a) {
          var t,
            i = a.action,
            l = a.annotations,
            s = a.debugInfo,
            u = a.error,
            d = a.event,
            m = a.instanceKey,
            p = a.timeoutInMs,
            f = a.timestamp;
          if (
            !(
              !r("CurrentUser").isEmployee() &&
              _.has((c || (c = o("QPLEvent"))).getMarkerId(d))
            )
          ) {
            var y = m || 0,
              C = l == null || (t = l.string) == null ? void 0 : t.jid,
              b = C != null ? o("WAJids").validateChatJid(C) : void 0,
              v =
                g.has((c || (c = o("QPLEvent"))).getMarkerId(d)) && b != null
                  ? h(b, d, y)
                  : (e || (e = n("Promise"))).resolve();
            switch (i.type) {
              case "start":
                r("QPLUserFlow").start(d, {
                  annotations: babelHelpers.extends({}, l || {}, {
                    bool: babelHelpers.extends(
                      {},
                      (l == null ? void 0 : l.bool) || {},
                      {
                        isDev: 0,
                        isGifSearchEnbled: !0,
                        isLockApiSupported: r("BrowserLockManager") != null,
                        isTlcPublicUser: o("MAWCurrentUser").isTlcPublicUser(),
                        useSharedWorker: o(
                          "shouldUseMAWSharedWorker",
                        ).shouldUseMAWSharedWorker(),
                      },
                    ),
                  }),
                  instanceKey: y,
                  timeoutInMs: p,
                  timestamp: f,
                });
                break;
              case "success": {
                (r("QPLUserFlow").addAnnotations(
                  d,
                  {
                    bool: {
                      exceededStorageQuota: o(
                        "WAExceededStorageQuota",
                      ).getExceededStorageQuota(),
                      isRelaxedDurability: !0,
                    },
                  },
                  { instanceKey: y },
                ),
                  v.finally(function () {
                    r("QPLUserFlow").endSuccess(d, {
                      annotations: l,
                      instanceKey: y,
                      timestamp: f,
                    });
                  }));
                break;
              }
              case "cancel": {
                (r("QPLUserFlow").addAnnotations(
                  d,
                  {
                    bool: {
                      exceededStorageQuota: o(
                        "WAExceededStorageQuota",
                      ).getExceededStorageQuota(),
                      isRelaxedDurability: !0,
                    },
                  },
                  { instanceKey: y },
                ),
                  v.finally(function () {
                    r("QPLUserFlow").endCancel(d, {
                      annotations: l,
                      cancelReason: i.cancelReason,
                      instanceKey: y,
                      timestamp: f,
                    });
                  }));
                break;
              }
              case "point":
                (l && r("QPLUserFlow").addAnnotations(d, l, { instanceKey: y }),
                  (c || (c = o("QPLEvent"))).getMarkerId(d) === 1056839232
                    ? o("MAWMIC").addPoint(i.name, f)
                    : r("QPLUserFlow").addPoint(d, i.name, {
                        instanceKey: y,
                        timestamp: f,
                      }));
                break;
              case "annotations":
                r("QPLUserFlow").addAnnotations(d, l != null ? l : {}, {
                  instanceKey: y,
                });
                break;
              case "failure":
                (r("QPLUserFlow").addAnnotations(
                  d,
                  {
                    bool: {
                      exceededStorageQuota: o(
                        "WAExceededStorageQuota",
                      ).getExceededStorageQuota(),
                      isRelaxedDurability: !0,
                    },
                    string: { failureReason: i.name },
                  },
                  { instanceKey: y },
                ),
                  v.finally(function () {
                    r("QPLUserFlow").endFailure(d, i.name, {
                      annotations: l,
                      instanceKey: y,
                      timestamp: f,
                    });
                  }));
                break;
              case "error":
                r("QPLUserFlow").markError(d, i.name, {
                  debugInfo: s,
                  error: u,
                  instanceKey: y,
                });
                break;
              default:
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "Bridge sends unreachable qplEvent action type",
                );
            }
          }
        },
      },
      R = function (t, n) {
        return (t.push(n), t);
      },
      L = function (t) {
        var e = t.customizeEventHandlers,
          n = t.worker;
        o("MAWInit").MAWInit.logPoint("bridge_setup_start");
        var a = o("MAWBridge").getBridge();
        a.setHandlers("event", babelHelpers.extends({}, S, e));
        var i = o("MAWCrossWorkerPortal").getOrCreateCrossWorkerPortal(
          a,
          ["backend", "kt", "mps", "waapi", "ebsmapi"],
          R,
          {
            bridgeBatcherMaxTokens: Number.MAX_SAFE_INTEGER,
            portalCacheSize: r("justknobx")._("3092"),
          },
        );
        return (
          i.setPort(n),
          o("MAWMIC").addPoint("bridge_setup_done"),
          o("MAWInit").MAWInit.logPoint("bridge_setup_end"),
          a
        );
      };
    ((l.MEDIA_TYPE_TO_ATTACHMENT_TYPE = f), (l.initBridge = L));
  },
  98,
);
