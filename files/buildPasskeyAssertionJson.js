__d(
  "buildPasskeyAssertionJson",
  ["CometWebAuthn.shared"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a,
        i,
        l =
          (n = (r = e.allow_credentials) != null ? r : e.allowCredentials) !=
          null
            ? n
            : [],
        s =
          (a = (i = e.user_verification) != null ? i : e.userVerification) !=
          null
            ? a
            : "preferred";
      return {
        publicKey: {
          allowCredentials: o("CometWebAuthn.shared").encodeCredentials(
            l.map(function (e) {
              return { id: e.id, type: e.type };
            }),
          ),
          challenge: o("CometWebAuthn.shared").string2buffer(e.challenge),
          rpId: e.rp.id,
          timeout: t != null ? t : 6e4,
          userVerification: s,
        },
      };
    }
    l.default = e;
  },
  98,
);
