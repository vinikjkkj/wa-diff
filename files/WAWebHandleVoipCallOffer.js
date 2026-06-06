__d(
  "WAWebHandleVoipCallOffer",
  [
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
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(t, n) {
      var a,
        i,
        l = await Promise.all([
          o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(n, t),
          o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
            wid: t.peer_jid,
          }),
          o("WAWebVoipStackInterface").getVoipStackInterface(),
        ]),
        u = l[0],
        c = u.result,
        m = u.retryCount,
        p = l[1].tcToken,
        _ = l[2];
      if (t.group_jid != null) {
        var f;
        o("WAWebSchemaChat")
          .getChatTable()
          .get((f = t.group_jid) == null ? void 0 : f.toString())
          .then(async function (e) {
            if (e != null && e.name != null) {
              var n = o("WAWebWidFactory").asUserWidOrThrow(t.peer_jid),
                r = o("WAWebLidMigrationUtils").toPn(n),
                a = o("WAWebLidMigrationUtils").toLid(n),
                i = [r, a, e.id]
                  .filter(Boolean)
                  .map(function (e) {
                    return e.toString();
                  })
                  .join(",");
              (_ == null ? void 0 : _.type) === "windows" &&
                (await _.setChatNameAndIcon(i, e.name, ""));
            }
          });
      }
      if (t.silence_reason === "vc_wave_all") {
        var g,
          h =
            t.group_jid != null
              ? { isGroup: !0, groupJid: t.group_jid }
              : { isGroup: !1 };
        await o("WAWebBackendApi").frontendSendAndReceive(
          "generateCallLogOfferNotice",
          babelHelpers.extends(
            {
              callCreatorWid: t.peer_jid,
              offerTime: t.t,
              isVideo: (g = t.isVideoCall) != null ? g : !1,
              silenceReason: t.silence_reason,
              callId: t.call_id,
              isOffline: t.is_offline,
              callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed,
            },
            h,
          ),
        );
      }
      switch (c) {
        case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS:
          await (_ == null
            ? void 0
            : _.handleIncomingSignalingOffer(
                n,
                t.peer_platform,
                t.peer_app_version,
                t.e,
                t.t,
                (a = t.is_offline) != null ? a : !1,
                (i = t.isContact) != null ? i : !1,
                t.peer_jid.toString(),
                p,
              ));
          break;
        case o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY:
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleIncomingCallOffer reject: enc retry",
              ])),
          ),
            await d(t, m));
          break;
        case o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR:
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleIncomingCallOffer end: enc parse error",
              ])),
          ),
            await (_ == null
              ? void 0
              : _.endCall(
                  o("WAWebVoipSignalingEnums").EndCallReason.Unknown,
                  !0,
                )));
          break;
        default:
          throw r("err")("invalid e2e result type");
      }
    }
    async function d(e, t) {
      var n;
      t === void 0 && (t = 0);
      var a = await Promise.all([
          o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
          o("WAWebVoipStackInterface").getVoipStackInterface(),
        ]),
        i = a[0],
        l = a[1];
      if (!i) throw r("err")("No registration info found");
      var s = i.registrationId,
        c = t + 1,
        d = (n = e.isGroupCall_DEPRECATED) != null ? n : !1;
      await (l == null
        ? void 0
        : l.rejectCallWithoutCallContext(
            e.call_id,
            d,
            e.peer_jid.toString({ legacy: !0, formatIncludeDevice: !0 }),
            e.call_creator.toString({ legacy: !0, formatIncludeDevice: !0 }),
            d
              ? o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS.GROUP_CALL
              : o("WAWebVoipSignalingEnums").ENC_RETRY_RECEIPT_ATTRS
                  .SINGLE_PARTICIPANT,
            c,
            s,
          ));
      var p = 5;
      c === p &&
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] rejectCallWithReasonEnc max retry, uploading",
            ])),
        ),
        o("WAWebCoreActionsODS").logCallErrorTerminal(),
        await m(e));
    }
    async function m(e) {
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
