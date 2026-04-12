__d(
  "WAWebAGMSignupMessage.react",
  [
    "fbt",
    "WAWebBizAGMSignupHeader.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBody.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebSendSignupResponseAction",
    "WAWebSignupCTAExperiment",
    "WAWebStateUtils",
    "WDSIconIcReply.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l = e.privacyPolicyUrl,
        c = o("WAWebStateUtils").unproxy(i),
        d = o("WAWebMsgModelPropUtils").isTrusted(c.unsafe()),
        m = o("useWAWebMsgValues").useMsgValues(i.id, [
          o("WAWebMsgGetters").getSignupCtaTapped,
        ]),
        p = m[0],
        _ = o("WAWebSignupCTAExperiment").getSignupCTAExperiment(),
        f = u.jsx(r("WAWebMessageTextBody.react"), {
          msg: c,
          displayType: a,
          handleLinkClick: null,
          trusted: d,
        }),
        g = u.jsx("div", {
          className: "x78zum5 x13a6bvl",
          "data-testid": void 0,
          children: u.jsx(o("WAWebMessageMeta.react").Meta, {
            msg: c,
            agmTag: o("WAWebMessageMeta.react").getAGMTag(),
          }),
        }),
        h = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
          items: [
            {
              label:
                _ ===
                o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers
                  ? s._(/*BTDS*/ "Get offers")
                  : s._(/*BTDS*/ "Sign up"),
              onClick: function () {
                return void o(
                  "WAWebSendSignupResponseAction",
                ).sendSignupResponse(t, i);
              },
              Icon: r("WDSIconIcReply.react"),
              disabled: p === !0,
            },
          ],
        });
      return u.jsx(r("WAWebMessageTextBubble.react"), {
        msg: c,
        displayType: a,
        displayAuthor: n,
        hideMeta: !0,
        useFixedWidth: c.isDynamicReplyButtonsMsg,
        children: u.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
          className: "x1gxa6cn",
          contact: c.senderObj,
          msg: c.unsafe(),
          children: [
            u.jsx(r("WAWebBizAGMSignupHeader.react"), {
              contact: t.contact,
              experiment: _,
              privacyPolicyUrl: l,
            }),
            u.jsxs(r("WAWebMessageSpacerText.react"), {
              msg: c.unsafe(),
              spacer: !1,
              "data-id": c.id,
              children: [f, g],
            }),
            h,
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
