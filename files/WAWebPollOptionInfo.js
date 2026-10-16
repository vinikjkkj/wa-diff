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
    "WAWebSpoilerRevealLogger",
    "WAWebTextSizeUtils",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
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
      var t = o("react-compiler-runtime").c(30),
        n = e.checkBoxId,
        a = e.checked,
        i = e.hideResults,
        l = e.index,
        s = e.isAdminOrOwner,
        d = e.isCorrectOption,
        m = e.isPollEnded,
        p = e.layout,
        g = e.msgKey,
        h = e.name,
        y = e.onDetailImageClick,
        C = e.option,
        b = e.result,
        v = e.selectable,
        S = e.showFacePile,
        R = e.trusted,
        L;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [o("WAWebMsgGetters").getIsSentByMe]), (t[0] = L))
        : (L = t[0]);
      var E = o("useWAWebMsgValues").useMsgValues(g, L),
        k = E[0],
        I = k ? "polls_sender" : "polls_receiver",
        T;
      t[1] !== n ||
      t[2] !== l ||
      t[3] !== m ||
      t[4] !== g ||
      t[5] !== h ||
      t[6] !== C ||
      t[7] !== v ||
      t[8] !== R
        ? ((T = u.jsx(_, {
            checkBoxId: n,
            index: l,
            isPollEnded: m,
            msgKey: g,
            name: h,
            option: C,
            selectable: v,
            trusted: R,
          })),
          (t[1] = n),
          (t[2] = l),
          (t[3] = m),
          (t[4] = g),
          (t[5] = h),
          (t[6] = C),
          (t[7] = v),
          (t[8] = R),
          (t[9] = T))
        : (T = t[9]);
      var D = T,
        x;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = o(
            "WAWebPollsGatingUtils",
          ).isTappableLinksInPollOptionEnabled()),
          (t[10] = x))
        : (x = t[10]);
      var $ = x,
        P;
      t[11] !== i ||
      t[12] !== g ||
      t[13] !== y ||
      t[14] !== b ||
      t[15] !== S ||
      t[16] !== I
        ? ((P =
            !i &&
            u.jsx(f, {
              msgKey: g,
              theme: I,
              onClick: $ ? void 0 : y,
              result: b,
              showFacePile: S,
            })),
          (t[11] = i),
          (t[12] = g),
          (t[13] = y),
          (t[14] = b),
          (t[15] = S),
          (t[16] = I),
          (t[17] = P))
        : (P = t[17]);
      var N = P,
        M = i ? void 0 : b,
        w;
      t[18] !== a || t[19] !== s || t[20] !== d || t[21] !== k || t[22] !== M
        ? ((w = u.jsx(r("WAWebPollsOptionBar"), {
            result: M,
            isPollSentByMe: k,
            isAdminOrOwner: s,
            checked: a,
            isCorrectOption: d,
          })),
          (t[18] = a),
          (t[19] = s),
          (t[20] = d),
          (t[21] = k),
          (t[22] = M),
          (t[23] = w))
        : (w = t[23]);
      var A = w,
        F;
      return (
        t[24] !== i || t[25] !== p || t[26] !== A || t[27] !== D || t[28] !== N
          ? ((F =
              p === "horizontal"
                ? u.jsxs(r("WAWebFlexItem.react"), {
                    children: [
                      u.jsxs(o("WAWebFlex.react").FlexRow, {
                        xstyle: c.top,
                        columnGap: 2,
                        children: [D, N],
                      }),
                      A,
                    ],
                  })
                : u.jsxs(r("WAWebFlexItem.react"), {
                    xstyle: i && c.verticalHiddenOptionInfo,
                    children: [
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        xstyle: c.top,
                        columnGap: 2,
                        children: D,
                      }),
                      A,
                      N,
                    ],
                  })),
            (t[24] = i),
            (t[25] = p),
            (t[26] = A),
            (t[27] = D),
            (t[28] = N),
            (t[29] = F))
          : (F = t[29]),
        F
      );
    }
    function _(e) {
      var t = e.checkBoxId,
        n = e.index,
        a = e.isPollEnded,
        i = e.msgKey,
        l = e.name,
        s = e.option,
        d = e.selectable,
        m = e.trusted,
        p = o("useWAWebMsgValues").useMsgValues(i, [
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsSpoiler,
          o("WAWebMsgGetters").getSender,
        ]),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().textSize,
        y = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(),
        C = o("WAWebFormatConfigurationConversation").Conversation({
          links: y ? o("WAWebMsgLinks").getLinksFromText(s.name, g) : [],
          phoneNumbers: [],
          selectable: d,
          trusted: m === !0,
          fromMe: _,
          messageHasSpoiler: f,
          spoilerRevealContext: o(
            "WAWebSpoilerRevealLogger",
          ).getSpoilerRevealContextFromValues(i.remote, _),
        }),
        b = u.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: l,
          selectable: !0,
          formatters: C,
        });
      return u.jsx(r("WAWebFlexItem.react"), {
        xstyle: [
          c.optionName,
          h,
          !d && c.disabledPollLabel,
          a && c.pollEndedLabel,
        ],
        children: y
          ? u.jsx("div", {
              "data-testid": "poll-option-row-label-" + n,
              children: b,
            })
          : u.jsx("label", {
              htmlFor: t,
              "data-testid": "poll-option-row-label-" + n,
              children: b,
            }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.msgKey,
        a = e.onClick,
        i = e.result,
        l = e.showFacePile,
        p = e.theme,
        _ = l === void 0 ? !0 : l,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [
            o("WAWebMsgGetters").getPollHideVoterNames,
            o("WAWebMsgGetters").getIsNewsletterMsg,
          ]),
          (t[0] = f))
        : (f = t[0]);
      var h = o("useWAWebMsgValues").useMsgValues(n, f),
        y = h[0],
        C = h[1],
        b = i.count,
        v = i.votes,
        S;
      t[1] !== v
        ? ((S = v.slice(0, m).map(g)), (t[1] = v), (t[2] = S))
        : (S = t[2]);
      var R = S,
        L = p === "polls_sender" ? c.pollsSender : c.pollsReceiver,
        E = y === !0,
        k;
      t[3] !== L || t[4] !== E || t[5] !== _ || t[6] !== R
        ? ((k =
            R.length > 0 &&
            _ &&
            !E &&
            u.jsx(r("WAWebFacePile.react"), {
              faceSize: d,
              idsOrUrls: R,
              borderColor: L,
            })),
          (t[3] = L),
          (t[4] = E),
          (t[5] = _),
          (t[6] = R),
          (t[7] = k))
        : (k = t[7]);
      var I = k,
        T;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = { className: "x1pg5gke" }), (t[8] = T))
        : (T = t[8]);
      var D;
      t[9] !== b
        ? ((D = r("WAWebL10N").d(b)), (t[9] = b), (t[10] = D))
        : (D = t[10]);
      var x;
      t[11] !== D
        ? ((x = u.jsx(r("WAWebFlexItem.react"), {
            xstyle: c.voteCountContainer,
            children: u.jsx(
              "span",
              babelHelpers.extends({}, T, { children: D }),
            ),
          })),
          (t[11] = D),
          (t[12] = x))
        : (x = t[12]);
      var $;
      t[13] !== I || t[14] !== x
        ? (($ = u.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 4,
            children: [I, x],
          })),
          (t[13] = I),
          (t[14] = x),
          (t[15] = $))
        : ($ = t[15]);
      var P = $;
      if (a == null) {
        var N;
        t[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = { className: "x78zum5 x13a6bvl" }), (t[16] = N))
          : (N = t[16]);
        var M;
        return (
          t[17] !== P
            ? ((M = u.jsx("div", babelHelpers.extends({}, N, { children: P }))),
              (t[17] = P),
              (t[18] = M))
            : (M = t[18]),
          M
        );
      }
      var w;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = s._(/*BTDS*/ "View poll voters")), (t[19] = w))
        : (w = t[19]);
      var A;
      return (
        t[20] !== C || t[21] !== a || t[22] !== P
          ? ((A = u.jsx(r("WAWebUnstyledButton.react"), {
              title: w,
              disabled: C,
              xstyle: c.votersContainer,
              onClick: a,
              children: P,
            })),
            (t[20] = C),
            (t[21] = a),
            (t[22] = P),
            (t[23] = A))
          : (A = t[23]),
        A
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
