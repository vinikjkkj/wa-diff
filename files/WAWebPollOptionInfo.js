__d(
  "WAWebPollOptionInfo",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFacePile.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfigurationConversation",
    "WAWebFrontendPollVoteGetters",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionBar",
    "WAWebPollsPollVoteModel",
    "WAWebTextSizeUtils",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        top: { minHeight: "xisnujt", $$css: !0 },
        optionName: {
          width: "xh8yej3",
          cursor: "x1ypdohk",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        voteCountContainer: { minWidth: "xk8lq53", $$css: !0 },
        votersContainer: {
          display: "x78zum5",
          justifyContent: "x13a6bvl",
          $$css: !0,
        },
        disabledPollLabel: { cursor: "xt0e3qv", $$css: !0 },
        pollEndedLabel: { color: "x1bvqhpb", $$css: !0 },
        pollsSender: {
          borderTopColor: "x3ewwah",
          borderInlineEndColor: "xzt7qbt",
          borderBottomColor: "x1xnb2cf",
          borderInlineStartColor: "xphqdy3",
          $$css: !0,
        },
        pollsReceiver: {
          borderTopColor: "xm7onvi",
          borderInlineEndColor: "xxy6lca",
          borderBottomColor: "x4728lr",
          borderInlineStartColor: "x4bbfdb",
          $$css: !0,
        },
        verticalHiddenOptionInfo: { paddingBottom: "xvpt6g3", $$css: !0 },
      },
      d = 18,
      m = 2;
    function p(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.checkBoxId,
        a = e.checked,
        i = e.hideResults,
        l = e.index,
        s = e.isAdminOrOwner,
        d = e.isCorrectOption,
        m = e.isPollEnded,
        p = e.layout,
        g = e.msg,
        h = e.name,
        y = e.onDetailImageClick,
        C = e.option,
        b = e.result,
        v = e.selectable,
        S = e.showFacePile,
        R = e.trusted,
        L;
      t[0] !== g
        ? ((L = o("WAWebMsgGetters").getIsSentByMe(g)), (t[0] = g), (t[1] = L))
        : (L = t[1]);
      var E = L,
        k = E ? "polls_sender" : "polls_receiver",
        I;
      t[2] !== n ||
      t[3] !== l ||
      t[4] !== m ||
      t[5] !== g ||
      t[6] !== h ||
      t[7] !== C ||
      t[8] !== v ||
      t[9] !== R
        ? ((I = u.jsx(_, {
            checkBoxId: n,
            index: l,
            isPollEnded: m,
            msg: g,
            name: h,
            option: C,
            selectable: v,
            trusted: R,
          })),
          (t[2] = n),
          (t[3] = l),
          (t[4] = m),
          (t[5] = g),
          (t[6] = h),
          (t[7] = C),
          (t[8] = v),
          (t[9] = R),
          (t[10] = I))
        : (I = t[10]);
      var T = I,
        D;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = o(
            "WAWebPollsGatingUtils",
          ).isTappableLinksInPollOptionEnabled()),
          (t[11] = D))
        : (D = t[11]);
      var x = D,
        $;
      t[12] !== i ||
      t[13] !== g ||
      t[14] !== y ||
      t[15] !== b ||
      t[16] !== S ||
      t[17] !== k
        ? (($ =
            !i &&
            u.jsx(f, {
              msg: g,
              theme: k,
              onClick: x ? void 0 : y,
              result: b,
              showFacePile: S,
            })),
          (t[12] = i),
          (t[13] = g),
          (t[14] = y),
          (t[15] = b),
          (t[16] = S),
          (t[17] = k),
          (t[18] = $))
        : ($ = t[18]);
      var P = $,
        N = i ? void 0 : b,
        M;
      t[19] !== a || t[20] !== s || t[21] !== d || t[22] !== E || t[23] !== N
        ? ((M = u.jsx(r("WAWebPollsOptionBar"), {
            result: N,
            isPollSentByMe: E,
            isAdminOrOwner: s,
            checked: a,
            isCorrectOption: d,
          })),
          (t[19] = a),
          (t[20] = s),
          (t[21] = d),
          (t[22] = E),
          (t[23] = N),
          (t[24] = M))
        : (M = t[24]);
      var w = M,
        A;
      return (
        t[25] !== i || t[26] !== p || t[27] !== w || t[28] !== T || t[29] !== P
          ? ((A =
              p === "horizontal"
                ? u.jsxs(r("WAWebFlexItem.react"), {
                    children: [
                      u.jsxs(o("WAWebFlex.react").FlexRow, {
                        xstyle: c.top,
                        columnGap: 2,
                        children: [T, P],
                      }),
                      w,
                    ],
                  })
                : u.jsxs(r("WAWebFlexItem.react"), {
                    xstyle: i && c.verticalHiddenOptionInfo,
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        xstyle: c.top,
                        columnGap: 2,
                        children: T,
                      }),
                      w,
                      P,
                    ],
                  })),
            (t[25] = i),
            (t[26] = p),
            (t[27] = w),
            (t[28] = T),
            (t[29] = P),
            (t[30] = A))
          : (A = t[30]),
        A
      );
    }
    function _(e) {
      var t,
        n = e.checkBoxId,
        a = e.index,
        i = e.isPollEnded,
        l = e.msg,
        s = e.name,
        d = e.option,
        m = e.selectable,
        p = e.trusted,
        _ = o("WAWebMsgGetters").getIsSentByMe(l),
        f = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().textSize,
        g = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(),
        h = o("WAWebFormatConfigurationConversation").Conversation({
          links: g
            ? (t = o("WAWebMsgLinks").getPollOptionLinks(l.unsafe(), d)) != null
              ? t
              : []
            : [],
          phoneNumbers: [],
          selectable: m,
          trusted: p === !0,
          fromMe: _,
          messageHasSpoiler: o("WAWebMsgGetters").getIsSpoiler(l.unsafe()),
        }),
        y = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: s,
          selectable: !0,
          formatters: h,
        });
      return u.jsx(r("WAWebFlexItem.react"), {
        xstyle: [
          c.optionName,
          f,
          !m && c.disabledPollLabel,
          i && c.pollEndedLabel,
        ],
        children: g
          ? u.jsx("div", {
              "data-testid": "poll-option-row-label-" + a,
              children: y,
            })
          : u.jsx("label", {
              htmlFor: n,
              "data-testid": "poll-option-row-label-" + a,
              children: y,
            }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.msg,
        a = e.onClick,
        i = e.result,
        l = e.showFacePile,
        p = e.theme,
        _ = l === void 0 ? !0 : l,
        f = i.count,
        h = i.votes,
        y;
      t[0] !== h
        ? ((y = h.slice(0, m).map(g)), (t[0] = h), (t[1] = y))
        : (y = t[1]);
      var C = y,
        b = p === "polls_sender" ? c.pollsSender : c.pollsReceiver,
        v;
      t[2] !== n
        ? ((v = o("WAWebMsgGetters").getPollHideVoterNames(n)),
          (t[2] = n),
          (t[3] = v))
        : (v = t[3]);
      var S = v === !0,
        R;
      t[4] !== b || t[5] !== S || t[6] !== _ || t[7] !== C
        ? ((R =
            C.length > 0 &&
            _ &&
            !S &&
            u.jsx(r("WAWebFacePile.react"), {
              faceSize: d,
              idsOrUrls: C,
              borderColor: b,
            })),
          (t[4] = b),
          (t[5] = S),
          (t[6] = _),
          (t[7] = C),
          (t[8] = R))
        : (R = t[8]);
      var L = R,
        E;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x1pg5gke" }), (t[9] = E))
        : (E = t[9]);
      var k;
      t[10] !== f
        ? ((k = r("WAWebL10N").d(f)), (t[10] = f), (t[11] = k))
        : (k = t[11]);
      var I;
      t[12] !== k
        ? ((I = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.voteCountContainer,
            children: u.jsx(
              "span",
              babelHelpers.extends({}, E, { children: k }),
            ),
          })),
          (t[12] = k),
          (t[13] = I))
        : (I = t[13]);
      var T;
      t[14] !== L || t[15] !== I
        ? ((T = u.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 4,
            children: [L, I],
          })),
          (t[14] = L),
          (t[15] = I),
          (t[16] = T))
        : (T = t[16]);
      var D = T;
      if (a == null) {
        var x;
        t[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = { className: "x78zum5 x13a6bvl" }), (t[17] = x))
          : (x = t[17]);
        var $;
        return (
          t[18] !== D
            ? (($ = u.jsx("div", babelHelpers.extends({}, x, { children: D }))),
              (t[18] = D),
              (t[19] = $))
            : ($ = t[19]),
          $
        );
      }
      var P;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "View poll voters")), (t[20] = P))
        : (P = t[20]);
      var N;
      t[21] !== n
        ? ((N = o("WAWebMsgGetters").getIsNewsletterMsg(n)),
          (t[21] = n),
          (t[22] = N))
        : (N = t[22]);
      var M;
      return (
        t[23] !== a || t[24] !== N || t[25] !== D
          ? ((M = u.jsx(r("WAWebUnstyledButton.react"), {
              title: P,
              disabled: N,
              xstyle: c.votersContainer,
              onClick: a,
              children: D,
            })),
            (t[23] = a),
            (t[24] = N),
            (t[25] = D),
            (t[26] = M))
          : (M = t[26]),
        M
      );
    }
    function g(e) {
      return h(e).id;
    }
    function h(e) {
      return e instanceof o("WAWebPollsPollVoteModel").PollVote
        ? o("WAWebFrontendPollVoteGetters").getSenderObj(e)
        : e;
    }
    l.default = p;
  },
  226,
);
