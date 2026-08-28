__d(
  "encodePasskeyAssertionResponse",
  ["CometWebAuthn.shared"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = {
          authenticatorAttachment:
            (t = e.authenticatorAttachment) != null ? t : "not_provided",
          id: e.id,
          raw_id: o("CometWebAuthn.shared").bufferEncode(e.rawId),
          response: {
            authenticatorData: o("CometWebAuthn.shared").bufferEncode(
              e.response.authenticatorData,
            ),
            clientDataJSON: o("CometWebAuthn.shared").bufferEncode(
              e.response.clientDataJSON,
            ),
            signature: o("CometWebAuthn.shared").bufferEncode(
              e.response.signature,
            ),
            userHandle: o("CometWebAuthn.shared").bufferEncode(
              e.response.userHandle,
            ),
          },
          type: e.type,
        };
      return o("CometWebAuthn.shared").base64UrlEncode(JSON.stringify(n));
    }
    l.default = e;
  },
  98,
);
