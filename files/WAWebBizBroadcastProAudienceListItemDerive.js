__d(
  "WAWebBizBroadcastProAudienceListItemDerive",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "UPDATING";
    function l(t) {
      var n = [];
      for (var r of t) {
        var o;
        if (!(r == null || r.id == null)) {
          var a = r.operation_status_code === e;
          n.push({
            audienceSize: r.subscriber_size,
            id: r.id,
            isIngesting: a,
            isRecipientCountPending: a,
            name: (o = r.name) != null ? o : "",
          });
        }
      }
      return n;
    }
    ((i.PRO_AUDIENCE_INGESTING_STATUS_CODE = e),
      (i.deriveProAudienceListItems = l));
  },
  66,
);
