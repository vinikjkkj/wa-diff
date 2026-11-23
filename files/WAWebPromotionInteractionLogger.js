__d(
  "WAWebPromotionInteractionLogger",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBuyerEventAttributes",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "receiver_log_key",
      d = "buyer_order_fs_log";
    function m(e) {
      return e === "coupon" ? "coupon_template" : "lto_template";
    }
    function p(e, t, n, r) {
      return f({
        businessWid: t,
        cta: "view_in_chat",
        entryPoint: r,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .CLICK_VIEW_IN_CHAT,
        kind: n,
        msgKey: e,
      });
    }
    function _(e, t, n, r) {
      return f({
        businessWid: t,
        cta: r ? "view" : "save",
        entryPoint: null,
        interaction: r
          ? o("WAWebWamEnumInteractionType").INTERACTION_TYPE
              .VIEW_COUPON_IN_PAYMENTS
          : o("WAWebWamEnumInteractionType").INTERACTION_TYPE
              .SAVE_OFFER_FOR_LATER,
        kind: n,
        msgKey: e,
      });
    }
    async function f(t) {
      try {
        await g(t);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[SAVED_PROMOTIONS] interaction not logged",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("saved-promotions-interaction-log-failed");
      }
    }
    async function g(e) {
      var t = e.businessWid,
        n = e.cta,
        r = e.entryPoint,
        a = e.interaction,
        i = e.kind,
        l = e.msgKey,
        s = m(i),
        u = await y(l.id),
        c = u != null ? await C(u, d) : null;
      new (o(
        "WAWebPsStructuredMessageInteractionWamEvent",
      ).PsStructuredMessageInteractionWamEvent)({
        businessOwnerJid: h(t),
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
        messageClassAttributes: JSON.stringify({
          cta: n,
          entry_point: r != null ? r : void 0,
          offer_type: s,
          order_funnel_id: u != null ? u : void 0,
        }),
        messageInteraction: a,
        messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE,
      }).commit();
      var p = o("WAWebBuyerEventAttributes").buyerEventAttributesToObject({
        cta: n,
        entryPoint: r != null ? r : void 0,
        isBizInPurchaseHub: r != null ? !0 : void 0,
        offerType: s,
        platform: "cpx",
      });
      (c != null && (p.order_funnel_id = c),
        new (o(
          "WAWebStructuredMessageBuyerInteractionWamEvent",
        ).StructuredMessageBuyerInteractionWamEvent)({
          messageClass: o("WAWebWamEnumStructuredMessageClass")
            .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
          messageClassAttributes: JSON.stringify(p),
          messageInteraction: a,
          messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE,
        }).commit());
    }
    function h(e) {
      var t, n;
      return e.isLid()
        ? (t =
            (n = o("WAWebApiContact").getPhoneNumber(
              o("WAWebWidFactory").asUserLidOrThrow(e),
            )) == null
              ? void 0
              : n.user) != null
          ? t
          : void 0
        : e.user;
    }
    function y(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return e === "" || t == null
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[SAVED_PROMOTIONS] no funnel id: no self LID or stanza id",
              ])),
          ),
          Promise.resolve(null))
        : C(c, e + t.toJid());
    }
    async function C(e, t) {
      try {
        var n = await new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
            e,
            t,
          ).genFunnelInfo(),
          a = n.funnel_id;
        return a === "" ? null : a;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[SAVED_PROMOTIONS] interaction funnel id not derived",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("saved-promotions-interaction-funnel-id-failed"),
          null
        );
      }
    }
    ((l.offerTypeForLogging = m),
      (l.logPromotionViewInChat = p),
      (l.logPromotionChatButtonTap = _));
  },
  98,
);
