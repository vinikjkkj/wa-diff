__d(
  "WAWebStatusContactUtils",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "UserPrefsStatus: staring to getStatusContacts",
            ])),
        ),
        o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd)
      ) {
        var t = await o("WAWebBackendApi").frontendSendAndReceive(
          "getFilteredContacts",
          { showMe: !1, showWithoutName: !1 },
        );
        return t.map(function (e) {
          return e.id;
        });
      }
      var n = await r("WAWebLidAwareContactsDB").equalsPrimaryKeys(
        ["isAddressBookContact"],
        1,
      );
      return n
        .map(function (e) {
          return o("WAWebWidFactory").createWid(e);
        })
        .filter(function (e) {
          return e.isLid();
        });
    }
    l.getStatusContacts = s;
  },
  98,
);
