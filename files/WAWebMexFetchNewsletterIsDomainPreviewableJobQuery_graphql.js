__d(
  "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "url_domains" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "url_domains",
                    variableName: "url_domains",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "XWA2NewsletterMessageIntegrityResponse",
            kind: "LinkedField",
            name: "xwa2_newsletter_message_integrity",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType:
                  "XWA2NewsletterMessageIntegrityPreviewURLResponse",
                kind: "LinkedField",
                name: "url_previews",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "url_domain",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_previewable",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery",
          selections: t,
        },
        params: {
          id: "9849510985088294",
          metadata: {},
          name: "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
