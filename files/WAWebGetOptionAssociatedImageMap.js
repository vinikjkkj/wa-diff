__d(
  "WAWebGetOptionAssociatedImageMap",
  ["WAWebPollOptionHashUtils", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = await Promise.all(
        t.map(async function (t) {
          var n = e.name,
            r = t.mediaData.filehash,
            a = await o("WAWebPollOptionHashUtils").generatePollOptionHash(
              n,
              r,
            );
          return [a, t];
        }),
      );
      return new Map(n);
    }
    async function s(t, n) {
      var o = await Promise.all(
        t.map(async function (t) {
          var o = await e(t, n),
            a = r("nullthrows")(t.hash),
            i = r("nullthrows")(o.get(a));
          return [t, i];
        }),
      );
      return new Map(o);
    }
    async function u(e, t) {
      return t.length === 0 ? new Map() : s(e, t);
    }
    l.getOptionAssociatedMsgsMap = u;
  },
  98,
);
