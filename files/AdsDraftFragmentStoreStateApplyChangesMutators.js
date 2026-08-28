__d(
  "AdsDraftFragmentStoreStateApplyChangesMutators",
  [
    "invariant",
    "AdsCrepePackageConfigUtil",
    "AdsDraftFragmentStoreStateUtils",
    "AdsMutatorUtils",
    "AdsNewIDs",
    "QPLDraftFragmentMutationLogger",
    "QPLSharing",
    "adsPECrepePackageConfigForAdObjectIDAndLevelSelector",
    "immutable",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a) {
      var i =
        e.getLevel() === "campaignGroup"
          ? e.get(t.objectID)
          : e.getCached(t.objectID);
      if (!i || !i.hasValue() || i.getValue() == null || t.action === "add")
        return t.setPath(n, void 0, a);
      var l = r("nullthrows")(i.getValueEnforcing()),
        s = l[n[0]];
      if (
        ((t = t.setPath(n, s, a)),
        !o("AdsNewIDs").isNewNegativeID(t.fragmentID))
      )
        return t;
      r("justknobx")._("558") ||
        (t = t.set(
          "adCreationPackageConfig",
          r("adsPECrepePackageConfigForAdObjectIDAndLevelSelector")()(
            o("AdsCrepePackageConfigUtil").getObjectIDAndLevelMemoized(
              t.objectID,
              t.objectType,
            ),
          ),
        ));
      var u;
      switch (t.objectType) {
        case "campaign":
          u = "account_id";
          break;
        case "ad_set":
          u = "campaign_id";
          break;
        case "ad":
          u = "adset_id";
          break;
        default:
          return t;
      }
      return t.setPath([u], l[u], l[u]).set("parentAdObjectID", l[u]);
    }
    function u(t, n, r, a) {
      var i = o("AdsDraftFragmentStoreStateUtils").getLiveStore(t);
      return p(t, r, function (t) {
        return e(i, t, n, a);
      });
    }
    function c(t, n, r) {
      for (var o of n) {
        var a = o.newValue;
        (a && a.toJS && (a = a.toJS()), (t = e(r, t, o.path, a)));
      }
      return t.set("validate", !0);
    }
    function d(e, t) {
      return p(e, Array.from(t.keys()), function (n, r) {
        var a = t.get(r);
        return a == null
          ? n
          : c(n, a, o("AdsDraftFragmentStoreStateUtils").getLiveStore(e));
      });
    }
    function m(e, t, n) {
      return p(e, [t], function (t) {
        return c(t, n, o("AdsDraftFragmentStoreStateUtils").getLiveStore(e));
      });
    }
    function p(e, t, n) {
      if (t.length === 0) return e;
      (o("QPLDraftFragmentMutationLogger").markerStart(),
        r("QPLSharing").emitPoint("DRAFT_SYNC", "MUTATE_FRAGMENTS_START"));
      var a = e,
        i = [],
        l = [],
        u = [],
        c = null,
        d = o("AdsDraftFragmentStoreStateUtils").fragmentsMapWithMutations(
          a.fragments,
          function (e) {
            t.forEach(function (t) {
              var d = o("AdsDraftFragmentStoreStateUtils").get(a, t);
              !d.hasOperation() || s(0, 4520, t, d.getOperation());
              var m = d.map(function (e) {
                return n(e, t);
              });
              if (
                !r("immutable").is(d, m) &&
                (e.set(t, m),
                i.push(t),
                d.hasValueWithoutError() && m.hasValueWithoutError())
              ) {
                var p = d.getValueEnforcing(),
                  _ = m.getValueEnforcing();
                p.values !== _.values &&
                  (l.push(p.objectID),
                  u.push(p.fragmentID),
                  (c = p.objectType));
              }
            });
          },
        );
      if (i.length > 0) {
        var m = Date.now(),
          p = a.dirtyIDs.withMutations(function (e) {
            i.forEach(function (t) {
              return e.set(t, m);
            });
          });
        a = a.merge({ fragments: d, dirtyIDs: p });
      }
      return (
        l.length > 0 &&
          r("QPLSharing").emitPoint("DRAFT_SYNC", "FRAGMENT_VALUES_CHANGED", {
            data: {
              string: { adObjectLevel: c },
              string_array: { adObjectIDs: l, fragmentIDs: u },
            },
          }),
        a.fragments !== e.fragments && (a = _(a)),
        r("QPLSharing").emitPoint("DRAFT_SYNC", "MUTATE_FRAGMENTS_END", {
          data: {
            string: { adObjectLevel: c },
            int: { id_count: t.length },
            bool: { fragment_values_changed: l.length > 0 },
            string_array: { changedAdObjectIDs: l, changedFragmentIDs: u },
          },
        }),
        a
      );
    }
    function _(e) {
      var t = e.fragments
          .value()
          .filter(function (t) {
            return (
              t.value &&
              t.value.action === "add" &&
              !(
                t.value.objectID &&
                o("AdsDraftFragmentStoreStateUtils").isDeleted(
                  e,
                  t.value.objectID,
                )
              )
            );
          })
          .toSet()
          .sort(function (e, t) {
            return (
              (e = e.getValueEnforcing()),
              (t = t.getValueEnforcing()),
              e.timeCreated === t.timeCreated
                ? e.fragmentID < t.fragmentID
                  ? 1
                  : -1
                : e.timeCreated > t.timeCreated
                  ? 1
                  : -1
            );
          })
          .groupBy(function (e) {
            return e.getValueEnforcing().accountID;
          })
          .map(function (e) {
            return e.map(function (e) {
              return e.getValueEnforcing().objectID;
            });
          }),
        n = e.fragments
          .value()
          .filter(function (e) {
            return !o("AdsDraftFragmentStoreStateUtils").isFragmentEmpty(
              e.value,
            );
          })
          .groupBy(function (e) {
            return e.getValueEnforcing().accountID;
          });
      return t !== e.newIDs || n !== e.fragmentsInDraftByAccount
        ? e.merge({ newIDs: t, fragmentsInDraftByAccount: n })
        : e;
    }
    function f(e, t, n) {
      var r = new Map();
      return (
        o("AdsMutatorUtils").applyChanges(t, n, function (e, t) {
          r.set(e, t);
        }),
        d(e, r)
      );
    }
    ((l.setPath = u),
      (l.applyChanges = m),
      (l.mutateFragments = p),
      (l.applyChangesFromAdObjectsMutation = f));
  },
  98,
);
