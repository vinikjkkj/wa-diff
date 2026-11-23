__d(
  "WAWebHandleBusinessNameChangeLidHelpers",
  [
    "WAWebHandleBusinessRemoval",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e
        .map(function (e) {
          var t = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e.id);
          return t.map(function (t) {
            return babelHelpers.extends({}, e, { id: t });
          });
        })
        .reduce(function (e, t) {
          return e.concat(t);
        }, []);
    }
    async function s(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact", "verified-business-name"], function (t) {
          var n = t[0],
            r = t[1],
            a = o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e);
          return Promise.all(
            [].concat(
              a.map(
                o("WAWebHandleBusinessRemoval").removeBusinessPropsFromContact,
              ),
              a.map(function (e) {
                return o("WAWebHandleBusinessRemoval").removeVerifiedName(r, e);
              }),
            ),
          );
        });
    }
    ((l.getVerifiedNamesToUpdateLidAware = e),
      (l.removeVerifiedNameFromTableLidAware = s));
  },
  98,
);
