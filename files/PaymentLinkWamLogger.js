__d(
  "PaymentLinkWamLogger",
  [
    "$InternalEnum",
    "P2XFunnelIdGenerator",
    "PaymentLink",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebLinkify",
    "WAWebMerchantCommerceEventWamEvent",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebPsStructuredMessageInteractionWamEvent",
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
      s = { CTA: "payment_link", P2M_FLOW: "PAYMENT_LINK" },
      u = {
        INTERACTION_ACTION: "send_payment_link",
        INTERACTION_SURFACE: "chat",
        REFERRAL: "composer",
        COMMERCE_EXPERIENCE: "non_native",
        P2M_FLOW: "payment_link",
        ACCEPTED_PAYMENT_METHOD: "payment_link",
      },
      c = n("$InternalEnum")({
        NOT_STARTED: "not_started",
        STARTED: "started",
        COMPLETED: "completed",
      }),
      d = n("$InternalEnum")({
        INDIVIDUAL: "individual",
        GROUP: "group",
        BROADCAST: "broadcast",
        NEWSLETTER: "newsletter",
      }),
      m = n("$InternalEnum")({
        LINK: "link",
        LINK_PREVIEW: "link_preview",
        LINK_CTA: "link_cta",
        UNKNOWN: "unknown",
      });
    function p(e) {
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
    function _(e) {
      if (o("WAWebMsgGetters").getIsSentByMe(e)) return !1;
      if (
        o("WAWebMsgGetters").getRichPreviewType(e) ===
        o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
          .PAYMENT_LINKS
      )
        return o("WAWebABProps").getABPropConfigValue(
          "smb_payment_links_logging_enabled",
        );
      var t = p(e);
      return t == null
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "smb_payment_links_logging_enabled",
          );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = new (o("P2XFunnelIdGenerator").P2XFunnelIdGenerator)(
            e,
            t.id.id + t.to.toJid(),
          );
          return n.genFunnelInfo();
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = p(e.msg),
            r = n != null ? n : t != null ? o("PaymentLink").getPSP(t) : null,
            a = yield f(e.msg),
            i = C(
              e.msg,
              E(e.msg),
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
                x(e.msg) && { businessOwnerJid: D(e) },
              ),
            );
          l.commit();
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, a, i) {
      var l = b(e, t, n, r, a, i);
      return {
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
        messageClass: o("WAWebWamEnumStructuredMessageClass")
          .STRUCTURED_MESSAGE_CLASS.HSM,
        messageClassAttributes: l,
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
      };
    }
    function b(e, t, n, r, a, i) {
      var l = {
        funnel_id: n,
        is_logging_secret_available: r,
        cta: s.CTA,
        p2m_flow: s.P2M_FLOW,
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
        (l = v(e, l)),
        (l = S(l, a)),
        (l = R(e, l)),
        o("WAWebABProps").getABPropConfigValue(
          "payment_link_trace_id_logging_enabled",
        ) && (l = L(e, l)),
        l
      );
    }
    function v(e, t) {
      var n = $(e.paymentLinkMetadata);
      return babelHelpers.extends({}, t, n != null && { cta_variant: n });
    }
    function S(e, t) {
      return babelHelpers.extends({}, e, t != null && { payment_provider: t });
    }
    function R(e, t) {
      var n,
        r = o("WAWebMsgGetters").getPaymentLinkMetadata(e),
        a = z(r == null || (n = r.provider) == null ? void 0 : n.paramsJson);
      return babelHelpers.extends({}, t, a != null && { metatags: a });
    }
    function L(e, t) {
      var n,
        r = o("WAWebMsgGetters").getPaymentLinkMetadata(e),
        a = j(r == null || (n = r.provider) == null ? void 0 : n.paramsJson);
      return a == null || a === ""
        ? t
        : babelHelpers.extends({}, t, { payment_link_trace_id: a });
    }
    function E(e) {
      return k(e)
        ? d.GROUP
        : I(e)
          ? d.BROADCAST
          : T(e)
            ? d.NEWSLETTER
            : d.INDIVIDUAL;
    }
    function k(e) {
      var t,
        n = e.from;
      return (t = n == null ? void 0 : n.isGroup()) != null ? t : !1;
    }
    function I(e) {
      var t, n;
      return (t = (n = e.broadcastId) == null ? void 0 : n.isBroadcast()) !=
        null
        ? t
        : !1;
    }
    function T(e) {
      var t,
        n = e.from;
      return (t = n == null ? void 0 : n.isNewsletter()) != null ? t : !1;
    }
    function D(e) {
      var t;
      if (e.interaction_component == null) {
        var n;
        return (n = o("WAWebMsgGetters").getSender(e.msg)) == null
          ? void 0
          : n.toJid();
      }
      return (t = e.msg.senderObj) == null ? void 0 : t.id.toJid();
    }
    function x(e) {
      var t;
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "payment_link_trace_id_logging_enabled",
        )
      )
        return !0;
      var n = o("WAWebMsgGetters").getPaymentLinkMetadata(e),
        r = j(n == null || (t = n.provider) == null ? void 0 : t.paramsJson);
      return !(r != null && r !== "" && o("WAWebMsgGetters").getIsForwarded(e));
    }
    function $(e) {
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
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield M(e, t, E(e.msg)),
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
                x(e.msg) && { businessOwnerJid: D(e) },
                {
                  messageInteraction: o("WAWebWamEnumInteractionType")
                    .INTERACTION_TYPE.USER_PAY_NOW,
                },
              ),
            );
          r.commit();
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            o = p(e.msg),
            a = o != null ? o : t,
            i = yield f(e.msg),
            l = C(
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
                  (r = e.interaction_component) != null ? r : m.UNKNOWN,
              },
            ),
          });
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "smb_payment_links_seller_logging_enabled",
        )
      );
    }
    function F(e, t, n, r, o, a, i) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            var s = o("WAWebLinkify").findLinks(
                e,
                !1,
                o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              ),
              u = U(s, t, n, r, i, l);
            u && B(a, u);
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      var n = new (o(
        "WAWebMerchantCommerceEventWamEvent",
      ).MerchantCommerceEventWamEvent)({
        bizPlatform: o("WAWebWamEnumBizPlatform").BIZ_PLATFORM.SMB,
        commerceInteractionAction: u.INTERACTION_ACTION,
        commerceSurface: u.INTERACTION_SURFACE,
        referral: u.REFERRAL,
        commerceExperience: u.COMMERCE_EXPERIENCE,
        p2mFlow: u.P2M_FLOW,
        acceptedPaymentMethods: u.ACCEPTED_PAYMENT_METHOD,
        isEligibleForAdSignal: !1,
        merchantHasCatalog: e,
        extraAttributes: JSON.stringify(t),
      });
      n.commit();
    }
    function W(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? d.GROUP
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? d.BROADCAST
          : o("WAWebChatGetters").getIsNewsletter(e)
            ? d.NEWSLETTER
            : d.INDIVIDUAL;
    }
    function q(e) {
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
    function U(e, t, n, r, a, i) {
      var l,
        s,
        u,
        c,
        d = e
          .map(function (e) {
            return o("PaymentLink").getPSP(e.url);
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
            !K(n == null || (u = n.data) == null ? void 0 : u.thumbnail) ||
            !K(n == null || (c = n.data) == null ? void 0 : c.thumbnailHQ),
          number_of_payment_links: d.length,
          number_of_links: e.length,
          link_preview_status: r,
          is_first_http_url_a_payment_link: Q(e),
          chat_participant_count: q(a),
          chat_type: W(a),
        };
      return (
        (f = V(f, i)),
        (f = H(f, i)),
        o("WAWebABProps").getABPropConfigValue(
          "payment_link_trace_id_logging_enabled",
        ) && (f = G(f, i)),
        f
      );
    }
    function V(e, t) {
      var n = $(t);
      return babelHelpers.extends({}, e, n != null && { cta_variant: n });
    }
    function H(e, t) {
      var n,
        r = z(t == null || (n = t.provider) == null ? void 0 : n.paramsJson);
      return babelHelpers.extends({}, e, r != null && { metatags: r });
    }
    function G(e, t) {
      var n,
        r = j(t == null || (n = t.provider) == null ? void 0 : n.paramsJson);
      return r == null || r === ""
        ? e
        : babelHelpers.extends({}, e, { payment_link_trace_id: r });
    }
    function z(e) {
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
    function j(e) {
      if (e == null || e === "") return null;
      try {
        var t = JSON.parse(e);
        return t.payment_link_trace_id;
      } catch (e) {
        return null;
      }
    }
    function K(e) {
      return e == null || e.trim().length === 0;
    }
    function Q(e) {
      for (var t of e)
        if (t && t.isHttp) return o("PaymentLink").getPSP(t.url) != null;
      return !1;
    }
    ((l.LinkPreviewStatus = c),
      (l.ClickInteractionComponent = m),
      (l.shouldLogReceiverEvent = _),
      (l.genReceiverEventFunnelInfo = f),
      (l.genLogReceiveEvent = h),
      (l.genLogClickEvent = P),
      (l.shouldLogSendEvent = A),
      (l.genLogSendEventIfPaymentLink = F));
  },
  98,
);
