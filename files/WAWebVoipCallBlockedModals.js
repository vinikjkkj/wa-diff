__d(
  "WAWebVoipCallBlockedModals",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebCoreActionsODS",
    "WAWebMiscBrowserUtils",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipBackendLoadable",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
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
          (o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingSAB(),
            o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingSAB(t));
          break e;
        }
        if (e === "missing_atomics") {
          (o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingAtomics(),
            o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingAtomics(t));
          break e;
        }
        if (e === "missing_rtc_peer_connection") {
          (o("WAWebCoreActionsODS").logCallBrowserUnsupportedMissingRTC(),
            o("WAWebCoreActionsODS").logCallBrowserCapabilityMissingRTC(t));
          break e;
        }
        if (e === "broken_voip_wasm") {
          (o("WAWebCoreActionsODS").logCallBrowserUnsupportedBrokenWasm(),
            o("WAWebCoreActionsODS").logCallBrowserCapabilityBrokenWasm(t));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
      return (
        o("WAWebModalManager").ModalManager.open(
          e === "broken_voip_wasm"
            ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "voip-start-call",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                title: s._(
                  /*BTDS*/ "Your version of Safari doesn\u2019t support calls",
                ),
                children: s._(
                  /*BTDS*/ "Please update your browser to Safari 26.3 or higher and try again.",
                ),
              })
            : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "voip-start-call",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                title: s._(
                  /*BTDS*/ "Your browser doesn\u2019t support calling",
                ),
                children: s._(
                  /*BTDS*/ "Please update your browser or try another browser.",
                ),
              }),
        ),
        !0
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError()
          )
            return !1;
          var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            t = e.WAWebVoipInit;
          return (yield t.retryWAWebVoipInitAfterFailure()) ? !1 : (p(), !0);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "voip-start-call" },
          onOK: o("WAWebModalManager").closeModalManager,
          title: s._(/*BTDS*/ "Couldn't place call"),
          children: s._(/*BTDS*/ "Refresh the page and try again."),
        }),
      );
    }
    function _() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          testid: "voip_init_unavailable_reload_modal",
          tsNavigationData: { surface: "unknown", viewName: "voip-start-call" },
          cancelText: s._(/*BTDS*/ "Not now"),
          okText: s._(/*BTDS*/ "Reload"),
          onCancel: o("WAWebModalManager").closeModalManager,
          onOK: function () {
            (o("WAWebModalManager").closeModalManager(),
              r("WAWebMiscBrowserUtils").hardRefresh());
          },
          onOverlayClick: o("WAWebModalManager").closeModalManager,
          title: s._(/*BTDS*/ "Reload to restore calls"),
          children: s._(
            /*BTDS*/ "Calling couldn\u2019t start. Incoming calls won\u2019t ring on this computer until you reload the page.",
          ),
        }),
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return c() ? !0 : d();
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "End your current call to start a new one."),
        }),
      );
    }
    ((l.showCouldNotPlaceCallModal = p),
      (l.showVoipInitUnavailableModal = _),
      (l.showCallBlockedModalIfNeeded = f),
      (l.showEndCurrentCallToast = h));
  },
  226,
);
