__d(
  "WAWebPollOptionInfo",
  [
    "WAWebEmojiText.react",
    "WAWebFacePile.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatConfiguration",
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
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
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
      c = 18,
      d = 2;
    function m(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.checkBoxId,
        a = e.checked,
        i = e.hideResults,
        l = e.index,
        c = e.isAdminOrOwner,
        d = e.isCorrectOption,
        m = e.isPollEnded,
        f = e.layout,
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
        ? ((I = s.jsx(p, {
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
            s.jsx(_, {
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
      t[19] !== a || t[20] !== c || t[21] !== d || t[22] !== E || t[23] !== N
        ? ((M = s.jsx(r("WAWebPollsOptionBar"), {
            result: N,
            isPollSentByMe: E,
            isAdminOrOwner: c,
            checked: a,
            isCorrectOption: d,
          })),
          (t[19] = a),
          (t[20] = c),
          (t[21] = d),
          (t[22] = E),
          (t[23] = N),
          (t[24] = M))
        : (M = t[24]);
      var w = M,
        A;
      return (
        t[25] !== i || t[26] !== f || t[27] !== w || t[28] !== T || t[29] !== P
          ? ((A =
              f === "horizontal"
                ? s.jsxs(r("WAWebFlexItem.react"), {
                    children: [
                      s.jsxs(o("WAWebFlex.react").FlexRow, {
                        xstyle: u.top,
                        columnGap: 2,
                        children: [T, P],
                      }),
                      w,
                    ],
                  })
                : s.jsxs(r("WAWebFlexItem.react"), {
                    xstyle: i && u.verticalHiddenOptionInfo,
                    children: [
                      s.jsx(o("WAWebFlex.react").FlexRow, {
                        xstyle: u.top,
                        columnGap: 2,
                        children: T,
                      }),
                      w,
                      P,
                    ],
                  })),
            (t[25] = i),
            (t[26] = f),
            (t[27] = w),
            (t[28] = T),
            (t[29] = P),
            (t[30] = A))
          : (A = t[30]),
        A
      );
    }
    function p(e) {
      var t,
        n = e.checkBoxId,
        a = e.index,
        i = e.isPollEnded,
        l = e.msg,
        c = e.name,
        d = e.option,
        m = e.selectable,
        p = e.trusted,
        _ = o("WAWebMsgGetters").getIsSentByMe(l),
        f = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().textSize,
        g = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(),
        h = o("WAWebFormatConfiguration").Conversation({
          links: g
            ? (t = o("WAWebMsgLinks").getPollOptionLinks(l.unsafe(), d)) != null
              ? t
              : []
            : [],
          phoneNumbers: [],
          selectable: m,
          trusted: p === !0,
          fromMe: _,
        }),
        y = s.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: c,
          selectable: !0,
          formatters: h,
        });
      return s.jsx(r("WAWebFlexItem.react"), {
        xstyle: [
          u.optionName,
          f,
          !m && u.disabledPollLabel,
          i && u.pollEndedLabel,
        ],
        children: g
          ? s.jsx("div", { "data-testid": void 0, children: y })
          : s.jsx("label", { htmlFor: n, "data-testid": void 0, children: y }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.msg,
        a = e.onClick,
        i = e.result,
        l = e.showFacePile,
        m = e.theme,
        p = l === void 0 ? !0 : l,
        _ = i.count,
        g = i.votes,
        h;
      t[0] !== g
        ? ((h = g.slice(0, d).map(f)), (t[0] = g), (t[1] = h))
        : (h = t[1]);
      var y = h,
        C = m === "polls_sender" ? u.pollsSender : u.pollsReceiver,
        b;
      t[2] !== n
        ? ((b = o("WAWebMsgGetters").getPollHideVoterNames(n)),
          (t[2] = n),
          (t[3] = b))
        : (b = t[3]);
      var v = b === !0,
        S;
      t[4] !== C || t[5] !== v || t[6] !== p || t[7] !== y
        ? ((S =
            y.length > 0 &&
            p &&
            !v &&
            s.jsx(r("WAWebFacePile.react"), {
              faceSize: c,
              idsOrUrls: y,
              borderColor: C,
            })),
          (t[4] = C),
          (t[5] = v),
          (t[6] = p),
          (t[7] = y),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "x1pg5gke" }), (t[9] = L))
        : (L = t[9]);
      var E;
      t[10] !== _
        ? ((E = r("WAWebL10N").d(_)), (t[10] = _), (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== E
        ? ((k = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: u.voteCountContainer,
            children: s.jsx(
              "span",
              babelHelpers.extends({}, L, { children: E }),
            ),
          })),
          (t[12] = E),
          (t[13] = k))
        : (k = t[13]);
      var I;
      t[14] !== R || t[15] !== k
        ? ((I = s.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 4,
            children: [R, k],
          })),
          (t[14] = R),
          (t[15] = k),
          (t[16] = I))
        : (I = t[16]);
      var T = I;
      if (a == null) {
        var D;
        t[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = { className: "x78zum5 x13a6bvl" }), (t[17] = D))
          : (D = t[17]);
        var x;
        return (
          t[18] !== T
            ? ((x = s.jsx("div", babelHelpers.extends({}, D, { children: T }))),
              (t[18] = T),
              (t[19] = x))
            : (x = t[19]),
          x
        );
      }
      var $;
      t[20] !== n
        ? (($ = o("WAWebMsgGetters").getIsNewsletterMsg(n)),
          (t[20] = n),
          (t[21] = $))
        : ($ = t[21]);
      var P;
      return (
        t[22] !== a || t[23] !== $ || t[24] !== T
          ? ((P = s.jsx(r("WAWebUnstyledButton.react"), {
              tabIndex: -1,
              disabled: $,
              xstyle: u.votersContainer,
              onClick: a,
              children: T,
            })),
            (t[22] = a),
            (t[23] = $),
            (t[24] = T),
            (t[25] = P))
          : (P = t[25]),
        P
      );
    }
    function f(e) {
      return g(e).id;
    }
    function g(e) {
      return e instanceof o("WAWebPollsPollVoteModel").PollVote
        ? o("WAWebFrontendPollVoteGetters").getSenderObj(e)
        : e;
    }
    l.default = m;
  },
  98,
);
