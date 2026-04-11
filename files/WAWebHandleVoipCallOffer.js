__d(
  "WAWebHandleVoipCallOffer",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCallLogMsgData.flow",
    "WAWebCoreActionsODS",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSignalStoreApi",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipValidateAndDecryptEnc",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l,
            u = yield (c || (c = n("Promise"))).all([
              o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(a, t),
              o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
                wid: t.peer_jid,
              }),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            d = u[0],
            m = d.result,
            _ = d.retryCount,
            f = u[1].tcToken,
            g = u[2];
          if (t.group_jid != null) {
            var h;
            o("WAWebSchemaChat")
              .getChatTable()
              .get((h = t.group_jid) == null ? void 0 : h.toString())
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      if (e != null && e.name != null) {
                        var n = o("WAWebLidMigrationUtils").toPn(t.peer_jid),
                          r = o("WAWebLidMigrationUtils").toLid(t.peer_jid),
                          a = [n, r, e.id]
                            .filter(Boolean)
                            .map(function (e) {
                              return e.toString();
                            })
                            .join(",");
                        (g == null ? void 0 : g.type) === "windows" &&
                          (yield g.setChatNameAndIcon(a, e.name, ""));
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          }
          if (t.silence_reason === "vc_wave_all") {
            var y,
              C =
                t.group_jid != null
                  ? { isGroup: !0, groupJid: t.group_jid }
                  : { isGroup: !1 };
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "generateCallLogOfferNotice",
              babelHelpers.extends(
                {
                  callCreatorWid: t.peer_jid,
                  offerTime: t.t,
                  isVideo: (y = t.isVideoCall) != null ? y : !1,
                  silenceReason: t.silence_reason,
                  callId: t.call_id,
                  isOffline: t.is_offline,
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed,
                },
                C,
              ),
            );
          }
          switch (m) {
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS:
              yield g == null
                ? void 0
                : g.handleIncomingSignalingOffer(
                    a,
                    t.peer_platform,
                    t.peer_app_version,
                    t.e,
                    t.t,
                    (i = t.is_offline) != null ? i : !1,
                    (l = t.isContact) != null ? l : !1,
                    t.peer_jid.toString(),
                    f,
                  );
              break;
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY:
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] handleIncomingCallOffer reject: enc retry",
                  ])),
              ),
                yield p(t, _));
              break;
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR:
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] handleIncomingCallOffer end: enc parse error",
                  ])),
              ),
                yield g == null
                  ? void 0
                  : g.endCall(
                      o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                      !0,
                    ));
              break;
            default:
              throw r("err")("invalid e2e result type");
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a;
          t === void 0 && (t = 0);
          var i = yield (c || (c = n("Promise"))).all([
              o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            l = i[0],
            s = i[1];
          if (!l) throw r("err")("No registration info found");
          var d = l.registrationId,
            m = t + 1,
            p = (a = e.isGroupCall_DEPRECATED) != null ? a : !1;
          yield s == null
            ? void 0
            : s.rejectCallWithoutCallContext(
                e.call_id,
                p,
                e.peer_jid.toString({ legacy: !0, formatIncludeDevice: !0 }),
                e.call_creator.toString({
                  legacy: !0,
                  formatIncludeDevice: !0,
                }),
                p
                  ? o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS
                      .GROUP_CALL
                  : o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS
                      .SINGLE_PARTICIPANT,
                m,
                d,
              );
          var _ = 5;
          m === _ &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] rejectCallWithReasonEnc max retry, uploading",
                ])),
            ),
            o("WAWebCoreActionsODS").logCallErrorTerminal(),
            yield f(e));
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
          o("WAWebBackendApi").frontendFireAndForget("generateCallLog", {
            props: {
              callCreatorWid: e.call_creator,
              offerTime: e.t,
              isVideo: !!e.isVideoCall,
              isGroup: !1,
              callId: e.call_id,
              isOffline: e.is_offline,
              silenceReason: e.silence_reason,
              callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed,
            },
          });
        })),
        g.apply(this, arguments)
      );
    }
    l.handleVoipCallOffer = d;
  },
  98,
);
