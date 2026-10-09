__d(
  "WAWebOrgMemberSearchLoader",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return r("JSResourceForInteraction")("WAWebOrgMemberSearchModel")
          .__setRef("WAWebOrgMemberSearchLoader")
          .load();
      }),
      "OrgMemberSearch",
    );
    l.loadOrgMemberSearch = e;
  },
  98,
);
