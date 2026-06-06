__d(
  "WAWebZipUtils",
  ["WABinary", "WAWebZip"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await Promise.all(
          e.map(function (e) {
            var t = e.blob;
            return u(t);
          }),
        ),
        n = new (r("WAWebZip"))();
      return (
        t.forEach(function (t, r) {
          return n.add(t, e[r].name);
        }),
        s(n.create())
      );
    }
    function s(e) {
      return new Blob([e.readByteArrayView()], { type: "application/zip" });
    }
    function u(e) {
      var t;
      return new Promise(function (n, r) {
        ((t = new FileReader()),
          t.addEventListener("loadend", function () {
            n(o("WABinary").Binary.build(t.result));
          }),
          t.addEventListener("error", function () {
            r(t.error);
          }),
          t.readAsArrayBuffer(e));
      });
    }
    l.zipFiles = e;
  },
  98,
);
