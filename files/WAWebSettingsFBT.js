__d(
  "WAWebSettingsFBT",
  [
    "fbt",
    "WAWebABProps",
    "WAWebConnModel",
    "WAWebUsernameWorkerCompatibleGatingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Chat wallpaper");
    }
    function u() {
      return s._(/*BTDS*/ "Chat theme");
    }
    function c() {
      return s._(/*BTDS*/ "Request account info");
    }
    function d() {
      return s._(/*BTDS*/ "Channels reports");
    }
    function m() {
      return s._(/*BTDS*/ "Business tools");
    }
    function p() {
      return s._(/*BTDS*/ "Quick replies, labels, catalog");
    }
    function _() {
      return s._(/*BTDS*/ "Business AI");
    }
    function f() {
      return s._(/*BTDS*/ "Your Business AI");
    }
    function g() {
      return s._(/*BTDS*/ "Manage AI knowledge and responses");
    }
    function h() {
      return s._(/*BTDS*/ "Business profile");
    }
    function y() {
      return s._(/*BTDS*/ "Catalog");
    }
    function C() {
      return s._(/*BTDS*/ "Orders");
    }
    function b() {
      return s._(/*BTDS*/ "Advertise");
    }
    function v() {
      return s._(/*BTDS*/ "Quick replies");
    }
    function S() {
      return s._(/*BTDS*/ "Labels");
    }
    function R() {
      return s._(/*BTDS*/ "Business Help Center");
    }
    function L() {
      return s._(/*BTDS*/ "Notifications");
    }
    function E() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      return e
        ? s._(/*BTDS*/ "Messages, groups, sounds")
        : s._(/*BTDS*/ "Message notifications");
    }
    function k() {
      return s._(
        /*BTDS*/ "Use this setting to override the language from your phone",
      );
    }
    function I() {
      return s._(/*BTDS*/ "Language");
    }
    function T() {
      return s._(/*BTDS*/ "Media auto-download");
    }
    function D() {
      return s._(/*BTDS*/ "Media upload quality");
    }
    function x() {
      return s._(/*BTDS*/ "Security");
    }
    function $() {
      return s._(/*BTDS*/ "Privacy");
    }
    function P() {
      return s._(/*BTDS*/ "Blocked contacts, disappearing messages");
    }
    function N() {
      return s._(/*BTDS*/ "Help and feedback");
    }
    function M() {
      return s._(/*BTDS*/ "Help center, contact us, privacy policy");
    }
    function w() {
      return s._(/*BTDS*/ "Keyboard shortcuts");
    }
    function A() {
      return s._(/*BTDS*/ "Quick actions");
    }
    function F() {
      return s._(/*BTDS*/ "Developer");
    }
    function O() {
      return s._(/*BTDS*/ "Internal tools, feature flags, debug options");
    }
    function B() {
      return s._(/*BTDS*/ "AB Props");
    }
    function W() {
      return s._(/*BTDS*/ "Group AB Props");
    }
    function q() {
      return s._(/*BTDS*/ "Infra Settings");
    }
    function U() {
      return s._(/*BTDS*/ "Canonical");
    }
    function V() {
      return s._(/*BTDS*/ "Message notifications");
    }
    function H() {
      return s._(/*BTDS*/ "Show notifications for new messages");
    }
    function G() {
      return s._(/*BTDS*/ "Show previews");
    }
    function z() {
      return s._(/*BTDS*/ "Preview message text inside message notifications.");
    }
    function j() {
      return s._(
        /*BTDS*/ "Get faster performance by syncing messages in the background.",
      );
    }
    function K() {
      return s._(/*BTDS*/ "Play sounds for outgoing messages");
    }
    function Q() {
      return s._(/*BTDS*/ "Show reaction notifications");
    }
    function X() {
      return s._(/*BTDS*/ "Call notifications");
    }
    function Y() {
      return s._(/*BTDS*/ "Show notifications for incoming calls");
    }
    function J() {
      return s._(/*BTDS*/ "Incoming calls");
    }
    function Z() {
      return s._(/*BTDS*/ "Play sounds for incoming calls");
    }
    function ee() {
      return s._(/*BTDS*/ "Incoming sounds");
    }
    function te() {
      return s._(/*BTDS*/ "Play sounds for incoming messages");
    }
    function ne() {
      return s._(/*BTDS*/ "Last seen and online");
    }
    function re() {
      return s._(/*BTDS*/ "Who can see my personal info");
    }
    function oe() {
      return s._(/*BTDS*/ "Profile picture");
    }
    function ae() {
      return s._(/*BTDS*/ "About");
    }
    function ie() {
      return s._(/*BTDS*/ "Read receipts");
    }
    function le() {
      return s._(/*BTDS*/ "Disable link previews");
    }
    function se() {
      return s._(/*BTDS*/ "Block unknown account messages");
    }
    function ue() {
      return s._(/*BTDS*/ "Disappearing messages");
    }
    function ce() {
      return s._(/*BTDS*/ "Status");
    }
    function de() {
      return s._(/*BTDS*/ "Default message timer");
    }
    function me() {
      return s._(/*BTDS*/ "Groups");
    }
    function pe() {
      return s._(/*BTDS*/ "Blocked contacts");
    }
    function _e() {
      return s._(/*BTDS*/ "App lock");
    }
    function fe() {
      return s._(/*BTDS*/ "Theme");
    }
    function ge() {
      return s._(/*BTDS*/ "Light");
    }
    function he() {
      return s._(/*BTDS*/ "Dark");
    }
    function ye() {
      return s._(/*BTDS*/ "System default");
    }
    function Ce() {
      return s._(/*BTDS*/ "Help Center");
    }
    function be() {
      return s._(/*BTDS*/ "Frequently asked questions");
    }
    function ve() {
      return s._(/*BTDS*/ "Contact us");
    }
    function Se() {
      return s._(/*BTDS*/ "Chat with support to get answers");
    }
    function Re() {
      return s._(/*BTDS*/ "Rate the app");
    }
    function Le() {
      return s._(/*BTDS*/ "Send feedback");
    }
    function Ee() {
      return s._(/*BTDS*/ "Technical issues, suggestions");
    }
    function ke() {
      return o("WAWebConnModel").Conn.isSMB
        ? s._(/*BTDS*/ "Terms")
        : s._(/*BTDS*/ "Terms and Privacy Policy");
    }
    function Ie() {
      var e = s._(/*BTDS*/ "Your customers' activity");
      return e;
    }
    function Te() {
      return s._(/*BTDS*/ "Lists");
    }
    function De() {
      return s._(/*BTDS*/ "Manage people and groups");
    }
    function xe() {
      return s._(/*BTDS*/ "Log out");
    }
    function $e() {
      return s._(/*BTDS*/ "Account");
    }
    function Pe() {
      return s._(/*BTDS*/ "Security notifications, account info");
    }
    function Ne() {
      return s._(/*BTDS*/ "Profile");
    }
    function Me() {
      return o(
        "WAWebUsernameWorkerCompatibleGatingUtils",
      ).usernameCreationOrReservationEnabled()
        ? s._(/*BTDS*/ "Name, profile picture, username")
        : s._(/*BTDS*/ "Name, profile picture");
    }
    function we() {
      return s._(/*BTDS*/ "Chats");
    }
    function Ae() {
      return s._(/*BTDS*/ "Theme, wallpaper, chat settings");
    }
    function Fe() {
      return s._(/*BTDS*/ "How to delete my account");
    }
    function Oe() {
      return s._(
        /*BTDS*/ "To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.",
      );
    }
    function Be() {
      return s._(/*BTDS*/ "Protect IP address in calls");
    }
    function We() {
      return s._(
        /*BTDS*/ "To make it harder for people to infer your location, calls on this device will be securely relayed through WhatsApp servers. This will reduce call quality.",
      );
    }
    function qe() {
      return s._(/*BTDS*/ "Status ad");
    }
    function Ue() {
      return s._(/*BTDS*/ "View details on your phone");
    }
    ((l.wallpaperTitle = e),
      (l.chatThemeTitle = u),
      (l.requestAccountInfoTitle = c),
      (l.newsletterReportsTitle = d),
      (l.businessToolsTitle = m),
      (l.businessToolsSecondaryTitle = p),
      (l.businessToolsBusinessAITitle = _),
      (l.businessToolsBusinessAIOnboardedTitle = f),
      (l.businessToolsBusinessAIOnboardedSecondaryTitle = g),
      (l.businessToolsBusinessProfileTitle = h),
      (l.businessToolsCatalogTitle = y),
      (l.businessToolsOrdersTitle = C),
      (l.businessToolsAdvertiseTitle = b),
      (l.businessToolsQuickRepliesTitle = v),
      (l.businessToolsLabelsTitle = S),
      (l.businessToolsHelpCenterTitle = R),
      (l.notificationsTitle = L),
      (l.notificationsSecondaryTitle = E),
      (l.languageHeaderTitle = k),
      (l.languageTitle = I),
      (l.mediaAutoDownloadTitle = T),
      (l.mediaUploadQualityTitle = D),
      (l.securityTitle = x),
      (l.privacyTitle = $),
      (l.privacySecondaryTitle = P),
      (l.helpTitle = N),
      (l.helpSecondaryTitle = M),
      (l.keyboardShortcutsTitle = w),
      (l.keyboardShortcutsSecondaryTitle = A),
      (l.developerTitle = F),
      (l.developerSecondaryTitle = O),
      (l.developerABPropsTitle = B),
      (l.developerGroupABPropsTitle = W),
      (l.developerInfraSettingsTitle = q),
      (l.developerWWWSettingsTitle = U),
      (l.messageNotificationsTitle = V),
      (l.messageNotificationsSubtitle = H),
      (l.showPreviewsTitle = G),
      (l.showPreviewsSubtitle = z),
      (l.offlineSyncSubtitle = j),
      (l.outgoingAudioToneSubtitle = K),
      (l.showReactionsTitle = Q),
      (l.showCallsTitle = X),
      (l.showCallsSubtitle = Y),
      (l.playCallRingtoneTitle = J),
      (l.playCallRingtoneSubtitle = Z),
      (l.soundsTitle = ee),
      (l.soundsSubtitle = te),
      (l.privacyLastSeenOnlineEnabledTitle = ne),
      (l.privacyPersonalInfoHeaderTitle = re),
      (l.privacyProfilePhotoTitle = oe),
      (l.privacyAboutTitle = ae),
      (l.privacyReadReceiptsTitle = ie),
      (l.privacyLinkPreviewsTitle = le),
      (l.antiBrigadingTitle = se),
      (l.privacyDMTitle = ue),
      (l.privacyStatusPostingTitle = ce),
      (l.privacyDDMTitle = de),
      (l.privacyGroupsTitle = me),
      (l.privacyBlockedTitle = pe),
      (l.privacyScreenlockTitle = _e),
      (l.themeTitle = fe),
      (l.themeLightLabel = ge),
      (l.themeDarkLabel = he),
      (l.themeSystemLabel = ye),
      (l.helpCenterTitle = Ce),
      (l.helpCenterSubtitle = be),
      (l.contactUsTitle = ve),
      (l.contactUsSubtitle = Se),
      (l.rateTheApp = Re),
      (l.sendFeedbackTitle = Le),
      (l.sendFeedbackSubtitle = Ee),
      (l.termsTitle = ke),
      (l.dataSharingTitle = Ie),
      (l.listsTitle = Te),
      (l.listsSecondaryTitle = De),
      (l.logoutTitle = xe),
      (l.accountTitle = $e),
      (l.accountSecondaryTitle = Pe),
      (l.profileTitle = Ne),
      (l.profileSecondaryTitle = Me),
      (l.chatsTitle = we),
      (l.chatsSecondaryTitle = Ae),
      (l.deleteAccountTitle = Fe),
      (l.antiBrigadingDescription = Oe),
      (l.protectIpInCallsTitle = Be),
      (l.protectIpInCallsDescription = We),
      (l.wamoNonAGMMessagePreviewTitle = qe),
      (l.wamoNonAGMMessagePreviewDescription = Ue));
  },
  226,
);
