__d(
  "WAWebNewsletterReportCollection",
  ["WAWebBaseCollection", "WAWebNewsletterReportModel"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        var e,
          r,
          o =
            ((e = n.appeal.creationTime) != null ? e : 0) -
            ((r = t.appeal.creationTime) != null ? r : 0);
        return o !== 0 ? o : n.creationTime - t.creationTime;
      },
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = o("WAWebNewsletterReportModel").NewsletterReport),
      (s.comparator = e));
    var u = new s();
    l.NewsletterReportCollection = u;
  },
  98,
);
