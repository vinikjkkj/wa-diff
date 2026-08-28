__d(
  "FBWebBloksPrivacyConsentOpenFlow",
  ["FBWebBloksPrivacyConsentController", "WebBloksAsyncActions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c, d, m) {
      var p = "com.bloks.www.consent." + (l != null ? l : "flow.action"),
        _ = { flow_name: n, experience_id: t };
      (a != null && (_.source = a),
        i != null && (_.device_id = i),
        s != null && (_.extra_params_json = s));
      var f = t + "$" + n;
      ((r("FBWebBloksPrivacyConsentController").flowCallbacks[f] = {
        onApproved: u,
        onDenied: c,
        onDismissed: d,
        onBacked: m,
      }),
        (r("FBWebBloksPrivacyConsentController").promptCounters[f] = 0),
        r("FBWebBloksPrivacyConsentController").activeFlowStack.push(f),
        o("WebBloksAsyncActions")
          .executeAsyncAction(e, p, _)
          .catch(function (e) {}));
    }
    l.default = e;
  },
  98,
);
