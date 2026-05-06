__d(
  "WAWebMexFetchNewsletterAdminInfoJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "newsletter_id" },
        ],
        t = [
          {
            kind: "Variable",
            name: "newsletter_id",
            variableName: "newsletter_id",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "admin_count",
          storageKey: null,
        },
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
          concreteType: "XWA2NewsletterAdminProfile",
          kind: "LinkedField",
          name: "admin_profile",
          plural: !1,
          selections: [
            r,
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XWA2Picture",
              kind: "LinkedField",
              name: "picture",
              plural: !1,
              selections: [
                r,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "direct_path",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterAdminSettings",
          kind: "LinkedField",
          name: "admin_settings",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "admin_profiles_enabled",
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
          name: "WAWebMexFetchNewsletterAdminInfoJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterAdmin",
              kind: "LinkedField",
              name: "xwa2_newsletter_admin",
              plural: !1,
              selections: [n, o, a],
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
          name: "WAWebMexFetchNewsletterAdminInfoJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterAdmin",
              kind: "LinkedField",
              name: "xwa2_newsletter_admin",
              plural: !1,
              selections: [n, o, a, r],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26278439461859188",
          metadata: {},
          name: "WAWebMexFetchNewsletterAdminInfoJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
