__d(
  "BusinessUnifiedNavigationGlobalScopeSelectorDataProviderPlugin",
  ["BusinessUnifiedNavigationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        initialState: {
          globalScopeType: (e = o(
            "BusinessUnifiedNavigationUtils",
          )).getGlobalScopeType(),
          globalScopeID: e.getGlobalScopeID(),
          globalScopeName: e.getGlobalScopeName(),
          businessID: e.getBusinessID(),
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
