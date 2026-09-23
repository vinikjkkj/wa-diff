__d(
  "WAWebSyncContactsJob",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebContactSyncApi",
    "WAWebLidAwareContactsDB",
    "WAWebLocalStorage",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 86400,
      m = 2e4,
      p = 1e3,
      _ = 60,
      f = null,
      g = [];
    function h(t) {
      (g.push(t),
        f
          ? f.debounce(p)
          : ((f = new (o("WAShiftTimer").ShiftTimer)(function () {
              if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
                var t = g;
                ((g = []),
                  (f = null),
                  o("WALogger")
                    .LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "start new contact sync for ",
                          " contacts",
                        ])),
                      t.length,
                    )
                    .tags("contact-sync"),
                  o("WAWebContactSyncApi")
                    .syncContactListInChunks({
                      contactIds: t,
                      shouldDelayBetweenChunks: !0,
                      mode: "query",
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "syncNewContact: contact sync failed, error: ",
                              "",
                            ])),
                          e,
                        )
                        .verbose()
                        .tags("non-sad", "contact-sync")
                        .sendLogs("syncNewContact: contact sync failed");
                    }));
              }
            })),
            f.onOrBefore(m)));
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebLidAwareContactsDB").equals(
              ["isContactSyncCompleted"],
              0,
            ),
            t = e.map(function (e) {
              return o("WAWebWidFactory").createWid(e.id);
            });
          return (
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sync dirty contacts, found ",
                    " contacts to sync",
                  ])),
                t.length,
              )
              .tags("contact-sync"),
            o("WAWebContactSyncApi").syncContactListInChunks({
              contactIds: t,
              shouldDelayBetweenChunks: !0,
              mode: "query",
            })
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((yield o(
            "WAWebUserPrefsMultiDevice",
          ).getShouldCheckContactSyncStatus()) &&
            self.setTimeout(function () {
              y().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "runSyncDirtyContactsJob: contact sync failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("non-sad", "contact-sync")
                  .sendLogs("runSyncDirtyContactsJob: contact sync failed");
              });
            }, _ * 1e3),
            yield o(
              "WAWebUserPrefsAppStateSync",
            ).setShouldCheckContactSyncStatus());
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      var e,
        t =
          (e = r("nullthrows")(r("WAWebLocalStorage")).getItem(
            o("WAWebUserPrefsKeys").KEYS.CONTACT_SYNC_REFRESH,
          )) != null
            ? e
            : d;
      return parseInt(t, 10);
    }
    ((l.syncNewContact = h),
      (l.runSyncDirtyContactsJob = b),
      (l.getContactSyncRefreshSeconds = S));
  },
  98,
);
