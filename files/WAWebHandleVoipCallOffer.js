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
    "WAWebVoipBootInitDecision",
    "WAWebVoipContactUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipIncomingCallQpl",
    "WAWebVoipPeerTcToken",
    "WAWebVoipRejectCallWithReasonEnc",
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
          var r,
            a,
            i = Date.now();
          o("WAWebVoipGatingUtils").markCurrentCallAsGroup(
            o("WAWebVoipGatingUtils").isGroupCallMessage(e),
          );
          var l = o("WAWebVoipIncomingCallQpl").startVoipIncomingCallQpl({
            bool: {
              boot_deferred: o(
                "WAWebVoipBootInitDecision",
              ).isDeferredVoipBootInitEnabled(),
              is_video: (r = e.isVideoCall) != null ? r : !1,
              is_group: o("WAWebVoipGatingUtils").isGroupCallMessage(e),
              has_group_jid: e.group_jid != null,
              is_offline: (a = e.is_offline) != null ? a : !1,
            },
          });
          try {
            var s = yield (c || (c = n("Promise"))).all([
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var n;
                  (n = o(
                    "WAWebVoipIncomingCallQpl",
                  )).voipIncomingCallQplAddPoint(
                    l,
                    n.VoipIncomingCallQplPoint.E2E_DECRYPT_START,
                  );
                  var r = yield o(
                    "WAWebVoipValidateAndDecryptEnc",
                  ).validateAndDecryptEnc(t, e);
                  return (
                    n.voipIncomingCallQplAddPoint(
                      l,
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
                    l,
                    t.VoipIncomingCallQplPoint.TC_TOKEN_START,
                  );
                  var n = yield o("WAWebVoipPeerTcToken").fetchPeerTcToken(
                    e.peer_jid,
                  );
                  return (
                    t.voipIncomingCallQplAddPoint(
                      l,
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
                    l,
                    e.VoipIncomingCallQplPoint.STACK_RESOLVE_START,
                  );
                  var t = yield o(
                    "WAWebVoipStackInterface",
                  ).getVoipStackInterface();
                  return (
                    e.voipIncomingCallQplAddPoint(
                      l,
                      e.VoipIncomingCallQplPoint.STACK_RESOLVE_END,
                    ),
                    t
                  );
                })(),
              ]),
              u = s[0],
              d = u.result,
              m = u.retryCount,
              _ = s[1],
              f = s[2];
            if (e.group_jid != null) {
              var g;
              o("WAWebSchemaChat")
                .getChatTable()
                .get((g = e.group_jid) == null ? void 0 : g.toString())
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
                          (f == null ? void 0 : f.type) === "windows" &&
                            (yield f.setChatNameAndIcon(i, t.name, ""));
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
              var h,
                y =
                  e.group_jid != null
                    ? { isGroup: !0, groupJid: e.group_jid }
                    : { isGroup: !1 };
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "generateCallLogOfferNotice",
                babelHelpers.extends(
                  {
                    callCreatorWid: e.peer_jid,
                    offerTime: e.t,
                    isVideo: (h = e.isVideoCall) != null ? h : !1,
                    silenceReason: e.silence_reason,
                    callId: e.call_id,
                    isOffline: e.is_offline,
                    callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                      .Missed,
                  },
                  y,
                ),
              ),
                o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplCancel(
                  l,
                  "vc_wave_all",
                ));
            }
            yield p({
              msg: e,
              offerReceivedMs: i,
              qplFlow: l,
              result: d,
              retryCount: m,
              tcToken: _,
              voipNode: t,
              voipStackInterface: f,
            });
          } catch (e) {
            throw (
              l.isActive() &&
                o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(
                  l,
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
            a = t.offerReceivedMs,
            i = t.qplFlow,
            l = t.result,
            u = t.retryCount,
            c = t.tcToken,
            d = t.voipNode,
            m = t.voipStackInterface;
          switch (l) {
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS: {
              var p,
                _ = yield o("WAWebVoipContactUtils").isCallerNotContact(
                  n.peer_jid,
                );
              (o("WAWebVoipGatingUtils").markCurrentCallAsFna(
                o("WAWebVoipGatingUtils").hasFnaRelay(d),
              ),
                o("WAWebVoipIncomingCallQpl").voipIncomingCallQplAddPoint(
                  i,
                  o("WAWebVoipIncomingCallQpl").VoipIncomingCallQplPoint
                    .NATIVE_PROCESS_START,
                ),
                yield m == null
                  ? void 0
                  : m.handleIncomingSignalingOffer(
                      d,
                      n.peer_platform,
                      n.peer_app_version,
                      n.e,
                      n.t,
                      (p = n.is_offline) != null ? p : !1,
                      _,
                      n.peer_jid.toString(),
                      c,
                      a,
                    ),
                o("WAWebVoipIncomingCallQpl").voipIncomingCallQplAddPoint(
                  i,
                  o("WAWebVoipIncomingCallQpl").VoipIncomingCallQplPoint
                    .NATIVE_PROCESS_END,
                ),
                i.isActive() &&
                  o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplSuccess(
                    i,
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
                yield f(n, u);
              } finally {
                i.isActive() &&
                  o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(
                    i,
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
                yield m == null
                  ? void 0
                  : m.endCall(
                      o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                      !0,
                    );
              } finally {
                i.isActive() &&
                  o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(
                    i,
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
          var n;
          t === void 0 && (t = 0);
          var r = yield o(
              "WAWebVoipRejectCallWithReasonEnc",
            ).rejectCallWithReasonEnc(
              e,
              t,
              (n = e.isGroupCall_DEPRECATED) != null ? n : !1,
            ),
            a = 5;
          r === a &&
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
