__d(
  "createBPlusTreeFromSorted",
  ["BPlusTree", "ReStoreKeyComparer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      return r("BPlusTree").fromSorted(
        t,
        n === "asc"
          ? (e || (e = o("ReStoreKeyComparer"))).compareKey
          : (e || (e = o("ReStoreKeyComparer"))).compareKeyDesc,
        64,
      );
    }
    l.default = s;
  },
  98,
);
