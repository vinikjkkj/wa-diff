__d(
  "isValidMKV",
  ["Promise", "readEBMLHeader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = r("readEBMLHeader")(e);
      return t == null
        ? !1
        : t.ebmlMaxIDLength === 4 &&
            t.ebmlMaxSizeLength >= 1 &&
            t.ebmlMaxSizeLength <= 8 &&
            t.docType === "matroska";
    }
    function u(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = new FileReader();
        ((r.onerror = function () {
          return n(r.error);
        }),
          (r.onload = function () {
            var t = r.result;
            t instanceof ArrayBuffer ? e(s(t)) : n();
          }),
          r.readAsArrayBuffer(t));
      });
    }
    l.default = u;
  },
  98,
);
