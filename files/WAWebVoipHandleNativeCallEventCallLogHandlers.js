__d(
  "WAWebVoipHandleNativeCallEventCallLogHandlers",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAdvSyncDeviceListApi",
    "WAWebBackendApi",
    "WAWebCallLogSync",
    "WAWebCoreActionsODS",
    "WAWebHandleRetryRequest",
    "WAWebSyncdCoreApi",
    "WAWebVoipHandleNativeCallEventFieldstatsHandlers",
    "WAWebVoipStackInterface",
    "WAWebVoipTimeSeriesUpload",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            i = a.parsers.parseSyncDeviceData(t);
          (yield (c || (c = n("Promise"))).all(
            i.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e.UserRawJid],
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  return o(
                    "WAWebVoipTimeSeriesUpload",
                  ).uploadTimeSeriesLogsAsync(n, e);
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
            n.fromMe && (yield f(n)));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTimeMs(),
            a = r("WAWebCallLogSync").getCallLogMutation(t, e);
          yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
            return (c || (c = n("Promise"))).resolve();
          });
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseUpdateJoinableCallLogData(e);
          o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromEventUpdateJoinable",
            { joinableCallLogData: n },
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseCallMissedData(e);
          (n.PeerUserJid != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "cancelCallNotification",
              { wid: n.PeerUserJid },
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "generateCallLogFromEventCallMissed",
              { callMissedData: n },
            ));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            n = t.parsers.parseUpdate1to1CallLogData(e);
          o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromEventUpdate1to1",
            { call1to1LogData: n },
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      o("WAWebBackendApi").frontendFireAndForget("handleMuteRequestFailed", {});
    }
    function k(e) {
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
    function I(e) {}
    ((l.handleSyncDevices = d),
      (l.handleCallEnding = p),
      (l.handleRejectedDecryptionFailure = h),
      (l.handleUpdateJoinableCallLog = C),
      (l.handleCallMissed = v),
      (l.handleUpdate1to1CallLog = R),
      (l.handleMuteRequestFailed = E),
      (l.handleMutedByOthers = k),
      (l.handleNoOpEvent = I));
  },
  98,
);
