__d(
  "WAWebDebugNewsletterSimilar",
  ["WAJids", "WAWebMexFetchSimilarNewslettersJob"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var r;
      (t === void 0 && (t = 10), n === void 0 && (n = ["US"]));
      var a =
        e != null ? e : (r = window.chat) == null ? void 0 : r.id.toString();
      if (a != null)
        var i = o("WAJids").toNewsletterJid(a),
          l = await o(
            "WAWebMexFetchSimilarNewslettersJob",
          ).mexFetchSimilarNewsletters({
            newsletterId: i,
            limit: t,
            countryCodes: n,
          });
    }
    var s = { fetchSimilarNewsletters: e };
    l.default = s;
  },
  98,
);
