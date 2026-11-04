__d(
  "WAWebSyncPrivacyDisallowedLists",
  [
    "Promise",
    "WAWebQueryPrivacyDisallowedListUtil",
    "WAWebSchemaPrivacyDisallowedList",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield (e || (e = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield o(
                        "WAWebQueryPrivacyDisallowedListUtil",
                      ).queryPrivacyDisallowedList(e);
                      return { type: e, response: t };
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            a = [];
          return (
            r.forEach(function (e) {
              var t = e.response,
                n = t.dhash,
                r = t.status,
                o = t.users;
              r !== "mismatch" ||
                o == null ||
                n == null ||
                a.push({
                  id: e.type,
                  disallowedList: o.map(function (e) {
                    return e.toString();
                  }),
                  dhash: n,
                });
            }),
            yield o("WAWebSchemaPrivacyDisallowedList")
              .getPrivacyDisallowedListTable()
              .bulkCreateOrReplace(a),
            a
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
