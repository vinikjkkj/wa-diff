__d(
  "useWAWebLinkDeviceAutoLogout",
  [
    "CometPlaceholder.react",
    "Promise",
    "SecurePostMessage",
    "WALogger",
    "WAWebAutoLogoutGating",
    "deferredLoadComponent",
    "gkx",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState,
      _ = r("requireDeferred")("WAWebBackendEventBus").__setRef(
        "useWAWebLinkDeviceAutoLogout",
      ),
      f = r("requireDeferred")("WAWebConfirmPopup.react").__setRef(
        "useWAWebLinkDeviceAutoLogout",
      ),
      g = r("requireDeferred")("WAWebLinkDeviceQplHelpLinkEvent").__setRef(
        "useWAWebLinkDeviceAutoLogout",
      ),
      h = r("requireDeferred")("WAWebModalManager").__setRef(
        "useWAWebLinkDeviceAutoLogout",
      ),
      y = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef(
        "useWAWebLinkDeviceAutoLogout",
      ),
      C = r("deferredLoadComponent")(
        r("requireDeferred")("WAWebLinkDeviceAutoLogoutIFrame.react").__setRef(
          "useWAWebLinkDeviceAutoLogout",
        ),
      );
    function b() {
      var t = o("react-compiler-runtime").c(15),
        a = p(k),
        i = a[0],
        l = a[1],
        u = p(!1),
        d = u[0],
        m = u[1],
        b;
      t[0] !== i
        ? ((b = function () {
            if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled()) {
              if (r("gkx")("26259")) {
                (s || (s = n("Promise"))).all([h.load(), f.load()]).then(E);
                return;
              }
              if (
                (g.onReady(L),
                i && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe())
              ) {
                (r("SecurePostMessage").sendMessageForCurrentOrigin(
                  self.parent,
                  "AUTO_LOGOUT_DISABLED",
                ),
                  y.onReady(R));
                return;
              }
              var e = !i;
              (y.onReady(function (t) {
                t.companionDeviceLinkingScreenQpl.stayLoggedInToggleClicked(e);
              }),
                l(e),
                e || _.onReady(S));
            }
          }),
          (t[0] = i),
          (t[1] = b))
        : (b = t[1]);
      var I = b,
        T;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            if (
              !(
                !o("WAWebAutoLogoutGating").isAutoLogoutEnabled() &&
                o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()
              )
            )
              e: switch (t.data) {
                case "QR_CODE_LOADED_FOR_AUTO_LOGOUT": {
                  m(!0);
                  break e;
                }
                case "AUTO_LOGOUT_DISABLED":
                  (m(!1), l(!1), _.onReady(v));
              }
          }),
          (t[2] = T))
        : (T = t[2]);
      var D = T,
        x;
      t[3] !== i || t[4] !== I
        ? ((x = function () {
            (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[auto-logout] iframe timeout",
                ])),
            ),
              i && I());
          }),
          (t[3] = i),
          (t[4] = I),
          (t[5] = x))
        : (x = t[5]);
      var $ = x;
      o("useWAWebListener").useListener(
        o("WAWebAutoLogoutGating").isAutoLogoutEnabled() ? window : null,
        "message",
        D,
      );
      var P;
      t[6] !== i || t[7] !== d || t[8] !== $
        ? ((P = c.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: "WAWebLinkDeviceAutoLogoutIFrame",
            children: c.jsx(C, {
              autoLogoutEnabled: i,
              visible: d,
              onTimeout: $,
            }),
          })),
          (t[6] = i),
          (t[7] = d),
          (t[8] = $),
          (t[9] = P))
        : (P = t[9]);
      var N = P,
        M;
      return (
        t[10] !== i || t[11] !== N || t[12] !== d || t[13] !== I
          ? ((M = {
              autoLogoutEnabled: i,
              handleAutoLogoutToggle: I,
              autoLogoutIframe: N,
              autoLogoutIframeLoaded: d,
            }),
            (t[10] = i),
            (t[11] = N),
            (t[12] = d),
            (t[13] = I),
            (t[14] = M))
          : (M = t[14]),
        M
      );
    }
    function v(e) {
      e.BackendEventBus.triggerRefreshQR();
    }
    function S(e) {
      e.BackendEventBus.triggerRefreshQR();
    }
    function R(e) {
      e.companionDeviceLinkingScreenQpl.stayLoggedInToggleClicked(!1);
    }
    function L(e) {
      e.WAWebLinkDeviceQplHelpLinkEvent(
        e.WebcPairingScreenLinkType.STAY_LOGGED_IN,
      );
    }
    function E(e) {
      var t = e[0],
        n = e[1],
        r = t.ModalManager,
        o = n.ConfirmPopup;
      r.open(
        c.jsx(o, {
          onOK: function () {
            return r.close();
          },
          children:
            "Auto logout is not supported in intern. Please use the prod or debug app.",
        }),
      );
    }
    function k() {
      return !!(
        o("WAWebAutoLogoutGating").isAutoLogoutEnabled() &&
        o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()
      );
    }
    l.default = b;
  },
  98,
);
