__d(
  "WAWebPollsVoterRow",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebChatCell.react",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebGroupAgentProfileRouting",
    "WAWebOpenGroupAgentProfile.react",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteModel",
    "WAWebTextSizeUtils",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = { marginInlineStart9: { marginInlineStart: "x1y3qizg", $$css: !0 } },
      m = 0;
    function p(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.vote,
        r = n.time * 1e3,
        a;
      t[0] !== r
        ? ((a = c.jsx(y, { timestamp: r })), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== i || t[3] !== n
        ? ((l = c.jsx(_, { vote: n, fallbackNode: i })),
          (t[2] = i),
          (t[3] = n),
          (t[4] = l))
        : (l = t[4]);
      var s = l,
        u = n.contact != null ? i : null,
        d;
      return (
        t[5] !== s || t[6] !== u || t[7] !== n.id
          ? ((d = c.jsx(C, {
              primary: s,
              primaryDetail: null,
              id: n.id,
              secondary: u,
            })),
            (t[5] = s),
            (t[6] = u),
            (t[7] = n.id),
            (t[8] = d))
          : (d = t[8]),
        d
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.fallbackNode,
        r = e.vote,
        a = r.contact;
      if (a == null) return n;
      var i;
      return (
        t[0] !== a || t[1] !== n
          ? ((i = c.jsx(f, { contact: a, fallbackNode: n })),
            (t[0] = a),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.contact,
        r = e.fallbackNode,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebFrontendContactGetters").getIsMyContact,
            o("WAWebContactGetters").getIsMe,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebContactValues").useContactValues(n.id, a),
        l = i[0],
        s = i[1],
        u = i[2],
        d;
      return (
        t[1] !== r || t[2] !== l || t[3] !== u || t[4] !== s
          ? ((d =
              s || u
                ? c.jsx(h, { formattedUserName: l, accessibleUserName: null })
                : r),
            (t[1] = r),
            (t[2] = l),
            (t[3] = u),
            (t[4] = s),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function g(t) {
      var n,
        a = t.onOpenContactInfo,
        i = t.onOpenGroupAgentProfile,
        l = t.vote,
        s = o("useWAWebPollVoteValues").usePollVoteValues(l.id, [
          o("WAWebFrontendPollVoteGetters").getSenderObj,
          o("WAWebPollVoteGetters").getTimestamp,
          o("WAWebFrontendPollVoteGetters").getParentMsg,
        ]),
        u = s[0],
        d = s[1],
        p = s[2],
        _ = o("useWAWebContactValues").useContactValues(u.id, [
          (n = o("WAWebContactGetters")).getId,
          o("WAWebFrontendContactGetters").getFormattedName,
          n.getNotifyName,
          n.getVerifiedLevel,
          n.getIsBusiness,
          n.getVerifiedName,
          n.getIsMe,
        ]),
        f = _[0],
        g = _[1],
        v = _[2],
        S = _[3],
        R = _[4],
        L = _[5],
        E = _[6],
        k = o("WAWebFrontendMsgGetters").getChat(p.unsafe()),
        I =
          a != null &&
          !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(k) &&
          !E &&
          o("WAWebABProps").getABPropConfigValue(
            "enable_poll_results_contact_info_entry_point",
          ),
        T = I
          ? function () {
              var t = ++m;
              if (
                !(
                  o("WAWebChatGetters").getIsGroup(k) &&
                  b(
                    o(
                      "WAWebGroupAgentProfileRouting",
                    ).getGroupAgentProfileDestination(f, k),
                    u,
                    k,
                    i,
                  )
                )
              ) {
                var n = o("WAWebChatGetters").getIsGroup(k)
                  ? o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
                      f,
                      "poll_voter_row",
                    )
                  : f;
                n != null &&
                  o("WAWebFindChatAction")
                    .findOrCreateLatestChat(n, "pollVoterRow")
                    .then(function (e) {
                      var n = e.chat;
                      t === m && (a == null || a(n));
                    })
                    .catch(function () {
                      return o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[polls] failed to open voter contact info",
                            ])),
                        )
                        .sendLogs("polls-voter-open-contact-info");
                    });
              }
            }
          : null,
        D = r("useWAWebContactFormattedUsernameOrPhoneByChat")(k, u),
        x = D.formattedUsernameOrPhone,
        $ = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(k),
        P =
          o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(u) &&
          ($ ||
            (R && S === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)),
        N,
        M;
      return (
        P
          ? ((N = c.jsx(h, {
              accessibleUserName: o(
                "WAWebChatContactUtils",
              ).getAccessibleNotifyName(v),
              formattedUserName: o(
                "WAWebChatContactUtils",
              ).getFormattedNotifyName(v),
            })),
            (M = c.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: x,
            })))
          : R && L != null
            ? ((N = c.jsx(h, {
                accessibleUserName: o(
                  "WAWebChatContactUtils",
                ).getAccessibleNotifyName(L),
                formattedUserName: o(
                  "WAWebChatContactUtils",
                ).getFormattedNotifyName(L),
              })),
              (M = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: x,
              })))
            : ((N = c.jsx(h, {
                accessibleUserName: void 0,
                formattedUserName: g,
              })),
              (M = null)),
        c.jsx(C, {
          id: f,
          onClick: T,
          primary: N,
          primaryDetail: M,
          secondary: c.jsx(y, { timestamp: d }),
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.accessibleUserName,
        r = e.formattedUserName,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebTextSizeUtils").getWAWebTextSizeStyles()), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l = i.pollDetailsOptionTextSize,
        s;
      return (
        t[1] !== n || t[2] !== r
          ? ((s = c.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: r,
              ariaLabel: n,
              titlify: !0,
              ellipsify: !0,
              xstyle: l,
            })),
            (t[1] = n),
            (t[2] = r),
            (t[3] = s))
          : (s = t[3]),
        s
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.timestamp,
        a,
        i,
        l;
      if (t[0] !== n) {
        var u = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
          d = u.pollDetailsOptionTextSize;
        ((a = o("WAWebClock").Clock.relativeDateAndTimeStr(n / 1e3)),
          (i = a),
          (l = (s || (s = r("stylex"))).props(d)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l));
      } else ((a = t[1]), (i = t[2]), (l = t[3]));
      var m;
      return (
        t[4] !== a || t[5] !== i || t[6] !== l
          ? ((m = c.jsx(
              "span",
              babelHelpers.extends({ title: i }, l, { children: a }),
            )),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.id,
        a = e.onClick,
        i = e.primary,
        l = e.primaryDetail,
        s = e.secondary,
        u = a != null,
        m = !u,
        p;
      t[0] !== n
        ? ((p = c.jsx(o("WAWebDetailImage.react").DetailImage, {
            xstyle: d.marginInlineStart9,
            id: n,
            size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
          })),
          (t[0] = n),
          (t[1] = p))
        : (p = t[1]);
      var _;
      return (
        t[2] !== u ||
        t[3] !== a ||
        t[4] !== i ||
        t[5] !== l ||
        t[6] !== s ||
        t[7] !== m ||
        t[8] !== p
          ? ((_ = c.jsx(r("WAWebChatCell.react"), {
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              handleKeyboardClick: u,
              idle: m,
              image: p,
              onClick: a,
              primary: i,
              primaryDetail: l,
              secondary: s,
              theme: "chat-info",
            })),
            (t[2] = u),
            (t[3] = a),
            (t[4] = i),
            (t[5] = l),
            (t[6] = s),
            (t[7] = m),
            (t[8] = p),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    function b(e, t, n, r) {
      return r == null
        ? o("WAWebOpenGroupAgentProfile.react").openGroupAgentProfile(
            e,
            t,
            n,
            "pollVoterRow",
          )
        : o("WAWebOpenGroupAgentProfile.react").openGroupAgentProfileStep(
            e,
            t,
            n,
            r,
          );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onOpenContactInfo,
        r = e.onOpenGroupAgentProfile,
        a = e.vote,
        i;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a
          ? ((i =
              a instanceof o("WAWebPollsPollVoteModel").PollVote
                ? c.jsx(g, {
                    vote: a,
                    onOpenContactInfo: n,
                    onOpenGroupAgentProfile: r,
                  })
                : c.jsx(p, { vote: a })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = v;
  },
  98,
);
