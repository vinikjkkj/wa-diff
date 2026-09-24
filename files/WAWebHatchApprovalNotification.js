__d(
  "WAWebHatchApprovalNotification",
  [
    "fbt",
    "WALogger",
    "WAWebBaseNotification",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebFrontendChatGetters",
    "WAWebHatchFrontendGating",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebNotificationIconUtils",
    "WAWebNotificationMuteReason",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d;
    function m(e) {
      return "hatchApproval:" + e;
    }
    var p = (function (t) {
      function a(e) {
        var n;
        return (
          (n = t.call(this) || this),
          (n.$WAWebHatchApprovalNotification$p_1 = null),
          (n.notification = e),
          n
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.buildKey = function () {
          return m(this.notification.subjectId);
        }),
        (i.shouldMute = function (n) {
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
        (i.$WAWebHatchApprovalNotification$p_2 = function (t) {
          if (g(t))
            return r("WAWebNotificationMuteReason").HatchApprovalChatOnScreen;
          var e = h();
          return e != null && o("WAWebMuteGetters").getIsMuted(e.mute)
            ? r("WAWebNotificationMuteReason").MutedChat
            : (e == null ? void 0 : e.archive) === !0
              ? r("WAWebNotificationMuteReason").ArchivedChat
              : null;
        }),
        (i.shouldShowBanner = function () {
          var e = this.$WAWebHatchApprovalNotification$p_1;
          if (e != null) return e;
          var t = h();
          if (
            t == null ||
            !o("WAWebNotificationHelpers").shouldEnableNotificationGranular(t)
          )
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-approval-notif: shouldShowBanner ",
                    " -> false",
                  ])),
                this.$WAWebHatchApprovalNotification$p_3(),
              ),
              !1
            );
          var n = o(
            "WAWebHatchFrontendGating",
          ).isHatchApprovalNotificationEnabled();
          return (
            (this.$WAWebHatchApprovalNotification$p_1 = n),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval-notif: shouldShowBanner ",
                  " -> ",
                  "",
                ])),
              this.$WAWebHatchApprovalNotification$p_3(),
              String(n),
            ),
            n
          );
        }),
        (i.shouldPlaySound = function () {
          var e = h();
          return (
            this.shouldShowBanner() &&
            e != null &&
            o("WAWebNotificationHelpers").shouldPlaySoundGranular(e) &&
            t.prototype.shouldPlaySound.call(this)
          );
        }),
        (i.getBannerOptions = function () {
          var e = h(),
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
              title: t ? _() : this.notification.title,
              body: t ? f() : this.notification.body,
            }
          );
        }),
        (i.getIcon = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = h();
            return e == null
              ? ""
              : o("WAWebNotificationIconUtils").getChatNotificationIcon(
                  e,
                  this.abortController.signal,
                  o(
                    "WAWebNotificationIconUtils",
                  ).getDefaultChatNotificationIcon(e),
                );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (i.getChatKind = function () {
          var e = h();
          return e == null ? null : o("WAWebFrontendChatGetters").getKind(e);
        }),
        (i.matchesChat = function (t) {
          return o("WAWebBotUtils").isHatchBot(t.id);
        }),
        (i.$WAWebHatchApprovalNotification$p_3 = function () {
          return this.notification.subjectId;
        }),
        a
      );
    })(o("WAWebBaseNotification").WABaseNotification);
    function _() {
      return s._(/*BTDS*/ "Approval needed").toString();
    }
    function f() {
      return s._(/*BTDS*/ "A task needs your approval").toString();
    }
    function g(e) {
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
    function h() {
      return o("WAWebChatCollection").ChatCollection.get(
        o("WAWebBotUtils").HATCH_BOT_FBID_WID,
      );
    }
    ((l.hatchApprovalNotificationKey = m),
      (l.WAWebHatchApprovalNotification = p));
  },
  226,
);
