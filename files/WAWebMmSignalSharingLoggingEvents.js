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
      var n = t.chat,
        r = t.eventType,
        a = t.hasShownDisclosure,
        i = a === void 0 ? !1 : a,
        l = t.linkTypeIndex,
        s = t.msg;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          n.id.toString(),
        )
      ) {
        var u = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingUrls(
            r,
            s.unsafe(),
            l,
          ),
          c =
            r ===
            o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
              .BODY_URL_CLICK
              ? o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.BODY_URL_CLICK
              : o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.CTA_URL_CLICK,
          d = o(
            "WAWebMmSignalSharingTos",
          ).isMmSignalSharingDisclosureTosAccepted();
        ((u == null ? void 0 : u.consentedUrl) != null ||
          (u == null ? void 0 : u.unconsentedUrl) != null ||
          (u == null ? void 0 : u.originalUrl) != null) &&
          o(
            "WAWebMmSignalSharingLoggingUtils",
          ).logMmSignalSharingDisclosureStateEvent({
            chat: n,
            hasShownDisclosure: i,
            msg: s,
            signal: {
              disclosureEventType: r,
              disclosureSurface: o("WAWebWamEnumDisclosureSurface")
                .DISCLOSURE_SURFACE.CHAT_THREAD,
              disclosureInteraction:
                d && i
                  ? o("WAWebWamEnumDisclosureInteraction")
                      .DISCLOSURE_INTERACTION.CONTINUE
                  : void 0,
              disclosureSource:
                d && i
                  ? o("WAWebWamEnumDisclosureSource").DISCLOSURE_SOURCE
                      .NON_BLOCKING
                  : void 0,
              mmHasDisclosedUrl: o(
                "WAWebMmSignalSharingModelUtils",
              ).existsMmSignalSharingConsentedUrl(s),
              mmHasShowDisclosureFlag: o(
                "WAWebMmSignalSharingModelUtils",
              ).isDisclosureEnabledForMsg(s),
              userBecameDisclosed: d && i,
            },
          });
        var m;
        ((u == null ? void 0 : u.consentedUrl) != null
          ? (m = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
              .ONE_PD)
          : (u == null ? void 0 : u.unconsentedUrl) != null
            ? (m = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                .SP)
            : (m = o("WAWebWamEnumSignalSharingStatus").SIGNAL_SHARING_STATUS
                .NOT_SHARED),
          o(
            "WAWebMmSignalSharingLoggingUtils",
          ).logMmSignalSharingVerificationEvent({
            chat: n,
            msg: s,
            linkOptions: u,
            signal: babelHelpers.extends({}, e, {
              sharingStatus: m,
              origin: c,
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
        ).isMmSignalSharingDisclosureTosAccepted();
        (o(
          "WAWebMmSignalSharingLoggingUtils",
        ).logMmSignalSharingVerificationEvent({
          chat: n,
          msg: i,
          signal: babelHelpers.extends({}, e, {
            canceledReason: o("WAWebWamEnumSignalCanceledReason")
              .SIGNAL_CANCELED_REASON.DISCLOSURE_DISMISSED,
            origin:
              r ===
              o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
                .BODY_URL_CLICK
                ? o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.BODY_URL_CLICK
                : o("WAWebWamEnumSignalOrigin").SIGNAL_ORIGIN.CTA_URL_CLICK,
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
        n = e.spamFlow;
      f({
        chat: t,
        type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_REPORT,
        surface:
          n === "account_info_report"
            ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
            : o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
      });
    }
    function p(e) {
      var t = e.blockEntryPoint,
        n = e.blockEntryPointMetric,
        r = e.chat,
        a = e.reason;
      f({
        blockEntryPoint: t,
        chat: r,
        type: C(a),
        surface:
          n === o("WAWebWamEnumBlockEntryPoint").BLOCK_ENTRY_POINT.PROFILE
            ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
            : o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.CHAT_THREAD,
      });
    }
    function _(e) {
      var t = e.chat;
      (T({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_STOP_OFFERS,
      }),
        f({
          chat: t,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_STOP_OFFERS,
          surface: o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE
            .BIZ_PROFILE_SCREEN,
        }));
    }
    function f(e) {
      var t,
        n,
        r = e.blockEntryPoint,
        a = e.chat,
        i = e.msg,
        l = e.type,
        s = e.surface,
        u =
          s === void 0
            ? o("WAWebWamEnumSignalSurface").SIGNAL_SURFACE.BIZ_PROFILE_SCREEN
            : s;
      o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
        a == null || (t = a.id) == null ? void 0 : t.toString(),
      ) &&
        a &&
        ((n = a.contact) == null || (n = n.privacyMode) == null
          ? void 0
          : n.hostStorage) ===
          o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook &&
        o("WAWebMmSignalSharingTos").isMmSignalSharingDisclosureTosAccepted() &&
        o(
          "WAWebMmSignalSharingLoggingUtils",
        ).logMmSignalSharingVerificationEvent({
          chat: a,
          msg: i,
          signal: {
            type: l,
            surface: u,
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                },
              });
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
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
        T({ chat: r, mmSignalType: b(a) });
    }
    function C(e) {
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
    function b(e) {
      var t;
      if (e == null) return o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_BLOCK;
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
    function v(e) {
      var t = e.chat;
      T({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE.USER_MUTE,
      });
    }
    function S(e) {
      var t,
        n = e.blockEntryPointMetric,
        r = e.chat;
      !o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
        r == null || (t = r.id) == null ? void 0 : t.toString(),
      ) ||
        !o("WAWebMmSignalSharingGatingUtils")
          .getMmSignalSharingBlockAndReportEntryPointsAllowlist()
          .includes(n) ||
        T({
          chat: r,
          mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
            .USER_REPORT,
        });
    }
    function R(e) {
      var t = e.chat,
        n = e.msg;
      (T({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_INTERESTED,
      }),
        f({
          chat: t,
          msg: n,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_INTERESTED,
        }));
    }
    function L(e) {
      var t = e.chat,
        n = e.msg;
      (T({
        chat: t,
        mmSignalType: o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE
          .USER_NOT_INTERESTED,
      }),
        f({
          chat: t,
          msg: n,
          type: o("WAWebWamEnumSignalType").SIGNAL_TYPE.USER_NOT_INTERESTED,
        }));
    }
    function E(e) {
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
            u = k(s, l, a, o("WAWebWamEnumSignalType").SIGNAL_TYPE),
            c = k(s, l, a, o("WAWebWamEnumMmSignalType").MM_SIGNAL_TYPE);
          if ((c != null && T({ chat: n, mmSignalType: c }), u != null)) {
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
    function k(e, t, n, r) {
      var o = s[String(e)];
      return o ? I(o, t, n, r) : null;
    }
    function I(e, t, n, r) {
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
    function T(e) {
      var t,
        n = e.chat,
        r = e.deepConversationParams,
        a = e.mmSignalType;
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
        var i = o("WAWebMmSignalSharingModelUtils").getMMSignalSharingData({
          chat: n,
          mmSignalType: a,
          deepConversationParams: r,
        });
        n &&
          i != null &&
          o(
            "WAWebMmSignalSharingUserDisclosedInCollectionWindow",
          ).isMmSignalSharingUserDisclosedInCollectionWindow(
            n.mmSignalSharingExpirationWindow,
          ) &&
          (!o("WAWebMmSignalSharingGatingUtils").isCCIComplianceEnabled() ||
            !n.contact.isContactBlocked) &&
          o("WAWebMmSignalSharingLoggingUtils").logMmSignalSharingEvent({
            chat: n,
            signal: { mmSignalType: a, mmSignalData: i },
          });
      }
    }
    ((l.logMmSignalSharingLinkClickEvent = u),
      (l.logMmSignalSharingDisclosureCancelEvent = c),
      (l.logMmSignalSharingDisclosureLearnMoreEvent = d),
      (l.logMmSignalSharingReportVerificationEvent = m),
      (l.logMmSignalSharingBlockVerificationEvent = p),
      (l.logMmSignalSharingUserStopOffersVerificationEvent = _),
      (l.logMmSignalSharingUpdateExpirationWindowEvent = g),
      (l.logMmSignalSharingUserBlockWithReasonEvent = y),
      (l.logMmSignalSharingUserMuteEvent = v),
      (l.logMmSignalSharingUserReportEvent = S),
      (l.logMmSignalSharingUserInterestedEvent = R),
      (l.logMmSignalSharingUserNotInterestedEvent = L),
      (l.logMmSignalSharingNewMessageEvent = E));
  },
  98,
);
