__d(
  "WAWebChatComparator",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t, n) {
        var e = t.pin || 0,
          r = n.pin || 0;
        if (e || r)
          return e !== r
            ? e > r
              ? -1
              : 1
            : t.id.toString() < n.id.toString()
              ? -1
              : 1;
        var o = Math.max(
            t.previewT || 0,
            t.draftMessageSortTs || 0,
            t.draftAttachMediaContentsSortTs || 0,
            t.t || 0,
          ),
          a = Math.max(
            n.previewT || 0,
            n.draftMessageSortTs || 0,
            n.draftAttachMediaContentsSortTs || 0,
            n.t || 0,
          );
        return o !== a
          ? o > a
            ? -1
            : 1
          : t.id.toString() < n.id.toString()
            ? -1
            : 1;
      },
      l = e;
    i.default = l;
  },
  66,
);
