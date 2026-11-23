__d(
  "WAWebHatchApprovalNotification",
  [
    "fbt",
    "WALogger",
    "WAWebBaseNotification",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebFrontendChatGetters",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d, m;
    function p(e) {
      return "hatchApproval:" + e;
    }
    var _ = (function (t) {
      function n(e, n) {
        var r;
        return (
          (r = t.call(this) || this),
          (r.notification = e),
          (r.$WAWebHatchApprovalNotification$p_1 = n),
          r
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.buildKey = function () {
          return p(this.notification.subjectId);
        }),
        (a.shouldMute = function (n) {
          var t = this.$WAWebHatchApprovalNotification$p_2(n);
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval-notif: shouldMute ",
                  " -> ",
                  "",
                ])),
              this.$WAWebHatchApprovalNotification$p_3(),
              t != null ? t : "null",
            ),
            t
          );
        }),
        (a.$WAWebHatchApprovalNotification$p_2 = function (t) {
          if (h(t))
            return r("WAWebNotificationMuteReason").HatchApprovalChatOnScreen;
          var e = y();
          return e != null && o("WAWebMuteGetters").getIsMuted(e.mute)
            ? r("WAWebNotificationMuteReason").MutedChat
            : (e == null ? void 0 : e.archive) === !0
              ? r("WAWebNotificationMuteReason").ArchivedChat
              : null;
        }),
        (a.shouldShowBanner = function () {
          if (
            this.$WAWebHatchApprovalNotification$p_1(
              this.notification.subjectId,
            )
          )
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-approval-notif: shouldShowBanner ",
                    " -> false, withdrawn",
                  ])),
                this.$WAWebHatchApprovalNotification$p_3(),
              ),
              !1
            );
          var e = y(),
            t =
              e != null &&
              o("WAWebNotificationHelpers").shouldEnableNotificationGranular(e);
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval-notif: shouldShowBanner ",
                  " -> ",
                  "",
                ])),
              this.$WAWebHatchApprovalNotification$p_3(),
              String(t),
            ),
            t
          );
        }),
        (a.shouldPlaySound = function () {
          var e = y();
          return (
            this.shouldShowBanner() &&
            e != null &&
            o("WAWebNotificationHelpers").shouldPlaySoundGranular(e) &&
            t.prototype.shouldPlaySound.call(this)
          );
        }),
        (a.getBannerOptions = function () {
          var e = y(),
            t =
              !o("WAWebMuteCollection").MuteCollection.getGlobalPreviews() ||
              e == null ||
              e.isLocked;
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval-notif: banner ",
                  " redacted=",
                  "",
                ])),
              this.$WAWebHatchApprovalNotification$p_3(),
              String(t),
            ),
            {
              wid: o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              tag: this.buildKey(),
              title: t ? f() : this.notification.title,
              body: t ? g() : this.notification.body,
            }
          );
        }),
        (a.getIcon = async function () {
          var e = y();
          if (e == null) return "";
          var t = await o("WAWebNotificationIconUtils").getChatNotificationIcon(
            e,
            this.abortController.signal,
            o("WAWebNotificationIconUtils").getDefaultChatNotificationIcon(e),
          );
          return (
            this.$WAWebHatchApprovalNotification$p_1(
              this.notification.subjectId,
            ) &&
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-approval-notif: aborting ",
                    ", withdrawn while building",
                  ])),
                this.$WAWebHatchApprovalNotification$p_3(),
              ),
              this.abortController.abort()),
            t
          );
        }),
        (a.getChatKind = function () {
          var e = y();
          return e == null ? null : o("WAWebFrontendChatGetters").getKind(e);
        }),
        (a.matchesChat = function (t) {
          return o("WAWebBotUtils").isHatchBot(t.id);
        }),
        (a.$WAWebHatchApprovalNotification$p_3 = function () {
          return this.notification.subjectId;
        }),
        n
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function f() {
      return s._(/*BTDS*/ "").toString();
    }
    function g() {
      return s._(/*BTDS*/ "").toString();
    }
    function h(e) {
      var t,
        n =
          (t = o("WAWebChatCollection").ChatCollection.getActive()) == null
            ? void 0
            : t.id;
      return (
        n != null &&
        o("WAWebBotUtils").isHatchBot(n) &&
        o("WAWebNotificationHelpers").appIsActive() &&
        (e == null ? void 0 : e.isChatsSurfaceActive) === !0
      );
    }
    function y() {
      return o("WAWebChatCollection").ChatCollection.get(
        o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      );
    }
    ((l.hatchApprovalNotificationKey = p),
      (l.WAWebHatchApprovalNotification = _));
  },
  226,
);
