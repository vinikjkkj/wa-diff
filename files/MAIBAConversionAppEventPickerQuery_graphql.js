__d(
  "MAIBAConversionAppEventPickerQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "appID" },
          { defaultValue: null, kind: "LocalArgument", name: "appStore" },
          { defaultValue: null, kind: "LocalArgument", name: "campaignID" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "hasL3PromotedObjectApplicationID",
          },
          { defaultValue: null, kind: "LocalArgument", name: "isCEOEnabled" },
          { defaultValue: null, kind: "LocalArgument", name: "objective" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "optimizationGoal",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "searchEventEntryPoint",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          concreteType: "AdBusiness",
          kind: "LinkedField",
          name: "ads_business",
          plural: !1,
          selections: [n],
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "message_body",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "message_level",
            storageKey: null,
          },
        ],
        a = {
          alias: null,
          args: [
            { kind: "Variable", name: "app_id", variableName: "appID" },
            { kind: "Variable", name: "app_store", variableName: "appStore" },
            {
              kind: "Variable",
              name: "campaign_id",
              variableName: "campaignID",
            },
            {
              kind: "Variable",
              name: "has_l3_promoted_object_application_id",
              variableName: "hasL3PromotedObjectApplicationID",
            },
            {
              kind: "Variable",
              name: "is_ceo_enabled",
              variableName: "isCEOEnabled",
            },
            { kind: "Variable", name: "objective", variableName: "objective" },
            {
              kind: "Variable",
              name: "optimization_goal",
              variableName: "optimizationGoal",
            },
            {
              kind: "Variable",
              name: "search_event_entry_point",
              variableName: "searchEventEntryPoint",
            },
          ],
          concreteType: "MAIBAAppEventInEventSelector",
          kind: "LinkedField",
          name: "maiba_standard_events_in_event_selector",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "event_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_opted_in_custom_events",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_opted_out_custom_events",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_disabled",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MAIBAAppEventSelectorMessage",
              kind: "LinkedField",
              name: "notice_message",
              plural: !1,
              selections: o,
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "MAIBAAppEventSelectorMessage",
              kind: "LinkedField",
              name: "tooltip_message",
              plural: !1,
              selections: o,
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAConversionAppEventPickerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [r, a],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAConversionAppEventPickerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [r, a, n],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28824555107216340",
          metadata: {},
          name: "MAIBAConversionAppEventPickerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
