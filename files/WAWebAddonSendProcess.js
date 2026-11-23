__d(
  "WAWebAddonSendProcess",
  [
    "WALogger",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonEncryptAddonMsgData",
    "WAWebAddonInfraError",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonRetryRequestUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSendMsgData",
    "WAWebAddonUpdateDataUtils",
    "WAWebHandleMsgError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebReferentialMsgKey",
    "WAWebSendMsgTypes",
    "WAWebUserUtils",
    "WAWebWid",
    "err",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("requireDeferred")("WAWebSendMsgJob").__setRef(
        "WAWebAddonSendProcess",
      );
    function f(e) {
      return e.parent.isGroupStatus !== !0
        ? e
        : babelHelpers.extends({}, e, {
            encryptedMsgData: babelHelpers.extends({}, e.encryptedMsgData, {
              isGroupStatus: !0,
            }),
            decryptedMsgData: babelHelpers.extends({}, e.decryptedMsgData, {
              isGroupStatus: !0,
            }),
          });
    }
    async function g(e, t) {
      var n = o("WAWebAddonEncryptAddonMsgData").createDualEncryptionHelper(
          e,
          t,
        ),
        r = n ? await n.decrypt() : e,
        a = o("WAWebAddonSelectUtils").getAddonTableMode(e);
      await o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
        {
          processMode: o("WAWebAddonConstants").AddonProcessMode.SetAck,
          tableMode: a,
        },
        { add: [r] },
      );
    }
    function h(e) {
      var t = e.id,
        n = t.remote;
      return t.fromMe && o("WAWebUserUtils").isMePrimary(n)
        ? o("WAWebAck").ACK.READ
        : o("WAWebAck").ACK.SENT;
    }
    function y(e, t) {
      if (e.decryptedMsgData.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) {
        var n = o("WAWebMsgGetters").getPollEndTime(e.parent),
          r = parseInt(String(t), 10) * 1e3;
        if (n != null && r > n) return !0;
      }
      return !1;
    }
    var C = new Set([
      o("WAWebAddonConstants").AddonProcessMode.Send,
      o("WAWebAddonConstants").AddonProcessMode.SendRetry,
      o("WAWebAddonConstants").AddonProcessMode.SendRevoke,
    ]);
    async function b(t) {
      try {
        var n =
            t.ack === o("WAWebAck").ACK.FAILED
              ? o("WAWebAddonConstants").AddonProcessMode.SendRetry
              : o("WAWebAddonConstants").AddonProcessMode.Send,
          r = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
            [t],
            n,
          ),
          a = r[0],
          i = o("WAWebAddonSelectUtils")
            .createAddonParentSelector(a)
            .getForAddon(t);
        await g(
          babelHelpers.extends({}, t, { ack: o("WAWebAck").ACK.FAILED }),
          i,
        );
      } catch (n) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendAddonMsgData: failed to mark addon send-failed without sending ",
                "",
              ])),
            t.id.toString(),
          )
          .tags("messaging", "addons")
          .sendLogs("sendAddonMsgData: mark-failed-without-send");
      }
    }
    async function v(e, t) {
      var n = o("WAWebAddonConstants").AddonProcessMode.Send;
      (e.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke &&
        (n = o("WAWebAddonConstants").AddonProcessMode.SendRevoke),
        e.ack === o("WAWebAck").ACK.FAILED &&
          (n = o("WAWebAddonConstants").AddonProcessMode.SendRetry));
      var a;
      try {
        var i;
        if (!C.has(n))
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
        var l = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
        if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e))
          a = await o(
            "WAWebAddonProcessMsgs",
          ).processOutgoingMsgOptimisticUpdate(n, e);
        else {
          var b;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-infra] send ",
                " (",
                ") id=",
                " parent=",
                " isLid=",
                "",
              ])),
            o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e),
            e.type,
            e.id.id,
            l.id,
            (b = l.participant) == null ? void 0 : b.isLid(),
          );
          var v = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
              [e],
              n,
            ),
            S = v[0],
            R = v[1];
          if (
            ((a = {
              encryptedMsgData: R[0],
              decryptedMsgData: R[0],
              parent: o("WAWebAddonSelectUtils")
                .createAddonParentSelector(S)
                .getForAddon(R[0]),
            }),
            n === o("WAWebAddonConstants").AddonProcessMode.SendRetry &&
              e.type === o("WAWebMsgType").MSG_TYPE.COMMENT)
          ) {
            var L = o("WAWebAddonPluginProcessor").getAddonProcessor(
              a.decryptedMsgData,
            );
            L.convert.toDualEncryptedMsgData != null &&
              (a.encryptedMsgData = await L.convert.toDualEncryptedMsgData(
                a.decryptedMsgData,
                a.parent,
              ));
          }
          ((a = f(a)),
            (n === o("WAWebAddonConstants").AddonProcessMode.Send ||
              n === o("WAWebAddonConstants").AddonProcessMode.SendRetry) &&
              (await o("WAWebAddonProcessMsgs").processOutgoingMsg(
                n,
                a.encryptedMsgData,
                S,
                t,
              )));
        }
        await o("WAWebAddonRetryRequestUtils").storeSelfMessageTypeRow(
          a.decryptedMsgData,
        );
        var E =
          a.parent.broadcastId != null &&
          r("WAWebWid").isWid(a.parent.broadcastId) &&
          !!((i = a.parent.broadcastId) != null && i.isBroadcastList());
        if (E) {
          var k = o("WAWebReferentialMsgKey").getReferentialMsgKey(a.parent);
          a.encryptedMsgData = o(
            "WAWebAddonProcessMsgsUtils",
          ).updateMsgParentKeyValue(a.encryptedMsgData, k);
        }
        var I = await _.load(),
          T = I.encryptAndSendMsg,
          D = await T(
            {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
              data: a.encryptedMsgData,
            },
            t,
          ),
          x = D.count,
          $ = D.error,
          P = D.t;
        if (
          (E &&
            (a.encryptedMsgData = o(
              "WAWebAddonProcessMsgsUtils",
            ).updateMsgParentKeyValue(a.encryptedMsgData, a.parent.id)),
          $ != null)
        )
          throw new (o("WAWebHandleMsgError").MessageSentAckError)($);
        if (y(a, P))
          throw (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAddonMsgData: post-send validation failed, marking as failed",
                ])),
            ),
            r("err")("Post-send validation failed")
          );
        return (
          await g(
            babelHelpers.extends({}, a.decryptedMsgData, {
              ack: h(a.encryptedMsgData),
            }),
            a.parent,
          ),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-infra]: sent ",
                " addon, id: ",
                "",
              ])),
            a.decryptedMsgData.type,
            a.decryptedMsgData.id.id,
          ),
          { t: parseInt(String(P), 10), count: x }
        );
      } catch (t) {
        if (a == null) {
          if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e))
            try {
              var N = await o(
                  "WAWebAddonProcessMsgsUtils",
                ).queryAddonParentMsgs([e], n),
                M = N[0],
                w = o("WAWebAddonSelectUtils")
                  .createAddonParentSelector(M)
                  .getForAddon(e);
              await g(
                babelHelpers.extends({}, e, { ack: o("WAWebAck").ACK.FAILED }),
                w,
              );
            } catch (t) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "sendAddonMsgData: failed to set ACK.FAILED for optimistic addon ",
                      "",
                    ])),
                  e.id.toString(),
                )
                .tags("messaging", "addons")
                .sendLogs("sendAddonMsgData: optimistic-set-ack-failed");
            }
          throw (
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAddonMsgData: parent ",
                    " not found for ",
                    "",
                  ])),
                o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e),
                e.id.toString(),
              )
              .tags("messaging", "addons")
              .sendLogs("sendAddonMsgData: undefined parent"),
            t
          );
        }
        throw (
          await g(
            babelHelpers.extends({}, a.decryptedMsgData, {
              ack: o("WAWebAck").ACK.FAILED,
            }),
            a.parent,
          ),
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "sendAddonMsgData: failure, msg: ",
                "",
              ])),
            e.id.toString(),
          ),
          t
        );
      }
    }
    ((l.markAddonSendFailed = b), (l.sendAddonProcess = v));
  },
  98,
);
