__d(
  "FBWebBloksPrivacyConsentRegisterExperience",
  ["FBWebBloksPrivacyConsentController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l, s, u, c, d) {
      var m;
      (m = r("FBWebBloksPrivacyConsentController")).experienceCallbacks[t] = {
        onApproved: s,
        onDenied: u,
        onDismissed: c,
        onBacked: d,
      };
      var p = t + "$" + n;
      ((m.flowCallbacks[p] = {
        onApproved: s,
        onDenied: u,
        onDismissed: c,
        onBacked: d,
      }),
        (m.promptCounters[p] = 0),
        m.activeFlowStack.push(p));
    }
    l.default = e;
  },
  98,
);
