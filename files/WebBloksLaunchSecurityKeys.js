__d(
  "WebBloksLaunchSecurityKeys",
  ["Promise", "WebAuthN", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, o, a, i, l, s) {
      var c = navigator.credentials;
      if (c == null) {
        e.executeCatch(s, [1, "Method not supported, try another method."]);
        return;
      }
      var d = i.map(function (e) {
          return { id: e, type: "public-key" };
        }),
        m = {
          publicKey: {
            allowCredentials: d,
            challenge: o,
            rpId: a,
            userVerification: "preferred",
            timeout: 6e4,
          },
        };
      r("promiseDone")(
        u(c, m),
        function (t) {
          var n = JSON.stringify(t);
          e.executeCatch(l, [n]);
        },
        function (t) {
          e.executeCatch(s, [t.code, t]);
        },
      );
    }
    var u = function (r, a) {
      var t = a.publicKey,
        i = {
          challenge: Uint8Array.from(
            t.challenge.split("").map(function (e) {
              return e.charCodeAt(0);
            }),
          ),
          rpId: t.rpId,
          allowCredentials: o("WebAuthN").encodeCredentials(t.allowCredentials),
          userVerification: "preferred",
          timeout: 6e4,
        };
      return (
        t.extensions &&
          t.extensions.appid &&
          (i.extensions = { appid: t.extensions.appid }),
        r
          .get({ publicKey: i })
          .then(function (t) {
            return (e || (e = n("Promise"))).resolve({
              credential_id: t.id,
              raw_id: o("WebAuthN").bufferEncode(t.rawId),
              type: t.type,
              response: {
                authenticator_data: o("WebAuthN").encodeByteArray(
                  t.response.authenticatorData,
                ),
                client_data_json: o("WebAuthN").encodeByteArray(
                  t.response.clientDataJSON,
                ),
                signature: o("WebAuthN").encodeByteArray(t.response.signature),
                user_handle: o("WebAuthN").encodeByteArray(
                  t.response.userHandle,
                ),
              },
            });
          })
          .then(function (t) {
            return (e || (e = n("Promise"))).resolve(t);
          })
          .catch(function (t) {
            return (e || (e = n("Promise"))).reject(t);
          })
      );
    };
    l.default = s;
  },
  98,
);
