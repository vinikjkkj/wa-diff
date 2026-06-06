__d(
  "WAWebSyncdKeyCallbacksApi",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebKeyManagementSendKeyRequestApi",
    "WAWebKeyManagementSendKeyShareApi",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebApiDeviceList").getMyDeviceList(),
            n = t.currentIndex,
            a = t.devices,
            i = t.rawId;
          if (n == null)
            throw (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] missing current idx for own device, len=",
                    "",
                  ])),
                a == null ? void 0 : a.length,
              ),
              r("err")("syncd: missing current index for own device")
            );
          return {
            currentIndex: n,
            deviceIndexes: a.map(function (e) {
              return e.keyIndex;
            }),
            rawId: i,
          };
        });
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      u = function (t) {
        return o("WAWebKeyManagementSendKeyShareApi").sendAppStateSyncKeyShare({
          type: "key_rotation",
          keys: t,
        });
      };
    ((l.getDeviceFingerprint = s),
      (l.sendSyncdKeyRequest = o(
        "WAWebKeyManagementSendKeyRequestApi",
      ).sendAppStateSyncKeyRequest),
      (l.sendSyncdKeyRotation = u));
  },
  98,
);
