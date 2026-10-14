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
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WAWebMultiSelectIconFilledIcon.react",
    "WAWebPollBubbleSettingLabel",
    "WAWebPollCreationUtils",
    "WAWebPollEndTimeLabel",
    "WAWebTextSizeUtils",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcVisibilityOffFilled.react",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
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
        selectIcon: { fill: "x2u7xp1", $$css: !0 },
        selectIconColor: { color: "x1bvqhpb", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(48),
        a = t.isPollEnded,
        i = t.isSentByMe,
        l = t.msgKey,
        s = t.name,
        u = t.pollEndTime,
        m = t.pollHideVoterNames,
        f = t.pollSelectableOptionsCount,
        g = t.trusted,
        h;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var y;
        ((h = [
          (y = o("WAWebMsgGetters")).getSender,
          y.getInitialPageSize,
          y.getIsSpoiler,
          o("WAWebFrontendMsgGetters").getRtl,
          o("WAWebFrontendMsgGetters").getDir,
          y.getMentionedJidList,
          y.getGroupMentions,
          y.getPollType,
        ]),
          (n[0] = h));
      } else h = n[0];
      var C = o("useWAWebMsgValues").useMsgValues(l, h),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        L = C[4],
        E = C[5],
        k = C[6],
        I = C[7],
        T;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = o("WAWebTextSizeUtils").getWAWebTextSizeStyles()), (n[1] = T))
        : (T = n[1]);
      var D = T.pollQuestionTextSize,
        x = f === 1,
        $,
        P,
        N;
      if (
        n[2] !== L ||
        n[3] !== k ||
        n[4] !== v ||
        n[5] !== a ||
        n[6] !== i ||
        n[7] !== x ||
        n[8] !== S ||
        n[9] !== E ||
        n[10] !== l ||
        n[11] !== s ||
        n[12] !== u ||
        n[13] !== m ||
        n[14] !== f ||
        n[15] !== I ||
        n[16] !== R ||
        n[17] !== b ||
        n[18] !== g
      ) {
        var M = [];
        (f != null &&
          !a &&
          M.push({
            key: "selectable-options",
            render: function (t) {
              return c.jsx(_, {
                isSingleOptionPoll: x,
                pollType: I,
                trailingSeparator: t,
              });
            },
          }),
          m && M.push({ key: "hidden-voter-names", render: p }),
          u != null &&
            M.push({
              key: "end-time",
              render: function (t) {
                return c.jsx(r("WAWebPollEndTimeLabel"), {
                  isPollEnded: a,
                  pollEndTime: u,
                  trailingSeparator: t,
                });
              },
            }));
        var w;
        n[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e || (e = r("stylex"))).props(
              o("WDSPaddings.stylex").wdsPaddings.padding4,
            )),
            (n[22] = w))
          : (w = n[22]);
        var A;
        n[23] !== L ||
        n[24] !== k ||
        n[25] !== i ||
        n[26] !== S ||
        n[27] !== E ||
        n[28] !== l.remote ||
        n[29] !== s ||
        n[30] !== R ||
        n[31] !== b ||
        n[32] !== g
          ? ((A = function (t) {
              var e = t.textLimit,
                n = o("WAWebFormatConfigurationConversation").Conversation({
                  mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap({
                    mentionedJidList: E,
                  }),
                  groupMentions: o(
                    "WAWebMsgMentionMap",
                  ).calculateMsgGroupMentionMap({ groupMentions: k }),
                  links: o("WAWebMsgLinks").getLinksFromText(s, b, e),
                  phoneNumbers: o(
                    "WAWebMsgPhoneNumbers",
                  ).getPhoneNumbersFromText(s, e),
                  selectable: !0,
                  trusted: g === !0,
                  fromMe: i,
                  fromChatWid: l.remote,
                  messageHasSpoiler: S,
                });
              return c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: s,
                dirMismatch: R !== r("WAWebL10N").isRTL(),
                direction: L,
                inferLinesDirection: !0,
                formatters: n,
                selectable: !0,
                textLimit: e,
                xstyle: [d.pollName, D],
              });
            }),
            (n[23] = L),
            (n[24] = k),
            (n[25] = i),
            (n[26] = S),
            (n[27] = E),
            (n[28] = l.remote),
            (n[29] = s),
            (n[30] = R),
            (n[31] = b),
            (n[32] = g),
            (n[33] = A))
          : (A = n[33]);
        var F;
        (n[34] !== v || n[35] !== s || n[36] !== A
          ? ((F = c.jsx(
              "div",
              babelHelpers.extends({}, w, {
                children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
                  text: s,
                  textLimit: v,
                  children: A,
                }),
              }),
            )),
            (n[34] = v),
            (n[35] = s),
            (n[36] = A),
            (n[37] = F))
          : (F = n[37]),
          n[38] !== l || n[39] !== F
            ? ((N = c.jsx(r("WAWebMessageSpacerText.react"), {
                msgKey: l,
                spacer: !1,
                "data-id": l,
                children: F,
              })),
              (n[38] = l),
              (n[39] = F),
              (n[40] = N))
            : (N = n[40]),
          n[41] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = { className: "x78zum5 x6s0dn4 x1q0g3np x1a02dak" }),
              (n[41] = $))
            : ($ = n[41]),
          (P = M.map(function (e, t) {
            var n = e.key,
              r = e.render;
            return c.jsx(c.Fragment, { children: r(t < M.length - 1) }, n);
          })),
          (n[2] = L),
          (n[3] = k),
          (n[4] = v),
          (n[5] = a),
          (n[6] = i),
          (n[7] = x),
          (n[8] = S),
          (n[9] = E),
          (n[10] = l),
          (n[11] = s),
          (n[12] = u),
          (n[13] = m),
          (n[14] = f),
          (n[15] = I),
          (n[16] = R),
          (n[17] = b),
          (n[18] = g),
          (n[19] = $),
          (n[20] = P),
          (n[21] = N));
      } else (($ = n[19]), (P = n[20]), (N = n[21]));
      var O;
      n[42] !== $ || n[43] !== P
        ? ((O = c.jsx("div", babelHelpers.extends({}, $, { children: P }))),
          (n[42] = $),
          (n[43] = P),
          (n[44] = O))
        : (O = n[44]);
      var B;
      return (
        n[45] !== N || n[46] !== O
          ? ((B = c.jsxs(c.Fragment, { children: [N, O] })),
            (n[45] = N),
            (n[46] = O),
            (n[47] = B))
          : (B = n[47]),
        B
      );
    }
    function p(e) {
      return c.jsx(f, { trailingSeparator: e });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.isSingleOptionPoll,
        a = e.pollType,
        i = e.trailingSeparator,
        l;
      if (a === o("WAWebPollCreationUtils").PollType.QUIZ) {
        var u;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s._(/*BTDS*/ "Select your answer")), (t[0] = u))
          : (u = t[0]),
          (l = u));
      } else if (n) {
        var m;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = s._(/*BTDS*/ "Select one")), (t[1] = m))
          : (m = t[1]),
          (l = m));
      } else {
        var p;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(/*BTDS*/ "Select one or more")), (t[2] = p))
          : (p = t[2]),
          (l = p));
      }
      var _;
      t[3] !== n
        ? ((_ = n
            ? c.jsx(r("WDSIconIcCheckCircleFilled.react"), {
                height: 12,
                width: 12,
                testid: "ic-check-circle-filled",
                iconXstyle: d.selectIconColor,
              })
            : c.jsx(
                o("WAWebMultiSelectIconFilledIcon.react")
                  .MultiSelectIconFilledIcon,
                { innerStyles: { background: d.selectIcon } },
              )),
          (t[3] = n),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      return (
        t[5] !== l || t[6] !== _ || t[7] !== i
          ? ((f = c.jsx(r("WAWebPollBubbleSettingLabel"), {
              icon: _,
              label: l,
              testid: "poll-selectable-options-hint",
              trailingSeparator: i,
            })),
            (t[5] = l),
            (t[6] = _),
            (t[7] = i),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.trailingSeparator,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = c.jsx(r("WDSIconIcVisibilityOffFilled.react"), {
            width: 12,
            height: 12,
            colorName: "contentDeemphasized",
          })),
          (i = s._(/*BTDS*/ "Names hidden")),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1]));
      var l;
      return (
        t[2] !== n
          ? ((l = c.jsx(r("WAWebPollBubbleSettingLabel"), {
              icon: a,
              label: i,
              testid: "poll-hide-voter-names-label",
              trailingSeparator: n,
            })),
            (t[2] = n),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = m;
  },
  226,
);
