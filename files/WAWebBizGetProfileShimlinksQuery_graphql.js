__d(
  "WAWebBizGetProfileShimlinksQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "bizJid" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "biz_jid", variableName: "bizJid" },
            ],
            concreteType: "XWAWhatsAppSMBProfileWebsiteInfo",
            kind: "LinkedField",
            name: "xwa_whatsapp_smb_get_profile_linkshims",
            plural: !0,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "website",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "shimmed_website_url",
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
          name: "WAWebBizGetProfileShimlinksQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizGetProfileShimlinksQuery",
          selections: t,
        },
        params: {
          id: "24491258413796282",
          metadata: {},
          name: "WAWebBizGetProfileShimlinksQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
