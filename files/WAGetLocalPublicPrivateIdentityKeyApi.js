__d(
  "WAGetLocalPublicPrivateIdentityKeyApi",
  ["WADbSignal", "WALogger", "WASignalDB", "WASignalKeys", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["meta"],
            "readonly",
            async function (t) {
              var n,
                a = await t.stores.meta.get(
                  o("WADbSignal").MetaKeysEnum.identityKeyPair,
                );
              if (
                (a == null || (n = a.value) == null
                  ? void 0
                  : n.identityKeyPair) == null
              ) {
                var i = "[Remote Presence Error] Identity key pair was null";
                throw (
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    i,
                  ),
                  r("err")(i)
                );
              }
              return o("WASignalKeys").toSerializedKeyPair(
                a.value.identityKeyPair,
              );
            },
            o("WASignalDB").signalOp("getLocalPublicPrivateIdentityKey"),
          );
      };
    l.getLocalPublicPrivateIdentityKey = s;
  },
  98,
);
