__d(
  "WAWebDebugContacts",
  [
    "WALogger",
    "WAWebContactSyncBridge",
    "WAWebNonAddressBookContactsJob",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { delaySaveMs: 0, simulateErrorOnSaveOrDeleteContact: null };
    function m(e) {
      (e === void 0 && (e = 1e4), (d.delaySaveMs = Math.max(e, 0)));
    }
    function p(e) {
      var t = e == null ? void 0 : e.toUpperCase();
      if (t !== "USYNC" && t !== "NETWORK" && t !== "CLIENT")
        throw r("err")("Unsupported error type");
      d.simulateErrorOnSaveOrDeleteContact = t;
    }
    function _(t) {
      return (
        t === void 0 && (t = !0),
        t
          ? o("WAWebNonAddressBookContactsJob")
              .getAndUpdateNonAddressBookContacts()
              .catch(function (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to sync non-address book contacts with error: ",
                      "",
                    ])),
                  t,
                );
              })
              .then(function () {
                return o("WAWebContactSyncBridge").doFullContactSync(!1);
              })
              .catch(function (e) {
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "contact sync failed: ",
                      "",
                    ])),
                  e,
                );
              })
          : o("WAWebContactSyncBridge").doFullContactSync(!1)
      );
    }
    _.doc = "Sync Contacts (initial sync)";
    function f(e) {
      return (
        e === void 0 && (e = !0),
        e
          ? o("WAWebNonAddressBookContactsJob")
              .getNonAddressBookContactsAndMarkAllContactsDirty()
              .catch(function (e) {
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to sync non-address book contacts with error: ",
                      "",
                    ])),
                  e,
                );
              })
              .then(function () {
                return o("WAWebContactSyncBridge").doFullContactSync(!1);
              })
              .catch(function (e) {
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "contact sync failed: ",
                      "",
                    ])),
                  e,
                );
              })
          : o("WAWebContactSyncBridge").doFullContactSync(!1)
      );
    }
    f.doc = "Sync Contacts (periodic full sync)";
    var g = {
      delaySaveContactAction: m,
      simulateErrorOnSaveOrDeleteContact: p,
      debugConfigs: d,
      syncContact: _,
      syncContactPeriodicFullSync: f,
    };
    l.default = g;
  },
  98,
);
