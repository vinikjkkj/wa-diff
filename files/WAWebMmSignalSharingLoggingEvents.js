__d(
  "WAWebMmSignalSharingLoggingEvents",
  [
    "WAWebBlockContants",
    "WAWebHandleMsgTypes.flow",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebSchemaChat",
    "WAWebWamEnumBlockEntryPoint",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumDisclosureInteraction",
    "WAWebWamEnumDisclosureSource",
    "WAWebWamEnumDisclosureSurface",
    "WAWebWamEnumMmSignalType",
    "WAWebWamEnumSignalCanceledReason",
    "WAWebWamEnumSignalOrigin",
    "WAWebWamEnumSignalSharingStatus",
    "WAWebWamEnumSignalSurface",
    "WAWebWamEnumSignalType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.MM_CLICK,
        surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
      },
      s = {
        1: {
          fromUser: function (t) {
            return [
              t.FIRST_CUSTOMER_MESSAGE,
              t.FIRST_CUSTOMER_MESSAGE_CONTINUATION,
            ];
          },
          fromBusiness: function (t) {
            return [t.FIRST_BIZ_REPLY, t.FIRST_BIZ_REPLY_CONTINUATION];
          },
        },
        2: {
          fromUser: function (t) {
            return [
              t.SECOND_CUSTOMER_MESSAGE,
              t.SECOND_CUSTOMER_MESSAGE_CONTINUATION,
            ];
          },
          fromBusiness: function (t) {
            return [t.SECOND_BIZ_REPLY, t.SECOND_BIZ_REPLY_CONTINUATION];
          },
        },
        3: {
          fromUser: function (t) {
            return [
              t.THIRD_CUSTOMER_MESSAGE,
              t.THIRD_CUSTOMER_MESSAGE_CONTINUATION,
            ];
          },
          fromBusiness: function (t) {
            return [t.THIRD_BIZ_REPLY];
          },
        },
      };
    function u(t) {
      var n,
        r = t.chat,
        a = t.eventType,
        i = t.hasShownDisclosure,
        l = i === void 0 ? !1 : i,
        s = t.linkTypeIndex,
        u = t.mmCarouselCardIndex,
        c = t.msg;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          r.id.toString(),
        )
      ) {
        var d = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingUrls(
            a,
            c.unsafe(),
            s,
          ),
          m,
          p;
        switch (a) {
          case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .CTA_APP_CLICK:
            ((m = o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.CTA_APP_CLICK),
              (p = o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.APP_CTA_CLICK));
            break;
          case o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
            .BODY_URL_CLICK:
            ((m = o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.BODY_URL_CLICK),
              (p = o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
                .BODY_URL_CLICK));
            break;
          default:
            ((m = o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.CTA_URL_CLICK),
              (p = o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.URL_CTA_CLICK));
            break;
        }
        var _ = o(
          "WAWebMmSignalSharingTos",
        ).isMmSignalSharingDisclosureTosAccepted();
        ((d == null ? void 0 : d.consentedUrl) != null ||
          (d == null ? void 0 : d.unconsentedUrl) != null ||
          (d == null ? void 0 : d.originalUrl) != null) &&
          (o(
            "WAWebMmSignalSharingLoggingUtils",
          ).logMmSignalSharingDisclosureStateEvent({
            chat: r,
            hasShownDisclosure: l,
            msg: c,
            signal: {
              disclosureEventType: a,
              disclosureSurface: o("WAWebWamEnumDisclosureSurface")
                .DISCLOSURE_SURFACE.CHAT_THREAD,
              disclosureInteraction:
                _ && l
                  ? o("WAWebWamEnumDisclosureInteraction")
                      .DISCLOSURE_INTERACTION.CONTINUE
                  : void 0,
              disclosureSource:
                _ && l
                  ? o("WAWebWamEnumDisclosureSource").DISCLOSURE_SOURCE
                      .NON_BLOCKING
                  : void 0,
              mmHasDisclosedUrl: o(
                "WAWebMmSignalSharingModelUtils",
              ).existsMmSignalSharingConsentedUrl(c),
              mmHasShowDisclosureFlag: o(
                "WAWebMmSignalSharingModelUtils",
              ).isDisclosureEnabledForMsg(c),
              userBecameDisclosed: _ && l,
            },
          }),
          o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingReplacingShimmedLinksEnabled() &&
            D({
              chat: r,
              mmSignalType: p,
              mmCtaButtonIndex:
                a !==
                o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
                  .BODY_URL_CLICK
                  ? s
                  : void 0,
              mmCarouselCardIndex: u,
              msgId: c.id,
            }));
        var f =
            o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
            ((n = r.contact) == null ? void 0 : n.isContactBlocked),
          g;
        (_ && (d == null ? void 0 : d.consentedUrl) != null && !f
          ? (g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
              .ONE_PD)
          : (d == null ? void 0 : d.unconsentedUrl) != null && !f
            ? (g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                .SP)
            : (g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                .NOT_SHARED),
          o(
            "WAWebMmSignalSharingLoggingUtils",
          ).logMmSignalSharingVerificationEvent({
            chat: r,
            msg: c,
            linkOptions: d,
            signal: babelHelpers.extends({}, e, {
              mmSignalType: p,
              sharingStatus: g,
              origin: m,
            }),
          }));
      }
    }
    function c(t) {
      var n = t.chat,
        r = t.eventType,
        a = t.isExplicitCancel,
        i = t.msg;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          n.id.toString(),
        )
      ) {
        var l = o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted(),
          s =
            r ===
            o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
              .BODY_URL_CLICK
              ? {
                  mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
                    .BODY_URL_CLICK,
                  origin: o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN
                    .BODY_URL_CLICK,
                }
              : r ===
                  o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
                    .CTA_APP_CLICK
                ? {
                    mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
                      .APP_CTA_CLICK,
                    origin: o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN
                      .CTA_APP_CLICK,
                  }
                : {
                    mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
                      .URL_CTA_CLICK,
                    origin: o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN
                      .CTA_URL_CLICK,
                  },
          u = s.mmSignalType,
          c = s.origin;
        (o(
          "WAWebMmSignalSharingLoggingUtils",
        ).logMmSignalSharingVerificationEvent({
          chat: n,
          msg: i,
          signal: babelHelpers.extends({}, e, {
            mmSignalType: u,
            canceledReason: o("WAWebWamEnumSignalCanceledReason")
              .SIGNAL_CANCELED_REASON.DISCLOSURE_DISMISSED,
            origin: c,
            sharingStatus: o("WAWebWamEnumSignalSharingStatus")
              .SIGNAL_SHARING_STATUS.NOT_SHARED,
          }),
        }),
          o(
            "WAWebMmSignalSharingLoggingUtils",
          ).logMmSignalSharingDisclosureStateEvent({
            chat: n,
            msg: i,
            signal: {
              disclosureEventType: r,
              disclosureInteraction: a
                ? o("WAWebWamEnumDisclosureInteraction").DISCLOSURE_INTERACTION
                    .CANCEL
                : o("WAWebWamEnumDisclosureInteraction").DISCLOSURE_INTERACTION
                    .DISMISSED,
              disclosureSource: o("WAWebWamEnumDisclosureSource")
                .DISCLOSURE_SOURCE.NON_BLOCKING,
              disclosureSurface: o("WAWebWamEnumDisclosureSurface")
                .DISCLOSURE_SURFACE.CHAT_THREAD,
              mmHasDisclosedUrl: o(
                "WAWebMmSignalSharingModelUtils",
              ).existsMmSignalSharingConsentedUrl(i),
              mmHasShowDisclosureFlag: o(
                "WAWebMmSignalSharingModelUtils",
              ).isDisclosureEnabledForMsg(i),
              userBecameDisclosed: l,
            },
          }));
      }
    }
    function d(e) {
      var t = e.chat,
        n = e.eventType;
      o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
        t.id.toString(),
      ) &&
        o(
          "WAWebMmSignalSharingLoggingUtils",
        ).logMmSignalSharingDisclosureStateEvent({
          chat: t,
          signal: {
            disclosureEventType: n,
            disclosureInteraction: o("WAWebWamEnumDisclosureInteraction")
              .DISCLOSURE_INTERACTION.LEARN_MORE,
            disclosureSource: o("WAWebWamEnumDisclosureSource")
              .DISCLOSURE_SOURCE.INFO,
            disclosureSurface: o("WAWebWamEnumDisclosureSurface")
              .DISCLOSURE_SURFACE.BIZ_PROFILE_SCREEN,
          },
        });
    }
    function m(e) {
      var t = e.chat,
        n = e.hasShownDisclosure,
        r = n === void 0 ? !1 : n,
        a = e.linkTypeIndex,
        i = e.msg;
      u({
        chat: t,
        eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
          .CTA_APP_CLICK,
        hasShownDisclosure: r,
        linkTypeIndex: a,
        msg: i,
      });
    }
    function p(e) {
      var t = e.chat,
        n = e.spamFlow;
      g({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_REPORT,
        type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_REPORT,
        surface:
          n === "account_info_report"
            ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
            : o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
      });
    }
    function _(e) {
      var t = e.blockEntryPoint,
        n = e.blockEntryPointMetric,
        r = e.chat,
        a = e.reason;
      g({
        blockEntryPoint: t,
        chat: r,
        mmSignalType: v(a),
        type: b(a),
        surface:
          n === o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.PROFILE
            ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
            : o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
      });
    }
    function f(e) {
      var t = e.chat;
      (D({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_STOP_OFFERS,
      }),
        g({
          chat: t,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_STOP_OFFERS,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_STOP_OFFERS,
          surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE
            .BIZ_PROFILE_SCREEN,
        }));
    }
    function g(e) {
      var t,
        n,
        r = e.blockEntryPoint,
        a = e.chat,
        i = e.mmSignalType,
        l = e.msg,
        s = e.type,
        u = e.surface,
        c =
          u === void 0
            ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
            : u;
      o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
        a == null || (t = a.id) == null ? void 0 : t.toString(),
      ) &&
        a &&
        ((n = a.contact) == null || (n = n.privacyMode) == null
          ? void 0
          : n.hostStorage) ===
          o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
        o(
          "WAWebMmSignalSharingLoggingUtils",
        ).logMmSignalSharingVerificationEvent({
          chat: a,
          msg: l,
          signal: {
            type: s,
            mmSignalType: i,
            surface: c,
            signalTypeOrigin: r,
            sharingStatus: o(
              "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
            ).isMmSignalSharingUserDisclosedInCollectionWindow(
              a.mmSignalSharingExpirationWindow,
            )
              ? o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                  .ONE_PD
              : o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS.SP,
          },
        });
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contextInfo,
            n = e.msg;
          if (
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).isMmSignalSharingCollectionEnabled()
          ) {
            var r = yield o("WAWebSchemaChat")
              .getChatTable()
              .get(n.id.remote.toString());
            if (r != null) {
              var a,
                i = o(
                  "WAWebMmSignalSharingExpirationWindowUtils",
                ).getMmSignalSharingExpirationTokens(t);
              o(
                "WAWebMmSignalSharingLoggingUtils",
              ).logMmSignalSharingCollectionWindowStateEvent({
                chatWID: r.id,
                msg: n,
                signal: {
                  mmDisclosureFlags:
                    (a = n.mmSignalSharing) == null
                      ? void 0
                      : a.dataSharingFlags,
                  mmHasDisclosedUrl: o(
                    "WAWebMmSignalSharingModelUtils",
                  ).existsMmSignalSharingConsentedUrl(n),
                  mmHasShowDisclosureFlag: o(
                    "WAWebMmSignalSharingModelUtils",
                  ).isDisclosureEnabledForMsg(n),
                  mmHasDisclosedToken: !!(i != null && i.disclosedToken),
                  mmHasUndisclosedToken: !!(i != null && i.undisclosedToken),
                },
              });
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t,
        n = e.blockEntryPointMetric,
        r = e.chat,
        a = e.reason;
      !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
        r == null || (t = r.id) == null ? void 0 : t.toString(),
      ) ||
        !o("WAWebMmSignalSharingGatingUtils")
          .getMmSignalSharingBlockAndReportEntryPointsAllowlist()
          .includes(n) ||
        D({ chat: r, mmSignalType: v(a) });
    }
    function b(e) {
      var t;
      if (e == null) return o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_BLOCK;
      var n =
        ((t = {}),
        (t[o("WAWebBlockContants").BizOptOutReason.NoLongerNeeded] = o(
          "WAWebWamEnumSignalType",
        ).SIGNAL_TYPE.USER_BLOCK_REASON_NO_LONGER_NEEDED),
        (t[o("WAWebBlockContants").BizOptOutReason.NoSignUp] = o(
          "WAWebWamEnumSignalType",
        ).SIGNAL_TYPE.USER_BLOCK_REASON_NO_SIGN_UP),
        (t[o("WAWebBlockContants").BizOptOutReason.OffensiveMessages] = o(
          "WAWebWamEnumSignalType",
        ).SIGNAL_TYPE.USER_BLOCK_REASON_OFFENSIVE_MESSAGES),
        (t[o("WAWebBlockContants").BizOptOutReason.Spam] = o(
          "WAWebWamEnumSignalType",
        ).SIGNAL_TYPE.USER_BLOCK_REASON_SPAM),
        (t[o("WAWebBlockContants").BizOptOutReason.Other] = o(
          "WAWebWamEnumSignalType",
        ).SIGNAL_TYPE.USER_BLOCK_REASON_OTHER),
        t);
      return n[e];
    }
    function v(e) {
      var t;
      if (e == null)
        return o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_BLOCK;
      var n =
        ((t = {}),
        (t[o("WAWebBlockContants").BizOptOutReason.NoLongerNeeded] = o(
          "WAWebWamEnumMmSignalType",
        ).MM_SIGNAL_TYPE.USER_BLOCK_REASON_NO_LONGER_NEEDED),
        (t[o("WAWebBlockContants").BizOptOutReason.NoSignUp] = o(
          "WAWebWamEnumMmSignalType",
        ).MM_SIGNAL_TYPE.USER_BLOCK_REASON_NO_SIGN_UP),
        (t[o("WAWebBlockContants").BizOptOutReason.OffensiveMessages] = o(
          "WAWebWamEnumMmSignalType",
        ).MM_SIGNAL_TYPE.USER_BLOCK_REASON_OFFENSIVE_MESSAGES),
        (t[o("WAWebBlockContants").BizOptOutReason.Spam] = o(
          "WAWebWamEnumMmSignalType",
        ).MM_SIGNAL_TYPE.USER_BLOCK_REASON_SPAM),
        (t[o("WAWebBlockContants").BizOptOutReason.Other] = o(
          "WAWebWamEnumMmSignalType",
        ).MM_SIGNAL_TYPE.USER_BLOCK_REASON_OTHER),
        t);
      return n[e];
    }
    function S(e) {
      var t = e.chat;
      D({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_MUTE,
      });
    }
    function R(e) {
      var t,
        n = e.blockEntryPointMetric,
        r = e.chat;
      !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
        r == null || (t = r.id) == null ? void 0 : t.toString(),
      ) ||
        !o("WAWebMmSignalSharingGatingUtils")
          .getMmSignalSharingBlockAndReportEntryPointsAllowlist()
          .includes(n) ||
        D({
          chat: r,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_REPORT,
        });
    }
    function L(e) {
      var t = e.chat,
        n = e.msg;
      (D({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_INTERESTED,
      }),
        g({
          chat: t,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_INTERESTED,
          msg: n,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_INTERESTED,
        }));
    }
    function E(e) {
      var t = e.chat,
        n = e.msg;
      (D({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_NOT_INTERESTED,
      }),
        g({
          chat: t,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_NOT_INTERESTED,
          msg: n,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_NOT_INTERESTED,
        }));
    }
    function k(e) {
      var t,
        n = e.chat,
        r = e.newMsg;
      if (
        !(
          ((t = n.contact) == null || (t = t.privacyMode) == null
            ? void 0
            : t.hostStorage) !==
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook ||
          !o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingCollectionEnabled(n.id.toString())
        )
      ) {
        var a = r.id.fromMe,
          i = o(
            "WAWebMmSignalSharingModelUtils",
          ).getMmSignalSharingNewMessageParams({ chat: n, fromMe: a });
        if (i) {
          var l = i.isContinuation,
            s = i.messageOriginGroups,
            u = I(s, l, a, o("WAWebWamEnumSignalType").SIGNAL_TYPE),
            c = I(s, l, a, o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE);
          if (
            (c != null && D({ chat: n, mmSignalType: c }),
            u != null && c != null)
          ) {
            var d = o(
              "WAWebMmSignalSharingTos",
            ).isMmSignalSharingDisclosureTosAccepted();
            o(
              "WAWebMmSignalSharingLoggingUtils",
            ).logMmSignalSharingVerificationEvent({
              chat: n,
              msg: r,
              signal: babelHelpers.extends(
                {
                  type: u,
                  mmSignalType: c,
                  surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE
                    .CHAT_THREAD,
                },
                d
                  ? {
                      sharingStatus: o("WAWebWamEnumSignalSharingStatus")
                        .SIGNAL_SHARING_STATUS.ONE_PD,
                    }
                  : {
                      sharingStatus: o("WAWebWamEnumSignalSharingStatus")
                        .SIGNAL_SHARING_STATUS.NOT_SHARED,
                    },
              ),
            });
          }
        }
      }
    }
    function I(e, t, n, r) {
      var o = s[String(e)];
      return o ? T(o, t, n, r) : null;
    }
    function T(e, t, n, r) {
      var o,
        a,
        i = n ? e.fromUser : e.fromBusiness;
      return t
        ? (o = i(r)) == null
          ? void 0
          : o[1]
        : (a = i(r)) == null
          ? void 0
          : a[0];
    }
    function D(e) {
      var t,
        n = e.chat,
        r = e.deepConversationParams,
        a = e.mmCarouselCardIndex,
        i = e.mmCtaButtonIndex,
        l = e.mmSignalType,
        s = e.msgId;
      if (
        !(
          !n ||
          !o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingCollectionEnabled(
            n == null || (t = n.id) == null ? void 0 : t.toString(),
          )
        )
      ) {
        if (
          o("WAWebMmSignalSharingLoggingUtils").isClickSignalType(l) &&
          o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingReplacingShimmedLinksEnabled()
        ) {
          x({
            chat: n,
            mmSignalType: l,
            mmCtaButtonIndex: i,
            mmCarouselCardIndex: a,
            deepConversationParams: r,
            msgId: s,
          });
          return;
        }
        var u = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
          chat: n,
          mmSignalType: l,
          deepConversationParams: r,
          msgId: s,
        });
        n &&
          u != null &&
          o(
            "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
          ).isMmSignalSharingUserDisclosedInCollectionWindow(
            n.mmSignalSharingExpirationWindow,
          ) &&
          (!o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() ||
            !n.contact.isContactBlocked) &&
          o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingEvent({
            chat: n,
            signal: { mmSignalType: l, mmSignalData: u },
          });
      }
    }
    function x(e) {
      var t = e.chat,
        n = e.deepConversationParams,
        r = e.mmCarouselCardIndex,
        a = e.mmCtaButtonIndex,
        i = e.mmSignalType,
        l = e.msgId,
        s = o(
          "WAWebMmSignalSharingTos",
        ).isMmSignalSharingDisclosureTosAccepted(),
        u =
          o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
          t.contact.isContactBlocked,
        c = o(
          "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
        ).isMmSignalSharingUserDisclosedInCollectionWindow(
          t.mmSignalSharingExpirationWindow,
        );
      if (s && c && !u) {
        var d = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
          chat: t,
          mmSignalType: i,
          deepConversationParams: n,
          msgId: l,
          tokenPath: "disclosed",
        });
        if (d != null) {
          o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingEvent({
            chat: t,
            signal: {
              mmSignalType: i,
              mmSignalData: d,
              isDisclosed: !0,
              mmCtaButtonIndex: a,
              mmCarouselCardIndex: r,
            },
          });
          return;
        }
      }
      if (
        o("WAWebMmSignalSharingGatingUtils").isSignalTypeAllowlisted(i, !1) &&
        !u
      ) {
        var m = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
          chat: t,
          mmSignalType: i,
          deepConversationParams: n,
          msgId: l,
          tokenPath: "undisclosed",
        });
        if (m != null) {
          o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingEvent({
            chat: t,
            signal: {
              mmSignalType: i,
              mmSignalData: m,
              isDisclosed: !1,
              mmCtaButtonIndex: a,
              mmCarouselCardIndex: r,
            },
          });
          return;
        }
      }
    }
    ((l.logMmSignalSharingLinkClickEvent = u),
      (l.logMmSignalSharingDisclosureCancelEvent = c),
      (l.logMmSignalSharingDisclosureLearnMoreEvent = d),
      (l.logMmSignalSharingAppCtaClickEvent = m),
      (l.logMmSignalSharingReportVerificationEvent = p),
      (l.logMmSignalSharingBlockVerificationEvent = _),
      (l.logMmSignalSharingUserStopOffersVerificationEvent = f),
      (l.logMmSignalSharingUpdateExpirationWindowEvent = h),
      (l.logMmSignalSharingUserBlockWithReasonEvent = C),
      (l.logMmSignalSharingUserMuteEvent = S),
      (l.logMmSignalSharingUserReportEvent = R),
      (l.logMmSignalSharingUserInterestedEvent = L),
      (l.logMmSignalSharingUserNotInterestedEvent = E),
      (l.logMmSignalSharingNewMessageEvent = k));
  },
  98,
);
