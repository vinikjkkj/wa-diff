__d(
  "WAWebDeleteReactionsJob",
  [
    "WALogger",
    "WAWebDBDeleteReactions",
    "WAWebDBMessageDelete",
    "WAWebDefinePersistedJob",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .step("deleteReactions", function (t) {
          var n = t.chatId,
            r = t.parentMsgKeys;
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Persisted: deleteReaction persisted job started",
                ])),
            ),
            { chatId: n, parentMsgKeys: r }
          );
        })
        .step(
          "deleteReactionsFromReactionsTable",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.chatId,
                  n = e.parentMsgKeys,
                  r = yield o(
                    "WAWebDBDeleteReactions",
                  ).deleteReactionsByParentMessageKeys(n);
                return (
                  r ||
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[deleteReactions] Reactions tbl undefined, len=",
                        "",
                      ])),
                    n.length,
                  ),
                  [])
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .finalStep(
          "deleteReactionsFromMessageTable",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = t.chatId,
                  a = t.parentMsgKeys,
                  i = [];
                return (
                  e ||
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[deleteReactions] Msg tbl reactionKeys undef, len=",
                          "",
                        ])),
                      a.length,
                    ),
                  e.forEach(function (e) {
                    r("WAWebMsgKey").fromString(e).fromMe && i.push(e);
                  }),
                  i.length > 0 &&
                    (yield o("WAWebDBMessageDelete").removeMessagesFromHistory(
                      i,
                      { deleteAssociatedMsgs: !1 },
                    )),
                  e
                );
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .end();
    l.deleteReactions = c;
  },
  98,
);
