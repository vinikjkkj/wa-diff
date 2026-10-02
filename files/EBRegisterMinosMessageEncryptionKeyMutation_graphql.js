__d(
  "EBRegisterMinosMessageEncryptionKeyMutation.graphql",
  ["EBRegisterMinosMessageEncryptionKeyMutation_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        r = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "mek_fbid",
              storageKey: null,
            },
          ],
          type: "XFBMinosRegisterMessageEncryptionKeyResponse",
          abstractKey: null,
        },
        o = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "code",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "message",
              storageKey: null,
            },
          ],
          type: "XFBMinosRegisterMessageEncryptionKeyError",
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "EBRegisterMinosMessageEncryptionKeyMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_minos_register_message_encryption_key",
              plural: !1,
              selections: [r, o],
              storageKey: null,
            },
          ],
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "EBRegisterMinosMessageEncryptionKeyMutation",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_minos_register_message_encryption_key",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                r,
                o,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "EBRegisterMinosMessageEncryptionKeyMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "EBRegisterMinosMessageEncryptionKeyMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
