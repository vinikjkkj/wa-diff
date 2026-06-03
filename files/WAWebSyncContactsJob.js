__d(
  "WAWebSyncContactsJob",
  [
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebContactSyncApi",
    "WAWebLidAwareContactsDB",
    "WAWebLocalStorage",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMultiDevice",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 86400,
      d = 2e4,
      m = 1e3,
      p = 60,
      _ = null,
      f = [];
    function g(t) {
      (f.push(t),
        _
          ? _.debounce(m)
          : ((_ = new (o("WAShiftTimer").ShiftTimer)(function () {
              if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
                var t = f;
                ((f = []),
                  (_ = null),
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
            _.onOrBefore(d)));
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          ((yield o(
            "WAWebUserPrefsMultiDevice",
          ).getShouldCheckContactSyncStatus()) &&
            self.setTimeout(function () {
              h();
            }, p * 1e3),
            yield o(
              "WAWebUserPrefsAppStateSync",
            ).setShouldCheckContactSyncStatus());
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      var e,
        t =
          (e = r("WANullthrows")(r("WAWebLocalStorage")).getItem(
            o("WAWebUserPrefsKeys").KEYS.CONTACT_SYNC_REFRESH,
          )) != null
            ? e
            : c;
      return parseInt(t, 10);
    }
    ((l.syncNewContact = g),
      (l.runSyncDirtyContactsJob = C),
      (l.getContactSyncRefreshSeconds = v));
  },
  98,
);
