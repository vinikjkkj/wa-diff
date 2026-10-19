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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t = f(e),
        n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return t == null || n == null
        ? null
        : { botFbid: t, originLid: n.toString() };
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.botFbid,
            a = n.originLid;
          if (!_(a)) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[meta-ai-thread-server-delete] account-changed-before-enqueue",
                ])),
            );
            return;
          }
          if (yield g(r)) {
            if (!_(a)) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[meta-ai-thread-server-delete] account-changed-during-enqueue",
                  ])),
              );
              return;
            }
            yield y(t);
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t;
      return (
        ((t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
          ? void 0
          : t.toString()) === e
      );
    }
    function f(e) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return (
              yield o(
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebPersistBotProfiles").mergeBotSupportFields(e, {
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
        })),
        C.apply(this, arguments)
      );
    }
    ((l.getMetaAiThreadServerDelete = d),
      (l.completeMetaAiThreadServerDelete = m),
      (l.getMetaAiThreadServerDeleteBotFbid = f),
      (l.persistMetaAiThreadServerDelete = g),
      (l.tombstoneDeletedMetaAiThread = y));
  },
  98,
);
