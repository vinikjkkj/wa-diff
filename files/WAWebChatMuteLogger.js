__d(
  "WAWebChatMuteLogger",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebChatMuteWamEvent",
    "WAWebMetaAiChatActionLogger",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumActionConducted",
    "WAWebWamEnumMuteChatType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")(
        "WAWebMetaAiChatActionIdentity",
      ).__setRef("WAWebChatMuteLogger");
    function d(e, t, n) {
      p(e, {
        actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED.MUTE,
        muteDuration: n,
        muteEntryPoint: t,
      });
    }
    function m(e, t) {
      p(e, {
        actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED
          .UNMUTE,
        muteEntryPoint: t,
      });
    }
    function p(t, n) {
      var r,
        a,
        i = o("WAWebMetaAiChatActionLogger").resolveMetaAiChatActionChatType(
          t.id,
        );
      if (
        i != null &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_action_logging_addition_enabled",
        )
      ) {
        _(t, n, i).catch(function () {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat-mute] meta-ai-commit-failed",
                ])),
            )
            .sendLogs("chat-mute-meta-ai-commit-failed");
        });
        return;
      }
      var l = o("WAWebChatGetters").getIsGroup(t);
      new (o("WAWebChatMuteWamEvent").ChatMuteWamEvent)(
        babelHelpers.extends(
          {},
          n,
          { muteChatType: y(t) },
          l
            ? {
                muteGroupSize:
                  (r =
                    (a = t.groupMetadata) == null ||
                    (a = a.participants) == null
                      ? void 0
                      : a.length) != null
                    ? r
                    : 0,
              }
            : {},
        ),
      ).commit();
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a,
            i =
              (r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
                ? void 0
                : r.toString(),
            l = yield g(e, n);
          if (
            ((a = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
              ? void 0
              : a.toString()) !== i
          ) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat-mute] account-changed",
                ])),
            );
            return;
          }
          var u = new (o("WAWebChatMuteWamEvent").ChatMuteWamEvent)(
            babelHelpers.extends({}, t, {
              muteChatType: o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE[n],
            }),
          );
          (l != null && (u.conversationThreadId = l), u.commit());
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield c.load();
            return yield n.getMetaAiConversationThreadId(e.id, t);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[chat-mute] thread-id-read-failed",
                    ])),
                )
                .sendLogs("chat-mute-thread-id-read-failed"),
              null
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.GROUP
        : o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.ONE_ON_ONE;
    }
    ((l.logChatMute = d), (l.logChatUnmute = m));
  },
  98,
);
