__d(
  "genArrayBufferFromFile",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t) {
      return "arrayBuffer" in t
        ? t.arrayBuffer()
        : new (e || (e = n("Promise")))(function (e, n) {
            var r = new FileReader();
            ((r.onload = function () {
              var t = r.result;
              t instanceof ArrayBuffer ? e(t) : n();
            }),
              (r.onerror = function () {
                n(r.error);
              }),
              r.readAsArrayBuffer(t));
          });
    }
    i.default = l;
  },
  66,
);
