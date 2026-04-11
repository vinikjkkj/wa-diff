__d(
  "WAWebHandleBusinessNameChangeLidHelpers",
  [
    "Promise",
    "WAWebBizGatingUtils",
    "WAWebHandleBusinessRemoval",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e
        .map(function (e) {
          var t = o("WAWebBizGatingUtils").isLidMigrationForVnameEnabled()
            ? o("WAWebLidMigrationUtils").getPnAndLidToUpdate(e.id)
            : [e.id];
          return t.map(function (t) {
            return babelHelpers.extends({}, e, { id: t });
          });
        })
        .reduce(function (e, t) {
          return e.concat(t);
        }, []);
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["contact", "verified-business-name"], function (r) {
              var a = r[0],
                i = r[1],
                l = o("WAWebBizGatingUtils").isLidMigrationForVnameEnabled()
                  ? o("WAWebLidMigrationUtils").getPnAndLidToUpdate(t)
                  : [t];
              return (e || (e = n("Promise"))).all(
                [].concat(
                  l.map(
                    o("WAWebHandleBusinessRemoval")
                      .removeBusinessPropsFromContact,
                  ),
                  l.map(function (e) {
                    return o("WAWebHandleBusinessRemoval").removeVerifiedName(
                      i,
                      e,
                    );
                  }),
                ),
              );
            });
        })),
        c.apply(this, arguments)
      );
    }
    ((l.getVerifiedNamesToUpdateLidAware = s),
      (l.removeVerifiedNameFromTableLidAware = u));
  },
  98,
);
