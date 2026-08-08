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
    "WAWebVoipContactUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipIncomingCallQpl",
    "WAWebVoipPeerTcToken",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipValidateAndDecryptEnc",
    "WAWebWidFactory",
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
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r, a;
          o("WAWebVoipGatingUtils").markCurrentCallAsGroup(
            o("WAWebVoipGatingUtils").isGroupCallMessage(e),
          );
          var i = o("WAWebVoipIncomingCallQpl").startVoipIncomingCallQpl({
            bool: {
              is_video: (r = e.isVideoCall) != null ? r : !1,
              is_group: o("WAWebVoipGatingUtils").isGroupCallMessage(e),
              has_group_jid: e.group_jid != null,
              is_offline: (a = e.is_offline) != null ? a : !1,
            },
          });
          try {
            var l = yield (c || (c = n("Promise"))).all([
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var n;
                  (n = o(
                    "WAWebVoipIncomingCallQpl",
                  )).voipIncomingCallQplAddPoint(
                    i,
                    n.VoipIncomingCallQplPoint.E2E_DECRYPT_START,
                  );
                  var r = yield o(
                    "WAWebVoipValidateAndDecryptEnc",
                  ).validateAndDecryptEnc(t, e);
                  return (
                    n.voipIncomingCallQplAddPoint(
                      i,
                      n.VoipIncomingCallQplPoint.E2E_DECRYPT_END,
                    ),
                    r
                  );
                })(),
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var t;
                  (t = o(
                    "WAWebVoipIncomingCallQpl",
                  )).voipIncomingCallQplAddPoint(
                    i,
                    t.VoipIncomingCallQplPoint.TC_TOKEN_START,
                  );
                  var n = yield o("WAWebVoipPeerTcToken").fetchPeerTcToken(
                    e.peer_jid,
                  );
                  return (
                    t.voipIncomingCallQplAddPoint(
                      i,
                      t.VoipIncomingCallQplPoint.TC_TOKEN_END,
                    ),
                    n
                  );
                })(),
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e;
                  (e = o(
                    "WAWebVoipIncomingCallQpl",
                  )).voipIncomingCallQplAddPoint(
                    i,
                    e.VoipIncomingCallQplPoint.STACK_RESOLVE_START,
                  );
                  var t = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  return (
                    e.voipIncomingCallQplAddPoint(
                      i,
                      e.VoipIncomingCallQplPoint.STACK_RESOLVE_END,
                    ),
                    t
                  );
                })(),
              ]),
              s = l[0],
              u = s.result,
              d = s.retryCount,
              m = l[1],
              _ = l[2];
            if (e.group_jid != null) {
              var f;
              o("WAWebSchemaChat")
                .getChatTable()
                .get((f = e.group_jid) == null ? void 0 : f.toString())
                .then(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        if (t != null && t.name != null) {
                          var n = o("WAWebWidFactory").asUserWidOrThrow(
                              e.peer_jid,
                            ),
                            r = o("WAWebLidMigrationUtils").toPn(n),
                            a = o("WAWebLidMigrationUtils").toLid(n),
                            i = [r, a, t.id]
                              .filter(Boolean)
                              .map(function (e) {
                                return e.toString();
                              })
                              .join(",");
                          (_ == null ? void 0 : _.type) === "windows" &&
                            (yield _.setChatNameAndIcon(i, t.name, ""));
                        }
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                );
            }
            if (e.silence_reason === "vc_wave_all") {
              var g,
                h =
                  e.group_jid != null
                    ? { isGroup: !0, groupJid: e.group_jid }
                    : { isGroup: !1 };
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "generateCallLogOfferNotice",
                babelHelpers.extends(
                  {
                    callCreatorWid: e.peer_jid,
                    offerTime: e.t,
                    isVideo: (g = e.isVideoCall) != null ? g : !1,
                    silenceReason: e.silence_reason,
                    callId: e.call_id,
                    isOffline: e.is_offline,
                    callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                      .Missed,
                  },
                  h,
                ),
              ),
                o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplCancel(
                  i,
                  "vc_wave_all",
                ));
            }
            yield p({
              msg: e,
              qplFlow: i,
              result: u,
              retryCount: d,
              tcToken: m,
              voipNode: t,
              voipStackInterface: _,
            });
          } catch (e) {
            throw (
              i.isActive() &&
                o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(
                  i,
                  "unexpected_error",
                ),
              e
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msg,
            a = t.qplFlow,
            i = t.result,
            l = t.retryCount,
            u = t.tcToken,
            c = t.voipNode,
            d = t.voipStackInterface;
          switch (i) {
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS: {
              var m,
                p = yield o("WAWebVoipContactUtils").isCallerNotContact(
                  n.peer_jid,
                );
              (o("WAWebVoipGatingUtils").markCurrentCallAsFna(
                o("WAWebVoipGatingUtils").hasFnaRelay(c),
              ),
                o("WAWebVoipIncomingCallQpl").voipIncomingCallQplAddPoint(
                  a,
                  o("WAWebVoipIncomingCallQpl").VoipIncomingCallQplPoint
                    .NATIVE_PROCESS_START,
                ),
                yield d == null
                  ? void 0
                  : d.handleIncomingSignalingOffer(
                      c,
                      n.peer_platform,
                      n.peer_app_version,
                      n.e,
                      n.t,
                      (m = n.is_offline) != null ? m : !1,
                      p,
                      n.peer_jid.toString(),
                      u,
                    ),
                o("WAWebVoipIncomingCallQpl").voipIncomingCallQplAddPoint(
                  a,
                  o("WAWebVoipIncomingCallQpl").VoipIncomingCallQplPoint
                    .NATIVE_PROCESS_END,
                ),
                a.isActive() &&
                  o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplSuccess(
                    a,
                  ));
              break;
            }
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY:
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] handleIncomingCallOffer reject: enc retry",
                  ])),
              );
              try {
                yield f(n, l);
              } finally {
                a.isActive() &&
                  o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(
                    a,
                    "enc_retry",
                  );
              }
              break;
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR:
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] handleIncomingCallOffer end: enc parse error",
                  ])),
              );
              try {
                yield d == null
                  ? void 0
                  : d.endCall(
                      o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                      !0,
                    );
              } finally {
                a.isActive() &&
                  o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(
                    a,
                    "parse_error",
                  );
              }
              break;
            default:
              throw r("err")("invalid e2e result type");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield h(e));
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
        y.apply(this, arguments)
      );
    }
    l.handleVoipCallOffer = d;
  },
  98,
);
