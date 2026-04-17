__d(
  "CometGenericCommentDisableNotice_commentDisableNotice.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometGenericCommentDisableNotice_commentDisableNotice",
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
              kind: "FragmentSpread",
              name: "CometTextWithEntitiesRelay_textWithEntities",
            },
          ],
          storageKey: null,
        },
      ],
      type: "GeneralCommentDisableNotice",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
