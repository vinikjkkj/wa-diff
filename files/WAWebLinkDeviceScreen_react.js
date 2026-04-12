__d(
  "WAWebLinkDeviceScreen.react",
  [
    "Promise",
    "WAWebAutoLogoutGating",
    "WAWebDesktopUpsellQRCodeSlimBanner.react",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebLandingFooter.react",
    "WAWebLandingHeader.react",
    "WAWebLinkDeviceAppleTouchScreen.react",
    "WAWebLinkDeviceMethod.react",
    "WAWebLinkDeviceScreenGatedUtils",
    "WAWebODS",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "asyncToGeneratorRuntime",
    "qex",
    "react",
    "requireDeferred",
    "useWAWebDesktopUpsellQRCodeBannerType",
    "useWAWebLinkDeviceAutoLogout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useState,
      f = r("requireDeferred")("WAWebLinkDeviceExperience").__setRef(
        "WAWebLinkDeviceScreen.react",
      ),
      g = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef(
        "WAWebLinkDeviceScreen.react",
      ),
      h = r("requireDeferred")("WAWebPageLoadLogging").__setRef(
        "WAWebLinkDeviceScreen.react",
      ),
      y = r("requireDeferred")("useWAWebDesktopUpsellQplImpression").__setRef(
        "WAWebLinkDeviceScreen.react",
      ),
      C = {
        wrapper: {
          height: "x1dr59a3",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          paddingTop: "xyinxu5",
          paddingInlineEnd: "xp48ta0",
          paddingBottom: "x1g2khh7",
          paddingInlineStart: "xtssl2i",
          minWidth: "xp9ttsr",
          alignItems: "x6s0dn4",
          boxSizing: "x9f619",
          fontFamily: "xdounpk",
          color: "x1hql6x6",
          $$css: !0,
        },
        headerFooterContainer: {
          width: "xh8yej3",
          height: "xwzfr38",
          $$css: !0,
        },
        wrapperWeb: { background: "xe4h88v", $$css: !0 },
        wrapperWindows: { background: "xp8kixx", $$css: !0 },
        upsellBannerContainer: {
          display: "x1lliihq",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function b(t) {
      (m(function () {
        var e = r("qex")._("5285");
        e === "control"
          ? r("WAWebODS").incr(
              "web.client.wa_logged_out_qe_universe_group_control",
            )
          : e === "test" &&
            r("WAWebODS").incr(
              "web.client.wa_logged_out_qe_universe_group_test",
            );
      }, []),
        m(
          function () {
            (e || (e = n("Promise")))
              .all([h.load(), f.load()])
              .then(function (e) {
                var n = e[0].endPageLoadQpl,
                  o = e[1].getWebCompanionLinkDeviceExperienceId;
                n(!0, o(t.apiCmd), r("WAWebL10N").getLocale());
              });
          },
          void 0,
        ));
      var a = r("useWAWebLinkDeviceAutoLogout")(),
        i = a.autoLogoutEnabled,
        l = a.autoLogoutIframe,
        s = a.autoLogoutIframeLoaded,
        c = a.handleAutoLogoutToggle,
        b = o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() || i,
        S = !o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe() && s,
        R = _(t.apiCmd),
        L = R[0],
        E = R[1],
        k = _(!0),
        I = k[0],
        T = k[1];
      m(
        function () {
          E(t.apiCmd);
        },
        [t.apiCmd],
      );
      var D = o(
          "useWAWebDesktopUpsellQRCodeBannerType",
        ).useWAWebDesktopUpsellQRCodeBannerType(L),
        x = p(
          function () {
            return {
              onAutoLogoutToggle: c,
              autoLogoutEnabled: b,
              apiCmd: L,
              setApiCmd: E,
            };
          },
          [L, c, b],
        ),
        $ = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o(
              "WAWebLinkDeviceScreenGatedUtils",
            ).getOptimizedRegFromWebVariant() === "test"
              ? E({ resultType: "WEB_REGISTRATION", data: { url: "/" } })
              : window.open(
                  "https://faq.whatsapp.com/497209988909970",
                  "_blank",
                );
            var e = yield g.load(),
              t = e.WAWebLinkDeviceQplHelpLinkEvent,
              n = e.WebcPairingScreenLinkType;
            yield t(n.GET_STARTED, L);
          }),
          [],
        );
      if (S)
        return u.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          className: {
            0: "x1dr59a3 xw2csxc x1odjw0f xyinxu5 xp48ta0 x1g2khh7 xtssl2i xp9ttsr x6s0dn4 x9f619 xdounpk x1hql6x6 xp8kixx",
            1: "x1dr59a3 xw2csxc x1odjw0f xyinxu5 xp48ta0 x1g2khh7 xtssl2i xp9ttsr x6s0dn4 x9f619 xdounpk x1hql6x6 xe4h88v",
          }[!!r("WAWebEnvironment").isWeb << 0],
          children: l,
        });
      if (
        I &&
        o("WAWebLinkDeviceScreenGatedUtils").isAppleTouchscreenOverlayEnabled()
      )
        return u.jsx(r("WAWebLinkDeviceAppleTouchScreen.react"), {
          onContinueToWeb: function () {
            (g.load().then(function (e) {
              var t = e.WAWebLinkDeviceQplHelpLinkEvent,
                n = e.WebcPairingScreenLinkType;
              t(n.APPLE_TOUCHSCREEN_OVERLAY_CONTINUE_TO_WEB, L);
            }),
              T(!1));
          },
          onOpenAppStore: function () {
            (y.load().then(function (e) {
              var t = e.logDesktopUpsellQplEvent;
              t(
                "click",
                o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                  .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
                  .LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY,
                L,
              );
            }),
              o(
                "WAWebDesktopUpsellStoreOpener",
              ).openExternalWhatsAppDesktopDownloadUrl({
                ctaSource: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                  .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE
                  .LINK_DEVICE_APPLE_TOUCHSCREEN_OVERLAY,
                isBetaUser: !1,
              }));
          },
        });
      var P = u.jsx(v, { upsellBannerType: D, apiCmd: t.apiCmd }),
        N =
          ((L == null ? void 0 : L.resultType) === "WEB_REGISTRATION" &&
            o(
              "WAWebLinkDeviceScreenGatedUtils",
            ).getOptimizedRegFromWebVariant() === "test") ||
          (L == null ? void 0 : L.resultType) === "WEB_REGISTRATION_CAMPAIGN";
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        xstyle: [
          C.wrapper,
          r("WAWebEnvironment").isWeb ? C.wrapperWeb : C.wrapperWindows,
        ],
        children: [
          l,
          u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: C.headerFooterContainer,
            shrink: 0,
            children: u.jsx(r("WAWebLandingHeader.react"), {
              showAppDownloadButton:
                D ===
                  o("useWAWebDesktopUpsellQRCodeBannerType")
                    .WAWebDesktopUpsellQRCodeBannerType.NONE && !N,
              surface: "link-device-screen",
            }),
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            grow: 1,
            shrink: 0,
            rowGap: 16,
            children: [
              P,
              u.jsx("div", {
                className: "x1lliihq",
                children: u.jsx(o("WAWebFlex.react").FlexItem, {
                  align: "center",
                  justify: "center",
                  className:
                    "xy296fx xbl0rts x4i7bpe x15zmtp0 x1sgudl8 x1oiqv2n x1rsuxf0 xcgujcq x1igtfuo x13up0n2 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xpypsur x1fe0zbt x249io5 xtq6bvn x12peec7 x91od0 xvl3i4w xfqsd3n xzg3blf x191sbug",
                  children: u.jsx(
                    r("WAWebLinkDeviceMethod.react"),
                    babelHelpers.extends({}, x),
                  ),
                }),
              }),
              u.jsx(o("WAWebFlex.react").FlexItem, {
                shrink: 0,
                children: u.jsx(r("WAWebLandingFooter.react"), {
                  isWebReg: N,
                  onClick: $,
                }),
              }),
            ],
          }),
          u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: C.headerFooterContainer,
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.apiCmd,
        n = e.upsellBannerType,
        a = [C.upsellBannerContainer];
      return (
        n ===
          o("useWAWebDesktopUpsellQRCodeBannerType")
            .WAWebDesktopUpsellQRCodeBannerType.SLIM &&
        u.jsx("div", {
          className: "x1lliihq xh8yej3",
          children: u.jsx(r("WAWebDesktopUpsellQRCodeSlimBanner.react"), {
            apiCmd: t,
          }),
        })
      );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = b));
  },
  98,
);
