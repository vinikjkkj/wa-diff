__d(
  "PolarisTrustedDevicesUtils",
  ["FBLogger", "PolarisSiteData", "PolarisWebStorage", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "trusted_devices_storage_version";
    function s(t, n) {
      var o,
        a = c(),
        i = babelHelpers.extends(
          {},
          a,
          ((o = {}),
          (o[t] = { machine_id: r("PolarisSiteData").machine_id, nonce: n }),
          o),
        ),
        l = r("PolarisWebStorage").getLocalStorage();
      if (l)
        try {
          l.setItem(e, JSON.stringify(i));
        } catch (e) {
          r("FBLogger")("ig_web").mustfix("Unable to add trusted device nonce");
        }
    }
    function u(e, t) {
      var n = c(),
        r = n[e];
      r && s(e, t);
    }
    function c() {
      var t = r("PolarisWebStorage").getLocalStorage();
      if (t)
        try {
          var n = t.getItem(e);
          if (!r("isStringNullOrEmpty")(n)) {
            var o = JSON.parse(n);
            for (var a of Object.keys(o))
              o[a].machine_id !== r("PolarisSiteData").machine_id &&
                delete o[a];
            return o;
          }
        } catch (e) {
          r("FBLogger")("ig_web").mustfix(
            "Unable to get trusted device nonces",
          );
        }
      return {};
    }
    ((l.addTrustedDevicesNonce = s),
      (l.updateTrustedDeviceNonce = u),
      (l.getTrustedDevicesNonces = c));
  },
  98,
);
