__d(
  "WAWebSendNotSpamJob",
  [
    "WALogger",
    "WASmaxGroupsAcknowledgeGroupRPC",
    "WAWebChatGetters",
    "WAWebNoop",
    "WAWebSchemaChat",
    "WAWebWidToJid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return (
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
            .catch(r("WAWebNoop"))),
        o("WAWebSchemaChat")
          .getChatTable()
          .merge(t.id.toString(), { notSpam: !0 })
          .catch(function (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "get chat table merge failed",
                    ])),
                )
                .verbose()
                .sendLogs(
                  "get chat table merge failed when sending spam report",
                ),
              r("err")("get chat table merge failed")
            );
          })
      );
    }
    l.default = u;
  },
  98,
);
