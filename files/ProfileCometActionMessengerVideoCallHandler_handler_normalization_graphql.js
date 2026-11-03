__d(
  "ProfileCometActionMessengerVideoCallHandler_handler$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "ProfileCometActionMessengerVideoCallHandler_handler$normalization",
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
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "profile_owner",
                plural: !1,
                selections: [
                  e,
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
              e,
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
