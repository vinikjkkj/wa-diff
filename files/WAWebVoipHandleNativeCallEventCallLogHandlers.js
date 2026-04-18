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
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            ),
            a = t.parsers.parseSyncDeviceData(e);
          (yield (_ || (_ = n("Promise"))).all(
            a.map(function (e) {
              return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
                wids: [e.UserRawJid],
                phash: e.PHash,
                context: "voip",
              });
            }),
          ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleSyncDevices: ",
                  " wids synced",
                ])),
              a.length,
            ));
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
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [TS Upload] Failed to upload time-series logs: ",
                        "",
                      ])),
                    e,
                  );
                }),
            n.fromMe && n.isCallLink !== !0 && (yield C(n)));
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
          var t = o("WATimeUtils").unixTimeMs(),
            a = r("WAWebCallLogSync").getCallLogMutation(t, e);
          yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
            return (_ || (_ = n("Promise"))).resolve();
          });
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
            n = t.parsers.parseUpdateJoinableCallLogData(e);
          o("WAWebBackendApi").frontendFireAndForget(
            "generateCallLogFromEventUpdateJoinable",
            { joinableCallLogData: n },
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            ),
            n.ShouldUploadFieldStats === !0 && I(n));
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      var n = t.MissedCallFieldStats;
      if (n == null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: missed call fieldstats: no stats to send",
            ])),
        );
        return;
      }
      try {
        var a = Object.entries(n),
          i = Object.fromEntries(
            r("compactMap")(a, function (e) {
              var t = e[0],
                n = e[1],
                a =
                  t === "abtest_bucket"
                    ? "callTestBucket"
                    : t === "peer_raw_jid"
                      ? null
                      : r("WACamelCase")(t, {
                          treatNumbersAsWordBoundaries: !1,
                        });
              if (a == null) return null;
              try {
                var i = o("WAWebWamCodegenUtils").metrics.getEvent("Call", a);
                return i.type === "boolean" ? [a, !!n] : [a, n];
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
          l = new (o("WAWebCallWamEvent").CallWamEvent)(i);
        (l.commit(),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: missed call WAM event committed",
              ])),
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: failed to send missed call fieldstats",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
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
    ((l.handleSyncDevices = f),
      (l.handleCallEnding = h),
      (l.handleRejectedDecryptionFailure = v),
      (l.handleUpdateJoinableCallLog = R),
      (l.handleCallMissed = E),
      (l.handleUpdate1to1CallLog = T),
      (l.handleMuteRequestFailed = x),
      (l.handleMutedByOthers = $),
      (l.handleNoOpEvent = P));
  },
  98,
);
