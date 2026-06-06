__d(
  "WAWebDeleteAddonsJob",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("deleteAddOns", async function (t) {
          var n = t.chatId,
            r = t.parentMsgKeys;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "deleteAddons job started for ",
                "",
              ])),
            n,
          );
          var a = [
            o("WAWebAddonDeleteMsgs").deleteAddonMsgsByParentKeys({
              parentMsgKeys: r,
            }),
          ];
          (o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
            o("WAWebMsgType").MSG_TYPE.REACTION,
          ) || a.push(g({ chatId: n, parentMsgKeys: r })),
            o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
              o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            ) || a.push(h({ chatId: n, parentMsgKeys: r })));
          var i = await Promise.allSettled(a);
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "deleteAddons job finished for ",
                "",
              ])),
            n,
          );
          for (var l of i) if (l.status === "rejected") throw l.reason;
        })
        .end(),
      f = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("deleteReactionsV2", function (e) {
          var t = e.chatId,
            n = e.parentMsgKeys;
          return g({ chatId: t, parentMsgKeys: n });
        })
        .end();
    async function g(e) {
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
      var a = await o("WAWebDBGetReactions").getAllReactionsFromParentMsgs(n),
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
          (await o("WAWebDBMessageDelete").removeMessagesFromHistory(l, {
            deleteAssociatedMsgs: !1,
          })));
      var s = a.map(function (e) {
        return [e.parentMsgKey, e.senderUserJid];
      });
      (await o("WAWebDBDeleteReactions").deleteReactionsByRecords(s),
        await o("WAWebDeleteLastAddOnsPreview").deleteLastAddOnsPreview(n),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "Persisted: deleteReactionsV2 finished",
            ])),
        ));
    }
    async function h(e) {
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
        await o("WAWebDBPollsDeleteVotes").deleteVotesByParentMsgKeys(n),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "Persisted: deletePollVotes job finished for ",
              "",
            ])),
          t,
        ));
    }
    ((l.deleteAddOns = _), (l.deleteReactionsV2 = f));
  },
  98,
);
