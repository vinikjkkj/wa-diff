__d(
  "WAWebCallLinkJoinedNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "WAWebParticipantListUtils",
    "asyncToGeneratorRuntime",
    "bx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("bx").getURL(r("bx")("9555")),
      u = (function (t) {
        function a(e) {
          var n,
            r = e.callId,
            o = e.linkToken,
            a = e.onJoinCall,
            i = e.participantWids;
          return (
            (n = t.call(this) || this),
            (n.callId = r),
            (n.linkToken = o),
            (n.onJoinCall = a),
            (n.participantWids = i),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.shouldMute = function (t) {
            return o("WAWebNotificationHelpers").appIsActive()
              ? r("WAWebNotificationMuteReason").AppState
              : null;
          }),
          (i.buildKey = function () {
            return "call-link-joined:" + this.callId;
          }),
          (i.getChatKind = function () {
            return o("WAWebChatFlowTypes").ChatKindType.Group;
          }),
          (i.getIcon = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this.participantWids[0];
              return t != null
                ? o("WAWebNotificationIconUtils").getNotificationIconByWid(
                    t,
                    this.abortController.signal,
                    o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                  )
                : e;
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.getBannerOptions = function () {
            var e,
              t = this.$WACallLinkJoinedNotification$p_1(),
              n = s._(/*BTDS*/ "Joined your call link").toString(),
              r = (e = this.participantWids[0]) != null ? e : null;
            return {
              wid: r,
              title: t,
              body: n,
              onClick: this.onJoinCall,
              doNotOpenChat: !0,
              tag: "call-link-joined:" + this.callId,
            };
          }),
          (i.$WACallLinkJoinedNotification$p_1 = function () {
            return this.participantWids.length === 0
              ? s._(/*BTDS*/ "Someone joined your call link").toString()
              : o(
                  "WAWebParticipantListUtils",
                ).formatParticipantWidsPreserveOrder(this.participantWids, !0);
          }),
          a
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    l.WACallLinkJoinedNotification = u;
  },
  226,
);
