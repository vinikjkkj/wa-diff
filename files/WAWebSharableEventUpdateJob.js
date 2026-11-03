__d(
  "WAWebSharableEventUpdateJob",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBSharableEventMetadata",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventServerClient",
    "WAWebSharableEventServerRows",
    "WAWebSharableEventUpdateJobMutation.graphql",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebSharableEventUpdateJobMutation.graphql"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][update] start eventId=",
                " fields=",
                "",
              ])),
            e.event_id,
            _(e),
          ),
            yield o(
              "WAWebSharableEventCredentials",
            ).waitForSharableEventCredentials("update"));
          var n = yield o(
              "WAWebSharableEventServerClient",
            ).mutateSharableEventServer(d, { input: e }),
            a = n.reader,
            i = n.response,
            l =
              i == null || (t = i.xwa_event_update) == null
                ? void 0
                : t.privacy_aware_event,
            m =
              l == null
                ? null
                : o("WAWebSharableEventServerRows").readSharableEventMetadata(
                    a,
                    l,
                  );
          if (m == null)
            throw r("err")(
              "[sharable_event] xwa_event_update returned no event",
            );
          var p = yield o(
              "WAWebDBSharableEventMetadata",
            ).upsertSharableEventMetadataIfNewer([m], { insertMissing: !1 }),
            f = p[0];
          if ((f == null ? void 0 : f.row) == null) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][update] saved eventId=",
                  " but not stored: the stored copy is newer or missing",
                ])),
              e.event_id,
            );
            return;
          }
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][update] saved eventId=",
                "",
              ])),
            e.event_id,
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "applySharableEventUpdate",
              { events: [f.row], inviteeLists: [] },
            ));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return Object.keys(e)
        .filter(function (e) {
          return e !== "event_id" && !e.startsWith("last_updated");
        })
        .join(",");
    }
    l.updateSharableEvent = m;
  },
  98,
);
