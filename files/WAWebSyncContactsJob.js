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
    async function h() {
      var e = await r("WAWebLidAwareContactsDB").equals(
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
    }
    async function y() {
      ((await o(
        "WAWebUserPrefsMultiDevice",
      ).getShouldCheckContactSyncStatus()) &&
        self.setTimeout(function () {
          h();
        }, p * 1e3),
        await o(
          "WAWebUserPrefsAppStateSync",
        ).setShouldCheckContactSyncStatus());
    }
    function C() {
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
      (l.runSyncDirtyContactsJob = y),
      (l.getContactSyncRefreshSeconds = C));
  },
  98,
);
