__d(
  "WormPromise",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l =
        typeof self == "object"
          ? self.Promise
          : typeof globalThis == "object"
            ? globalThis.Promise
            : e || (e = n("Promise"));
    i.WormPromise = l;
  },
  66,
);
