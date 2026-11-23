__d(
  "WAWebPollMessageHeader",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WAWebPollBubbleSettingLabel",
    "WAWebPollCreationUtils",
    "WAWebPollEndTimeLabel",
    "WAWebSpoilerRevealLogger",
    "WAWebTextSizeUtils",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcVisibilityOffFilled.react",
    "WDSIconWdsIcMultiSelectFilled.react",
    "WDSPaddings.stylex",
    "react",
    "stylex",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        pollName: { fontWeight: "x1s688f", fontSize: "x1jchvi3", $$css: !0 },
        selectIconColor: { color: "x1bvqhpb", $$css: !0 },
      };
    function m(t) {
      var n,
        a = t.isPollEnded,
        i = t.isSentByMe,
        l = t.msgKey,
        s = t.name,
        u = t.pollEndTime,
        m = t.pollHideVoterNames,
        f = t.pollSelectableOptionsCount,
        g = t.trusted,
        h = o("useWAWebMsgValues").useMsgValues(
          l,
          o("WAWebMsgCasts").castToPollMsg,
          [
            (n = o("WAWebMsgGetters")).getSender,
            n.getInitialPageSize,
            n.getIsSpoiler,
            o("WAWebFrontendMsgGetters").getRtl,
            o("WAWebFrontendMsgGetters").getDir,
            n.getMentionedJidList,
            n.getGroupMentions,
            n.getPollType,
          ],
        ),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R = h[5],
        L = h[6],
        E = h[7],
        k =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles().pollQuestionTextSize,
        I = !0,
        T = f === 1,
        D = [];
      return (
        f != null &&
          !a &&
          D.push({
            key: "selectable-options",
            render: function (t) {
              return c.jsx(p, {
                isSingleOptionPoll: T,
                pollType: E,
                trailingSeparator: t,
              });
            },
          }),
        m &&
          D.push({
            key: "hidden-voter-names",
            render: function (t) {
              return c.jsx(_, { trailingSeparator: t });
            },
          }),
        u != null &&
          D.push({
            key: "end-time",
            render: function (t) {
              return c.jsx(r("WAWebPollEndTimeLabel"), {
                isPollEnded: a,
                pollEndTime: u,
                trailingSeparator: t,
              });
            },
          }),
        c.jsxs(c.Fragment, {
          children: [
            c.jsx(r("WAWebMessageSpacerText.react"), {
              msgKey: l,
              spacer: !1,
              "data-id": l,
              children: c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WDSPaddings.stylex").wdsPaddings.padding4,
                  ),
                  {
                    children: c.jsx(
                      o("WAWebExpandableText.react").ExpandableText,
                      {
                        text: s,
                        textLimit: C,
                        children: function (t) {
                          var e = t.textLimit,
                            n = o(
                              "WAWebFormatConfigurationConversation",
                            ).Conversation({
                              mentions: o(
                                "WAWebMsgMentionMap",
                              ).calculateMsgMentionMap({ mentionedJidList: R }),
                              groupMentions: o(
                                "WAWebMsgMentionMap",
                              ).calculateMsgGroupMentionMap({
                                groupMentions: L,
                              }),
                              links: o("WAWebMsgLinks").getLinksFromText(
                                s,
                                y,
                                e,
                              ),
                              phoneNumbers: o(
                                "WAWebMsgPhoneNumbers",
                              ).getPhoneNumbersFromText(s, e),
                              selectable: I,
                              trusted: g === !0,
                              fromMe: i,
                              fromChatWid: l.remote,
                              messageHasSpoiler: b,
                              spoilerRevealContext: o(
                                "WAWebSpoilerRevealLogger",
                              ).getSpoilerRevealContextFromValues(l.remote, i),
                            });
                          return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: s,
                            dirMismatch: v !== r("WAWebL10N").isRTL(),
                            direction: S,
                            inferLinesDirection: !0,
                            formatters: n,
                            selectable: I,
                            textLimit: e,
                            xstyle: [d.pollName, k],
                          });
                        },
                      },
                    ),
                  },
                ),
              ),
            }),
            c.jsx("div", {
              className: "x78zum5 x6s0dn4 x1q0g3np x1a02dak",
              children: D.map(function (e, t) {
                var n = e.key,
                  r = e.render;
                return c.jsx(c.Fragment, { children: r(t < D.length - 1) }, n);
              }),
            }),
          ],
        })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.isSingleOptionPoll,
        n = e.pollType,
        a = e.trailingSeparator,
        i;
      return (
        n === o("WAWebPollCreationUtils").PollType.QUIZ
          ? (i = s._(/*BTDS*/ ""))
          : t
            ? (i = s._(/*BTDS*/ ""))
            : (i = s._(/*BTDS*/ "")),
        c.jsx(r("WAWebPollBubbleSettingLabel"), {
          icon: t
            ? c.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                height: 12,
                width: 12,
                testid: "ic-check-circle-filled",
                iconXstyle: d.selectIconColor,
              })
            : c.jsx(r("WDSIconWdsIcMultiSelectFilled.react"), {
                height: 12,
                width: 19,
                viewBox: { x: 1, y: 5, width: 22, height: 14 },
                testid: "multi-select-icon-filled",
                iconXstyle: d.selectIconColor,
              }),
          label: i,
          testid: "poll-selectable-options-hint",
          trailingSeparator: a,
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.trailingSeparator;
      return c.jsx(r("WAWebPollBubbleSettingLabel"), {
        icon: c.jsx(r("WDSIconIcVisibilityOffFilled.react"), {
          width: 12,
          height: 12,
          colorName: "contentDeemphasized",
        }),
        label: s._(/*BTDS*/ ""),
        testid: "poll-hide-voter-names-label",
        trailingSeparator: t,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
