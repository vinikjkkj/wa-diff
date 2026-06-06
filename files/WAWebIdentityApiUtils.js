__d(
  "WAWebIdentityApiUtils",
  ["WABinary", "WAWebSignalCommonUtils", "WAWebSignalProtocolStore", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      for (var n = 0; n < e.length && n < t.length; ++n)
        if (e[n] !== t[n]) return e[n] - t[n];
      return e.length - t.length;
    }
    async function s(e) {
      var t = await u(e);
      return t.map(function (t, n) {
        if (t == null)
          throw r("err")(
            "getAllIdentityKeys: missing identity key for device " +
              String(e[n]),
          );
        return t;
      });
    }
    async function u(e) {
      var t = await o("WAWebSignalProtocolStore")
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
    }
    function c(t) {
      var n = new (o("WABinary").Binary)();
      return (
        t.sort(e).forEach(function (e) {
          n.writeByteArray(e);
        }),
        n.readByteArrayView()
      );
    }
    ((l.getAllIdentityKeysBytesOrThrow = s),
      (l.getAllIdentityKeysBytes = u),
      (l.identityKeysToBinary = c));
  },
  98,
);
