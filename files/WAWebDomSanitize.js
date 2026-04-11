__d(
  "WAWebDomSanitize",
  ["dompurify"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("dompurify").sanitize(e, {
        ALLOWED_TAGS: ["b", "i", "a", "#text"],
        ALLOWED_ATTR: ["href", "target", "class"],
        KEEP_CONTENT: !1,
      });
    }
    function s(e) {
      return r("dompurify").sanitize(e, {
        ALLOWED_TAGS: ["b", "i", "#text"],
        KEEP_CONTENT: !1,
      });
    }
    function u(e) {
      return (
        r("dompurify").sanitize(e, { ALLOWED_TAGS: [], KEEP_CONTENT: !1 }) !== e
      );
    }
    function c(e) {
      var t = { svg: !0, svgFilters: !0 };
      return r("dompurify").sanitize(e, { USE_PROFILES: t });
    }
    ((l.sanitizeNoticeText = e),
      (l.sanitizeQuickPromotionText = s),
      (l.doesQuickPromotionTextHaveTags = u),
      (l.sanitizeNoticeSVG = c));
  },
  98,
);
