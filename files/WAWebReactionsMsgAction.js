__d(
  "WAWebReactionsMsgAction",
  [
    "WAAbortError",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebAck",
    "WAWebAddOnsUpdateSendStatesAction",
    "WAWebAddonGatingUtils",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "WAWebMessageAddOnType",
    "WAWebMsgCollection",
    "WAWebMsgModel",
    "WAWebMsgReactionsBridge",
    "WAWebNotificationBackend",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebReactionDataUtils",
    "WAWebReactionNotificationUtils",
    "WAWebReactionsBEUtils",
    "WAWebReactionsCollection",
    "WAWebReactionsMsgActionUtils",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["senderUserJid"];
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.allowNotify,
            r = e.parentMsgKey,
            a = o("WAWebReactionDataUtils").reactionRowToReactionMsgData(e),
            i =
              !!n &&
              !o(
                "WAWebReactionNotificationUtils",
              ).nonHydratedShouldMuteReactionNotification(a),
            l;
          if (
            (i
              ? (l = yield o(
                  "WAWebReactionsCollection",
                ).ReactionsCollection.find(r))
              : (l = o(
                  "WAWebReactionsCollection",
                ).ReactionsCollection.getAddressingModeInsensitive(r)),
            l)
          ) {
            o(
              "WAWebReactionsCollection",
            ).ReactionsCollection.addOrUpdateReaction(e);
            var s = l.reactions.length > 0;
            yield o("WAWebMsgReactionsBridge").updateHasReactionInParent(r, s);
          } else
            e.reactionText !==
              o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT &&
              (yield o("WAWebMsgReactionsBridge").updateHasReactionInParent(
                r,
                !0,
              ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebDBCreateOrUpdateReactions",
            ).createOrUpdateReactions([e]),
            r = n[0];
          if (r) return (u(r, { allowNotify: t }), r);
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
          var n,
            r = t.senderUserJid,
            a = babelHelpers.objectWithoutPropertiesLoose(t, s),
            i =
              (n = o(
                "WAWebReactionsCollection",
              ).ReactionsCollection.getExistingSenderModelFromReactionDetails(
                a,
              )) != null
                ? n
                : o("WAWebMaybe").ifSome(
                    o("WAWebLidMigrationUtils").getAlternateMsgKey(a.msgKey),
                    function (e) {
                      return o(
                        "WAWebReactionsCollection",
                      ).ReactionsCollection.getExistingSenderModelFromReactionDetails(
                        babelHelpers.extends({}, a, { msgKey: e }),
                      );
                    },
                  );
          if (i == null) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "resendUpdateFailedPropsForSentReactionsDBAndModel: no model",
                ])),
            );
            return;
          }
          yield f(t, i.timestamp);
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
          var a = o("WAWebMsgCollection").MsgCollection.get(e.parentMsgKey),
            i = e.parentMsgKey,
            l = e.msgKey;
          if (a) {
            var s = i.remote,
              u = o("WAWebReactionsMsgActionUtils").getFromForReactionMessage(
                a,
              ),
              c = yield o("WAWebReactionsMsgActionUtils").getReactionMsgData(
                a,
                e.reactionText,
                u,
                l,
                Math.floor(t / 1e3),
                s,
                t,
              );
            if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(c)) {
              var d = yield o(
                "WAWebSendAddonMsgChatAction",
              ).addAndSendAddonToChat(c);
              if (
                d.messageSendResult !==
                o("WAWebSendMsgResultAction").SendMsgResult.OK
              )
                throw r("err")("Reaction send error");
              return;
            }
            var m = new (o("WAWebMsgModel").Msg)(c);
            return (
              yield o(
                "WAWebAddOnsUpdateSendStatesAction",
              ).updateAddOnSendStatesAction(
                new Map([
                  [
                    o("WAWebMessageAddOnType").MessageAddOnType.Reaction,
                    [
                      {
                        msgKey: e.msgKey.toString(),
                        ack: o("WAWebAck").ACK.CLOCK,
                        isSendFailure: !1,
                      },
                    ],
                  ],
                ]),
              ),
              o("WAWebOrchestratorNonPersistedJob")
                .createNonPersistedJob(
                  "sendMessage",
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    return o("WAWebSendMsgRecordAction").sendMsgRecord(m);
                  }),
                  {
                    priority: o("WAJobOrchestratorTypes").JOB_PRIORITY
                      .UI_ACTION,
                  },
                )
                .waitUntilCompleted()
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      for (var t of e) {
        var n = !o(
          "WAWebReactionNotificationUtils",
        ).nonHydratedShouldMuteReactionNotification(t);
        n &&
          o("WAWebNotificationBackend")
            .showReactionNotification(t)
            .catch(o("WAAbortError").catchAbort(function (e) {}));
      }
    }
    ((l.addOrUpdateReactionsModelCollection = u),
      (l.addOrUpdateReactions = d),
      (l.resendUpdateFailedPropsForSentReactionsDBAndModel = p),
      (l.handleReactionNotification = h));
  },
  98,
);
