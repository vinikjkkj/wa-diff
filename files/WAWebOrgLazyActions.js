__d(
  "WAWebOrgLazyActions",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (m = r("WAWebLazyLoadedRetriable"))(
        (d = n("asyncToGeneratorRuntime")).asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebOrgRequestContactAction")
            .__setRef("WAWebOrgLazyActions")
            .load();
        }),
        "OrgRequestContactAction",
        {
          onFinalFailure: function (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-affiliations] request action load failed",
                  ])),
              )
              .catching(n)
              .sendLogs("org-affiliations-request-action-load-failed");
          },
        },
      ),
      _ = m(
        d.asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebOrgFetchDirectoryAction")
            .__setRef("WAWebOrgLazyActions")
            .load();
        }),
        "OrgFetchDirectoryAction",
        {
          onFinalFailure: function (t) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-directory] fetch action load failed",
                  ])),
              )
              .catching(t)
              .sendLogs("org-directory-fetch-action-load-failed");
          },
        },
      ),
      f = m(
        d.asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebOrgSearchMembersAction")
            .__setRef("WAWebOrgLazyActions")
            .load();
        }),
        "OrgMemberSearch",
        {
          onFinalFailure: function (t) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-search] search action load failed",
                  ])),
              )
              .catching(t)
              .sendLogs("org-member-search-action-load-failed");
          },
        },
      ),
      g = m(
        d.asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebOrgMemberSourceQuery")
            .__setRef("WAWebOrgLazyActions")
            .load();
        }),
        "OrgMemberSourceQuery",
        {
          onFinalFailure: function (t) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-members] member query load failed",
                  ])),
              )
              .catching(t)
              .sendLogs("org-member-source-query-load-failed");
          },
        },
      );
    ((l.loadOrgRequestContactAction = p),
      (l.loadOrgFetchDirectoryAction = _),
      (l.loadOrgSearchMembersAction = f),
      (l.loadOrgMemberSourceQuery = g));
  },
  98,
);
