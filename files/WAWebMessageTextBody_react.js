__d(
  "WAWebMessageTextBody.react",
  [
    "cx",
    "WAWebBizCtwaAGMUtils",
    "WAWebDisplayType",
    "WAWebEmoji",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageMultiEmoji.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WDSFontTokenStyles",
    "react",
    "useWAWebMessageHighlightTerms",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = e.botCommands,
        i = e.botMsgTextToRender,
        l = e.displayType,
        s = e.handleLinkClick,
        c = e.msg,
        d = e.trusted,
        m = r("useWAWebMessageHighlightTerms")(c.id),
        p = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(c.body);
      if (p) {
        var _ =
          p.length === 1 &&
          o("WAWebEmoji")
            .EmojiUtil.getHeartEmojis()
            .some(function (e) {
              return (
                o("WAWebEmoji").EmojiUtil.normalizeEmoji(e) ===
                o("WAWebEmoji").EmojiUtil.normalizeEmoji(p[0])
              );
            });
        return u.jsx(r("WAWebMessageMultiEmoji.react"), {
          animation: _,
          emojis: p,
        });
      }
      var f = !0,
        g =
          !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
            (t = c.ctwaContext) == null ? void 0 : t.sourceApp,
            c.type,
            (n = c.ctwaContext) == null
              ? void 0
              : n.automatedGreetingMessageShown,
            c.subtype,
          ) &&
          i != null &&
          o("WAWebMsgGetters").getIsMetaBotResponse(c)
            ? i
            : c.body;
      return u.jsx(o("WAWebExpandableText.react").ExpandableText, {
        text: g,
        textLimit: o("WAWebMsgGetters").getInitialPageSize(c),
        children: function (t) {
          var e = t.textLimit,
            n = o("WAWebFormatConfiguration").Conversation({
              mentions: c.mentionMap(),
              groupMentions: c.groupMentionMap(),
              hasMentionAll: o("WAWebMsgGetters").getHasMentionAll(c.unsafe()),
              links: o("WAWebMsgLinks").getLinksFromMsg(c.unsafe(), e),
              phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(
                c.unsafe(),
                e,
              ),
              selectable: f,
              trusted: d === !0,
              fromMe: c.id.fromMe,
              fromChatWid: c.id.remote,
              commands:
                l === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION
                  ? a
                  : null,
              parseLists: !0,
              parseQuotes: !0,
              parseInlineCode: !0,
              onLinkClick: function () {
                s &&
                  (s(),
                  o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction(
                    {
                      msg: c.unsafe(),
                      chat: o("WAWebFrontendMsgGetters").getChat(c.unsafe()),
                      messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                        .MESSAGE_LEVEL_ACTION.URL_FRICTION_BANNER_VIEW,
                      messageActionEntryPoint: o(
                        "WAWebWamEnumMessageActionEntryPoint",
                      ).MESSAGE_ACTION_ENTRY_POINT.URL_CLICK_BANNER,
                    },
                  ));
              },
              terms: m != null ? m : null,
            });
          return u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: g,
            lastBotEditBodyLength: c.lastBotEditBodyLength,
            className:
              l === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ? "_ahy4" : "",
            xstyle: o("WDSFontTokenStyles").WDSFontTokenStyles.Body2,
            dirMismatch:
              o("WAWebFrontendMsgGetters").getRtl(c) !== r("WAWebL10N").isRTL(),
            direction: o("WAWebFrontendMsgGetters").getDir(c),
            inferLinesDirection: !0,
            formatters: n,
            selectable: f,
            textLimit: e,
          });
        },
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
