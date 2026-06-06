__d(
  "WAWebSyncdResolveConflict",
  [
    "Promise",
    "WASyncdConst",
    "WAWebGetPendingMutation",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var o = yield (e || (e = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = r.get(e.index);
                      if (t) {
                        var n = e.actionHandler;
                        return {
                          remoteMutationIndex: e.index,
                          conflictResolutionState: yield n.resolveConflicts(
                            t,
                            e,
                          ),
                        };
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            a = new Map();
          return (
            o.forEach(function (e) {
              e && a.set(e.remoteMutationIndex, e.conflictResolutionState);
            }),
            a
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [],
            a = [],
            i = yield o(
              "WAWebGetPendingMutation",
            ).getSyncPendingMutationsByCollectionInTransaction(e),
            l = new Map(
              i.map(function (e) {
                return [e.index, e];
              }),
            ),
            u = yield s(t, l);
          t.forEach(function (e) {
            var t = u.get(e.index);
            if (t)
              e: {
                if (t === o("WASyncdConst").ConflictResolutionState.SkipRemote)
                  break e;
                if (
                  t ===
                  o("WASyncdConst").ConflictResolutionState
                    .ApplyRemoteAndDropLocal
                ) {
                  (n.push(e),
                    (a = a.concat(
                      i.filter(function (t) {
                        return t.index === e.index;
                      }),
                    )));
                  break e;
                }
                if (
                  t ===
                  o("WASyncdConst").ConflictResolutionState
                    .SkipRemoteAndDropLocal
                ) {
                  a = a.concat(
                    i.filter(function (t) {
                      return t.index === e.index;
                    }),
                  );
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              }
            else n.push(e);
          });
          for (var c = [], d = 0; d < n.length; d++) {
            var m = n[d].actionHandler,
              p = yield m.dropMutationDueToCrossIndexConflict(n[d], l);
            p || c.push(n[d]);
          }
          var _ = r("compactMap")(a, function (e) {
            return e.id;
          });
          return { remoteMutationsToApply: c, pendingSetMutationsToDrop: _ };
        })),
        d.apply(this, arguments)
      );
    }
    l.resolveConflict = c;
  },
  98,
);
