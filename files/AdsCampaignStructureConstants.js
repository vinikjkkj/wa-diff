__d(
  "AdsCampaignStructureConstants",
  [
    "AdsObjectTypes",
    "GeoIcon.react",
    "immutable",
    "meta-brand-checkmark-folder-filled-16",
    "meta-brand-dots-four-square-grid-filled-16",
    "meta-brand-square-over-dash-dot-square-filled-16",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = "treenav",
      d = "campaign_structure_tree_root",
      m = r("immutable").Map(
        ((e = {}),
        (e[r("AdsObjectTypes").CAMPAIGN_GROUP] = u.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-checkmark-folder-filled-16")
            .metaBrandCheckmarkFolderFilled16,
        })),
        (e[r("AdsObjectTypes").CAMPAIGN] = u.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-dots-four-square-grid-filled-16")
            .metaBrandDotsFourSquareGridFilled16,
        })),
        (e[r("AdsObjectTypes").ADGROUP] = u.jsx(r("GeoIcon.react"), {
          icon: o("meta-brand-square-over-dash-dot-square-filled-16")
            .metaBrandSquareOverDashDotSquareFilled16,
        })),
        e),
      ),
      p = 100;
    ((l.URL_PARAMETER_KEY = c),
      (l.CAMPAIGN_STRUCTURE_TREE_ROOT_ID = d),
      (l.ICON_MAP = m),
      (l.TREE_LOADING_LIMIT = p));
  },
  98,
);
