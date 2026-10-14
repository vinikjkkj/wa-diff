__d(
  "WAWebCustomerManagerImportPhoneIdentity",
  [
    "WAWebContactImportContactVerifier",
    "WAWebContactImportFileProcessor",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebRunInBatches",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 50;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = Array.from(
              new Set(
                t
                  .map(function (e) {
                    return o(
                      "WAWebContactImportFileProcessor",
                    ).normalizePhoneNumber(e.phone);
                  })
                  .filter(function (e) {
                    return e !== "";
                  }),
              ),
            ),
            a = new Map();
          yield o("WAWebRunInBatches").runInBatches(
            r,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t;
                  try {
                    t = yield o(
                      "WAWebContactImportContactVerifier",
                    ).resolveLidsFromPhones(e, {
                      errorCode: o("WAWebContactSyncErrorCodes")
                        .CUSTOMER_MANAGER_IMPORT_VERIFY,
                      requestOrigin: o("WAWebContactSyncLogger")
                        .SYNC_REQUEST_ORIGIN.CUSTOMER_MANAGER_IMPORT,
                    });
                  } catch (e) {
                    return;
                  }
                  e.forEach(function (e) {
                    var n = t[e];
                    n != null && a.set(e, n);
                  });
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            { batchSize: e },
          );
          var i = new Map();
          return (
            a.forEach(function (e) {
              var t;
              return i.set(e, ((t = i.get(e)) != null ? t : 0) + 1);
            }),
            t.flatMap(function (e) {
              var t = a.get(
                o("WAWebContactImportFileProcessor").normalizePhoneNumber(
                  e.phone,
                ),
              );
              return t != null && i.get(t) === 1
                ? [babelHelpers.extends({}, e, { lid: t })]
                : [];
            })
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.resolveImportedPhoneContacts = s;
  },
  98,
);
