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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
        n = e.dir,
        a = e.msg,
        i = e.rtl,
        l = e.type,
        d;
      t[0] !== a ? ((d = m(a)), (t[0] = a), (t[1] = d)) : (d = t[1]);
      var p = d;
      if (p == null) return null;
      var _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = r("WAWebL10N").isRTL()), (t[2] = _))
        : (_ = t[2]);
      var f = i !== _,
        g;
      t[3] !== p
        ? ((g = s._(
            /*BTDS*/ "Seller verified by {Payment service provider name}",
            [s._param("Payment service provider name", p)],
          )),
          (t[3] = p),
          (t[4] = g))
        : (g = t[4]);
      var h = g,
        y;
      t[5] !== f || t[6] !== l
        ? ((y = {
            0: "x1tiyuxx xyri2b x18d9i69 x1c1uobl xxk0z11",
            2: "xxk0z11 x1gxa6cn x1uc92m x1nbhmlj x181vq82",
            1: "x1tiyuxx xyri2b x1c1uobl xxk0z11 xv6tirj",
            3: "xxk0z11 x1gxa6cn x1uc92m x181vq82 xv6tirj",
          }[((l !== o("WAWebMsgType").MSG_TYPE.CHAT) << 1) | (!!f << 0)]),
          (t[5] = f),
          (t[6] = l),
          (t[7] = y))
        : (y = t[7]);
      var C = !i,
        b;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(r("WDSIconIcShieldVerifiedFilled.react"), {
            iconXstyle: c.icon,
            height: 16,
            width: 16,
          })),
          (t[8] = b))
        : (b = t[8]);
      var v;
      t[9] !== n || t[10] !== f || t[11] !== h
        ? ((v = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: c.footerText,
            text: h,
            direction: n,
            dirMismatch: f,
            testid: void 0,
          })),
          (t[9] = n),
          (t[10] = f),
          (t[11] = h),
          (t[12] = v))
        : (v = t[12]);
      var S;
      return (
        t[13] !== a || t[14] !== y || t[15] !== C || t[16] !== v
          ? ((S = u.jsxs(r("WAWebMessageSpacerText.react"), {
              className: y,
              spacer: C,
              msg: a,
              children: [b, v],
            })),
            (t[13] = a),
            (t[14] = y),
            (t[15] = C),
            (t[16] = v),
            (t[17] = S))
          : (S = t[17]),
        S
      );
    }
    function m(e) {
      var t = o("WAWebMsgGetters").getPaymentLinkPreviewMetaTags(e);
      return t == null ? void 0 : t.providerName;
    }
    l.default = d;
  },
  226,
);
