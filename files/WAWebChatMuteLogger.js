__d(
  "WAWebChatMuteLogger",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebChatGetters",
    "WAWebChatMuteWamEvent",
    "WAWebMetaAiChatActionLogger",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumActionConducted",
    "WAWebWamEnumMuteChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("JSResourceForInteraction")(
        "WAWebMetaAiConversationThreadId",
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
      if (i != null) {
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
          { muteChatType: g(t) },
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
    async function _(e, t, n) {
      var r,
        a,
        i =
          (r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : r.toString(),
        l = await f(e, n);
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
    }
    async function f(e, t) {
      try {
        var n = await c.load();
        return await n.getMetaAiConversationThreadId(e.id, t);
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
    }
    function g(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.GROUP
        : o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.ONE_ON_ONE;
    }
    ((l.logChatMute = d), (l.logChatUnmute = m));
  },
  98,
);
