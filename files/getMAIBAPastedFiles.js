__d(
  "getMAIBAPastedFiles",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return [];
      var t = l(e);
      if (t.length === 0) return [];
      var n = e
          .getData("text/plain")
          .split(/\r?\n/)
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e !== "";
          }),
        r = new Set(
          t.map(function (e) {
            return e.name;
          }),
        );
      return n.every(function (e) {
        return r.has(e);
      })
        ? t
        : [];
    }
    function l(e) {
      var t = Array.from(e.files);
      if (t.length > 0) return t;
      var n = [];
      for (var r of Array.from(e.items))
        if (r.kind === "file") {
          var o = r.getAsFile();
          o != null && n.push(o);
        }
      return n;
    }
    i.default = e;
  },
  66,
);
