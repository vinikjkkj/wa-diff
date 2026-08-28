__d(
  "AdsDraftFragmentStoreStateUtils",
  [
    "AdsAccountStore",
    "AdsDraftFragmentRecord",
    "AdsDraftSyncUtils",
    "AdsLoadState_LEGACY",
    "AdsNewIDs",
    "FBLogger",
    "LoadObject",
    "adsDraftIsDeleted",
    "immutable",
    "nullthrows",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.value = function () {
          return this.$1;
        }),
        (t.mutate = function (t) {
          return ((this.$1 = t), this);
        }),
        (t.immutableUpdate = function (n) {
          return n !== this.$1 ? new e(n) : this;
        }),
        e
      );
    })();
    function s() {
      var t;
      return {
        dirtyIDs: (t = r("immutable")).Map(),
        draftID: null,
        draftHasError: !1,
        fragmentsInDraftByAccount: t.Map(),
        isLoading: !1,
        loadState: r("AdsLoadState_LEGACY").NOT_LOADED,
        newIDs: t.Map(),
        fragments: new e(t.Map()),
        lastSyncTime: new e(0),
      };
    }
    var u = r("immutable").Record(
      babelHelpers.extends({}, s(), {
        objectType: null,
        liveStore: null,
        adsApplicationID: null,
      }),
    );
    function c(e, t, n) {
      return u(
        babelHelpers.extends({}, s(), {
          objectType: e,
          liveStore: t,
          adsApplicationID: n,
        }),
      );
    }
    var d = r("immutable").Map();
    function m(e) {
      return !e || (e.values.size === 0 && e.action !== "delete");
    }
    var p = 1e3,
      _ = 750;
    function f(e) {
      var t = e.fragments.value();
      if (!(t.size <= p) && r("qex")._("994")) {
        var n = e.dirtyIDs,
          o = t.size - _,
          a = t.withMutations(function (e) {
            t.forEach(function (t, r) {
              if (!(o <= 0)) {
                var a = t.value;
                a != null &&
                  !t.isLoading() &&
                  !n.has(r) &&
                  a.action === "modify" &&
                  m(a) &&
                  (e.delete(r), o--);
              }
            });
          });
        e.fragments.mutate(a);
      }
    }
    function g(e, t) {
      if (e.draftHasError)
        return r("LoadObject")
          .empty({ creatorModuleID: i.id })
          .setError(null)
          .setValue(
            new (r("AdsDraftFragmentRecord"))({
              objectID: t,
              objectType: e.objectType,
            }),
          );
      var n = e.fragments.value().get(t),
        a = r("AdsAccountStore").getSelectedAccountID() == null;
      return e.isLoading || a
        ? (n ||
            ((n = r("LoadObject")
              .loading({ creatorModuleID: i.id })
              .setValue(
                new (r("AdsDraftFragmentRecord"))({
                  objectID: t,
                  objectType: e.objectType,
                }),
              )),
            e.fragments.mutate(e.fragments.value().set(t, n))),
          n)
        : ((!n || n.isLoading()) &&
            ((n = r("LoadObject").withValue(
              new (r("AdsDraftFragmentRecord"))({
                accountID: r("AdsAccountStore").getSelectedAccountID(),
                action: "modify",
                fragmentID: "" + o("AdsNewIDs").newNegativeID(),
                objectID: t,
                objectType: e.objectType,
              }),
              { creatorModuleID: i.id },
            )),
            e.fragments.mutate(e.fragments.value().set(t, n)),
            f(e)),
          n);
    }
    function h(e, t) {
      return r("nullthrows")(g(e, t).value);
    }
    function y(e) {
      return e.objectType;
    }
    function C(e) {
      return e.liveStore;
    }
    function b(e, t) {
      return r("immutable").Map(
        t.map(function (t) {
          return [t, g(e, t)];
        }),
      );
    }
    function v(e, t) {
      return h(e, t).parentAdObjectID;
    }
    function S(e, t) {
      var n = e.fragments.value().get(t);
      return !!n && !m(n.value);
    }
    function R(e, t) {
      return h(e, t).getChangedFields();
    }
    function L(e) {
      var t = e.fragments.value();
      return e.dirtyIDs
        .keySeq()
        .map(function (e) {
          var n;
          return (n = t.get(e)) == null ? void 0 : n.value;
        })
        .filter(Boolean)
        .toSet();
    }
    function E(e, t) {
      return L(e).filter(function (e) {
        return e.accountID === t;
      });
    }
    function k(e, t) {
      return e.newIDs.get(t, r("immutable").OrderedSet());
    }
    function I(e, t) {
      return e.fragmentsInDraftByAccount.has(t)
        ? e.fragmentsInDraftByAccount.get(t, d)
        : d;
    }
    function T(e, t) {
      return e.fragments
        .value()
        .filter(function (e) {
          return !e.isLoading() && e.hasValue();
        })
        .map(function (e) {
          return e.getValueEnforcing();
        })
        .filter(function (e) {
          return t.includes(e.validationStatus);
        })
        .toArray();
    }
    function D(e, t) {
      return h(e, t).action === "add";
    }
    function x(e, t) {
      return h(e, t).source;
    }
    function $(e, t) {
      return b(e, t).some(function (e) {
        var t;
        return ((t = e.value) == null ? void 0 : t.action) === "add";
      });
    }
    function P(e, t) {
      var n = h(e, t);
      return !n.fragmentID || o("AdsNewIDs").isNewNegativeID(n.fragmentID);
    }
    function N(e, t) {
      var n = h(e, t),
        r = n == null ? void 0 : n.publishStatus;
      return (
        (n == null ? void 0 : n.action) === "add" &&
        (r == null || ["INITIAL", "IN_PROGRESS"].includes(r))
      );
    }
    function M(e, t) {
      return r("adsDraftIsDeleted")(h(e, t));
    }
    function w(e, t) {
      return h(e, t).timeCreated;
    }
    function A(e, t) {
      return e.immutableUpdate(e.value().withMutations(t));
    }
    function F(e, t, n) {
      var a = e.dirtyIDs,
        i = t.dirtyIDs,
        l = i.some(function (e, n) {
          var r = h(t, n);
          return a.has(r.objectID)
            ? !1
            : o("AdsDraftSyncUtils").getSyncAction(r) === "BLANK_IGNORE";
        });
      l &&
        r("FBLogger")("ads_draft_sync")
          .addToCategoryKey(n.actionType)
          .blameToModule(n._dispatchModuleID)
          .warn(
            "%s should not create dirty blank_ignore fragments as a result of handling its dispatch! This will cause later publishes to get stuck.",
            n.actionType,
          );
    }
    ((l.create = c),
      (l.isFragmentEmpty = m),
      (l.get = g),
      (l.getRaw = h),
      (l.getObjectType = y),
      (l.getLiveStore = C),
      (l.getAll = b),
      (l.getParentID = v),
      (l.hasDraft = S),
      (l.getChangedFields = R),
      (l.getDirty = L),
      (l.getDirtyFor = E),
      (l.getNewIDsFor = k),
      (l.getFragmentsInDraftFor = I),
      (l.getFragmentsInDraftWithValidationStatusFor = T),
      (l.isNew = D),
      (l.getSource = x),
      (l.isSomeNew = $),
      (l.isNewFragment = P),
      (l.isNewDraftFragmentWithoutPublishAttempt = N),
      (l.isDeleted = M),
      (l.getTimeCreated = w),
      (l.fragmentsMapWithMutations = A),
      (l.validateStoreStateAfterMutations = F));
  },
  98,
);
