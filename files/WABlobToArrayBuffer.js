__d(
  "WABlobToArrayBuffer",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return "arrayBuffer" in t
        ? t.arrayBuffer()
        : new (e || (e = n("Promise")))(function (e, n) {
            var o = new FileReader();
            ((o.onload = function () {
              var t = o.result;
              t instanceof ArrayBuffer
                ? e(t)
                : n(
                    r("err")(
                      "blobToArrayBuffer got error because result is not ArrayBuffer: " +
                        typeof t,
                    ),
                  );
            }),
              (o.onerror = function () {
                var e;
                n(
                  (e = o.error) != null
                    ? e
                    : r("err")("blobToArrayBuffer got unknown error"),
                );
              }),
              o.readAsArrayBuffer(t));
          });
    }
    l.blobToArrayBuffer = s;
  },
  98,
);
