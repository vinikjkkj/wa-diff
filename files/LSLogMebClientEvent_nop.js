__d(
  "LSLogMebClientEvent.nop",
  ["I64", "LSVec", "MebClientLogsFalcoEvent", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (a, i, l, u, c, d) {
        return (
          r("MebClientLogsFalcoEvent").log(function () {
            return {
              calling_class: l,
              device_family_id: void 0,
              device_registration_id: void 0,
              log_level: (s || (s = o("I64"))).to_string(d),
              msg: u,
              trace_ids: r("LSVec").toArray(c),
            };
          }),
          (e || (e = n("Promise"))).resolve()
        );
      };
    ((u.__nop_name__ = "LSLogMebClientEvent"), (l.default = u));
  },
  98,
);
