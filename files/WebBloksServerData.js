__d(
  "WebBloksServerData",
  ["WebBloksFalcoPolicyData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      (e == null ? void 0 : e.falco_log_policy_map) != null &&
        r("WebBloksFalcoPolicyData").add(e.falco_log_policy_map);
    }
    l.handleWebBloksServerData = e;
  },
  98,
);
