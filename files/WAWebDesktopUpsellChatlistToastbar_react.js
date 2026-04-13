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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(18),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebDesktopUpsellUtils").getUserDesktopOs()), (e[0] = t))
        : (t = e[0]);
      var a = t,
        i = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        l;
      if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
        var u;
        ((l =
          (u =
            n("cr:23046") == null
              ? void 0
              : n("cr:23046").isWindowsHybridEnabled()) != null
            ? u
            : !1),
          (e[1] = l));
      } else l = e[1];
      var p = l,
        g = !p && i,
        h = o("useWAWebExternalBetaOptIn").useExternalBetaOptIn(),
        y = h[0],
        C = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        b = d(!0),
        v = b[0],
        S = b[1],
        R;
      (e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function (t) {
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_reduce_cascading_updates_chat_open",
            )
              ? c(function () {
                  S(t.conversationPanelVisible);
                })
              : S(t.conversationPanelVisible);
          }),
          (e[2] = R))
        : (R = e[2]),
        o("useWAWebListener").useListener(
          o("WAWebDesktopUpsellEvents").WAWebDesktopUpsellEvents,
          "conversation_panel_ui_change",
          R,
        ));
      var L;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = _()), (e[3] = L))
        : (L = e[3]);
      var E = L,
        k = g === !0 && a != null && !E && !C,
        I = o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
          .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR,
        T = k && !C,
        D;
      if (
        (e[4] !== y || e[5] !== C || e[6] !== T
          ? ((D = { isCtaVisible: T, source: I, isBeta: C, isBetaUser: y }),
            (e[4] = y),
            (e[5] = C),
            (e[6] = T),
            (e[7] = D))
          : (D = e[7]),
        o(
          "useWAWebDesktopUpsellWamImpression",
        ).useWAWebDesktopUpsellWamImpression(D),
        C)
      ) {
        var x;
        return (
          e[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = s.jsx(r("WAWebMacBetaUpsellToastbar.react"), {
                sourceType: I,
              })),
              (e[8] = x))
            : (x = e[8]),
          x
        );
      }
      if (!k) return null;
      var $ = !v,
        P,
        N;
      e[9] !== y
        ? ((P = function () {
            o(
              "WAWebDesktopUpsellStoreOpener",
            ).openExternalWhatsAppDesktopDownloadUrl({
              ctaSource: I,
              isBetaUser: y,
            });
          }),
          (N = function () {
            (f(),
              new (o(
                "WAWebWebcNativeUpsellCtaWamEvent",
              ).WebcNativeUpsellCtaWamEvent)({
                webcNativeUpsellCtaEventType: o(
                  "WAWebWamEnumWebcNativeUpsellCtaEventType",
                ).WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
                webcNativeUpsellCtaSource: I,
                webcNativeUpsellCtaReleaseChannel: o(
                  "WAWebWamEnumWebcNativeUpsellCtaReleaseChannel",
                ).WEBC_NATIVE_UPSELL_CTA_RELEASE_CHANNEL.PRODUCTION,
                webcNativeUpsellCtaIsBetaUser: y,
              }).commit());
          }),
          (e[9] = y),
          (e[10] = P),
          (e[11] = N))
        : ((P = e[10]), (N = e[11]));
      var M;
      e[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s.jsx(r("WAWebDesktopUpsellWASquareIcon.react"), {})),
          (e[12] = M))
        : (M = e[12]);
      var w;
      e[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = s.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            color: "teal",
            xstyle: m.textWrapper,
            children: o(
              "WAWebDesktopUpsellCommonStrings",
            ).getDesktopUpsellToastbarLabel(!1),
          })),
          (e[13] = w))
        : (w = e[13]);
      var A;
      return (
        e[14] !== $ || e[15] !== P || e[16] !== N
          ? ((A = s.jsxs(r("WAWebToastbar.react"), {
              hidden: $,
              dismissible: !0,
              onClick: P,
              onDismiss: N,
              children: [M, w],
            })),
            (e[14] = $),
            (e[15] = P),
            (e[16] = N),
            (e[17] = A))
          : (A = e[17]),
        A
      );
    }
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
