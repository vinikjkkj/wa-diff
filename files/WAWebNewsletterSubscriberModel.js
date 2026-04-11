__d(
  "WAWebNewsletterSubscriberModel",
  ["WAWebBaseModel", "WAWebModelUtils", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebModelUtils").prop()),
          (t.membership = o("WAWebModelUtils").prop()),
          (t.isPendingAdmin = o("WAWebModelUtils").prop()),
          (t.contact = o("WAWebModelUtils").session()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "newsletterSubscriber"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterSubscriber = s;
  },
  98,
);
