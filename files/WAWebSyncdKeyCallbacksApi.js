__d(
  "WAWebSyncdKeyCallbacksApi",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebKeyManagementSendKeyRequestApi",
    "WAWebKeyManagementSendKeyShareApi",
    "WAWebSyncDeviceAdvDeviceListJob",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebApiDeviceList").getMaybeMyDeviceList();
          t == null &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] own device list missing; refreshing before fingerprint",
                ])),
            ),
            yield o("WAWebSyncDeviceAdvDeviceListJob").syncMyDeviceListJob(),
            (t = yield o("WAWebApiDeviceList").getMyDeviceList()));
          var n = t,
            a = n.currentIndex,
            i = n.devices,
            l = n.rawId;
          if (a == null)
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] missing current idx for own device, len=",
                    "",
                  ])),
                i == null ? void 0 : i.length,
              ),
              r("err")("syncd: missing current index for own device")
            );
          return {
            currentIndex: a,
            deviceIndexes: i.map(function (e) {
              return e.keyIndex;
            }),
            rawId: l,
          };
        })),
        c.apply(this, arguments)
      );
    }
    var d = function (t) {
      return o("WAWebKeyManagementSendKeyShareApi").sendAppStateSyncKeyShare({
        type: "key_rotation",
        keys: t,
      });
    };
    ((l.getDeviceFingerprint = u),
      (l.sendSyncdKeyRequest = o(
        "WAWebKeyManagementSendKeyRequestApi",
      ).sendAppStateSyncKeyRequest),
      (l.sendSyncdKeyRotation = d));
  },
  98,
);
