__d(
  "WAWebPollMessageHeader",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendMsgGetters",
    "WAWebIcCheckCircleFilledIcon.react",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgMentionMap",
    "WAWebMsgPhoneNumbers",
    "WAWebMultiSelectIconFilledIcon.react",
    "WAWebPollCreationUtils",
    "WAWebPollEndTimeLabel",
    "WAWebPollHideVoterNamesLabel",
    "WAWebTextSizeUtils",
    "WDSPaddings.stylex",
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
        pollName: { fontWeight: "x1s688f", fontSize: "x1jchvi3", $$css: !0 },
        selectIcon: { fill: "x2u7xp1", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(38),
        a = t.isPollEnded,
        i = t.isSentByMe,
        l = t.msg,
        s = t.name,
        u = t.pollEndTime,
        m = t.pollHideVoterNames,
        f = t.pollSelectableOptionsCount,
        g = t.trusted,
        h;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o("WAWebTextSizeUtils").getWAWebTextSizeStyles()), (n[0] = h))
        : (h = n[0]);
      var y = h.pollQuestionTextSize,
        C = f === 1,
        b,
        v,
        S;
      if (
        n[1] !== a ||
        n[2] !== i ||
        n[3] !== C ||
        n[4] !== l ||
        n[5] !== s ||
        n[6] !== u ||
        n[7] !== m ||
        n[8] !== f ||
        n[9] !== g
      ) {
        var R = [];
        (f != null &&
          !a &&
          R.push({
            key: "selectable-options",
            render: function (t) {
              return c.jsx(_, {
                isSingleOptionPoll: C,
                pollType: l.pollType,
                trailingSeparator: t,
              });
            },
          }),
          m && R.push({ key: "hidden-voter-names", render: p }),
          u != null &&
            R.push({
              key: "end-time",
              render: function (t) {
                return c.jsx(r("WAWebPollEndTimeLabel"), {
                  isPollEnded: a,
                  pollEndTime: u,
                  trailingSeparator: t,
                });
              },
            }));
        var L;
        n[13] !== l
          ? ((L = l.unsafe()), (n[13] = l), (n[14] = L))
          : (L = n[14]);
        var E = l.id,
          k;
        n[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (e || (e = r("stylex"))).props(
              o("WDSPaddings.stylex").wdsPaddings.padding4,
            )),
            (n[15] = k))
          : (k = n[15]);
        var I;
        n[16] !== l
          ? ((I = o("WAWebMsgGetters").getInitialPageSize(l)),
            (n[16] = l),
            (n[17] = I))
          : (I = n[17]);
        var T;
        n[18] !== i || n[19] !== l || n[20] !== s || n[21] !== g
          ? ((T = function (t) {
              var e = t.textLimit,
                n = o("WAWebFormatConfigurationConversation").Conversation({
                  mentions: o("WAWebMsgMentionMap").calculateMsgMentionMap(l),
                  groupMentions:
                    o("WAWebMsgMentionMap").calculateMsgGroupMentionMap(l),
                  links: o("WAWebMsgLinks").getLinksFromMsg(l.unsafe(), e),
                  phoneNumbers: o(
                    "WAWebMsgPhoneNumbers",
                  ).getPhoneNumbersFromMsg(l.unsafe(), e),
                  selectable: !0,
                  trusted: g === !0,
                  fromMe: i,
                  fromChatWid: l.id.remote,
                  messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(
                    l.unsafe(),
                  ),
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
                xstyle: [d.pollName, y],
              });
            }),
            (n[18] = i),
            (n[19] = l),
            (n[20] = s),
            (n[21] = g),
            (n[22] = T))
          : (T = n[22]);
        var D;
        (n[23] !== s || n[24] !== I || n[25] !== T
          ? ((D = c.jsx(
              "div",
              babelHelpers.extends({}, k, {
                children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
                  text: s,
                  textLimit: I,
                  children: T,
                }),
              }),
            )),
            (n[23] = s),
            (n[24] = I),
            (n[25] = T),
            (n[26] = D))
          : (D = n[26]),
          n[27] !== l.id || n[28] !== D || n[29] !== L
            ? ((S = c.jsx(r("WAWebMessageSpacerText.react"), {
                msg: L,
                spacer: !1,
                "data-id": E,
                children: D,
              })),
              (n[27] = l.id),
              (n[28] = D),
              (n[29] = L),
              (n[30] = S))
            : (S = n[30]),
          n[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = { className: "x78zum5 x6s0dn4 x1q0g3np x1a02dak" }),
              (n[31] = b))
            : (b = n[31]),
          (v = R.map(function (e, t) {
            var n = e.key,
              r = e.render;
            return c.jsx(c.Fragment, { children: r(t < R.length - 1) }, n);
          })),
          (n[1] = a),
          (n[2] = i),
          (n[3] = C),
          (n[4] = l),
          (n[5] = s),
          (n[6] = u),
          (n[7] = m),
          (n[8] = f),
          (n[9] = g),
          (n[10] = b),
          (n[11] = v),
          (n[12] = S));
      } else ((b = n[10]), (v = n[11]), (S = n[12]));
      var x;
      n[32] !== b || n[33] !== v
        ? ((x = c.jsx("div", babelHelpers.extends({}, b, { children: v }))),
          (n[32] = b),
          (n[33] = v),
          (n[34] = x))
        : (x = n[34]);
      var $;
      return (
        n[35] !== S || n[36] !== x
          ? (($ = c.jsxs(c.Fragment, { children: [S, x] })),
            (n[35] = S),
            (n[36] = x),
            (n[37] = $))
          : ($ = n[37]),
        $
      );
    }
    function p(e) {
      return c.jsx(r("WAWebPollHideVoterNamesLabel"), { trailingSeparator: e });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.isSingleOptionPoll,
        r = e.pollType,
        a = e.trailingSeparator,
        i;
      if (r === o("WAWebPollCreationUtils").PollType.QUIZ) {
        var l;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = s._(/*BTDS*/ "Select your answer")), (t[0] = l))
          : (l = t[0]),
          (i = l));
      } else if (n) {
        var u;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s._(/*BTDS*/ "Select one")), (t[1] = u))
          : (u = t[1]),
          (i = u));
      } else {
        var m;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = s._(/*BTDS*/ "Select one or more")), (t[2] = m))
          : (m = t[2]),
          (i = m));
      }
      var p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x78zum5 x6s0dn4 x3psx0u x1iorvi4 xjkvuk6" }),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] !== n
        ? ((_ = n
            ? c.jsx(
                o("WAWebIcCheckCircleFilledIcon.react").IcCheckCircleFilledIcon,
                { innerStyles: { background: d.selectIcon } },
              )
            : c.jsx(
                o("WAWebMultiSelectIconFilledIcon.react")
                  .MultiSelectIconFilledIcon,
                { innerStyles: { background: d.selectIcon } },
              )),
          (t[4] = n),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8" }),
          (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] !== a
        ? ((g = a
            ? c.jsx("span", {
                className: "x135b78x x11lfxj5",
                children: "\xB7",
              })
            : null),
          (t[7] = a),
          (t[8] = g))
        : (g = t[8]);
      var h;
      t[9] !== i || t[10] !== g
        ? ((h = c.jsxs(
            "span",
            babelHelpers.extends({}, f, { children: [i, g] }),
          )),
          (t[9] = i),
          (t[10] = g),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== _ || t[13] !== h
          ? ((y = c.jsxs(
              "div",
              babelHelpers.extends({}, p, { children: [_, h] }),
            )),
            (t[12] = _),
            (t[13] = h),
            (t[14] = y))
          : (y = t[14]),
        y
      );
    }
    l.default = m;
  },
  226,
);
