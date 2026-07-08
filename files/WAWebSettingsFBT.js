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
      return s._(/*BTDS*/ "Meta Business Agent");
    }
    function f() {
      return s._(/*BTDS*/ "Your Meta Business Agent");
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
      return s._(/*BTDS*/ "Spell check");
    }
    function $() {
      return s._(/*BTDS*/ "Check spelling while typing");
    }
    function P() {
      return s._(/*BTDS*/ "Replace text with emoji");
    }
    function N() {
      return s._(/*BTDS*/ "Emoji will replace specific text as you type");
    }
    function M() {
      return s._(/*BTDS*/ "Enter is send");
    }
    function w() {
      return s._(/*BTDS*/ "Enter key will send your message");
    }
    function A() {
      return s._(/*BTDS*/ "Security");
    }
    function F() {
      return s._(/*BTDS*/ "Privacy");
    }
    function O() {
      return s._(/*BTDS*/ "Blocked contacts, disappearing messages");
    }
    function B() {
      return s._(/*BTDS*/ "Help and feedback");
    }
    function W() {
      return s._(/*BTDS*/ "Help center, contact us, privacy policy");
    }
    function q() {
      return s._(/*BTDS*/ "Keyboard shortcuts");
    }
    function U() {
      return s._(/*BTDS*/ "Quick actions");
    }
    function V() {
      return s._(/*BTDS*/ "Developer");
    }
    function H() {
      return s._(/*BTDS*/ "Internal tools, feature flags, debug options");
    }
    function G() {
      return s._(/*BTDS*/ "AB Props");
    }
    function z() {
      return s._(/*BTDS*/ "Group AB Props");
    }
    function j() {
      return s._(/*BTDS*/ "Infra Settings");
    }
    function K() {
      return s._(/*BTDS*/ "Canonical");
    }
    function Q() {
      return s._(/*BTDS*/ "Message notifications");
    }
    function X() {
      return s._(/*BTDS*/ "Show notifications for new messages");
    }
    function Y() {
      return s._(/*BTDS*/ "Show previews");
    }
    function J() {
      return s._(/*BTDS*/ "Preview message text inside message notifications.");
    }
    function Z() {
      return s._(
        /*BTDS*/ "Get faster performance by syncing messages in the background.",
      );
    }
    function ee() {
      return s._(/*BTDS*/ "Play sounds for outgoing messages");
    }
    function te() {
      return s._(/*BTDS*/ "Show reaction notifications");
    }
    function ne() {
      return s._(/*BTDS*/ "Call notifications");
    }
    function re() {
      return s._(/*BTDS*/ "Show notifications for incoming calls");
    }
    function oe() {
      return s._(/*BTDS*/ "Incoming calls");
    }
    function ae() {
      return s._(/*BTDS*/ "Play sounds for incoming calls");
    }
    function ie() {
      return s._(/*BTDS*/ "Incoming sounds");
    }
    function le() {
      return s._(/*BTDS*/ "Play sounds for incoming messages");
    }
    function se() {
      return s._(/*BTDS*/ "Last seen and online");
    }
    function ue() {
      return s._(/*BTDS*/ "Who can see my personal info");
    }
    function ce() {
      return s._(/*BTDS*/ "Profile picture");
    }
    function de() {
      return s._(/*BTDS*/ "About");
    }
    function me() {
      return s._(/*BTDS*/ "Read receipts");
    }
    function pe() {
      return s._(/*BTDS*/ "Turn off link previews");
    }
    function _e() {
      return s._(/*BTDS*/ "Block unknown account messages");
    }
    function fe() {
      return s._(/*BTDS*/ "Disappearing messages");
    }
    function ge() {
      return s._(/*BTDS*/ "Status");
    }
    function he() {
      return s._(/*BTDS*/ "Default message timer");
    }
    function ye() {
      return s._(/*BTDS*/ "Groups");
    }
    function Ce() {
      return s._(/*BTDS*/ "Blocked contacts");
    }
    function be() {
      return s._(/*BTDS*/ "App lock");
    }
    function ve() {
      return s._(/*BTDS*/ "Theme");
    }
    function Se() {
      return s._(/*BTDS*/ "Light");
    }
    function Re() {
      return s._(/*BTDS*/ "Dark");
    }
    function Le() {
      return s._(/*BTDS*/ "System default");
    }
    function Ee() {
      return s._(/*BTDS*/ "Help Center");
    }
    function ke() {
      return s._(/*BTDS*/ "Frequently asked questions");
    }
    function Ie() {
      return s._(/*BTDS*/ "Contact us");
    }
    function Te() {
      return s._(/*BTDS*/ "Chat with support to get answers");
    }
    function De() {
      return s._(/*BTDS*/ "Rate the app");
    }
    function xe() {
      return s._(/*BTDS*/ "Send feedback");
    }
    function $e() {
      return s._(/*BTDS*/ "Technical issues, suggestions");
    }
    function Pe() {
      return o("WAWebConnModel").Conn.isSMB
        ? s._(/*BTDS*/ "Terms")
        : s._(/*BTDS*/ "Terms and Privacy Policy");
    }
    function Ne() {
      var e = s._(/*BTDS*/ "Your customers' activity");
      return e;
    }
    function Me() {
      return s._(/*BTDS*/ "Lists");
    }
    function we() {
      return s._(/*BTDS*/ "Manage people and groups");
    }
    function Ae() {
      return s._(/*BTDS*/ "Log out");
    }
    function Fe() {
      return s._(/*BTDS*/ "Account");
    }
    function Oe() {
      return s._(/*BTDS*/ "Security notifications, account info");
    }
    function Be() {
      return s._(/*BTDS*/ "Profile");
    }
    function We() {
      return o(
        "WAWebUsernameWorkerCompatibleGatingUtils",
      ).usernameCreationOrReservationEnabled()
        ? s._(/*BTDS*/ "Name, profile picture, username")
        : s._(/*BTDS*/ "Name, profile picture");
    }
    function qe() {
      return s._(/*BTDS*/ "Chats");
    }
    function Ue() {
      return s._(/*BTDS*/ "Theme, wallpaper, chat settings");
    }
    function Ve() {
      return s._(/*BTDS*/ "How to delete my account");
    }
    function He() {
      return s._(
        /*BTDS*/ "To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.",
      );
    }
    function Ge() {
      return s._(/*BTDS*/ "Protect IP address in calls");
    }
    function ze() {
      return s._(
        /*BTDS*/ "To make it harder for people to infer your location, calls on this device will be securely relayed through WhatsApp servers. This will reduce call quality.",
      );
    }
    function je() {
      return s._(/*BTDS*/ "Status ad");
    }
    function Ke() {
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
      (l.spellCheckTitle = x),
      (l.spellCheckSubtitle = $),
      (l.emojiReplacementTitle = P),
      (l.emojiReplacementSubtitle = N),
      (l.enterIsSendTitle = M),
      (l.enterIsSendSubtitle = w),
      (l.securityTitle = A),
      (l.privacyTitle = F),
      (l.privacySecondaryTitle = O),
      (l.helpTitle = B),
      (l.helpSecondaryTitle = W),
      (l.keyboardShortcutsTitle = q),
      (l.keyboardShortcutsSecondaryTitle = U),
      (l.developerTitle = V),
      (l.developerSecondaryTitle = H),
      (l.developerABPropsTitle = G),
      (l.developerGroupABPropsTitle = z),
      (l.developerInfraSettingsTitle = j),
      (l.developerWWWSettingsTitle = K),
      (l.messageNotificationsTitle = Q),
      (l.messageNotificationsSubtitle = X),
      (l.showPreviewsTitle = Y),
      (l.showPreviewsSubtitle = J),
      (l.offlineSyncSubtitle = Z),
      (l.outgoingAudioToneSubtitle = ee),
      (l.showReactionsTitle = te),
      (l.showCallsTitle = ne),
      (l.showCallsSubtitle = re),
      (l.playCallRingtoneTitle = oe),
      (l.playCallRingtoneSubtitle = ae),
      (l.soundsTitle = ie),
      (l.soundsSubtitle = le),
      (l.privacyLastSeenOnlineEnabledTitle = se),
      (l.privacyPersonalInfoHeaderTitle = ue),
      (l.privacyProfilePhotoTitle = ce),
      (l.privacyAboutTitle = de),
      (l.privacyReadReceiptsTitle = me),
      (l.privacyLinkPreviewsTitle = pe),
      (l.antiBrigadingTitle = _e),
      (l.privacyDMTitle = fe),
      (l.privacyStatusPostingTitle = ge),
      (l.privacyDDMTitle = he),
      (l.privacyGroupsTitle = ye),
      (l.privacyBlockedTitle = Ce),
      (l.privacyScreenlockTitle = be),
      (l.themeTitle = ve),
      (l.themeLightLabel = Se),
      (l.themeDarkLabel = Re),
      (l.themeSystemLabel = Le),
      (l.helpCenterTitle = Ee),
      (l.helpCenterSubtitle = ke),
      (l.contactUsTitle = Ie),
      (l.contactUsSubtitle = Te),
      (l.rateTheApp = De),
      (l.sendFeedbackTitle = xe),
      (l.sendFeedbackSubtitle = $e),
      (l.termsTitle = Pe),
      (l.dataSharingTitle = Ne),
      (l.listsTitle = Me),
      (l.listsSecondaryTitle = we),
      (l.logoutTitle = Ae),
      (l.accountTitle = Fe),
      (l.accountSecondaryTitle = Oe),
      (l.profileTitle = Be),
      (l.profileSecondaryTitle = We),
      (l.chatsTitle = qe),
      (l.chatsSecondaryTitle = Ue),
      (l.deleteAccountTitle = Ve),
      (l.antiBrigadingDescription = He),
      (l.protectIpInCallsTitle = Ge),
      (l.protectIpInCallsDescription = ze),
      (l.wamoNonAGMMessagePreviewTitle = je),
      (l.wamoNonAGMMessagePreviewDescription = Ke));
  },
  226,
);
