__d(
  "WAWebIdentityApiUtils",
  [
    "WABinary",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      for (var n = 0; n < e.length && n < t.length; ++n)
        if (e[n] !== t[n]) return e[n] - t[n];
      return e.length - t.length;
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c(e);
          return t.map(function (t, n) {
            if (t == null)
              throw r("err")(
                "getAllIdentityKeys: missing identity key for device " +
                  String(e[n]),
              );
            return t;
          });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .bulkLoadIdentityKey(
              e.map(function (e) {
                return o("WAWebSignalCommonUtils").createSignalAddress(e);
              }),
            );
          return t.map(function (e) {
            return e == null
              ? null
              : new Uint8Array(o("WAWebSignalCommonUtils").strToBuffer(e));
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      var n = new (o("WABinary").Binary)();
      return (
        t.sort(e).forEach(function (e) {
          n.writeByteArray(e);
        }),
        n.readByteArrayView()
      );
    }
    ((l.getAllIdentityKeysBytesOrThrow = s),
      (l.getAllIdentityKeysBytes = c),
      (l.identityKeysToBinary = m));
  },
  98,
);
