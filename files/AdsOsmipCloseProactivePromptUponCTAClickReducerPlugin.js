__d(
  "AdsOsmipCloseProactivePromptUponCTAClickReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return n.data.isOsmipEntrypoint === !0
            ? babelHelpers.extends({}, t, {
                isProactivePromptV1Hidden: !0,
                isProactivePromptV2Hidden: !0,
              })
            : t;
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
