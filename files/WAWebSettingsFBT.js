__d(
  "WAWebSettingsFBT",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizAiStrings",
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
      return o("WAWebBizAiStrings").getBizAiHubTitle();
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
      return s._(/*BTDS*/ "Lists");
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
      return s._(/*BTDS*/ "Language");
    }
    function T() {
      return s._(/*BTDS*/ "Media auto-download");
    }
    function D() {
      return s._(/*BTDS*/ "Media upload quality");
    }
    function x() {
      return s._(/*BTDS*/ "Auto-download quality");
    }
    function $() {
      return s._(
        /*BTDS*/ "Photos will be automatically downloaded in HD quality, but videos will not.",
      );
    }
    function P() {
      return s._(/*BTDS*/ "Auto");
    }
    function N() {
      return s._(
        /*BTDS*/ "Photos and videos will be automatically downloaded in HD quality.",
      );
    }
    function M() {
      return s._(
        /*BTDS*/ "Photos will be automatically downloaded in HD quality.",
      );
    }
    function w() {
      return s._(
        /*BTDS*/ "You can choose which photos or videos to download in HD quality.",
      );
    }
    function A() {
      return s._(
        /*BTDS*/ "You can choose which photos to download in HD quality.",
      );
    }
    function F() {
      return s._(/*BTDS*/ "HD quality");
    }
    function O() {
      return s._(/*BTDS*/ "Standard quality");
    }
    function B() {
      return s._(/*BTDS*/ "Spell check");
    }
    function W() {
      return s._(/*BTDS*/ "Check spelling while typing");
    }
    function q() {
      return s._(/*BTDS*/ "Replace text with emoji");
    }
    function U() {
      return s._(/*BTDS*/ "Emoji will replace specific text as you type");
    }
    function V() {
      return s._(/*BTDS*/ "Enter is send");
    }
    function H() {
      return s._(/*BTDS*/ "Enter key will send your message");
    }
    function G() {
      return s._(/*BTDS*/ "Security");
    }
    function z() {
      return s._(/*BTDS*/ "Privacy");
    }
    function j() {
      return s._(/*BTDS*/ "Blocked contacts, disappearing messages");
    }
    function K() {
      return s._(/*BTDS*/ "Help and feedback");
    }
    function Q() {
      return s._(/*BTDS*/ "Help center, contact us, privacy policy");
    }
    function X() {
      return s._(/*BTDS*/ "Keyboard shortcuts");
    }
    function Y() {
      return s._(/*BTDS*/ "Quick actions");
    }
    function J() {
      return s._(/*BTDS*/ "Developer");
    }
    function Z() {
      return s._(/*BTDS*/ "Internal tools, feature flags, debug options");
    }
    function ee() {
      return s._(/*BTDS*/ "AB Props");
    }
    function te() {
      return s._(/*BTDS*/ "Group AB Props");
    }
    function ne() {
      return s._(/*BTDS*/ "Infra Settings");
    }
    function re() {
      return s._(/*BTDS*/ "Canonical");
    }
    function oe() {
      return s._(/*BTDS*/ "Labyrinth debug");
    }
    function ae() {
      return s._(/*BTDS*/ "Message notifications");
    }
    function ie() {
      return s._(/*BTDS*/ "Show notifications for new messages");
    }
    function le() {
      return s._(/*BTDS*/ "Show previews");
    }
    function se() {
      return s._(
        /*BTDS*/ "Get faster performance by syncing messages in the background.",
      );
    }
    function ue() {
      return s._(/*BTDS*/ "Play sounds for outgoing messages");
    }
    function ce() {
      return s._(/*BTDS*/ "Show reaction notifications");
    }
    function de() {
      return s._(/*BTDS*/ "Call notifications");
    }
    function me() {
      return s._(/*BTDS*/ "Show notifications for incoming calls");
    }
    function pe() {
      return s._(/*BTDS*/ "Incoming calls");
    }
    function _e() {
      return s._(/*BTDS*/ "Play sounds for incoming calls");
    }
    function fe() {
      return s._(/*BTDS*/ "Incoming sounds");
    }
    function ge() {
      return s._(/*BTDS*/ "Play sounds for incoming messages");
    }
    function he() {
      return s._(/*BTDS*/ "Last seen and online");
    }
    function ye() {
      return s._(/*BTDS*/ "Profile picture");
    }
    function Ce() {
      return s._(/*BTDS*/ "About");
    }
    function be() {
      return s._(/*BTDS*/ "Read receipts");
    }
    function ve() {
      return s._(/*BTDS*/ "Turn off link previews");
    }
    function Se() {
      return s._(/*BTDS*/ "Block unknown account messages");
    }
    function Re() {
      return s._(/*BTDS*/ "Disappearing messages");
    }
    function Le() {
      return s._(/*BTDS*/ "Default message timer");
    }
    function Ee() {
      return s._(/*BTDS*/ "Groups");
    }
    function ke() {
      return s._(/*BTDS*/ "Blocked contacts");
    }
    function Ie() {
      return s._(/*BTDS*/ "App lock");
    }
    function Te() {
      return s._(/*BTDS*/ "Theme");
    }
    function De() {
      return s._(/*BTDS*/ "Light");
    }
    function xe() {
      return s._(/*BTDS*/ "Dark");
    }
    function $e() {
      return s._(/*BTDS*/ "System default");
    }
    function Pe() {
      return s._(/*BTDS*/ "Help Center");
    }
    function Ne() {
      return s._(/*BTDS*/ "Frequently asked questions");
    }
    function Me() {
      return s._(/*BTDS*/ "Contact us");
    }
    function we() {
      return s._(/*BTDS*/ "Chat with support to get answers");
    }
    function Ae() {
      return s._(/*BTDS*/ "Rate the app");
    }
    function Fe() {
      return s._(/*BTDS*/ "Send feedback");
    }
    function Oe() {
      return o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
        ? s._(/*BTDS*/ "Terms")
        : s._(/*BTDS*/ "Terms and Privacy Policy");
    }
    function Be() {
      var e = s._(/*BTDS*/ "Your customers' activity");
      return e;
    }
    function We() {
      return s._(/*BTDS*/ "Lists");
    }
    function qe() {
      return s._(/*BTDS*/ "Agents");
    }
    function Ue() {
      return s._(/*BTDS*/ "Agents connected to this account");
    }
    function Ve() {
      return s._(/*BTDS*/ "Manage people and groups");
    }
    function He() {
      return s._(/*BTDS*/ "Log out");
    }
    function Ge() {
      return s._(/*BTDS*/ "Account");
    }
    function ze() {
      return s._(/*BTDS*/ "Security notifications, account info");
    }
    function je() {
      return s._(/*BTDS*/ "Profile");
    }
    function Ke() {
      return o(
        "WAWebUsernameWorkerCompatibleGatingUtils",
      ).usernameCreationOrReservationEnabled()
        ? s._(/*BTDS*/ "Name, profile picture, username")
        : s._(/*BTDS*/ "Name, profile picture");
    }
    function Qe() {
      return s._(/*BTDS*/ "Chats");
    }
    function Xe() {
      return s._(/*BTDS*/ "Theme, wallpaper, chat settings");
    }
    function Ye() {
      return s._(/*BTDS*/ "How to delete my account");
    }
    function Je() {
      return s._(
        /*BTDS*/ "To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.",
      );
    }
    function Ze() {
      return s._(/*BTDS*/ "Protect IP address in calls");
    }
    function et() {
      return s._(
        /*BTDS*/ "To make it harder for people to infer your location, calls on this device will be securely relayed through WhatsApp servers. This will reduce call quality.",
      );
    }
    function tt() {
      return s._(/*BTDS*/ "Status ad");
    }
    function nt() {
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
      (l.businessToolsListsTitle = R),
      (l.businessToolsHelpCenterTitle = L),
      (l.notificationsTitle = E),
      (l.notificationsSecondaryTitle = k),
      (l.languageTitle = I),
      (l.mediaAutoDownloadTitle = T),
      (l.mediaUploadQualityTitle = D),
      (l.mediaAutoDownloadQualityTitle = x),
      (l.mediaAutoDownloadQualityAutoDescription = $),
      (l.mediaAutoDownloadQualityAutoLabel = P),
      (l.mediaAutoDownloadQualityHdDescription = N),
      (l.mediaAutoDownloadQualityHdPhotosOnlyDescription = M),
      (l.mediaAutoDownloadQualityStandardDescription = w),
      (l.mediaAutoDownloadQualityStandardPhotosOnlyDescription = A),
      (l.mediaAutoDownloadQualityHdLabel = F),
      (l.mediaAutoDownloadQualityStandardLabel = O),
      (l.spellCheckTitle = B),
      (l.spellCheckSubtitle = W),
      (l.emojiReplacementTitle = q),
      (l.emojiReplacementSubtitle = U),
      (l.enterIsSendTitle = V),
      (l.enterIsSendSubtitle = H),
      (l.securityTitle = G),
      (l.privacyTitle = z),
      (l.privacySecondaryTitle = j),
      (l.helpTitle = K),
      (l.helpSecondaryTitle = Q),
      (l.keyboardShortcutsTitle = X),
      (l.keyboardShortcutsSecondaryTitle = Y),
      (l.developerTitle = J),
      (l.developerSecondaryTitle = Z),
      (l.developerABPropsTitle = ee),
      (l.developerGroupABPropsTitle = te),
      (l.developerInfraSettingsTitle = ne),
      (l.developerWWWSettingsTitle = re),
      (l.developerLabyrinthDebugTitle = oe),
      (l.messageNotificationsTitle = ae),
      (l.messageNotificationsSubtitle = ie),
      (l.showPreviewsTitle = le),
      (l.offlineSyncSubtitle = se),
      (l.outgoingAudioToneSubtitle = ue),
      (l.showReactionsTitle = ce),
      (l.showCallsTitle = de),
      (l.showCallsSubtitle = me),
      (l.playCallRingtoneTitle = pe),
      (l.playCallRingtoneSubtitle = _e),
      (l.soundsTitle = fe),
      (l.soundsSubtitle = ge),
      (l.privacyLastSeenOnlineEnabledTitle = he),
      (l.privacyProfilePhotoTitle = ye),
      (l.privacyAboutTitle = Ce),
      (l.privacyReadReceiptsTitle = be),
      (l.privacyLinkPreviewsTitle = ve),
      (l.antiBrigadingTitle = Se),
      (l.privacyDMTitle = Re),
      (l.privacyDDMTitle = Le),
      (l.privacyGroupsTitle = Ee),
      (l.privacyBlockedTitle = ke),
      (l.privacyScreenlockTitle = Ie),
      (l.themeTitle = Te),
      (l.themeLightLabel = De),
      (l.themeDarkLabel = xe),
      (l.themeSystemLabel = $e),
      (l.helpCenterTitle = Pe),
      (l.helpCenterSubtitle = Ne),
      (l.contactUsTitle = Me),
      (l.contactUsSubtitle = we),
      (l.rateTheApp = Ae),
      (l.sendFeedbackTitle = Fe),
      (l.termsTitle = Oe),
      (l.dataSharingTitle = Be),
      (l.listsTitle = We),
      (l.agentsTitle = qe),
      (l.agentsSecondaryTitle = Ue),
      (l.listsSecondaryTitle = Ve),
      (l.logoutTitle = He),
      (l.accountTitle = Ge),
      (l.accountSecondaryTitle = ze),
      (l.profileTitle = je),
      (l.profileSecondaryTitle = Ke),
      (l.chatsTitle = Qe),
      (l.chatsSecondaryTitle = Xe),
      (l.deleteAccountTitle = Ye),
      (l.antiBrigadingDescription = Je),
      (l.protectIpInCallsTitle = Ze),
      (l.protectIpInCallsDescription = et),
      (l.wamoNonAGMMessagePreviewTitle = tt),
      (l.wamoNonAGMMessagePreviewDescription = nt));
  },
  226,
);
