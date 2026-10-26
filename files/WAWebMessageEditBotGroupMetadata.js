__d(
  "WAWebMessageEditBotGroupMetadata",
  [
    "Promise",
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotMetadataProtoUtils",
    "WAWebGenerateBotGroupMetadata",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsmsgMsgSecretCache",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      var r,
        o,
        a = { id: e.id, mentionedJidList: n },
        i = [
          y(a, e),
          b(a, t.messageContextInfo),
          b(
            a,
            (r = t.protocolMessage) == null || (r = r.editedMessage) == null
              ? void 0
              : r.messageContextInfo,
          ),
        ];
      return (o = i.find(S)) != null ? o : {};
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r,
            a,
            i,
            l = e.id.remote.toString(),
            s = yield (u || (u = n("Promise"))).all([
              o("WAWebSchemaParticipant").getParticipantTable().get(l),
              o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(l),
            ]),
            c = s[0],
            d = s[1],
            m = yield o(
              "WAWebResolveGroupAgentParticipants",
            ).resolveGroupAgentParticipants(
              (t = c == null ? void 0 : c.participants) != null ? t : [],
            ),
            p = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
              {
                messageContextInfo: {
                  botMetadata: {
                    botGroupMetadata: o(
                      "WAWebGenerateBotGroupMetadata",
                    ).generateBotGroupMetadata(
                      (r = e.botGroupParticipant) != null
                        ? r
                        : o(
                            "WAWebBotGroupGatingUtils",
                          ).getSendGroupBotParticipant(d),
                    ),
                  },
                },
              },
              m,
            ),
            _ = p.messageContextInfo,
            f =
              (a =
                _ == null ||
                (i = _.botMetadata) == null ||
                (i = i.botGroupMetadata) == null
                  ? void 0
                  : i.participantsMetadata) != null
                ? a
                : [];
          return b(
            e,
            C(
              f.flatMap(function (e) {
                var t = e.botFbid;
                return t != null ? [t] : [];
              }),
            ),
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !e.id.remote.isGroup() ||
            !o("WAWebMsgGetters").getIsSentByMeFromWeb(e)
          )
            return e;
          try {
            var t = yield d(e),
              n = t.botGroupParticipant,
              a = t.botGroupParticipants;
            return babelHelpers.extends({}, e, {
              botGroupParticipant: n != null ? n : null,
              botGroupParticipants: a != null ? a : null,
            });
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[message-edit] own edit BotGroupMetadata failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("message-edit-own-bot-group-metadata-failed"),
              e
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      var r, o;
      if (t.id.remote.isGroup()) {
        var a = n.botResponseTargetId != null;
        (n.botGroupParticipants == null && !a) ||
          ((e.botGroupParticipant =
            (r = n.botGroupParticipant) != null ? r : null),
          (e.botGroupParticipants =
            (o = n.botGroupParticipants) != null ? o : null));
      }
    }
    function g(t) {
      t.forEach(function (t) {
        var n = t.editedMsgData,
          a = t.isLatest,
          i = t.parentMsg;
        if (!(!a || n.botGroupParticipants === void 0))
          try {
            h(i.id, n.botGroupParticipants, n.botGroupParticipant);
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit] bot group gossip cache update failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("message-edit-bot-group-gossip-cache-failed");
          }
      });
    }
    function h(e, t, n) {
      var r = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(t, n);
      [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)].forEach(
        function (e) {
          if (e != null) {
            if (r == null) {
              o(
                "WAWebMsmsgMsgSecretCache",
              ).msmsgBotGroupGossipDataCache.deleteMsmsgBotGroupGossipDataFromCache(
                e.toString(),
              );
              return;
            }
            o(
              "WAWebMsmsgMsgSecretCache",
            ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
              e.toString(),
              r.participants,
              r.isLegacySingular,
            );
          }
        },
      );
    }
    function y(e, t) {
      var n = v(t);
      if (n.botGroupParticipants == null) return n;
      var r = b(
        e,
        C(
          n.botGroupParticipants.map(function (e) {
            return e.user;
          }),
        ),
      );
      return S(r) ? r : n;
    }
    function C(e) {
      return {
        botMetadata: {
          botGroupMetadata: {
            participantsMetadata: e.map(function (e) {
              return { botFbid: e };
            }),
          },
        },
        threadId: [],
      };
    }
    function b(e, t) {
      var n,
        r = {
          id: e.id,
          mentionedJidList: (n = e.mentionedJidList) != null ? n : void 0,
        };
      return (
        o("WAWebBotMetadataProtoUtils").parseBotMetadataProto(r, t, !0),
        v(r)
      );
    }
    function v(e) {
      var t, n;
      return S(e)
        ? {
            botGroupParticipant: (t = e.botGroupParticipant) != null ? t : null,
            botGroupParticipants:
              (n = e.botGroupParticipants) != null ? n : null,
          }
        : {};
    }
    function S(e) {
      return e.botGroupParticipant != null || e.botGroupParticipants != null;
    }
    ((l.getReceivedEditBotGroupMetadata = c),
      (l.getOwnEditBotGroupMetadata = d),
      (l.addOwnEditBotGroupMetadata = p),
      (l.applyEditedBotGroupMetadata = f),
      (l.updateBotGroupGossipCache = g));
  },
  98,
);
