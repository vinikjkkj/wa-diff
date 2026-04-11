__d(
  "WAWebConversationSpamUtils",
  [
    "WALogger",
    "WASmaxGroupsAcknowledgeGroupRPC",
    "WAWebChatGetters",
    "WAWebNoop",
    "WAWebSendNotSpamAction",
    "WAWebStateUtils",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return (
        !e.trusted &&
        !o("WAWebStateUtils")
          .unproxy(e)
          .msgs.getModelsArray()
          .some(function (e) {
            return e.subtype === "contact_info_card";
          })
      );
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
