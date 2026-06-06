__d(
  "WAWebSyncdHandleKeyRequest",
  ["Promise", "WAWebGetSyncKey", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = [],
            a = [];
          return (
            yield (e || (e = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t =
                        yield o(
                          "WAWebGetSyncKey",
                        ).getSyncKeyInTransaction_DO_NOT_USE(e);
                      t ? r.push(t) : a.push(e);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            { keys: r, orphanKeys: a }
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.getKeysForKeyRequest = s;
  },
  98,
);
