__d(
  "WAWebSyncContactsJob",
  [
    "WAComms",
    "WALogger",
    "WAWebContactSyncApi",
    "WAWebLidAwareContactsDB",
    "WAWebLocalStorage",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 86400,
      d = 60;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield r("WAWebLidAwareContactsDB").equals(
              ["isContactSyncCompleted"],
              0,
            ),
            n = t.map(function (e) {
              return o("WAWebWidFactory").createWid(e.id);
            });
          return (
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sync dirty contacts, found ",
                    " contacts to sync",
                  ])),
                n.length,
              )
              .tags("contact-sync"),
            o("WAWebContactSyncApi").syncContactListInChunks({
              contactIds: n,
              shouldDelayBetweenChunks: !0,
              mode: "query",
            })
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((yield o(
            "WAWebUserPrefsMultiDevice",
          ).getShouldCheckContactSyncStatus()) &&
            self.setTimeout(function () {
              if (
                r("justknobx")._("6839") &&
                !o("WAComms").isCommsInitialized()
              ) {
                o("WALogger")
                  .LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[contact-sync] comms not initialized, skipping dirty contact sync",
                      ])),
                  )
                  .tags("contact-sync");
                return;
              }
              m().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "runSyncDirtyContactsJob: contact sync failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("non-sad", "contact-sync")
                  .sendLogs("runSyncDirtyContactsJob: contact sync failed");
              });
            }, d * 1e3),
            yield o(
              "WAWebUserPrefsAppStateSync",
            ).setShouldCheckContactSyncStatus());
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      var e,
        t =
          (e = r("nullthrows")(r("WAWebLocalStorage")).getItem(
            o("WAWebUserPrefsKeys").KEYS.CONTACT_SYNC_REFRESH,
          )) != null
            ? e
            : c;
      return parseInt(t, 10);
    }
    ((l.runSyncDirtyContactsJob = _), (l.getContactSyncRefreshSeconds = g));
  },
  98,
);
