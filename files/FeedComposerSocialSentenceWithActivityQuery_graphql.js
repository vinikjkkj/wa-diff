__d(
  "FeedComposerSocialSentenceWithActivityQuery.graphql",
  ["FeedComposerSocialSentenceWithActivityQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "activityLegacyID",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_api_id",
            variableName: "activityLegacyID",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "omit_linking_verb",
          storageKey: null,
        },
        o = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "template_string",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ActivityTemplateToken",
            kind: "LinkedField",
            name: "template_tokens",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "token_position",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "token_type",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        a = {
          alias: "previewTemplate",
          args: null,
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: o,
          storageKey: null,
        },
        i = { kind: "Literal", name: "with_place", value: "SPECIFIC" },
        l = {
          alias: "previewTemplateWithPlace",
          args: [i],
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: o,
          storageKey: 'preview_template(with_place:"SPECIFIC")',
        },
        s = { kind: "Literal", name: "with_people", value: "SINGLE" },
        u = {
          alias: "previewTemplateWithPerson",
          args: [s],
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: o,
          storageKey: 'preview_template(with_people:"SINGLE")',
        },
        c = { kind: "Literal", name: "with_people", value: "MULTIPLE" },
        d = {
          alias: "previewTemplateWithPeople",
          args: [c],
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: o,
          storageKey: 'preview_template(with_people:"MULTIPLE")',
        },
        m = {
          alias: "previewTemplateWithPlaceAndPerson",
          args: [s, i],
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: o,
          storageKey:
            'preview_template(with_people:"SINGLE",with_place:"SPECIFIC")',
        },
        p = {
          alias: "previewTemplateWithPlaceAndPeople",
          args: [c, i],
          concreteType: "TaggableActivityPreviewTemplate",
          kind: "LinkedField",
          name: "preview_template",
          plural: !1,
          selections: o,
          storageKey:
            'preview_template(with_people:"MULTIPLE",with_place:"SPECIFIC")',
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "FeedComposerSocialSentenceWithActivityQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "TaggableActivity",
              kind: "LinkedField",
              name: "taggable_activity",
              plural: !1,
              selections: [r, a, l, u, d, m, p],
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
          name: "FeedComposerSocialSentenceWithActivityQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "TaggableActivity",
              kind: "LinkedField",
              name: "taggable_activity",
              plural: !1,
              selections: [
                r,
                a,
                l,
                u,
                d,
                m,
                p,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "FeedComposerSocialSentenceWithActivityQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "FeedComposerSocialSentenceWithActivityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
