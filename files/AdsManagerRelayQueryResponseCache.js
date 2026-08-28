__d(
  "AdsManagerRelayQueryResponseCache",
  ["DateConsts", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = 10 * o("DateConsts").MS_PER_SEC,
      u = new (o("relay-runtime").QueryResponseCache)({ size: e, ttl: s });
    l.QueryResponseCache = u;
  },
  98,
);
