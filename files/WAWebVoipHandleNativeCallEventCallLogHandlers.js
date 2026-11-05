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
    "WAWebCallUserJourneyGating",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebHandleRetryRequest",
    "WAWebODS",
    "WAWebSyncdCoreApi",
    "WAWebVoipCallStartUnifiedSessionStore",
    "WAWebVoipClosedTabCallRingFields",
    "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    "WAWebVoipPersistentFS",
    "WAWebVoipQplHelpers",
    "WAWebVoipScreeningVoicemail",
    "WAWebVoipStackInterface",
    "WAWebVoipTabStateAtOfferStore",
    "WAWebVoipTimeSeriesUpload",
    "WAWebVoipWaCallEnums",
    "WAWebWamCodegenUtils",
    "WAWebWamEnumIncomingCallNotificationStateType",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 2;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            i = a.parsers.parseSyncDeviceData(t);
          (yield (_ || (_ = n("Promise"))).all(
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              r("WAWebODS").incr("web.call.success");
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
                }));
          var i = n.screeningVoicemail;
          (i != null &&
            t.type === "web" &&
            o("WAWebBackendApi")
              .frontendSendAndReceive("initializeVoipWasm")
              .then(function (e) {
                return o(
                  "WAWebVoipScreeningVoicemail",
                ).handOffScreeningVoicemail({
                  call: n,
                  fs: e.FS,
                  persistFS: function () {
                    return o("WAWebVoipPersistentFS").syncPersistentFS(e);
                  },
                  voicemail: i,
                });
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: screening voicemail hand-off failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("voip-screening-voicemail-handoff-failed");
              }),
            n.fromMe && n.isCallLink !== !0 && (yield b(n)),
            o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
              o("WAWebVoipQplHelpers").VoipEndCallQplPoint
                .CALL_ENDING_HANDLER_END,
            ));
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
          var t = o("WATimeUtils").unixTimeMs(),
            a = r("WAWebCallLogSync").getCallLogMutation(t, e);
          yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
            return (_ || (_ = n("Promise"))).resolve();
          });
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
            n = t.parsers.parseUpdateJoinableCallLogData(e);
          o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromEventUpdateJoinable",
            { joinableCallLogData: n },
          );
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
            n.ShouldUploadFieldStats === !0 && T(n));
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
          var t = e.MissedCallFieldStats;
          if (t == null) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: missed call fieldstats: no stats to send",
                ])),
            );
            return;
          }
          try {
            var a = Object.entries(t),
              i = Object.fromEntries(
                r("compactMap")(a, function (e) {
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
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
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
              l = yield (_ || (_ = n("Promise"))).all([
                o(
                  "WAWebVoipCallStartUnifiedSessionStore",
                ).resolveCallUnifiedSessionId(
                  o(
                    "WAWebVoipCallStartUnifiedSessionStore",
                  ).getCallStartUnifiedSessionIdForCall(e.CallId),
                ),
                x(e, i),
              ]),
              s = l[0],
              u = l[1],
              f = new (o("WAWebCallWamEvent").CallWamEvent)(i);
            (f.set(u),
              s != null && f.set({ unifiedSessionId: s }),
              f.commit(),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: missed call WAM event committed",
                  ])),
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: failed to send missed call fieldstats",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield M(e, t);
          return n.webTabStateAtOffer != null ? n : P(e);
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebVoipTabStateAtOfferStore").getTabStateAtOfferForCall(
            e.CallId,
          );
          if (
            t == null ||
            !o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled()
          )
            return {};
          var n = babelHelpers.extends(
            {},
            yield o("WAWebVoipClosedTabCallRingFields").readCallReachability(),
            { webTabStateAtOffer: t },
          );
          return (
            e.SilenceReason === f &&
              (n.incomingCallNotificationState = o(
                "WAWebWamEnumIncomingCallNotificationStateType",
              ).INCOMING_CALL_NOTIFICATION_STATE_TYPE.INCOMING_CALL_NOTIFICATION_STATE_SILENCED_UNKNOWN_CALLER),
            n
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return e.GroupJid != null || e.GroupInfo != null || t.isPendingCall === !0
        ? (_ || (_ = n("Promise"))).resolve({})
        : o("WAWebVoipClosedTabCallRingFields").takeClosedTabCallRingFields(
            e.CallId,
          );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseUpdate1to1CallLogData(e);
          o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromEventUpdate1to1",
            { call1to1LogData: n },
          );
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      o("WAWebBackendApi").frontendFireAndForget("handleMuteRequestFailed", {});
    }
    function O(e) {
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
    function B(e) {}
    ((l.handleSyncDevices = g),
      (l.handleCallEnding = y),
      (l.handleRejectedDecryptionFailure = S),
      (l.handleUpdateJoinableCallLog = L),
      (l.handleCallMissed = k),
      (l.handleUpdate1to1CallLog = w),
      (l.handleMuteRequestFailed = F),
      (l.handleMutedByOthers = O),
      (l.handleNoOpEvent = B));
  },
  98,
);
