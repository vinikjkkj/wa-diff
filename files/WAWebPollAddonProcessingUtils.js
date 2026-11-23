__d(
  "WAWebPollAddonProcessingUtils",
  [
    "WAWebAddonEncryption",
    "WAWebAddonInfraError",
    "WAWebProtobufsE2E.pb",
    "compactMap",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3;
    function s(e, t, n) {
      var r = new Map();
      return (
        e.forEach(function (e) {
          if (e.kind !== n)
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType,
            );
          r.set(e, t.getForAddon(e));
        }),
        r
      );
    }
    async function u(e, t) {
      var n = await Promise.allSettled(e);
      return r("compactMap")(n, function (e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            t(e.reason);
            return;
        }
      });
    }
    function c(e, t, n) {
      if (d(e, t)) throw n();
    }
    function d(t, n) {
      return t != null && n != null && n * e > t;
    }
    async function m(e, t, n) {
      var r = { type: e, encryptedAddOn: t },
        a = await o("WAWebAddonEncryption").decryptAddOn(r, n);
      return {
        arrayBuffer: a,
        protobuf: o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          a,
        ),
      };
    }
    ((l.buildAddonParentMap = s),
      (l.settleAddonResults = u),
      (l.assertPollNotPastEndTime = c),
      (l.isPastPollEndTime = d),
      (l.decryptPollAddonPayload = m));
  },
  98,
);
