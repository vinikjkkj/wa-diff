__d(
  "WAWebBizGetMerchantComplianceQuery.graphql",
  ["WAWebBizGetMerchantComplianceQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "request" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "email",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "landline_number",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "mobile_number",
          storageKey: null,
        },
        a = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "request" },
            ],
            concreteType: "XFBWhatsAppBizMerchantGetComplianceInfoResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_biz_merchant_compliance_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppBizMerchantInfo",
                kind: "LinkedField",
                name: "merchant_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "entity_name",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "entity_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_registered",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "entity_type_custom",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "XFBWhatsAppBizMerchantInfoCustomerCareDetails",
                    kind: "LinkedField",
                    name: "customer_care_details",
                    plural: !1,
                    selections: [t, r, o],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "XFBWhatsAppBizMerchantInfoGrievanceOfficerDetails",
                    kind: "LinkedField",
                    name: "grievance_officer_details",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null,
                      },
                      t,
                      r,
                      o,
                    ],
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
          name: "WAWebBizGetMerchantComplianceQuery",
          selections: a,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizGetMerchantComplianceQuery",
          selections: a,
        },
        params: {
          id: n("WAWebBizGetMerchantComplianceQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizGetMerchantComplianceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
