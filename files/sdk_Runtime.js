__d(
  "sdk.Runtime",
  ["JSSDKRuntimeConfig", "sdk.Model"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4 },
      u = new (r("sdk.Model"))({
        AccessToken: "",
        AutoLogAppEvents: !1,
        ClientID: "",
        CookieUserID: "",
        EnforceHttps: !1,
        Environment: s.UNKNOWN,
        FamilyLoginLoaded: !1,
        FedCMContext: "signin",
        FedCMExplicitlySet: !1,
        FedCMMode: "active",
        GraphDomain: "",
        Initialized: !1,
        IsVersioned: !1,
        KidDirectedSite: void 0,
        Lib: "",
        Locale: (e = o("JSSDKRuntimeConfig")).locale,
        LoggedIntoFacebook: void 0,
        LoginStatus: void 0,
        Revision: e.revision,
        Rtl: e.rtl,
        Scope: void 0,
        SDKAB: e.sdkab,
        SDKUrl: e.sdkurl,
        SDKNS: e.sdkns,
        ShouldLoadFamilyLogin: !1,
        UseCookie: !1,
        UseFedCM: !1,
        UseLocalStorage: !0,
        UserID: "",
        Version: void 0,
      });
    (Object.assign(u, {
      ENVIRONMENTS: s,
      isEnvironment: function (t) {
        var e = u.getEnvironment();
        return (t | e) === e;
      },
      isCanvasEnvironment: function () {
        return u.isEnvironment(s.CANVAS) || u.isEnvironment(s.PAGETAB);
      },
    }),
      (function () {
        var e = String(window.name),
          t = /app_runner/.test(e)
            ? s.PAGETAB
            : /iframe_canvas/.test(e)
              ? s.CANVAS
              : s.UNKNOWN;
        ((t | s.PAGETAB) === t && (t |= s.CANVAS), u.setEnvironment(t));
      })());
    var c = u;
    l.default = c;
  },
  98,
);
