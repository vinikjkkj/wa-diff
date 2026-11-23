__d(
  "WAMFlowsImageUtils",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = new FileReader();
        (r.readAsBinaryString(t),
          (r.onload = function () {
            return e(window.btoa(r.result));
          }),
          (r.onerror = n));
      });
    }
    i.fileToBase64 = l;
  },
  66,
);
