__d(
  "WAWebMetaAiThreadChatServerDelete",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBotProduct",
    "WAWebMetaAiThreadServerDeleteJob",
    "WAWebPersistBotProfiles",
    "WAWebResolveBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e, t) {
      (await d(t)) && (await m(e));
    }
    function c(e) {
      if (!e.isFbidBot()) return null;
      var t = o("WAWebResolveBotProfile").resolveBotSupportInput(e);
      return t == null ||
        t.isDeleted === !0 ||
        o("WAWebBotProduct").botProductFromServerValue(t.product) !==
          o("WAWebBotProduct").BotProduct.META_AI_THREAD ||
        !o("WAWebABProps").getABPropConfigValue(
          "ai_meta_ai_thread_server_delete_enabled",
        )
        ? null
        : e.user;
    }
    async function d(t) {
      try {
        return (
          await o(
            "WAWebMetaAiThreadServerDeleteJob",
          ).enqueueMetaAiThreadServerDelete(t),
          !0
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[meta-ai-thread-server-delete] enqueue-failed",
                ])),
            )
            .sendLogs("meta-ai-thread-server-delete-enqueue-failed"),
          !1
        );
      }
    }
    async function m(e) {
      try {
        await o("WAWebPersistBotProfiles").mergeBotSupportFields(e, {
          isDeleted: !0,
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[meta-ai-thread-server-delete] local-tombstone-failed",
              ])),
          )
          .sendLogs("meta-ai-thread-local-tombstone-failed");
      }
    }
    ((l.completeMetaAiThreadServerDelete = u),
      (l.getMetaAiThreadServerDeleteBotFbid = c),
      (l.persistMetaAiThreadServerDelete = d),
      (l.tombstoneDeletedMetaAiThread = m));
  },
  98,
);
