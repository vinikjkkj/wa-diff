__d(
  "ProfileCometActionMessengerAudioCallHandler_handler.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ProfileCometActionMessengerAudioCallHandler_handler",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "profile_action",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "User",
              kind: "LinkedField",
              name: "profile_owner",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: [
                    { kind: "Literal", name: "height", value: 60 },
                    { kind: "Literal", name: "width", value: 60 },
                  ],
                  concreteType: "Image",
                  kind: "LinkedField",
                  name: "profile_picture",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "uri",
                      storageKey: null,
                    },
                  ],
                  storageKey: "profile_picture(height:60,width:60)",
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "short_name",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "ProfileActionMessengerAudioCallHandler",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
