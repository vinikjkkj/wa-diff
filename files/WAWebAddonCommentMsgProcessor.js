__d(
  "WAWebAddonCommentMsgProcessor",
  [
    "WAWebAddonConstants",
    "WAWebAddonCreateMsgProcessor",
    "WAWebApiLatestChatBulkUpdates",
    "WAWebBackendApi",
    "WAWebBoolFunc",
    "WAWebCommentParseWebMsgInfoComment",
    "WAWebCommentUtils",
    "WAWebDBCommentMessageSerialization",
    "WAWebLastAddOnDBSerialization",
    "WAWebMsgType",
    "WAWebShouldUpdateLastAddOnPreview",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o(
        "WAWebAddonCreateMsgProcessor",
      ).createAddonMessageProcessorDualEncryptedWithMessageTraits({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
          fromHistorySyncMsg: function (t) {
            var e = o(
              "WAWebCommentParseWebMsgInfoComment",
            ).parseWebMsgInfoComment(t);
            return Promise.resolve(e);
          },
          toDualEncryptedMsgData: async function (t, n) {
            return t.kind === o("WAWebMsgType").MsgKind.CommentEncrypted
              ? t
              : o("WAWebCommentUtils").commentMsgDataToEncCommentMsgData(t, n);
          },
          toDualDecryptedMsgData: async function (t, n) {
            return t.kind === o("WAWebMsgType").MsgKind.CommentDecrypted
              ? t
              : o("WAWebCommentUtils").encCommentMsgDataToCommentMsgData(t, n);
          },
        },
        updateCollection: async function (t) {
          await o("WAWebBackendApi").frontendSendAndReceive(
            "upsertCommentModelCollection",
            { comments: t.add, commentsToRemove: t.remove },
          );
        },
        beforeUpsert: async function (n, r) {
          var t = r.parents,
            a = [];
          for (var i of n)
            if (i.kind === o("WAWebMsgType").MsgKind.CommentEncrypted) {
              var l = await e.convert.toDualDecryptedMsgData(
                i,
                t.getForAddon(i),
              );
              a.push(l);
            } else a.push(i);
          return a;
        },
        afterUpsert: async function (t, n) {
          var e = n.existingPlaceholderKeys,
            r = n.parents,
            a = n.processMode;
          if (
            a !== o("WAWebAddonConstants").AddonProcessMode.SendRetry &&
            (await o(
              "WAWebShouldUpdateLastAddOnPreview",
            ).filterAndUpdateChatPreviews(
              t.map(function (e) {
                return o(
                  "WAWebLastAddOnDBSerialization",
                ).lastAddOnPreviewCandidateFromCommentRowType(
                  o(
                    "WAWebDBCommentMessageSerialization",
                  ).dbRowFromCommentMessage(e),
                );
              }),
            ),
            a !== o("WAWebAddonConstants").AddonProcessMode.HistorySync)
          ) {
            var i =
              e.size > 0
                ? t.filter(function (t) {
                    return !e.has(t.id.toString());
                  })
                : t;
            await o("WAWebCommentUtils").updateReplyCount(i, r, []);
            var l = await o("WAWebCommentUtils").genChatIdToLastTimestamp(t);
            (await o("WAWebApiLatestChatBulkUpdates").latestChatBulkUpdates(l),
              o("WAWebBackendApi").frontendFireAndForget("updateChatToLatest", {
                chatIdToLatestUpdates: l,
              }));
          }
        },
        manageNotifications: async function (t) {
          o("WAWebBackendApi").frontendFireAndForget(
            "handleCommentNotification",
            { comments: t.add, revokes: t.remove },
          );
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
