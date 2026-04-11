__d(
  "WAWebSettings",
  [
    "fbt",
    "$InternalEnum",
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebCurrentUser",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum").Mirrored([
      "Settings",
      "BusinessTools",
      "Wallpaper",
      "RequestAccountInfoSettings",
      "Blocked",
      "Profile",
      "Notifications",
      "TwoFactorUpdateEmail",
      "TwoFactorUpdatePin",
      "TwoFactorRegistration",
      "TwoFactorDisable",
      "MediaAutoDownload",
      "MediaQuality",
      "Security",
      "PrivacyVisiblityEdit",
      "PrivacySettings",
      "DefaultEphemerality",
      "UserEphemerality",
      "DesktopSettings",
      "Help",
      "Bugnub",
      "DownloadLogs",
      "Developer",
      "DeveloperABProps",
      "ScreenLock",
      "DataSharing",
      "DeleteAccount",
    ]);
    function u(t) {
      switch (t) {
        case e.BusinessTools:
          return o("WAWebBizGatingUtils").isBizToolsDrawerEnabled();
        case e.DataSharing:
          return o("WAWebBizGatingUtils").smbDataSharingConsentEnabled() === !0;
        case e.PrivacySettings:
          return !0;
        case e.Security:
          return !0;
        case e.Wallpaper:
          return !0;
        case e.MediaAutoDownload:
          return !0;
        case e.RequestAccountInfoSettings:
          return !0;
        case e.DesktopSettings:
          return !1;
        case e.Help:
          return !0;
        case e.DeleteAccount:
          return !0;
        case e.Bugnub:
          return o("WAWebCurrentUser").isEmployee();
        case e.DownloadLogs:
          return (
            o("WAWebCurrentUser").isEmployee() ||
            o("WAWebABProps").getABPropConfigValue("enable_web_log_download")
          );
        case e.Developer:
        case e.DeveloperABProps:
          return !r("gkx")("26258");
        case e.Notifications:
          return !0;
        default:
          return !1;
      }
    }
    function c(t) {
      switch (t) {
        case e.DataSharing: {
          var n = s._(/*BTDS*/ "Your customers' activity");
          return n;
        }
        case e.BusinessTools:
          return s._(/*BTDS*/ "Business tools");
        case e.Wallpaper:
          return s._(/*BTDS*/ "Chat wallpaper");
        case e.RequestAccountInfoSettings:
          return s._(/*BTDS*/ "Request Account Info");
        case e.Notifications:
          return s._(/*BTDS*/ "Notifications");
        case e.MediaAutoDownload:
          return s._(/*BTDS*/ "Media auto-download");
        case e.MediaQuality:
          return s._(/*BTDS*/ "Media upload quality");
        case e.Security:
          return s._(/*BTDS*/ "Security");
        case e.PrivacySettings:
          return s._(/*BTDS*/ "Privacy");
        case e.DesktopSettings:
          return s._(/*BTDS*/ "Desktop settings");
        case e.Help:
          return s._(/*BTDS*/ "Help");
        case e.Bugnub:
          return "Report a bug (internal)";
        case e.DownloadLogs:
          return "Download logs";
        case e.Developer:
          return "Developer";
        case e.DeveloperABProps:
          return "AB Props";
        case e.DeleteAccount:
          return "Delete Account";
        default:
          throw r("err")("Unsupported setting.");
      }
    }
    ((l.SettingsSteps = e), (l.isSettingAvailable = u), (l.getLabel = c));
  },
  226,
);
