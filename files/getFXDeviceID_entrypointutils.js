__d(
  "getFXDeviceID.entrypointutils",
  ["MetaConfig", "getFXClientInterfaceName.entrypoint"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("MetaConfig")._("6") ||
        r("getFXClientInterfaceName.entrypoint")() === "THREADS_WEB"
        ? "device_id_fetch_ig_did"
        : "device_id_fetch_datr";
    }
    var s = e;
    l.default = s;
  },
  98,
);
