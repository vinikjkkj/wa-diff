__d(
  "WAWebSharableEventCreateJob",
  [
    "WALogger",
    "WAWebDBSharableEventMetadata",
    "WAWebSharableEventCreateJobMutation.graphql",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventStoreInvitation",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventCreateJobMutation.graphql"));
    async function c(e) {
      await o("WAWebSharableEventCredentials").waitForSharableEventCredentials(
        "create",
      );
      var t = await o(
          "WAWebSharableEventServerClient",
        ).mutateSharableEventServer(u, { input: e }),
        n = t.reader,
        a = t.response,
        i = a == null ? void 0 : a.xwa_event_create,
        l = i == null ? void 0 : i.privacy_aware_event,
        c =
          l == null
            ? null
            : o("WAWebSharableEventServerRows").readSharableEventMetadata(n, l);
      if (i == null || c == null)
        throw r("err")("[sharable_event] xwa_event_create returned no event");
      var d = c.eventId,
        m = await o(
          "WAWebDBSharableEventMetadata",
        ).upsertSharableEventMetadataIfNewer([c], { insertMissing: !0 }),
        p = m[0];
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][create] created eventId=",
              " stored=",
              "",
            ])),
          d,
          String(p != null),
        ),
        await o(
          "WAWebSharableEventStoreInvitation",
        ).storeAndSendSharableEventInvitation(
          d,
          n,
          i.privacy_aware_invitation,
          p == null ? void 0 : p.row,
        ),
        d
      );
    }
    l.createSharableEvent = c;
  },
  98,
);
