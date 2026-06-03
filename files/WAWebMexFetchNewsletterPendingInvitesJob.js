__d(
  "WAWebMexFetchNewsletterPendingInvitesJob",
  [
    "WALogger",
    "WAWebMexClient",
    "WAWebMexFetchNewsletterPendingInvitesJobQuery.graphql",
    "WAWebNewsletterGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterPendingInvitesJobQuery.graphql"));
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = { newsletter_id: e };
          if (!o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled())
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[mexFetchNewsletterPendingInvites] creation gating off",
                    ])),
                )
                .tags("newsletter"),
              null
            );
          var a = yield o("WAWebMexClient").fetchQuery(c, n);
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][NEWSLETTER] fetched pending invites for ",
                  "",
                ])),
              e,
            )
            .tags("GQL", "MEX");
          var i =
              (t = a.xwa2_newsletter_admin) == null
                ? void 0
                : t.pending_admin_invites,
            l =
              i != null
                ? r("compactMap")(i, function (e) {
                    var t,
                      n,
                      r,
                      a =
                        (t =
                          e == null || (n = e.user) == null ? void 0 : n.pn) !=
                        null
                          ? t
                          : e == null || (r = e.user) == null
                            ? void 0
                            : r.id;
                    return a != null ? o("WAWebWidFactory").createWid(a) : null;
                  })
                : void 0;
          return l;
        })),
        m.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterPendingInvites = d;
  },
  98,
);
