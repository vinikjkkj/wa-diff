__d(
  "ZenonActorHooks",
  [
    "CurrentUser",
    "FBLogger",
    "ZenonApp",
    "ZenonAppProvider",
    "ZenonDGWUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = null,
      c = !1,
      d = !1,
      m = new Set();
    function p(e, t) {
      (t === void 0 && (t = "Fallback to CurrentUser"),
        m.has(e) ||
          (r("FBLogger")("rtc_www")
            .blameToPreviousFrame()
            .info("ZenonActor.%s - %s", e, t),
          m.add(e)));
    }
    function _() {
      return [
        g.getID(),
        function (t) {
          (p(
            "useZenonActor:setter",
            "This setter should not be used as Zenon should currently doesn't allow switching Actor",
          ),
            (e = t));
        },
      ];
    }
    function f(t, n, r) {
      if ((n === void 0 && (n = !1), r === void 0 && (r = !1), e !== null)) {
        if (d) return;
        p(
          "initZenonActor",
          "ZenonActor is being reinitalized. This may indicate unneccessary ZenonActorProvider's to RelayEnvironmentProvider's in the component tree.",
        );
      }
      ((d = d || n),
        (c = c || r),
        typeof t == "string" || typeof t == "number"
          ? ((e = t.toString()), (s = null), (u = null))
          : (t == null ? void 0 : t.actorID) != null &&
            ((e = t.actorID.toString()), (s = t.name), (u = t.shortName)));
    }
    var g = {
      getAccountID: function () {
        return g.isInstagramUser()
          ? r("CurrentUser").getEIMU()
          : g.isOculusCastingUser()
            ? r("CurrentUser").getEOCPU()
            : g.isMDCUser()
              ? g.getMDCUserID()
              : r("CurrentUser").getAccountID();
      },
      getAppID: function () {
        return g.isLiveChatOnlyPerson()
          ? String(0x70127cc7da0a0)
          : r("CurrentUser").getAppID();
      },
      getID: function () {
        return g.isInstagramUser()
          ? r("CurrentUser").getEIMU()
          : g.isOculusCastingUser()
            ? r("CurrentUser").getEOCPU()
            : g.isMDCUser()
              ? g.getMDCUserID()
              : g.isHorizonWebUser()
                ? r("CurrentUser").getEPOU()
                : g.isKadabraUser()
                  ? o("ZenonDGWUtils").shouldUseDGW()
                    ? r("CurrentUser").getAbraID()
                    : r("CurrentUser").getARID()
                  : e === null
                    ? (p("getID"), r("CurrentUser").getID())
                    : e;
      },
      getMDCUserID: function () {
        return r("CurrentUser").getEOCPU() === "0"
          ? r("CurrentUser").getPossiblyNonFacebookUserID()
          : r("CurrentUser").getEOCPU();
      },
      getName: function () {
        return s != null ? s : r("CurrentUser").getName();
      },
      getShortName: function () {
        return u != null ? u : r("CurrentUser").getShortName();
      },
      isBizWebUser: function () {
        var e = r("CurrentUser").getAppID();
        return e === String(436761779744620) || e === String(514771569228061);
      },
      isEmployee: function () {
        return r("CurrentUser").isEmployee();
      },
      isHorizonWebUser: function () {
        return (
          r("CurrentUser").getEPOU() !== "0" &&
          o("ZenonAppProvider").isHorizonApp()
        );
      },
      isInstagramUser: function () {
        return (
          r("CurrentUser").getEIMU() !== "0" &&
          o("ZenonAppProvider").isInstagramApp()
        );
      },
      isKadabraUser: function () {
        return (
          r("gkx")("11152") &&
          r("CurrentUser").getAppID() === String(0x4d31ba8e7e89d)
        );
      },
      isLiveChatOnlyPerson: function () {
        return o("ZenonApp").isSocialPlugin;
      },
      isLoggedIn: function () {
        return r("CurrentUser").isLoggedIn();
      },
      isLoggedInNow: function () {
        return r("CurrentUser").isLoggedInNow();
      },
      isLoggedOutOculusStreamViewer: function () {
        return (
          r("CurrentUser").getID() === "0" &&
          o("ZenonAppProvider").isOculusCastingSite()
        );
      },
      isMAISAVoice: function () {
        return o("ZenonApp").isMAISAVoice;
      },
      isManagedMetaAccount: function () {
        return r("CurrentUser").isManagedMetaAccount();
      },
      isMDCUser: function () {
        return (
          r("CurrentUser").getPossiblyNonFacebookUserID() !== "0" &&
          o("ZenonAppProvider").isMDCApp()
        );
      },
      isMessengerCallGuestUser: function () {
        return r("CurrentUser").isMessengerCallGuestUser();
      },
      isOculusCastingUser: function () {
        return (
          r("CurrentUser").getEOCPU() !== "0" &&
          o("ZenonAppProvider").isOculusApp()
        );
      },
      isOculusUser: function () {
        return (
          r("CurrentUser").getEPOU() !== "0" &&
          o("ZenonAppProvider").isOculusApp()
        );
      },
      isPage: function () {
        return c;
      },
      isTestUser: function () {
        return r("CurrentUser").isTestUser();
      },
      isWorkishUser: function () {
        return r("CurrentUser").isWorkUser();
      },
      isWorkUser: function () {
        return r("CurrentUser").isWorkUser();
      },
    };
    ((l.useZenonActor = _), (l.initZenonActor = f), (l.ZenonActor = g));
  },
  98,
);
