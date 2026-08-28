__d(
  "AdsDraftPublishAdsDraftDraftPublishCompletedDataReducerPlugin",
  ["LoadObject", "adsDraftIsApplicationIDPowerEditor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (!r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID))
            return t;
          var e = t.activePublishIDs,
            o = n.response.async_request_set_id;
          return (
            o != null && (e = t.activePublishIDs.remove(o.toString())),
            t.merge({
              active: e.isEmpty()
                ? r("LoadObject").withValue(n.response, {
                    creatorModuleID: i.id,
                  })
                : r("LoadObject")
                    .loading({ creatorModuleID: i.id })
                    .setValue(n.response),
              activePublishIDs: e,
            })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
