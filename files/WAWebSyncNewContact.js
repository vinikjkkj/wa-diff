__d(
  "WAWebSyncNewContact",
  [
    "WAComms",
    "WALogger",
    "WAShiftTimer",
    "WAWebContactSyncApi",
    "WAWebUserPrefsMultiDevice",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 2e4,
      d = 1e3,
      m = null,
      p = [];
    function _(t) {
      if ((p.push(t), m)) m.debounce(d);
      else {
        var n = new (o("WAShiftTimer").ShiftTimer)(function () {
          if (o("WAWebUserPrefsMultiDevice").isRegistered()) {
            if (
              r("justknobx")._("6839") &&
              !o("WAComms").isCommsInitialized()
            ) {
              (o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[contact-sync] comms not initialized, keeping contacts queued",
                    ])),
                )
                .tags("contact-sync"),
                n.onOrBefore(c));
              return;
            }
            var t = p;
            ((p = []),
              (m = null),
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
        });
        ((m = n), m.onOrBefore(c));
      }
    }
    l.syncNewContact = _;
  },
  98,
);
