__d(
  "AdsAdBuilderDraftFragmentBatchUpdatedToastCardReducerPlugin",
  ["fbt", "AdsDismissToastCardAction"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 2e3,
      u = {
        reduce: function (n, o) {
          var t = o.adsApplicationID;
          return {
            toastCards: [
              {
                bodyText: s._(/*BTDS*/ "Autosaved"),
                canDismiss: !1,
                cardType: "success",
                "data-testid": "adbuilder-toast-autosaved-success",
                dismissTimer: e,
                id: t,
                onDismiss: function () {
                  return r("AdsDismissToastCardAction").dispatch(
                    { id: t },
                    {
                      line: "44",
                      module:
                        "AdsAdBuilderDraftFragmentBatchUpdatedToastCardReducerPlugin.js",
                      moduleID: i.id,
                    },
                  );
                },
              },
            ],
          };
        },
      },
      c = u;
    l.default = c;
  },
  226,
);
