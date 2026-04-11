__d(
  "WAWebAddonCommentMsgProcessor",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o(
        "WAWebAddonCreateMsgProcessor",
      ).createAddonMessageProcessorDualEncryptedWithMessageTraits({
        isEnabled: o("WAWebBoolFunc").returnTrue,
        convert: {
          fromHistorySyncMsg: function (r) {
            var t = o(
              "WAWebCommentParseWebMsgInfoComment",
            ).parseWebMsgInfoComment(r);
            return (e || (e = n("Promise"))).resolve(t);
          },
          toDualEncryptedMsgData: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return e.kind === o("WAWebMsgType").MsgKind.CommentEncrypted
                  ? e
                  : o("WAWebCommentUtils").commentMsgDataToEncCommentMsgData(
                      e,
                      t,
                    );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          toDualDecryptedMsgData: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return e.kind === o("WAWebMsgType").MsgKind.CommentDecrypted
                  ? e
                  : o("WAWebCommentUtils").encCommentMsgDataToCommentMsgData(
                      e,
                      t,
                    );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        updateCollection: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "upsertCommentModelCollection",
              { comments: e.add, commentsToRemove: e.remove },
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        beforeUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.parents,
                r = [];
              for (var a of e)
                if (a.kind === o("WAWebMsgType").MsgKind.CommentEncrypted) {
                  var i = yield s.convert.toDualDecryptedMsgData(
                    a,
                    n.getForAddon(a),
                  );
                  r.push(i);
                } else r.push(a);
              return r;
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        afterUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = t.existingPlaceholderKeys,
                r = t.parents,
                a = t.processMode;
              if (
                a !== o("WAWebAddonConstants").AddonProcessMode.SendRetry &&
                (yield o(
                  "WAWebShouldUpdateLastAddOnPreview",
                ).filterAndUpdateChatPreviews(
                  e.map(function (e) {
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
                  n.size > 0
                    ? e.filter(function (e) {
                        return !n.has(e.id.toString());
                      })
                    : e;
                yield o("WAWebCommentUtils").updateReplyCount(i, r, []);
                var l =
                  yield o("WAWebCommentUtils").genChatIdToLastTimestamp(e);
                (yield o("WAWebApiLatestChatBulkUpdates").latestChatBulkUpdates(
                  l,
                ),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateChatToLatest",
                    { chatIdToLatestUpdates: l },
                  ));
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        manageNotifications: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o("WAWebBackendApi").frontendFireAndForget(
              "handleCommentNotification",
              { comments: e.add, revokes: e.remove },
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      }),
      u = s;
    l.default = u;
  },
  98,
);
