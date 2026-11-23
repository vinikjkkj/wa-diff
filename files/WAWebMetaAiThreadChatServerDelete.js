__d(
  "WAWebMetaAiThreadChatServerDelete",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBotProduct",
    "WAWebMetaAiThreadServerDeleteJob",
    "WAWebPersistBotProfiles",
    "WAWebResolveBotProfile",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t = _(e),
        n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return t == null || n == null
        ? null
        : { botFbid: t, originLid: n.toString() };
    }
    async function m(t, n) {
      var r = n.botFbid,
        a = n.originLid;
      if (!p(a)) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[meta-ai-thread-server-delete] account-changed-before-enqueue",
            ])),
        );
        return;
      }
      if (await f(r)) {
        if (!p(a)) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[meta-ai-thread-server-delete] account-changed-during-enqueue",
              ])),
          );
          return;
        }
        await g(t);
      }
    }
    function p(e) {
      var t;
      return (
        ((t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.toString()) === e
      );
    }
    function _(e) {
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
    async function f(e) {
      try {
        return (
          await o(
            "WAWebMetaAiThreadServerDeleteJob",
          ).enqueueMetaAiThreadServerDelete(e),
          !0
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[meta-ai-thread-server-delete] enqueue-failed",
                ])),
            )
            .sendLogs("meta-ai-thread-server-delete-enqueue-failed"),
          !1
        );
      }
    }
    async function g(e) {
      try {
        await o("WAWebPersistBotProfiles").mergeBotSupportFields(e, {
          isDeleted: !0,
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[meta-ai-thread-server-delete] local-tombstone-failed",
              ])),
          )
          .sendLogs("meta-ai-thread-local-tombstone-failed");
      }
    }
    ((l.getMetaAiThreadServerDelete = d),
      (l.completeMetaAiThreadServerDelete = m),
      (l.getMetaAiThreadServerDeleteBotFbid = _),
      (l.persistMetaAiThreadServerDelete = f),
      (l.tombstoneDeletedMetaAiThread = g));
  },
  98,
);
