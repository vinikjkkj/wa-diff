__d(
  "PaymentLinkWamLogger",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebLinkify",
    "WAWebMerchantCommerceEventWamEvent",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebP2XFunnelIdGenerator",
    "WAWebPaymentLink",
    "WAWebProtobufsE2E.pb",
    "WAWebPsStructuredMessageInteractionWamEvent",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebStructuredMessageBuyerReceiveWamEvent",
    "WAWebStructuredMessageReceiveWamEvent",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumStructuredMessageClass",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "receiver_log_key",
      s = "buyer_order_fs_log",
      u = { CTA: "payment_link", P2M_FLOW: "PAYMENT_LINK" },
      c = {
        INTERACTION_ACTION: "send_payment_link",
        INTERACTION_SURFACE: "chat",
        REFERRAL: "composer",
        COMMERCE_EXPERIENCE: "non_native",
        P2M_FLOW: "payment_link",
        ACCEPTED_PAYMENT_METHOD: "payment_link",
      },
      d = n("$InternalEnum")({
        NOT_STARTED: "not_started",
        STARTED: "started",
        COMPLETED: "completed",
      }),
      m = n("$InternalEnum")({
        INDIVIDUAL: "individual",
        GROUP: "group",
        BROADCAST: "broadcast",
        NEWSLETTER: "newsletter",
      }),
      p = n("$InternalEnum")({
        LINK: "link",
        LINK_PREVIEW: "link_preview",
        LINK_CTA: "link_cta",
        UNKNOWN: "unknown",
      });
    function _(e) {
      var t,
        n,
        r,
        a = o("WAWebMsgGetters").getPaymentLinkMetadata(e),
        i =
          (a == null || (t = a.provider) == null ? void 0 : t.paramsJson) !=
          null
            ? (n = JSON.parse(
                a == null || (r = a.provider) == null ? void 0 : r.paramsJson,
              )) == null
              ? void 0
              : n.name
            : null;
      return i;
    }
    function f(e) {
      if (o("WAWebMsgGetters").getIsSentByMe(e)) return !1;
      if (
        o("WAWebMsgGetters").getRichPreviewType(e) ===
        o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
          .PAYMENT_LINKS
      )
        return o("WAWebABProps").getABPropConfigValue(
          "smb_payment_links_logging_enabled",
        );
      var t = _(e);
      return t == null
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "smb_payment_links_logging_enabled",
          );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
            e,
            t.id.id + t.to.toJid(),
          );
          return n.genFunnelInfo();
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = _(e.msg),
            r =
              n != null
                ? n
                : t != null
                  ? o("WAWebPaymentLink").getPSP(t)
                  : null,
            a = yield g(e.msg),
            i = b(
              e.msg,
              k(e.msg),
              a.funnel_id,
              a.is_logging_secret_available,
              r,
              n != null,
            ),
            l = new (o(
              "WAWebStructuredMessageReceiveWamEvent",
            ).StructuredMessageReceiveWamEvent)(
              babelHelpers.extends(
                {},
                i,
                {
                  messageClassAttributes: JSON.stringify(
                    babelHelpers.extends({}, i.messageClassAttributes),
                  ),
                },
                $(e.msg) && { businessOwnerJid: x(e) },
              ),
            );
          (l.commit(),
            o("WAWebABProps").getABPropConfigValue(
              "payments_br_payment_links_buyer_logging",
            ) &&
              new (o(
                "WAWebStructuredMessageBuyerReceiveWamEvent",
              ).StructuredMessageBuyerReceiveWamEvent)({
                messageClass: o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS.HSM,
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e.msg),
                messageClassAttributes: JSON.stringify({
                  cta: u.CTA,
                  p2m_flow: u.P2M_FLOW,
                  chat_type: k(e.msg),
                }),
              }).commit());
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r, a, i) {
      var l = v(e, t, n, r, a, i);
      return {
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.HSM,
        messageClassAttributes: l,
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
      };
    }
    function v(e, t, n, r, a, i) {
      var l = {
        funnel_id: n,
        is_logging_secret_available: r,
        cta: u.CTA,
        p2m_flow: u.P2M_FLOW,
        chat_type: t,
        has_link_preview:
          o("WAWebMsgGetters").getRichPreviewType(e) ===
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
            .PAYMENT_LINKS,
        is_payment_provider_in_metadata: i,
        is_forwarded: o("WAWebMsgGetters").getIsForwarded(e),
        is_edited: o("WAWebMsgGetters").getIsEdited(e),
      };
      return (
        (l = S(e, l)),
        (l = R(l, a)),
        (l = L(e, l)),
        o("WAWebABProps").getABPropConfigValue(
          "payment_link_trace_id_logging_enabled",
        ) && (l = E(e, l)),
        l
      );
    }
    function S(e, t) {
      var n = P(e.paymentLinkMetadata);
      return babelHelpers.extends({}, t, n != null && { cta_variant: n });
    }
    function R(e, t) {
      return babelHelpers.extends({}, e, t != null && { payment_provider: t });
    }
    function L(e, t) {
      var n,
        r = o("WAWebMsgGetters").getPaymentLinkMetadata(e),
        a = j(r == null || (n = r.provider) == null ? void 0 : n.paramsJson);
      return babelHelpers.extends({}, t, a != null && { metatags: a });
    }
    function E(e, t) {
      var n,
        r = o("WAWebMsgGetters").getPaymentLinkMetadata(e),
        a = K(r == null || (n = r.provider) == null ? void 0 : n.paramsJson);
      return a == null || a === ""
        ? t
        : babelHelpers.extends({}, t, { payment_link_trace_id: a });
    }
    function k(e) {
      return I(e)
        ? m.GROUP
        : T(e)
          ? m.BROADCAST
          : D(e)
            ? m.NEWSLETTER
            : m.INDIVIDUAL;
    }
    function I(e) {
      var t,
        n = e.from;
      return (t = n == null ? void 0 : n.isGroup()) != null ? t : !1;
    }
    function T(e) {
      var t, n;
      return (t = (n = e.broadcastId) == null ? void 0 : n.isBroadcast()) !=
        null
        ? t
        : !1;
    }
    function D(e) {
      var t,
        n = e.from;
      return (t = n == null ? void 0 : n.isNewsletter()) != null ? t : !1;
    }
    function x(e) {
      var t;
      if (e.interaction_component == null) {
        var n;
        return (n = o("WAWebMsgGetters").getSender(e.msg)) == null
          ? void 0
          : n.toJid();
      }
      return (t = e.msg.senderObj) == null ? void 0 : t.id.toJid();
    }
    function $(e) {
      var t;
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "payment_link_trace_id_logging_enabled",
        )
      )
        return !0;
      var n = o("WAWebMsgGetters").getPaymentLinkMetadata(e),
        r = K(n == null || (t = n.provider) == null ? void 0 : t.paramsJson);
      return !(r != null && r !== "" && o("WAWebMsgGetters").getIsForwarded(e));
    }
    function P(e) {
      var t, n;
      return (e == null || (t = e.header) == null ? void 0 : t.headerType) !=
        null
        ? o("WAWebProtobufsE2E.pb")
            .Message$PaymentLinkMetadata$PaymentLinkHeader$PaymentLinkHeaderType.getName(
              e == null || (n = e.header) == null ? void 0 : n.headerType,
            )
            .toLowerCase()
        : null;
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield w(e, t, k(e.msg)),
            r = new (o(
              "WAWebPsStructuredMessageInteractionWamEvent",
            ).PsStructuredMessageInteractionWamEvent)(
              babelHelpers.extends(
                {},
                n,
                {
                  messageClassAttributes: JSON.stringify(
                    babelHelpers.extends({}, n.messageClassAttributes),
                  ),
                },
                $(e.msg) && { businessOwnerJid: x(e) },
                {
                  messageInteraction: o("WAWebWamEnumInteractionType")
                    .INTERACTION_TYPE.USER_PAY_NOW,
                },
              ),
            );
          if (
            (r.commit(),
            o("WAWebABProps").getABPropConfigValue(
              "payments_br_payment_links_buyer_logging",
            ))
          ) {
            var a = n.messageClassAttributes.funnel_id,
              i = new (o("WAWebP2XFunnelIdGenerator").P2XFunnelIdGenerator)(
                a,
                s,
              ),
              l = yield i.genFunnelInfo(),
              c = l.funnel_id;
            new (o(
              "WAWebStructuredMessageBuyerInteractionWamEvent",
            ).StructuredMessageBuyerInteractionWamEvent)({
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.HSM,
              messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e.msg),
              messageInteraction: o("WAWebWamEnumInteractionType")
                .INTERACTION_TYPE.USER_PAY_NOW,
              messageClassAttributes: JSON.stringify({
                cta: u.CTA,
                p2m_flow: u.P2M_FLOW,
                chat_type: k(e.msg),
                order_funnel_id: c,
              }),
            }).commit();
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            o = _(e.msg),
            a = o != null ? o : t,
            i = yield g(e.msg),
            l = b(
              e.msg,
              n,
              i.funnel_id,
              i.is_logging_secret_available,
              a,
              o != null,
            );
          return babelHelpers.extends({}, l, {
            messageClassAttributes: babelHelpers.extends(
              {},
              l.messageClassAttributes,
              {
                interaction_component:
                  (r = e.interaction_component) != null ? r : p.UNKNOWN,
              },
            ),
          });
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_payment_links_seller_logging_enabled",
        )
      );
    }
    function O(e, t, n, r, o, a, i) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            var s = o("WAWebLinkify").findLinks(
                e,
                !1,
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              ),
              u = V(s, t, n, r, i, l);
            u && W(a, u);
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      var n = new (o(
        "WAWebMerchantCommerceEventWamEvent",
      ).MerchantCommerceEventWamEvent)({
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
        commerceInteractionAction: c.INTERACTION_ACTION,
        commerceSurface: c.INTERACTION_SURFACE,
        referral: c.REFERRAL,
        commerceExperience: c.COMMERCE_EXPERIENCE,
        p2mFlow: c.P2M_FLOW,
        acceptedPaymentMethods: c.ACCEPTED_PAYMENT_METHOD,
        isEligibleForAdSignal: !1,
        merchantHasCatalog: e,
        extraAttributes: JSON.stringify(t),
      });
      n.commit();
    }
    function q(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? m.GROUP
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? m.BROADCAST
          : o("WAWebChatGetters").getIsNewsletter(e)
            ? m.NEWSLETTER
            : m.INDIVIDUAL;
    }
    function U(e) {
      if (o("WAWebChatGetters").getIsGroup(e)) return e.getParticipantCount();
      if (o("WAWebChatGetters").getIsNewsletter(e)) {
        var t, n;
        return (t = (n = e.newsletterMetadata) == null ? void 0 : n.size) !=
          null
          ? t
          : 1;
      }
      return 1;
    }
    function V(e, t, n, r, a, i) {
      var l,
        s,
        u,
        c,
        d = e
          .map(function (e) {
            return o("WAWebPaymentLink").getPSP(e.url);
          })
          .filter(function (e) {
            return e != null;
          });
      if (d.length <= 0) return null;
      var m = Array.from(new Set(d)),
        p = o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
        _ = p.disableLinkPreviews,
        f = {
          url_preview_cancelled: t,
          url_preview_enabled: !_,
          url_preview_loaded: n != null || t,
          payment_provider: m.toString(),
          rich_preview_type:
            (l =
              n == null || (s = n.data) == null ? void 0 : s.richPreviewType) !=
            null
              ? l
              : o("WAWebProtobufsE2E.pb")
                  .Message$ExtendedTextMessage$PreviewType.NONE,
          does_preview_have_thumbnail:
            !Q(n == null || (u = n.data) == null ? void 0 : u.thumbnail) ||
            !Q(n == null || (c = n.data) == null ? void 0 : c.thumbnailHQ),
          number_of_payment_links: d.length,
          number_of_links: e.length,
          link_preview_status: r,
          is_first_http_url_a_payment_link: X(e),
          chat_participant_count: U(a),
          chat_type: q(a),
        };
      return (
        (f = H(f, i)),
        (f = G(f, i)),
        o("WAWebABProps").getABPropConfigValue(
          "payment_link_trace_id_logging_enabled",
        ) && (f = z(f, i)),
        f
      );
    }
    function H(e, t) {
      var n = P(t);
      return babelHelpers.extends({}, e, n != null && { cta_variant: n });
    }
    function G(e, t) {
      var n,
        r = j(t == null || (n = t.provider) == null ? void 0 : n.paramsJson);
      return babelHelpers.extends({}, e, r != null && { metatags: r });
    }
    function z(e, t) {
      var n,
        r = K(t == null || (n = t.provider) == null ? void 0 : n.paramsJson);
      return r == null || r === ""
        ? e
        : babelHelpers.extends({}, e, { payment_link_trace_id: r });
    }
    function j(e) {
      try {
        var t,
          n = e == null ? null : JSON.parse(e);
        if (n == null) return null;
        var r = n == null ? void 0 : n.meta_tags;
        if (r == null) return null;
        var o = null;
        r.is_business_verified != null &&
          (o = babelHelpers.extends({}, o, {
            is_business_verified: r.is_business_verified === !0,
          }));
        var a = (t = r.provider_name) == null ? void 0 : t.trim();
        return (
          a != null &&
            (o = babelHelpers.extends({}, o, {
              is_psp_name_available: a.length > 0,
            })),
          r.amount != null &&
            r.currency != null &&
            r.offset != null &&
            (o = babelHelpers.extends({}, o, { og_tag_view_enabled: !0 })),
          o
        );
      } catch (e) {
        return null;
      }
    }
    function K(e) {
      if (e == null || e === "") return null;
      try {
        var t = JSON.parse(e);
        return t.payment_link_trace_id;
      } catch (e) {
        return null;
      }
    }
    function Q(e) {
      return e == null || e.trim().length === 0;
    }
    function X(e) {
      for (var t of e)
        if (t && t.isHttp) return o("WAWebPaymentLink").getPSP(t.url) != null;
      return !1;
    }
    ((l.LinkPreviewStatus = d),
      (l.ClickInteractionComponent = p),
      (l.shouldLogReceiverEvent = f),
      (l.genReceiverEventFunnelInfo = g),
      (l.genLogReceiveEvent = y),
      (l.genLogClickEvent = N),
      (l.shouldLogSendEvent = F),
      (l.genLogSendEventIfPaymentLink = O));
  },
  98,
);
