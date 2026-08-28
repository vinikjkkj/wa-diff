__d(
  "adsPEManageAdsSectionSelector",
  [
    "AdsPEManageCampaignsConstants",
    "adsCreateSelector",
    "adsPENavStateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsPENavStateSelector")],
        function (t) {
          var e = t.section,
            n = t.tool;
          return n === "CREATIVE_REPORTING"
            ? "CREATIVES"
            : o(
                  "AdsPEManageCampaignsConstants",
                ).MANAGE_CAMPAIGNS_TOOLS.includes(n)
              ? e
              : null;
        },
        { name: i.id + ".adsPEManageAdsSectionSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
