__d(
  "WAWebNotificationsCallNotification",
  [
    "fbt",
    "Promise",
    "WAWebBaseNotification",
    "WAWebCallRingtone",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebLidMigrationUtils",
    "WAWebMuteCollection",
    "WAWebNoop",
    "WAWebNotificationController",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebNotificationTone",
    "WAWebParticipantListUtils",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUserPrefsMeUser",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumNotificationTypeEnum",
    "WAWebWid",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
    "bx",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = r("bx").getURL(r("bx")("9555")),
      c = new Map();
    function d(e) {
      var t = e.wid.toString();
      return (
        c.set(t, e.msgId),
        _(e.msgId),
        o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(new p(e))
      );
    }
    function m(e) {
      if (e) {
        o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification(
          "call:" + e.toString(),
        );
        var t = e.toString(),
          n = c.get(t);
        n != null && (f(n), c.delete(t));
      }
      o("WAWebCallRingtone").stopCallRingtone();
    }
    var p = (function (e) {
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
      var a = t.prototype;
      return (
        (a.shouldMute = function (t) {
          return !this.wid || !this.msgId || this.isSilenced
            ? r("WAWebNotificationMuteReason").GlobalMute
            : null;
        }),
        (a.buildKey = function () {
          return "call:" + this.wid.toString();
        }),
        (a.matchesChat = function (t) {
          return r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(this.wid, t.id),
          );
        }),
        (a.getChatKind = function () {
          return this.isGroup
            ? o("WAWebChatFlowTypes").ChatKindType.Group
            : o("WAWebChatFlowTypes").ChatKindType.Chat;
        }),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return C(
              this.isGroup,
              this.wid,
              this.groupJid,
              this.groupCallParticipants,
              this.abortController.signal,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getBannerOptions = function () {
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
        (a.$WACallNotification$p_1 = function (t) {
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
        (a.shouldShowBanner = function () {
          return e.prototype.shouldShowBanner.call(this)
            ? o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications()
            : !1;
        }),
        (a.shouldPlaySound = function () {
          return e.prototype.shouldPlaySound.call(this)
            ? o("WAWebMuteCollection").MuteCollection.getGlobalCallRingtone()
            : !1;
        }),
        (a.playSound = function () {
          o("WAWebVoipGatingUtils").isCallingEnabled()
            ? o("WAWebCallRingtone").playCallRingtone()
            : o("WAWebNotificationTone").playNotification();
        }),
        (a.afterBannerShown = function (n) {
          (e.prototype.afterBannerShown.call(this, n),
            n.waitForClose().then(function () {
              o("WAWebCallRingtone").stopCallRingtone();
            }));
        }),
        (a.getNotificationDeliveryWamEventData = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return {
              uiNotificationType: this.isVideo
                ? o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                    .INCOMING_VIDEO_CALL
                : o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                    .INCOMING_VOICE_CALL,
            };
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function _(e) {
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
    function f(e) {
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
      var a = t.prototype;
      return (
        (a.shouldMute = function (t) {
          return !this.wid || !this.msgId
            ? r("WAWebNotificationMuteReason").GlobalMute
            : null;
        }),
        (a.buildKey = function () {
          return "missed_call:" + this.wid.toString();
        }),
        (a.matchesChat = function (t) {
          return r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(this.wid, t.id),
          );
        }),
        (a.getChatKind = function () {
          return this.isGroup
            ? o("WAWebChatFlowTypes").ChatKindType.Group
            : o("WAWebChatFlowTypes").ChatKindType.Chat;
        }),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return C(
              this.isGroup,
              this.wid,
              this.groupJid,
              this.groupCallParticipants,
              this.abortController.signal,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getBannerOptions = function () {
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
          };
        }),
        (a.shouldShowBanner = function () {
          return e.prototype.shouldShowBanner.call(this)
            ? o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications()
            : !1;
        }),
        (a.shouldPlaySound = function () {
          return e.prototype.shouldPlaySound.call(this)
            ? o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications()
            : !1;
        }),
        (a.playSound = function () {
          o("WAWebNotificationTone").playNotification();
        }),
        (a.getNotificationDeliveryWamEventData = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return {
              uiNotificationType: this.isVideo
                ? o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                    .MISSED_VIDEO_CALL
                : o("WAWebWamEnumNotificationTypeEnum").NOTIFICATION_TYPE_ENUM
                    .MISSED_VOICE_CALL,
            };
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
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
    function C(t, r, a, i, l) {
      if (t) {
        if (a != null)
          return o("WAWebNotificationIconUtils").getNotificationIconByWid(
            a,
            l,
            u,
          );
        var s = i == null ? void 0 : i[0];
        return s != null
          ? o("WAWebNotificationIconUtils").getNotificationIconByWid(
              s,
              l,
              o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
            )
          : (e || (e = n("Promise"))).resolve(u);
      }
      return o("WAWebNotificationIconUtils").getNotificationIconByWid(
        r,
        l,
        o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
      );
    }
    ((l.showCallNotification = d),
      (l.cancelCallNotification = m),
      (l.showMissedCallNotification = h));
  },
  226,
);
