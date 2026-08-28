__d(
  "AdsDraftPublishAdsDraftDraftPublishInProgressDataReducerPlugin",
  ["LoadObject", "adsDraftIsApplicationIDPowerEditor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.response;
          return r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID)
            ? e == null
              ? t.set(
                  "active",
                  r("LoadObject").loading({ creatorModuleID: i.id }),
                )
              : t.set(
                  "active",
                  r("LoadObject")
                    .loading({ creatorModuleID: i.id })
                    .setValue(e),
                )
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
