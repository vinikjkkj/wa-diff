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
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebReferentialMsgKey",
    "WAWebSendMsgJob",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        _.apply(this, arguments)
      );
    }
    var f = function (t) {
      var e = t.id,
        n = e.remote;
      return e.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(n)
        ? o("WAWebAck").ACK.READ
        : o("WAWebAck").ACK.SENT;
    };
    function g(e, t) {
      if (e.decryptedMsgData.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) {
        var n = o("WAWebMsgGetters").getPollEndTime(e.parent),
          r = parseInt(t, 10) * 1e3;
        if (n != null && r > n) return !0;
      }
      return !1;
    }
    var h = new Set([
        o("WAWebAddonConstants").AddonProcessMode.Send,
        o("WAWebAddonConstants").AddonProcessMode.SendRetry,
        o("WAWebAddonConstants").AddonProcessMode.SendRevoke,
      ]),
      y = new Set([
        o("WAWebMsgType").MSG_TYPE.REACTION,
        o("WAWebMsgType").MSG_TYPE.REACTION_ENC,
      ]);
    function C(e) {
      return y.has(e.type)
        ? !0
        : new Set(["reaction", "poll_update", "comment", "event_response"]).has(
            e.type,
          );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebAddonConstants").AddonProcessMode.Send;
          (t.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke &&
            (a = o("WAWebAddonConstants").AddonProcessMode.SendRevoke),
            t.ack === o("WAWebAck").ACK.FAILED &&
              (a = o("WAWebAddonConstants").AddonProcessMode.SendRetry));
          var i;
          try {
            var l;
            if (!h.has(a))
              throw new (o("WAWebAddonInfraError").AddonInfraError)(
                o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
              );
            var _ = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(t);
            if (C(t))
              i = yield o(
                "WAWebAddonProcessMsgs",
              ).processOutgoingMsgOptimisticUpdate(a, t);
            else {
              var y;
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
                _.id,
                (y = _.participant) == null ? void 0 : y.isLid(),
              );
              var b = yield o(
                  "WAWebAddonProcessMsgsUtils",
                ).queryAddonParentMsgs([t], a),
                v = b[0],
                S = b[1];
              if (
                ((i = {
                  encryptedMsgData: S[0],
                  decryptedMsgData: S[0],
                  parent: o("WAWebAddonSelectUtils")
                    .createAddonParentSelector(v)
                    .getForAddon(S[0]),
                }),
                a === o("WAWebAddonConstants").AddonProcessMode.SendRetry &&
                  t.type === o("WAWebMsgType").MSG_TYPE.COMMENT)
              ) {
                var R = o("WAWebAddonPluginProcessor").getAddonProcessor(
                  i.decryptedMsgData,
                );
                R.convert.toDualEncryptedMsgData != null &&
                  (i.encryptedMsgData = yield R.convert.toDualEncryptedMsgData(
                    i.decryptedMsgData,
                    i.parent,
                  ));
              }
              (a === o("WAWebAddonConstants").AddonProcessMode.Send ||
                a === o("WAWebAddonConstants").AddonProcessMode.SendRetry) &&
                (yield o("WAWebAddonProcessMsgs").processOutgoingMsg(
                  a,
                  i.encryptedMsgData,
                  v,
                  n,
                ));
            }
            yield o("WAWebAddonRetryRequestUtils").storeSelfMessageTypeRow(
              i.decryptedMsgData,
            );
            var L =
              i.parent.broadcastId != null &&
              r("WAWebWid").isWid(i.parent.broadcastId) &&
              !!((l = i.parent.broadcastId) != null && l.isBroadcastList());
            if (L) {
              var E = o("WAWebReferentialMsgKey").getReferentialMsgKey(
                i.parent,
              );
              i.encryptedMsgData = o(
                "WAWebAddonProcessMsgsUtils",
              ).updateMsgParentKeyValue(i.encryptedMsgData, E);
            }
            var k = yield o("WAWebSendMsgJob").encryptAndSendMsg(
                {
                  type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                  data: i.encryptedMsgData,
                },
                n,
              ),
              I = k.count,
              T = k.error,
              D = k.t;
            if (
              (L &&
                (i.encryptedMsgData = o(
                  "WAWebAddonProcessMsgsUtils",
                ).updateMsgParentKeyValue(i.encryptedMsgData, i.parent.id)),
              T != null)
            )
              throw new (o("WAWebHandleMsgError").MessageSentAckError)(T);
            if (g(i, D))
              throw (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "sendAddonMsgData: post-send validation failed, marking as failed",
                    ])),
                ),
                r("err")("Post-send validation failed")
              );
            return (
              yield p(
                babelHelpers.extends({}, i.decryptedMsgData, {
                  ack: f(i.encryptedMsgData),
                }),
                i.parent,
              ),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-infra]: sent ",
                    " addon, id: ",
                    "",
                  ])),
                i.decryptedMsgData.type,
                i.decryptedMsgData.id.id,
              ),
              { t: parseInt(D, 10), count: I }
            );
          } catch (e) {
            if (i == null) {
              if (C(t))
                try {
                  var x = yield o(
                      "WAWebAddonProcessMsgsUtils",
                    ).queryAddonParentMsgs([t], a),
                    $ = x[0],
                    P = o("WAWebAddonSelectUtils")
                      .createAddonParentSelector($)
                      .getForAddon(t);
                  yield p(
                    babelHelpers.extends({}, t, {
                      ack: o("WAWebAck").ACK.FAILED,
                    }),
                    P,
                  );
                } catch (e) {
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
              yield p(
                babelHelpers.extends({}, i.decryptedMsgData, {
                  ack: o("WAWebAck").ACK.FAILED,
                }),
                i.parent,
              ),
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sendAddonMsgData: failure, msg: ",
                    "",
                  ])),
                t.id.toString(),
              ),
              e
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    ((l.isOptimisticAddonSendSupported = C), (l.sendAddonProcess = b));
  },
  98,
);
