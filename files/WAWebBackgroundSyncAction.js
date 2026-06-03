__d(
  "WAWebBackgroundSyncAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebPushNotificationsGatingUtils",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebSetWorkerLocalStorage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      f,
      g = "background-sync";
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t === void 0 && (t = !1);
          try {
            var n, a;
            if (
              !o(
                "WAWebPushNotificationsGatingUtils",
              ).canSupportPeriodicBackgroundSync() ||
              !o("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()
            )
              return;
            var i = yield (n = window.navigator.serviceWorker) == null
              ? void 0
              : n.ready;
            if (!("periodicSync" in (i != null ? i : []))) return;
            var l = i == null ? void 0 : i.periodicSync;
            if (!l) return;
            var h = yield l.getTags == null ? void 0 : l.getTags();
            if (!h) return;
            var y = yield (a = window.navigator.permissions) == null ||
            a.query == null
              ? void 0
              : a.query({ name: "background-sync" });
            if ((y == null ? void 0 : y.state) !== "granted") return;
            var C = o("WAWebABProps").getABPropConfigValue(
              "web_pwa_background_sync",
            );
            if (!t && C)
              if (
                (yield o("WAWebSetWorkerLocalStorage").setWorkerLocalStorage(),
                h.includes(g))
              )
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "pwa background sync is already registered",
                    ])),
                );
              else {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Start pwa background sync registration",
                    ])),
                ),
                  yield l.register == null
                    ? void 0
                    : l.register(g, {
                        minInterval:
                          o("WAWebABProps").getABPropConfigValue(
                            "web_pwa_background_sync_min_interval_hours",
                          ) * o("WATimeUtils").HOUR_MILLISECONDS,
                      }));
                var b = yield l.getTags == null ? void 0 : l.getTags();
                b != null && b.includes != null && b.includes(g)
                  ? o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "pwa background sync registered successfully",
                        ])),
                    )
                  : o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "pwa background sync failed to register",
                        ])),
                    );
              }
            else if (h.includes(g)) {
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Start pwa background sync unregistration",
                  ])),
              ),
                yield l.unregister == null ? void 0 : l.unregister(g));
              var v = yield l.getTags == null ? void 0 : l.getTags();
              v != null && v.includes != null && v.includes(g)
                ? o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "pwa background sync failed to unregister",
                      ])),
                  )
                : o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "pwa background sync unregistered successfully",
                      ])),
                  );
            } else
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "pwa background sync is already unregistered",
                  ])),
              );
          } catch (e) {
            var S = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "pwa-background-sync-registration-update-failure",
                  ])),
              )
              .catching(S)
              .sendLogs("pwa-background-sync-registration-update-failure");
          }
        })),
        y.apply(this, arguments)
      );
    }
    l.updatePeriodicBackgroundSyncRegistration = h;
  },
  98,
);
