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
    function _(e) {
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = e.id,
        n = t.remote;
      return t.fromMe && o("WAWebUserPrefsMeUser").isMePrimary(n)
        ? o("WAWebAck").ACK.READ
        : o("WAWebAck").ACK.SENT;
    }
    function y(e, t) {
      if (e.decryptedMsgData.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE) {
        var n = o("WAWebMsgGetters").getPollEndTime(e.parent),
          r = parseInt(t, 10) * 1e3;
        if (n != null && r > n) return !0;
      }
      return !1;
    }
    var C = new Set([
      o("WAWebAddonConstants").AddonProcessMode.Send,
      o("WAWebAddonConstants").AddonProcessMode.SendRetry,
      o("WAWebAddonConstants").AddonProcessMode.SendRevoke,
    ]);
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            yield f(
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
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              a = yield o(
                "WAWebAddonProcessMsgs",
              ).processOutgoingMsgOptimisticUpdate(n, e);
            else {
              var g;
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
                (g = l.participant) == null ? void 0 : g.isLid(),
              );
              var b = yield o(
                  "WAWebAddonProcessMsgsUtils",
                ).queryAddonParentMsgs([e], n),
                v = b[0],
                S = b[1];
              if (
                ((a = {
                  encryptedMsgData: S[0],
                  decryptedMsgData: S[0],
                  parent: o("WAWebAddonSelectUtils")
                    .createAddonParentSelector(v)
                    .getForAddon(S[0]),
                }),
                n === o("WAWebAddonConstants").AddonProcessMode.SendRetry &&
                  e.type === o("WAWebMsgType").MSG_TYPE.COMMENT)
              ) {
                var R = o("WAWebAddonPluginProcessor").getAddonProcessor(
                  a.decryptedMsgData,
                );
                R.convert.toDualEncryptedMsgData != null &&
                  (a.encryptedMsgData = yield R.convert.toDualEncryptedMsgData(
                    a.decryptedMsgData,
                    a.parent,
                  ));
              }
              ((a = _(a)),
                (n === o("WAWebAddonConstants").AddonProcessMode.Send ||
                  n === o("WAWebAddonConstants").AddonProcessMode.SendRetry) &&
                  (yield o("WAWebAddonProcessMsgs").processOutgoingMsg(
                    n,
                    a.encryptedMsgData,
                    v,
                    t,
                  )));
            }
            yield o("WAWebAddonRetryRequestUtils").storeSelfMessageTypeRow(
              a.decryptedMsgData,
            );
            var L =
              a.parent.broadcastId != null &&
              r("WAWebWid").isWid(a.parent.broadcastId) &&
              !!((i = a.parent.broadcastId) != null && i.isBroadcastList());
            if (L) {
              var E = o("WAWebReferentialMsgKey").getReferentialMsgKey(
                a.parent,
              );
              a.encryptedMsgData = o(
                "WAWebAddonProcessMsgsUtils",
              ).updateMsgParentKeyValue(a.encryptedMsgData, E);
            }
            var k = yield o("WAWebSendMsgJob").encryptAndSendMsg(
                {
                  type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                  data: a.encryptedMsgData,
                },
                t,
              ),
              I = k.count,
              T = k.error,
              D = k.t;
            if (
              (L &&
                (a.encryptedMsgData = o(
                  "WAWebAddonProcessMsgsUtils",
                ).updateMsgParentKeyValue(a.encryptedMsgData, a.parent.id)),
              T != null)
            )
              throw new (o("WAWebHandleMsgError").MessageSentAckError)(T);
            if (y(a, D))
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
              yield f(
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
              { t: parseInt(D, 10), count: I }
            );
          } catch (t) {
            if (a == null) {
              if (o("WAWebAddonSendMsgData").isOptimisticAddonSendSupported(e))
                try {
                  var x = yield o(
                      "WAWebAddonProcessMsgsUtils",
                    ).queryAddonParentMsgs([e], n),
                    $ = x[0],
                    P = o("WAWebAddonSelectUtils")
                      .createAddonParentSelector($)
                      .getForAddon(e);
                  yield f(
                    babelHelpers.extends({}, e, {
                      ack: o("WAWebAck").ACK.FAILED,
                    }),
                    P,
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
              yield f(
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
        R.apply(this, arguments)
      );
    }
    ((l.markAddonSendFailed = b), (l.sendAddonProcess = S));
  },
  98,
);
