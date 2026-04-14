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
      var t = p(function () {
          return !!(
            o("WAWebAutoLogoutGating").isAutoLogoutEnabled() &&
            o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()
          );
        }),
        a = t[0],
        i = t[1],
        l = p(!1),
        u = l[0],
        d = l[1],
        b = m(
          function () {
            if (o("WAWebAutoLogoutGating").isAutoLogoutEnabled()) {
              if (r("gkx")("26259")) {
                (s || (s = n("Promise")))
                  .all([h.load(), f.load()])
                  .then(function (e) {
                    var t = e[0].ModalManager,
                      n = e[1].ConfirmPopup;
                    t.open(
                      c.jsx(n, {
                        onOK: function () {
                          return t.close();
                        },
                        children:
                          "Auto logout is not supported in intern. Please use the prod or debug app.",
                      }),
                    );
                  });
                return;
              }
              if (
                (g.onReady(function (e) {
                  e.WAWebLinkDeviceQplHelpLinkEvent(
                    e.WebcPairingScreenLinkType.STAY_LOGGED_IN,
                  );
                }),
                a && o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe())
              ) {
                (r("SecurePostMessage").sendMessageForCurrentOrigin(
                  self.parent,
                  "AUTO_LOGOUT_DISABLED",
                ),
                  y.onReady(function (e) {
                    e.companionDeviceLinkingScreenQpl.stayLoggedInToggleClicked(
                      !1,
                    );
                  }));
                return;
              }
              var e = !a;
              (y.onReady(function (t) {
                t.companionDeviceLinkingScreenQpl.stayLoggedInToggleClicked(e);
              }),
                i(e),
                e ||
                  _.onReady(function (e) {
                    e.BackendEventBus.triggerRefreshQR();
                  }));
            }
          },
          [a],
        ),
        v = function (t) {
          if (
            !(
              !o("WAWebAutoLogoutGating").isAutoLogoutEnabled() &&
              o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()
            )
          )
            switch (t.data) {
              case "QR_CODE_LOADED_FOR_AUTO_LOGOUT":
                d(!0);
                break;
              case "AUTO_LOGOUT_DISABLED":
                (d(!1),
                  i(!1),
                  _.onReady(function (e) {
                    e.BackendEventBus.triggerRefreshQR();
                  }));
            }
        },
        S = function () {
          (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[auto-logout] iframe timeout",
              ])),
          ),
            a && b());
        };
      o("useWAWebListener").useListener(
        o("WAWebAutoLogoutGating").isAutoLogoutEnabled() ? window : null,
        "message",
        v,
      );
      var R = c.jsx(r("CometPlaceholder.react"), {
        fallback: null,
        name: "WAWebLinkDeviceAutoLogoutIFrame",
        children: c.jsx(C, { autoLogoutEnabled: a, visible: u, onTimeout: S }),
      });
      return {
        autoLogoutEnabled: a,
        handleAutoLogoutToggle: b,
        autoLogoutIframe: R,
        autoLogoutIframeLoaded: u,
      };
    }
    l.default = b;
  },
  98,
);
