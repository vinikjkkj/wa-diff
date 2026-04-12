__d(
  "WAWebSettingsStepIcon.react",
  [
    "WAWebBugnubRefreshedIcon.react",
    "WAWebChatRefreshedIcon.react",
    "WAWebDevIcon.react",
    "WAWebIcComputerIcon.react",
    "WAWebIcDownloadIcon.react",
    "WAWebIcSyncIcon.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebListPeopleIcon.react",
    "WAWebMessageReportRefreshedIcon.react",
    "WAWebSettingsConst",
    "WAWebStorefrontIcon.react",
    "WAWebTransferRefreshedIcon.react",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcBrightnessMedium.react",
    "WDSIconIcDescription.react",
    "WDSIconIcHelp.react",
    "WDSIconIcKey.react",
    "WDSIconIcKeyboard.react",
    "WDSIconIcLock.react",
    "WDSIconIcLogout.react",
    "WDSIconIcNotifications.react",
    "WDSIconIcSecurity.react",
    "WDSIconIcVideocam.react",
    "WDSIconIcWallpaper.react",
    "WDSIconIcWarning.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.setting,
        n = c;
      return s.jsx("div", {
        className: "xhslqc4",
        children: s.jsx(n, { setting: t }),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    function c(e) {
      var t = e.setting;
      switch (t) {
        case o("WAWebSettingsConst").SettingsSteps.BusinessTools:
          return s.jsx(o("WAWebStorefrontIcon.react").StorefrontIcon, {});
        case o("WAWebSettingsConst").SettingsSteps.DataSharing:
          return s.jsx(
            o("WAWebTransferRefreshedIcon.react").TransferRefreshedIcon,
            {},
          );
        case o("WAWebSettingsConst").SettingsSteps.Notifications:
          return s.jsx(r("WDSIconIcNotifications.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.PrivacySettings:
          return s.jsx(r("WDSIconIcLock.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.Security:
          return s.jsx(r("WDSIconIcSecurity.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.Wallpaper:
          return s.jsx(r("WDSIconIcWallpaper.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.MediaAutoDownload:
          return s.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {});
        case o("WAWebSettingsConst").SettingsSteps.RequestAccountInfoSettings:
          return s.jsx(r("WDSIconIcDescription.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.Help:
          return s.jsx(r("WDSIconIcHelp.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.Bugnub:
          return s.jsx(
            o("WAWebBugnubRefreshedIcon.react").BugnubRefreshedIcon,
            {},
          );
        case o("WAWebSettingsConst").SettingsSteps.DownloadLogs:
          return s.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {});
        case o("WAWebSettingsConst").SettingsSteps.Developer:
        case o("WAWebSettingsConst").SettingsSteps.DeveloperABProps:
          return s.jsx(o("WAWebDevIcon.react").DevIcon, {});
        case o("WAWebSettingsConst").SettingsSteps.KeyboardShortcuts:
          return s.jsx(r("WDSIconIcKeyboard.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.Theme:
          return s.jsx(r("WDSIconIcBrightnessMedium.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.Logout:
          return s.jsx(r("WDSIconIcLogout.react"), {
            colorName: "secondaryNegative",
          });
        case o("WAWebSettingsConst").SettingsSteps.NewsletterReports:
          return s.jsx(
            o("WAWebMessageReportRefreshedIcon.react")
              .MessageReportRefreshedIcon,
            {},
          );
        case o("WAWebSettingsConst").SettingsSteps.Account:
          return s.jsx(r("WDSIconIcKey.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.Profile:
          return s.jsx(r("WDSIconIcAccountCircle.react"), {});
        case o("WAWebSettingsConst").SettingsSteps.Chats:
          return s.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {});
        case o("WAWebSettingsConst").SettingsSteps.DeleteAccount:
          return s.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {});
        case o("WAWebSettingsConst").SettingsSteps.Lists:
          return s.jsx(o("WAWebListPeopleIcon.react").ListPeopleIcon, {});
        case o("WAWebSettingsConst").SettingsSteps.WinGeneralSettings:
          return s.jsx(o("WAWebIcComputerIcon.react").IcComputerIcon, {
            height: 24,
            width: 24,
          });
        case o("WAWebSettingsConst").SettingsSteps.WinDevicesSettings:
          return s.jsx(r("WDSIconIcVideocam.react"), { height: 24, width: 24 });
        case o("WAWebSettingsConst").SettingsSteps.HistorySyncPaused:
          return s.jsx(r("WDSIconIcWarning.react"), {
            colorName: "secondaryWarning",
          });
        case o("WAWebSettingsConst").SettingsSteps.HistorySyncInProgress:
          return s.jsx(o("WAWebIcSyncIcon.react").IcSyncIcon, {});
        default:
          return null;
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
