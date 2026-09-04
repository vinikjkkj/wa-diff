__d(
  "WAWebGuestCoreDownloadCTAClickAction",
  [
    "WABase64",
    "WAWebGuestCoreCommonUtils",
    "WAWebGuestCoreConsts",
    "WAWebGuestCoreRoutes",
    "WAWebUserPrefsInfoStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e =
        "https://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8&pt=217218",
      s = "https://www.whatsapp.com/download",
      u = "invite_g",
      c = "event_invite_link";
    function d() {
      var e = window.location.pathname;
      return (
        e.startsWith(o("WAWebGuestCoreRoutes").GUEST_EVENTS_PATH) ||
        e + "/" === o("WAWebGuestCoreRoutes").GUEST_EVENTS_PATH
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
            return !e || !e.recoveryToken
              ? ""
              : o("WABase64").encodeB64UrlSafe(e.recoveryToken);
          } catch (e) {
            return "";
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      return e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP ||
        e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER
        ? C(u)
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
            ? s
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function f(e, t, n, r) {
      return e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_APPCLIP ||
        e === o("WAWebGuestCoreConsts").GuestMobilePlatform.IOS_BROWSER
        ? C(c)
        : e === o("WAWebGuestCoreConsts").GuestMobilePlatform.ANDROID_BROWSER
          ? b(t, n, r)
          : e === o("WAWebGuestCoreConsts").GuestMobilePlatform.UNKNOWN
            ? s
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function g(e, t) {
      h(e, t);
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i = new URLSearchParams(window.location.search),
            l = yield m(),
            s =
              (n =
                t != null
                  ? t
                  : o("WAWebGuestCoreCommonUtils").getInviteCodeFromUrlParams(
                      i,
                    )) != null
                ? n
                : "",
            u = i.get("sc"),
            c = (r = i.get("token")) != null ? r : "",
            p =
              d() && c !== ""
                ? f(e, c, (a = i.get("ic")) != null ? a : "", l)
                : _(e, s, u != null, l);
          window.location.assign(p);
        })),
        y.apply(this, arguments)
      );
    }
    function C(t) {
      return e + "&ct=" + t;
    }
    function b(e, t, n) {
      var r = new URLSearchParams();
      return (
        r.set("mode", "gr"),
        r.set("event_code", e),
        t !== "" && r.set("ic", t),
        n !== "" && r.set("bct", n),
        "https://www.whatsapp.com/dl/?" + r.toString()
      );
    }
    ((l.isGuestEventsSurface = d),
      (l.getGuestDownloadUrl = _),
      (l.getGuestEventsDownloadUrl = f),
      (l.downloadCTAClickAction = g));
  },
  98,
);
