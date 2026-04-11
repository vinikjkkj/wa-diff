__d(
  "createRelayFBNetwork",
  [
    "ErrorGuard",
    "cr:1110430",
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
    function s(t, a, i, l, s, u) {
      var c = t.extensions;
      if (!c || c.__resources_processed === !0) {
        i && i();
        return;
      }
      if (((c.__resources_processed = !0), c.__sr_unprocessed != null))
        throw o("relay-runtime").RelayError.create(
          "GraphQLError",
          "Fatal Error: Found unprocessed static resource payload",
        );
      ((e || (e = r("ErrorGuard"))).applyWithGuard(
        function () {
          var e = c.prefetch_uris_v2;
          ((c.prefetch_uris = null),
            (c.prefetch_uris_v2 = null),
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
            var e = c.all_video_dash_prefetch_representations;
            ((c.all_video_dash_prefetch_representations = null),
              (c.video_dash_prefetch_representations = null),
              e != null && Array.isArray(e) && u != null && u(e));
          },
          null,
          [],
          { name: "RelayFBNetwork: prefetchDash" },
        ),
        e.applyWithGuard(
          function () {
            var e = c.sr_payload;
            ((c.sr_payload = null),
              e != null && typeof e == "object"
                ? r("processRelaySRPayload")(e, a, i, function (e) {
                    s && s({ srPayloadStats: e });
                  })
                : i && i());
          },
          null,
          [],
          { name: "RelayFBNetwork: sr_payload" },
        ),
        e.applyWithGuard(
          function () {
            var e = c.dtsg_token;
            e != null &&
              e !== "" &&
              typeof e == "string" &&
              n("cr:8959").setToken(e);
          },
          null,
          [],
          { name: "RelayFBNetwork: dtsg_token" },
        ),
        e.applyWithGuard(
          function () {
            var e = c.prefetch_comet_routing;
            if (
              ((c.prefetch_comet_routing = null),
              l != null && e != null && typeof e == "object")
            ) {
              var t = e.data,
                n = e.uris;
              (t != null || n != null) && l(n, t);
            }
          },
          null,
          [],
          { name: "RelayFBNetwork: prefetch_comet_routing" },
        ));
    }
    function u(e, t, n, a) {
      var i = o("relay-runtime").Network.create(e, t);
      return {
        execute: function (t, o, l, u, c) {
          var e = r("withLive")(t, l);
          return i.execute(t, o, e, u, c).do({
            next: function (r) {
              Array.isArray(r)
                ? r.forEach(function (e) {
                    s(e, t.name, null, n, c, a);
                  })
                : s(r, t.name, null, n, c, a);
            },
          });
        },
      };
    }
    l.default = u;
  },
  98,
);
