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
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WAWebMsgLinks",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptionBar",
    "WAWebPollsPollVoteModel",
    "WAWebSpoilerRevealLogger",
    "WAWebTextSizeUtils",
    "WAWebUnstyledButton.react",
    "react",
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
      var t = e.checkBoxId,
        n = e.checked,
        a = e.hideResults,
        i = e.index,
        l = e.isAdminOrOwner,
        s = e.isCorrectOption,
        d = e.isPollEnded,
        m = e.layout,
        p = e.msgKey,
        g = e.name,
        h = e.onDetailImageClick,
        y = e.option,
        C = e.result,
        b = e.selectable,
        v = e.showFacePile,
        S = e.trusted,
        R = o("useWAWebMsgValues").useMsgValues(
          p,
          o("WAWebMsgCasts").castToPollMsg,
          [o("WAWebMsgGetters").getIsSentByMe],
        ),
        L = R[0],
        E = L ? "polls_sender" : "polls_receiver",
        k = u.jsx(_, {
          checkBoxId: t,
          index: i,
          isPollEnded: d,
          msgKey: p,
          name: g,
          option: y,
          selectable: b,
          trusted: S,
        }),
        I = o("WAWebPollsGatingUtils").isTappableLinksInPollOptionEnabled(),
        T =
          !a &&
          u.jsx(f, {
            msgKey: p,
            theme: E,
            onClick: I ? void 0 : h,
            result: C,
            showFacePile: v,
          }),
        D = u.jsx(r("WAWebPollsOptionBar"), {
          result: a ? void 0 : C,
          isPollSentByMe: L,
          isAdminOrOwner: l,
          checked: n,
          isCorrectOption: s,
        });
      return m === "horizontal"
        ? u.jsxs(r("WAWebFlexItem.react"), {
            children: [
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                xstyle: c.top,
                columnGap: 2,
                children: [k, T],
              }),
              D,
            ],
          })
        : u.jsxs(r("WAWebFlexItem.react"), {
            xstyle: a && c.verticalHiddenOptionInfo,
            children: [
              u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: c.top,
                columnGap: 2,
                children: k,
              }),
              D,
              T,
            ],
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
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
      var t = e.msgKey,
        n = e.onClick,
        a = e.result,
        i = e.showFacePile,
        l = i === void 0 ? !0 : i,
        p = e.theme,
        _ = o("useWAWebMsgValues").useMsgValues(t, [
          o("WAWebMsgGetters").getPollHideVoterNames,
          o("WAWebMsgGetters").getIsNewsletterMsg,
        ]),
        f = _[0],
        h = _[1],
        y = a.count,
        C = a.votes,
        b = C.slice(0, m).map(function (e) {
          return g(e).id;
        }),
        v = p === "polls_sender" ? c.pollsSender : c.pollsReceiver,
        S = f === !0,
        R =
          b.length > 0 &&
          l &&
          !S &&
          u.jsx(r("WAWebFacePile.react"), {
            faceSize: d,
            idsOrUrls: b,
            borderColor: v,
          }),
        L = u.jsxs(o("WAWebFlex.react").FlexRow, {
          columnGap: 4,
          children: [
            R,
            u.jsx(r("WAWebFlexItem.react"), {
              xstyle: c.voteCountContainer,
              children: u.jsx("span", {
                className: "x1pg5gke",
                children: r("WAWebL10N").d(y),
              }),
            }),
          ],
        });
      return n == null
        ? u.jsx("div", { className: "x78zum5 x13a6bvl", children: L })
        : u.jsx(r("WAWebUnstyledButton.react"), {
            title: s._(/*BTDS*/ ""),
            disabled: h,
            xstyle: c.votersContainer,
            onClick: n,
            children: L,
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return e instanceof o("WAWebPollsPollVoteModel").PollVote
        ? o("WAWebFrontendPollVoteGetters").getSenderObj(e)
        : e;
    }
    l.default = p;
  },
  226,
);
