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
      var t = e.checkBoxId,
        n = e.checked,
        a = e.hideResults,
        i = e.index,
        l = e.isAdminOrOwner,
        c = e.isCorrectOption,
        d = e.isPollEnded,
        m = e.layout,
        f = e.msg,
        g = e.name,
        h = e.onDetailImageClick,
        y = e.option,
        C = e.result,
        b = e.selectable,
        v = e.showFacePile,
        S = e.trusted,
        R = o("WAWebMsgGetters").getIsSentByMe(f),
        L = R ? "polls_sender" : "polls_receiver",
        E = s.jsx(p, {
          checkBoxId: t,
          index: i,
          isPollEnded: d,
          msg: f,
          name: g,
          option: y,
          selectable: b,
          trusted: S,
        }),
        k = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(),
        I =
          !a &&
          s.jsx(_, {
            msg: f,
            theme: L,
            onClick: k ? void 0 : h,
            result: C,
            showFacePile: v,
          }),
        T = s.jsx(r("WAWebPollsOptionBar"), {
          result: a ? void 0 : C,
          isPollSentByMe: R,
          isAdminOrOwner: l,
          checked: n,
          isCorrectOption: c,
        });
      return m === "horizontal"
        ? s.jsxs(r("WAWebFlexItem.react"), {
            children: [
              s.jsxs(o("WAWebFlex.react").FlexRow, {
                xstyle: u.top,
                columnGap: 2,
                children: [E, I],
              }),
              T,
            ],
          })
        : s.jsxs(r("WAWebFlexItem.react"), {
            xstyle: a && u.verticalHiddenOptionInfo,
            children: [
              s.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: u.top,
                columnGap: 2,
                children: E,
              }),
              T,
              I,
            ],
          });
    }
    m.displayName = m.name + " [from " + i.id + "]";
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
      var t = e.msg,
        n = e.onClick,
        a = e.result,
        i = e.showFacePile,
        l = i === void 0 ? !0 : i,
        m = e.theme,
        p = a.count,
        _ = a.votes,
        g = _.slice(0, d).map(function (e) {
          return f(e).id;
        }),
        h = m === "polls_sender" ? u.pollsSender : u.pollsReceiver,
        y = o("WAWebMsgGetters").getPollHideVoterNames(t) === !0,
        C =
          g.length > 0 &&
          l &&
          !y &&
          s.jsx(r("WAWebFacePile.react"), {
            faceSize: c,
            idsOrUrls: g,
            borderColor: h,
          }),
        b = s.jsxs(o("WAWebFlex.react").FlexRow, {
          columnGap: 4,
          children: [
            C,
            s.jsx(r("WAWebFlexItem.react"), {
              xstyle: u.voteCountContainer,
              children: s.jsx("span", {
                className: "x1pg5gke",
                children: r("WAWebL10N").d(p),
              }),
            }),
          ],
        });
      return n == null
        ? s.jsx("div", { className: "x78zum5 x13a6bvl", children: b })
        : s.jsx(r("WAWebUnstyledButton.react"), {
            tabIndex: -1,
            disabled: o("WAWebMsgGetters").getIsNewsletterMsg(t),
            xstyle: u.votersContainer,
            onClick: n,
            children: b,
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return e instanceof o("WAWebPollsPollVoteModel").PollVote
        ? o("WAWebFrontendPollVoteGetters").getSenderObj(e)
        : e;
    }
    l.default = m;
  },
  98,
);
