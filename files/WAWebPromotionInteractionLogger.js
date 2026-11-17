__d(
  "WAWebPromotionInteractionLogger",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "receiver_log_key",
      m = "buyer_order_fs_log";
    function p(e) {
      return e === "coupon" ? "coupon_template" : "lto_template";
    }
    function _(e, t, n, r) {
      return g({
        businessWid: t,
        cta: "view_in_chat",
        entryPoint: r,
        interaction: o("WAWebWamEnumInteractionType").INTERACTION_TYPE
          .CLICK_VIEW_IN_CHAT,
        kind: n,
        msgKey: e,
      });
    }
    function f(e, t, n, r) {
      return g({
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield y(e);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[SAVED_PROMOTIONS] interaction not logged",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("saved-promotions-interaction-log-failed");
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.businessWid,
            n = e.cta,
            r = e.entryPoint,
            a = e.interaction,
            i = e.kind,
            l = e.msgKey,
            s = p(i),
            u = yield v(l.id),
            c = u != null ? yield S(u, m) : null;
          new (o(
            "WAWebPsStructuredMessageInteractionWamEvent",
          ).PsStructuredMessageInteractionWamEvent)({
            businessOwnerJid: b(t),
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
          var d = o("WAWebBuyerEventAttributes").buyerEventAttributesToObject({
            cta: n,
            entryPoint: r != null ? r : void 0,
            isBizInPurchaseHub: r != null ? !0 : void 0,
            offerType: s,
            platform: "cpx",
          });
          (c != null && (d.order_funnel_id = c),
            new (o(
              "WAWebStructuredMessageBuyerInteractionWamEvent",
            ).StructuredMessageBuyerInteractionWamEvent)({
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageClassAttributes: JSON.stringify(d),
              messageInteraction: a,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE,
            }).commit());
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
    function v(t) {
      var r = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return t === "" || r == null
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[SAVED_PROMOTIONS] no funnel id: no self LID or stanza id",
              ])),
          ),
          (c || (c = n("Promise"))).resolve(null))
        : S(d, t + r.toJid());
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield new (o(
                "WAWebP2XFunnelIdGenerator",
              ).P2XFunnelIdGenerator)(e, t).genFunnelInfo(),
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
        })),
        R.apply(this, arguments)
      );
    }
    ((l.offerTypeForLogging = p),
      (l.logPromotionViewInChat = _),
      (l.logPromotionChatButtonTap = f));
  },
  98,
);
