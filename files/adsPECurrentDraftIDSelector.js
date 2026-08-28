__d(
  "adsPECurrentDraftIDSelector",
  [
    "AdsAccountStore",
    "AdsDML",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsDraftSelectionStore",
    "LoadObject",
    "RelayHooks",
    "adsCreateStoreSelector",
    "adsPECurrentDraftIDSelectorAccountIDFragment.graphql",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("adsPECurrentDraftIDSelectorAccountIDFragment.graphql")),
      u = r("adsCreateStoreSelector")(
        [r("AdsAccountStore"), r("AdsDraftSelectionStore")],
        function () {
          return c(
            r("AdsAccountStore").getSelectedAccountID(),
            r("AdsDraftSelectionStore"),
          );
        },
        { name: i.id + ".adsPECurrentDraftIDSelector" },
      ),
      c = function (t, n) {
        return r("isTruthy")(t)
          ? n.getCached(t)
          : r("LoadObject").empty({ creatorModuleID: i.id });
      },
      d = r("adsCreateStoreSelector")(
        [r("AdsDraftSelectionStore")],
        function () {
          return r("AdsDraftSelectionStore");
        },
        { name: i.id + ".AdsDraftSelectionStoreSelector" },
      ),
      m = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function () {
        return d.getStores();
      }, d),
      p = o("AdsDML")
        .Query({ name: i.id })
        .Derived(function () {
          var e = m();
          return { AdsDraftSelectionStore: e };
        });
    function _(e) {
      var t = o("AdsDML").useSuspensefulDMLFragment(p),
        n = t.AdsDraftSelectionStore,
        r = o("RelayHooks").useFragment(s, e).account_id;
      return c(r, n);
    }
    ((l.adsPECurrentDraftIDSelector = u), (l.useGetAdsPECurrentDraftID = _));
  },
  98,
);
