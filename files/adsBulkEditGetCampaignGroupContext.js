__d(
  "adsBulkEditGetCampaignGroupContext",
  [
    "AdsBulkEditCampaignGroupContext",
    "AdsBulkEditCampaignGroupEditorContext",
    "AdsUEditorContextFactory",
    "adsMemoizeWithArgs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t.sort().join(",");
      },
      s = r("adsMemoizeWithArgs")(
        function (e) {
          return e.length === 0
            ? r("AdsBulkEditCampaignGroupEditorContext")
            : o("AdsUEditorContextFactory").getForIDs(
                r("AdsBulkEditCampaignGroupContext"),
                e,
                i.id,
              );
        },
        e,
        i.id,
      ),
      u = s;
    l.default = u;
  },
  98,
);
