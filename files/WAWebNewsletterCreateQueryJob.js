__d(
  "WAWebNewsletterCreateQueryJob",
  [
    "WAWebMexCreateNewsletterJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterRpcUtils",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.description,
        n = e.name,
        r = e.picture;
      return s(n, t, r);
    }
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          n != null && (a = r("WAWebURLUtils").parseDataURL(n).data);
          var i = yield o("WAWebNewsletterRpcUtils").runWithBackoff(
            function () {
              return o("WAWebMexCreateNewsletterJob").mexCreateNewsletter(
                e,
                t,
                a,
              );
            },
          );
          return o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(
            i.xwa2_newsletter_create,
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.createNewsletterQuery = e;
  },
  98,
);
