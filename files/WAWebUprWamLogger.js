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
      _ = "upr_payment_bubble",
      f = "upr_payment_options",
      g = 200,
      h = new Set(),
      y = "individual",
      C = "group",
      b = "broadcast",
      v = "newsletter",
      S = Object.freeze({
        OPEN_PAYMENT_LINK: "open_payment_link",
        COPY_PAYMENT_KEY: "copy_payment_key",
        VIEW_PAYMENT_OPTIONS: "view_payment_options",
        VIEW_DETAILS: "view_details",
      }),
      R = Object.freeze(
        ((e = {}),
        (e[S.OPEN_PAYMENT_LINK] = (c = o(
          "WAWebWamEnumInteractionType",
        )).INTERACTION_TYPE.USER_OPEN_BROWSER),
        (e[S.COPY_PAYMENT_KEY] = c.INTERACTION_TYPE.CLICK_COPY_PAYMENT_KEY),
        (e[S.VIEW_PAYMENT_OPTIONS] = c.INTERACTION_TYPE.CLICK_PAYMENT_DETAILS),
        (e[S.VIEW_DETAILS] = c.INTERACTION_TYPE.CLICK_ORDER_SUMMARY),
        e),
      );
    function L(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? C
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? b
          : o("WAWebChatGetters").getIsNewsletter(e)
            ? v
            : y;
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              e,
              t,
            ),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
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
      w({
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
    function T(e) {
      var t = e.chat,
        n = e.cta,
        r = e.identifierType,
        o = e.info,
        a = e.msg,
        i = e.paymentMethodChoice,
        l = R[n],
        s = L(t),
        u = r == null ? void 0 : r.toLowerCase(),
        c = {
          cta: p,
          is_upr: !0,
          payment_method_choice: i,
          identifier_type: u,
          is_single_option: o.paymentOptions.length === 1,
          chat_type: s,
          currency: o.currency,
          order_amount: x(o),
        },
        d = {
          cta: p,
          isUpr: !0,
          paymentMethodChoice: i,
          identifierType: u,
          chatType: s,
          currency: o.currency,
        };
      I({ buyerAttributes: d, interaction: l, msg: a, psAttributes: c });
    }
    function D(e) {
      var t = e.direction,
        n = e.msg;
      if (!h.has(n.id.id)) {
        if (h.size >= g) {
          var r = h.values().next().value;
          r != null && h.delete(r);
        }
        (h.add(n.id.id),
          I({
            msg: n,
            interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
              .USER_VIEW,
            psAttributes: { direction: t, is_upr: !0, screen: _ },
          }));
      }
    }
    function x(e) {
      var t = e.totalAmount;
      if (!(t == null || t.offset === 0)) return t.value / t.offset;
    }
    function $(e) {
      var t = e.msg;
      I({
        msg: t,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_VIEW,
        psAttributes: { is_upr: !0, screen: f },
        buyerAttributes: { isUpr: !0, screen: f },
      });
    }
    function P(e, t) {
      var n = e.info,
        r = e.msg,
        a = t.identifierType.toLowerCase(),
        i = n.currency === "" ? void 0 : n.currency;
      I({
        msg: r,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .CLICK_COPY_PAYMENT_KEY,
        psAttributes: {
          is_upr: !0,
          screen: f,
          method_type: t.accountType,
          identifier_type: a,
          order_amount: x(n),
          currency: i,
        },
        buyerAttributes: {
          isUpr: !0,
          screen: f,
          methodType: t.accountType,
          identifierType: a,
          currency: i,
        },
      });
    }
    function N(e) {
      var t = e.info,
        n = e.msg,
        r = t.currency === "" ? void 0 : t.currency;
      I({
        msg: n,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_OPEN_BROWSER,
        psAttributes: {
          is_upr: !0,
          screen: f,
          method_type: "payment_link",
          order_amount: x(t),
          currency: r,
        },
        buyerAttributes: {
          isUpr: !0,
          screen: f,
          methodType: "payment_link",
          currency: r,
        },
      });
    }
    function M(e) {
      var t = e.msg;
      I({
        msg: t,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .USER_CANCEL,
        psAttributes: { is_upr: !0, screen: f },
        buyerAttributes: { isUpr: !0, screen: f },
      });
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.businessOwnerJid,
            r = e.buyerAttributes,
            a = e.interaction,
            i = e.msg,
            l = e.psAttributes,
            s = i.id.id + i.to.toJid(),
            c = yield (u || (u = n("Promise"))).all([E(d, s), E(m, i.id.id)]),
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
            r != null &&
              (yield o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
                attributes: babelHelpers.extends({}, r, { messageId: _ }),
                bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
                interaction: a,
                isLoggingEnabled: !0,
                psFunnelId: p,
              })));
        })),
        A.apply(this, arguments)
      );
    }
    ((l.UprCtaType = S),
      (l.logUprInteractionWAMEvent = T),
      (l.logUprBubbleViewWAMEvent = D),
      (l.logUprPaymentOptionsViewWAMEvent = $),
      (l.logUprPaymentOptionCopyWAMEvent = P),
      (l.logUprPaymentOptionOpenLinkWAMEvent = N),
      (l.logUprPaymentOptionsDismissWAMEvent = M));
  },
  98,
);
