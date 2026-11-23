__d(
  "MAIBAChatMessageDebugInfo_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "external_conversation_id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "MAIBAChatMessageDebugInfo_fragment",
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "bot_request_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "bot_response_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "bot_invocation_message_otid",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "message_id",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "fetch_id",
            storageKey: null,
          },
          e,
          {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "conversation",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null,
              },
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_handover_active",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "human_handover_lobby_state",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "XFBMAIBAMessageMetadata",
            kind: "LinkedField",
            name: "metadata",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "entrypoint_qe_universes",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_axon_routed",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reach_planner_skill",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            kind: "ClientExtension",
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MAIBAClientErrorDetails",
                kind: "LinkedField",
                name: "maiba_client_message_error",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "message",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "exception_message",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "stack_trace",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
        ],
        type: "XFBMAIBAMessage",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
