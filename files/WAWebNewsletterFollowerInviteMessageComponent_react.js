__d(
  "WAWebNewsletterFollowerInviteMessageComponent.react",
  [
    "cx",
    "fbt",
    "WAWebChannelOpenFromInviteWamEvent",
    "WAWebChatEntryPoint",
    "WAWebClassnames",
    "WAWebFrontendMsgGetters",
    "WAWebMediaLinkPreview.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterExecApiCmd",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebProfileImage.react",
    "WAWebSpacerText.react",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelUserType",
    "WAWebWamEnumTsSurface",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react"));
    function d(e) {
      var t,
        n = e.displayAuthor,
        a = e.msg,
        i = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getNewsletterFollowerInviteInfo,
          o("WAWebMsgGetters").getType,
        ]),
        l = i[0],
        s = i[1],
        d = i[2];
      if (d == null) return null;
      var m = function () {
          if (
            o(
              "WAWebNewsletterGatingUtils",
            ).isChannelInviteContactsToFollowReceiverLoggingEnabled()
          ) {
            var e,
              t = r("WAWebNewsletterMetadataCollection").get(d.newsletterId),
              n =
                (e = o(
                  "WAWebNewsletterLoggingUtils",
                ).getChannelUserTypeFromMembershipType(t)) != null
                  ? e
                  : o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST,
              a = new (o(
                "WAWebChannelOpenFromInviteWamEvent",
              ).ChannelOpenFromInviteWamEvent)({
                cid: d.newsletterId.user,
                channelEntryPoint: o("WAWebWamEnumChannelEntryPoint")
                  .CHANNEL_ENTRY_POINT.INVITE_CONTACTS_TO_FOLLOW_MESSAGE,
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .CHAT_THREAD,
                channelUserType: n,
              });
            a.commit();
          }
          o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
            identifier: d.newsletterId.toString(),
            identifierType: o("WAWebNewsletterApiParse")
              .NewsletterIdentifierType.Id,
            type: "view",
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .DirectMessage,
            discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
          });
        },
        p = d.inviteMessage,
        _ = d.newsletterId,
        f = d.newsletterName,
        g = c.jsx(r("WAWebProfileImage.react"), { size: 49, wid: _ }),
        h = p
          ? c.jsx("div", {
              className: "_ajxo",
              children: c.jsx(r("WAWebMessageCaption.react"), {
                msg: a.unsafe(),
                spacer: !0,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
              }),
            })
          : null,
        y = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
          items: [
            {
              label: u._(/*BTDS*/ "View channel"),
              onClick: m,
              testid: "invite-newsletter-follower",
            },
          ],
        }),
        C = c.jsx("div", {
          className: "_ajxs",
          children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }),
        }),
        b = u._(/*BTDS*/ "Channel follow invite"),
        v = p
          ? b
          : c.jsx(r("WAWebSpacerText.react"), { msg: a.unsafe(), children: b });
      return c.jsxs(r("WAWebMessageTextBubble.react"), {
        msg: a,
        displayAuthor: n,
        hideMeta: !0,
        testid: void 0,
        children: [
          c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: l,
            msg: a.unsafe(),
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              ((t = {}), (t._ajxr = !h), (t._ajxm = !0), t),
            ),
            children: [
              c.jsx("div", {
                className: "_ajxp",
                children: c.jsx(r("WAWebMediaLinkPreview.react"), {
                  description: v,
                  isInvite: !0,
                  isSentByMe: s,
                  onClick: m,
                  thumbnail: g,
                  title: f,
                  isLoading: !1,
                }),
              }),
              h,
              C,
            ],
          }),
          y,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
