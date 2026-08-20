__d(
  "VideoPlayerNextgendashFetchPoolSM",
  [
    "VideoPlayerNextgendashFetchedResource",
    "VideoPlayerNextgendashStateMachine",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
      null,
      function () {
        return { fetches: new Map(), state: "active" };
      },
      function (e) {
        var t = e.env,
          n = e.event,
          r = e.eventClock,
          a = e.makeChildSm,
          i = e.sendToOther,
          l = e.state;
        if (l.state !== "__disposed__")
          switch (n.type) {
            case "unregister_player": {
              var s = n.playerInstanceKey,
                u = !1;
              return (
                l.fetches.forEach(function (e, t) {
                  e.playerInstanceKey === s && (l.fetches.delete(t), (u = !0));
                }),
                u ? l : void 0
              );
            }
            case "submit_fetch_request": {
              var c = n.onTransitioned,
                d = n.playerInstanceKey,
                m = n.request,
                p = n.trackingID;
              if (l.fetches.has(p)) {
                t.logging.log(t, {
                  error: o("nextgendasherr").nextgendasherr(
                    t,
                    "VideoPlayerNextgendashFetchPoolDuplicateTrackingID",
                    "Duplicate trackingID submitted to pool: %s",
                    p,
                  ),
                  type: "generic_error",
                });
                return;
              }
              var _ = a(
                "fetch-" + p,
                o("VideoPlayerNextgendashFetchedResource")
                  .VideoPlayerNextgendashFetchedResourceSM,
                {
                  onTransitioned: c,
                  request: babelHelpers.extends({}, m, {
                    requestCreatedClock: r,
                  }),
                },
              );
              i(_, { type: "start" });
              var f = {
                fetchedResource: _,
                playerInstanceKey: d,
                startClock: r,
              };
              return (l.fetches.set(p, f), l);
            }
            case "dispose_fetch": {
              var g = n.trackingID,
                h = l.fetches.get(g);
              return h == null ? void 0 : (l.fetches.delete(g), l);
            }
            case "__enter":
            case "__dispose":
              return;
            case "__exception":
              return (
                t.logging.log(t, { error: n.exception, type: "generic_error" }),
                l
              );
          }
      },
    );
    function s(e, t, n) {
      var r = 0;
      return {
        disposeFetch: function (t) {
          n({ trackingID: t, type: "dispose_fetch" });
        },
        getFetchState: function (n) {
          var t = e.state;
          if (t.state !== "active") return null;
          var r = t.fetches.get(n);
          return r == null ? null : r.fetchedResource.state;
        },
        submitFetchRequest: function (o, a) {
          var e = t + "-" + r++;
          return (
            n({
              onTransitioned: a,
              playerInstanceKey: t,
              request: o,
              trackingID: e,
              type: "submit_fetch_request",
            }),
            e
          );
        },
      };
    }
    ((l.VideoPlayerNextgendashFetchPoolSM = e), (l.makeFetchPoolAPI = s));
  },
  98,
);
