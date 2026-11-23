__d(
  "WAWebSyncdKeyCallbacksApi",
  [
    "WALogger",
    "WAWebApiDeviceList",
    "WAWebKeyManagementSendKeyRequestApi",
    "WAWebKeyManagementSendKeyShareApi",
    "WAWebSyncDeviceAdvDeviceListJob",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      var t = await o("WAWebApiDeviceList").getMaybeMyDeviceList();
      t == null &&
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[syncd] own device list missing; refreshing before fingerprint",
            ])),
        ),
        await o("WAWebSyncDeviceAdvDeviceListJob").syncMyDeviceListJob(),
        (t = await o("WAWebApiDeviceList").getMyDeviceList()));
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
    }
    var c = function (t) {
      return o("WAWebKeyManagementSendKeyShareApi").sendAppStateSyncKeyShare({
        type: "key_rotation",
        keys: t,
      });
    };
    ((l.getDeviceFingerprint = u),
      (l.sendSyncdKeyRequest = o(
        "WAWebKeyManagementSendKeyRequestApi",
      ).sendAppStateSyncKeyRequest),
      (l.sendSyncdKeyRotation = c));
  },
  98,
);
