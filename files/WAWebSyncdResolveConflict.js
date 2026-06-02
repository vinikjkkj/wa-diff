__d(
  "WAWebSyncdResolveConflict",
  ["WASyncdConst", "WAWebGetPendingMutation", "compactMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = await Promise.all(
          e.map(async function (e) {
            var n = t.get(e.index);
            if (n) {
              var r = e.actionHandler;
              return {
                remoteMutationIndex: e.index,
                conflictResolutionState: await r.resolveConflicts(n, e),
              };
            }
          }),
        ),
        r = new Map();
      return (
        n.forEach(function (e) {
          e && r.set(e.remoteMutationIndex, e.conflictResolutionState);
        }),
        r
      );
    }
    async function s(t, n) {
      var a = [],
        i = [],
        l = await o(
          "WAWebGetPendingMutation",
        ).getSyncPendingMutationsByCollectionInTransaction(t),
        s = new Map(
          l.map(function (e) {
            return [e.index, e];
          }),
        ),
        u = await e(n, s);
      n.forEach(function (e) {
        var t = u.get(e.index);
        if (t)
          e: {
            if (t === o("WASyncdConst").ConflictResolutionState.SkipRemote)
              break e;
            if (
              t ===
              o("WASyncdConst").ConflictResolutionState.ApplyRemoteAndDropLocal
            ) {
              (a.push(e),
                (i = i.concat(
                  l.filter(function (t) {
                    return t.index === e.index;
                  }),
                )));
              break e;
            }
            if (
              t ===
              o("WASyncdConst").ConflictResolutionState.SkipRemoteAndDropLocal
            ) {
              i = i.concat(
                l.filter(function (t) {
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
        else a.push(e);
      });
      for (var c = [], d = 0; d < a.length; d++) {
        var m = a[d].actionHandler,
          p = await m.dropMutationDueToCrossIndexConflict(a[d], s);
        p || c.push(a[d]);
      }
      var _ = r("compactMap")(i, function (e) {
        return e.id;
      });
      return { remoteMutationsToApply: c, pendingSetMutationsToDrop: _ };
    }
    l.resolveConflict = s;
  },
  98,
);
