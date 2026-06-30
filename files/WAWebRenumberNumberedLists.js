__d(
  "WAWebRenumberNumberedLists",
  ["Lexical", "WAWebComputeListNumbering"],
  function (t, n, r, o, a, i, l) {
    var e = /^(\d+)(\D[\s\S]*)$/;
    function s() {
      var t = o("Lexical")
          .$getRoot()
          .getChildren()
          .map(function (e) {
            return e.getNumberNode();
          }),
        n = o("WAWebComputeListNumbering").computeListNumbering(
          t.map(function (e) {
            return u(e);
          }),
        );
      t.forEach(function (t, r) {
        var o = n[r];
        if (!(!t || o == null)) {
          var a = t.getTextContent().match(e);
          if (a) {
            var i = "" + o + a[2];
            t.getTextContent() !== i && t.setTextContent(i);
          }
        }
      });
    }
    function u(t) {
      var n = t == null ? void 0 : t.getTextContent().match(e);
      return n ? parseInt(n[1], 10) : null;
    }
    l.$renumberNumberedLists = s;
  },
  98,
);
