__d(
  "CometFeedStoryDefaultCallToActionStrategy_cta$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          concreteType: "StoryBumperExposureHandler",
          kind: "LinkedField",
          name: "exposure_handler",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "bumper_class",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "should_hide",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometFeedStoryDefaultCallToActionStrategy_cta$normalization",
        selections: [
          {
            kind: "InlineFragment",
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_prod_eligible",
                storageKey: null,
              },
            ],
            type: "ICometStorySection",
            abstractKey: "__isICometStorySection",
          },
          {
            alias: null,
            args: null,
            concreteType: "Story",
            kind: "LinkedField",
            name: "story",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "StoryBumperData",
                kind: "LinkedField",
                name: "bumpers",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "persistent_bumper",
                    plural: !1,
                    selections: [
                      e,
                      t,
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "cta_renderer",
                        plural: !1,
                        selections: [
                          e,
                          {
                            kind: "InlineFragment",
                            selections: [
                              {
                                args: null,
                                documentName:
                                  "CometFeedStoryDefaultCallToActionStrategy_cta",
                                fragmentName:
                                  "CometShowMoreShowLessCallToAction_renderer",
                                fragmentPropName: "renderer",
                                kind: "ModuleImport",
                              },
                            ],
                            type: "CometShowMoreShowLessCallToActionRenderer",
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "triggered_bumpers",
                    plural: !0,
                    selections: [e, t],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "tracking",
                storageKey: null,
              },
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
      };
    })();
    a.exports = e;
  },
  null,
);
