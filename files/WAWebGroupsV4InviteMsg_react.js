__d(
  "WAWebGroupsV4InviteMsg.react",
  [
    "cx",
    "fbt",
    "WAWebClassnames",
    "WAWebFrontendMsgGetters",
    "WAWebGroupsV4InviteModal.react",
    "WAWebMediaLinkPreview.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebProfileImage.react",
    "WAWebSpacerText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(50),
        n = e.displayAuthor,
        a = e.msg,
        i;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l;
        ((i = [
          (l = o("WAWebMsgGetters")).getId,
          l.getInviteCode,
          l.getInviteCodeExp,
          l.getInviteGrp,
          l.getInviteGrpName,
          l.getInviteGrpJpegThum,
          o("WAWebFrontendMsgGetters").getSenderObj,
          l.getComment,
          l.getIsSentByMe,
          l.getIsGroupMsg,
          l.getIsPSA,
          l.getIsGroupsV4InviteExpired,
          l.getType,
        ]),
          (t[0] = i));
      } else i = t[0];
      var s = o("useWAWebMsgValues").useMsgValues(e.msg.id, i),
        d = s[4],
        m = s[5],
        p = s[6],
        _ = s[7],
        f = s[8],
        g = s[11],
        h;
      t[1] !== a
        ? ((h = function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebGroupsV4InviteModal.react"), {
                msg: a,
                source: "invite_link",
              }),
            );
          }),
          (t[1] = a),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C = g,
        b = d,
        v;
      t[3] !== m
        ? ((v = c.jsx(r("WAWebProfileImage.react"), { size: 49, thumb: m })),
          (t[3] = m),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R;
      t[5] !== _ || t[6] !== a
        ? ((R = _
            ? c.jsx("div", {
                className: "_ajxo",
                children: c.jsx(r("WAWebMessageCaption.react"), {
                  msg: a.unsafe(),
                  spacer: !0,
                  trusted: o("WAWebMsgModelPropUtils").isTrusted(a.unsafe()),
                }),
              })
            : null),
          (t[5] = _),
          (t[6] = a),
          (t[7] = R))
        : (R = t[7]);
      var L = R,
        E;
      t[8] !== _ || t[9] !== y || t[10] !== C || t[11] !== f
        ? ((E = C
            ? null
            : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                  {
                    label: f
                      ? u._(/*BTDS*/ "View invite")
                      : u._(/*BTDS*/ "Join group"),
                    onClick: y,
                    testid: "invite-v4-open-invite",
                  },
                ],
                theme: _
                  ? void 0
                  : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                      .NO_DIVIDER,
              })),
          (t[8] = _),
          (t[9] = y),
          (t[10] = C),
          (t[11] = f),
          (t[12] = E))
        : (E = t[12]);
      var k = E,
        I = !C || !L,
        T;
      t[13] !== I || t[14] !== a
        ? ((T = I
            ? c.jsx("div", {
                className: "_ajxs",
                children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: a }),
              })
            : null),
          (t[13] = I),
          (t[14] = a),
          (t[15] = T))
        : (T = t[15]);
      var D = T,
        x;
      t[16] !== _ || t[17] !== a
        ? ((x = _
            ? u._(/*BTDS*/ "WhatsApp group invite")
            : c.jsx(r("WAWebSpacerText.react"), {
                msg: a.unsafe(),
                children: u._(/*BTDS*/ "WhatsApp group invite"),
              })),
          (t[16] = _),
          (t[17] = a),
          (t[18] = x))
        : (x = t[18]);
      var $ = x,
        P;
      if (C) {
        var N;
        t[19] !== L || t[20] !== a
          ? ((N = L
              ? u._(/*BTDS*/ "Invite expired")
              : c.jsx(r("WAWebSpacerText.react"), {
                  msg: a.unsafe(),
                  children: u._(/*BTDS*/ "Invite expired"),
                })),
            (t[19] = L),
            (t[20] = a),
            (t[21] = N))
          : (N = t[21]);
        var M = N,
          w;
        (t[22] !== M
          ? ((w = c.jsx("div", { className: "_ajxn", children: M })),
            (t[22] = M),
            (t[23] = w))
          : (w = t[23]),
          (P = w));
      }
      var A;
      t[24] !== a ? ((A = a.unsafe()), (t[24] = a), (t[25] = A)) : (A = t[25]);
      var F = !L,
        O;
      if (t[26] !== C || t[27] !== F) {
        var B;
        ((O = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((B = {}), (B._ajxq = C), (B._ajxr = F), (B._ajxm = !0), B),
        )),
          (t[26] = C),
          (t[27] = F),
          (t[28] = O));
      } else O = t[28];
      var W = C ? void 0 : y,
        q = C ? "extended" : void 0,
        U;
      t[29] !== S ||
      t[30] !== b ||
      t[31] !== f ||
      t[32] !== $ ||
      t[33] !== W ||
      t[34] !== q
        ? ((U = c.jsx("div", {
            className: "_ajxp",
            children: c.jsx(r("WAWebMediaLinkPreview.react"), {
              description: $,
              isInvite: !0,
              isSentByMe: f,
              onClick: W,
              thumbnail: S,
              title: b,
              theme: q,
              isLoading: !1,
            }),
          })),
          (t[29] = S),
          (t[30] = b),
          (t[31] = f),
          (t[32] = $),
          (t[33] = W),
          (t[34] = q),
          (t[35] = U))
        : (U = t[35]);
      var V;
      t[36] !== L ||
      t[37] !== D ||
      t[38] !== p ||
      t[39] !== P ||
      t[40] !== U ||
      t[41] !== A ||
      t[42] !== O
        ? ((V = c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: p,
            msg: A,
            className: O,
            children: [U, P, L, D],
          })),
          (t[36] = L),
          (t[37] = D),
          (t[38] = p),
          (t[39] = P),
          (t[40] = U),
          (t[41] = A),
          (t[42] = O),
          (t[43] = V))
        : (V = t[43]);
      var H;
      return (
        t[44] !== k || t[45] !== n || t[46] !== I || t[47] !== a || t[48] !== V
          ? ((H = c.jsxs(r("WAWebMessageTextBubble.react"), {
              msg: a,
              displayAuthor: n,
              hideMeta: I,
              children: [V, k],
            })),
            (t[44] = k),
            (t[45] = n),
            (t[46] = I),
            (t[47] = a),
            (t[48] = V),
            (t[49] = H))
          : (H = t[49]),
        H
      );
    }
    l.default = d;
  },
  226,
);
