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
    "WAWebTextSizeUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(35),
        a = t.isPollEnded,
        i = t.isSentByMe,
        l = t.msg,
        s = t.name,
        u = t.pollEndTime,
        m = t.pollHideVoterNames,
        _ = t.pollSelectableOptionsCount,
        f = t.trusted,
        g;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = o("WAWebTextSizeUtils").getWAWebTextSizeStyles()), (n[0] = g))
        : (g = n[0]);
      var h = g.pollQuestionTextSize,
        y = _ === 1,
        C;
      n[1] !== l ? ((C = l.unsafe()), (n[1] = l), (n[2] = C)) : (C = n[2]);
      var b = l.id,
        v;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.all4,
          )),
          (n[3] = v))
        : (v = n[3]);
      var S;
      n[4] !== l
        ? ((S = o("WAWebMsgGetters").getInitialPageSize(l)),
          (n[4] = l),
          (n[5] = S))
        : (S = n[5]);
      var R;
      n[6] !== i || n[7] !== l || n[8] !== s || n[9] !== f
        ? ((R = function (t) {
            var e = t.textLimit,
              n = o("WAWebFormatConfiguration").Conversation({
                mentions: l.mentionMap(),
                groupMentions: l.groupMentionMap(),
                links: o("WAWebMsgLinks").getLinksFromMsg(l.unsafe(), e),
                phoneNumbers: o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(
                  l.unsafe(),
                  e,
                ),
                selectable: !0,
                trusted: f === !0,
                fromMe: i,
                fromChatWid: l.id.remote,
              });
            return c.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: s,
              dirMismatch:
                o("WAWebFrontendMsgGetters").getRtl(l) !==
                r("WAWebL10N").isRTL(),
              direction: o("WAWebFrontendMsgGetters").getDir(l),
              inferLinesDirection: !0,
              formatters: n,
              selectable: !0,
              textLimit: e,
              xstyle: [d.pollName, h],
            });
          }),
          (n[6] = i),
          (n[7] = l),
          (n[8] = s),
          (n[9] = f),
          (n[10] = R))
        : (R = n[10]);
      var L;
      n[11] !== s || n[12] !== S || n[13] !== R
        ? ((L = c.jsx(
            "div",
            babelHelpers.extends({}, v, {
              children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
                text: s,
                textLimit: S,
                children: R,
              }),
            }),
          )),
          (n[11] = s),
          (n[12] = S),
          (n[13] = R),
          (n[14] = L))
        : (L = n[14]);
      var E;
      n[15] !== l.id || n[16] !== C || n[17] !== L
        ? ((E = c.jsx(r("WAWebMessageSpacerText.react"), {
            msg: C,
            spacer: !1,
            "data-id": b,
            children: L,
          })),
          (n[15] = l.id),
          (n[16] = C),
          (n[17] = L),
          (n[18] = E))
        : (E = n[18]);
      var k;
      n[19] !== y || n[20] !== l.pollType || n[21] !== _
        ? ((k =
            _ != null &&
            c.jsx(p, { isSingleOptionPoll: y, pollType: l.pollType })),
          (n[19] = y),
          (n[20] = l.pollType),
          (n[21] = _),
          (n[22] = k))
        : (k = n[22]);
      var I;
      n[23] !== y || n[24] !== m
        ? ((I =
            m &&
            c.jsx(r("WAWebPollHideVoterNamesLabel"), {
              isSingleOptionPoll: y,
            })),
          (n[23] = y),
          (n[24] = m),
          (n[25] = I))
        : (I = n[25]);
      var T;
      n[26] !== a || n[27] !== y || n[28] !== u
        ? ((T =
            u != null &&
            c.jsx(r("WAWebPollEndTimeLabel"), {
              isPollEnded: a,
              isSingleOptionPoll: y,
              pollEndTime: u,
            })),
          (n[26] = a),
          (n[27] = y),
          (n[28] = u),
          (n[29] = T))
        : (T = n[29]);
      var D;
      return (
        n[30] !== I || n[31] !== T || n[32] !== E || n[33] !== k
          ? ((D = c.jsxs(c.Fragment, { children: [E, k, I, T] })),
            (n[30] = I),
            (n[31] = T),
            (n[32] = E),
            (n[33] = k),
            (n[34] = D))
          : (D = n[34]),
        D
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.isSingleOptionPoll,
        i = t.pollType,
        l;
      if (i === o("WAWebPollCreationUtils").PollType.QUIZ) {
        var u;
        (n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s._(/*BTDS*/ "Select your answer")), (n[0] = u))
          : (u = n[0]),
          (l = u));
      } else if (a) {
        var m;
        (n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = s._(/*BTDS*/ "Select one")), (n[1] = m))
          : (m = n[1]),
          (l = m));
      } else {
        var p;
        (n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s._(/*BTDS*/ "Select one or more")), (n[2] = p))
          : (p = n[2]),
          (l = p));
      }
      var _;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex"))).props(
            d.container,
            o("WAWebUISpacing").uiPadding.all4,
          )),
          (n[3] = _))
        : (_ = n[3]);
      var f;
      n[4] !== a
        ? ((f = a
            ? c.jsx(
                o("WAWebIcCheckCircleFilledIcon.react").IcCheckCircleFilledIcon,
                { innerStyles: { background: d.selectIcon } },
              )
            : c.jsx(
                o("WAWebMultiSelectIconFilledIcon.react")
                  .MultiSelectIconFilledIcon,
                { innerStyles: { background: d.selectIcon } },
              )),
          (n[4] = a),
          (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (e || (e = r("stylex"))).props(
            d.hint,
            o("WAWebUISpacing").uiPadding.start5,
          )),
          (n[6] = g))
        : (g = n[6]);
      var h;
      n[7] !== l
        ? ((h = c.jsx("span", babelHelpers.extends({}, g, { children: l }))),
          (n[7] = l),
          (n[8] = h))
        : (h = n[8]);
      var y;
      return (
        n[9] !== f || n[10] !== h
          ? ((y = c.jsxs(
              "div",
              babelHelpers.extends({}, _, { children: [f, h] }),
            )),
            (n[9] = f),
            (n[10] = h),
            (n[11] = y))
          : (y = n[11]),
        y
      );
    }
    l.default = m;
  },
  226,
);
