__d(
  "Page-promotable_page_list_spec-resolver",
  [
    "PagePromotablePageListSpecResolver.graphql",
    "RelayHooks",
    "TypeCoercionUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = {
        id: o("TypeCoercionUtils").coerceMaybeFBIDtoZeroOrFBID(e.id),
        is_instagram_account_backed_page: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_instagram_account_backed_page),
        is_whatsapp_ads_identity: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_whatsapp_ads_identity,
        ),
      };
      return t;
    }
    function u(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("PagePromotablePageListSpecResolver.graphql")),
        t,
      );
      return s(r);
    }
    ((l.coerceGraphQLSpecToGraphAPI = s), (l.promotablepagelist_spec = u));
  },
  98,
);
