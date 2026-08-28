__d(
  "adsMgmtTrayStateSelector",
  ["AdsMgmtOpenTrayStore", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [o("AdsMgmtOpenTrayStore").AdsMgmtOpenTrayStore],
        function () {
          return o("AdsMgmtOpenTrayStore").AdsMgmtOpenTrayStore.getTrayState();
        },
        { name: i.id + ".adsMgmtTrayStateSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
