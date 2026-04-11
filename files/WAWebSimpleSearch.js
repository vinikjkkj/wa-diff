__d(
  "WAWebSimpleSearch",
  ["WAWebL10NRemoveAccents"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e == null || e === "") return !1;
      var n = s(e),
        r = t.map(s).flat();
      return n.every(function (e) {
        return r.some(function (t) {
          return t == null ? void 0 : t.startsWith(e);
        });
      });
    }
    function s(e) {
      var t;
      if (e == null) return [];
      var n = String(
        o("WAWebL10NRemoveAccents").removeAccents(
          (t = e.toLocaleLowerCase("en")) == null
            ? void 0
            : t.normalize("NFKD"),
        ),
      );
      return n.split(/\s+/).filter(Boolean);
    }
    l.simpleSearch = e;
  },
  98,
);
