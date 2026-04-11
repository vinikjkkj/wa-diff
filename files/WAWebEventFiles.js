__d(
  "WAWebEventFiles",
  ["Promise", "WAWebFileUtils", "WAWebImageUtils", "WAWebMiscErrors"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r) {
      var a,
        i = t.target.files || ((a = t.dataTransfer) == null ? void 0 : a.files),
        l = i ? Array.from(i) : [];
      if (r != null && r !== "") {
        var s = typeof r == "string" ? [r] : r,
          u = s.map(function (e) {
            return new RegExp(e);
          });
        l = l.filter(function (e) {
          return u.some(function (t) {
            return e.type.match(t);
          });
        });
      }
      if (l.length) return (e || (e = n("Promise"))).resolve(l);
      var c = t.dataTransfer;
      if (c && c.getData("text/uri-list"))
        return o("WAWebImageUtils")
          .urlToFile(c.getData("text/uri-list"))
          .then(function (e) {
            return [o("WAWebFileUtils").createFile([e], "", { type: e.type })];
          });
      if (c && c.getData("text/html")) {
        var d = new DOMParser(),
          m = d.parseFromString(c.getData("text/html"), "text/html");
        if (
          m.createNodeIterator(m.childNodes[0], NodeFilter.SHOW_TEXT).nextNode()
        ) {
          if (c.getData("text/plain"))
            return (e || (e = n("Promise"))).reject(
              new (o("WAWebMiscErrors").MediaDragDropError)(
                "dropped html has text nodes",
              ),
            );
        } else {
          var p = m.getElementsByTagName("img");
          if (p.length)
            return o("WAWebImageUtils")
              .urlToFile(p[0].src)
              .then(function (e) {
                return [
                  o("WAWebFileUtils").createFile([e], "", { type: e.type }),
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
