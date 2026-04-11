__d(
  "WAWebLinkPreviewCache",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map();
    function l() {
      return e;
    }
    function s() {
      e.clear();
    }
    var u = new Map();
    function c() {
      return u;
    }
    function d() {
      u.clear();
    }
    ((i.getPreviewCache = l),
      (i.clearPreviewCache = s),
      (i.getNewsletterPreviewCache = c),
      (i.clearNewsletterPreviewCache = d));
  },
  66,
);
