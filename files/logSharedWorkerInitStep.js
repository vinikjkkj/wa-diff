__d(
  "logSharedWorkerInitStep",
  ["SharedWorkerInitFalcoEvent", "SiteData", "gkx", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("uuidv4")();
    function s(t, n, o, a) {
      r("gkx")("21115") &&
        r("SharedWorkerInitFalcoEvent").log(function () {
          return {
            client_id: e,
            bundle_name: t,
            client_rev: String(r("SiteData").client_revision),
            local_shared_worker_ref:
              n != null
                ? {
                    bundle_url: n.url,
                    rev: String(n.rev),
                    spin_time: String(n.spin_time),
                  }
                : null,
            new_shared_worker_ref: o != null ? { bundle_url: o } : null,
            init_step: a,
          };
        });
    }
    l.default = s;
  },
  98,
);
