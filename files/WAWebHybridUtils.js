__d(
  "WAWebHybridUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBuildConstants",
    "WAWebEnvironment",
    "WAWebModalManager",
    "WAWebUserPrefsUiRefresh",
    "WAWebWindowsBrokenHybrid2559Modal.react",
    "WAWebWindowsGatingUtils",
    "WAWebWindowsNuxModal.react",
    "WAWebWindowsUserPrefsRateApp",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = 1440 * 60 * 1e3;
    function p() {
      return o("WAWebWindowsGatingUtils").isWindowsHybridEnabled() &&
        !o("WAWebUserPrefsUiRefresh").getUiRefreshNuxAcked()
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hybrid] Showing Hybrid NUX",
              ])),
          ),
          !0)
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[hybrid] NUX skipped, not Hybrid env or Hybrid NUX is acked",
              ])),
          ),
          !1);
    }
    function _() {
      o("WAWebModalManager").ModalManager.open(
        d.jsx(r("WAWebWindowsNuxModal.react"), {
          onOkOrDismiss: function () {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[hybrid] Nux acknowledged by the user",
                ])),
            ),
              o("WAWebUserPrefsUiRefresh").setUiRefreshNuxAcked(!0));
          },
        }),
      );
    }
    function f() {
      return !!(
        r("WAWebEnvironment").isWindows &&
        o("WAWebBuildConstants").WINDOWS_BUILD != null &&
        o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2559")
      );
    }
    function g() {
      o("WAWebModalManager").ModalManager.open(
        d.jsx(r("WAWebWindowsBrokenHybrid2559Modal.react"), {}),
        { blockClose: !0 },
      );
    }
    function h() {
      var e;
      if (r("WAWebEnvironment").isWindows !== !0) return !1;
      var t =
          (e =
            o("WAWebWindowsUserPrefsRateApp").getLastRateAppPromptShownTime ==
            null
              ? void 0
              : o(
                  "WAWebWindowsUserPrefsRateApp",
                ).getLastRateAppPromptShownTime()) != null
            ? e
            : 0,
        n = Date.now();
      if (t === 0)
        return (
          o("WAWebWindowsUserPrefsRateApp").setLastRateAppPromptShownTime ==
            null ||
            o("WAWebWindowsUserPrefsRateApp").setLastRateAppPromptShownTime(n),
          !1
        );
      if (
        o("WAWebABProps").getABPropConfigValue("enable_rate_app_prompt") ===
          !1 ||
        o("WAWebWindowsUserPrefsRateApp").getDontShowRateAppPromptAgain ==
          null ||
        o("WAWebWindowsUserPrefsRateApp").getDontShowRateAppPromptAgain()
      )
        return !1;
      var a = n - t,
        i = a < m * 7;
      return i
        ? !1
        : (o("WAWebWindowsUserPrefsRateApp").setLastRateAppPromptShownTime ==
            null ||
            o("WAWebWindowsUserPrefsRateApp").setLastRateAppPromptShownTime(n),
          !0);
    }
    function y() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "hybrid_font_size_dropdown",
      );
      return (
        Number(o("WAWebBuildConstants").getWindowsBuild()) >= 256700 && e === !0
      );
    }
    ((l.shouldShowHybridNux = p),
      (l.showHybridNux = _),
      (l.shouldShowBrokenHybrid2559Modal = f),
      (l.showBrokenHybrid2559Modal = g),
      (l.shouldShowHybridRateTheAppPrompt = h),
      (l.isHybridFontSizeDropdownEnabled = y));
  },
  98,
);
