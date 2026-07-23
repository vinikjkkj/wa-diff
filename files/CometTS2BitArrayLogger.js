__d(
  "CometTS2BitArrayLogger",
  [
    "CometTS2BitArrayLoggerMutation.graphql",
    "CurrentAppID",
    "URI",
    "createRelayFBNetworkFetch",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      if (r("gkx")("20047")) {
        var a = o("CurrentAppID").getAppID(),
          i =
            e !== void 0
              ? e
              : (e = n("CometTS2BitArrayLoggerMutation.graphql")),
          l = r("createRelayFBNetworkFetch")({
            graphURI: new (s || (s = r("URI")))("/api/graphql"),
          });
        l(
          i.params,
          {
            app_id: a,
            end_time: t.start_time + t.tos_len - 1,
            start_time: t.start_time,
          },
          {},
        ).subscribe({});
      }
    }
    l.log = u;
  },
  98,
);
