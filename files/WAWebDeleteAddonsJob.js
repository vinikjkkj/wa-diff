__d(
  "WAWebDeleteAddonsJob",
  [
    "Promise",
    "WALogger",
    "WAWebAddonDeleteMsgs",
    "WAWebAddonGatingUtils",
    "WAWebDBDeleteReactions",
    "WAWebDBGetReactions",
    "WAWebDBMessageDelete",
    "WAWebDBPollsDeleteVotes",
    "WAWebDefinePersistedJob",
    "WAWebDeleteLastAddOnsPreview",
    "WAWebMsgKey",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep(
          "deleteAddOns",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = t.chatId,
                  a = t.parentMsgKeys;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "deleteAddons job started for ",
                      "",
                    ])),
                  r,
                );
                var i = [
                  o("WAWebAddonDeleteMsgs").deleteAddonMsgsByParentKeys({
                    parentMsgKeys: a,
                  }),
                ];
                (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
                  o("WAWebMsgType").MSG_TYPE.REACTION,
                ) || i.push(h({ chatId: r, parentMsgKeys: a })),
                  o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
                    o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
                  ) || i.push(C({ chatId: r, parentMsgKeys: a })));
                var l = yield (_ || (_ = n("Promise"))).allSettled(i);
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "deleteAddons job finished for ",
                      "",
                    ])),
                  r,
                );
                for (var u of l) if (u.status === "rejected") throw u.reason;
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        )
        .end(),
      g = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("deleteReactionsV2", function (e) {
          var t = e.chatId,
            n = e.parentMsgKeys;
          return h({ chatId: t, parentMsgKeys: n });
        })
        .end();
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.parentMsgKeys;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Persisted: deleteReactionsV2 persisted job started for ",
                "",
              ])),
            t,
          );
          var a = yield o("WAWebDBGetReactions").getAllReactionsFromParentMsgs(
              n,
            ),
            i = a.map(function (e) {
              return e.msgKey;
            });
          if (i.length === 0) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Persisted: deleteReactionsV2 finished, no reactionsMsgKeys",
                ])),
            );
            return;
          }
          var l = [];
          (i.forEach(function (e) {
            r("WAWebMsgKey").fromString(e).fromMe && l.push(e);
          }),
            l.length > 0 &&
              (yield o("WAWebDBMessageDelete").removeMessagesFromHistory(l, {
                deleteAssociatedMsgs: !1,
              })));
          var s = a.map(function (e) {
            return [e.parentMsgKey, e.senderUserJid];
          });
          (yield o("WAWebDBDeleteReactions").deleteReactionsByRecords(s),
            yield o("WAWebDeleteLastAddOnsPreview").deleteLastAddOnsPreview(n),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Persisted: deleteReactionsV2 finished",
                ])),
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.parentMsgKeys;
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Persisted: deletePollVotes job started for ",
                "",
              ])),
            t,
          ),
            yield o("WAWebDBPollsDeleteVotes").deleteVotesByParentMsgKeys(n),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Persisted: deletePollVotes job finished for ",
                  "",
                ])),
              t,
            ));
        })),
        b.apply(this, arguments)
      );
    }
    ((l.deleteAddOns = f), (l.deleteReactionsV2 = g));
  },
  98,
);
