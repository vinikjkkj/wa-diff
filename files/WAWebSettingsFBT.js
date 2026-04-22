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
      return s._(/*BTDS*/ "Business profile");
    }
    function g() {
      return s._(/*BTDS*/ "Catalog");
    }
    function h() {
      return s._(/*BTDS*/ "Orders");
    }
    function y() {
      return s._(/*BTDS*/ "Advertise");
    }
    function C() {
      return s._(/*BTDS*/ "Quick replies");
    }
    function b() {
      return s._(/*BTDS*/ "Labels");
    }
    function v() {
      return s._(/*BTDS*/ "Business Help Center");
    }
    function S() {
      return s._(/*BTDS*/ "Notifications");
    }
    function R() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      return e
        ? s._(/*BTDS*/ "Messages, groups, sounds")
        : s._(/*BTDS*/ "Message notifications");
    }
    function L() {
      return s._(
        /*BTDS*/ "Use this setting to override the language from your phone",
      );
    }
    function E() {
      return s._(/*BTDS*/ "Language");
    }
    function k() {
      return s._(/*BTDS*/ "Media auto-download");
    }
    function I() {
      return s._(/*BTDS*/ "Media upload quality");
    }
    function T() {
      return s._(/*BTDS*/ "Security");
    }
    function D() {
      return s._(/*BTDS*/ "Privacy");
    }
    function x() {
      return s._(/*BTDS*/ "Blocked contacts, disappearing messages");
    }
    function $() {
      return s._(/*BTDS*/ "Help and feedback");
    }
    function P() {
      return s._(/*BTDS*/ "Help center, contact us, privacy policy");
    }
    function N() {
      return s._(/*BTDS*/ "Keyboard shortcuts");
    }
    function M() {
      return s._(/*BTDS*/ "Quick actions");
    }
    function w() {
      return s._(/*BTDS*/ "Developer");
    }
    function A() {
      return s._(/*BTDS*/ "Internal tools, feature flags, debug options");
    }
    function F() {
      return s._(/*BTDS*/ "AB Props");
    }
    function O() {
      return s._(/*BTDS*/ "Group AB Props");
    }
    function B() {
      return s._(/*BTDS*/ "Infra Settings");
    }
    function W() {
      return s._(/*BTDS*/ "Canonical");
    }
    function q() {
      return s._(/*BTDS*/ "Message notifications");
    }
    function U() {
      return s._(/*BTDS*/ "Show notifications for new messages");
    }
    function V() {
      return s._(/*BTDS*/ "Show previews");
    }
    function H() {
      return s._(/*BTDS*/ "Preview message text inside message notifications.");
    }
    function G() {
      return s._(
        /*BTDS*/ "Get faster performance by syncing messages in the background.",
      );
    }
    function z() {
      return s._(/*BTDS*/ "Play sounds for outgoing messages");
    }
    function j() {
      return s._(/*BTDS*/ "Show reaction notifications");
    }
    function K() {
      return s._(/*BTDS*/ "Call notifications");
    }
    function Q() {
      return s._(/*BTDS*/ "Show notifications for incoming calls");
    }
    function X() {
      return s._(/*BTDS*/ "Incoming calls");
    }
    function Y() {
      return s._(/*BTDS*/ "Play sounds for incoming calls");
    }
    function J() {
      return s._(/*BTDS*/ "Incoming sounds");
    }
    function Z() {
      return s._(/*BTDS*/ "Play sounds for incoming messages");
    }
    function ee() {
      return s._(/*BTDS*/ "Last seen and online");
    }
    function te() {
      return s._(/*BTDS*/ "Who can see my personal info");
    }
    function ne() {
      return s._(/*BTDS*/ "Profile picture");
    }
    function re() {
      return s._(/*BTDS*/ "About");
    }
    function oe() {
      return s._(/*BTDS*/ "Read receipts");
    }
    function ae() {
      return s._(/*BTDS*/ "Disable link previews");
    }
    function ie() {
      return s._(/*BTDS*/ "Block unknown account messages");
    }
    function le() {
      return s._(/*BTDS*/ "Disappearing messages");
    }
    function se() {
      return s._(/*BTDS*/ "Status");
    }
    function ue() {
      return s._(/*BTDS*/ "Default message timer");
    }
    function ce() {
      return s._(/*BTDS*/ "Groups");
    }
    function de() {
      return s._(/*BTDS*/ "Blocked contacts");
    }
    function me() {
      return s._(/*BTDS*/ "App lock");
    }
    function pe() {
      return s._(/*BTDS*/ "Theme");
    }
    function _e() {
      return s._(/*BTDS*/ "Light");
    }
    function fe() {
      return s._(/*BTDS*/ "Dark");
    }
    function ge() {
      return s._(/*BTDS*/ "System default");
    }
    function he() {
      return s._(/*BTDS*/ "Help Center");
    }
    function ye() {
      return s._(/*BTDS*/ "Frequently asked questions");
    }
    function Ce() {
      return s._(/*BTDS*/ "Contact us");
    }
    function be() {
      return s._(/*BTDS*/ "Chat with support to get answers");
    }
    function ve() {
      return s._(/*BTDS*/ "Rate the app");
    }
    function Se() {
      return s._(/*BTDS*/ "Send feedback");
    }
    function Re() {
      return s._(/*BTDS*/ "Technical issues, suggestions");
    }
    function Le() {
      return o("WAWebConnModel").Conn.isSMB
        ? s._(/*BTDS*/ "Terms")
        : s._(/*BTDS*/ "Terms and Privacy Policy");
    }
    function Ee() {
      var e = s._(/*BTDS*/ "Your customers' activity");
      return e;
    }
    function ke() {
      return s._(/*BTDS*/ "Lists");
    }
    function Ie() {
      return s._(/*BTDS*/ "Manage people and groups");
    }
    function Te() {
      return s._(/*BTDS*/ "Log out");
    }
    function De() {
      return s._(/*BTDS*/ "Account");
    }
    function xe() {
      return s._(/*BTDS*/ "Security notifications, account info");
    }
    function $e() {
      return s._(/*BTDS*/ "Profile");
    }
    function Pe() {
      return o(
        "WAWebUsernameWorkerCompatibleGatingUtils",
      ).usernameCreationOrReservationEnabled()
        ? s._(/*BTDS*/ "Name, profile photo, username")
        : s._(/*BTDS*/ "Name, profile photo");
    }
    function Ne() {
      return s._(/*BTDS*/ "Chats");
    }
    function Me() {
      return s._(/*BTDS*/ "Theme, wallpaper, chat settings");
    }
    function we() {
      return s._(/*BTDS*/ "How to delete my account");
    }
    function Ae() {
      return s._(
        /*BTDS*/ "To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.",
      );
    }
    function Fe() {
      return s._(/*BTDS*/ "Protect IP address in calls");
    }
    function Oe() {
      return s._(
        /*BTDS*/ "To make it harder for people to infer your location, calls on this device will be securely relayed through WhatsApp servers. This will reduce call quality.",
      );
    }
    function Be() {
      return s._(/*BTDS*/ "Status ad");
    }
    function We() {
      return s._(/*BTDS*/ "View details on your phone");
    }
    ((l.wallpaperTitle = e),
      (l.chatThemeTitle = u),
      (l.requestAccountInfoTitle = c),
      (l.newsletterReportsTitle = d),
      (l.businessToolsTitle = m),
      (l.businessToolsSecondaryTitle = p),
      (l.businessToolsBusinessAITitle = _),
      (l.businessToolsBusinessProfileTitle = f),
      (l.businessToolsCatalogTitle = g),
      (l.businessToolsOrdersTitle = h),
      (l.businessToolsAdvertiseTitle = y),
      (l.businessToolsQuickRepliesTitle = C),
      (l.businessToolsLabelsTitle = b),
      (l.businessToolsHelpCenterTitle = v),
      (l.notificationsTitle = S),
      (l.notificationsSecondaryTitle = R),
      (l.languageHeaderTitle = L),
      (l.languageTitle = E),
      (l.mediaAutoDownloadTitle = k),
      (l.mediaUploadQualityTitle = I),
      (l.securityTitle = T),
      (l.privacyTitle = D),
      (l.privacySecondaryTitle = x),
      (l.helpTitle = $),
      (l.helpSecondaryTitle = P),
      (l.keyboardShortcutsTitle = N),
      (l.keyboardShortcutsSecondaryTitle = M),
      (l.developerTitle = w),
      (l.developerSecondaryTitle = A),
      (l.developerABPropsTitle = F),
      (l.developerGroupABPropsTitle = O),
      (l.developerInfraSettingsTitle = B),
      (l.developerWWWSettingsTitle = W),
      (l.messageNotificationsTitle = q),
      (l.messageNotificationsSubtitle = U),
      (l.showPreviewsTitle = V),
      (l.showPreviewsSubtitle = H),
      (l.offlineSyncSubtitle = G),
      (l.outgoingAudioToneSubtitle = z),
      (l.showReactionsTitle = j),
      (l.showCallsTitle = K),
      (l.showCallsSubtitle = Q),
      (l.playCallRingtoneTitle = X),
      (l.playCallRingtoneSubtitle = Y),
      (l.soundsTitle = J),
      (l.soundsSubtitle = Z),
      (l.privacyLastSeenOnlineEnabledTitle = ee),
      (l.privacyPersonalInfoHeaderTitle = te),
      (l.privacyProfilePhotoTitle = ne),
      (l.privacyAboutTitle = re),
      (l.privacyReadReceiptsTitle = oe),
      (l.privacyLinkPreviewsTitle = ae),
      (l.antiBrigadingTitle = ie),
      (l.privacyDMTitle = le),
      (l.privacyStatusPostingTitle = se),
      (l.privacyDDMTitle = ue),
      (l.privacyGroupsTitle = ce),
      (l.privacyBlockedTitle = de),
      (l.privacyScreenlockTitle = me),
      (l.themeTitle = pe),
      (l.themeLightLabel = _e),
      (l.themeDarkLabel = fe),
      (l.themeSystemLabel = ge),
      (l.helpCenterTitle = he),
      (l.helpCenterSubtitle = ye),
      (l.contactUsTitle = Ce),
      (l.contactUsSubtitle = be),
      (l.rateTheApp = ve),
      (l.sendFeedbackTitle = Se),
      (l.sendFeedbackSubtitle = Re),
      (l.termsTitle = Le),
      (l.dataSharingTitle = Ee),
      (l.listsTitle = ke),
      (l.listsSecondaryTitle = Ie),
      (l.logoutTitle = Te),
      (l.accountTitle = De),
      (l.accountSecondaryTitle = xe),
      (l.profileTitle = $e),
      (l.profileSecondaryTitle = Pe),
      (l.chatsTitle = Ne),
      (l.chatsSecondaryTitle = Me),
      (l.deleteAccountTitle = we),
      (l.antiBrigadingDescription = Ae),
      (l.protectIpInCallsTitle = Fe),
      (l.protectIpInCallsDescription = Oe),
      (l.wamoNonAGMMessagePreviewTitle = Be),
      (l.wamoNonAGMMessagePreviewDescription = We));
  },
  226,
);
