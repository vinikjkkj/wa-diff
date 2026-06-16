__d(
  "WAWebGuestCoreDownloadCTAClickAction",
  [
    "WABase64",
    "WAWebGuestCoreCommonUtils",
    "WAWebGuestCoreConsts",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
            return !e || !e.recoveryToken
              ? ""
              : o("WABase64").encodeB64UrlSafe(e.recoveryToken);
          } catch (e) {
            return "";
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r) {
      return e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP ||
        e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER
        ? "https://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8&pt=217218&ct=invite_g"
        : e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER
          ? n
            ? "https://www.whatsapp.com/dl/?mode=gr&sc=" +
              t +
              (r !== "" ? "&bct=" + r : "")
            : "https://www.whatsapp.com/dl/code=" +
              t +
              "?mode=gr" +
              (r !== "" ? "&bct=" + r : "")
          : e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN
            ? "https://www.whatsapp.com/download"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function c(e, t) {
      d(e, t);
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a = new URLSearchParams(window.location.search),
            i =
              (r =
                n != null
                  ? n
                  : o("WAWebGuestCoreCommonUtils").getInviteCodeFromUrlParams(
                      a,
                    )) != null
                ? r
                : "",
            l = a.get("sc"),
            s = yield e(),
            c = u(t, i, l != null, s);
          window.location.assign(c);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getGuestDownloadUrl = u), (l.downloadCTAClickAction = c));
  },
  98,
);
