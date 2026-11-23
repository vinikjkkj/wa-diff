__d(
  "WAGetMetaApi",
  ["WASignalDB"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["meta"],
          "readonly",
          function (e) {
            return e.stores.meta
              .bulkGet([
                "certificateChain",
                "deviceId",
                "identityKeyPair",
                "abProps",
                "edgeInfo",
                "clockSkew",
                "authKeyPair",
              ])
              .then(function (e) {
                var t,
                  n,
                  r,
                  o,
                  a,
                  i,
                  l,
                  s = e[0],
                  u = e[1],
                  c = e[2],
                  d = e[3],
                  m = e[4],
                  p = e[5],
                  _ = e[6];
                return {
                  abProps:
                    d == null || (t = d.value) == null ? void 0 : t.abProps,
                  authKeyPair:
                    _ == null || (n = _.value) == null ? void 0 : n.authKeyPair,
                  certificateChain:
                    s == null || (r = s.value) == null
                      ? void 0
                      : r.certificateChain,
                  clockSkew:
                    p == null || (o = p.value) == null ? void 0 : o.clockSkew,
                  deviceId:
                    u == null || (a = u.value) == null ? void 0 : a.deviceId,
                  edgeInfo:
                    m == null || (i = m.value) == null ? void 0 : i.edgeInfo,
                  identityKeyPair:
                    c == null || (l = c.value) == null
                      ? void 0
                      : l.identityKeyPair,
                };
              });
          },
          o("WASignalDB").signalOp("getMeta"),
        );
    };
    l.getMeta = e;
  },
  98,
);
