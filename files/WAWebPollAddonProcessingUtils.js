__d(
  "WAWebPollAddonProcessingUtils",
  [
    "Promise",
    "WAWebAddonEncryption",
    "WAWebAddonInfraError",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3;
    function u(e, t, n) {
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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          var a = yield (e || (e = n("Promise"))).allSettled(t);
          return r("compactMap")(a, function (e) {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                o(e.reason);
                return;
            }
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      if (e != null && t != null && t * s > e) throw n();
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = { type: e, encryptedAddOn: t },
            a = yield o("WAWebAddonEncryption").decryptAddOn(r, n);
          return {
            arrayBuffer: a,
            protobuf: o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              a,
            ),
          };
        })),
        _.apply(this, arguments)
      );
    }
    ((l.buildAddonParentMap = u),
      (l.settleAddonResults = c),
      (l.assertPollNotPastEndTime = m),
      (l.decryptPollAddonPayload = p));
  },
  98,
);
