__d(
  "WAWebPollsVoterRow",
  [
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebChatCell.react",
    "WAWebChatContactUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteModel",
    "WAWebTextSizeUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = e.vote,
        n = u.jsx(f, { timestamp: t.time * 1e3 }),
        r = u.jsx(d, { vote: t, fallbackNode: n });
      return u.jsx(g, {
        primary: r,
        primaryDetail: null,
        id: t.id,
        secondary: t.contact != null ? n : null,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.fallbackNode,
        n = e.vote,
        r = n.contact;
      return r == null ? t : u.jsx(m, { contact: r, fallbackNode: t });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.contact,
        n = e.fallbackNode,
        r = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebFrontendContactGetters").getIsMyContact,
          o("WAWebContactGetters").getIsMe,
        ]),
        a = r[0],
        i = r[1],
        l = r[2];
      return i || l
        ? u.jsx(_, { formattedUserName: a, accessibleUserName: null })
        : n;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n = e.vote,
        a = o("useWAWebPollVoteValues").usePollVoteValues(n.id, [
          o("WAWebFrontendPollVoteGetters").getSenderObj,
          o("WAWebPollVoteGetters").getTimestamp,
          o("WAWebFrontendPollVoteGetters").getParentMsg,
        ]),
        i = a[0],
        l = a[1],
        s = a[2],
        c = o("useWAWebContactValues").useContactValues(i.id, [
          (t = o("WAWebContactGetters")).getId,
          o("WAWebFrontendContactGetters").getFormattedName,
          t.getNotifyName,
          t.getVerifiedLevel,
          t.getIsBusiness,
          t.getVerifiedName,
        ]),
        d = c[0],
        m = c[1],
        p = c[2],
        h = c[3],
        y = c[4],
        C = c[5],
        b = o("WAWebFrontendMsgGetters").getChat(s.unsafe()),
        v = r("useWAWebContactFormattedUsernameOrPhoneByChat")(b, i),
        S = v.formattedUsernameOrPhone,
        R = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(b),
        L =
          o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(i) &&
          (R ||
            (y && h === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)),
        E,
        k;
      return (
        L
          ? ((E = u.jsx(_, {
              accessibleUserName: o(
                "WAWebChatContactUtils",
              ).getAccessibleNotifyName(p),
              formattedUserName: o(
                "WAWebChatContactUtils",
              ).getFormattedNotifyName(p),
            })),
            (k = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: S,
            })))
          : y && C != null
            ? ((E = u.jsx(_, {
                accessibleUserName: o(
                  "WAWebChatContactUtils",
                ).getAccessibleNotifyName(C),
                formattedUserName: o(
                  "WAWebChatContactUtils",
                ).getFormattedNotifyName(C),
              })),
              (k = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: S,
              })))
            : ((E = u.jsx(_, {
                accessibleUserName: void 0,
                formattedUserName: m,
              })),
              (k = null)),
        u.jsx(g, {
          id: d,
          primary: E,
          primaryDetail: k,
          secondary: u.jsx(f, { timestamp: l }),
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.accessibleUserName,
        n = e.formattedUserName,
        r = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
        a = r.pollDetailsOptionTextSize;
      return u.jsx(o("WAWebEmojiText.react").EmojiText, {
        direction: "auto",
        text: n,
        ariaLabel: t,
        titlify: !0,
        ellipsify: !0,
        xstyle: a,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var n = t.timestamp,
        a = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
        i = a.pollDetailsOptionTextSize,
        l = o("WAWebClock").Clock.relativeDateAndTimeStr(n / 1e3);
      return u.jsx(
        "span",
        babelHelpers.extends({ title: l }, (e || (e = r("stylex"))).props(i), {
          children: l,
        }),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.id,
        n = e.primary,
        a = e.primaryDetail,
        i = e.secondary;
      return u.jsx(r("WAWebChatCell.react"), {
        contextEnabled: o("WAWebBoolFunc").returnFalse,
        image: u.jsx(o("WAWebDetailImage.react").DetailImage, {
          xstyle: o("WAWebUISpacing").uiMargin.start9,
          id: t,
          size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
        }),
        primary: n,
        secondary: i,
        primaryDetail: a,
        style: { cursor: "auto" },
        theme: "chat-info",
        idle: !0,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.vote;
      return t instanceof o("WAWebPollsPollVoteModel").PollVote
        ? u.jsx(p, { vote: t })
        : u.jsx(c, { vote: t });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
