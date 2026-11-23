__d(
  "MAIBAAdPreviewCard_tiles.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ kind: "Variable", name: "flow_id", variableName: "flowID" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url",
          storageKey: null,
        },
        n = [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "format",
            storageKey: null,
          },
          t,
        ];
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "flowID" },
        ],
        kind: "Fragment",
        metadata: { throwOnFieldError: !0 },
        name: "MAIBAAdPreviewCard_tiles",
        selections: [
          {
            kind: "CatchField",
            field: {
              alias: null,
              args: e,
              concreteType: "AdDraftPreviewIframe",
              kind: "LinkedField",
              name: "ad_preview_iframes",
              plural: !0,
              selections: n,
              storageKey: null,
            },
            to: "NULL",
          },
          {
            kind: "CatchField",
            field: {
              alias: null,
              args: e,
              concreteType: "AdDraftPreviewMediaVariation",
              kind: "LinkedField",
              name: "ad_preview_media_variations",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "key",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AdDraftRenderableCreativeMediaItem",
                  kind: "LinkedField",
                  name: "media",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "media_type",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "name",
                      storageKey: null,
                    },
                    t,
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "AdDraftPreviewIframe",
                  kind: "LinkedField",
                  name: "iframes",
                  plural: !0,
                  selections: n,
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            to: "NULL",
          },
        ],
        type: "AdAdgroupWithDraftData",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
