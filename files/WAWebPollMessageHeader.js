__d(
  "WAWebPollMessageHeader",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebIcCheckCircleFilledIcon.react",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebMultiSelectIconFilledIcon.react",
    "WAWebPollCreationUtils",
    "WAWebPollEndTimeLabel",
    "WAWebPollHideVoterNamesLabel",
    "WAWebPollsGatingUtils",
    "WAWebTextSizeUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
        hint: {
          fontSize: "x1pg5gke",
          lineHeight: "x1d3mw78",
          color: "x1bvqhpb",
          $$css: !0,
        },
        pollName: { fontWeight: "x1s688f", fontSize: "x1jchvi3", $$css: !0 },
        selectIcon: { fill: "x2u7xp1", $$css: !0 },
      };
    function m(t) {
      var n = t.isPollEnded,
        a = t.isSentByMe,
        i = t.msg,
        l = t.name,
        s = t.pollEndTime,
        u = t.pollHideVoterNames,
        m = t.pollSelectableOptionsCount,
        _ = t.trusted,
        f =
          o("WAWebTextSizeUtils").getWAWebTextSizeStyles().pollQuestionTextSize,
        g = !0,
        h = m === 1;
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(r("WAWebMessageSpacerText.react"), {
            msg: i.unsafe(),
            spacer: !1,
            "data-id": i.id,
            children: c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiPadding.all4,
                ),
                {
                  children: c.jsx(
                    o("WAWebExpandableText.react").ExpandableText,
                    {
                      text: l,
                      textLimit: o("WAWebMsgGetters").getInitialPageSize(i),
                      children: function (t) {
                        var e = t.textLimit,
                          n = o("WAWebFormatConfiguration").Conversation({
                            mentions: i.mentionMap(),
                            groupMentions: i.groupMentionMap(),
                            links: o("WAWebMsgLinks").getLinksFromMsg(
                              i.unsafe(),
                              e,
                            ),
                            phoneNumbers: o(
                              "WAWebMsgPhoneNumbers",
                            ).getPhoneNumbersFromMsg(i.unsafe(), e),
                            selectable: g,
                            trusted: _ === !0,
                            fromMe: a,
                            fromChatWid: i.id.remote,
                          });
                        return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                          text: l,
                          dirMismatch:
                            o("WAWebFrontendMsgGetters").getRtl(i) !==
                            r("WAWebL10N").isRTL(),
                          direction: o("WAWebFrontendMsgGetters").getDir(i),
                          inferLinesDirection: !0,
                          formatters: n,
                          selectable: g,
                          textLimit: e,
                          xstyle: [d.pollName, f],
                        });
                      },
                    },
                  ),
                },
              ),
            ),
          }),
          m != null &&
            c.jsx(p, { isSingleOptionPoll: h, pollType: i.pollType }),
          u &&
            c.jsx(r("WAWebPollHideVoterNamesLabel"), { isSingleOptionPoll: h }),
          s != null &&
            c.jsx(r("WAWebPollEndTimeLabel"), {
              isPollEnded: n,
              isSingleOptionPoll: h,
              pollEndTime: s,
            }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.isSingleOptionPoll,
        a = t.pollType;
      if (!o("WAWebPollsGatingUtils").isSingleOptionPollsReceivingEnabled())
        return null;
      var i;
      return (
        a === o("WAWebPollCreationUtils").PollType.QUIZ
          ? (i = s._(/*BTDS*/ "Select your answer"))
          : n
            ? (i = s._(/*BTDS*/ "Select one"))
            : (i = s._(/*BTDS*/ "Select one or more")),
        c.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              d.container,
              o("WAWebUISpacing").uiPadding.all4,
            ),
            {
              children: [
                n
                  ? c.jsx(
                      o("WAWebIcCheckCircleFilledIcon.react")
                        .IcCheckCircleFilledIcon,
                      { innerStyles: { background: d.selectIcon } },
                    )
                  : c.jsx(
                      o("WAWebMultiSelectIconFilledIcon.react")
                        .MultiSelectIconFilledIcon,
                      { innerStyles: { background: d.selectIcon } },
                    ),
                c.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    e.props(d.hint, o("WAWebUISpacing").uiPadding.start5),
                    { children: i },
                  ),
                ),
              ],
            },
          ),
        )
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
