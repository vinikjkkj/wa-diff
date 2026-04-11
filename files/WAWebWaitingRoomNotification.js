__d(
  "WAWebWaitingRoomNotification",
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
            a = e.onOpenWaitingRoom,
            i = e.waitingRoomUserWids;
          return (
            (n = t.call(this) || this),
            (n.callId = r),
            (n.linkToken = o),
            (n.waitingRoomUserWids = i),
            (n.onOpenWaitingRoom = a),
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
            return "waiting-room:" + this.callId;
          }),
          (i.getChatKind = function () {
            return o("WAWebChatFlowTypes").ChatKindType.Group;
          }),
          (i.getIcon = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this.waitingRoomUserWids[0];
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
              t = this.$WAWaitingRoomNotification$p_1(),
              n = s
                ._(
                  /*BTDS*/ '_j{"*":"Want to join your call link","_1":"Wants to join your call link"}',
                  [s._plural(this.waitingRoomUserWids.length)],
                )
                .toString(),
              r = (e = this.waitingRoomUserWids[0]) != null ? e : null;
            return {
              wid: r,
              title: t,
              body: n,
              onClick: this.onOpenWaitingRoom,
              doNotOpenChat: !0,
              tag: "waiting-room:" + this.callId,
            };
          }),
          (i.$WAWaitingRoomNotification$p_1 = function () {
            return this.waitingRoomUserWids.length === 0
              ? s._(/*BTDS*/ "Someone").toString()
              : o(
                  "WAWebParticipantListUtils",
                ).formatParticipantWidsPreserveOrder(
                  this.waitingRoomUserWids,
                  !0,
                );
          }),
          a
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    l.WAWaitingRoomNotification = u;
  },
  226,
);
