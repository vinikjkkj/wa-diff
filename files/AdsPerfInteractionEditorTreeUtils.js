__d(
  "AdsPerfInteractionEditorTreeUtils",
  ["adsCreateSelector", "requireWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    r("requireWeak")("adsMgmtCampaignStructurePanelOpenSelector", function (t) {
      e = t;
    });
    function s() {
      if (e != null)
        return r("adsCreateSelector")(
          [e],
          function (t) {
            return t;
          },
          { name: i.id },
        )();
    }
    l.isCampaignStructureOpen = s;
  },
  98,
);
