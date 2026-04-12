__d(
  "WAWebDesktopUpsellChatlistToastbar.react",
  [
    "WAWebABProps",
    "WAWebDesktopUpsellCommonStrings",
    "WAWebDesktopUpsellEvents",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellStoreOpener",
    "WAWebDesktopUpsellUtils",
    "WAWebDesktopUpsellWASquareIcon.react",
    "WAWebMacBetaUpsellToastbar.react",
    "WAWebText.react",
    "WAWebToastbar.react",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamEnumWebcNativeUpsellCtaEventType",
    "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWebcNativeUpsellCtaWamEvent",
    "cr:23046",
    "react",
    "useWAWebDesktopUpsellWamImpression",
    "useWAWebExternalBetaOptIn",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.startTransition,
      d = u.useState,
      m = { textWrapper: { lineHeight: "xo5v014", $$css: !0 } };
    function p() {
      var e,
        t = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        a = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        i =
          (e =
            n("cr:23046") == null
              ? void 0
              : n("cr:23046").isWindowsHybridEnabled()) != null
            ? e
            : !1,
        l = !i && a,
        u = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        p = u[0],
        g = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        h = d(!0),
        y = h[0],
        C = h[1];
      o("useWAWebListener").useListener(
        o("WAWebDesktopUpsellEvents").WAWebDesktopUpsellEvents,
        "conversation_panel_ui_change",
        function (e) {
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_reduce_cascading_updates_chat_open",
          )
            ? c(function () {
                C(e.conversationPanelVisible);
              })
            : C(e.conversationPanelVisible);
        },
      );
      var b = _(),
        v = l === !0 && t != null && !b && !g,
        S = o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR;
      return (
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression({
          isCtaVisible: v && !g,
          source: S,
          isBeta: g,
          isBetaUser: p,
        }),
        g
          ? s.jsx(r("WAWebMacBetaUpsellToastbar.react"), { sourceType: S })
          : v
            ? s.jsxs(r("WAWebToastbar.react"), {
                hidden: !y,
                dismissible: !0,
                onClick: function () {
                  o(
                    "WAWebDesktopUpsellStoreOpener",
                  ).openExternalWhatsAppDesktopDownloadUrl({
                    ctaSource: S,
                    isBetaUser: p,
                  });
                },
                onDismiss: function () {
                  (f(),
                    new (o(
                      "WAWebWebcNativeUpsellCtaWamEvent",
                    ).WebcNativeUpsellCtaWamEvent)({
                      webcNativeUpsellCtaEventType: o(
                        "WAWebWamEnumWebcNativeUpsellCtaEventType",
                      ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
                      webcNativeUpsellCtaSource: S,
                      webcNativeUpsellCtaReleaseChannel: o(
                        "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
                      ).WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
                      webcNativeUpsellCtaIsBetaUser: p,
                    }).commit());
                },
                children: [
                  s.jsx(r("WAWebDesktopUpsellWASquareIcon.react"), {}),
                  s.jsx(o("WAWebText.react").WAWebTextTitle, {
                    as: "span",
                    color: "teal",
                    xstyle: m.textWrapper,
                    children: o(
                      "WAWebDesktopUpsellCommonStrings",
                    ).getDesktopUpsellToastbarLabel(!1),
                  }),
                ],
              })
            : null
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS
          .DESKTOP_UPSELL_USER_HAS_DISMISSED_CHATLIST_TOASTBAR,
      );
      return !!e;
    }
    function f() {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS
          .DESKTOP_UPSELL_USER_HAS_DISMISSED_CHATLIST_TOASTBAR,
        !0,
      );
    }
    l.default = p;
  },
  98,
);
