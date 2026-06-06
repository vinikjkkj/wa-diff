__d(
  "WAWebDebugMisc",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebClientFeatureFlags",
    "WAWebDebugUtils",
    "WAWebEmojiVariantCollection",
    "WAWebExternalLink.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebRecentEmojiCollection",
    "WAWebSchemaChat",
    "WAWebSendTextMsgChatAction",
    "WAWebSetUsernameJob",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "cr:10197",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return Math.floor(Math.random() * e);
    }
    ((d.doc = "Gimme a random numbuh"), (d.paramsToExecute = [100]));
    function m() {
      var e = !o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands");
      e === !0
        ? o("WAWebClientFeatureFlags").debugEnableFeatureFlag("debug_commands")
        : o("WAWebClientFeatureFlags").debugDisableFeatureFlag(
            "debug_commands",
          );
    }
    ((m.doc = "Toggle debug commands in compose box"),
      (m.paramsToExecute = []));
    function p() {
      o("WAWebRecentEmojiCollection").RecentEmojiCollection.reset();
    }
    ((p.doc = "Resets the recent emojis for the current session"),
      (p.paramsToExecute = []));
    function _() {
      o("WAWebEmojiVariantCollection").EmojiVariantCollection.reset();
    }
    ((_.doc = "Resets the currently selected emoji skin tones"),
      (_.paramsToExecute = []));
    function f() {
      return o("WAWebDebugUtils").getSelectedChat().id.toString();
    }
    ((f.doc = "Copies the current chat's ID to the clipboard"),
      (f.paramsToExecute = []),
      (f.displayName = "chat.id"));
    function g() {
      return o("WAWebBuildConstants").VERSION_STR;
    }
    ((g.doc = "Copies the current app's version to the clipboard"),
      (g.paramsToExecute = []),
      (g.displayName = "VERSION"));
    function h() {
      o("WAWebExternalLink.react").openExternalLink(
        "https://fburl.com/wa-wc-qa",
      );
    }
    ((h.doc = "Opens Intern Q&A to ask a question"),
      (h.paramsToExecute = []),
      (h.displayName = "\u2753Intern Q&A"));
    function y() {
      return Promise.all(
        o("WAWebChatCollection").ChatCollection.map(function (e) {
          if (o("WAWebChatGetters").getHasUnread(e))
            return o("WAWebUpdateUnreadChatAction").markSeen(e);
        }),
      ).then(r("WAWebNoop"));
    }
    ((y.doc = "Mark all chats as read"), (y.paramsToExecute = []));
    async function C() {
      var e = await r("JSResourceForInteraction")("WAWebShowroomModal.react")
          .__setRef("WAWebDebugMisc")
          .load(),
        t = e.openShowroom;
      t();
    }
    C.doc = "Open UI Showroom";
    function b() {
      (r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
        Date.now() - 15 * o("WATimeUtils").DAY_MILLISECONDS,
      ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "User set to INACTIVE Status User",
            ])),
        ));
    }
    b.doc =
      "Set the last usage of Status to 15 days in the past, so the user is considered inactive.";
    function v() {
      (r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.LAST_STATUS_USAGE,
        Date.now(),
      ),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "User set to ACTIVE Status User",
            ])),
        ));
    }
    v.doc =
      "Set the last usage of Status to now, so the user is considered active.";
    async function S() {
      var e = await o("WAWebSchemaChat").getChatTable().all();
      if (!(!e || e.length === 0)) {
        var t = e.map(function (e) {
          return { id: e.id, tcToken: null, tcTokenTimestamp: null };
        });
        await o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t);
      }
    }
    S.doc = "Deletes all received tokens";
    function R(e) {
      return n("cr:10197") == null
        ? void 0
        : n("cr:10197").getMessageByMsgId(e);
    }
    function L(e) {
      return n("cr:10197") == null
        ? void 0
        : n("cr:10197").getMessagesByParentMsgId(e);
    }
    async function E() {
      var e = await o("WAWebSchemaChat").getChatTable().all();
      if (!(!e || e.length === 0)) {
        var t = e.map(function (e) {
          return { id: e.id, tcTokenSenderTimestamp: null };
        });
        await o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t);
      }
    }
    E.doc = "Deletes all metadata related with the sent tokens";
    async function k(e, t) {
      var n = t,
        r = o("WAWebWidFactory").createWid(e + "@lid");
      await o("WAWebSetUsernameJob").setUsernamesJob([
        {
          userId: o("WAWebWidFactory").asUserWidOrThrow(r),
          username: o("WAWebUsernameTypes").asUsername(n),
        },
      ]);
      var a = o("WAWebChatCollection").ChatCollection.get(r);
      if (a) {
        var i = new Error("Existing chat found");
        throw (i.stack, i);
      }
      var l = o("WAWebChatCollection").ChatCollection.gadd(r);
      o("WAWebSendTextMsgChatAction")
        .sendTextMsgToChat(l, "Helloworld")
        .then(function () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "startUsernameChat: with ",
                " (LID: ",
                ") ",
              ])),
            t,
            e,
          );
        })
        .then(function () {
          var e = r.toString();
          return o("WAWebSchemaChat")
            .getChatTable()
            .createOrReplace({
              id: e,
              t: 1,
              unreadCount: 0,
              archive: !1,
              isReadOnly: !1,
              isAnnounceGrpRestrict: null,
              modifyTag: 0,
              muteExpiration: 0,
              isAutoMuted: !1,
              name: "",
              notSpam: !1,
              pin: null,
              changeNumberOldJid: null,
              changeNumberNewJid: null,
            });
        })
        .catch(function (e) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "startUsernameChat: error ",
                "",
              ])),
            String(e),
          );
        });
    }
    k.doc = "Start a username chat";
    function I() {
      var e = o("WAWebChatCollection").ChatCollection.filter(function (e) {
          return o("WAWebChatGetters").getHasUnread(e);
        }),
        t =
          e.length +
          ` unread chats:

`;
      e.forEach(function (e) {
        ((t +=
          "Chat: " +
          (e.contact.name || e.id.toString()) +
          `
`),
          (t +=
            "Unread count: " +
            e.unreadCount +
            `
`));
        var n = e.msgs.toArray(),
          r = n.filter(function (e) {
            return !e.ack || e.ack < 3;
          });
        (r.forEach(function (n) {
          if (n.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
            if (n.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
              t +=
                `<image>
` +
                (n.caption || "") +
                `
`;
              return;
            }
            if (
              o("WAWebChatGetters").getIsGroup(e) &&
              n.type === o("WAWebMsgType").MSG_TYPE.CHAT
            ) {
              var r,
                a = o("WAWebMsgGetters").getSender(n),
                i = a
                  ? ((r = e.groupMetadata) == null ||
                    (r = r.participants.get(a)) == null ||
                    (r = r.contact) == null
                      ? void 0
                      : r.name) || a.toString()
                  : "Unknown";
              t +=
                i +
                ": " +
                (n.body || "") +
                `
`;
              return;
            }
            n.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
              (t +=
                (n.body || "") +
                `
`);
          }
        }),
          (t += `
`));
      });
    }
    ((I.doc = "Summarize all unread chats with their messages"),
      (I.paramsToExecute = []));
    var T = {
      randInt: d,
      toggleDebugCommands: m,
      resetRecentEmoji: p,
      resetEmojiVariant: _,
      getChatId: f,
      VERSION: o("WAWebBuildConstants").VERSION_STR,
      getVersion: g,
      openInternQA: h,
      markAllAsRead: y,
      openUIShowroom: C,
      deleteReceivedTcTokens: S,
      getMessageProtobufByMsgId: R,
      getMessagesByParentMsgId: L,
      deleteTcTokenSenderMetadata: E,
      startUsernameChat: k,
      summarizeUnreadChats: I,
      UserPrefs: { setActiveStatusUser: v, setInactiveStatusUser: b },
    };
    l.default = T;
  },
  98,
);
