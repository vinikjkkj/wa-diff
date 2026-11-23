__d(
  "WAGenReportingMeta",
  ["WAByteArray", "WAFranking", "WAFrankingNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var r = await o(
        "WAFrankingNode",
      ).genFrankingTagFromMessageApplicationEncode(e, t, n);
      return {
        frankingKey: t,
        frankingTag: r,
        frankingVersion: o("WAFranking").getFrankingVersion(n),
        reportingContent: o("WAByteArray").uint8ArrayToBuffer(e),
        reportingTag: null,
      };
    }
    l.genReportingMeta = e;
  },
  98,
);
