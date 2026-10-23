__d(
  "WAWebSyncNewContact",
  [
    "WALogger",
    "WAShiftTimer",
    "WAWebContactSyncApi",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 2e4,
      c = 1e3,
      d = null,
      m = [];
    function p(t) {
      (m.push(t),
        d
          ? d.debounce(c)
          : ((d = new (o("WAShiftTimer").ShiftTimer)(function () {
              if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
                var t = m;
                ((m = []),
                  (d = null),
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
            d.onOrBefore(u)));
    }
    l.syncNewContact = p;
  },
  98,
);
