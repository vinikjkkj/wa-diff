__d(
  "WAWebQuickPromotionSanitize.react",
  ["dompurify", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return r("dompurify").sanitize(e, {
        ALLOWED_TAGS: ["b", "i", "#text"],
        KEEP_CONTENT: !1,
      });
    }
    function c(e) {
      var t = e.dirty;
      return s.jsx("span", { dangerouslySetInnerHTML: { __html: u(t) } });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
