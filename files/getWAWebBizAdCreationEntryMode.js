__d(
  "getWAWebBizAdCreationEntryMode",
  ["WAWebBizAdCreationEntryMode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.boostID,
        n = e.draftID;
      return n != null && n !== ""
        ? r("WAWebBizAdCreationEntryMode").DRAFT
        : t != null && t !== ""
          ? r("WAWebBizAdCreationEntryMode").RECREATE
          : r("WAWebBizAdCreationEntryMode").NEW;
    }
    l.default = e;
  },
  98,
);
