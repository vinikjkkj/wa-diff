__d(
  "WAWebQueryGroupActionMaybeQueryGroupDevice",
  [
    "WALogger",
    "WAWebGroupMetadataGetters",
    "WAWebPnhCagUtils",
    "WAWebSyncDeviceAdvDeviceListJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      if (t.deviceStale) {
        if (t.deviceQueryPromise)
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeQueryGroupDevice: ",
                  " - skip duplicate query",
                ])),
              t.id,
            ),
            t.deviceQueryPromise
          );
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "maybeQueryGroupDevice: ",
              " - start query device",
            ])),
          t.id,
        );
        var n = o("WAWebGroupMetadataGetters").getIsCag(t)
          ? o("WAWebPnhCagUtils").augmentedCagGroupMetadataParticipantList(t)
          : t.participants.map(function (e) {
              return e.id;
            });
        t.deviceQueryPromise = o(
          "WAWebSyncDeviceAdvDeviceListJob",
        ).syncDeviceListJob(n);
        try {
          (await t.deviceQueryPromise,
            (t.deviceStale = !1),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeQueryGroupDevice: ",
                  " - complete query device",
                ])),
              t.id,
            ));
        } finally {
          t.deviceQueryPromise = null;
        }
      }
    }
    l.maybeQueryGroupDevice = c;
  },
  98,
);
