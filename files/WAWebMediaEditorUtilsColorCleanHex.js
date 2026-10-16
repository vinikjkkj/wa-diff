__d(
  "WAWebMediaEditorUtilsColorCleanHex",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.trim();
      return (
        t.substring(0, 1) === "#" && (t = t.substring(1).toLowerCase()),
        t
      );
    }
    i.cleanHex = e;
  },
  66,
);
