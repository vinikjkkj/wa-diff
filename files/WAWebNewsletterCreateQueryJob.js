__d(
  "WAWebNewsletterCreateQueryJob",
  [
    "WAWebMexCreateNewsletterJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterRpcUtils",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.description,
        n = e.name,
        r = e.picture;
      return s(n, t, r);
    }
    async function s(e, t, n) {
      var a;
      n != null && (a = r("WAWebURLUtils").parseDataURL(n).data);
      var i = await o("WAWebNewsletterRpcUtils").runWithBackoff(function () {
        return o("WAWebMexCreateNewsletterJob").mexCreateNewsletter(e, t, a);
      });
      return o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(
        i.xwa2_newsletter_create,
      );
    }
    l.createNewsletterQuery = e;
  },
  98,
);
