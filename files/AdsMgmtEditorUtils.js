__d(
  "AdsMgmtEditorUtils",
  ["adsMgmtIsCreationPackageOnePagerSelector", "adsMgmtTrayStateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("adsMgmtTrayStateSelector")();
      return (
        e === "EDITOR_DRAWER" || r("adsMgmtIsCreationPackageOnePagerSelector")()
      );
    }
    l.getIsEditorOpen = e;
  },
  98,
);
