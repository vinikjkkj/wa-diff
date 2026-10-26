__d(
  "WAWebPaymentRequestWamLogger",
  [
    "Promise",
    "WALogger",
    "WAWebBrPaymentMethodKey",
    "WAWebBrPaymentMethodSurface",
    "WAWebBrPaymentRequest",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPaymentRequestForwarding",
    "WAWebPrivacyModeSystemMsg",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = "pix",
      f = "offsite_card",
      g = "payment_request",
      h = "payment_options_sheet_shown",
      y = "payment_request_template_cta",
      C = "payment_request_text_cta",
      b = "receiver_log_key",
      v = "buyer_order_fs_log",
      S = "cpx",
      R = "individual",
      L = "group",
      E = "broadcast",
      k = "newsletter",
      I = "BRL",
      T = new Map([
        [_, o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_PIX_CODE],
        [
          (p = o("WAWebBrPaymentRequest")).PaymentRequestCtaType.BOLETO,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.COPY_BOLETO_CODE,
        ],
        [
          p.PaymentRequestCtaType.PAYMENT_LINK,
          o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_PAY_NOW,
        ],
      ]),
      D = new Map([
        [p.PaymentRequestCtaType.PIX_DYNAMIC_CODE, _],
        [p.PaymentRequestCtaType.OFFSITE_CARD_PAY, f],
      ]),
      x = "server_unspecified";
    function $(e) {
      var t,
        n = e == null ? void 0 : e.weightsVersion;
      return n == null
        ? {
            payment_method_weights_version: void 0,
            payment_method_rank_changed: void 0,
            payment_method_pinned: void 0,
          }
        : {
            payment_method_weights_version: n,
            payment_method_rank_changed: e == null ? void 0 : e.rankChanged,
            payment_method_pinned:
              (t = e == null ? void 0 : e.pinnedEntry) != null ? t : void 0,
          };
    }
    function P(e) {
      var t = [];
      for (var n of e.orderedMethodKeys) {
        var r = o("WAWebBrPaymentMethodKey").getGenericPaymentMethodName(n);
        r != null && !t.includes(r) && t.push(r);
      }
      return JSON.stringify(t);
    }
    function N(e) {
      return e.rankSource == null || e.rankSource === "" ? x : e.rankSource;
    }
    function M(e) {
      var t;
      return (t = D.get(e)) != null ? t : e;
    }
    function w(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      );
    }
    function A(e) {
      var t,
        n = (t = e.interactivePayload) == null ? void 0 : t.buttons;
      if (n == null) return [];
      var r = [];
      for (var a of n) {
        var i = o("WAWebBrPaymentRequest").parsePaymentRequestButton(a);
        i != null && r.push(M(i.paymentType));
      }
      return r;
    }
    function F(e) {
      var t, n, r;
      return ((t = e.from) == null ? void 0 : t.isGroup()) === !0
        ? L
        : ((n = e.broadcastId) == null ? void 0 : n.isBroadcast()) === !0
          ? E
          : ((r = e.from) == null ? void 0 : r.isNewsletter()) === !0
            ? k
            : R;
    }
    function O(e) {
      var t;
      return (t = o("WAWebMsgGetters").getSender(e)) == null ? void 0 : t.user;
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
              e,
              t,
            ),
            r = yield n.genFunnelInfo(),
            a = r.funnel_id;
          return a;
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(e),
            a = !r && e.templateId != null,
            i = yield V(e, r),
            l = i.buyerFunnelId,
            s = i.failedOriginalFunnel,
            u = i.psFunnelId,
            c = A(e),
            d = r
              ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
              : re(e, t),
            m = {
              cta: g,
              p2m_flow: a ? y : C,
              accepted_payment_method:
                c.length > 0 ? JSON.stringify(c) : void 0,
              order_funnel_id: u,
              chat_type: F(e),
            };
          if (
            (a || (m.is_payment_cta_shown = G(e, r) ? "1" : "0"),
            new (o(
              "WAWebStructuredMessageReceiveWamEvent",
            ).StructuredMessageReceiveWamEvent)({
              bizPlatform: d,
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE
                .INTERACTIVE_NFM,
              businessOwnerJid: r ? void 0 : O(e),
              messageClassAttributes: JSON.stringify(
                babelHelpers.extends(
                  {},
                  m,
                  { is_template: a, platform: S },
                  ae(e),
                ),
              ),
              templateId: r ? void 0 : (n = e.templateId) != null ? n : void 0,
            }).commit(),
            s !== !0)
          ) {
            var p = {
              cta: m.cta,
              p2m_flow: m.p2m_flow,
              accepted_payment_method: m.accepted_payment_method,
              order_funnel_id: l,
              chat_type: m.chat_type,
              is_payment_cta_shown: m.is_payment_cta_shown,
            };
            new (o(
              "WAWebStructuredMessageBuyerReceiveWamEvent",
            ).StructuredMessageBuyerReceiveWamEvent)({
              bizPlatform: d,
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: te(a),
              messageClassAttributes: JSON.stringify(p),
            }).commit();
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t) return {};
          try {
            var n = yield B(b, e.id.id + e.to.toJid()),
              a = yield B(n, v);
            return { psFunnelId: n, buyerFunnelId: a };
          } catch (t) {
            if (
              o("WAWebPaymentRequestForwarding").getPaymentRequestTraceId(e) ==
              null
            )
              throw t;
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAM:PAYMENT_REQUEST] original receive funnel unavailable",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("payment-request-receive-funnel-unavailable"),
              { failedOriginalFunnel: !0 }
            );
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      return (
        o("WAWebBrPaymentRequest").isPaymentRequestFeatureEnabled(!1, t) &&
        (!t ||
          o("WAWebPaymentRequestForwarding").isForwardedPixPaymentRequest(e))
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (m || (m = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (w(e)) {
                      var n,
                        r =
                          (n = o("WAWebMsgGetters").getSender(e)) == null
                            ? void 0
                            : n.toJid(),
                        a = r != null ? t.get(r) : null;
                      yield q(e, a).catch(function (e) {
                        o("WALogger").WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAM:PAYMENT_REQUEST] structured msg receive log err: ",
                              "",
                            ])),
                          e,
                        );
                      });
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        j.apply(this, arguments)
      );
    }
    function K(t, n, a, i) {
      (a === void 0 &&
        (a = o("WAWebBrPaymentMethodSurface").BrPaymentMethodSurface
          .INLINE_CTA),
        Q(t, n, a, i).catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:PAYMENT_REQUEST] structured msg interaction log err",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("payment-request-interaction-log-failed");
        }));
    }
    function Q(e, t, n, r) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(
                e,
              ),
              s = !l && e.templateId != null,
              u =
                r == null
                  ? null
                  : {
                      accepted_payment_method: P(r),
                      payment_method_rank_source: N(r),
                    },
              c = M(t),
              d = l ? void 0 : yield Z(e),
              m = {
                cta: g,
                p2m_flow: s ? y : C,
                is_template: s,
                payment_method_choice: c,
              },
              p = ne(e, {
                attributes: m,
                normalizedPaymentMethod: c,
                psFunnelId: d,
                surface: n,
                renderedAttributes: u,
              });
            (new (o(
              "WAWebPsStructuredMessageInteractionWamEvent",
            ).PsStructuredMessageInteractionWamEvent)(
              babelHelpers.extends({}, p, {
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: te(s),
                businessOwnerJid:
                  l || (a = e.senderObj) == null || (a = a.id) == null
                    ? void 0
                    : a.user,
                templateId: l
                  ? void 0
                  : (i = e.templateId) != null
                    ? i
                    : void 0,
              }),
            ).commit(),
              yield ie(m, s, d, p.messageInteraction, p.bizPlatform, l));
          },
        )),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!o("WAWebMsgGetters").getIsSentByMe(e.unsafe()))
            try {
              var r,
                a,
                i = o(
                  "WAWebPaymentRequestForwarding",
                ).isForwardedPaymentRequest(e),
                l = !i && e.templateId != null,
                s = $(n),
                u = P(t),
                d = N(t),
                m = i ? void 0 : yield Z(e);
              new (o(
                "WAWebPsStructuredMessageInteractionWamEvent",
              ).PsStructuredMessageInteractionWamEvent)({
                bizPlatform: i
                  ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
                  : oe(e),
                businessOwnerJid:
                  i || (r = e.senderObj) == null || (r = r.id) == null
                    ? void 0
                    : r.user,
                templateId: i
                  ? void 0
                  : (a = e.templateId) != null
                    ? a
                    : void 0,
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
                messageMediaType: te(l),
                messageInteraction: o("WAWebWamEnumInteractionType")
                  .INTERACTION_TYPE.OTHER_WAYS_TO_PAY_VIEW,
                messageClassAttributes: JSON.stringify(
                  babelHelpers.extends(
                    {
                      cta: h,
                      p2m_flow: l ? y : C,
                      is_template: l,
                      order_funnel_id: m,
                      accepted_payment_method: u,
                      payment_method_surface: o("WAWebBrPaymentMethodSurface")
                        .BrPaymentMethodSurface.OPTIONS_SHEET,
                      payment_method_rank_source: d,
                    },
                    s,
                  ),
                ),
              }).commit();
            } catch (e) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAM:BR_PAYMENT] options shown log failed",
                    ])),
                )
                .sendLogs("br-payment-options-shown-log-failed");
            }
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield B(b, e.id.id + e.to.toJid()).catch(function (e) {
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAM:PAYMENT_REQUEST] interaction funnel id err",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("payment-request-interaction-funnel-id-failed"),
              ""
            );
          });
          return t === "" ? void 0 : t;
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return e
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE
        : o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function ne(e, t) {
      var n,
        r = t.attributes,
        a = t.normalizedPaymentMethod,
        i = t.psFunnelId,
        l = t.renderedAttributes,
        s = t.surface,
        u = A(e);
      return {
        bizPlatform: o(
          "WAWebPaymentRequestForwarding",
        ).isForwardedPaymentRequest(e)
          ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN
          : oe(e),
        messageClassAttributes: JSON.stringify(
          babelHelpers.extends(
            {},
            r,
            {
              accepted_payment_method:
                u.length > 0 ? JSON.stringify(u) : void 0,
              order_funnel_id: i,
              chat_type: F(e),
              is_cta_available: !0,
              currency: I,
              payment_method_surface: s,
            },
            ae(e),
            l,
          ),
        ),
        messageInteraction:
          (n = T.get(a)) != null
            ? n
            : o("WAWebWamEnumInteractionType").INTERACTION_TYPE.USER_START,
      };
    }
    function re(e, t) {
      var n;
      if ((t == null ? void 0 : t.isApi) !== !0)
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.UNKNOWN;
      var r = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
        (n = e.privacyModeWhenSent) != null ? n : t.storedPrivacyMode,
      );
      return r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE ||
        r === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP
        ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
        : o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
    }
    function oe(e) {
      var t = e.senderObj;
      if ((t == null ? void 0 : t.isEnterprise) !== !0)
        return o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
      var n = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
        t.privacyMode,
      );
      return n === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE ||
        n === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP
        ? o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.ENT
        : o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.CLOUDAPI;
    }
    function ae(e) {
      var t = o("WAWebPaymentRequestForwarding").getPaymentRequestTraceId(e),
        n = o("WAWebPaymentRequestForwarding").isForwardedPaymentRequest(e);
      return t == null
        ? n
          ? { is_forwarded: !0 }
          : {}
        : { payment_message_trace_id: t, is_forwarded: n };
    }
    function ie(e, t, n, r, o, a) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = i ? void 0 : yield B(n != null ? n : "", v);
            new (o(
              "WAWebStructuredMessageBuyerInteractionWamEvent",
            ).StructuredMessageBuyerInteractionWamEvent)({
              bizPlatform: a,
              messageInteraction: r,
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageMediaType: te(t),
              messageClassAttributes: JSON.stringify({
                cta: e.cta,
                p2m_flow: e.p2m_flow,
                is_template: e.is_template,
                payment_method_choice: e.payment_method_choice,
                order_funnel_id: l,
              }),
            }).commit();
          },
        )),
        le.apply(this, arguments)
      );
    }
    ((l.PIX_NORMALIZED = _),
      (l.RECEIVER_EVENT_LOG_KEY = b),
      (l.BUYER_HMAC_DATA = v),
      (l.LOGGING_CURRENCY = I),
      (l.SERVER_UNSPECIFIED_RANK_SOURCE = x),
      (l.getWeightsAttributes = $),
      (l.getRenderedAcceptedPaymentMethods = P),
      (l.getRenderedRankSource = N),
      (l.isPaymentRequestMsg = w),
      (l.getPaymentMethodsFromMsg = A),
      (l.getChatTypeFromMsg = F),
      (l.getBusinessOwnerJid = O),
      (l.genFunnelId = B),
      (l.logPaymentRequestReceivedWAMEvent = z),
      (l.logPaymentRequestInteractionWAMEvent = K),
      (l.logPaymentRequestOptionsShownWAMEvent = Y));
  },
  98,
);
