__d(
  "MAIBAPlatformUserMessageAttachment_attachments.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAPlatformUserMessageAttachment_attachments",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "MAIBAConversationUserMediaAttachment",
          kind: "LinkedField",
          name: "user_media_attachments",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "media_id",
              storageKey: null,
            },
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
              name: "maiba_internal_kind",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "attachment_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "media_url",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "mime_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "filename",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "file_size",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "upload_blocked_reason",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "MAIBAConversationNode",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
