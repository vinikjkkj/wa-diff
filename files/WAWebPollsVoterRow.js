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
    "WAWebOrgNameWithIcon.react",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteModel",
    "WAWebTextSizeUtils",
    "react",
    "stylex",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebOrgMemberBadge",
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
      var t = e.vote,
        n = c.jsx(y, { timestamp: t.time * 1e3 }),
        r = c.jsx(_, { vote: t, fallbackNode: n });
      return c.jsx(C, {
        primary: r,
        primaryDetail: null,
        id: t.id,
        secondary: t.contact != null ? n : null,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.fallbackNode,
        n = e.vote,
        r = n.contact;
      return r == null ? t : c.jsx(f, { contact: r, fallbackNode: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
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
        ? c.jsx(h, { formattedUserName: a, accessibleUserName: null })
        : n;
    }
    f.displayName = f.name + " [from " + i.id + "]";
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
          o("WAWebFrontendContactGetters").getIsMyContact,
        ]),
        f = _[0],
        g = _[1],
        v = _[2],
        S = _[3],
        R = _[4],
        L = _[5],
        E = _[6],
        k = _[7],
        I = o("useWAWebContactValues").useContactValues(u.id, [
          o("WAWebFrontendContactGetters").getShownMemberName,
        ]),
        T = I[0],
        D = r("useWAWebOrgMemberBadge")(u, f),
        x = o("WAWebFrontendMsgGetters").getChat(p.unsafe()),
        $ =
          a != null &&
          !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(x) &&
          !E &&
          o("WAWebABProps").getABPropConfigValue(
            "enable_poll_results_contact_info_entry_point",
          ),
        P = $
          ? function () {
              var t = ++m;
              if (
                !(
                  o("WAWebChatGetters").getIsGroup(x) &&
                  b(
                    o(
                      "WAWebGroupAgentProfileRouting",
                    ).getGroupAgentProfileDestination(f, x),
                    u,
                    x,
                    i,
                  )
                )
              ) {
                var n = o("WAWebChatGetters").getIsGroup(x)
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
        N = r("useWAWebContactFormattedUsernameOrPhoneByChat")(x, u),
        M = N.formattedUsernameOrPhone,
        w = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(x),
        A =
          o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(u) &&
          (w ||
            (R && S === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)),
        F,
        O;
      return (
        T != null && !k
          ? ((F = c.jsx(r("WAWebOrgNameWithIcon.react"), {
              membership: D,
              children: c.jsx(h, {
                accessibleUserName: void 0,
                formattedUserName: T,
              }),
            })),
            (O = null))
          : A
            ? ((F = c.jsx(h, {
                accessibleUserName: o(
                  "WAWebChatContactUtils",
                ).getAccessibleNotifyName(v),
                formattedUserName: o(
                  "WAWebChatContactUtils",
                ).getFormattedNotifyName(v),
              })),
              (O = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                text: M,
              })))
            : R && L != null
              ? ((F = c.jsx(h, {
                  accessibleUserName: o(
                    "WAWebChatContactUtils",
                  ).getAccessibleNotifyName(L),
                  formattedUserName: o(
                    "WAWebChatContactUtils",
                  ).getFormattedNotifyName(L),
                })),
                (O = c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  direction: "auto",
                  text: M,
                })))
              : ((F = c.jsx(h, {
                  accessibleUserName: void 0,
                  formattedUserName: g,
                })),
                (O = null)),
        c.jsx(C, {
          id: f,
          onClick: P,
          primary: F,
          primaryDetail: O,
          secondary: c.jsx(y, { timestamp: d }),
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.accessibleUserName,
        n = e.formattedUserName,
        r = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
        a = r.pollDetailsOptionTextSize;
      return c.jsx(o("WAWebEmojiText.react").EmojiText, {
        direction: "auto",
        text: n,
        ariaLabel: t,
        titlify: !0,
        ellipsify: !0,
        xstyle: a,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.timestamp,
        n = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
        a = n.pollDetailsOptionTextSize,
        i = o("WAWebClock").Clock.relativeDateAndTimeStr(t / 1e3);
      return c.jsx(
        "span",
        babelHelpers.extends(
          { title: String(i) },
          (s || (s = r("stylex"))).props(a),
          { children: i },
        ),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.id,
        n = e.onClick,
        a = e.primary,
        i = e.primaryDetail,
        l = e.secondary,
        s = n != null;
      return c.jsx(r("WAWebChatCell.react"), {
        contextEnabled: o("WAWebBoolFunc").returnFalse,
        handleKeyboardClick: s,
        idle: !s,
        image: c.jsx(o("WAWebDetailImage.react").DetailImage, {
          xstyle: d.marginInlineStart9,
          id: t,
          size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
        }),
        onClick: n,
        primary: a,
        primaryDetail: i,
        secondary: l,
        theme: "chat-info",
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
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
      var t = e.onOpenContactInfo,
        n = e.onOpenGroupAgentProfile,
        r = e.vote;
      return r instanceof o("WAWebPollsPollVoteModel").PollVote
        ? c.jsx(g, {
            vote: r,
            onOpenContactInfo: t,
            onOpenGroupAgentProfile: n,
          })
        : c.jsx(p, { vote: r });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  98,
);
