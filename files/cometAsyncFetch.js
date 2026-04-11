__d(
  "cometAsyncFetch",
  ["getCometAsyncFetchResponse"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = { data: {}, method: "GET" }),
        r("getCometAsyncFetchResponse")(e, t).then(function (e) {
          var n;
          return ((n = t) == null ? void 0 : n.getFullPayload) === !0
            ? e == null
              ? void 0
              : e.getFullResponsePayload()
            : e == null
              ? void 0
              : e.getResponsePayload();
        })
      );
    }
    l.default = e;
  },
  98,
);
