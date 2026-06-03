__d(
  "WAWebZipUtils",
  ["Promise", "WABinary", "WAWebZip", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var o = yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                var t = e.blob;
                return d(t);
              }),
            ),
            a = new (r("WAWebZip"))();
          return (
            o.forEach(function (e, n) {
              return a.add(e, t[n].name);
            }),
            c(a.create())
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return new Blob([e.readByteArrayView()], { type: "application/zip" });
    }
    function d(t) {
      var r;
      return new (e || (e = n("Promise")))(function (e, n) {
        ((r = new FileReader()),
          r.addEventListener("loadend", function () {
            e(o("WABinary").Binary.build(r.result));
          }),
          r.addEventListener("error", function () {
            n(r.error);
          }),
          r.readAsArrayBuffer(t));
      });
    }
    l.zipFiles = s;
  },
  98,
);
