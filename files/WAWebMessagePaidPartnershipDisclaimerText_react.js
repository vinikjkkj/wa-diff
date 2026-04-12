__d(
  "WAWebMessagePaidPartnershipDisclaimerText.react",
  [
    "fbt",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebText.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        text: { display: "x1lliihq", $$css: !0 },
        marginVert2: {
          marginTop: "xfl633f",
          marginBottom: "x13m54ha",
          $$css: !0,
        },
        marginBottom2: { marginBottom: "x13m54ha", $$css: !0 },
        marginBottom4: { marginBottom: "x4tpdpg", $$css: !0 },
        paddingStart4: { paddingInlineStart: "x181vq82", $$css: !0 },
      };
    function d(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getHasPaidPartnershipLabel,
        ]),
        r = n[0];
      if (
        r !== !0 ||
        !o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()
      )
        return null;
      var a = o("WAWebMsgGetters").getLinkPreview(t) != null,
        i = t.type === "ptt";
      return u.jsx(o("WAWebText.react").WAWebTextSmall, {
        weight: "normal",
        color: "secondary",
        testid: void 0,
        xstyle: [
          c.text,
          c.marginVert2,
          a && c.marginBottom2,
          i && c.marginBottom4,
          i && c.paddingStart4,
        ],
        children: s._(/*BTDS*/ "Paid partnership"),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
