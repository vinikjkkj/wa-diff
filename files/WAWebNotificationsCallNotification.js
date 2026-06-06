__d(
  "WAWebNotificationsCallNotification",
  [
    "fbt",
    "WAWebBaseNotification",
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
    "WAWebNotificationController",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationTone",
    "WAWebParticipantListUtils",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUserPrefsMeUser",
    "WAWebVoipCallsTabNavigateTo",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWid",
    "WAWebWidFormat",
    "bx",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("bx").getURL(r("bx")("9555")),
      u = new Map();
    function c(e) {
      var t = e.wid.toString();
      return (
        u.set(t, e.msgId),
        p(e.msgId),
        o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(new m(e))
      );
    }
    function d(e) {
      if (e) {
        o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification(
          "call:" + e.toString(),
        );
        var t = e.toString(),
          n = u.get(t);
        n != null && (_(n), u.delete(t));
      }
      o("WAWebCallRingtone").stopCallRingtone();
    }
    var m = (function (e) {
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
          return C({
            abortSignal: this.abortController.signal,
            groupCallParticipants: this.groupCallParticipants,
            groupJid: this.groupJid,
            isGroup: this.isGroup,
            wid: this.wid,
          });
        }),
        (n.getBannerOptions = function () {
          var e = o("WAWebContactCollection").ContactCollection.get(this.wid),
            t = e
              ? o("WAWebFrontendContactGetters").getFormattedName(e)
              : o("WAWebWidFormat").widToFormattedUser(this.wid);
          if (this.isGroup && o("WAWebVoipGatingUtils").isCallingEnabled())
            return this.$WACallNotification$p_1(t);
          var n = r("fbs")
            ._(/*BTDS*/ "Incoming call, check your phone to answer")
            .toString();
          return (
            o("WAWebVoipGatingUtils").isCallingEnabled() &&
              (n = this.isVideo
                ? r("fbs")._(/*BTDS*/ "Incoming video call").toString()
                : r("fbs")._(/*BTDS*/ "Incoming voice call").toString()),
            {
              wid: this.wid,
              msgId: this.msgId,
              tag: this.msgId,
              title: t,
              body: n,
            }
          );
        }),
        (n.$WACallNotification$p_1 = function (t) {
          var e,
            n = y(this.groupJid, this.groupCallParticipants).toString(),
            r = this.isVideo
              ? s
                  ._(/*BTDS*/ "Incoming video call from {caller_name}", [
                    s._param("caller_name", t),
                  ])
                  .toString()
              : s
                  ._(/*BTDS*/ "Incoming voice call from {caller_name}", [
                    s._param("caller_name", t),
                  ])
                  .toString();
          return {
            wid: (e = this.groupJid) != null ? e : this.wid,
            msgId: this.msgId,
            tag: this.msgId,
            title: n,
            body: r,
          };
        }),
        (n.shouldShowBanner = function () {
          return o("WAWebNotificationHelpers").appIsActive() ||
            !e.prototype.shouldShowBanner.call(this)
            ? !1
            : o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications();
        }),
        (n.shouldPlaySound = function () {
          return e.prototype.shouldPlaySound.call(this)
            ? o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone()
            : !1;
        }),
        (n.playSound = function () {
          o("WAWebVoipGatingUtils").isCallingEnabled()
            ? o("WAWebCallRingtone").playCallRingtone()
            : o("WAWebNotificationTone").playNotification();
        }),
        (n.afterBannerShown = function (n) {
          (e.prototype.afterBannerShown.call(this, n),
            n.waitForClose().then(function () {
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
    function p(e) {
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
    function _(e) {
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
    function f() {
      o("WAWebVoipCallsTabNavigateTo").navigateToVoipCallsTab({});
    }
    var g = (function (e) {
      function t(t) {
        var n,
          r = t.groupCallParticipants,
          o = t.groupJid,
          a = t.isGroup,
          i = t.isVideo,
          l = t.msgId,
          s = t.wid;
        return (
          (n = e.call(this) || this),
          (n.wid = s),
          (n.msgId = l),
          (n.isVideo = i),
          (n.isGroup = a),
          (n.groupJid = o != null ? o : null),
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
          return C({
            abortSignal: this.abortController.signal,
            groupCallParticipants: this.groupCallParticipants,
            groupJid: this.groupJid,
            isGroup: this.isGroup,
            wid: this.wid,
          });
        }),
        (n.getBannerOptions = function () {
          var e = o("WAWebContactCollection").ContactCollection.get(this.wid),
            t = e
              ? o("WAWebFrontendContactGetters").getFormattedName(e)
              : o("WAWebWidFormat").widToFormattedUser(this.wid);
          if (this.isGroup) {
            var n,
              a = y(this.groupJid, this.groupCallParticipants).toString(),
              i = this.isVideo
                ? s
                    ._(/*BTDS*/ "Missed video call from {caller_name}", [
                      s._param("caller_name", t),
                    ])
                    .toString()
                : s
                    ._(/*BTDS*/ "Missed voice call from {caller_name}", [
                      s._param("caller_name", t),
                    ])
                    .toString();
            return {
              wid: (n = this.groupJid) != null ? n : this.wid,
              msgId: this.msgId,
              tag: "missed_" + this.msgId,
              title: a,
              body: i,
              doNotOpenChat: !0,
              onClick: f,
            };
          }
          var l = this.isVideo
            ? r("fbs")._(/*BTDS*/ "Missed video call").toString()
            : r("fbs")._(/*BTDS*/ "Missed voice call").toString();
          return {
            wid: this.wid,
            msgId: this.msgId,
            tag: "missed_" + this.msgId,
            title: t,
            body: l,
            doNotOpenChat: !0,
            onClick: f,
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
    function h(e) {
      return o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(new g(e));
    }
    function y(e, t) {
      if (e != null) {
        var n = r("WAWebGroupMetadataCollection").get(e);
        if ((n == null ? void 0 : n.subject) != null && n.subject !== "")
          return n.subject;
      }
      var a =
        t == null
          ? void 0
          : t.filter(function (e) {
              return !o("WAWebUserPrefsMeUser").isMeAccount(e);
            });
      return a != null && a.length > 0
        ? o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(
            a,
            !0,
          )
        : r("fbs")._(/*BTDS*/ "Group call");
    }
    function C(t) {
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
    ((l.showCallNotification = c),
      (l.cancelCallNotification = d),
      (l.showMissedCallNotification = h));
  },
  226,
);
