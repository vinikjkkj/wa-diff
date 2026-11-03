__d(
  "WAWebHandleVoipCallOffer",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCallLogMsgData.flow",
    "WAWebCoreActionsODS",
    "WAWebHandleMsgTypes",
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(e, t) {
      var n,
        r,
        a = Date.now();
      o("WAWebVoipGatingUtils").markCurrentCallAsGroup(
        o("WAWebVoipGatingUtils").isGroupCallMessage(e),
      );
      var i = o("WAWebVoipIncomingCallQpl").startVoipIncomingCallQpl({
        bool: {
          boot_deferred: o(
            "WAWebVoipBootInitDecision",
          ).isDeferredVoipBootInitEnabled(),
          is_video: (n = e.isVideoCall) != null ? n : !1,
          is_group: o("WAWebVoipGatingUtils").isGroupCallMessage(e),
          has_group_jid: e.group_jid != null,
          is_offline: (r = e.is_offline) != null ? r : !1,
        },
      });
      try {
        var l = await Promise.all([
            (async function () {
              var n;
              (n = o("WAWebVoipIncomingCallQpl")).voipIncomingCallQplAddPoint(
                i,
                n.VoipIncomingCallQplPoint.E2E_DECRYPT_START,
              );
              var r = await o(
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
            (async function () {
              var t;
              (t = o("WAWebVoipIncomingCallQpl")).voipIncomingCallQplAddPoint(
                i,
                t.VoipIncomingCallQplPoint.TC_TOKEN_START,
              );
              var n = await o("WAWebVoipPeerTcToken").fetchPeerTcToken(
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
            (async function () {
              var e;
              (e = o("WAWebVoipIncomingCallQpl")).voipIncomingCallQplAddPoint(
                i,
                e.VoipIncomingCallQplPoint.STACK_RESOLVE_START,
              );
              var t = await o(
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
          c = s.retryCount,
          m = l[1],
          p = l[2];
        if (e.group_jid != null) {
          var _;
          o("WAWebSchemaChat")
            .getChatTable()
            .get((_ = e.group_jid) == null ? void 0 : _.toString())
            .then(async function (t) {
              if (t != null && t.name != null) {
                var n = o("WAWebWidFactory").asUserWidOrThrow(e.peer_jid),
                  r = o("WAWebLidMigrationUtils").toPn(n),
                  a = o("WAWebLidMigrationUtils").toLid(n),
                  i = [r, a, t.id]
                    .filter(Boolean)
                    .map(function (e) {
                      return e.toString();
                    })
                    .join(",");
                (p == null ? void 0 : p.type) === "windows" &&
                  (await p.setChatNameAndIcon(i, t.name, ""));
              }
            });
        }
        if (
          e.silence_reason === "vc_wave_all" &&
          !o("WAWebVoipGatingUtils").isWebVoiceChatEnabled()
        ) {
          var f,
            g =
              e.group_jid != null
                ? { isGroup: !0, groupJid: e.group_jid }
                : { isGroup: !1 };
          (await o("WAWebBackendApi").frontendSendAndReceive(
            "generateCallLogOfferNotice",
            babelHelpers.extends(
              {
                callCreatorWid: e.peer_jid,
                offerTime: e.t,
                isVideo: (f = e.isVideoCall) != null ? f : !1,
                silenceReason: e.silence_reason,
                callId: e.call_id,
                isOffline: e.is_offline,
                callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed,
              },
              g,
            ),
          ),
            o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplCancel(
              i,
              "vc_wave_all",
            ));
        }
        await d({
          msg: e,
          offerReceivedMs: a,
          qplFlow: i,
          result: u,
          retryCount: c,
          tcToken: m,
          voipNode: t,
          voipStackInterface: p,
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
    }
    async function d(t) {
      var n = t.msg,
        a = t.offerReceivedMs,
        i = t.qplFlow,
        l = t.result,
        u = t.retryCount,
        c = t.tcToken,
        d = t.voipNode,
        p = t.voipStackInterface;
      switch (l) {
        case o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS: {
          var _,
            f = await o("WAWebVoipContactUtils").isCallerNotContact(n.peer_jid);
          (o("WAWebVoipGatingUtils").markCurrentCallAsFna(
            o("WAWebVoipGatingUtils").hasFnaRelay(d),
          ),
            o("WAWebVoipIncomingCallQpl").voipIncomingCallQplAddPoint(
              i,
              o("WAWebVoipIncomingCallQpl").VoipIncomingCallQplPoint
                .NATIVE_PROCESS_START,
            ),
            await (p == null
              ? void 0
              : p.handleIncomingSignalingOffer(
                  d,
                  n.peer_platform,
                  n.peer_app_version,
                  n.e,
                  n.t,
                  (_ = n.is_offline) != null ? _ : !1,
                  f,
                  n.peer_jid.toString(),
                  c,
                  a,
                )),
            o("WAWebVoipIncomingCallQpl").voipIncomingCallQplAddPoint(
              i,
              o("WAWebVoipIncomingCallQpl").VoipIncomingCallQplPoint
                .NATIVE_PROCESS_END,
            ),
            i.isActive() &&
              o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplSuccess(i));
          break;
        }
        case o("WAWebHandleMsgTypes").E2EProcessResult.RETRY:
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleIncomingCallOffer reject: enc retry",
              ])),
          );
          try {
            await m(n, u);
          } finally {
            i.isActive() &&
              o("WAWebVoipIncomingCallQpl").endVoipIncomingCallQplFail(
                i,
                "enc_retry",
              );
          }
          break;
        case o("WAWebHandleMsgTypes").E2EProcessResult.PARSE_ERROR:
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleIncomingCallOffer end: enc parse error",
              ])),
          );
          try {
            await (p == null
              ? void 0
              : p.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                  !0,
                ));
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
    }
    async function m(e, t) {
      var n;
      t === void 0 && (t = 0);
      var r = await o(
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
        await p(e));
    }
    async function p(e) {
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
    }
    l.handleVoipCallOffer = c;
  },
  98,
);
