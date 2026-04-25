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
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l,
            c = yield (d || (d = n("Promise"))).all([
              o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(a, t),
              o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
                wid: t.peer_jid,
              }),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            m = c[0],
            p = m.result,
            f = m.retryCount,
            g = c[1].tcToken,
            h = c[2];
          if (t.group_jid != null) {
            var y;
            o("WAWebSchemaChat")
              .getChatTable()
              .get((y = t.group_jid) == null ? void 0 : y.toString())
              .then(
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      if (n != null && n.name != null) {
                        t.peer_jid.device != null &&
                          o("WALogger")
                            .ERROR(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "[voip] handleIncomingCallOffer: peer_jid has device id, toPn will fail",
                                ])),
                            )
                            .sendLogs("call-offer-peer-jid-with-device");
                        var r = o("WAWebLidMigrationUtils").toPn(t.peer_jid),
                          a = o("WAWebLidMigrationUtils").toLid(t.peer_jid),
                          i = [r, a, n.id]
                            .filter(Boolean)
                            .map(function (e) {
                              return e.toString();
                            })
                            .join(",");
                        (h == null ? void 0 : h.type) === "windows" &&
                          (yield h.setChatNameAndIcon(i, n.name, ""));
                      }
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              );
          }
          if (t.silence_reason === "vc_wave_all") {
            var C,
              b =
                t.group_jid != null
                  ? { isGroup: !0, groupJid: t.group_jid }
                  : { isGroup: !1 };
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "generateCallLogOfferNotice",
              babelHelpers.extends(
                {
                  callCreatorWid: t.peer_jid,
                  offerTime: t.t,
                  isVideo: (C = t.isVideoCall) != null ? C : !1,
                  silenceReason: t.silence_reason,
                  callId: t.call_id,
                  isOffline: t.is_offline,
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed,
                },
                b,
              ),
            );
          }
          switch (p) {
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS:
              yield h == null
                ? void 0
                : h.handleIncomingSignalingOffer(
                    a,
                    t.peer_platform,
                    t.peer_app_version,
                    t.e,
                    t.t,
                    (i = t.is_offline) != null ? i : !1,
                    (l = t.isContact) != null ? l : !1,
                    t.peer_jid.toString(),
                    g,
                  );
              break;
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY:
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] handleIncomingCallOffer reject: enc retry",
                  ])),
              ),
                yield _(t, f));
              break;
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR:
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] handleIncomingCallOffer end: enc parse error",
                  ])),
              ),
                yield h == null
                  ? void 0
                  : h.endCall(
                      o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                      !0,
                    ));
              break;
            default:
              throw r("err")("invalid e2e result type");
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a;
          t === void 0 && (t = 0);
          var i = yield (d || (d = n("Promise"))).all([
              o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            l = i[0],
            s = i[1];
          if (!l) throw r("err")("No registration info found");
          var u = l.registrationId,
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
                u,
              );
          var _ = 5;
          m === _ &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] rejectCallWithReasonEnc max retry, uploading",
                ])),
            ),
            o("WAWebCoreActionsODS").logCallErrorTerminal(),
            yield g(e));
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
        h.apply(this, arguments)
      );
    }
    l.handleVoipCallOffer = m;
  },
  98,
);
