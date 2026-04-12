__d(
  "WAWebNewsletterAdminInviteMessageComponent.react",
  [
    "cx",
    "fbt",
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
    "WAWebNewsletterViewInviteAction",
    "WAWebProfileImage.react",
    "WAWebSpacerText.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = e.useCallback;
    function m(e) {
      var t,
        n,
        a = e.displayAuthor,
        i = e.msg,
        l = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          (n = o("WAWebMsgGetters")).getId,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getIsSentByMe,
          n.getIsNewsletterAdminInviteExpired,
          n.getNewsletterAdminInviteInfo,
          n.getType,
          o("WAWebFrontendMsgGetters").getIsNewsletterInviteAccepted,
          n.getTo,
        ]),
        s = l[0],
        m = l[1],
        p = l[2],
        _ = l[3],
        f = l[4],
        g = l[5],
        h = l[6],
        y = l[7],
        C = _ || h,
        b = d(
          function () {
            o("WAWebNewsletterViewInviteAction").viewNewsletterInviteAction({
              newsletterWid: f == null ? void 0 : f.newsletterId,
              expiration: f == null ? void 0 : f.inviteExpiration,
              invitee: y,
              isSentByMe: p,
            });
          },
          [f, y, p],
        );
      if (f == null) return null;
      var v = f.inviteMessage,
        S = f.newsletterId,
        R = f.newsletterName,
        L = c.jsx(r("WAWebProfileImage.react"), { size: 49, wid: S }),
        E = v
          ? c.jsx("div", {
              className: "_ajxo",
              children: c.jsx(r("WAWebMessageCaption.react"), {
                msg: i.unsafe(),
                spacer: !0,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
              }),
            })
          : null,
        k = C
          ? null
          : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              items: [
                {
                  label: u._(/*BTDS*/ "View invite"),
                  onClick: b,
                  testid: "invite-newsletter-admin",
                },
              ],
            }),
        I = !C || !E,
        T = I
          ? c.jsx("div", {
              className: "_ajxs",
              children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }),
            })
          : null,
        D = u._(/*BTDS*/ "WhatsApp channel admin invite"),
        x = v
          ? D
          : c.jsx(r("WAWebSpacerText.react"), { msg: i.unsafe(), children: D }),
        $;
      if (C) {
        var P = E
          ? u._(/*BTDS*/ "Invite expired")
          : c.jsx(r("WAWebSpacerText.react"), {
              msg: i.unsafe(),
              children: u._(/*BTDS*/ "Invite expired"),
            });
        $ = c.jsx("div", { className: "_ajxn", children: P });
      }
      return c.jsxs(r("WAWebMessageTextBubble.react"), {
        msg: i,
        displayAuthor: a,
        hideMeta: I,
        testid: void 0,
        children: [
          c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: m,
            msg: i.unsafe(),
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              ((t = {}), (t._ajxq = C), (t._ajxr = !E), (t._ajxm = !0), t),
            ),
            children: [
              c.jsx("div", {
                className: "_ajxp",
                children: c.jsx(r("WAWebMediaLinkPreview.react"), {
                  description: x,
                  isInvite: !0,
                  isSentByMe: p,
                  onClick: C ? void 0 : b,
                  thumbnail: L,
                  title: R,
                  theme: C ? "extended" : void 0,
                  isLoading: !1,
                }),
              }),
              $,
              E,
              T,
            ],
          }),
          k,
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
