__d(
  "WAWebPaymentLinkTrustSignalFooter.react",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebL10N",
    "WAWebMessageSpacerText.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WDSIconIcShieldVerifiedFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        icon: {
          display: "x1rg5ohu",
          color: "x1bvqhpb",
          verticalAlign: "xxymvpz",
          marginInlineEnd: "x16q7b9a",
          $$css: !0,
        },
        footerText: {
          color: "xhslqc4",
          fontSize: "x1pg5gke",
          lineHeight: "x1d3mw78",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.dir,
        n = e.msg,
        a = e.rtl,
        i = e.type,
        l = m(n);
      if (l == null) return null;
      var d = a !== r("WAWebL10N").isRTL(),
        p = s._(/*BTDS*/ "Seller verified by {Payment service provider name}", [
          s._param("Payment service provider name", l),
        ]);
      return u.jsxs(r("WAWebMessageSpacerText.react"), {
        className: {
          0: "x1tiyuxx xyri2b x18d9i69 x1c1uobl xxk0z11",
          2: "xxk0z11 x1gxa6cn x1uc92m x1nbhmlj x181vq82",
          1: "x1tiyuxx xyri2b x1c1uobl xxk0z11 xv6tirj",
          3: "xxk0z11 x1gxa6cn x1uc92m x181vq82 xv6tirj",
        }[((i !== o("WAWebMsgType").MSG_TYPE.CHAT) << 1) | (!!d << 0)],
        spacer: !a,
        msg: n,
        children: [
          u.jsx(r("WDSIconIcShieldVerifiedFilled.react"), {
            iconXstyle: c.icon,
            height: 16,
            width: 16,
          }),
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: c.footerText,
            text: p,
            direction: t,
            dirMismatch: d,
            testid: void 0,
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = o("WAWebMsgGetters").getPaymentLinkPreviewMetaTags(e);
      return t == null ? void 0 : t.providerName;
    }
    l.default = d;
  },
  226,
);
