__d(
  "canvasToBlob",
  ["Promise", "dataURLToBlob", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, o, a) {
      return new (e || (e = n("Promise")))(function (e, n) {
        if ("toBlob" in t) t.toBlob(e, o, a);
        else {
          var i = t.toDataURL(o, a);
          r("promiseDone")(
            r("dataURLToBlob")(i, o).then(function (t) {
              e(t);
            }, n),
          );
        }
      });
    }
    l.default = s;
  },
  98,
);
