__d(
  "selectMAIBAAdDraftEditorBodyBlocks",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [];
    function l(t, n, r, o) {
      var a = n.length > 0 ? n : r;
      return a.length > 0
        ? a
        : t === "boost" || t === "ig" || t === "ads_manager"
          ? e
          : o();
    }
    i.default = l;
  },
  66,
);
