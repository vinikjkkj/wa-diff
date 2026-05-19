__d(
  "CometFeedStoryMinimizedTimestampStrategy_timestamp.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            kind: "Variable",
            name: "location",
            variableName: "renderLocation",
          },
        ],
        t = {
          alias: null,
          args: [{ kind: "Literal", name: "site", value: "comet" }],
          kind: "ScalarField",
          name: "url",
          storageKey: 'url(site:"comet")',
        };
      return {
        argumentDefinitions: [{ kind: "RootArgument", name: "renderLocation" }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryMinimizedTimestampStrategy_timestamp",
        selections: [
          {
            args: null,
            kind: "FragmentSpread",
            name: "useCometFeedStoryMatchDebugger_iCometStorySection",
          },
          {
            alias: null,
            args: e,
            kind: "ScalarField",
            name: "override_url",
            storageKey: null,
          },
          {
            alias: null,
            args: e,
            kind: "ScalarField",
            name: "video_override_url",
            storageKey: null,
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
                kind: "ScalarField",
                name: "creation_time",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "unpublished_content_type",
                storageKey: null,
              },
              t,
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "actors",
                plural: !0,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [t],
                    type: "Entity",
                    abstractKey: "__isEntity",
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "GHLScramblingNode",
                kind: "LinkedField",
                name: "ghl_label",
                plural: !1,
                selections: [
                  {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometGHLScrambledLabel_label",
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        type: "CometFeedStoryMinimizedTimestampStrategy",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
