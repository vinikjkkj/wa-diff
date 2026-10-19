__d(
  "WAWebEventFiles",
  ["Promise", "WAWebCreateFile", "WAWebImageUtils", "WAWebMediaLoadErrors"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r) {
      var a,
        i = t.target.files,
        l = i || ((a = t.dataTransfer) == null ? void 0 : a.files),
        s = l ? Array.from(l) : [];
      if (r != null && r !== "") {
        var u = typeof r == "string" ? [r] : r,
          c = u.map(function (e) {
            return new RegExp(e);
          });
        s = s.filter(function (e) {
          return c.some(function (t) {
            return e.type.match(t);
          });
        });
      }
      if (s.length) return (e || (e = n("Promise"))).resolve(s);
      var d = t.dataTransfer;
      if (d && d.getData("text/uri-list"))
        return o("WAWebImageUtils")
          .urlToFile(d.getData("text/uri-list"))
          .then(function (e) {
            return [o("WAWebCreateFile").createFile([e], "", { type: e.type })];
          });
      if (d && d.getData("text/html")) {
        var m = new DOMParser(),
          p = m.parseFromString(d.getData("text/html"), "text/html");
        if (
          p.createNodeIterator(p.childNodes[0], NodeFilter.SHOW_TEXT).nextNode()
        ) {
          if (d.getData("text/plain"))
            return (e || (e = n("Promise"))).reject(
              new (o("WAWebMediaLoadErrors").MediaDragDropError)(
                "dropped html has text nodes",
              ),
            );
        } else {
          var _ = p.getElementsByTagName("img");
          if (_.length)
            return o("WAWebImageUtils")
              .urlToFile(_[0].src)
              .then(function (e) {
                return [
                  o("WAWebCreateFile").createFile([e], "", { type: e.type }),
                ];
              });
        }
      }
      return (e || (e = n("Promise"))).resolve([]);
    }
    l.getFiles = s;
  },
  98,
);
