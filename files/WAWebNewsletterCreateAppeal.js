__d(
  "WAWebNewsletterCreateAppeal",
  ["WAJids", "WAWebCreateEnforcementAppealJob", "WAWebL10N", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = e.additionalAppealReason,
        n = e.appealReason,
        a = e.chat,
        i = e.enforcementId;
      if (i == null)
        return Promise.reject(
          r("err")("No enforcement id available while submitting an appeal"),
        );
      var l = r("WAWebL10N").getLocale();
      return o("WAWebCreateEnforcementAppealJob").createEnforcementAppeal({
        newsletterJid: o("WAJids").toNewsletterJid(a.id.toString()),
        enforcementId: i,
        reason: n,
        additionalAppealReason: t,
        locale: l,
      });
    }
    l.createAppeal = e;
  },
  98,
);
