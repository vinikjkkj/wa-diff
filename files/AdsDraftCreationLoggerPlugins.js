__d(
  "AdsDraftCreationLoggerPlugins",
  [
    "AdsApplicationIDs",
    "AdsManagerQPLUserFlowLogger",
    "AdsPerfInteractionCreateDraftUtils",
    "AdsPerfInteractionsController",
    "QPLUserFlow",
    "first",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          if (t.isCreating && t.creationSource) {
            var e;
            o(
              "AdsPerfInteractionCreateDraftUtils",
            ).logCreateDraftInteractionStart(
              (e = t.creationSource && t.creationSource) != null
                ? e
                : "CONTEXTUAL_CREATION",
            );
          }
        },
      },
      s = {
        log: function (t) {
          if (t.adsApplicationID === r("AdsApplicationIDs").ADS_POWER_EDITOR) {
            var e = [];
            t.errors.forEach(function (t) {
              var n, r, o, a;
              e.push(
                (n =
                  (r = (o = t.error_subcode) == null ? void 0 : o.toString()) !=
                  null
                    ? r
                    : (a = t.code) == null
                      ? void 0
                      : a.toString()) != null
                  ? n
                  : "No error code",
              );
            });
            var n = { string_array: { error_codes: e } },
              a = { annotations: n },
              i = t.errors.values().toArray();
            if (i.length > 0) {
              var l;
              ((n = o(
                "AdsManagerQPLUserFlowLogger",
              ).appendErrorAnnotationsToExistingAnnotations(n, i)),
                (a = {
                  annotations: n,
                  error: (l = r("first")(i)) != null ? l : void 0,
                }));
              var s = r(
                "AdsPerfInteractionsController",
              ).getAllOngoingInteraction();
              s.forEach(function (e) {
                if (e.interaction === "am.draft.create_draft") {
                  var t = r("first")(i);
                  t != null &&
                    r(
                      "AdsPerfInteractionsController",
                    ).addErrorMetadataToInteraction(e.interactionID, {
                      error: t,
                    });
                }
              });
            }
            r("QPLUserFlow").endFailure(
              r("qpl")._(270220209, "4288"),
              "FRAGMENT_CREATION_FAILED",
              a,
            );
          }
        },
      };
    ((l.AdsInstantDraftCreationStartLoggerPlugin = e),
      (l.AdsDraftCreationFailLoggerPlugin = s));
  },
  98,
);
