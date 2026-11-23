__d(
  "applyMAIBAMMAPlatformNavigationCapability",
  ["MAIBASurfaceGraphQL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.inlined_context == null) return e;
      var n =
        t === r("MAIBASurfaceGraphQL").ADS_MANAGER ||
        t === r("MAIBASurfaceGraphQL").META_BUSINESS_SUITE ||
        t === r("MAIBASurfaceGraphQL").BUSINESS_HELP_CENTER ||
        t === r("MAIBASurfaceGraphQL").BUSINESS_SUPPORT_HOME;
      return babelHelpers.extends({}, e, {
        inlined_context: babelHelpers.extends({}, e.inlined_context, {
          metadata: babelHelpers.extends({}, e.inlined_context.metadata, {
            mma_a2ui_link_button_supported: n,
          }),
        }),
      });
    }
    l.default = e;
  },
  98,
);
