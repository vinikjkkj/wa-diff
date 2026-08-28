__d(
  "adsDraftCreateToastCardForPublishEnd",
  [
    "AdsAddToastCardAction",
    "AdsDismissToastCardAction",
    "AdsDraftConstants",
    "AdsDraftDraftShowPublishDetailsDataAction",
    "AdsPEAccountsRouteAdapter",
    "URI",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, a) {
      var l = babelHelpers.extends(
        {
          canDismiss: !0,
          "data-testid": "publish-toast",
          dismissButtonTestID: "publish-toast-dismiss-button",
          useCase: o("AdsDraftConstants").BACKGROUND_PUBLISH_USE_CASE,
        },
        e,
      );
      return (
        (r("isTruthy")(n) && r("isTruthy")(t) && e.cardType === "success") ||
          (l = babelHelpers.extends(
            {
              callsToAction: [
                {
                  label: o("AdsDraftConstants").VIEW_DETAILS_CALL_TO_ACTION,
                  use: "default",
                  onClick: function () {
                    (r("AdsDismissToastCardAction").dispatch(
                      { id: e.id },
                      {
                        line: "53",
                        module: "adsDraftCreateToastCardForPublishEnd.js",
                        moduleID: i.id,
                      },
                    ),
                      r("AdsDraftDraftShowPublishDetailsDataAction").dispatch(
                        { areAllDeleting: a },
                        {
                          line: "55",
                          module: "adsDraftCreateToastCardForPublishEnd.js",
                          moduleID: i.id,
                        },
                      ));
                  },
                  testID: "view_publish",
                },
              ],
            },
            l,
          )),
        r("AdsAddToastCardAction").dispatch(
          {
            dismissUseCase: o("AdsDraftConstants").BACKGROUND_PUBLISH_USE_CASE,
            toastCard: l,
          },
          {
            line: "70",
            module: "adsDraftCreateToastCardForPublishEnd.js",
            moduleID: i.id,
          },
        ),
        l
      );
    }
    function u(t, n) {
      return [
        {
          label: o("AdsDraftConstants").SHOPS_ADS_LEARN_MORE_CALL_TO_ACTION,
          use: "default",
          onClick: function () {
            (r("AdsDismissToastCardAction").dispatch(
              { id: t.id },
              {
                line: "87",
                module: "adsDraftCreateToastCardForPublishEnd.js",
                moduleID: i.id,
              },
            ),
              new (e || (e = r("URI")))(
                r("AdsPEAccountsRouteAdapter").buildUri({ act: n }),
              ).go());
          },
          testID: "view_shops_ads_publish_learn_more",
        },
      ];
    }
    l.default = s;
  },
  98,
);
