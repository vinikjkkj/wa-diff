__d(
  "WAWebSettingsFBT",
  [
    "fbt",
    "WAWebABProps",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebUsernameWorkerCompatibleGatingUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return s._(/*BTDS*/ "Chat wallpaper");
    }
    function u() {
      return s._(/*BTDS*/ "Default chat theme");
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
      return s._(/*BTDS*/ "Payments");
    }
    function f() {
      return s._(/*BTDS*/ "Transactions, payment info");
    }
    function g() {
      return s._(/*BTDS*/ "Meta Business Agent");
    }
    function h() {
      return s._(/*BTDS*/ "Your Meta Business Agent");
    }
    function y() {
      return s._(/*BTDS*/ "Business profile");
    }
    function C() {
      return s._(/*BTDS*/ "Catalog");
    }
    function b() {
      return s._(/*BTDS*/ "Orders");
    }
    function v() {
      return s._(/*BTDS*/ "Advertise");
    }
    function S() {
      return s._(/*BTDS*/ "Quick replies");
    }
    function R() {
      return s._(/*BTDS*/ "Labels");
    }
    function L() {
      return s._(/*BTDS*/ "Business Help Center");
    }
    function E() {
      return s._(/*BTDS*/ "Notifications");
    }
    function k() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_granular_notifications",
      );
      return e
        ? s._(/*BTDS*/ "Messages, groups, sounds")
        : s._(/*BTDS*/ "Message notifications");
    }
    function I() {
      return s._(
        /*BTDS*/ "Use this setting to override the language from your phone",
      );
    }
    function T() {
      return s._(/*BTDS*/ "Language");
    }
    function D() {
      return s._(/*BTDS*/ "Media auto-download");
    }
    function x() {
      return s._(/*BTDS*/ "Media upload quality");
    }
    function $() {
      return s._(/*BTDS*/ "Spell check");
    }
    function P() {
      return s._(/*BTDS*/ "Check spelling while typing");
    }
    function N() {
      return s._(/*BTDS*/ "Replace text with emoji");
    }
    function M() {
      return s._(/*BTDS*/ "Emoji will replace specific text as you type");
    }
    function w() {
      return s._(/*BTDS*/ "Enter is send");
    }
    function A() {
      return s._(/*BTDS*/ "Enter key will send your message");
    }
    function F() {
      return s._(/*BTDS*/ "Security");
    }
    function O() {
      return s._(/*BTDS*/ "Privacy");
    }
    function B() {
      return s._(/*BTDS*/ "Blocked contacts, disappearing messages");
    }
    function W() {
      return s._(/*BTDS*/ "Help and feedback");
    }
    function q() {
      return s._(/*BTDS*/ "Help center, contact us, privacy policy");
    }
    function U() {
      return s._(/*BTDS*/ "Keyboard shortcuts");
    }
    function V() {
      return s._(/*BTDS*/ "Quick actions");
    }
    function H() {
      return s._(/*BTDS*/ "Developer");
    }
    function G() {
      return s._(/*BTDS*/ "Internal tools, feature flags, debug options");
    }
    function z() {
      return s._(/*BTDS*/ "AB Props");
    }
    function j() {
      return s._(/*BTDS*/ "Group AB Props");
    }
    function K() {
      return s._(/*BTDS*/ "Infra Settings");
    }
    function Q() {
      return s._(/*BTDS*/ "Canonical");
    }
    function X() {
      return s._(/*BTDS*/ "Message notifications");
    }
    function Y() {
      return s._(/*BTDS*/ "Show notifications for new messages");
    }
    function J() {
      return s._(/*BTDS*/ "Show previews");
    }
    function Z() {
      return s._(/*BTDS*/ "Preview message text inside message notifications.");
    }
    function ee() {
      return s._(
        /*BTDS*/ "Get faster performance by syncing messages in the background.",
      );
    }
    function te() {
      return s._(/*BTDS*/ "Play sounds for outgoing messages");
    }
    function ne() {
      return s._(/*BTDS*/ "Show reaction notifications");
    }
    function re() {
      return s._(/*BTDS*/ "Call notifications");
    }
    function oe() {
      return s._(/*BTDS*/ "Show notifications for incoming calls");
    }
    function ae() {
      return s._(/*BTDS*/ "Incoming calls");
    }
    function ie() {
      return s._(/*BTDS*/ "Play sounds for incoming calls");
    }
    function le() {
      return s._(/*BTDS*/ "Incoming sounds");
    }
    function se() {
      return s._(/*BTDS*/ "Play sounds for incoming messages");
    }
    function ue() {
      return s._(/*BTDS*/ "Last seen and online");
    }
    function ce() {
      return s._(/*BTDS*/ "Who can see my personal info");
    }
    function de() {
      return s._(/*BTDS*/ "Profile picture");
    }
    function me() {
      return s._(/*BTDS*/ "About");
    }
    function pe() {
      return s._(/*BTDS*/ "Read receipts");
    }
    function _e() {
      return s._(/*BTDS*/ "Turn off link previews");
    }
    function fe() {
      return s._(/*BTDS*/ "Block unknown account messages");
    }
    function ge() {
      return s._(/*BTDS*/ "Disappearing messages");
    }
    function he() {
      return s._(/*BTDS*/ "Status");
    }
    function ye() {
      return s._(/*BTDS*/ "Default message timer");
    }
    function Ce() {
      return s._(/*BTDS*/ "Groups");
    }
    function be() {
      return s._(/*BTDS*/ "Blocked contacts");
    }
    function ve() {
      return s._(/*BTDS*/ "App lock");
    }
    function Se() {
      return s._(/*BTDS*/ "Theme");
    }
    function Re() {
      return s._(/*BTDS*/ "Light");
    }
    function Le() {
      return s._(/*BTDS*/ "Dark");
    }
    function Ee() {
      return s._(/*BTDS*/ "System default");
    }
    function ke() {
      return s._(/*BTDS*/ "Help Center");
    }
    function Ie() {
      return s._(/*BTDS*/ "Frequently asked questions");
    }
    function Te() {
      return s._(/*BTDS*/ "Contact us");
    }
    function De() {
      return s._(/*BTDS*/ "Chat with support to get answers");
    }
    function xe() {
      return s._(/*BTDS*/ "Rate the app");
    }
    function $e() {
      return s._(/*BTDS*/ "Send feedback");
    }
    function Pe() {
      return s._(/*BTDS*/ "Technical issues, suggestions");
    }
    function Ne() {
      return o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
        ? s._(/*BTDS*/ "Terms")
        : s._(/*BTDS*/ "Terms and Privacy Policy");
    }
    function Me() {
      var e = s._(/*BTDS*/ "Your customers' activity");
      return e;
    }
    function we() {
      return s._(/*BTDS*/ "Lists");
    }
    function Ae() {
      return s._(/*BTDS*/ "Agents");
    }
    function Fe() {
      return s._(/*BTDS*/ "Agents connected to this account");
    }
    function Oe() {
      return s._(/*BTDS*/ "Manage people and groups");
    }
    function Be() {
      return s._(/*BTDS*/ "Log out");
    }
    function We() {
      return s._(/*BTDS*/ "Account");
    }
    function qe() {
      return s._(/*BTDS*/ "Security notifications, account info");
    }
    function Ue() {
      return s._(/*BTDS*/ "Profile");
    }
    function Ve() {
      return o(
        "WAWebUsernameWorkerCompatibleGatingUtils",
      ).usernameCreationOrReservationEnabled()
        ? s._(/*BTDS*/ "Name, profile picture, username")
        : s._(/*BTDS*/ "Name, profile picture");
    }
    function He() {
      return s._(/*BTDS*/ "Chats");
    }
    function Ge() {
      return s._(/*BTDS*/ "Theme, wallpaper, chat settings");
    }
    function ze() {
      return s._(/*BTDS*/ "How to delete my account");
    }
    function je() {
      return s._(
        /*BTDS*/ "To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.",
      );
    }
    function Ke() {
      return s._(/*BTDS*/ "Protect IP address in calls");
    }
    function Qe() {
      return s._(
        /*BTDS*/ "To make it harder for people to infer your location, calls on this device will be securely relayed through WhatsApp servers. This will reduce call quality.",
      );
    }
    function Xe() {
      return s._(/*BTDS*/ "Status ad");
    }
    function Ye() {
      return s._(/*BTDS*/ "View details on your phone");
    }
    ((l.wallpaperTitle = e),
      (l.chatThemeTitle = u),
      (l.requestAccountInfoTitle = c),
      (l.newsletterReportsTitle = d),
      (l.businessToolsTitle = m),
      (l.businessToolsSecondaryTitle = p),
      (l.paymentsTitle = _),
      (l.paymentsSecondaryTitle = f),
      (l.businessToolsBusinessAITitle = g),
      (l.businessToolsBusinessAIOnboardedTitle = h),
      (l.businessToolsBusinessProfileTitle = y),
      (l.businessToolsCatalogTitle = C),
      (l.businessToolsOrdersTitle = b),
      (l.businessToolsAdvertiseTitle = v),
      (l.businessToolsQuickRepliesTitle = S),
      (l.businessToolsLabelsTitle = R),
      (l.businessToolsHelpCenterTitle = L),
      (l.notificationsTitle = E),
      (l.notificationsSecondaryTitle = k),
      (l.languageHeaderTitle = I),
      (l.languageTitle = T),
      (l.mediaAutoDownloadTitle = D),
      (l.mediaUploadQualityTitle = x),
      (l.spellCheckTitle = $),
      (l.spellCheckSubtitle = P),
      (l.emojiReplacementTitle = N),
      (l.emojiReplacementSubtitle = M),
      (l.enterIsSendTitle = w),
      (l.enterIsSendSubtitle = A),
      (l.securityTitle = F),
      (l.privacyTitle = O),
      (l.privacySecondaryTitle = B),
      (l.helpTitle = W),
      (l.helpSecondaryTitle = q),
      (l.keyboardShortcutsTitle = U),
      (l.keyboardShortcutsSecondaryTitle = V),
      (l.developerTitle = H),
      (l.developerSecondaryTitle = G),
      (l.developerABPropsTitle = z),
      (l.developerGroupABPropsTitle = j),
      (l.developerInfraSettingsTitle = K),
      (l.developerWWWSettingsTitle = Q),
      (l.messageNotificationsTitle = X),
      (l.messageNotificationsSubtitle = Y),
      (l.showPreviewsTitle = J),
      (l.showPreviewsSubtitle = Z),
      (l.offlineSyncSubtitle = ee),
      (l.outgoingAudioToneSubtitle = te),
      (l.showReactionsTitle = ne),
      (l.showCallsTitle = re),
      (l.showCallsSubtitle = oe),
      (l.playCallRingtoneTitle = ae),
      (l.playCallRingtoneSubtitle = ie),
      (l.soundsTitle = le),
      (l.soundsSubtitle = se),
      (l.privacyLastSeenOnlineEnabledTitle = ue),
      (l.privacyPersonalInfoHeaderTitle = ce),
      (l.privacyProfilePhotoTitle = de),
      (l.privacyAboutTitle = me),
      (l.privacyReadReceiptsTitle = pe),
      (l.privacyLinkPreviewsTitle = _e),
      (l.antiBrigadingTitle = fe),
      (l.privacyDMTitle = ge),
      (l.privacyStatusPostingTitle = he),
      (l.privacyDDMTitle = ye),
      (l.privacyGroupsTitle = Ce),
      (l.privacyBlockedTitle = be),
      (l.privacyScreenlockTitle = ve),
      (l.themeTitle = Se),
      (l.themeLightLabel = Re),
      (l.themeDarkLabel = Le),
      (l.themeSystemLabel = Ee),
      (l.helpCenterTitle = ke),
      (l.helpCenterSubtitle = Ie),
      (l.contactUsTitle = Te),
      (l.contactUsSubtitle = De),
      (l.rateTheApp = xe),
      (l.sendFeedbackTitle = $e),
      (l.sendFeedbackSubtitle = Pe),
      (l.termsTitle = Ne),
      (l.dataSharingTitle = Me),
      (l.listsTitle = we),
      (l.agentsTitle = Ae),
      (l.agentsSecondaryTitle = Fe),
      (l.listsSecondaryTitle = Oe),
      (l.logoutTitle = Be),
      (l.accountTitle = We),
      (l.accountSecondaryTitle = qe),
      (l.profileTitle = Ue),
      (l.profileSecondaryTitle = Ve),
      (l.chatsTitle = He),
      (l.chatsSecondaryTitle = Ge),
      (l.deleteAccountTitle = ze),
      (l.antiBrigadingDescription = je),
      (l.protectIpInCallsTitle = Ke),
      (l.protectIpInCallsDescription = Qe),
      (l.wamoNonAGMMessagePreviewTitle = Xe),
      (l.wamoNonAGMMessagePreviewDescription = Ye));
  },
  226,
);
