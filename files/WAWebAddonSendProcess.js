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
    "WAWebSendMsgJob",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = e.id,
        n = t.remote;
      return t.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(n)
        ? o("WAWebAck").ACK.READ
        : o("WAWebAck").ACK.SENT;
    }
    function h(e, t) {
      if (e.decryptedMsgData.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) {
        var n = o("WAWebMsgGetters").getPollEndTime(e.parent),
          r = parseInt(t, 10) * 1e3;
        if (n != null && r > n) return !0;
      }
      return !1;
    }
    var y = new Set([
      o("WAWebAddonConstants").AddonProcessMode.Send,
      o("WAWebAddonConstants").AddonProcessMode.SendRetry,
      o("WAWebAddonConstants").AddonProcessMode.SendRevoke,
    ]);
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n =
                t.ack === o("WAWebAck").ACK.FAILED
                  ? o("WAWebAddonConstants").AddonProcessMode.SendRetry
                  : o("WAWebAddonConstants").AddonProcessMode.Send,
              r = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
                [t],
                n,
              ),
              a = r[0],
              i = o("WAWebAddonSelectUtils")
                .createAddonParentSelector(a)
                .getForAddon(t);
            yield _(
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
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebAddonConstants").AddonProcessMode.Send;
          (e.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke &&
            (n = o("WAWebAddonConstants").AddonProcessMode.SendRevoke),
            e.ack === o("WAWebAck").ACK.FAILED &&
              (n = o("WAWebAddonConstants").AddonProcessMode.SendRetry));
          var a;
          try {
            var i;
            if (!y.has(n))
              throw new (o("WAWebAddonInfraError").AddonInfraError)(
                o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
              );
            var l = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(e);
            if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e))
              a = yield o(
                "WAWebAddonProcessMsgs",
              ).processOutgoingMsgOptimisticUpdate(n, e);
            else {
              var f;
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
                (f = l.participant) == null ? void 0 : f.isLid(),
              );
              var C = yield o(
                  "WAWebAddonProcessMsgsUtils",
                ).queryAddonParentMsgs([e], n),
                b = C[0],
                v = C[1];
              if (
                ((a = {
                  encryptedMsgData: v[0],
                  decryptedMsgData: v[0],
                  parent: o("WAWebAddonSelectUtils")
                    .createAddonParentSelector(b)
                    .getForAddon(v[0]),
                }),
                n === o("WAWebAddonConstants").AddonProcessMode.SendRetry &&
                  e.type === o("WAWebMsgType").MSG_TYPE.COMMENT)
              ) {
                var S = o("WAWebAddonPluginProcessor").getAddonProcessor(
                  a.decryptedMsgData,
                );
                S.convert.toDualEncryptedMsgData != null &&
                  (a.encryptedMsgData = yield S.convert.toDualEncryptedMsgData(
                    a.decryptedMsgData,
                    a.parent,
                  ));
              }
              (n === o("WAWebAddonConstants").AddonProcessMode.Send ||
                n === o("WAWebAddonConstants").AddonProcessMode.SendRetry) &&
                (yield o("WAWebAddonProcessMsgs").processOutgoingMsg(
                  n,
                  a.encryptedMsgData,
                  b,
                  t,
                ));
            }
            yield o("WAWebAddonRetryRequestUtils").storeSelfMessageTypeRow(
              a.decryptedMsgData,
            );
            var R =
              a.parent.broadcastId != null &&
              r("WAWebWid").isWid(a.parent.broadcastId) &&
              !!((i = a.parent.broadcastId) != null && i.isBroadcastList());
            if (R) {
              var L = o("WAWebReferentialMsgKey").getReferentialMsgKey(
                a.parent,
              );
              a.encryptedMsgData = o(
                "WAWebAddonProcessMsgsUtils",
              ).updateMsgParentKeyValue(a.encryptedMsgData, L);
            }
            var E = yield o("WAWebSendMsgJob").encryptAndSendMsg(
                {
                  type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                  data: a.encryptedMsgData,
                },
                t,
              ),
              k = E.count,
              I = E.error,
              T = E.t;
            if (
              (R &&
                (a.encryptedMsgData = o(
                  "WAWebAddonProcessMsgsUtils",
                ).updateMsgParentKeyValue(a.encryptedMsgData, a.parent.id)),
              I != null)
            )
              throw new (o("WAWebHandleMsgError").MessageSentAckError)(I);
            if (h(a, T))
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
              yield _(
                babelHelpers.extends({}, a.decryptedMsgData, {
                  ack: g(a.encryptedMsgData),
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
              { t: parseInt(T, 10), count: k }
            );
          } catch (t) {
            if (a == null) {
              if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e))
                try {
                  var D = yield o(
                      "WAWebAddonProcessMsgsUtils",
                    ).queryAddonParentMsgs([e], n),
                    x = D[0],
                    $ = o("WAWebAddonSelectUtils")
                      .createAddonParentSelector(x)
                      .getForAddon(e);
                  yield _(
                    babelHelpers.extends({}, e, {
                      ack: o("WAWebAck").ACK.FAILED,
                    }),
                    $,
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
              yield _(
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
        })),
        S.apply(this, arguments)
      );
    }
    ((l.markAddonSendFailed = C), (l.sendAddonProcess = v));
  },
  98,
);
