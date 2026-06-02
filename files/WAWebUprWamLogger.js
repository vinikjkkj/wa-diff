__d(
  "WAWebUprWamLogger",
  [
    "P2XFunnelIdGenerator",
    "WALogger",
    "WAWebBuyerEventLogger",
    "WAWebChatGetters",
    "WAWebMsgGetters",
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
      c = "receiver_log_key",
      d = "individual",
      m = "group",
      p = "broadcast",
      _ = "newsletter",
      f = Object.freeze({
        OPEN_PAYMENT_LINK: "open_payment_link",
        COPY_PAYMENT_KEY: "copy_payment_key",
        VIEW_PAYMENT_OPTIONS: "view_payment_options",
        VIEW_DETAILS: "view_details",
      }),
      g = Object.freeze(
        ((e = {}),
        (e[f.OPEN_PAYMENT_LINK] = (u = o(
          "WAWebWamEnumInteractionType",
        )).INTERACTION_TYPE.USER_OPEN_BROWSER),
        (e[f.COPY_PAYMENT_KEY] = u.INTERACTION_TYPE.CLICK_COPY_PAYMENT_KEY),
        (e[f.VIEW_PAYMENT_OPTIONS] = u.INTERACTION_TYPE.CLICK_PAYMENT_DETAILS),
        (e[f.VIEW_DETAILS] = u.INTERACTION_TYPE.CLICK_ORDER_SUMMARY),
        e),
      );
    function h(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? m
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? p
          : o("WAWebChatGetters").getIsNewsletter(e)
            ? _
            : d;
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("P2XFunnelIdGenerator").P2XFunnelIdGenerator)(e, t),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t,
        n = e.chat,
        r = e.cta,
        a = e.info,
        i = e.msg,
        l = e.paymentMethodChoice,
        u = g[r],
        c =
          (t = o("WAWebMsgGetters").getSender(i.unsafe())) == null
            ? void 0
            : t.user,
        d = h(n),
        m = {
          flow: "upr",
          cta: r,
          payment_method_choice: l,
          is_single_option: a.paymentOptions.length === 1,
          chat_type: d,
          currency: a.currency,
        },
        p = {
          flow: "upr",
          cta: r,
          paymentMethodChoice: l,
          chatType: d,
          currency: a.currency,
        };
      v({
        buyerAttributes: p,
        businessOwnerJid: c,
        interaction: u,
        msg: i,
        psAttributes: m,
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.businessOwnerJid,
            n = e.buyerAttributes,
            r = e.interaction,
            a = e.msg,
            i = e.psAttributes,
            l = a.id.id + a.to.toJid(),
            s = yield y(c, l);
          (new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)({
            bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
            businessOwnerJid: t,
            messageClass: o("WAWebWamEnumStructuredMessageClass")
              .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
            messageClassAttributes: JSON.stringify(
              babelHelpers.extends({}, i, { order_funnel_id: s }),
            ),
            messageInteraction: r,
            messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
          }).commit(),
            yield o("WAWebBuyerEventLogger").submitBuyerInteractionEvent({
              attributes: n,
              bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI,
              interaction: r,
              isLoggingEnabled: !0,
              psFunnelId: s,
            }));
        })),
        S.apply(this, arguments)
      );
    }
    ((l.UprCtaType = f), (l.logUprInteractionWAMEvent = b));
  },
  98,
);
