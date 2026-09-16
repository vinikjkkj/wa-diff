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
      return s._(/*BTDS*/ "Auto-download quality");
    }
    function P() {
      return s._(
        /*BTDS*/ "Photos will be automatically downloaded in HD quality, but videos will not.",
      );
    }
    function N() {
      return s._(/*BTDS*/ "Auto");
    }
    function M() {
      return s._(
        /*BTDS*/ "Photos and videos will be automatically downloaded in HD quality.",
      );
    }
    function w() {
      return s._(
        /*BTDS*/ "You can choose which photos or videos to download in HD quality.",
      );
    }
    function A() {
      return s._(/*BTDS*/ "HD quality");
    }
    function F() {
      return s._(/*BTDS*/ "Standard quality");
    }
    function O() {
      return s._(/*BTDS*/ "Spell check");
    }
    function B() {
      return s._(/*BTDS*/ "Check spelling while typing");
    }
    function W() {
      return s._(/*BTDS*/ "Replace text with emoji");
    }
    function q() {
      return s._(/*BTDS*/ "Emoji will replace specific text as you type");
    }
    function U() {
      return s._(/*BTDS*/ "Enter is send");
    }
    function V() {
      return s._(/*BTDS*/ "Enter key will send your message");
    }
    function H() {
      return s._(/*BTDS*/ "Security");
    }
    function G() {
      return s._(/*BTDS*/ "Privacy");
    }
    function z() {
      return s._(/*BTDS*/ "Blocked contacts, disappearing messages");
    }
    function j() {
      return s._(/*BTDS*/ "Help and feedback");
    }
    function K() {
      return s._(/*BTDS*/ "Help center, contact us, privacy policy");
    }
    function Q() {
      return s._(/*BTDS*/ "Keyboard shortcuts");
    }
    function X() {
      return s._(/*BTDS*/ "Quick actions");
    }
    function Y() {
      return s._(/*BTDS*/ "Developer");
    }
    function J() {
      return s._(/*BTDS*/ "Internal tools, feature flags, debug options");
    }
    function Z() {
      return s._(/*BTDS*/ "AB Props");
    }
    function ee() {
      return s._(/*BTDS*/ "Group AB Props");
    }
    function te() {
      return s._(/*BTDS*/ "Infra Settings");
    }
    function ne() {
      return s._(/*BTDS*/ "Canonical");
    }
    function re() {
      return s._(/*BTDS*/ "Message notifications");
    }
    function oe() {
      return s._(/*BTDS*/ "Show notifications for new messages");
    }
    function ae() {
      return s._(/*BTDS*/ "Show previews");
    }
    function ie() {
      return s._(/*BTDS*/ "Preview message text inside message notifications.");
    }
    function le() {
      return s._(
        /*BTDS*/ "Get faster performance by syncing messages in the background.",
      );
    }
    function se() {
      return s._(/*BTDS*/ "Play sounds for outgoing messages");
    }
    function ue() {
      return s._(/*BTDS*/ "Show reaction notifications");
    }
    function ce() {
      return s._(/*BTDS*/ "Call notifications");
    }
    function de() {
      return s._(/*BTDS*/ "Show notifications for incoming calls");
    }
    function me() {
      return s._(/*BTDS*/ "Incoming calls");
    }
    function pe() {
      return s._(/*BTDS*/ "Play sounds for incoming calls");
    }
    function _e() {
      return s._(/*BTDS*/ "Incoming sounds");
    }
    function fe() {
      return s._(/*BTDS*/ "Play sounds for incoming messages");
    }
    function ge() {
      return s._(/*BTDS*/ "Last seen and online");
    }
    function he() {
      return s._(/*BTDS*/ "Who can see my personal info");
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
      return s._(/*BTDS*/ "Status");
    }
    function Ee() {
      return s._(/*BTDS*/ "Default message timer");
    }
    function ke() {
      return s._(/*BTDS*/ "Groups");
    }
    function Ie() {
      return s._(/*BTDS*/ "Blocked contacts");
    }
    function Te() {
      return s._(/*BTDS*/ "App lock");
    }
    function De() {
      return s._(/*BTDS*/ "Theme");
    }
    function xe() {
      return s._(/*BTDS*/ "Light");
    }
    function $e() {
      return s._(/*BTDS*/ "Dark");
    }
    function Pe() {
      return s._(/*BTDS*/ "System default");
    }
    function Ne() {
      return s._(/*BTDS*/ "Help Center");
    }
    function Me() {
      return s._(/*BTDS*/ "Frequently asked questions");
    }
    function we() {
      return s._(/*BTDS*/ "Contact us");
    }
    function Ae() {
      return s._(/*BTDS*/ "Chat with support to get answers");
    }
    function Fe() {
      return s._(/*BTDS*/ "Rate the app");
    }
    function Oe() {
      return s._(/*BTDS*/ "Send feedback");
    }
    function Be() {
      return s._(/*BTDS*/ "Technical issues, suggestions");
    }
    function We() {
      return o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
        ? s._(/*BTDS*/ "Terms")
        : s._(/*BTDS*/ "Terms and Privacy Policy");
    }
    function qe() {
      var e = s._(/*BTDS*/ "Your customers' activity");
      return e;
    }
    function Ue() {
      return s._(/*BTDS*/ "Lists");
    }
    function Ve() {
      return s._(/*BTDS*/ "Agents");
    }
    function He() {
      return s._(/*BTDS*/ "Agents connected to this account");
    }
    function Ge() {
      return s._(/*BTDS*/ "Manage people and groups");
    }
    function ze() {
      return s._(/*BTDS*/ "Log out");
    }
    function je() {
      return s._(/*BTDS*/ "Account");
    }
    function Ke() {
      return s._(/*BTDS*/ "Security notifications, account info");
    }
    function Qe() {
      return s._(/*BTDS*/ "Profile");
    }
    function Xe() {
      return o(
        "WAWebUsernameWorkerCompatibleGatingUtils",
      ).usernameCreationOrReservationEnabled()
        ? s._(/*BTDS*/ "Name, profile picture, username")
        : s._(/*BTDS*/ "Name, profile picture");
    }
    function Ye() {
      return s._(/*BTDS*/ "Chats");
    }
    function Je() {
      return s._(/*BTDS*/ "Theme, wallpaper, chat settings");
    }
    function Ze() {
      return s._(/*BTDS*/ "How to delete my account");
    }
    function et() {
      return s._(
        /*BTDS*/ "To protect your account and improve device performance, WhatsApp will block messages from unknown accounts if they exceed a certain volume.",
      );
    }
    function tt() {
      return s._(/*BTDS*/ "Protect IP address in calls");
    }
    function nt() {
      return s._(
        /*BTDS*/ "To make it harder for people to infer your location, calls on this device will be securely relayed through WhatsApp servers. This will reduce call quality.",
      );
    }
    function rt() {
      return s._(/*BTDS*/ "Status ad");
    }
    function ot() {
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
      (l.mediaAutoDownloadQualityTitle = $),
      (l.mediaAutoDownloadQualityAutoDescription = P),
      (l.mediaAutoDownloadQualityAutoLabel = N),
      (l.mediaAutoDownloadQualityHdDescription = M),
      (l.mediaAutoDownloadQualityStandardDescription = w),
      (l.mediaAutoDownloadQualityHdLabel = A),
      (l.mediaAutoDownloadQualityStandardLabel = F),
      (l.spellCheckTitle = O),
      (l.spellCheckSubtitle = B),
      (l.emojiReplacementTitle = W),
      (l.emojiReplacementSubtitle = q),
      (l.enterIsSendTitle = U),
      (l.enterIsSendSubtitle = V),
      (l.securityTitle = H),
      (l.privacyTitle = G),
      (l.privacySecondaryTitle = z),
      (l.helpTitle = j),
      (l.helpSecondaryTitle = K),
      (l.keyboardShortcutsTitle = Q),
      (l.keyboardShortcutsSecondaryTitle = X),
      (l.developerTitle = Y),
      (l.developerSecondaryTitle = J),
      (l.developerABPropsTitle = Z),
      (l.developerGroupABPropsTitle = ee),
      (l.developerInfraSettingsTitle = te),
      (l.developerWWWSettingsTitle = ne),
      (l.messageNotificationsTitle = re),
      (l.messageNotificationsSubtitle = oe),
      (l.showPreviewsTitle = ae),
      (l.showPreviewsSubtitle = ie),
      (l.offlineSyncSubtitle = le),
      (l.outgoingAudioToneSubtitle = se),
      (l.showReactionsTitle = ue),
      (l.showCallsTitle = ce),
      (l.showCallsSubtitle = de),
      (l.playCallRingtoneTitle = me),
      (l.playCallRingtoneSubtitle = pe),
      (l.soundsTitle = _e),
      (l.soundsSubtitle = fe),
      (l.privacyLastSeenOnlineEnabledTitle = ge),
      (l.privacyPersonalInfoHeaderTitle = he),
      (l.privacyProfilePhotoTitle = ye),
      (l.privacyAboutTitle = Ce),
      (l.privacyReadReceiptsTitle = be),
      (l.privacyLinkPreviewsTitle = ve),
      (l.antiBrigadingTitle = Se),
      (l.privacyDMTitle = Re),
      (l.privacyStatusPostingTitle = Le),
      (l.privacyDDMTitle = Ee),
      (l.privacyGroupsTitle = ke),
      (l.privacyBlockedTitle = Ie),
      (l.privacyScreenlockTitle = Te),
      (l.themeTitle = De),
      (l.themeLightLabel = xe),
      (l.themeDarkLabel = $e),
      (l.themeSystemLabel = Pe),
      (l.helpCenterTitle = Ne),
      (l.helpCenterSubtitle = Me),
      (l.contactUsTitle = we),
      (l.contactUsSubtitle = Ae),
      (l.rateTheApp = Fe),
      (l.sendFeedbackTitle = Oe),
      (l.sendFeedbackSubtitle = Be),
      (l.termsTitle = We),
      (l.dataSharingTitle = qe),
      (l.listsTitle = Ue),
      (l.agentsTitle = Ve),
      (l.agentsSecondaryTitle = He),
      (l.listsSecondaryTitle = Ge),
      (l.logoutTitle = ze),
      (l.accountTitle = je),
      (l.accountSecondaryTitle = Ke),
      (l.profileTitle = Qe),
      (l.profileSecondaryTitle = Xe),
      (l.chatsTitle = Ye),
      (l.chatsSecondaryTitle = Je),
      (l.deleteAccountTitle = Ze),
      (l.antiBrigadingDescription = et),
      (l.protectIpInCallsTitle = tt),
      (l.protectIpInCallsDescription = nt),
      (l.wamoNonAGMMessagePreviewTitle = rt),
      (l.wamoNonAGMMessagePreviewDescription = ot));
  },
  226,
);
