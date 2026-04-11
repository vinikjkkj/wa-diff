__d(
  "WAWebNewsletterSendReactionAction",
  [
    "WAAckLevel",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebDBGetReactions",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgDataFromModel",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterReactionCollection",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterValidationUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebReactionsBEUtils",
    "WAWebReactionsMsgAction",
    "WAWebReactionsMsgActionUtils",
    "WAWebReactionsUtils",
    "WAWebSchemaMessage",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i =
              t instanceof r("WAWebMsgKey")
                ? [o("WAWebMsgCollection").MsgCollection.get(t), t]
                : [t, t.id],
            l = i[0],
            d = i[1];
          if (l == null)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterReaction] Could not find message for msgKey",
                  ])),
              ),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
            );
          var m = l.serverId;
          if (m == null)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterReaction] Message missing serverId",
                  ])),
              ),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
            );
          var _ = o("WAWebFrontendMsgGetters").getChat(l);
          if (!o("WAWebReactionsUtils").isNewsletterReactionAllowed(a, _))
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sendNewsletterReaction] emoji not allowed",
                  ])),
              ),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED
            );
          var f = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            g = _.id,
            h = o("WATimeUtils").unixTime(),
            y = h * 1e3,
            C = new (r("WAWebMsgKey"))({
              from: f,
              to: g,
              id: yield r("WAWebMsgKey").newId(),
            }),
            b = yield o("WAWebReactionsMsgActionUtils").getReactionMsgData(
              l,
              a,
              f,
              C,
              h,
              g,
              y,
            ),
            v = {
              msgKey: C.toString(),
              parentMsgKey: o("WAWebNewsletterDBUtils")
                .craftNewsletterMsgKeyFromServerId(m, g)
                .toString(),
              senderUserJid: f.toString(),
              reactionText: a,
              timestamp: y,
              orphan: 0,
              read: !0,
              ack: o("WAAckLevel").ACK.CLOCK,
            },
            S = new (o("WAWebMsgModel").Msg)(b);
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "sendNewsletterReaction",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o(
                  "WAWebDBGetReactions",
                ).existsReactionAddressingModeInsensitive({
                  parentMsgKey: v.parentMsgKey,
                  senderUserJid: v.senderUserJid,
                });
                a !== o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT &&
                  (yield p(l, S, { reactionCode: a }),
                  yield o("WAWebReactionsMsgAction").addOrUpdateReactions(
                    v,
                    !1,
                  ),
                  yield o(
                    "WAWebNewsletterBridgeApi",
                  ).NewsletterBridgeApi.updateChatPreviewFromReaction({
                    reactionMsgObj: v,
                    parentMsgKey: d,
                  }));
                try {
                  (e != null &&
                    (yield o("WAWebSchemaMessage")
                      .getMessageTable()
                      .remove(e.msgKey)),
                    yield o(
                      "WAWebNewsletterUpdateMsgsRecordsJob",
                    ).addNewsletterMsgsRecords([
                      o("WAWebMsgDataFromModel").msgDataFromMsgModel(S),
                    ]));
                  var t = yield o(
                    "WAWebNewsletterSendMessageJob",
                  ).sendNewsletterMessage({
                    type: "reaction",
                    reactionCode: a,
                    newsletterJid: o(
                      "WAWebNewsletterValidationUtils",
                    ).toNewsletterJidOrThrow(g.toJid()),
                    parentMsgServerId: m,
                    msg: S,
                  });
                  switch (t.success) {
                    case !0:
                      return (
                        yield p(l, S, {
                          reactionCode:
                            a ===
                            o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT
                              ? a
                              : null,
                          timestamp: t.ack.t,
                        }),
                        a ===
                          o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT &&
                          (yield o(
                            "WAWebReactionsMsgAction",
                          ).addOrUpdateReactions(v, !1),
                          yield o(
                            "WAWebNewsletterBridgeApi",
                          ).NewsletterBridgeApi.updateChatPreviewFromReaction({
                            reactionMsgObj: v,
                            parentMsgKey: d,
                          })),
                        o("WAWebSendMsgResultAction").SendMsgResult.OK
                      );
                    case !1:
                      return (
                        S.updateAck(o("WAAckLevel").ACK.FAILED),
                        o("WAWebSendMsgResultAction").SendMsgResult
                          .ERROR_NETWORK
                      );
                  }
                } catch (e) {
                  return (
                    o("WALogger")
                      .WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[newsletter] Failed to send reaction",
                          ])),
                      )
                      .tags("newsletter"),
                    S.updateAck(o("WAAckLevel").ACK.FAILED, void 0),
                    o("WAWebSendMsgResultAction").SendMsgResult.ERROR_NETWORK
                  );
                }
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.reactionCode,
            a = n.timestamp;
          if (
            (r != null &&
              o(
                "WAWebNewsletterReactionCollection",
              ).updateOrCreateMessageReaction({
                parentMsg: e,
                reactionMsg: t,
                reactionCode: r,
              }),
            a != null)
          ) {
            var i;
            ((i = o(
              "WAWebNewsletterReactionCollection",
            ).NewsletterMessageReactionsCollection.get(e.id)) == null ||
              i.set("myReactionTs", a),
              t.updateAck(o("WAAckLevel").ACK.SENT),
              yield o(
                "WAWebAddOnsUpdateSendStatesAction",
              ).maybeUpdateAddOnAckForMsgAction(t, o("WAAckLevel").ACK.SENT));
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.sendNewsletterReaction = d;
  },
  98,
);
