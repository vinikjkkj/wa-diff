__d(
  "WAWebCustomerManagerImportPhoneIdentity",
  [
    "WAWebContactImportContactVerifier",
    "WAWebContactImportFileProcessor",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebRunInBatches",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 50;
    async function s(t) {
      var n = Array.from(
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
        r = new Map();
      await o("WAWebRunInBatches").runInBatches(
        n,
        async function (e) {
          var t;
          try {
            t = await o(
              "WAWebContactImportContactVerifier",
            ).resolveLidsFromPhones(e, {
              errorCode: o("WAWebContactSyncErrorCodes")
                .CUSTOMER_MANAGER_IMPORT_VERIFY,
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .CUSTOMER_MANAGER_IMPORT,
            });
          } catch (e) {
            return;
          }
          e.forEach(function (e) {
            var n = t[e];
            n != null && r.set(e, n);
          });
        },
        { batchSize: e },
      );
      var a = new Map();
      return (
        r.forEach(function (e) {
          var t;
          return a.set(e, ((t = a.get(e)) != null ? t : 0) + 1);
        }),
        t.flatMap(function (e) {
          var t = r.get(
            o("WAWebContactImportFileProcessor").normalizePhoneNumber(e.phone),
          );
          return t != null && a.get(t) === 1
            ? [babelHelpers.extends({}, e, { lid: t })]
            : [];
        })
      );
    }
    l.resolveImportedPhoneContacts = s;
  },
  98,
);
