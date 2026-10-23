__d(
  "WAWebSyncContactsJob",
  [
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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 86400,
      c = 60;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((yield o(
            "WAWebUserPrefsMultiDevice",
          ).getShouldCheckContactSyncStatus()) &&
            self.setTimeout(function () {
              d().catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "runSyncDirtyContactsJob: contact sync failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("non-sad", "contact-sync")
                  .sendLogs("runSyncDirtyContactsJob: contact sync failed");
              });
            }, c * 1e3),
            yield o(
              "WAWebUserPrefsAppStateSync",
            ).setShouldCheckContactSyncStatus());
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      var e,
        t =
          (e = r("nullthrows")(r("WAWebLocalStorage")).getItem(
            o("WAWebUserPrefsKeys").KEYS.CONTACT_SYNC_REFRESH,
          )) != null
            ? e
            : u;
      return parseInt(t, 10);
    }
    ((l.runSyncDirtyContactsJob = p), (l.getContactSyncRefreshSeconds = f));
  },
  98,
);
