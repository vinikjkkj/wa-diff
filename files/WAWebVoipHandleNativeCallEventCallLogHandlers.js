__d(
  "WAWebVoipHandleNativeCallEventCallLogHandlers",
  [
    "Promise",
    "WACamelCase",
    "WALogger",
    "WATimeUtils",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBackendApi",
    "WAWebCallLogSync",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebHandleRetryRequest",
    "WAWebSyncdCoreApi",
    "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    "WAWebVoipQplHelpers",
    "WAWebVoipStackInterface",
    "WAWebVoipTimeSeriesUpload",
    "WAWebVoipWaCallEnums",
    "WAWebWamCodegenUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            i = a.parsers.parseSyncDeviceData(t);
          (yield (p || (p = n("Promise"))).all(
            i.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e.UserJid],
                phash: e.PHash,
                context: "voip",
              });
            }),
          ),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleSyncDevices: ",
                  " wids synced",
                ])),
              i.length,
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebVoipQplHelpers").startVoipEndCallQpl(),
            o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
              o("WAWebVoipQplHelpers").VoipEndCallQplPoint
                .CALL_ENDING_HANDLER_START,
            ));
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseCallEndingData(e),
            a = n.result;
          e: {
            if (
              a === o("WAWebVoipWaCallEnums").CallLogResult.Connected ||
              a === o("WAWebVoipWaCallEnums").CallLogResult.ConnectedLonely
            ) {
              o("WAWebCoreActionsODS").logCallSuccess();
              break e;
            }
            if (a === o("WAWebVoipWaCallEnums").CallLogResult.Failed) {
              o("WAWebCoreActionsODS").logCallErrorTerminal();
              break e;
            }
            if (a === o("WAWebVoipWaCallEnums").CallLogResult.Unavailable) {
              n.connectTime != null &&
                n.connectTime > 0 &&
                o("WAWebCoreActionsODS").logCallErrorTerminal();
              break e;
            }
            break e;
          }
          (o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromNativeCallEndingEvent",
            { callEndingData: n },
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "handleCallEndingForSurvey",
              {
                userRatingInterval: n.userRatingInterval,
                connectTime: n.connectTime,
                callLogResult: n.result,
              },
            ),
            n.userRatingInterval < 0 &&
              o(
                "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
              ).requestStoredFieldstatsSend(),
            n.timeSeriesPath != null &&
              t.type === "web" &&
              o("WAWebBackendApi")
                .frontendSendAndReceive("initializeVoipWasm")
                .then(function (e) {
                  return o(
                    "WAWebVoipTimeSeriesUpload",
                  ).uploadTimeSeriesLogsAsync(n, e);
                })
                .catch(function (e) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [TS Upload] Failed to upload time-series logs: ",
                        "",
                      ])),
                    e,
                  );
                }),
            n.fromMe && n.isCallLink !== !0 && (yield y(n)),
            o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
              o("WAWebVoipQplHelpers").VoipEndCallQplPoint
                .CALL_ENDING_HANDLER_END,
            ));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTimeMs(),
            a = r("WAWebCallLogSync").getCallLogMutation(t, e);
          yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
            return (p || (p = n("Promise"))).resolve();
          });
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseRejectedDecryptionFailureData(e);
          (yield o("WAWebHandleRetryRequest").handleRetryRequest({
            stanzaId: null,
            originalMsgId: n.CallId,
            ts: null,
            retryCount: n.RetryCount,
            regId: n.Registration,
            offline: !1,
            from: n.PeerDeviceJid,
            participant: null,
            recipient: null,
            keyBundle: null,
            type: "voip_1x1_retry",
          }),
            yield t.resendOfferOnDecryptionFailure(
              n.PeerDeviceJid.toString({ formatIncludeDevice: !0, legacy: !0 }),
              n.CallId,
            ));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseUpdateJoinableCallLogData(e);
          o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromEventUpdateJoinable",
            { joinableCallLogData: n },
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseCallMissedData(e);
          (n.PeerUserJid != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "cancelCallNotification",
              { wid: n.PeerUserJid },
            ),
            o("WAWebCoreActionsODS").logCallIncomingMissed(),
            o("WAWebBackendApi").frontendFireAndForget(
              "generateCallLogFromEventCallMissed",
              { callMissedData: n },
            ),
            n.ShouldUploadFieldStats === !0 && k(n));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.MissedCallFieldStats;
          if (t == null) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: missed call fieldstats: no stats to send",
                ])),
            );
            return;
          }
          try {
            var n = Object.entries(t),
              a = Object.fromEntries(
                r("compactMap")(n, function (e) {
                  var t = e[0],
                    n = e[1],
                    a =
                      t === "abtest_bucket"
                        ? "callTestBucket"
                        : r("WACamelCase")(t, {
                            treatNumbersAsWordBoundaries: !1,
                          });
                  if (a == null) return null;
                  try {
                    var i = o("WAWebWamCodegenUtils").metrics.getEvent(
                      "Call",
                      a,
                    );
                    return i.type === "boolean" ? [a, !!n] : [a, n];
                  } catch (e) {
                    return (
                      o("WALogger").ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: missed call fieldstats: metric undefined for ",
                            "",
                          ])),
                        a,
                      ),
                      null
                    );
                  }
                }),
              ),
              i = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getUnifiedSessionId",
              ),
              l = new (o("WAWebCallWamEvent").CallWamEvent)(a);
            (i != null && l.set({ unifiedSessionId: i }),
              l.commit(),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: missed call WAM event committed",
                  ])),
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to send missed call fieldstats",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseUpdate1to1CallLogData(e);
          o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromEventUpdate1to1",
            { call1to1LogData: n },
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      o("WAWebBackendApi").frontendFireAndForget("handleMuteRequestFailed", {});
    }
    function $(e) {
      var t = null;
      try {
        var n,
          r,
          a = JSON.parse(e);
        t =
          (n = a == null || (r = a.muter_jid) == null ? void 0 : r.raw_jid) !=
          null
            ? n
            : null;
      } catch (e) {}
      o("WAWebBackendApi").frontendFireAndForget("handleMutedByOthers", {
        muterJid: t,
      });
    }
    function P(e) {}
    ((l.handleSyncDevices = _),
      (l.handleCallEnding = g),
      (l.handleRejectedDecryptionFailure = b),
      (l.handleUpdateJoinableCallLog = S),
      (l.handleCallMissed = L),
      (l.handleUpdate1to1CallLog = T),
      (l.handleMuteRequestFailed = x),
      (l.handleMutedByOthers = $),
      (l.handleNoOpEvent = P));
  },
  98,
);
