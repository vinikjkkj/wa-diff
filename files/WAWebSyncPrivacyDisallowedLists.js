__d(
  "WAWebSyncPrivacyDisallowedLists",
  [
    "Promise",
    "WAWebBackendRuntime",
    "WAWebPrivacyService",
    "WAWebQueryPrivacyDisallowedListUtil",
    "WAWebSchemaPrivacyDisallowedList",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = yield (e || (e = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield (
                        o("WAWebBackendRuntime").isWebDiBackendEnabled()
                          ? o("WAWebBackendRuntime").runtime(
                              o("WAWebPrivacyService").PrivacyService,
                            ).queryPrivacyDisallowedList
                          : o("WAWebQueryPrivacyDisallowedListUtil")
                              .queryPrivacyDisallowedList
                      )(e);
                      return { type: e, response: t };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            i = r("compactMap")(a, function (e) {
              var t = e.response,
                n = t.dhash,
                r = t.status,
                a = t.users;
              return r !== "mismatch" || a == null || n == null
                ? null
                : o(
                    "WAWebSchemaPrivacyDisallowedList",
                  ).createPrivacyDisallowedListRow(
                    e.type,
                    a.map(function (e) {
                      return e.toString();
                    }),
                    n,
                  );
            });
          return (
            yield o("WAWebSchemaPrivacyDisallowedList")
              .getPrivacyDisallowedListTable()
              .bulkCreateOrReplace(i),
            i
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield s([e]);
        })),
        d.apply(this, arguments)
      );
    }
    ((l.syncPrivacyDisallowedLists = s),
      (l.syncSinglePrivacyDisallowedList = c));
  },
  98,
);
