__d(
  "CometGenericCommentDisableNotice_commentDisableNotice$normalization.graphql",
  ["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "CometGenericCommentDisableNotice_commentDisableNotice$normalization",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "TextWithEntities",
          kind: "LinkedField",
          name: "notice_message",
          plural: !1,
          selections: [
            {
              args: null,
              fragment: n(
                "CometTextWithEntitiesRelay_textWithEntities$normalization.graphql",
              ),
              kind: "FragmentSpread",
            },
          ],
          storageKey: null,
        },
      ],
    };
    a.exports = e;
  },
  null,
);
