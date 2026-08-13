__d(
  "WAWebUprWamLogger",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "receiver_log_key",
      m = "upr_message_id",
      p = "universal_payment_request",
      _ = "upr_payment_options",
      f = "individual",
      g = "group",
      h = "broadcast",
      y = "newsletter",
      C = Object.freeze({
        OPEN_PAYMENT_LINK: "open_payment_link",
        COPY_PAYMENT_KEY: "copy_payment_key",
        VIEW_PAYMENT_OPTIONS: "view_payment_options",
        VIEW_DETAILS: "view_details",
      }),
      b = Object.freeze(
        ((e = {}),
        (e[C.OPEN_PAYMENT_LINK] = (c = o(
          "WAWebWamEnumInteractionType",
        )).INTERACTION_TYPE.USER_OPEN_BROWSER),
        (e[C.COPY_PAYMENT_KEY] = c.INTERACTION_TYPE.CLICK_COPY_PAYMENT_KEY),
        (e[C.VIEW_PAYMENT_OPTIONS] = c.INTERACTION_TYPE.CLICK_PAYMENT_DETAILS),
        (e[C.VIEW_DETAILS] = c.INTERACTION_TYPE.CLICK_ORDER_SUMMARY),
        e),
      );
    function v(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? g
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? h
          : o("WAWebChatGetters").getIsNewsletter(e)
            ? y
            : f;
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              e,
              t,
            ),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
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
      $({
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
    function E(e) {
      var t = e.chat,
        n = e.cta,
        r = e.identifierType,
        o = e.info,
        a = e.msg,
        i = e.paymentMethodChoice,
        l = b[n],
        s = v(t),
        u = r == null ? void 0 : r.toLowerCase(),
        c = {
          cta: p,
          is_upr: !0,
          payment_method_choice: i,
          identifier_type: u,
          is_single_option: o.paymentOptions.length === 1,
          chat_type: s,
          currency: o.currency,
        },
        d = {
          cta: p,
          isUpr: !0,
          paymentMethodChoice: i,
          identifierType: u,
          chatType: s,
          currency: o.currency,
        };
      L({ buyerAttributes: d, interaction: l, msg: a, psAttributes: c });
    }
    function k(e) {
      var t = e.totalAmount;
      if (!(t == null || t.offset === 0)) return t.value / t.offset;
    }
    function I(e) {
      var t = e.msg;
      L({
        msg: t,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_VIEW,
        psAttributes: { is_upr: !0, screen: _ },
        buyerAttributes: { isUpr: !0, screen: _ },
      });
    }
    function T(e, t) {
      var n = e.info,
        r = e.msg,
        a = t.identifierType.toLowerCase(),
        i = n.currency === "" ? void 0 : n.currency;
      L({
        msg: r,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .CLICK_COPY_PAYMENT_KEY,
        psAttributes: {
          is_upr: !0,
          screen: _,
          method_type: t.accountType,
          identifier_type: a,
          order_amount: k(n),
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
    function D(e) {
      var t = e.info,
        n = e.msg,
        r = t.currency === "" ? void 0 : t.currency;
      L({
        msg: n,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_OPEN_BROWSER,
        psAttributes: {
          is_upr: !0,
          screen: _,
          method_type: "payment_link",
          order_amount: k(t),
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
    function x(e) {
      var t = e.msg;
      L({
        msg: t,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_CANCEL,
        psAttributes: { is_upr: !0, screen: _ },
        buyerAttributes: { isUpr: !0, screen: _ },
      });
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.businessOwnerJid,
            r = e.buyerAttributes,
            a = e.interaction,
            i = e.msg,
            l = e.psAttributes,
            s = i.id.id + i.to.toJid(),
            c = yield (u || (u = n("Promise"))).all([S(d, s), S(m, i.id.id)]),
            p = c[0],
            _ = c[1];
          (new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)({
            bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
            businessOwnerJid: t,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageClassAttributes: JSON.stringify(
              babelHelpers.extends({}, l, {
                message_id: _,
                order_funnel_id: p,
              }),
            ),
            messageInteraction: a,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
          }).commit(),
            yield o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
              attributes: babelHelpers.extends({}, r, { messageId: _ }),
              bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
              interaction: a,
              isLoggingEnabled: !0,
              psFunnelId: p,
            }));
        })),
        P.apply(this, arguments)
      );
    }
    ((l.UprCtaType = C),
      (l.logUprInteractionWAMEvent = E),
      (l.logUprPaymentOptionsViewWAMEvent = I),
      (l.logUprPaymentOptionCopyWAMEvent = T),
      (l.logUprPaymentOptionOpenLinkWAMEvent = D),
      (l.logUprPaymentOptionsDismissWAMEvent = x));
  },
  98,
);
