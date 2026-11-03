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
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return (
        r("vulture")("xmzgonrhiyEeyjIYzNksSuR0Dgs="),
        Math.floor(Math.random() * e)
      );
    }
    ((d.doc = "Gimme a random numbuh"), (d.paramsToExecute = [100]));
    function m() {
      r("vulture")("C4xEXcwgZFBCXzVYmniPbUdvFoU=");
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
      (r("vulture")("0uHHzgcw7meN4AupKa8tp4_k4oY="),
        o("WAWebRecentEmojiCollection").RecentEmojiCollection.reset());
    }
    ((p.doc = "Resets the recent emojis for the current session"),
      (p.paramsToExecute = []));
    function _() {
      (r("vulture")("hG1rMmFULhriukby9-sbn61m7JU="),
        o("WAWebEmojiVariantCollection").EmojiVariantCollection.reset());
    }
    ((_.doc = "Resets the currently selected emoji skin tones"),
      (_.paramsToExecute = []));
    function f() {
      return (
        r("vulture")("7Gh9JZLNiA-nIqKsGv8fjqyhQc0="),
        o("WAWebDebugUtils").getSelectedChat().id.toString()
      );
    }
    ((f.doc = "Copies the current chat's ID to the clipboard"),
      (f.paramsToExecute = []),
      (f.displayName = "chat.id"));
    function g() {
      return (
        r("vulture")("c9eRvxvQZhWBkXhAMbjLcQIRMeI="),
        o("WAWebBuildConstants").VERSION_STR
      );
    }
    ((g.doc = "Copies the current app's version to the clipboard"),
      (g.paramsToExecute = []),
      (g.displayName = "VERSION"));
    function h() {
      (r("vulture")("W6YKEH9aQ-iCLM-wuK2AErkkLck="),
        o("WAWebExternalLink.react").openExternalLink(
          "https://fburl.com/wa-wc-qa",
        ));
    }
    ((h.doc = "Opens Intern Q&A to ask a question"),
      (h.paramsToExecute = []),
      (h.displayName = "\u2753Intern Q&A"));
    function y() {
      return (
        r("vulture")("V8G6Bcve5XCFZvGCbjH3YQM1hF0="),
        Promise.all(
          o("WAWebChatCollection").ChatCollection.map(function (e) {
            if (o("WAWebChatGetters").getHasUnread(e))
              return o("WAWebUpdateUnreadChatAction").markSeen(e);
          }),
        ).then(r("WAWebNoop"))
      );
    }
    ((y.doc = "Mark all chats as read"), (y.paramsToExecute = []));
    async function C() {
      r("vulture")("zsKXRZ2DFHx8mjF_hpQEim7JQxo=");
      var e = await r("JSResourceForInteraction")("WAWebShowroomModal.react")
          .__setRef("WAWebDebugMisc")
          .load(),
        t = e.openShowroom;
      t();
    }
    C.doc = "Open UI Showroom";
    function b() {
      (r("vulture")("K3XJ79IcxNmwFYqqCi6DNjbunJA="),
        r("WAWebUserPrefsStore").setUser(
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
      (r("vulture")("0_P5FiM83B-gK3kE821RLWsNkes="),
        r("WAWebUserPrefsStore").setUser(
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
      r("vulture")("RmGyhNuxui6150_SdesD9fB10Fk=");
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
      return (
        r("vulture")("wvhs1CO0gy-upWT8lAZAr0m4eG0="),
        n("cr:10197") == null ? void 0 : n("cr:10197").getMessageByMsgId(e)
      );
    }
    function L(e) {
      return (
        r("vulture")("u_wGOkT_u_fMUkSsOlgLtcaQr44="),
        n("cr:10197") == null
          ? void 0
          : n("cr:10197").getMessagesByParentMsgId(e)
      );
    }
    async function E() {
      r("vulture")("5gljrgENEIdXz0LtyYssfXyB1sE=");
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
      r("vulture")("t-Hg1lOSy5ra8K7c1ztEQc7ktLM=");
      var n = t,
        a = o("WAWebWidFactory").createWid(e + "@lid");
      await o("WAWebSetUsernameJob").setUsernamesJob([
        {
          userId: o("WAWebWidFactory").asUserWidOrThrow(a),
          username: o("WAWebUsernameTypes").asUsername(n),
        },
      ]);
      var i = o("WAWebChatCollection").ChatCollection.get(a);
      if (i) {
        var l = new Error("Existing chat found");
        throw (l.stack, l);
      }
      var s = o("WAWebChatCollection").ChatCollection.gadd(a);
      o("WAWebSendTextMsgChatAction")
        .sendTextMsgToChat(s, "Helloworld")
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
          var e = a.toString();
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
      r("vulture")("5O3l7GH2M_sTN1WTCtoyXnFLQz0=");
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
