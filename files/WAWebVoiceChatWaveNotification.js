__d(
  "WAWebVoiceChatWaveNotification",
  [
    "fbt",
    "WAWebApiContact",
    "WAWebBaseNotification",
    "WAWebCallCollection",
    "WAWebChatFlowTypes",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.callId,
          o = t.groupJid,
          a = t.onJoinCall,
          i = t.senderWid;
        return (
          (n = e.call(this) || this),
          (n.callId = r),
          (n.senderWid = i),
          (n.groupJid = o),
          (n.onJoinCall = a),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.shouldMute = function (t) {
          var e = r("WAWebCallCollection").activeCall;
          return e != null && e.id === this.callId
            ? r("WAWebNotificationMuteReason").AppState
            : null;
        }),
        (a.buildKey = function () {
          return "voice-chat-wave:" + this.callId;
        }),
        (a.getChatKind = function () {
          return this.groupJid != null
            ? o("WAWebChatFlowTypes").ChatKindType.Group
            : o("WAWebChatFlowTypes").ChatKindType.Chat;
        }),
        (a.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebNotificationIconUtils").getNotificationIconByWid(
              this.senderWid,
              this.abortController.signal,
              o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.getBannerOptions = function () {
          var e = this.$WAVoiceChatWaveNotification$p_1();
          return {
            wid: this.senderWid,
            title: e,
            body: this.$WAVoiceChatWaveNotification$p_2(e),
            onClick: this.onJoinCall,
            doNotOpenChat: !0,
            tag: this.buildKey(),
          };
        }),
        (a.$WAVoiceChatWaveNotification$p_1 = function () {
          var e = this.$WAVoiceChatWaveNotification$p_3();
          return e != null
            ? o("WAWebFrontendContactGetters").getDisplayName(e)
            : o("WAWebWidFormat").widToFormattedUser(this.senderWid);
        }),
        (a.$WAVoiceChatWaveNotification$p_3 = function () {
          var e = this.senderWid;
          if (!e.isUser())
            return o("WAWebContactCollection").ContactCollection.get(e);
          var t = o("WAWebWidFactory").asUserWidOrThrow(e),
            n = o("WAWebContactCollection").ContactCollection.get(t);
          if (n != null && n.name != null) return n;
          var r = o("WAWebApiContact").getAlternateUserWid(t);
          if (r != null) {
            var a = o("WAWebContactCollection").ContactCollection.get(r);
            a != null && (n == null || a.name != null) && (n = a);
          }
          if (n != null && n.name == null && n.phoneNumber != null) {
            var i = o("WAWebContactCollection").ContactCollection.get(
              n.phoneNumber,
            );
            i != null && i.name != null && (n = i);
          }
          return n;
        }),
        (a.$WAVoiceChatWaveNotification$p_2 = function (t) {
          return s
            ._(
              /*BTDS*/ "\ud83d\udc4b {senderName} wants to talk now. Join the conversation!",
              [s._param("senderName", t)],
            )
            .toString();
        }),
        t
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    l.WAVoiceChatWaveNotification = e;
  },
  226,
);
