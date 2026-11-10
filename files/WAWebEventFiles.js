__d(
  "WAWebEventFiles",
  [
    "Promise",
    "WAWebCreateFile",
    "WAWebImageUtils",
    "WAWebMediaDragFiles",
    "WAWebMediaLoadErrors",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, r) {
      var a,
        i = t.target.files,
        l = i || ((a = t.dataTransfer) == null ? void 0 : a.files),
        s = u(l ? Array.from(l) : [], r);
      if (s.length) return (e || (e = n("Promise"))).resolve(s);
      var c = o("WAWebMediaDragFiles").takeMediaDragFiles(t.dataTransfer);
      if (c != null)
        return c.then(function (e) {
          return u(e, r);
        });
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
    function u(e, t) {
      if (t == null || t === "") return e;
      var n = typeof t == "string" ? [t] : t,
        r = n.map(function (e) {
          return new RegExp(e);
        });
      return e.filter(function (e) {
        return r.some(function (t) {
          return e.type.match(t);
        });
      });
    }
    l.getFiles = s;
  },
  98,
);
