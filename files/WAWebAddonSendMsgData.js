__d(
  "WAWebAddonSendMsgData",
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
    "WAWebAddonUpdateDataUtils",
    "WAWebHandleMsgError",
    "WAWebMsgType",
    "WAWebReferentialMsgKey",
    "WAWebSendMsgJob",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebAddonEncryptAddonMsgData").createDualEncryptionHelper(
              e,
              t,
            ),
            r = n ? yield n.decrypt() : e,
            a = o("WAWebAddonSelectUtils").getAddonTableMode(e);
          yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
            {
              processMode: o("WAWebAddonConstants").AddonProcessMode.SetAck,
              tableMode: a,
            },
            { add: [r] },
          );
        })),
        p.apply(this, arguments)
      );
    }
    var _ = function (t) {
        var e = t.id,
          n = e.remote;
        return e.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(n)
          ? o("WAWebAck").ACK.READ
          : o("WAWebAck").ACK.SENT;
      },
      f = new Set([
        o("WAWebAddonConstants").AddonProcessMode.Send,
        o("WAWebAddonConstants").AddonProcessMode.SendRetry,
        o("WAWebAddonConstants").AddonProcessMode.SendRevoke,
      ]),
      g = new Set([
        o("WAWebMsgType").MSG_TYPE.REACTION,
        o("WAWebMsgType").MSG_TYPE.REACTION_ENC,
      ]);
    function h(e) {
      return g.has(e.type)
        ? !0
        : new Set(["reaction", "poll_update", "comment", "event_response"]).has(
            e.type,
          );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebAddonConstants").AddonProcessMode.Send;
          (t.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke &&
            (a = o("WAWebAddonConstants").AddonProcessMode.SendRevoke),
            t.ack === o("WAWebAck").ACK.FAILED &&
              (a = o("WAWebAddonConstants").AddonProcessMode.SendRetry));
          var i;
          try {
            var l;
            if (!f.has(a))
              throw new (o("WAWebAddonInfraError").AddonInfraError)(
                o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
              );
            var p = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(t);
            if (h(t))
              i = yield o(
                "WAWebAddonProcessMsgs",
              ).processOutgoingMsgOptimisticUpdate(a, t);
            else {
              var g;
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-infra] send ",
                    " (",
                    ") id=",
                    " parent=",
                    " isLid=",
                    "",
                  ])),
                o("WAWebAddonCrossWindowUtils").getAddonProcessorType(t),
                t.type,
                t.id.id,
                p.id,
                (g = p.participant) == null ? void 0 : g.isLid(),
              );
              var y = yield o(
                  "WAWebAddonProcessMsgsUtils",
                ).queryAddonParentMsgs([t], a),
                C = y[0],
                b = y[1];
              if (
                ((i = {
                  encryptedMsgData: b[0],
                  decryptedMsgData: b[0],
                  parent: o("WAWebAddonSelectUtils")
                    .createAddonParentSelector(C)
                    .getForAddon(b[0]),
                }),
                a === o("WAWebAddonConstants").AddonProcessMode.SendRetry &&
                  t.type === o("WAWebMsgType").MSG_TYPE.COMMENT)
              ) {
                var v = o("WAWebAddonPluginProcessor").getAddonProcessor(
                  i.decryptedMsgData,
                );
                v.convert.toDualEncryptedMsgData != null &&
                  (i.encryptedMsgData = yield v.convert.toDualEncryptedMsgData(
                    i.decryptedMsgData,
                    i.parent,
                  ));
              }
              (a === o("WAWebAddonConstants").AddonProcessMode.Send ||
                a === o("WAWebAddonConstants").AddonProcessMode.SendRetry) &&
                (yield o("WAWebAddonProcessMsgs").processOutgoingMsg(
                  a,
                  i.encryptedMsgData,
                  C,
                  n,
                ));
            }
            yield o("WAWebAddonRetryRequestUtils").storeSelfMessageTypeRow(
              i.decryptedMsgData,
            );
            var S =
              i.parent.broadcastId != null &&
              r("WAWebWid").isWid(i.parent.broadcastId) &&
              !!((l = i.parent.broadcastId) != null && l.isBroadcastList());
            if (S) {
              var R = o("WAWebReferentialMsgKey").getReferentialMsgKey(
                i.parent,
              );
              i.encryptedMsgData = o(
                "WAWebAddonProcessMsgsUtils",
              ).updateMsgParentKeyValue(i.encryptedMsgData, R);
            }
            var L = yield o("WAWebSendMsgJob").encryptAndSendMsg(
                {
                  type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                  data: i.encryptedMsgData,
                },
                n,
              ),
              E = L.count,
              k = L.error,
              I = L.t;
            if (
              (S &&
                (i.encryptedMsgData = o(
                  "WAWebAddonProcessMsgsUtils",
                ).updateMsgParentKeyValue(i.encryptedMsgData, i.parent.id)),
              k != null)
            )
              throw new (o("WAWebHandleMsgError").MessageSentAckError)(k);
            return (
              yield m(
                babelHelpers.extends({}, i.decryptedMsgData, {
                  ack: _(i.encryptedMsgData),
                }),
                i.parent,
              ),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-infra]: sent ",
                    " addon, id: ",
                    "",
                  ])),
                i.decryptedMsgData.type,
                i.decryptedMsgData.id.id,
              ),
              { t: parseInt(I, 10), count: E }
            );
          } catch (e) {
            if (i == null) {
              if (h(t))
                try {
                  var T = yield o(
                      "WAWebAddonProcessMsgsUtils",
                    ).queryAddonParentMsgs([t], a),
                    D = T[0],
                    x = o("WAWebAddonSelectUtils")
                      .createAddonParentSelector(D)
                      .getForAddon(t);
                  yield m(
                    babelHelpers.extends({}, t, {
                      ack: o("WAWebAck").ACK.FAILED,
                    }),
                    x,
                  );
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "sendAddonMsgData: failed to set ACK.FAILED for optimistic addon ",
                          "",
                        ])),
                      t.id.toString(),
                    )
                    .tags("messaging", "addons")
                    .sendLogs("sendAddonMsgData: optimistic-set-ack-failed");
                }
              throw (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "sendAddonMsgData: parent ",
                        " not found for ",
                        "",
                      ])),
                    o("WAWebAddonProcessMsgsUtils").getParentMsgKey(t),
                    t.id.toString(),
                  )
                  .tags("messaging", "addons")
                  .sendLogs("sendAddonMsgData: undefined parent"),
                e
              );
            }
            throw (
              yield m(
                babelHelpers.extends({}, i.decryptedMsgData, {
                  ack: o("WAWebAck").ACK.FAILED,
                }),
                i.parent,
              ),
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAddonMsgData: failure, msg: ",
                    "",
                  ])),
                t.id.toString(),
              ),
              e
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.isOptimisticAddonSendSupported = h), (l.sendAddonProcess = y));
  },
  98,
);
