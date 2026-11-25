__d(
  "WAWebNotificationsCallNotification",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBaseNotification",
    "WAWebCallNotificationActions",
    "WAWebCallRingtone",
    "WAWebChatCollection",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNoop",
    "WAWebNotificationConstants",
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationTone",
    "WAWebParticipantListUtils",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUA",
    "WAWebUserUtils",
    "WAWebVoipCallEmoji",
    "WAWebVoipCallScreeningEligibility",
    "WAWebVoipCallsTabOpenCallInfo",
    "WAWebVoipGatingUtils",
    "WAWebVoipIncomingCallNotificationStateStore",
    "WAWebWamEnumIncomingCallNotificationStateType",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWid",
    "WAWebWidFormat",
    "bx",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("bx").getURL(r("bx")("9555")),
      u = new Map(),
      c = 50,
      d = new Set();
    function m(e) {
      var t = e.wid.toString(),
        n = u.get(t);
      (n != null &&
        n !== e.msgId &&
        (o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification("call:" + t),
        C(n)),
        u.set(t, e.msgId),
        y(e.msgId));
      var r = new f(e);
      return (
        r.recordSkipReason(),
        o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(r)
      );
    }
    function p(e) {
      (e &&
        o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification(
          "call:" + e.toString(),
        ),
        o("WAWebCallRingtone").stopCallRingtone());
    }
    function _(e, t) {
      if (e) {
        var n = e.toString(),
          r = u.get(n);
        if (t != null && r != null && t !== r) return;
        (o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification("call:" + n),
          r != null && (C(r), u.delete(n)));
      }
      o("WAWebCallRingtone").stopCallRingtone();
    }
    var f = (function (e) {
      function t(t) {
        var n,
          r = t.groupCallParticipants,
          a = t.groupJid,
          i = t.isGroup,
          l = t.isSilenced,
          s = t.isVideo,
          u = t.msgId,
          c = t.wid;
        return (
          (n = e.call(this) || this),
          (n.closeBanner = function () {
            (o("WAWebCallRingtone").stopCallRingtone(),
              e.prototype.closeBanner.call(n));
          }),
          (n.wid = c),
          (n.msgId = u),
          (n.isVideo = s),
          (n.isGroup = i),
          (n.isSilenced = l),
          (n.groupJid = a != null ? a : null),
          (n.groupCallParticipants = r != null ? r : null),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.shouldMute = function (t) {
          var e, n, a;
          if (!this.wid || !this.msgId || this.isSilenced)
            return r("WAWebNotificationMuteReason").GlobalMute;
          var i =
              (e =
                (n = this.groupJid) != null
                  ? n
                  : (a = o(
                        "WAWebChatCollection",
                      ).ChatCollection.getLatestChatForWid(this.wid)) == null
                    ? void 0
                    : a.id) != null
                ? e
                : this.wid,
            l = o("WAWebMuteCollection").MuteCollection.get(i);
          return l != null && o("WAWebMuteGetters").getIsCallMuted(l)
            ? r("WAWebNotificationMuteReason").MutedChat
            : null;
        }),
        (n.buildKey = function () {
          return "call:" + this.wid.toString();
        }),
        (n.matchesChat = function (t) {
          return r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(this.wid, t.id),
          );
        }),
        (n.getChatKind = function () {
          return this.isGroup
            ? o("WAWebChatFlowTypes").ChatKindType.Group
            : o("WAWebChatFlowTypes").ChatKindType.Chat;
        }),
        (n.getIcon = async function () {
          return $({
            abortSignal: this.abortController.signal,
            groupCallParticipants: this.groupCallParticipants,
            groupJid: this.groupJid,
            isGroup: this.isGroup,
            wid: this.wid,
          });
        }),
        (n.getBannerOptions = function () {
          var e = T(this.wid);
          if (this.isGroup && o("WAWebVoipGatingUtils").isCallingEnabled())
            return this.$WACallNotification$p_1(e);
          var t = r("fbs")._(/*BTDS*/ "").toString();
          return (
            o("WAWebVoipGatingUtils").isCallingEnabled() &&
              (t = D(this.isVideo, !1) + this.$WACallNotification$p_2()),
            babelHelpers.extends(
              {
                wid: this.wid,
                msgId: this.msgId,
                tag: this.msgId,
                title: e,
                body: t,
                requireInteraction: o(
                  "WAWebVoipGatingUtils",
                ).areRichCallNotificationsEnabled(),
              },
              this.$WACallNotification$p_3(),
              this.$WACallNotification$p_4(),
            )
          );
        }),
        (n.$WACallNotification$p_2 = function () {
          return this.isVideo
            ? r("fbs")._(/*BTDS*/ "").toString()
            : I(this.wid)
              ? r("fbs")._(/*BTDS*/ "").toString()
              : r("fbs")._(/*BTDS*/ "").toString();
        }),
        (n.recordSkipReason = function () {
          var e = this.$WACallNotification$p_5();
          e != null &&
            o(
              "WAWebVoipIncomingCallNotificationStateStore",
            ).recordIncomingCallNotificationSkipped(this.msgId, e);
        }),
        (n.$WACallNotification$p_5 = function () {
          return this.isSilenced
            ? o("WAWebWamEnumIncomingCallNotificationStateType")
                .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                .INCOMING_CALL_NOTIFICATION_STATE_SILENCED_UNKNOWN_CALLER
            : this.shouldMute() === r("WAWebNotificationMuteReason").MutedChat
              ? o("WAWebWamEnumIncomingCallNotificationStateType")
                  .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                  .INCOMING_CALL_NOTIFICATION_STATE_CHAT_MUTED
              : document.visibilityState === "visible" &&
                  o("WAWebNotificationHelpers").appIsActive()
                ? o("WAWebWamEnumIncomingCallNotificationStateType")
                    .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                    .INCOMING_CALL_NOTIFICATION_STATE_TAB_ACTIVE
                : g();
        }),
        (n.$WACallNotification$p_3 = function () {
          var e = this,
            t = function (n) {
              return o(
                "WAWebVoipIncomingCallNotificationStateStore",
              ).recordIncomingCallNotificationOutcome(e.msgId, n);
            };
          return {
            onClick: function () {
              return t(
                o("WAWebWamEnumIncomingCallNotificationStateType")
                  .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                  .INCOMING_CALL_NOTIFICATION_STATE_CLICKED,
              );
            },
            onDismiss: function () {
              return t(
                o("WAWebWamEnumIncomingCallNotificationStateType")
                  .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                  .INCOMING_CALL_NOTIFICATION_STATE_DISMISSED,
              );
            },
            onError: function () {
              return t(
                o("WAWebWamEnumIncomingCallNotificationStateType")
                  .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                  .INCOMING_CALL_NOTIFICATION_STATE_NOT_DELIVERED,
              );
            },
          };
        }),
        (n.$WACallNotification$p_4 = function () {
          return h()
            ? {
                showViaServiceWorker: !0,
                data: { callId: this.msgId },
                actions: [
                  {
                    action: o("WAWebCallNotificationActions")
                      .ACCEPT_CALL_ACTION,
                    title: r("fbs")._(/*BTDS*/ "").toString(),
                  },
                  {
                    action: o("WAWebCallNotificationActions")
                      .DECLINE_CALL_ACTION,
                    title: r("fbs")._(/*BTDS*/ "").toString(),
                  },
                ],
              }
            : {};
        }),
        (n.$WACallNotification$p_1 = function (t) {
          var e,
            n = x(this.groupJid, this.groupCallParticipants).toString(),
            r =
              D(this.isVideo, !1) +
              (this.isVideo
                ? s._(/*BTDS*/ "", [s._param("caller_name", t)]).toString()
                : s._(/*BTDS*/ "", [s._param("caller_name", t)]).toString());
          return babelHelpers.extends(
            {
              wid: (e = this.groupJid) != null ? e : this.wid,
              msgId: this.msgId,
              tag: this.msgId,
              title: n,
              body: r,
              requireInteraction: o(
                "WAWebVoipGatingUtils",
              ).areRichCallNotificationsEnabled(),
            },
            this.$WACallNotification$p_3(),
            this.$WACallNotification$p_4(),
          );
        }),
        (n.shouldShowBanner = function () {
          return o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() ||
            (o("WAWebNotificationHelpers").appIsActive() &&
              !o("WAWebVoipGatingUtils").isCallingEnabled()) ||
            !e.prototype.shouldShowBanner.call(this)
            ? !1
            : o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications() &&
                o("WAWebVoipGatingUtils").isWebCallingUiEnabled();
        }),
        (n.shouldPlaySound = function () {
          return e.prototype.shouldPlaySound.call(this)
            ? o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications() &&
                o(
                  "WAWebMuteCollection",
                ).MuteCollection.getGlobalCallRingtone() &&
                o("WAWebVoipGatingUtils").isWebCallingUiEnabled()
            : !1;
        }),
        (n.playsSoundBeforeBanner = function () {
          return !0;
        }),
        (n.playSound = function () {
          o("WAWebVoipGatingUtils").isCallingEnabled()
            ? o("WAWebCallRingtone").playCallRingtone()
            : o("WAWebNotificationTone").playNotification();
        }),
        (n.afterBannerShown = function (n) {
          var t = this;
          (e.prototype.afterBannerShown.call(this, n),
            o(
              "WAWebVoipIncomingCallNotificationStateStore",
            ).recordIncomingCallNotificationShown(this.msgId),
            n.waitForClose().then(function () {
              var e = u.get(t.wid.toString());
              (e == null || e === t.msgId) &&
                o("WAWebCallRingtone").stopCallRingtone();
            }));
        }),
        (n.getNotificationDeliveryWamEventData = async function () {
          return {
            uiNotificationType: this.isVideo
              ? o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                  .INCOMING_VIDEO_CALL
              : o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                  .INCOMING_VOICE_CALL,
          };
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function g() {
      var e,
        t = (e = window.Notification) == null ? void 0 : e.permission;
      return t == null
        ? o("WAWebWamEnumIncomingCallNotificationStateType")
            .INCOMING_CALL_NOTIFICATION_STATE_TYPE
            .INCOMING_CALL_NOTIFICATION_STATE_UNSUPPORTED
        : t !== o("WAWebNotificationConstants").PERMISSION_ALLOWED
          ? o("WAWebWamEnumIncomingCallNotificationStateType")
              .INCOMING_CALL_NOTIFICATION_STATE_TYPE
              .INCOMING_CALL_NOTIFICATION_STATE_NOTIFICATIONS_NOT_ALLOWED_IN_BROWSER
          : !o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications() ||
              !o("WAWebNotificationHelpers").shouldEnableNotificationGranular()
            ? o("WAWebWamEnumIncomingCallNotificationStateType")
                .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                .INCOMING_CALL_NOTIFICATION_STATE_NOTIFICATIONS_OFF_IN_WA
            : null;
    }
    function h() {
      var e;
      return (
        o("WAWebVoipGatingUtils").areRichCallNotificationsEnabled() &&
        o("WAWebPushNotificationsGatingUtils").canSupportNotificationActions(
          2,
        ) &&
        ((e = navigator.serviceWorker) == null ? void 0 : e.controller) != null
      );
    }
    function y(e) {
      var t = navigator.serviceWorker;
      t != null &&
        t.controller &&
        r("WAWebSWBus")
          .request(
            t.controller,
            r("WAWebSWBusActions").HANDLE_CALL_NOTIFICATION,
            { callId: e },
          )
          .catch(r("WAWebNoop"));
    }
    function C(e) {
      var t = navigator.serviceWorker;
      t != null &&
        t.controller &&
        r("WAWebSWBus")
          .request(
            t.controller,
            r("WAWebSWBusActions").CLEAR_CALL_NOTIFICATION,
            { callId: e },
          )
          .catch(r("WAWebNoop"));
    }
    var b = (function (e) {
      function t(t) {
        var n,
          r = t.groupCallParticipants,
          a = t.groupJid,
          i = t.isGroup,
          l = t.isVideo,
          s = t.msgId,
          u = t.wid;
        return (
          (n = e.call(this) || this),
          (n.$WAMissedCallNotification$p_1 = function () {
            o("WAWebVoipCallsTabOpenCallInfo").openVoipCallsTabCallInfo(
              n.msgId,
            );
          }),
          (n.wid = u),
          (n.msgId = s),
          (n.isVideo = l),
          (n.isGroup = i),
          (n.groupJid = a != null ? a : null),
          (n.groupCallParticipants = r != null ? r : null),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.shouldMute = function (t) {
          var e, n, a;
          if (!this.wid || !this.msgId)
            return r("WAWebNotificationMuteReason").GlobalMute;
          var i =
              (e =
                (n = this.groupJid) != null
                  ? n
                  : (a = o(
                        "WAWebChatCollection",
                      ).ChatCollection.getLatestChatForWid(this.wid)) == null
                    ? void 0
                    : a.id) != null
                ? e
                : this.wid,
            l = o("WAWebMuteCollection").MuteCollection.get(i);
          return l != null && o("WAWebMuteGetters").getIsCallMuted(l)
            ? r("WAWebNotificationMuteReason").MutedChat
            : null;
        }),
        (n.buildKey = function () {
          return "missed_call:" + this.wid.toString();
        }),
        (n.matchesChat = function (t) {
          return r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(this.wid, t.id),
          );
        }),
        (n.getChatKind = function () {
          return this.isGroup
            ? o("WAWebChatFlowTypes").ChatKindType.Group
            : o("WAWebChatFlowTypes").ChatKindType.Chat;
        }),
        (n.getIcon = async function () {
          return $({
            abortSignal: this.abortController.signal,
            groupCallParticipants: this.groupCallParticipants,
            groupJid: this.groupJid,
            isGroup: this.isGroup,
            wid: this.wid,
          });
        }),
        (n.getBannerOptions = function () {
          var e = T(this.wid);
          if (this.isGroup) {
            var t,
              n = x(this.groupJid, this.groupCallParticipants).toString(),
              o =
                D(this.isVideo, !0) +
                (this.isVideo
                  ? s._(/*BTDS*/ "", [s._param("caller_name", e)]).toString()
                  : s._(/*BTDS*/ "", [s._param("caller_name", e)]).toString());
            return {
              wid: (t = this.groupJid) != null ? t : this.wid,
              msgId: this.msgId,
              tag: "missed_" + this.msgId,
              title: n,
              body: o,
              doNotOpenChat: !0,
              onClick: this.$WAMissedCallNotification$p_1,
            };
          }
          var a =
            D(this.isVideo, !0) +
            (this.isVideo
              ? r("fbs")._(/*BTDS*/ "").toString()
              : r("fbs")._(/*BTDS*/ "").toString());
          return {
            wid: this.wid,
            msgId: this.msgId,
            tag: "missed_" + this.msgId,
            title: e,
            body: a,
            doNotOpenChat: !0,
            onClick: this.$WAMissedCallNotification$p_1,
          };
        }),
        (n.shouldShowBanner = function () {
          return e.prototype.shouldShowBanner.call(this)
            ? o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications()
            : !1;
        }),
        (n.shouldPlaySound = function () {
          return e.prototype.shouldPlaySound.call(this)
            ? o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications()
            : !1;
        }),
        (n.playSound = function () {
          o("WAWebNotificationTone").playNotification();
        }),
        (n.getNotificationDeliveryWamEventData = async function () {
          return {
            uiNotificationType: this.isVideo
              ? o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                  .MISSED_VIDEO_CALL
              : o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                  .MISSED_VOICE_CALL,
          };
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function v(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(new b(e));
    }
    function S() {
      o("WAWebVoipGatingUtils").areRichCallNotificationsEnabled() &&
        o("WAWebNotificationIconUtils").preloadWhatsAppBadge();
    }
    var R = (function (e) {
      function t(t) {
        var n,
          r = t.isSilenced,
          o = t.msgId,
          a = t.wid;
        return (
          (n = e.call(this) || this),
          (n.wid = a),
          (n.msgId = o),
          (n.isSilenced = r),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.shouldMute = function (t) {
          var e, n;
          if (!this.wid || !this.msgId || this.isSilenced)
            return r("WAWebNotificationMuteReason").GlobalMute;
          var a =
              (e =
                (n = o(
                  "WAWebChatCollection",
                ).ChatCollection.getLatestChatForWid(this.wid)) == null
                  ? void 0
                  : n.id) != null
                ? e
                : this.wid,
            i = o("WAWebMuteCollection").MuteCollection.get(a);
          return i != null && o("WAWebMuteGetters").getIsCallMuted(i)
            ? r("WAWebNotificationMuteReason").MutedChat
            : null;
        }),
        (n.buildKey = function () {
          return k(this.msgId);
        }),
        (n.matchesChat = function (t) {
          return r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(this.wid, t.id),
          );
        }),
        (n.getChatKind = function () {
          return o("WAWebChatFlowTypes").ChatKindType.Chat;
        }),
        (n.getIcon = async function () {
          return o("WAWebNotificationIconUtils").getNotificationIconByWid(
            this.wid,
            this.abortController.signal,
            o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
          );
        }),
        (n.getBannerOptions = function () {
          return {
            wid: this.wid,
            msgId: this.msgId,
            tag: "screened_" + this.msgId,
            title: T(this.wid),
            body: r("fbs")._(/*BTDS*/ "").toString(),
          };
        }),
        (n.shouldShowBanner = function () {
          return !e.prototype.shouldShowBanner.call(this) || d.has(this.msgId)
            ? !1
            : o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications();
        }),
        (n.shouldPlaySound = function () {
          return !1;
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function L(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(new R(e));
    }
    function E(e) {
      if (d.size >= c) {
        var t = d.values().next().value;
        t != null && d.delete(t);
      }
      (d.add(e),
        o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification(k(e)));
    }
    function k(e) {
      return "screened_call:" + e;
    }
    function I(e) {
      return (
        o("WAWebVoipCallScreeningEligibility").isCallerEligibleForScreening(
          e,
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_callee_version",
        ) >= 1
      );
    }
    function T(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      return t == null
        ? o("WAWebWidFormat").widToFormattedUser(e)
        : o("WAWebFrontendContactGetters").getFormattedName(t);
    }
    function D(e, t) {
      return !o("WAWebUA").UA.hasEmoji ||
        !o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_notification_icons_enabled",
        )
        ? ""
        : o("WAWebVoipCallEmoji").getCallEmoji(e, t) + " ";
    }
    function x(e, t) {
      if (e != null) {
        var n = r("WAWebGroupMetadataCollection").get(e);
        if ((n == null ? void 0 : n.subject) != null && n.subject !== "")
          return n.subject;
      }
      var a =
        t == null
          ? void 0
          : t.filter(function (e) {
              return !o("WAWebUserUtils").isMeAccount(e);
            });
      return a != null && a.length > 0
        ? o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(
            a,
            !0,
          )
        : r("fbs")._(/*BTDS*/ "");
    }
    async function $(e) {
      if (!o("WAWebVoipGatingUtils").areRichCallNotificationsEnabled())
        return P(e);
      var t =
          Date.now() +
          o("WAWebNotificationIconUtils").NOTIFICATION_ICON_TIMEOUT_MS,
        n = await P(e);
      return o("WAWebNotificationIconUtils").addWhatsAppBadgeToIcon(
        n,
        t - Date.now(),
      );
    }
    function P(t) {
      var n = t.abortSignal,
        r = t.groupCallParticipants,
        a = t.groupJid,
        i = t.isGroup,
        l = t.wid;
      if (i) {
        if (a != null)
          return o("WAWebNotificationIconUtils").getNotificationIconByWid(
            a,
            n,
            e,
          );
        var s = r == null ? void 0 : r[0];
        return s != null
          ? o("WAWebNotificationIconUtils").getNotificationIconByWid(
              s,
              n,
              o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
            )
          : Promise.resolve(e);
      }
      return o("WAWebNotificationIconUtils").getNotificationIconByWid(
        l,
        n,
        o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
      );
    }
    ((l.MAX_ACCEPTED_SCREENED_CALL_IDS = c),
      (l.showCallNotification = m),
      (l.silenceCallNotification = p),
      (l.cancelCallNotification = _),
      (l.showMissedCallNotification = v),
      (l.preloadCallNotificationBadge = S),
      (l.showScreenedCallNotification = L),
      (l.clearScreenedCallNotification = E));
  },
  226,
);
