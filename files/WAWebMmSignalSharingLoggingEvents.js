__d(
  "WAWebMmSignalSharingLoggingEvents",
  [
    "WAWebBlockContants",
    "WAWebHandleMsgTypes.flow",
    "WAWebMmSignalSharingConversationCounters",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingTos",
    "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
    "WAWebWamEnumBlockEntryPoint",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumDisclosureInteraction",
    "WAWebWamEnumDisclosureSource",
    "WAWebWamEnumDisclosureSurface",
    "WAWebWamEnumMmDirectionFrom",
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
    var e = 2,
      s = {
        type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.MM_CLICK,
        surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
      },
      u = {
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
    function c(e) {
      var t,
        n = e.chat,
        r = e.eventType,
        a = e.hasShownDisclosure,
        i = a === void 0 ? !1 : a,
        l = e.linkTypeIndex,
        u = e.mmCarouselCardIndex,
        c = e.msg;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          n.id.toString(),
        )
      ) {
        var d = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingUrls(
            r,
            c.unsafe(),
            l,
          ),
          m,
          p;
        switch (r) {
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
            chat: n,
            hasShownDisclosure: i,
            msg: c,
            signal: {
              disclosureEventType: r,
              disclosureSurface: o("WAWebWamEnumDisclosureSurface")
                .DISCLOSURE_SURFACE.CHAT_THREAD,
              disclosureInteraction:
                _ && i
                  ? o("WAWebWamEnumDisclosureInteraction")
                      .DISCLOSURE_INTERACTION.CONTINUE
                  : void 0,
              disclosureSource:
                _ && i
                  ? o("WAWebWamEnumDisclosureSource").DISCLOSURE_SOURCE
                      .NON_BLOCKING
                  : void 0,
              mmHasDisclosedUrl: o(
                "WAWebMmSignalSharingModelUtils",
              ).existsMmSignalSharingConsentedUrl(c),
              mmHasShowDisclosureFlag: o(
                "WAWebMmSignalSharingModelUtils",
              ).isDisclosureEnabledForMsg(c),
              userBecameDisclosed: _ && i,
            },
          }),
          o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingReplacingShimmedLinksEnabled() &&
            P({
              chat: n,
              mmSignalType: p,
              mmCtaButtonIndex:
                r !==
                o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
                  .BODY_URL_CLICK
                  ? l
                  : void 0,
              mmCarouselCardIndex: u,
              msgId: c.id,
            }));
        var f =
            o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() &&
            ((t = n.contact) == null ? void 0 : t.isContactBlocked),
          g;
        (_ && (d == null ? void 0 : d.consentedUrl) != null && !f
          ? (g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
              .ONE_PD)
          : !f &&
              ((d == null ? void 0 : d.unconsentedUrl) != null ||
                o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
                  chat: n,
                  mmSignalType: p,
                  msgId: c.id,
                  tokenPath: "undisclosed",
                }) != null)
            ? (g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                .SP)
            : (g = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                .NOT_SHARED),
          o(
            "WAWebMmSignalSharingLoggingUtils",
          ).logMmSignalSharingVerificationEvent({
            chat: n,
            msg: c,
            linkOptions: d,
            signal: babelHelpers.extends({}, s, {
              mmSignalType: p,
              sharingStatus: g,
              origin: m,
            }),
          }));
      }
    }
    function d(e) {
      var t = e.chat,
        n = e.eventType,
        r = e.isExplicitCancel,
        a = e.msg;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          t.id.toString(),
        )
      ) {
        var i = o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted(),
          l =
            n ===
            o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
              .BODY_URL_CLICK
              ? {
                  mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
                    .BODY_URL_CLICK,
                  origin: o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN
                    .BODY_URL_CLICK,
                }
              : n ===
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
          u = l.mmSignalType,
          c = l.origin;
        (o(
          "WAWebMmSignalSharingLoggingUtils",
        ).logMmSignalSharingVerificationEvent({
          chat: t,
          msg: a,
          signal: babelHelpers.extends({}, s, {
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
            chat: t,
            msg: a,
            signal: {
              disclosureEventType: n,
              disclosureInteraction: r
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
              ).existsMmSignalSharingConsentedUrl(a),
              mmHasShowDisclosureFlag: o(
                "WAWebMmSignalSharingModelUtils",
              ).isDisclosureEnabledForMsg(a),
              userBecameDisclosed: i,
            },
          }));
      }
    }
    function m(e) {
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
    function p(e) {
      var t = e.chat,
        n = e.hasShownDisclosure,
        r = n === void 0 ? !1 : n,
        a = e.linkTypeIndex,
        i = e.msg;
      c({
        chat: t,
        eventType: o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
          .CTA_APP_CLICK,
        hasShownDisclosure: r,
        linkTypeIndex: a,
        msg: i,
      });
    }
    function _(e) {
      var t = e.chat,
        n = e.spamFlow;
      h({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_REPORT,
        type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_REPORT,
        surface:
          n === "account_info_report"
            ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
            : o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
      });
    }
    function f(e) {
      var t = e.blockEntryPoint,
        n = e.blockEntryPointMetric,
        r = e.chat,
        a = e.reason;
      h({
        blockEntryPoint: t,
        chat: r,
        mmSignalType: S(a),
        type: v(a),
        surface:
          n === o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.PROFILE
            ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
            : o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
      });
    }
    function g(e) {
      var t = e.chat;
      (P({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_STOP_OFFERS,
      }),
        h({
          chat: t,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_STOP_OFFERS,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_STOP_OFFERS,
          surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE
            .BIZ_PROFILE_SCREEN,
        }));
    }
    function h(e) {
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.contextInfo,
            r = e.msg,
            a = r.id.remote.toString();
          if (
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).isMmSignalSharingCollectionEnabled(a)
          ) {
            var i = o(
              "WAWebMmSignalSharingExpirationWindowUtils",
            ).getMmSignalSharingExpirationTokens(n);
            o(
              "WAWebMmSignalSharingLoggingUtils",
            ).logMmSignalSharingCollectionWindowStateEvent({
              chatWID: a,
              msg: r,
              signal: {
                mmDisclosureFlags:
                  (t = r.mmSignalSharing) == null ? void 0 : t.dataSharingFlags,
                mmHasDisclosedUrl: o(
                  "WAWebMmSignalSharingModelUtils",
                ).existsMmSignalSharingConsentedUrl(r),
                mmHasShowDisclosureFlag: o(
                  "WAWebMmSignalSharingModelUtils",
                ).isDisclosureEnabledForMsg(r),
                mmHasDisclosedToken: !!(i != null && i.disclosedToken),
                mmHasUndisclosedToken: !!(i != null && i.undisclosedToken),
              },
            });
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
        P({ chat: r, mmSignalType: S(a) });
    }
    function v(e) {
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
    function S(e) {
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
    function R(e) {
      var t = e.chat;
      P({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_MUTE,
      });
    }
    function L(e) {
      var t,
        n = e.blockEntryPointMetric,
        r = e.chat;
      !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
        r == null || (t = r.id) == null ? void 0 : t.toString(),
      ) ||
        !o("WAWebMmSignalSharingGatingUtils")
          .getMmSignalSharingBlockAndReportEntryPointsAllowlist()
          .includes(n) ||
        P({
          chat: r,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_REPORT,
        });
    }
    function E(e) {
      var t = e.chat,
        n = e.msg;
      (P({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_INTERESTED,
      }),
        h({
          chat: t,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_INTERESTED,
          msg: n,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_INTERESTED,
        }));
    }
    function k(e) {
      var t = e.chat,
        n = e.msg;
      (P({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_NOT_INTERESTED,
      }),
        h({
          chat: t,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_NOT_INTERESTED,
          msg: n,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_NOT_INTERESTED,
        }));
    }
    function I(e) {
      var t,
        n = e.chat,
        r = e.newMsg;
      ((t = n.contact) == null || (t = t.privacyMode) == null
        ? void 0
        : t.hostStorage) !==
        o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook ||
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingCollectionEnabled(n.id.toString()) ||
        (o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingPostDcOldSchemaEnabled() &&
          D({ chat: n, newMsg: r }),
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingPostDcNewSchemaEnabled() &&
          o(
            "WAWebMmSignalSharingConversationCounters",
          ).isMmSignalSharingCountedMsg(r) &&
          (o(
            "WAWebMmSignalSharingConversationCounters",
          ).advanceMmSignalSharingConversationCounters(n, r.id.fromMe),
          T(n, r)));
    }
    function T(t, n) {
      var r = o(
          "WAWebMmSignalSharingConversationCounters",
        ).getMmSignalSharingConversationCounters(t),
        a = r.depth,
        i = r.lastMessageFromMe,
        l = r.repeat,
        s =
          i === !0
            ? o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM.CUSTOMER
            : o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM.BUSINESS;
      if (
        !(
          s === o("WAWebWamEnumMmDirectionFrom").MM_DIRECTION_FROM.BUSINESS &&
          a === 0
        )
      ) {
        var u = o(
          "WAWebMmSignalSharingGatingUtils",
        ).getMmSignalSharingPostDcDepthLimit();
        if (!(u > 0 && a > u)) {
          var c = {
            mmConversationDepth: a,
            mmConversationRepeat: l,
            mmDirectionFrom: s,
          };
          (P({
            chat: t,
            mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.MESSAGE,
            postDcParams: babelHelpers.extends({}, c, {
              mmConversionSchemaVersion: e,
            }),
          }),
            o(
              "WAWebMmSignalSharingLoggingUtils",
            ).logMmSignalSharingVerificationEvent({
              chat: t,
              msg: n,
              signal: {
                mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
                  .MESSAGE,
                postDcParams: c,
                sharingStatus: o(
                  "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
                ).isMmSignalSharingUserDisclosedInCollectionWindow(
                  t.mmSignalSharingExpirationWindow,
                )
                  ? o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                      .ONE_PD
                  : o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                      .SP,
                surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE
                  .CHAT_THREAD,
                type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.MESSAGE,
              },
            }));
        }
      }
    }
    function D(e) {
      var t = e.chat,
        n = e.newMsg,
        r = n.id.fromMe,
        a = o(
          "WAWebMmSignalSharingModelUtils",
        ).getMmSignalSharingNewMessageParams({ chat: t, fromMe: r });
      if (a) {
        var i = a.isContinuation,
          l = a.messageOriginGroups,
          s = x({
            isContinuation: i,
            isNewMessagefromMe: r,
            messageOriginGroupsCount: l,
            source: o("WAWebWamEnumSignalType").SIGNAL_TYPE,
          }),
          u = x({
            isContinuation: i,
            isNewMessagefromMe: r,
            messageOriginGroupsCount: l,
            source: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE,
          });
        if (
          (u != null && P({ chat: t, mmSignalType: u }), s != null && u != null)
        ) {
          var c = o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted();
          o(
            "WAWebMmSignalSharingLoggingUtils",
          ).logMmSignalSharingVerificationEvent({
            chat: t,
            msg: n,
            signal: babelHelpers.extends(
              {
                type: s,
                mmSignalType: u,
                surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE
                  .CHAT_THREAD,
              },
              c
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
    function x(e) {
      var t = e.isContinuation,
        n = e.isNewMessagefromMe,
        r = e.messageOriginGroupsCount,
        o = e.source,
        a = u[String(r)];
      return a ? $(a, t, n, o) : null;
    }
    function $(e, t, n, r) {
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
    function P(e) {
      var t,
        n = e.chat,
        r = e.deepConversationParams,
        a = e.mmCarouselCardIndex,
        i = e.mmCtaButtonIndex,
        l = e.mmSignalType,
        s = e.msgId,
        u = e.postDcParams;
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
          N({
            chat: n,
            mmSignalType: l,
            mmCtaButtonIndex: i,
            mmCarouselCardIndex: a,
            deepConversationParams: r,
            msgId: s,
          });
          return;
        }
        var c = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
          chat: n,
          mmSignalType: l,
          deepConversationParams: r,
          msgId: s,
        });
        n &&
          c != null &&
          o(
            "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
          ).isMmSignalSharingUserDisclosedInCollectionWindow(
            n.mmSignalSharingExpirationWindow,
          ) &&
          (!o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() ||
            !n.contact.isContactBlocked) &&
          o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingEvent({
            chat: n,
            signal: { mmSignalType: l, mmSignalData: c, postDcParams: u },
          });
      }
    }
    function N(e) {
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
    ((l.logMmSignalSharingLinkClickEvent = c),
      (l.logMmSignalSharingDisclosureCancelEvent = d),
      (l.logMmSignalSharingDisclosureLearnMoreEvent = m),
      (l.logMmSignalSharingAppCtaClickEvent = p),
      (l.logMmSignalSharingReportVerificationEvent = _),
      (l.logMmSignalSharingBlockVerificationEvent = f),
      (l.logMmSignalSharingUserStopOffersVerificationEvent = g),
      (l.logMmSignalSharingUpdateExpirationWindowEvent = y),
      (l.logMmSignalSharingUserBlockWithReasonEvent = b),
      (l.logMmSignalSharingUserMuteEvent = R),
      (l.logMmSignalSharingUserReportEvent = L),
      (l.logMmSignalSharingUserInterestedEvent = E),
      (l.logMmSignalSharingUserNotInterestedEvent = k),
      (l.logMmSignalSharingNewMessageEvent = I));
  },
  98,
);
