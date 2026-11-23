__d(
  "WAWebBizBroadcastProAudienceWorkerBridge",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")(
      "WAWebBizBroadcastProAudienceSegmentWorker",
    ).__setRef("WAWebBizBroadcastProAudienceWorkerBridge");
    function s(t) {
      return {
        resolveSegment: async function (r) {
          await t;
          var n = await e.load(),
            o = n.resolveProAudienceSegment;
          return o(r);
        },
        queryActivityMetadata: async function (r) {
          var n = r.candidateLids;
          await t;
          var o = await e.load(),
            a = o.queryProAudienceActivityMetadata;
          return a(n);
        },
        queryChatListCatalog: async function (r) {
          await t;
          var n = await e.load(),
            o = n.queryProChatListCatalog;
          return o(r);
        },
        queryChatListAudience: async function (r) {
          await t;
          var n = await e.load(),
            o = n.queryProChatListAudience;
          return o(r);
        },
      };
    }
    l.createProAudienceWorkerHandlers = s;
  },
  98,
);
