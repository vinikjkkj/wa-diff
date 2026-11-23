__d(
  "WAWebUprWamLogger",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebBuyerEventLogger",
    "WAWebChatGetters",
    "WAWebMsgGetters",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "receiver_log_key",
      d = "upr_message_id",
      m = "universal_payment_request",
      p = "upr_payment_bubble",
      _ = "upr_payment_options",
      f = 200,
      g = new Set(),
      h = "individual",
      y = "group",
      C = "broadcast",
      b = "newsletter",
      v = n("$InternalEnum")({
        OPEN_PAYMENT_LINK: "open_payment_link",
        COPY_PAYMENT_KEY: "copy_payment_key",
        VIEW_PAYMENT_OPTIONS: "view_payment_options",
        VIEW_DETAILS: "view_details",
      }),
      S = Object.freeze(
        ((e = {}),
        (e[v.OPEN_PAYMENT_LINK] = (u = o(
          "WAWebWamEnumInteractionType",
        )).INTERACTION_TYPE.USER_OPEN_BROWSER),
        (e[v.COPY_PAYMENT_KEY] = u.INTERACTION_TYPE.CLICK_COPY_PAYMENT_KEY),
        (e[v.VIEW_PAYMENT_OPTIONS] = u.INTERACTION_TYPE.CLICK_PAYMENT_DETAILS),
        (e[v.VIEW_DETAILS] = u.INTERACTION_TYPE.CLICK_ORDER_SUMMARY),
        e),
      );
    function R(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? y
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? C
          : o("WAWebChatGetters").getIsNewsletter(e)
            ? b
            : h;
    }
    async function L(e, t) {
      var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(e, t),
        r = await n.genFunnelInfo(),
        a = r.funnel_id;
      return a;
    }
    function E(e) {
      var t,
        n,
        r = e.buyerAttributes,
        a = e.interaction,
        i = e.msg,
        l = e.psAttributes,
        u = i.unsafe(),
        c =
          (t = o("WAWebMsgGetters").getBusinessOwnerJid(u)) != null
            ? t
            : (n = o("WAWebMsgGetters").getSender(u)) == null
              ? void 0
              : n.toJid();
      N({
        buyerAttributes: r,
        businessOwnerJid: c,
        interaction: a,
        msg: i,
        psAttributes: l,
      }).catch(function (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[WAM:UPR] interaction log err: ",
              "",
            ])),
          e,
        );
      });
    }
    function k(e) {
      var t = e.chat,
        n = e.cta,
        r = e.identifierType,
        o = e.info,
        a = e.msg,
        i = e.paymentMethodChoice,
        l = S[n],
        s = R(t),
        u = r == null ? void 0 : r.toLowerCase(),
        c = {
          cta: m,
          is_upr: !0,
          payment_method_choice: i,
          identifier_type: u,
          is_single_option: o.paymentOptions.length === 1,
          chat_type: s,
          currency: o.currency,
          order_amount: T(o),
        },
        d = {
          cta: m,
          isUpr: !0,
          paymentMethodChoice: i,
          identifierType: u,
          chatType: s,
          currency: o.currency,
        };
      E({ buyerAttributes: d, interaction: l, msg: a, psAttributes: c });
    }
    function I(e) {
      var t = e.direction,
        n = e.msg;
      if (!g.has(n.id.id)) {
        if (g.size >= f) {
          var r = g.values().next().value;
          r != null && g.delete(r);
        }
        (g.add(n.id.id),
          E({
            msg: n,
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
              .USER_VIEW,
            psAttributes: { direction: t, is_upr: !0, screen: p },
          }));
      }
    }
    function T(e) {
      var t = e.totalAmount;
      if (!(t == null || t.offset === 0)) return t.value / t.offset;
    }
    function D(e) {
      var t = e.msg;
      E({
        msg: t,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_VIEW,
        psAttributes: { is_upr: !0, screen: _ },
        buyerAttributes: { isUpr: !0, screen: _ },
      });
    }
    function x(e, t) {
      var n = e.info,
        r = e.msg,
        a = t.identifierType.toLowerCase(),
        i = n.currency === "" ? void 0 : n.currency;
      E({
        msg: r,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .CLICK_COPY_PAYMENT_KEY,
        psAttributes: {
          is_upr: !0,
          screen: _,
          method_type: t.accountType,
          identifier_type: a,
          order_amount: T(n),
          currency: i,
        },
        buyerAttributes: {
          isUpr: !0,
          screen: _,
          methodType: t.accountType,
          identifierType: a,
          currency: i,
        },
      });
    }
    function $(e) {
      var t = e.info,
        n = e.msg,
        r = t.currency === "" ? void 0 : t.currency;
      E({
        msg: n,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_OPEN_BROWSER,
        psAttributes: {
          is_upr: !0,
          screen: _,
          method_type: "payment_link",
          order_amount: T(t),
          currency: r,
        },
        buyerAttributes: {
          isUpr: !0,
          screen: _,
          methodType: "payment_link",
          currency: r,
        },
      });
    }
    function P(e) {
      var t = e.msg;
      E({
        msg: t,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_CANCEL,
        psAttributes: { is_upr: !0, screen: _ },
        buyerAttributes: { isUpr: !0, screen: _ },
      });
    }
    async function N(e) {
      var t = e.businessOwnerJid,
        n = e.buyerAttributes,
        r = e.interaction,
        a = e.msg,
        i = e.psAttributes,
        l = a.id.id + a.to.toJid(),
        s = await Promise.all([L(c, l), L(d, a.id.id)]),
        u = s[0],
        m = s[1];
      (new (o(
        "WAWebPsStructuredMessageInteractionWamEvent",
      ).PsStructuredMessageInteractionWamEvent)({
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
        businessOwnerJid: t,
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageClassAttributes: JSON.stringify(
          babelHelpers.extends({}, i, { message_id: m, order_funnel_id: u }),
        ),
        messageInteraction: r,
        messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
      }).commit(),
        n != null &&
          !a.id.fromMe &&
          (await o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
            attributes: babelHelpers.extends({}, n, { messageId: m }),
            bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
            interaction: r,
            isLoggingEnabled: !0,
            psFunnelId: u,
          })));
    }
    ((l.UprCtaType = v),
      (l.logUprInteractionWAMEvent = k),
      (l.logUprBubbleViewWAMEvent = I),
      (l.logUprPaymentOptionsViewWAMEvent = D),
      (l.logUprPaymentOptionCopyWAMEvent = x),
      (l.logUprPaymentOptionOpenLinkWAMEvent = $),
      (l.logUprPaymentOptionsDismissWAMEvent = P));
  },
  98,
);
