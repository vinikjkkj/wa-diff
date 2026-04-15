__d(
  "WAWebDebugMisc",
  [
    "JSResourceForInteraction",
    "Promise",
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
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10197",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return Math.floor(Math.random() * e);
    }
    ((m.doc = "Gimme a random numbuh"), (m.paramsToExecute = [100]));
    function p() {
      var e = !o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands");
      e === !0
        ? o("WAWebClientFeatureFlags").debugEnableFeatureFlag("debug_commands")
        : o("WAWebClientFeatureFlags").debugDisableFeatureFlag(
            "debug_commands",
          );
    }
    ((p.doc = "Toggle debug commands in compose box"),
      (p.paramsToExecute = []));
    function _() {
      o("WAWebRecentEmojiCollection").RecentEmojiCollection.reset();
    }
    ((_.doc = "Resets the recent emojis for the current session"),
      (_.paramsToExecute = []));
    function f() {
      o("WAWebEmojiVariantCollection").EmojiVariantCollection.reset();
    }
    ((f.doc = "Resets the currently selected emoji skin tones"),
      (f.paramsToExecute = []));
    function g() {
      return o("WAWebDebugUtils").getSelectedChat().id.toString();
    }
    ((g.doc = "Copies the current chat's ID to the clipboard"),
      (g.paramsToExecute = []),
      (g.displayName = "chat.id"));
    function h() {
      return o("WAWebBuildConstants").VERSION_STR;
    }
    ((h.doc = "Copies the current app's version to the clipboard"),
      (h.paramsToExecute = []),
      (h.displayName = "VERSION"));
    function y() {
      o("WAWebExternalLink.react").openExternalLink(
        "https://fburl.com/wa-wc-qa",
      );
    }
    ((y.doc = "Opens Intern Q&A to ask a question"),
      (y.paramsToExecute = []),
      (y.displayName = "\u2753Intern Q&A"));
    function C() {
      return (d || (d = n("Promise")))
        .all(
          o("WAWebChatCollection").ChatCollection.map(function (e) {
            if (o("WAWebChatGetters").getHasUnread(e))
              return o("WAWebUpdateUnreadChatAction").markSeen(e);
          }),
        )
        .then(r("WAWebNoop"));
    }
    ((C.doc = "Mark all chats as read"), (C.paramsToExecute = []));
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
              "WAWebShowroomModal.react",
            )
              .__setRef("WAWebDebugMisc")
              .load(),
            t = e.openShowroom;
          t();
        })),
        v.apply(this, arguments)
      );
    }
    b.doc = "Open UI Showroom";
    function S() {
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
    S.doc =
      "Set the last usage of Status to 15 days in the past, so the user is considered inactive.";
    function R() {
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
    R.doc =
      "Set the last usage of Status to now, so the user is considered active.";
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaChat").getChatTable().all();
          if (!(!e || e.length === 0)) {
            var t = e.map(function (e) {
              return { id: e.id, tcToken: null, tcTokenTimestamp: null };
            });
            yield o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t);
          }
        })),
        E.apply(this, arguments)
      );
    }
    L.doc = "Deletes all received tokens";
    function k(e) {
      return n("cr:10197") == null
        ? void 0
        : n("cr:10197").getMessageByMsgId(e);
    }
    function I(e) {
      return n("cr:10197") == null
        ? void 0
        : n("cr:10197").getMessagesByParentMsgId(e);
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaChat").getChatTable().all();
          if (!(!e || e.length === 0)) {
            var t = e.map(function (e) {
              return { id: e.id, tcTokenSenderTimestamp: null };
            });
            yield o("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(t);
          }
        })),
        D.apply(this, arguments)
      );
    }
    T.doc = "Deletes all metadata related with the sent tokens";
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t,
            r = o("WAWebWidFactory").createWid(e + "@lid");
          yield o("WAWebSetUsernameJob").setUsernamesJob([
            { userId: o("WAWebWidFactory").asUserWidOrThrow(r), username: n },
          ]);
          var a = o("WAWebChatCollection").ChatCollection.get(r);
          if (a) throw new Error("Existing chat found");
          var i = o("WAWebChatCollection").ChatCollection.gadd(r);
          o("WAWebSendTextMsgChatAction")
            .sendTextMsgToChat(i, "Helloworld")
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
              return o("WAWebSchemaChat").getChatTable().createOrReplace({
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
                e,
              );
            });
        })),
        $.apply(this, arguments)
      );
    }
    x.doc = "Start a username chat";
    function P() {
      var e = o("WAWebChatCollection").ChatCollection.filter(function (e) {
          return o("WAWebChatGetters").getHasUnread(e);
        }),
        t = e.length + " unread chats:\n\n";
      e.forEach(function (e) {
        ((t += "Chat: " + (e.contact.name || e.id.toString()) + "\n"),
          (t += "Unread count: " + e.unreadCount + "\n"));
        var n = e.msgs.toArray(),
          r = n.filter(function (e) {
            return !e.ack || e.ack < 3;
          });
        (r.forEach(function (n) {
          if (n.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
            if (n.type === o("WAWebMsgType").MSG_TYPE.IMAGE) {
              t += "<image>\n" + (n.caption || "") + "\n";
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
              t += i + ": " + (n.body || "") + "\n";
              return;
            }
            n.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
              (t += (n.body || "") + "\n");
          }
        }),
          (t += "\n"));
      });
    }
    ((P.doc = "Summarize all unread chats with their messages"),
      (P.paramsToExecute = []));
    var N = {
      randInt: m,
      toggleDebugCommands: p,
      resetRecentEmoji: _,
      resetEmojiVariant: f,
      getChatId: g,
      VERSION: o("WAWebBuildConstants").VERSION_STR,
      getVersion: h,
      openInternQA: y,
      markAllAsRead: C,
      openUIShowroom: b,
      deleteReceivedTcTokens: L,
      getMessageProtobufByMsgId: k,
      getMessagesByParentMsgId: I,
      deleteTcTokenSenderMetadata: T,
      startUsernameChat: x,
      summarizeUnreadChats: P,
      UserPrefs: { setActiveStatusUser: R, setInactiveStatusUser: S },
    };
    l.default = N;
  },
  98,
);
