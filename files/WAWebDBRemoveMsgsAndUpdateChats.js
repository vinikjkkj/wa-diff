__d(
  "WAWebDBRemoveMsgsAndUpdateChats",
  [
    "WAArrayUtils",
    "WALogger",
    "WAWebApiChatUnreadMention",
    "WAWebBackendApi",
    "WAWebDBMessageDelete",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t) {
      var n = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            [
              "message",
              "label-association",
              "chat",
              "reporting-info",
              "message-association",
              "quarantine-data",
            ],
            async function () {
              var n = (
                await o("WAWebSchemaMessage").getMessageTable().bulkGet(e, !1)
              ).filter(Boolean);
              return (
                await o("WAWebDBMessageDelete").removeMessagesFromHistory(e),
                n.filter(t)
              );
            },
          ),
        a = o("WAArrayUtils").groupBy(n, function (e) {
          return r("WAWebMsgKey").fromString(e.id).remote.toString();
        });
      (u(a),
        await Promise.all(
          Array.from(a, function (e) {
            var t = e[0],
              n = e[1];
            return o("WAWebBackendApi")
              .frontendSendAndReceive("chatDeleteMessages", {
                chatId: t,
                messageIds: n.map(function (e) {
                  return e.id;
                }),
                removeLoaded: !0,
              })
              .catch(c("chat-delete-messages-failed"));
          }),
        ));
    }
    function u(e) {
      var t = new Map();
      (e.forEach(function (e, n) {
        var r = e
          .filter(function (e) {
            return o("WAWebMsgGetters").getIsImportantMessage(e);
          })
          .map(function (e) {
            return e.id;
          });
        r.length > 0 && t.set(n, r);
      }),
        t.size > 0 &&
          o("WAWebApiChatUnreadMention")
            .removeUnreadMentionChat(t)
            .catch(c("unread-mentions-cleanup-failed")));
    }
    function c(t) {
      return function (n) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "removeMessagesAndUpdateChats: ",
                "",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(n))
          .sendLogs(t);
      };
    }
    l.removeMessagesAndUpdateChats = s;
  },
  98,
);
