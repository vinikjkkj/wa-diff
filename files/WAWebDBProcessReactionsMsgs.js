__d(
  "WAWebDBProcessReactionsMsgs",
  [
    "WAWebApiBulkUpdateChatLastAddOnPreview",
    "WAWebBackendApi",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebDBMarkFutureproofMessagesReparsed",
    "WAWebLastAddOnDBSerialization",
    "WAWebReactionsBEUtils",
    "WAWebShouldUpdateLastAddOnPreview",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length > 0) {
            var t = yield o("WAWebReactionsBEUtils").createReactionsRowFromMsg(
                e,
              ),
              n = yield o(
                "WAWebDBCreateOrUpdateReactions",
              ).createOrUpdateReactions(t);
            o("WAWebReactionsBEUtils").updateHasReactionFromParent(n);
            var r = e.map(function (e) {
              return e.id.toString();
            });
            yield o(
              "WAWebDBMarkFutureproofMessagesReparsed",
            ).markFutureproofMessagesReparsed(r);
            var a = yield o(
              "WAWebShouldUpdateLastAddOnPreview",
            ).filterChatsWithAddOnPreviewUpdates(
              n.map(function (e) {
                return o(
                  "WAWebLastAddOnDBSerialization",
                ).lastAddOnPreviewCandidateFromReactionRowType(e);
              }),
            );
            (yield o(
              "WAWebApiBulkUpdateChatLastAddOnPreview",
            ).bulkUpdateChatLastAddOnPreview(a),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateChatLastAddOnPreview",
                { chatMap: a },
              ));
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.processReactionMsgs = e;
  },
  98,
);
