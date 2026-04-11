__d(
  "WAWebNewsletterMetadataCollection",
  [
    "Promise",
    "WALogger",
    "WAWebCollectionUtils",
    "WAWebNewsletterMetadataModel",
    "WAWebStaleBaseCollection",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var a, i = arguments.length, l = new Array(i), u = 0; u < i; u++)
            l[u] = arguments[u];
          return (
            (a = t.call.apply(t, [this].concat(l)) || this),
            (a.byInviteCode = o("WAWebCollectionUtils").aggregated(
              function (e) {
                return e.inviteCode;
              },
            )),
            (a.findImpl = function (t) {
              return r("WAWebWid").isNewsletter(t)
                ? (s || (s = n("Promise"))).resolve({ id: t })
                : (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "newsletterMetadata:find trying to fetch non-newsletter wid ",
                        "",
                      ])),
                    t.toString(),
                  ),
                  (s || (s = n("Promise"))).reject(
                    r("err")(
                      "newsletterMetadata:find trying to fetch non-newsletter  wid " +
                        t.toString(),
                    ),
                  ));
            }),
            babelHelpers.assertThisInitialized(a) ||
              babelHelpers.assertThisInitialized(a)
          );
        }
        return (babelHelpers.inheritsLoose(a, t), a);
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = o("WAWebNewsletterMetadataModel").NewsletterMetadata;
    var c = new u();
    l.default = c;
  },
  98,
);
