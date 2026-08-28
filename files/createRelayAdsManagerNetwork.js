__d(
  "createRelayAdsManagerNetwork",
  [
    "ErrorGuard",
    "LSRelayEnvironmentConfig",
    "chunkArray",
    "combineLatestWith",
    "cr:1110430",
    "cr:3799",
    "cr:8959",
    "processRelayPrefetchURIsPayload",
    "processRelaySRPayload",
    "relay-runtime",
    "withLive",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    n("cr:1110430");
    function s(t, a, i, l, s) {
      var u = t.extensions;
      if (!u || u.__resources_processed === !0) {
        i && i();
        return;
      }
      if (((u.__resources_processed = !0), u.__sr_unprocessed != null))
        throw o("relay-runtime").RelayError.create(
          "GraphQLError",
          "Fatal Error: Found unprocessed static resource payload",
        );
      ((e || (e = r("ErrorGuard"))).applyWithGuard(
        function () {
          var e = u.prefetch_uris_v2;
          ((u.prefetch_uris = null),
            (u.prefetch_uris_v2 = null),
            e != null &&
              Array.isArray(e) &&
              r("processRelayPrefetchURIsPayload")(e));
        },
        null,
        [],
        { name: "RelayFBNetwork: prefetchURIs" },
      ),
        e.applyWithGuard(
          function () {
            var e = u.all_video_dash_prefetch_representations;
            ((u.all_video_dash_prefetch_representations = null),
              (u.video_dash_prefetch_representations = null),
              e != null && Array.isArray(e) && s != null && s(e));
          },
          null,
          [],
          { name: "RelayFBNetwork: prefetchDash" },
        ),
        e.applyWithGuard(
          function () {
            var e = u.sr_payload;
            ((u.sr_payload = null),
              e != null && typeof e == "object"
                ? r("processRelaySRPayload")(e, a, i, function (e) {
                    l && l({ srPayloadStats: e });
                  })
                : i && i());
          },
          null,
          [],
          { name: "RelayFBNetwork: sr_payload" },
        ),
        e.applyWithGuard(
          function () {
            var e = u.dtsg_token;
            e != null &&
              e !== "" &&
              typeof e == "string" &&
              n("cr:8959").setToken(e);
          },
          null,
          [],
          { name: "RelayFBNetwork: dtsg_token" },
        ));
    }
    function u(e, t, a, i) {
      var l = o("relay-runtime").Network.create(e, t),
        u = {
          execute: function (t, n, o, a, u) {
            var e,
              c = r("withLive")(t, o),
              d = (e = o.metadata) == null ? void 0 : e.fetchConfig;
            if (d != null) {
              var m = d.chunkSize,
                p = d.combineResponses,
                _ = r("chunkArray")(Array.from(n.ids), m != null ? m : 5),
                f = _.map(function (e) {
                  return l
                    .execute(
                      t,
                      babelHelpers.extends({}, n, { ids: e }),
                      c,
                      a,
                      u,
                    )
                    .do({
                      next: function (n) {
                        Array.isArray(n)
                          ? n.forEach(function (e) {
                              s(e, t.name, null, u, i);
                            })
                          : s(n, t.name, null, u, i);
                      },
                    });
                }),
                g = r("combineLatestWith").apply(void 0, f);
              return g.map(function (e) {
                return p(e);
              });
            } else
              return l.execute(t, n, c, a, u).do({
                next: function (n) {
                  Array.isArray(n)
                    ? n.forEach(function (e) {
                        s(e, t.name, null, u, i);
                      })
                    : s(n, t.name, null, u, i);
                },
              });
          },
        };
      return o("LSRelayEnvironmentConfig").injectLSRelayHandler(
        u,
        c(n("cr:3799")),
        a,
        n("cr:3799") != null,
      );
    }
    function c() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.filter(Boolean);
      return function (e) {
        r.forEach(function (t) {
          t(e);
        });
      };
    }
    l.default = u;
  },
  98,
);
