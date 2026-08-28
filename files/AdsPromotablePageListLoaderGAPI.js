__d(
  "AdsPromotablePageListLoaderGAPI",
  [
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldType",
    "AdsGraphAPI",
    "AdsManager2026H2ExperimentUtils",
    "AdsPageFields",
    "justknobx",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("justknobx")._("2183"),
      u = null;
    function c() {
      return u;
    }
    function d(e) {
      var t = [];
      return e == null
        ? null
        : (e.searchTerm != null &&
            t.push(
              new (r("AdsGenericFilter"))(
                new (r("AdsGenericFilterField"))(
                  "name_or_id",
                  r("AdsGenericFilterFieldType").STRING,
                ),
                "CONTAIN",
                e.searchTerm,
              ),
            ),
          e.ids != null &&
            t.push(
              new (r("AdsGenericFilter"))(
                new (r("AdsGenericFilterField"))(
                  "id",
                  r("AdsGenericFilterFieldType").STRING_SET,
                ),
                "IN",
                e.ids,
              ),
            ),
          t);
    }
    function m(t, n) {
      var a,
        l = (e || (e = r("performanceAbsoluteNow")))(),
        c = o("AdsGraphAPI")
          .get(i.id)
          .me()
          .edge("facebook_pages")
          .get({
            fields:
              n != null ? n : o("AdsPageFields").getPromotablePageTypeFields(),
            is_promotable: !0,
            filtering:
              (a = d(t)) == null
                ? void 0
                : a.map(function (e) {
                    return e.toAPI();
                  }),
            limit: o(
              "AdsManager2026H2ExperimentUtils",
            ).getShouldUsePromotablePagesLargerPageSize()
              ? 20
              : 10,
          })
          .then(function (t) {
            return {
              response: t,
              duration: (e || (e = r("performanceAbsoluteNow")))() - l,
            };
          });
      return c.then(
        function (e) {
          return ((u = null), e.response);
        },
        s
          ? function (e) {
              throw ((u = e), e);
            }
          : void 0,
      );
    }
    ((l.getPagesGAPIError = c), (l.loadPages = m));
  },
  98,
);
