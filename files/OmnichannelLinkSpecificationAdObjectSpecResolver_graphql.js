__d(
  "OmnichannelLinkSpecificationAdObjectSpecResolver.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "app_name",
          storageKey: null,
        },
        n = [
          t,
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "app_store_id",
            storageKey: null,
          },
          e,
        ];
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: { vultureHash: "8n-hk1lTtQ5K4e-XMpEX2y8-fi8=" },
        name: "OmnichannelLinkSpecificationAdObjectSpecResolver",
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "XFBOmnichannelLinkSpecWeb",
            kind: "LinkedField",
            name: "web",
            plural: !1,
            selections: [e],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "OmnichannelLinkSpecificationApp",
            kind: "LinkedField",
            name: "app",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "application_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "OmnichannelLinkSpecAppPlatformSpecs",
                kind: "LinkedField",
                name: "platform_specs",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "OmnichannelLinkSpecAppPlatformSpecsAndroid",
                    kind: "LinkedField",
                    name: "android",
                    plural: !1,
                    selections: [
                      t,
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "package_name",
                        storageKey: null,
                      },
                      e,
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "OmnichannelLinkSpecAppPlatformSpecsIos",
                    kind: "LinkedField",
                    name: "ios",
                    plural: !1,
                    selections: n,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "OmnichannelLinkSpecAppPlatformSpecsIos",
                    kind: "LinkedField",
                    name: "ipad",
                    plural: !1,
                    selections: n,
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "OmnichannelLinkSpecAppPlatformSpecsIos",
                    kind: "LinkedField",
                    name: "iphone",
                    plural: !1,
                    selections: n,
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "OmnichannelLinkSpecification",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
