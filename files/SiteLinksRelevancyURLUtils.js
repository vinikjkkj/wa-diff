__d(
  "SiteLinksRelevancyURLUtils",
  ["ads-lib-urllib", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.trim(),
        n = r("ads-lib-urllib").normalize(
          /^https?:\/\//i.test(t) ? t : "https://" + t,
        );
      try {
        return decodeURI(n);
      } catch (e) {
        return n;
      }
    }
    function s(t, n) {
      return (
        t != null &&
        !r("isStringNullOrEmpty")(t) &&
        n != null &&
        !r("isStringNullOrEmpty")(n) &&
        e(t) === e(n)
      );
    }
    function u(t, n) {
      return (
        t == null ||
        t.trim() === "" ||
        n == null ||
        n.trim() === "" ||
        e(t) === e(n)
      );
    }
    ((l.normalizeSiteLinksRelevancyURL = e),
      (l.isSameSiteLinksRelevancyURL = s),
      (l.isSiteLinksRelevancySourceURLCurrent = u));
  },
  98,
);
