__d(
  "ReStoreCommonUtils",
  ["isPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      function o(n) {
        return n.done
          ? n.value
          : (e || (e = r("isPromise")))(n.value)
            ? n.value.then(function (e) {
                return o(t.next(e));
              })
            : o(t.next(n.value));
      }
      return o(t.next(n));
    }
    l.gen = s;
  },
  98,
);
