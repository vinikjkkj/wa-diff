__d(
  "WAWebVoipHandleNativeCallEventCallLogHandlers",
  [
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
    "WAWebVoipStackInterface",
    "WAWebVoipTimeSeriesUpload",
    "WAWebVoipWaCallEnums",
    "WAWebWamCodegenUtils",
    "compactMap",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    async function _(t) {
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
    async function f(e) {
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
          o("WAWebVoipHandleNativeCallEventFieldstatsHandlers")
            .sendStoredFieldstats()
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: sendStoredFieldstats failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }),
        n.timeSeriesPath != null &&
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [TS Upload] Failed to upload time-series logs: ",
                    "",
                  ])),
                e,
              );
            }),
        n.fromMe && n.isCallLink !== !0 && (await g(n)));
    }
    async function g(e) {
      var t = o("WATimeUtils").unixTimeMs(),
        n = r("WAWebCallLogSync").getCallLogMutation(t, e);
      await o("WAWebSyncdCoreApi").lockForSync([], [n], function () {
        return Promise.resolve();
      });
    }
    async function h(e) {
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
    async function y(e) {
      var t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        ),
        n = t.parsers.parseUpdateJoinableCallLogData(e);
      o("WAWebBackendApi").frontendFireAndForget(
        "generateCallLogFromEventUpdateJoinable",
        { joinableCallLogData: n },
      );
    }
    async function C(e) {
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
        n.ShouldUploadFieldStats === !0 && b(n));
    }
    function b(e) {
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
          i = new (o("WAWebCallWamEvent").CallWamEvent)(a);
        (i.commit(),
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
    async function v(e) {
      var t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        ),
        n = t.parsers.parseUpdate1to1CallLogData(e);
      o("WAWebBackendApi").frontendFireAndForget(
        "generateCallLogFromEventUpdate1to1",
        { call1to1LogData: n },
      );
    }
    function S() {
      o("WAWebBackendApi").frontendFireAndForget("handleMuteRequestFailed", {});
    }
    function R(e) {
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
    function L(e) {}
    ((l.handleSyncDevices = _),
      (l.handleCallEnding = f),
      (l.handleRejectedDecryptionFailure = h),
      (l.handleUpdateJoinableCallLog = y),
      (l.handleCallMissed = C),
      (l.handleUpdate1to1CallLog = v),
      (l.handleMuteRequestFailed = S),
      (l.handleMutedByOthers = R),
      (l.handleNoOpEvent = L));
  },
  98,
);
