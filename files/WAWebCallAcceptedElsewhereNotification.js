__d(
  "WAWebCallAcceptedElsewhereNotification",
  [
    "fbt",
    "WAWebBaseNotification",
    "WAWebChatFlowTypes",
    "WAWebNotificationIconUtils",
    "bx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = r("bx").getURL(r("bx")("9555")),
      u = (function (t) {
        function n(e) {
          var n,
            r = e.callId,
            o = e.groupJid,
            a = e.isVideo,
            i = e.onJoinCall,
            l = e.participantWids,
            s = e.title;
          return (
            (n = t.call(this) || this),
            (n.callId = r),
            (n.groupJid = o),
            (n.participantWids = l),
            (n.isVideo = a),
            (n.onJoinCall = i),
            (n.title = s),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.buildKey = function () {
            return "call-accepted-elsewhere:" + this.callId;
          }),
          (r.getChatKind = function () {
            return o("WAWebChatFlowTypes").ChatKindType.Group;
          }),
          (r.getIcon = async function () {
            if (this.groupJid != null)
              return o("WAWebNotificationIconUtils").getNotificationIconByWid(
                this.groupJid,
                this.abortController.signal,
                e,
              );
            var t = this.participantWids[0];
            return t != null
              ? o("WAWebNotificationIconUtils").getNotificationIconByWid(
                  t,
                  this.abortController.signal,
                  o("WAWebNotificationIconUtils").USER_DEFAULT_ICON,
                )
              : e;
          }),
          (r.getBannerOptions = function () {
            var e,
              t,
              n = this.isVideo
                ? s._(/*BTDS*/ "Join video call on this device").toString()
                : s._(/*BTDS*/ "Join voice call on this device").toString(),
              r =
                (e =
                  (t = this.groupJid) != null ? t : this.participantWids[0]) !=
                null
                  ? e
                  : null;
            return {
              wid: r,
              title: this.title,
              body: n,
              onClick: this.onJoinCall,
              doNotOpenChat: !0,
              tag: "call-accepted-elsewhere:" + this.callId,
            };
          }),
          n
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    l.WACallAcceptedElsewhereNotification = u;
  },
  226,
);
