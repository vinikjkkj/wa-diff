__d(
  "WAWebNewsletterValidationUtils",
  ["WAJids", "WALogger", "WAWebNewsletterErrors"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return (u(e), o("WAJids").toNewsletterJid(e));
    }
    function u(t) {
      var n = o("WAJids").validateNewsletterJid(t) != null;
      if (!n)
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " is not a valid newsletter JID",
              ])),
            t,
          ),
          new (o("WAWebNewsletterErrors").UnexpectedNonNewsletterJidError)()
        );
    }
    ((l.toNewsletterJidOrThrow = s), (l.validateNewsletterJidOrThrow = u));
  },
  98,
);
