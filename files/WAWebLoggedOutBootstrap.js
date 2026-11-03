__d(
  "WAWebLoggedOutBootstrap",
  [
    "CurrentUser",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebDebugSetup",
    "WAWebHandlePreviousLogout",
    "WAWebIndexedDBPurge",
    "WAWebL10N",
    "WAWebLocalStorage",
    "WAWebLocalStorageUtils",
    "WAWebLoggedOutIsRegisteredCheck",
    "WAWebLoginBounceGuard",
    "WAWebLoginLaunchSocketUtils",
    "WAWebPageLoadLogging",
    "WAWebPonyfillsIdleCallback",
    "WAWebStartupResourcesPrefetch",
    "WAWebURLUtils",
    "WAWebUim",
    "WAWebUserPrefsMultiDevice",
    "WAWebWAWCInit",
    "cr:5203",
    "getErrorSafe",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (_ = r("requireDeferred"))("WAWebLinkDeviceExperience").__setRef(
        "WAWebLoggedOutBootstrap",
      ),
      g = _("WAWebLoginLaunchSocket").__setRef("WAWebLoggedOutBootstrap"),
      h = _("WAWebPageLoadLoggingImpl").__setRef("WAWebLoggedOutBootstrap"),
      y = _("WAWebWam").__setRef("WAWebLoggedOutBootstrap"),
      C = _("WAWebWamPageLoadReporter").__setRef("WAWebLoggedOutBootstrap");
    async function b() {
      var t = o("WAWebLocalStorageUtils").isLogoutDirtyBitSet(),
        n =
          !r("CurrentUser").isLoggedIn() &&
          o("WAWebLoggedOutIsRegisteredCheck").isRegisteredLightweight();
      if (!(!t && !o("WAWebLocalStorageUtils").isUserLoggedOut() && !n)) {
        try {
          (await o("WAWebIndexedDBPurge").deleteAllIdb(),
            await o("WAWebWAWCInit").initWAWC());
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[login] preemptive db delete failed ",
                  "",
                ])),
              t,
            )
            .tags("logged-out-bootstrap");
        }
        t
          ? r("WAWebLocalStorage") == null || r("WAWebLocalStorage").clear()
          : n && (await o("WAWebUserPrefsMultiDevice").clearRegistrationInfo());
      }
    }
    function v() {
      return o("WAWebLoginBounceGuard").getLoginBounceCount() >=
        o("WAWebLoginBounceGuard").MAX_LOGIN_BOUNCES
        ? (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[login] redirect bounce cap reached; staying on /login",
                ])),
            )
            .tags("logged-out-bootstrap"),
          !1)
        : (o("WAWebLoginBounceGuard").bumpLoginBounceCount(),
          (window.location.href = r("WAWebURLUtils").consumeLoginNextParam(
            window.location.search,
          )),
          !0);
    }
    async function S(e) {
      var t;
      (o("WAWebDebugSetup").setupDebugGlobal(),
        n("cr:5203") == null || n("cr:5203")());
      var a =
        (t = e == null ? void 0 : e.mountEpochMs) != null ? t : Date.now();
      if (
        (y
          .load()
          .then(function (e) {
            return e.initWamRuntime();
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[login] WAM init failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("login-wam-init-fail");
          }),
        await b(),
        o("WAWebHandlePreviousLogout").processLogoutReasonAndCleanupUrl(),
        r("justknobx")._("4755") ||
          o("WAWebBackendEventBus").BackendEventBus.onRefreshQR(
            o("WAWebLoginLaunchSocketUtils").refreshLoginQR,
          ),
        !(
          o("WAWebLoggedOutIsRegisteredCheck").isRegisteredLightweight() &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[login] User is already registered, redirecting to main app",
              ])),
          ),
          v())
        ))
      ) {
        var i = await Promise.all([
            R(a, e == null ? void 0 : e.renderEpochMs),
            g.load(),
          ]),
          l = i[1].launchSocketForLogin;
        if (
          (await l(),
          r("justknobx")._("4755") &&
            o("WAWebBackendEventBus").BackendEventBus.onRefreshQR(
              o("WAWebLoginLaunchSocketUtils").refreshLoginQR,
            ),
          !(
            o("WAWebLoggedOutIsRegisteredCheck").isRegisteredLightweight() &&
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[login] registered after launchSocketForLogin, redirect",
                ])),
            ),
            v())
          ))
        ) {
          o("WAWebUim").setupUimListeners();
          var s = document.getElementById("wa_web_initial_startup");
          (s != null && s.parentNode && s.parentNode.removeChild(s),
            o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
              o("WAWebStartupResourcesPrefetch").prefetchStartupResources(null);
            }));
        }
      }
    }
    async function R(e, t) {
      var n = f
        .load()
        .then(function (e) {
          return e.getWebCompanionLinkDeviceExperienceId();
        })
        .catch(function (e) {
          return (
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[login] QR page-load experience attribution failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("login-qr-page-load-experience-fail"),
            null
          );
        });
      try {
        var a = await Promise.all([h.load(), C.load(), n]),
          i = a[0],
          l = a[1],
          s = a[2],
          u = r("WAWebL10N").getLocale();
        (i.setPageLoadLoggingImpl(),
          l.onWamPageLoadTimingComplete(function () {
            o("WAWebPageLoadLogging").endPageLoadQpl(!0, s, u);
          }),
          l.reportLoggedOutPageLoadStage("qr_mount", {
            mountEpochMs: e,
            renderEpochMs: t,
          }));
      } catch (e) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[login] QR page-load setup failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("login-qr-page-load-setup-fail");
      }
    }
    l.bootstrapLogin = S;
  },
  98,
);
