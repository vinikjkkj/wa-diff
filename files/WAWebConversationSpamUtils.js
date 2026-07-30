__d(
  "WAWebConversationSpamUtils",
  [
    "WALogger",
    "WASmaxGroupsAcknowledgeGroupRPC",
    "WAWebChatGetters",
    "WAWebNoop",
    "WAWebSendNotSpamAction",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return !e.trusted;
    }
    function u(t) {
      (r("WAWebSendNotSpamAction")(t, !0).catch(r("WAWebNoop")),
        o("WAWebChatGetters").getIsGroup(t) &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[callp] acknowledging group ",
                "",
              ])),
            t.id.toLogString(),
          ),
          o("WASmaxGroupsAcknowledgeGroupRPC")
            .sendAcknowledgeGroupRPC({
              iqTo: o("WAWebWidToJid").widToGroupJid(t.id),
            })
            .catch(r("WAWebNoop"))));
    }
    ((l.shouldShowSpamPanel = s), (l.acknowledgeGroupAsNotSpam = u));
  },
  98,
);
