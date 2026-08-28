__d(
  "CAAPasskeyUtils",
  [
    "$InternalEnum",
    "CaaPasskeyFbFalcoEvent",
    "FxMetaPasskeyEventsFalcoEvent",
    "UserAgent",
    "err",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "The operation either timed out or was not allowed.",
        "The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.",
        "CredentialContainer request is not allowed.",
        "This request has been cancelled by the user.",
      ],
      s = [
        "The origin of the document is not the same as its ancestors",
        "The user agent does not support public key credentials",
        "The following credential operations can only occur in a document which is same-origin",
      ],
      u = [
        "Invalid 'sameOriginWithAncestors' value",
        "'rp.id' cannot be used with the current origin",
      ];
    function c(t) {
      return (
        e.findIndex(function (e) {
          return t.message.includes(e);
        }) !== -1
      );
    }
    function d(e) {
      return (
        u.findIndex(function (t) {
          return e.message.includes(t);
        }) !== -1
      );
    }
    function m(e) {
      return (
        s.findIndex(function (t) {
          return e.message.includes(t);
        }) !== -1
      );
    }
    function p() {
      return _() || f()
        ? !0
        : r("UserAgent").isBrowser("Chrome >= 128") ||
            r("UserAgent").isBrowser("Chrome Desktop >= 128") ||
            r("UserAgent").isBrowser("Chrome for iOS >= 128") ||
            r("UserAgent").isBrowser("Chrome Mobile >= 128") ||
            r("UserAgent").isBrowser("Safari >= 18.4") ||
            r("UserAgent").isBrowser("Mobile Safari >= 18.4") ||
            r("UserAgent").isBrowser("Edge Android >= 128") ||
            r("UserAgent").isBrowser("Edge iOS >= 128") ||
            r("UserAgent").isBrowser("Edge (Chromium Based) >= 128") ||
            r("UserAgent").isBrowser("Edge PWA (Chromium Based) >= 128");
    }
    function _() {
      return r("gkx")("18023") || r("gkx")("16745");
    }
    function f() {
      return r("gkx")("18905") || r("gkx")("16946");
    }
    function g(e) {
      return r("justknobx")._("4227")
        ? e === "FB_WEB"
        : ["FB_WEB", "FRL_WEB"].includes(e);
    }
    var h = "Meta",
      y = 6e5,
      C = n("$InternalEnum")({
        NOT_ALLOWED_ERROR: 0,
        CONSTRAINT_ERROR: 1,
        INVALID_STATE_ERROR: 2,
        NOT_SUPPORTED_ERROR: 3,
        SECURITY_ERROR: 4,
        ABORT_ERROR: 5,
        UNKNOWN_ERROR: 6,
      });
    function b(e, t) {
      try {
        var n,
          o = JSON.parse(t),
          a = o.challenge,
          i = o.user.id,
          l = o.rp.id,
          s = (n = o.rp.name) != null ? n : h,
          u = k(o.excludeCredentials),
          c = { challenge: S(a) },
          d = R(JSON.stringify(c)),
          m = {
            publicKey: {
              attestation: r("gkx")("7292") ? "direct" : "none",
              authenticatorSelection: {
                residentKey: "preferred",
                userVerification: "required",
              },
              challenge: d,
              excludeCredentials: u,
              extensions: {
                prf: {
                  eval: {
                    first: new TextEncoder().encode(
                      "MetaPasskeyStaticPrfInputV1",
                    ),
                  },
                },
              },
              hints: ["client-device"],
              pubKeyCredParams: [
                { alg: -7, type: "public-key" },
                { alg: -257, type: "public-key" },
                { alg: -8, type: "public-key" },
              ],
              rp: { id: l, name: s },
              timeout: y,
              user: { displayName: e, id: R(i.toString()), name: e },
            },
          };
        return m;
      } catch (e) {
        throw r("err")("Invalid payload", t);
      }
    }
    function v(e) {
      var t = {
          authenticatorAttachment:
            e == null ? void 0 : e.authenticatorAttachment,
          id: e.id,
          raw_id: I(e.rawId),
          response: {
            attestationObject: I(e.response.attestationObject),
            clientDataJSON: I(e.response.clientDataJSON),
          },
          type: e.type,
        },
        n = S(JSON.stringify(t)),
        r =
          e.getClientExtensionResults == null
            ? void 0
            : e.getClientExtensionResults();
      return {
        extension_results: S(JSON.stringify(e.clientExtensionResults)),
        has_prf: (r == null ? void 0 : r.prf) != null,
        passkey_id: e.id,
        payload: n,
        payload_version: "web",
      };
    }
    function S(e) {
      var t = btoa(e);
      return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    var R = function (t) {
        return new Uint8Array(t.length).map(function (e, n) {
          return t.charCodeAt(n);
        });
      },
      L = function (t) {
        return R(atob(E(t)));
      },
      E = function (t) {
        return (t + "===")
          .slice(0, t.length + ((4 - (t.length % 4)) % 4))
          .replace(/-/g, "+")
          .replace(/_/g, "/");
      },
      k = function (t) {
        return t.map(function (e) {
          return { id: L(e.id), type: e.type };
        });
      },
      I = function (t) {
        return T(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      },
      T = function (t) {
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
    function D(e, t, n) {
      (r("CaaPasskeyFbFalcoEvent").log(function () {
        return {
          core: babelHelpers.extends(
            {
              event: e,
              event_category: t,
              event_flow: "assertion",
              event_step: "two_step_verification",
            },
            n != null ? { exception_message: n } : void 0,
          ),
        };
      }),
        r("FxMetaPasskeyEventsFalcoEvent").logImmediately(function () {
          return {
            entry_point: t,
            error_message: n,
            event_flow: "assertion",
            passkey_event_name: e,
          };
        }));
    }
    ((l.PASSKEY_CANCEL_ERRORS = e),
      (l.PASSKEY_UNSUPPORTED_USER_AGENT_ERRORS = s),
      (l.PASSKEY_UNSUPPORTED_PASSWORD_MANAGER_ERRORS = u),
      (l.isPasskeyCreationOrAssertionCancelError = c),
      (l.isPasswordManagerNotSupportedError = d),
      (l.isPasskeyUnsupportedUserAgentError = m),
      (l.isRelatedOriginSupported = p),
      (l.isE2eEnvironment = _),
      (l.isE2eEnvironmentError = f),
      (l.shouldUseNewReauthHook = g),
      (l.PasskeyErrorCodes = C),
      (l.toRegistrationJson = b),
      (l.toRegistrationPayload = v),
      (l.base64UrlEncode = S),
      (l.string2buffer = R),
      (l.base64ToBuffer = L),
      (l.Base64DecodeUrl = E),
      (l.encodeCredentials = k),
      (l.bufferEncode = I),
      (l.encodeByteArray = T),
      (l.logPasskeyAssertionEvent = D));
  },
  98,
);
