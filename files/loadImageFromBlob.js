__d(
  "loadImageFromBlob",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e;
    function l(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = new Image();
        ((r.onload = function () {
          (URL.revokeObjectURL(r.src), e(r));
        }),
          (r.onerror = function (e) {
            (URL.revokeObjectURL(r.src), n(e));
          }),
          (r.src = URL.createObjectURL(t)));
      });
    }
    i.default = l;
  },
  66,
);
