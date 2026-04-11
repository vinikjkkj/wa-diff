__d(
  "WAWebDataLink",
  ["WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = document.createElement("a"),
        n = r("WAWebURLUtils").isBlob(e) || r("WAWebURLUtils").isData(e);
      return ((t.href = n ? e : ""), t);
    }
    l.createDataLink = e;
  },
  98,
);
