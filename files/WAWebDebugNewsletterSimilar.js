__d(
  "WAWebDebugNewsletterSimilar",
  ["WAJids", "WAWebMexFetchSimilarNewslettersJob", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var a;
      (t === void 0 && (t = 10),
        n === void 0 && (n = ["US"]),
        r("vulture")("tKvzdT7tV_RF_q-HHwd6JEe5J9g="));
      var i =
        e != null ? e : (a = window.chat) == null ? void 0 : a.id.toString();
      if (i != null)
        var l = o("WAJids").toNewsletterJid(i),
          s = await o(
            "WAWebMexFetchSimilarNewslettersJob",
          ).mexFetchSimilarNewsletters({
            newsletterId: l,
            limit: t,
            countryCodes: n,
          });
    }
    var s = { fetchSimilarNewsletters: e };
    l.default = s;
  },
  98,
);
