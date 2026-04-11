__d(
  "WAWebStatusContactUtils",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebLidAwareContactsDB",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UserPrefsStatus: staring to getStatusContacts",
                ])),
            ),
            o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd)
          ) {
            var t = yield o("WAWebBackendApi").frontendSendAndReceive(
              "getFilteredContacts",
              { showMe: !1, showWithoutName: !1 },
            );
            return t.map(function (e) {
              return e.id;
            });
          }
          var n = o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).onlyShowLidContacts(),
            a = yield r("WAWebLidAwareContactsDB").equalsPrimaryKeys(
              ["isAddressBookContact"],
              1,
            );
          return a
            .map(function (e) {
              return o("WAWebWidFactory").createWid(e);
            })
            .filter(function (e) {
              return n ? e.isLid() : !e.isLid();
            });
        })),
        u.apply(this, arguments)
      );
    }
    l.getStatusContacts = s;
  },
  98,
);
