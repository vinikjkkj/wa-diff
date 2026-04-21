__d(
  "WAWebMmSignalSharingLoggingUtils",
  [
    "WALogger",
    "WAWebChatThreadLogging",
    "WAWebLidMigrationUtils",
    "WAWebMmCollectionWindowStateEventWamEvent",
    "WAWebMmDisclosureStateEventWamEvent",
    "WAWebMmDisclosureStateFsEventWamEvent",
    "WAWebMmSignalRealtimeWebWamEvent",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebMmSignalSharingVerificationEventWamEvent",
    "WAWebMmSignalSharingVerificationFsEventWamEvent",
    "WAWebMmSignalSharingVerificationWithSignalDataEventWamEvent",
    "WAWebMmSignalUndisclosedWebWamEvent",
    "WAWebMmSignalWamEvent",
    "WAWebMsgType",
    "WAWebNetworkStatus",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumDisclosureSuppressionReason",
    "WAWebWamEnumMmSignalType",
    "WAWebWamEnumOnePdSignalNotSharedReason",
    "WAWebWamEnumSignalMessageType",
    "WAWebWamEnumSignalOrigin",
    "WAWebWamEnumSignalSharingStatus",
    "WAWebWamEnumSignalType",
    "WAWebWamEnumSpSignalNotSharedReason",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.linkOptions,
            a = e.msg,
            i = e.signal;
          if (
            !o(
              "WAWebMmSignalSharingGatingUtils",
            ).isMmSignalSharingCollectionEnabled(t.id.toString())
          )
            return;
          var l = o(
              "WAWebMmSignalSharingGatingUtils",
            ).getMmSignalSharingOptimizedDeliverySignalCollectionConfig(),
            s = l.consented_types_allowlist,
            u = l.non_consented_types_allowlist,
            c = o(
              "WAWebMmSignalSharingModelUtils",
            ).getMmSignalSharingExpirationWindowItem({ chat: t });
          if (!c && !n && i.canceledReason == null) return;
          var d = o(
              "WAWebMmSignalSharingTos",
            ).isMmSignalSharingDisclosureTosAccepted(),
            m = s.includes(i.mmSignalType) || u.includes(i.mmSignalType),
            p = k(i.signalTypeOrigin, i.origin),
            _ = babelHelpers.extends(
              {
                isCompanionDevice: !0,
                isUserDisclosed: d,
                signalCanceledReason: i.canceledReason,
                signalMessageState: i.messageState,
                signalOrigin: i.origin,
                signalTypeOrigin: p,
                signalSurface: i.surface,
                signalType: i.type,
              },
              a && {
                signalMessageType:
                  (a == null ? void 0 : a.type) ===
                  o("WAWebMsgType").MSG_TYPE.HSM
                    ? o("WAWebWamEnumSignalMessageType").SIGNAL_MESSAGE_TYPE.HSM
                    : o("WAWebWamEnumSignalMessageType").SIGNAL_MESSAGE_TYPE
                        .NFM,
              },
            ),
            f = g(t.id.toString()),
            h = E(t, n, c),
            y = r("WAWebNetworkStatus").online,
            v =
              (yield o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                t.id.toString(),
              )) || "",
            S = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
              chat: t,
              mmSignalType: i.mmSignalType,
              deepConversationParams: {
                isNewMessagefromMe: a == null ? void 0 : a.id.fromMe,
              },
            }),
            R =
              (c == null ? void 0 : c.disclosedToken) != null ||
              (n == null ? void 0 : n.consentedUrl) != null;
          function L(e, t, n, r) {
            var i = babelHelpers.extends({}, _, {
                onePdSignalNotSharedReason: t,
                signalSharingStatus: r,
                spSignalNotSharedReason: n,
              }),
              l = new (o(
                "WAWebMmSignalSharingVerificationEventWamEvent",
              ).MmSignalSharingVerificationEventWamEvent)(
                babelHelpers.extends(
                  {},
                  i,
                  {
                    businessLidOrJid: f,
                    collectionWindowId: h,
                    isNetworkAvailable: y,
                    isShimmingSignal: e,
                  },
                  (a == null ? void 0 : a.templateId) != null
                    ? { templateId: a.templateId }
                    : {},
                ),
              ),
              s = new (o(
                "WAWebMmSignalSharingVerificationFsEventWamEvent",
              ).MmSignalSharingVerificationFsEventWamEvent)(
                babelHelpers.extends({}, i, {
                  threadIdHmac: v,
                  isShimmingSignal: e,
                }),
              ),
              u = new (o(
                "WAWebMmSignalSharingVerificationWithSignalDataEventWamEvent",
              ).MmSignalSharingVerificationWithSignalDataEventWamEvent)(
                babelHelpers.extends({}, i, {
                  isNetworkAvailable: y,
                  isShimmingSignal: e,
                  mmSignalData: S,
                  isUserMatched: R,
                }),
              );
            (l.commit(), s.commit(), u.commit());
          }
          var I = i.type === o("WAWebWamEnumSignalType").SIGNAL_TYPE.MM_CLICK;
          if (I) {
            var T = b(t, n, d, i);
            if (
              (L(!0, T.onePdReason, T.spReason, T.sharingStatus),
              i.canceledReason == null &&
                o(
                  "WAWebMmSignalSharingGatingUtils",
                ).isMmSignalSharingReplacingShimmedLinksEnabled())
            ) {
              var D = C(t, c, n, d, m, i);
              L(!1, D.onePdReason, D.spReason, D.sharingStatus);
            }
          } else {
            var x = C(t, c, n, d, m, i);
            L(!1, x.onePdReason, x.spReason, x.sharingStatus);
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.hasShownDisclosure,
            r = e.msg,
            a = e.signal;
          if (
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).isMmSignalSharingCollectionEnabled(t.id.toString())
          ) {
            var i = o(
                "WAWebMmSignalSharingTos",
              ).isMmSignalSharingDisclosureTosAccepted(),
              l = h({
                chat: t,
                eventType: a.disclosureEventType,
                hasShownDisclosure: n,
                isDisclosureTosAccepted: i,
                msg: r,
              }),
              s = {
                disclosureEventType: a.disclosureEventType,
                disclosureInteraction: a.disclosureInteraction,
                disclosureSource: a.disclosureSource,
                disclosureSuppressionReason: l,
                disclosureSurface: a.disclosureSurface,
                isCompanionDevice: !0,
                isUserDisclosed: i,
                mmHasDisclosedUrl: a.mmHasDisclosedUrl,
                mmHasShowDisclosureFlag: a.mmHasShowDisclosureFlag,
                userBecameDisclosed: a.userBecameDisclosed,
              },
              u = new (o(
                "WAWebMmDisclosureStateEventWamEvent",
              ).MmDisclosureStateEventWamEvent)(
                babelHelpers.extends(
                  {},
                  s,
                  { businessLidOrJid: g(t.id.toString()) },
                  (r == null ? void 0 : r.templateId) != null
                    ? { templateId: r.templateId }
                    : {},
                ),
              ),
              c = new (o(
                "WAWebMmDisclosureStateFsEventWamEvent",
              ).MmDisclosureStateFsEventWamEvent)(
                babelHelpers.extends({}, s, {
                  threadIdHmac:
                    (yield o("WAWebChatThreadLogging").getChatThreadIDHMAC(
                      t.id.toString(),
                    )) || "",
                }),
              );
            (u.commit(), c.commit());
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = e.chatWID,
        n = e.msg,
        r = e.signal;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          t,
        )
      ) {
        var a = new (o(
          "WAWebMmCollectionWindowStateEventWamEvent",
        ).MmCollectionWindowStateEventWamEvent)(
          babelHelpers.extends(
            {
              businessLidOrJid: g(t),
              isUserDisclosed: o(
                "WAWebMmSignalSharingTos",
              ).isMmSignalSharingDisclosureTosAccepted(),
              mmDisclosureFlags: r.mmDisclosureFlags,
              mmHasDisclosedToken: r.mmHasDisclosedToken,
              mmHasDisclosedUrl: r.mmHasDisclosedUrl,
              mmHasShowDisclosureFlag: r.mmHasShowDisclosureFlag,
              mmHasUndisclosedToken: r.mmHasUndisclosedToken,
            },
            (n == null ? void 0 : n.templateId) != null
              ? { templateId: n.templateId }
              : {},
          ),
        );
        a.commit();
      }
    }
    function p(e) {
      if (
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
      )
        return !1;
      var t = [
        o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.URL_CTA_CLICK,
        o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.APP_CTA_CLICK,
        o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.BODY_URL_CLICK,
      ];
      return t.includes(e);
    }
    function _(e) {
      var t = e.isDisclosed,
        n = e.mmCarouselCardIndex,
        r = e.mmCtaButtonIndex,
        a = e.mmSignalData,
        i = e.mmSignalType;
      o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled() &&
        (t
          ? new (o(
              "WAWebMmSignalRealtimeWebWamEvent",
            ).MmSignalRealtimeWebWamEvent)({
              mmSignalData: a,
              mmSignalType: i,
              mmCtaButtonIndex: r,
              mmCarouselCardIndex: n,
            }).commit()
          : new (o(
              "WAWebMmSignalUndisclosedWebWamEvent",
            ).MmSignalUndisclosedWebWamEvent)({
              mmSignalData: a,
              mmSignalType: i,
              mmCtaButtonIndex: r,
              mmCarouselCardIndex: n,
            }).commit());
    }
    function f(e) {
      var t = e.chat,
        n = e.signal;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          t.id.toString(),
        )
      ) {
        if (
          p(n.mmSignalType) &&
          o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingReplacingShimmedLinksEnabled()
        ) {
          var r;
          _({
            isDisclosed: (r = n.isDisclosed) != null ? r : !1,
            mmCarouselCardIndex: n.mmCarouselCardIndex,
            mmCtaButtonIndex: n.mmCtaButtonIndex,
            mmSignalData: n.mmSignalData,
            mmSignalType: n.mmSignalType,
          });
          return;
        }
        var a = new (o("WAWebMmSignalWamEvent").MmSignalWamEvent)({
          mmSignalData: n.mmSignalData,
          mmSignalType: n.mmSignalType,
          disclosed: o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted(),
        });
        a.commit();
      }
    }
    function g(t) {
      if (!r("WAWebWid").isRegularUserNoImply(t))
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[mmSignalSharing] chat ID type unknown: ",
                  "",
                ])),
              t,
            )
            .sendLogs("wa-mm-signal-sharing-failed-to-determine-chat-id-type"),
          ""
        );
      var n = o("WAWebWidFactory").createUserWidOrThrow(t),
        a = o("WAWebLidMigrationUtils").toPn(n),
        i = o("WAWebLidMigrationUtils").toLid(n);
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).getMmSignalSharingVerificationSystemLidEnabled() && i
        ? i.toString()
        : a
          ? a.toJid()
          : n.toString();
    }
    function h(e) {
      var t = e.chat,
        n = e.eventType,
        r = e.hasShownDisclosure,
        a = e.isDisclosureTosAccepted,
        i = e.msg;
      if (
        o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
        t.contact.isContactBlocked
      )
        return o("WAWebWamEnumDisclosureSuppressionReason")
          .DISCLOSURE_SUPPRESSION_REASON.BLOCKED;
      if (
        !i ||
        !o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(i)
      )
        return o("WAWebWamEnumDisclosureSuppressionReason")
          .DISCLOSURE_SUPPRESSION_REASON.NO_SHOW_MM_DISCLOSURE_FLAG;
      if (
        n ===
          o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .BODY_URL_CLICK &&
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureForMarketingMessageBodyLinksEnabled()
      )
        return o("WAWebWamEnumDisclosureSuppressionReason")
          .DISCLOSURE_SUPPRESSION_REASON.BODY_LINK_DISCLOSURE_AB_PROP_DISABLED;
      if (a && r !== !0)
        return o("WAWebWamEnumDisclosureSuppressionReason")
          .DISCLOSURE_SUPPRESSION_REASON.DISCLOSED;
    }
    function y(e, t, n, r, a) {
      if (
        o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
        e.contact.isContactBlocked
      )
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON.BLOCKED;
      if (!r)
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON
          .USER_UNDISCLOSED_OR_NOT_ELIGIBLE_FOR_DISCLOSURE;
      if (
        !o(
          "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
        ).isMmSignalSharingUserDisclosedInCollectionWindow(
          e.mmSignalSharingExpirationWindow,
        )
      )
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON.WINDOW_EXPIRED;
      if (n && (n == null ? void 0 : n.consentedUrl) == null)
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON.VALUE_NOT_AVAILABLE;
      if (!a)
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON.SIGNAL_NOT_ALLOWLISTED;
      var i = o(
          "WAWebMmSignalSharingGatingUtils",
        ).getMmSignalSharingOptimizedDeliverySignalCollectionConfig(),
        l = i.consented_collection_window_in_hours;
      if (
        t &&
        o(
          "WAWebMmSignalSharingExpirationWindowUtils",
        ).hasMmSignalSharingTokenExpired(t, l)
      )
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON.TOKEN_EXPIRED;
    }
    function C(e, t, n, r, o, a) {
      var i = a.canceledReason != null ? void 0 : y(e, t, n, r, o),
        l = i == null || a.canceledReason != null ? void 0 : R(t, n, o),
        s = L(a.sharingStatus, o, i, l);
      return { onePdReason: i, spReason: l, sharingStatus: s };
    }
    function b(e, t, n, r) {
      var o = r.canceledReason != null ? void 0 : v(e, t, n),
        a = o == null || r.canceledReason != null ? void 0 : S(t),
        i = L(r.sharingStatus, !0, o, a);
      return { onePdReason: o, spReason: a, sharingStatus: i };
    }
    function v(e, t, n) {
      if (
        o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
        e.contact.isContactBlocked
      )
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON.BLOCKED;
      if (!n)
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON
          .USER_UNDISCLOSED_OR_NOT_ELIGIBLE_FOR_DISCLOSURE;
      if (
        !o(
          "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
        ).isMmSignalSharingUserDisclosedInCollectionWindow(
          e.mmSignalSharingExpirationWindow,
        )
      )
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON.WINDOW_EXPIRED;
      if (t && (t == null ? void 0 : t.consentedUrl) == null)
        return o("WAWebWamEnumOnePdSignalNotSharedReason")
          .ONE_PD_SIGNAL_NOT_SHARED_REASON.VALUE_NOT_AVAILABLE;
    }
    function S(e) {
      if (e && (e == null ? void 0 : e.unconsentedUrl) == null)
        return o("WAWebWamEnumSpSignalNotSharedReason")
          .SP_SIGNAL_NOT_SHARED_REASON.VALUE_NOT_AVAILABLE;
    }
    function R(e, t, n) {
      if (t && (t == null ? void 0 : t.unconsentedUrl) == null)
        return o("WAWebWamEnumSpSignalNotSharedReason")
          .SP_SIGNAL_NOT_SHARED_REASON.VALUE_NOT_AVAILABLE;
      if (!n)
        return o("WAWebWamEnumSpSignalNotSharedReason")
          .SP_SIGNAL_NOT_SHARED_REASON.SIGNAL_NOT_ALLOWLISTED;
      var r = o(
          "WAWebMmSignalSharingGatingUtils",
        ).getMmSignalSharingOptimizedDeliverySignalCollectionConfig(),
        a = r.consented_collection_window_in_hours;
      if (
        e &&
        o(
          "WAWebMmSignalSharingExpirationWindowUtils",
        ).hasMmSignalSharingTokenExpired(e, a)
      )
        return o("WAWebWamEnumSpSignalNotSharedReason")
          .SP_SIGNAL_NOT_SHARED_REASON.TOKEN_EXPIRED;
    }
    function L(e, t, n, r) {
      if (!t)
        return o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
          .NOT_SHARED;
      var a = e;
      return (
        a ===
          o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.ONE_PD &&
          n != null &&
          (a = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.SP),
        a === o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.SP &&
          r != null &&
          (a = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
            .NOT_SHARED),
        a
      );
    }
    function E(e, t, n) {
      if (
        !(
          e.mmSignalSharingExpirationWindow == null ||
          (n == null ? void 0 : n.unixTime) == null
        )
      ) {
        var r = t ? n.unixTime.server : n.unixTime.client;
        return btoa(String(r * 1e3));
      }
    }
    function k(e, t) {
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingVerificationNewSignalTypeOriginEnabled()
      )
        return e != null ? e : I(t);
    }
    function I(e) {
      if (e != null) {
        var t = Object.keys(o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN).find(
          function (t) {
            return o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN[t] === e;
          },
        );
        return t == null ? void 0 : t.toLowerCase();
      }
    }
    ((l.logMmSignalSharingVerificationEvent = s),
      (l.logMmSignalSharingDisclosureStateEvent = c),
      (l.logMmSignalSharingCollectionWindowStateEvent = m),
      (l.isClickSignalType = p),
      (l.logMmSignalSharingClickEvent = _),
      (l.logMmSignalSharingEvent = f));
  },
  98,
);
