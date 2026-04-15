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
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = e.useCallback;
    function m(e) {
      var t = o("react-compiler-runtime").c(52),
        n = e.displayAuthor,
        a = e.msg,
        i;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l;
        ((i = [
          (l = o("WAWebMsgGetters")).getId,
          o("WAWebFrontendMsgGetters").getSenderObj,
          l.getIsSentByMe,
          l.getIsNewsletterAdminInviteExpired,
          l.getNewsletterAdminInviteInfo,
          l.getType,
          o("WAWebFrontendMsgGetters").getIsNewsletterInviteAccepted,
          l.getTo,
        ]),
          (t[0] = i));
      } else i = t[0];
      var s = o("useWAWebMsgValues").useMsgValues(e.msg.id, i),
        d = s[1],
        m = s[2],
        p = s[3],
        _ = s[4],
        f = s[6],
        g = s[7],
        h = p || f,
        y;
      t[1] !== g ||
      t[2] !== m ||
      t[3] !== (_ == null ? void 0 : _.inviteExpiration) ||
      t[4] !== (_ == null ? void 0 : _.newsletterId)
        ? ((y = function () {
            o("WAWebNewsletterViewInviteAction").viewNewsletterInviteAction({
              newsletterWid: _ == null ? void 0 : _.newsletterId,
              expiration: _ == null ? void 0 : _.inviteExpiration,
              invitee: g,
              isSentByMe: m,
            });
          }),
          (t[1] = g),
          (t[2] = m),
          (t[3] = _ == null ? void 0 : _.inviteExpiration),
          (t[4] = _ == null ? void 0 : _.newsletterId),
          (t[5] = y))
        : (y = t[5]);
      var C = y;
      if (_ == null) return null;
      var b = _.inviteMessage,
        v = _.newsletterId,
        S = _.newsletterName,
        R;
      t[6] !== v
        ? ((R = c.jsx(r("WAWebProfileImage.react"), { size: 49, wid: v })),
          (t[6] = v),
          (t[7] = R))
        : (R = t[7]);
      var L = R,
        E;
      t[8] !== b || t[9] !== a
        ? ((E = b
            ? c.jsx("div", {
                className: "_ajxo",
                children: c.jsx(r("WAWebMessageCaption.react"), {
                  msg: a.unsafe(),
                  spacer: !0,
                  trusted: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
                }),
              })
            : null),
          (t[8] = b),
          (t[9] = a),
          (t[10] = E))
        : (E = t[10]);
      var k = E,
        I;
      t[11] !== C || t[12] !== h
        ? ((I = h
            ? null
            : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                  {
                    label: u._(/*BTDS*/ "View invite"),
                    onClick: C,
                    testid: "invite-newsletter-admin",
                  },
                ],
              })),
          (t[11] = C),
          (t[12] = h),
          (t[13] = I))
        : (I = t[13]);
      var T = I,
        D = !h || !k,
        x;
      t[14] !== D || t[15] !== a
        ? ((x = D
            ? c.jsx("div", {
                className: "_ajxs",
                children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }),
              })
            : null),
          (t[14] = D),
          (t[15] = a),
          (t[16] = x))
        : (x = t[16]);
      var $ = x,
        P;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = u._(/*BTDS*/ "WhatsApp channel admin invite")), (t[17] = P))
        : (P = t[17]);
      var N = P,
        M;
      t[18] !== b || t[19] !== a
        ? ((M = b
            ? N
            : c.jsx(r("WAWebSpacerText.react"), {
                msg: a.unsafe(),
                children: N,
              })),
          (t[18] = b),
          (t[19] = a),
          (t[20] = M))
        : (M = t[20]);
      var w = M,
        A;
      if (h) {
        var F;
        t[21] !== k || t[22] !== a
          ? ((F = k
              ? u._(/*BTDS*/ "Invite expired")
              : c.jsx(r("WAWebSpacerText.react"), {
                  msg: a.unsafe(),
                  children: u._(/*BTDS*/ "Invite expired"),
                })),
            (t[21] = k),
            (t[22] = a),
            (t[23] = F))
          : (F = t[23]);
        var O = F,
          B;
        (t[24] !== O
          ? ((B = c.jsx("div", { className: "_ajxn", children: O })),
            (t[24] = O),
            (t[25] = B))
          : (B = t[25]),
          (A = B));
      }
      var W;
      t[26] !== a ? ((W = a.unsafe()), (t[26] = a), (t[27] = W)) : (W = t[27]);
      var q = !k,
        U;
      if (t[28] !== h || t[29] !== q) {
        var V;
        ((U = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((V = {}), (V._ajxq = h), (V._ajxr = q), (V._ajxm = !0), V),
        )),
          (t[28] = h),
          (t[29] = q),
          (t[30] = U));
      } else U = t[30];
      var H = h ? void 0 : C,
        G = h ? "extended" : void 0,
        z;
      t[31] !== m ||
      t[32] !== S ||
      t[33] !== L ||
      t[34] !== w ||
      t[35] !== H ||
      t[36] !== G
        ? ((z = c.jsx("div", {
            className: "_ajxp",
            children: c.jsx(r("WAWebMediaLinkPreview.react"), {
              description: w,
              isInvite: !0,
              isSentByMe: m,
              onClick: H,
              thumbnail: L,
              title: S,
              theme: G,
              isLoading: !1,
            }),
          })),
          (t[31] = m),
          (t[32] = S),
          (t[33] = L),
          (t[34] = w),
          (t[35] = H),
          (t[36] = G),
          (t[37] = z))
        : (z = t[37]);
      var j;
      t[38] !== k ||
      t[39] !== $ ||
      t[40] !== d ||
      t[41] !== A ||
      t[42] !== U ||
      t[43] !== z ||
      t[44] !== W
        ? ((j = c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: d,
            msg: W,
            className: U,
            children: [z, A, k, $],
          })),
          (t[38] = k),
          (t[39] = $),
          (t[40] = d),
          (t[41] = A),
          (t[42] = U),
          (t[43] = z),
          (t[44] = W),
          (t[45] = j))
        : (j = t[45]);
      var K;
      return (
        t[46] !== T || t[47] !== n || t[48] !== D || t[49] !== a || t[50] !== j
          ? ((K = c.jsxs(r("WAWebMessageTextBubble.react"), {
              msg: a,
              displayAuthor: n,
              hideMeta: D,
              testid: void 0,
              children: [j, T],
            })),
            (t[46] = T),
            (t[47] = n),
            (t[48] = D),
            (t[49] = a),
            (t[50] = j),
            (t[51] = K))
          : (K = t[51]),
        K
      );
    }
    l.default = m;
  },
  226,
);
