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
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(39),
        n = e.displayAuthor,
        a = e.msg,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebFrontendMsgGetters").getSenderObj,
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getNewsletterFollowerInviteInfo,
            o("WAWebMsgGetters").getType,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useMsgValues(e.msg.id, i),
        s = l[0],
        d = l[1],
        m = l[2];
      if (m == null) return null;
      var p;
      t[1] !== m.newsletterId
        ? ((p = function () {
            if (
              o(
                "WAWebNewsletterGatingUtils",
              ).isChannelInviteContactsToFollowReceiverLoggingEnabled()
            ) {
              var e,
                t = r("WAWebNewsletterMetadataCollection").get(m.newsletterId),
                n =
                  (e = o(
                    "WAWebNewsletterLoggingUtils",
                  ).getChannelUserTypeFromMembershipType(t)) != null
                    ? e
                    : o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST,
                a = new (o(
                  "WAWebChannelOpenFromInviteWamEvent",
                ).ChannelOpenFromInviteWamEvent)({
                  cid: m.newsletterId.user,
                  channelEntryPoint: o("WAWebWamEnumChannelEntryPoint")
                    .CHANNEL_ENTRY_POINT.INVITE_CONTACTS_TO_FOLLOW_MESSAGE,
                  discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                    .CHAT_THREAD,
                  channelUserType: n,
                });
              a.commit();
            }
            o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
              identifier: m.newsletterId.toString(),
              identifierType: o("WAWebNewsletterApiParse")
                .NewsletterIdentifierType.Id,
              type: "view",
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .DirectMessage,
              discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                .CHAT_THREAD,
            });
          }),
          (t[1] = m.newsletterId),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f = m.inviteMessage,
        g = m.newsletterId,
        h = m.newsletterName,
        y;
      t[3] !== g
        ? ((y = c.jsx(r("WAWebProfileImage.react"), { size: 49, wid: g })),
          (t[3] = g),
          (t[4] = y))
        : (y = t[4]);
      var C = y,
        b;
      t[5] !== f || t[6] !== a
        ? ((b = f
            ? c.jsx("div", {
                className: "_ajxo",
                children: c.jsx(r("WAWebMessageCaption.react"), {
                  msg: a.unsafe(),
                  spacer: !0,
                  trusted: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
                }),
              })
            : null),
          (t[5] = f),
          (t[6] = a),
          (t[7] = b))
        : (b = t[7]);
      var v = b,
        S;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u._(/*BTDS*/ "View channel")), (t[8] = S))
        : (S = t[8]);
      var R;
      t[9] !== _
        ? ((R = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
            items: [
              { label: S, onClick: _, testid: "invite-newsletter-follower" },
            ],
          })),
          (t[9] = _),
          (t[10] = R))
        : (R = t[10]);
      var L = R,
        E;
      t[11] !== a
        ? ((E = c.jsx("div", {
            className: "_ajxs",
            children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }),
          })),
          (t[11] = a),
          (t[12] = E))
        : (E = t[12]);
      var k = E,
        I;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u._(/*BTDS*/ "Channel follow invite")), (t[13] = I))
        : (I = t[13]);
      var T = I,
        D;
      t[14] !== f || t[15] !== a
        ? ((D = f
            ? T
            : c.jsx(r("WAWebSpacerText.react"), {
                msg: a.unsafe(),
                children: T,
              })),
          (t[14] = f),
          (t[15] = a),
          (t[16] = D))
        : (D = t[16]);
      var x = D,
        $;
      t[17] !== a ? (($ = a.unsafe()), (t[17] = a), (t[18] = $)) : ($ = t[18]);
      var P = !v,
        N;
      if (t[19] !== P) {
        var M;
        ((N = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((M = {}), (M._ajxr = P), (M._ajxm = !0), M),
        )),
          (t[19] = P),
          (t[20] = N));
      } else N = t[20];
      var w;
      t[21] !== _ || t[22] !== d || t[23] !== h || t[24] !== C || t[25] !== x
        ? ((w = c.jsx("div", {
            className: "_ajxp",
            children: c.jsx(r("WAWebMediaLinkPreview.react"), {
              description: x,
              isInvite: !0,
              isSentByMe: d,
              onClick: _,
              thumbnail: C,
              title: h,
              isLoading: !1,
            }),
          })),
          (t[21] = _),
          (t[22] = d),
          (t[23] = h),
          (t[24] = C),
          (t[25] = x),
          (t[26] = w))
        : (w = t[26]);
      var A;
      t[27] !== v ||
      t[28] !== k ||
      t[29] !== s ||
      t[30] !== N ||
      t[31] !== w ||
      t[32] !== $
        ? ((A = c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: s,
            msg: $,
            className: N,
            children: [w, v, k],
          })),
          (t[27] = v),
          (t[28] = k),
          (t[29] = s),
          (t[30] = N),
          (t[31] = w),
          (t[32] = $),
          (t[33] = A))
        : (A = t[33]);
      var F;
      return (
        t[34] !== L || t[35] !== n || t[36] !== a || t[37] !== A
          ? ((F = c.jsxs(r("WAWebMessageTextBubble.react"), {
              msg: a,
              displayAuthor: n,
              hideMeta: !0,
              testid: void 0,
              children: [A, L],
            })),
            (t[34] = L),
            (t[35] = n),
            (t[36] = a),
            (t[37] = A),
            (t[38] = F))
          : (F = t[38]),
        F
      );
    }
    l.default = d;
  },
  226,
);
