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
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:10197",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return (
        r("vulture")("xmzgonrhiyEeyjIYzNksSuR0Dgs="),
        Math.floor(Math.random() * e)
      );
    }
    ((m.doc = "Gimme a random numbuh"), (m.paramsToExecute = [100]));
    function p() {
      r("vulture")("C4xEXcwgZFBCXzVYmniPbUdvFoU=");
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
      (r("vulture")("0uHHzgcw7meN4AupKa8tp4_k4oY="),
        o("WAWebRecentEmojiCollection").RecentEmojiCollection.reset());
    }
    ((_.doc = "Resets the recent emojis for the current session"),
      (_.paramsToExecute = []));
    function f() {
      (r("vulture")("hG1rMmFULhriukby9-sbn61m7JU="),
        o("WAWebEmojiVariantCollection").EmojiVariantCollection.reset());
    }
    ((f.doc = "Resets the currently selected emoji skin tones"),
      (f.paramsToExecute = []));
    function g() {
      return (
        r("vulture")("7Gh9JZLNiA-nIqKsGv8fjqyhQc0="),
        o("WAWebDebugUtils").getSelectedChat().id.toString()
      );
    }
    ((g.doc = "Copies the current chat's ID to the clipboard"),
      (g.paramsToExecute = []),
      (g.displayName = "chat.id"));
    function h() {
      return (
        r("vulture")("c9eRvxvQZhWBkXhAMbjLcQIRMeI="),
        o("WAWebBuildConstants").VERSION_STR
      );
    }
    ((h.doc = "Copies the current app's version to the clipboard"),
      (h.paramsToExecute = []),
      (h.displayName = "VERSION"));
    function y() {
      (r("vulture")("W6YKEH9aQ-iCLM-wuK2AErkkLck="),
        o("WAWebExternalLink.react").openExternalLink(
          "https://fburl.com/wa-wc-qa",
        ));
    }
    ((y.doc = "Opens Intern Q&A to ask a question"),
      (y.paramsToExecute = []),
      (y.displayName = "\u2753Intern Q&A"));
    function C() {
      return (
        r("vulture")("V8G6Bcve5XCFZvGCbjH3YQM1hF0="),
        (d || (d = n("Promise")))
          .all(
            o("WAWebChatCollection").ChatCollection.map(function (e) {
              if (o("WAWebChatGetters").getHasUnread(e))
                return o("WAWebUpdateUnreadChatAction").markSeen(e);
            }),
          )
          .then(r("WAWebNoop"))
      );
    }
    ((C.doc = "Mark all chats as read"), (C.paramsToExecute = []));
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("zsKXRZ2DFHx8mjF_hpQEim7JQxo=");
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
    S.doc =
      "Set the last usage of Status to 15 days in the past, so the user is considered inactive.";
    function R() {
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
    R.doc =
      "Set the last usage of Status to now, so the user is considered active.";
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("RmGyhNuxui6150_SdesD9fB10Fk=");
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
      return (
        r("vulture")("wvhs1CO0gy-upWT8lAZAr0m4eG0="),
        n("cr:10197") == null ? void 0 : n("cr:10197").getMessageByMsgId(e)
      );
    }
    function I(e) {
      return (
        r("vulture")("u_wGOkT_u_fMUkSsOlgLtcaQr44="),
        n("cr:10197") == null
          ? void 0
          : n("cr:10197").getMessagesByParentMsgId(e)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("5gljrgENEIdXz0LtyYssfXyB1sE=");
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
          r("vulture")("t-Hg1lOSy5ra8K7c1ztEQc7ktLM=");
          var n = t,
            a = o("WAWebWidFactory").createWid(e + "@lid");
          yield o("WAWebSetUsernameJob").setUsernamesJob([
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
        })),
        $.apply(this, arguments)
      );
    }
    x.doc = "Start a username chat";
    function P() {
      r("vulture")("5O3l7GH2M_sTN1WTCtoyXnFLQz0=");
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
