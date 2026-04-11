__d(
  "RelayAPIConfig",
  ["RelayAPIConfigDefaults", "URI"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = babelHelpers.extends({}, n("RelayAPIConfigDefaults"), {
        DO_NOT_USE_setActorID: function (t) {
          l.actorID = t;
        },
        graphBatchURI:
          n("RelayAPIConfigDefaults").graphBatchURI == null
            ? null
            : new (e || (e = n("URI")))(
                n("RelayAPIConfigDefaults").graphBatchURI,
              ),
        graphURI: new (e || (e = n("URI")))(
          n("RelayAPIConfigDefaults").graphURI,
        ),
        setAPIVersion: function (t) {
          var e;
          ((e = l.graphBatchURI) == null ||
            e.setPath("/" + t + "/graphqlbatch"),
            l.graphURI.setPath("/" + t + "/graphql"));
        },
        setCSRFToken: function (t) {
          var e;
          ((e = l.graphBatchURI) == null || e.setQueryData({ fb_dtsg: t }),
            l.graphURI.setQueryData({ fb_dtsg: t }));
        },
        setSandbox: function (t) {
          var e,
            n = t === "prod" ? "graph" : "graph." + t;
          ((e = l.graphBatchURI) == null || e.setSubdomain(n),
            l.graphURI.setSubdomain(n));
        },
        setWithCredentials: function (t) {
          l.withCredentials = t;
        },
        subscriptionTopicURI:
          n("RelayAPIConfigDefaults").subscriptionTopicURI == null
            ? null
            : new (e || (e = n("URI")))(
                n("RelayAPIConfigDefaults").subscriptionTopicURI,
              ),
      });
    a.exports = l;
  },
  null,
);
