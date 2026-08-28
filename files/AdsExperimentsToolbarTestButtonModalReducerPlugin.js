__d(
  "AdsExperimentsToolbarTestButtonModalReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (n.campaignGroupID != null) {
            var e,
              r =
                (e = t.convergenceCardABTestConfigs) == null
                  ? void 0
                  : e.map(function (e) {
                      return e.campaignGroupID === n.campaignGroupID
                        ? babelHelpers.extends({}, e, {
                            isPublished: n.isPublished,
                          })
                        : e;
                    });
            return r != null &&
              r.every(function (e) {
                return e.isPublished;
              })
              ? { isModalVisible: !1 }
              : {
                  isModalVisible: n.showModal,
                  source: n.source,
                  convergenceCardABTestConfigs: r,
                };
          }
          return n.showModal
            ? {
                convergenceCardABTestConfigs: n.convergenceCardABTestConfigs,
                isModalVisible: n.showModal,
                prefilledUsecase: n.prefilledUsecase,
                source: n.source,
              }
            : { isModalVisible: n.showModal };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
