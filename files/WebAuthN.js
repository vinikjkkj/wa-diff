__d(
  "WebAuthN",
  [
    "$InternalEnum",
    "Promise",
    "WebauthnAuthenticatorLoginFailureFalcoEvent",
    "WebauthnAuthenticatorLoginSuccessFalcoEvent",
    "WebauthnAuthenticatorRegisterFailureFalcoEvent",
    "WebauthnAuthenticatorRegisterSuccessFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({
        SECURITY_KEY: "security-key",
        CLIENT_DEVICE: "client-device",
        HYBRID: "hybrid",
      }),
      u = n("$InternalEnum")({
        USB: "usb",
        NFC: "nfc",
        BLE: "ble",
        INTERNAL: "internal",
      }),
      c = function (o, a) {
        var t = a.publicKey,
          i = {
            challenge: Uint8Array.from(
              t.challenge.split("").map(function (e) {
                return e.charCodeAt(0);
              }),
            ),
            rpId: t.rpId,
            allowCredentials: p(t.allowCredentials),
            userVerification: "preferred",
            timeout: 6e4,
          };
        return (
          t.extensions &&
            t.extensions.appid &&
            (i.extensions = { appid: t.extensions.appid }),
          o
            .get({ publicKey: i })
            .then(function (t) {
              return (e || (e = n("Promise"))).resolve({
                credential_id: t.id,
                raw_id: _(t.rawId),
                type: t.type,
                response: {
                  authenticator_data: y(t.response.authenticatorData),
                  client_data_json: y(t.response.clientDataJSON),
                  signature: y(t.response.signature),
                  user_handle: y(t.response.userHandle),
                },
              });
            })
            .then(function (t) {
              return (
                r("WebauthnAuthenticatorLoginSuccessFalcoEvent").log(
                  function () {
                    return { key_handle_id: t.credential_id };
                  },
                ),
                (e || (e = n("Promise"))).resolve(t)
              );
            })
            .catch(function (t) {
              return (
                r("WebauthnAuthenticatorLoginFailureFalcoEvent").log(
                  function () {
                    return {
                      error_code: t.code,
                      error_name: t.name,
                      error_message: t.message,
                    };
                  },
                ),
                (e || (e = n("Promise"))).reject(t)
              );
            })
        );
      },
      d = function (t) {
        return (
          r("WebauthnAuthenticatorRegisterSuccessFalcoEvent").log(function () {
            return { key_handle_id: t.id };
          }),
          {
            credential_id: t.id,
            raw_id: _(t.rawId),
            type: t.type,
            client_data_json: y(t.response.clientDataJSON),
            attestation_object: y(t.response.attestationObject),
          }
        );
      },
      m = function (o) {
        var t = window.navigator.credentials;
        if (t == null) {
          var a = "The user agent  does not support WebAuthN";
          return (
            r("WebauthnAuthenticatorRegisterFailureFalcoEvent").log(
              function () {
                return {
                  error_code: -1,
                  error_name: "NotSupportedError",
                  error_message: a,
                };
              },
            ),
            (e || (e = n("Promise"))).reject(a)
          );
        }
        try {
          var i = o.publicKey;
          return t.create({
            publicKey: {
              challenge: f(i.challenge),
              attestation: i.attestation,
              authenticatorSelection: babelHelpers.extends({}, i.authSelection),
              hints: i.hints,
              rp: i.rp,
              timeout: i.timeout,
              pubKeyCredParams: i.pubKeyCredParams,
              excludeCredentials: p(i.excludeCredentials),
              user: babelHelpers.extends({}, i.user, { id: f(i.user.id) }),
            },
          });
        } catch (t) {
          return (
            r("WebauthnAuthenticatorRegisterFailureFalcoEvent").log(
              function () {
                return {
                  error_code: t.code,
                  error_name: t.name,
                  error_message: t.message,
                };
              },
            ),
            (e || (e = n("Promise"))).reject(t)
          );
        }
      },
      p = function (t) {
        return t.map(function (e) {
          return { type: e.type, id: g(e.id) };
        });
      },
      _ = function (t) {
        return y(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      },
      f = function (t) {
        return new Uint8Array(t.length).map(function (e, n) {
          return t.charCodeAt(n);
        });
      },
      g = function (t) {
        return f(atob(h(t)));
      },
      h = function (t) {
        return (t + "===")
          .slice(0, t.length + ((4 - (t.length % 4)) % 4))
          .replace(/-/g, "+")
          .replace(/_/g, "/");
      },
      y = function (t) {
        var e = new Uint8Array(t),
          n =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          r = e.length % 3;
        function o(e) {
          return (
            n.charAt((e >> 18) & 63) +
            n.charAt((e >> 12) & 63) +
            n.charAt((e >> 6) & 63) +
            n.charAt(e & 63)
          );
        }
        for (var a = "", i = 0, l = e.length - r; i < l; i += 3) {
          var s = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2];
          a += o(s);
        }
        var u;
        switch (r) {
          case 1:
            ((u = e[e.length - 1]),
              (a += n.charAt(u >> 2)),
              (a += n.charAt((u << 4) & 63)),
              (a += "=="));
            break;
          case 2:
            ((u = (e[e.length - 2] << 8) + e[e.length - 1]),
              (a += n.charAt(u >> 10)),
              (a += n.charAt((u >> 4) & 63)),
              (a += n.charAt((u << 2) & 63)),
              (a += "="));
            break;
          default:
            break;
        }
        return a;
      };
    ((l.PublicKeyCredentialHint = s),
      (l.AuthenticatorTransport = u),
      (l.createLoginChallenge = c),
      (l.createRegisterRequest = d),
      (l.getKeyCredential = m),
      (l.encodeCredentials = p),
      (l.bufferEncode = _),
      (l.string2buffer = f),
      (l.base64ToBuffer = g),
      (l.Base64DecodeUrl = h),
      (l.encodeByteArray = y));
  },
  98,
);
