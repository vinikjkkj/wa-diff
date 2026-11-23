__d(
  "WAWebVoipCallBlockedModals",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebMiscBrowserUtils",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebODS",
    "WAWebReloadCrashAnnotations",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipAvailabilityCheckpoints",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCallBlockedAlertLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipNoConnectionDialogLoader",
    "WDSDialogBridge",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("WAWebVoipGatingUtils").getUnsupportedBrowserReason();
      if (e == null) return !1;
      var t = o("WAWebVoipGatingUtils").getCrossOriginIsolatedState();
      e: {
        if (e === "missing_shared_array_buffer") {
          (r("WAWebODS").incr(
            "web.call.browser_unsupported.missing_shared_array_buffer",
          ),
            t === !0
              ? r("WAWebODS").incr(
                  "web.call.browser_capability.missing_sab.cross_origin_isolated",
                )
              : t === !1
                ? r("WAWebODS").incr(
                    "web.call.browser_capability.missing_sab.not_cross_origin_isolated",
                  )
                : r("WAWebODS").incr(
                    "web.call.browser_capability.missing_sab.isolation_unsupported",
                  ));
          break e;
        }
        if (e === "missing_atomics") {
          (r("WAWebODS").incr("web.call.browser_unsupported.missing_atomics"),
            t === !0
              ? r("WAWebODS").incr(
                  "web.call.browser_capability.missing_atomics.cross_origin_isolated",
                )
              : t === !1
                ? r("WAWebODS").incr(
                    "web.call.browser_capability.missing_atomics.not_cross_origin_isolated",
                  )
                : r("WAWebODS").incr(
                    "web.call.browser_capability.missing_atomics.isolation_unsupported",
                  ));
          break e;
        }
        if (e === "missing_rtc_peer_connection") {
          (r("WAWebODS").incr(
            "web.call.browser_unsupported.missing_rtc_peer_connection",
          ),
            t === !0
              ? r("WAWebODS").incr(
                  "web.call.browser_capability.missing_rtc.cross_origin_isolated",
                )
              : t === !1
                ? r("WAWebODS").incr(
                    "web.call.browser_capability.missing_rtc.not_cross_origin_isolated",
                  )
                : r("WAWebODS").incr(
                    "web.call.browser_capability.missing_rtc.isolation_unsupported",
                  ));
          break e;
        }
        if (e === "broken_voip_wasm") {
          (r("WAWebODS").incr("web.call.browser_unsupported.broken_voip_wasm"),
            t === !0
              ? r("WAWebODS").incr(
                  "web.call.browser_capability.broken_wasm.cross_origin_isolated",
                )
              : t === !1
                ? r("WAWebODS").incr(
                    "web.call.browser_capability.broken_wasm.not_cross_origin_isolated",
                  )
                : r("WAWebODS").incr(
                    "web.call.browser_capability.broken_wasm.isolation_unsupported",
                  ));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
      return (
        o("WDSDialogBridge").openWDSDialog(
          e === "broken_voip_wasm"
            ? u.jsx(r("WAWebVoipCallBlockedAlertLoadable"), {
                description: r("justknobx")._("8427")
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ ""),
                title: s._(/*BTDS*/ ""),
              })
            : u.jsx(r("WAWebVoipCallBlockedAlertLoadable"), {
                description: r("justknobx")._("8427")
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ ""),
                title: s._(/*BTDS*/ ""),
              }),
        ),
        !0
      );
    }
    async function d() {
      if (
        !o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getDidVoipInitError() ||
        (o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight() &&
          !r("WAWebEnvironment").isWindows)
      )
        return !1;
      var e = await o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
        t = e.WAWebVoipInit;
      return (await t.retryWAWebVoipInitAfterFailure()) ? !1 : (m(), !0);
    }
    function m() {
      o("WDSDialogBridge").openWDSDialog(
        u.jsx(r("WAWebVoipCallBlockedAlertLoadable"), {
          description: s._(/*BTDS*/ ""),
          title: s._(/*BTDS*/ ""),
        }),
      );
    }
    function p() {
      return r("WAWebNetworkStatus").online
        ? !1
        : (o("WAWebVoipNoConnectionDialogLoader").showNoConnectionDialog(_),
          !0);
    }
    function _() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          testid: "voip_no_connection_modal",
          tsNavigationData: { surface: "unknown", viewName: "voip-start-call" },
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(/*BTDS*/ ""),
        }),
      );
    }
    function f() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          testid: "voip_init_unavailable_reload_modal",
          tsNavigationData: { surface: "unknown", viewName: "voip-start-call" },
          cancelText: s._(/*BTDS*/ ""),
          okText: s._(/*BTDS*/ ""),
          onCancel: o("WAWebModalManager").closeModalManager,
          onOK: function () {
            (o("WAWebModalManager").closeModalManager(),
              o("WAWebVoipAvailabilityCheckpoints").logVoipUnavailableReload(),
              o("WAWebReloadCrashAnnotations").annotateCrashWithReloadReason(
                "VoipCallBlockedModals.reload",
              ),
              r("WAWebMiscBrowserUtils").hardRefresh());
          },
          onOverlayClick: o("WAWebModalManager").closeModalManager,
          title: s._(/*BTDS*/ ""),
          children: s._(/*BTDS*/ ""),
        }),
      );
    }
    async function g() {
      return c() || p()
        ? !0
        : o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipStackUnresponsive()
          ? (o("WAWebCoreActionsODS").logCallInitBlockedStackUnresponsive(),
            f(),
            !0)
          : d();
    }
    function h() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
      );
    }
    ((l.showCouldNotPlaceCallModal = m),
      (l.showNoConnectionModalIfOffline = p),
      (l.showVoipInitUnavailableModal = f),
      (l.showCallBlockedModalIfNeeded = g),
      (l.showEndCurrentCallToast = h));
  },
  226,
);
