__d(
  "AdsDraftDraftCurrentDraftLoadedDataReducerPlugin",
  [
    "AdDraftPublishStatuses",
    "LoadObject",
    "adsDraftIsApplicationIDPowerEditor",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (!r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID))
            return t;
          var e = n.draft,
            o = e.publish_status;
          if (o == null) return t;
          switch (o.status) {
            case r("AdDraftPublishStatuses").FAILED:
            case r("AdDraftPublishStatuses").SUCCEEDED:
              return t.set(
                "active",
                r("LoadObject").withValue(o, { creatorModuleID: i.id }),
              );
            case r("AdDraftPublishStatuses").IN_PROGRESS:
              return t.set(
                "active",
                r("LoadObject").loading({ creatorModuleID: i.id }).setValue(o),
              );
          }
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
