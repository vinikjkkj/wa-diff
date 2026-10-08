__d(
  "WAWebMessageEditBotGroupMetadata",
  [
    "Promise",
    "WAWebBotGroupGatingUtils",
    "WAWebBotMetadataProtoUtils",
    "WAWebGenerateBotGroupMetadata",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      var r,
        o,
        a = { id: e.id, mentionedJidList: n },
        i = [
          d(a, e),
          p(a, t.messageContextInfo),
          p(
            a,
            (r = t.protocolMessage) == null || (r = r.editedMessage) == null
              ? void 0
              : r.messageContextInfo,
          ),
        ];
      return (o = i.find(f)) != null ? o : {};
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a,
            i,
            l,
            s = t.id.remote.toString(),
            u = yield (e || (e = n("Promise"))).all([
              o("WAWebSchemaParticipant").getParticipantTable().get(s),
              o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(s),
            ]),
            c = u[0],
            d = u[1],
            _ = yield o(
              "WAWebResolveGroupAgentParticipants",
            ).resolveGroupAgentParticipants(
              (r = c == null ? void 0 : c.participants) != null ? r : [],
            ),
            f = o("WAWebGenerateBotGroupMetadata").addGroupAgentBotMetadata(
              {
                messageContextInfo: {
                  botMetadata: {
                    botGroupMetadata: o(
                      "WAWebGenerateBotGroupMetadata",
                    ).generateBotGroupMetadata(
                      (a = t.botGroupParticipant) != null
                        ? a
                        : o(
                            "WAWebBotGroupGatingUtils",
                          ).getSendGroupBotParticipant(d),
                    ),
                  },
                },
              },
              _,
            ),
            g = f.messageContextInfo,
            h =
              (i =
                g == null ||
                (l = g.botMetadata) == null ||
                (l = l.botGroupMetadata) == null
                  ? void 0
                  : l.participantsMetadata) != null
                ? i
                : [];
          return p(
            t,
            m(
              h.flatMap(function (e) {
                var t = e.botFbid;
                return t != null ? [t] : [];
              }),
            ),
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      var n = _(t);
      if (n.botGroupParticipants == null) return n;
      var r = p(
        e,
        m(
          n.botGroupParticipants.map(function (e) {
            return e.user;
          }),
        ),
      );
      return f(r) ? r : n;
    }
    function m(e) {
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
    function p(e, t) {
      var n,
        r = {
          id: e.id,
          mentionedJidList: (n = e.mentionedJidList) != null ? n : void 0,
        };
      return (
        o("WAWebBotMetadataProtoUtils").parseBotMetadataProto(r, t, !0),
        _(r)
      );
    }
    function _(e) {
      var t, n;
      return f(e)
        ? {
            botGroupParticipant: (t = e.botGroupParticipant) != null ? t : null,
            botGroupParticipants:
              (n = e.botGroupParticipants) != null ? n : null,
          }
        : {};
    }
    function f(e) {
      return e.botGroupParticipant != null || e.botGroupParticipants != null;
    }
    ((l.getReceivedEditBotGroupMetadata = s),
      (l.getOwnEditBotGroupMetadata = u));
  },
  98,
);
