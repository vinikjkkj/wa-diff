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
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react"));
    function d(e) {
      var t,
        n,
        a = e.displayAuthor,
        i = e.msg,
        l = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          (n = o("WAWebMsgGetters")).getId,
          n.getInviteCode,
          n.getInviteCodeExp,
          n.getInviteGrp,
          n.getInviteGrpName,
          n.getInviteGrpJpegThum,
          o("WAWebFrontendMsgGetters").getSenderObj,
          n.getComment,
          n.getIsSentByMe,
          n.getIsGroupMsg,
          n.getIsPSA,
          n.getIsGroupsV4InviteExpired,
          n.getType,
        ]),
        s = l[0],
        d = l[1],
        m = l[2],
        p = l[3],
        _ = l[4],
        f = l[5],
        g = l[6],
        h = l[7],
        y = l[8],
        C = l[9],
        b = l[10],
        v = l[11],
        S = l[12],
        R = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebGroupsV4InviteModal.react"), {
              msg: i,
              source: "invite_link",
            }),
          );
        },
        L = v,
        E = _,
        k = c.jsx(r("WAWebProfileImage.react"), { size: 49, thumb: f }),
        I = h
          ? c.jsx("div", {
              className: "_ajxo",
              children: c.jsx(r("WAWebMessageCaption.react"), {
                msg: i.unsafe(),
                spacer: !0,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(i.unsafe()),
              }),
            })
          : null,
        T = L
          ? null
          : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              items: [
                {
                  label: y
                    ? u._(/*BTDS*/ "View invite")
                    : u._(/*BTDS*/ "Join group"),
                  onClick: R,
                  testid: "invite-v4-open-invite",
                },
              ],
              theme: h
                ? void 0
                : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .NO_DIVIDER,
            }),
        D = !L || !I,
        x = D
          ? c.jsx("div", {
              className: "_ajxs",
              children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: i }),
            })
          : null,
        $ = h
          ? u._(/*BTDS*/ "WhatsApp group invite")
          : c.jsx(r("WAWebSpacerText.react"), {
              msg: i.unsafe(),
              children: u._(/*BTDS*/ "WhatsApp group invite"),
            }),
        P;
      if (L) {
        var N = I
          ? u._(/*BTDS*/ "Invite expired")
          : c.jsx(r("WAWebSpacerText.react"), {
              msg: i.unsafe(),
              children: u._(/*BTDS*/ "Invite expired"),
            });
        P = c.jsx("div", { className: "_ajxn", children: N });
      }
      return c.jsxs(r("WAWebMessageTextBubble.react"), {
        msg: i,
        displayAuthor: a,
        hideMeta: D,
        children: [
          c.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: g,
            msg: i.unsafe(),
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              ((t = {}), (t._ajxq = L), (t._ajxr = !I), (t._ajxm = !0), t),
            ),
            children: [
              c.jsx("div", {
                className: "_ajxp",
                children: c.jsx(r("WAWebMediaLinkPreview.react"), {
                  description: $,
                  isInvite: !0,
                  isSentByMe: y,
                  onClick: L ? void 0 : R,
                  thumbnail: k,
                  title: E,
                  theme: L ? "extended" : void 0,
                  isLoading: !1,
                }),
              }),
              P,
              I,
              x,
            ],
          }),
          T,
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
