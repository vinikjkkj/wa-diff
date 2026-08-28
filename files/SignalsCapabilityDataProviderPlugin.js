__d(
  "SignalsCapabilityDataProviderPlugin",
  ["SignalsCapabilitiesDataManager", "SignalsLaminarHelpers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: o("SignalsLaminarHelpers").createLoadObjectMap(
          o("SignalsCapabilitiesDataManager").genGetAll,
          function (e) {
            return e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
