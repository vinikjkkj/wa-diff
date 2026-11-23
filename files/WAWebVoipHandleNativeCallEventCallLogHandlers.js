__d(
  "WAWebVoipHandleNativeCallEventCallLogHandlers",
  [
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
      _ = 2;
    async function f(t) {
      var n = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        ),
        a = n.parsers.parseSyncDeviceData(t);
      (await Promise.all(
        a.map(function (e) {
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
          a.length,
        ));
    }
    async function g(e) {
      (o("WAWebVoipQplHelpers").startVoipEndCallQpl(),
        o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
          o("WAWebVoipQplHelpers").VoipEndCallQplPoint
            .CALL_ENDING_HANDLER_START,
        ));
      var t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
              return o("WAWebVoipTimeSeriesUpload").uploadTimeSeriesLogsAsync(
                n,
                e,
              );
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
            return o("WAWebVoipScreeningVoicemail").handOffScreeningVoicemail({
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
        n.fromMe && n.isCallLink !== !0 && (await h(n)),
        o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(
          o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CALL_ENDING_HANDLER_END,
        ));
    }
    async function h(e) {
      var t = o("WATimeUtils").unixTimeMs(),
        n = r("WAWebCallLogSync").getCallLogMutation(t, e);
      await o("WAWebSyncdCoreApi").lockForSync([], [n], function () {
        return Promise.resolve();
      });
    }
    async function y(e) {
      var t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        ),
        n = t.parsers.parseRejectedDecryptionFailureData(e);
      (await o("WAWebHandleRetryRequest").handleRetryRequest({
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
        await t.resendOfferOnDecryptionFailure(
          n.PeerDeviceJid.toString({ formatIncludeDevice: !0, legacy: !0 }),
          n.CallId,
        ));
    }
    async function C(e) {
      var t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        ),
        n = t.parsers.parseUpdateJoinableCallLogData(e);
      o("WAWebBackendApi").frontendFireAndForget(
        "generateCallLogFromEventUpdateJoinable",
        { joinableCallLogData: n },
      );
    }
    async function b(e) {
      var t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        ),
        n = t.parsers.parseCallMissedData(e);
      (n.PeerUserJid != null &&
        o("WAWebBackendApi").frontendFireAndForget("cancelCallNotification", {
          wid: n.PeerUserJid,
        }),
        o("WAWebCoreActionsODS").logCallIncomingMissed(),
        o("WAWebBackendApi").frontendFireAndForget(
          "generateCallLogFromEventCallMissed",
          { callMissedData: n },
        ),
        n.ShouldUploadFieldStats === !0 && v(n));
    }
    async function v(e) {
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
        var n = Object.entries(t),
          a = Object.fromEntries(
            r("compactMap")(n, function (e) {
              var t = e[0],
                n = e[1],
                a =
                  t === "abtest_bucket"
                    ? "callTestBucket"
                    : r("WACamelCase")(t, { treatNumbersAsWordBoundaries: !1 });
              if (a == null) return null;
              try {
                var i = o("WAWebWamCodegenUtils").metrics.getEvent("Call", a);
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
          i = await Promise.all([
            o(
              "WAWebVoipCallStartUnifiedSessionStore",
            ).resolveCallUnifiedSessionId(
              o(
                "WAWebVoipCallStartUnifiedSessionStore",
              ).getCallStartUnifiedSessionIdForCall(e.CallId),
            ),
            S(e, a),
          ]),
          l = i[0],
          s = i[1],
          u = new (o("WAWebCallWamEvent").CallWamEvent)(a);
        (u.set(s),
          l != null && u.set({ unifiedSessionId: l }),
          u.commit(),
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
    }
    async function S(e, t) {
      var n = await L(e, t);
      return n.webTabStateAtOffer != null ? n : R(e);
    }
    async function R(e) {
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
        await o("WAWebVoipClosedTabCallRingFields").readCallReachability(),
        { webTabStateAtOffer: t },
      );
      return (
        e.SilenceReason === _ &&
          (n.incomingCallNotificationState = o(
            "WAWebWamEnumIncomingCallNotificationStateType",
          ).INCOMING_CALL_NOTIFICATION_STATE_TYPE.INCOMING_CALL_NOTIFICATION_STATE_SILENCED_UNKNOWN_CALLER),
        n
      );
    }
    function L(e, t) {
      return e.GroupJid != null || e.GroupInfo != null || t.isPendingCall === !0
        ? Promise.resolve({})
        : o("WAWebVoipClosedTabCallRingFields").takeClosedTabCallRingFields(
            e.CallId,
          );
    }
    async function E(e) {
      var t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        ),
        n = t.parsers.parseUpdate1to1CallLogData(e);
      o("WAWebBackendApi").frontendFireAndForget(
        "generateCallLogFromEventUpdate1to1",
        { call1to1LogData: n },
      );
    }
    function k() {
      o("WAWebBackendApi").frontendFireAndForget("handleMuteRequestFailed", {});
    }
    function I(e) {
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
    function T(e) {}
    ((l.handleSyncDevices = f),
      (l.handleCallEnding = g),
      (l.handleRejectedDecryptionFailure = y),
      (l.handleUpdateJoinableCallLog = C),
      (l.handleCallMissed = b),
      (l.handleUpdate1to1CallLog = E),
      (l.handleMuteRequestFailed = k),
      (l.handleMutedByOthers = I),
      (l.handleNoOpEvent = T));
  },
  98,
);
