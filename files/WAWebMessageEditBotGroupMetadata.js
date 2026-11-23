__d(
  "WAWebMessageEditBotGroupMetadata",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      var r,
        o,
        a = { id: e.id, mentionedJidList: n },
        i = [
          f(a, e),
          h(a, t.messageContextInfo),
          h(
            a,
            (r = t.protocolMessage) == null || (r = r.editedMessage) == null
              ? void 0
              : r.messageContextInfo,
          ),
        ];
      return (o = i.find(C)) != null ? o : {};
    }
    async function c(e) {
      var t,
        n,
        r,
        a,
        i = e.id.remote.toString(),
        l = await Promise.all([
          o("WAWebSchemaParticipant").getParticipantTable().get(i),
          o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(i),
        ]),
        s = l[0],
        u = l[1],
        c = await o(
          "WAWebResolveGroupAgentParticipants",
        ).resolveGroupAgentParticipants(
          (t = s == null ? void 0 : s.participants) != null ? t : [],
        ),
        d = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
          {
            messageContextInfo: {
              botMetadata: {
                botGroupMetadata: o(
                  "WAWebGenerateBotGroupMetadata",
                ).generateBotGroupMetadata(
                  (n = e.botGroupParticipant) != null
                    ? n
                    : o("WAWebBotGroupGatingUtils").getSendGroupBotParticipant(
                        u,
                      ),
                ),
              },
            },
          },
          c,
        ),
        m = d.messageContextInfo,
        p =
          (r =
            m == null ||
            (a = m.botMetadata) == null ||
            (a = a.botGroupMetadata) == null
              ? void 0
              : a.participantsMetadata) != null
            ? r
            : [];
      return h(
        e,
        g(
          p.flatMap(function (e) {
            var t = e.botFbid;
            return t != null ? [t] : [];
          }),
        ),
      );
    }
    async function d(t) {
      if (
        !t.id.remote.isGroup() ||
        !o("WAWebMsgGetters").getIsSentByMeFromWeb(t)
      )
        return t;
      try {
        var n = await c(t),
          a = n.botGroupParticipant,
          i = n.botGroupParticipants;
        return babelHelpers.extends({}, t, {
          botGroupParticipant: a != null ? a : null,
          botGroupParticipants: i != null ? i : null,
        });
      } catch (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-edit] own edit BotGroupMetadata failed",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("message-edit-own-bot-group-metadata-failed"),
          t
        );
      }
    }
    function m(e, t, n) {
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
    function p(e) {
      e.forEach(function (e) {
        var t = e.editedMsgData,
          n = e.isLatest,
          a = e.parentMsg;
        if (!(!n || t.botGroupParticipants === void 0))
          try {
            _(a.id, t.botGroupParticipants, t.botGroupParticipant);
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[message-edit] bot group gossip cache update failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("message-edit-bot-group-gossip-cache-failed");
          }
      });
    }
    function _(e, t, n) {
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
    function f(e, t) {
      var n = y(t);
      if (n.botGroupParticipants == null) return n;
      var r = h(
        e,
        g(
          n.botGroupParticipants.map(function (e) {
            return e.user;
          }),
        ),
      );
      return C(r) ? r : n;
    }
    function g(e) {
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
    function h(e, t) {
      var n,
        r = {
          id: e.id,
          mentionedJidList: (n = e.mentionedJidList) != null ? n : void 0,
        };
      return (
        o("WAWebBotMetadataProtoUtils").parseBotMetadataProto(r, t, !0),
        y(r)
      );
    }
    function y(e) {
      var t, n;
      return C(e)
        ? {
            botGroupParticipant: (t = e.botGroupParticipant) != null ? t : null,
            botGroupParticipants:
              (n = e.botGroupParticipants) != null ? n : null,
          }
        : {};
    }
    function C(e) {
      return e.botGroupParticipant != null || e.botGroupParticipants != null;
    }
    ((l.getReceivedEditBotGroupMetadata = u),
      (l.getOwnEditBotGroupMetadata = c),
      (l.addOwnEditBotGroupMetadata = d),
      (l.applyEditedBotGroupMetadata = m),
      (l.updateBotGroupGossipCache = p));
  },
  98,
);
