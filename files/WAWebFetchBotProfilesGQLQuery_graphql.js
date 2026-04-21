__d(
  "WAWebFetchBotProfilesGQLQuery.graphql",
  ["WAWebFetchBotProfilesGQLQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "ids" }],
        t = [{ kind: "Variable", name: "persona_ids", variableName: "ids" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "jid",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_meta_created",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        l = {
          alias: "creator",
          args: null,
          concreteType: "XFBGenAIUGCDiscoveryCreator",
          kind: "LinkedField",
          name: "creator_for_discovery",
          plural: !1,
          selections: [
            i,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "profile_uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        s = [{ kind: "Literal", name: "is_ai_home", value: !1 }],
        u = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "description",
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "icebreaker_prompt_list",
          storageKey: null,
        },
        d = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "posing_as_professional",
          storageKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebFetchBotProfilesGQLQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_fetch_genai_personas",
              plural: !0,
              selections: [
                r,
                o,
                a,
                l,
                {
                  alias: null,
                  args: s,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "latest_published_version_for_viewer",
                  plural: !1,
                  selections: [i, u, c, d],
                  storageKey:
                    "latest_published_version_for_viewer(is_ai_home:false)",
                },
              ],
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
          name: "WAWebFetchBotProfilesGQLQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_fetch_genai_personas",
              plural: !0,
              selections: [
                m,
                r,
                o,
                a,
                l,
                {
                  alias: null,
                  args: s,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "latest_published_version_for_viewer",
                  plural: !1,
                  selections: [m, i, u, c, d, r],
                  storageKey:
                    "latest_published_version_for_viewer(is_ai_home:false)",
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebFetchBotProfilesGQLQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebFetchBotProfilesGQLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
