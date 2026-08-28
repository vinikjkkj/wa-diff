__d(
  "CAAWebBloksPasskeyUtils",
  ["$InternalEnum", "CAAPasskeyWebBloksMinificationKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Meta",
      s = 6e5,
      u = n("$InternalEnum")({
        NOT_ALLOWED_ERROR: 0,
        CONSTRAINT_ERROR: 1,
        INVALID_STATE_ERROR: 2,
        NOT_SUPPORTED_ERROR: 3,
        SECURITY_ERROR: 4,
        ABORT_ERROR: 5,
        UNKNOWN_ERROR: 6,
      });
    function c(t, n) {
      var r,
        a,
        i,
        l,
        u,
        c,
        d,
        p,
        _,
        g,
        y = n.getExpression(
          o("CAAPasskeyWebBloksMinificationKeys").CREATE_PASSKEY_ON_SUCCESS,
        ),
        b = n.getExpression(
          o("CAAPasskeyWebBloksMinificationKeys").CREATE_PASSKEY_ON_ERROR,
        ),
        v = n.getExpression(
          o("CAAPasskeyWebBloksMinificationKeys").CREATE_PASSKEY_ON_CANCEL,
        ),
        S = JSON.parse(
          (r = n.get(
            o("CAAPasskeyWebBloksMinificationKeys")
              .CREATE_PASSKEY_ADDITIONAL_PARAMS,
          )) != null
            ? r
            : "{}",
        );
      if (b == null) return null;
      if (y == null) return (m(t, "on_success", b), null);
      if (v == null) return (m(t, "on_cancel", b), null);
      var R =
        (a = n.get(
          o("CAAPasskeyWebBloksMinificationKeys").CREATE_PASSKEY_RPID,
        )) != null
          ? a
          : (i = S.rp) == null
            ? void 0
            : i.id;
      if (R == null) return (m(t, "rp_id", b), null);
      var L =
        (l = n.get(
          o("CAAPasskeyWebBloksMinificationKeys").CREATE_PASSKEY_CHALLENGE,
        )) != null
          ? l
          : S.challenge;
      if (L == null) return (m(t, "challenge", b), null);
      var E = n.get(
        o("CAAPasskeyWebBloksMinificationKeys").CREATE_PASSKEY_USERID,
      );
      if (E == null) return (m(t, "userid", b), null);
      var k = n.get(
        o("CAAPasskeyWebBloksMinificationKeys").CREATE_PASSKEY_USERNAME,
      );
      if (k == null) return (m(t, "username", b), null);
      var I = h(S.excludeCredentials),
        T =
          (u =
            (c = n.get(
              o("CAAPasskeyWebBloksMinificationKeys")
                .CREATE_PASSKEY_ENABLE_DEVICE_KEY_SIGNATURE_EXT,
            )) == null
              ? void 0
              : c.valueOf()) != null
            ? u
            : !1,
        D =
          (d =
            (p = n.get(
              o("CAAPasskeyWebBloksMinificationKeys")
                .CREATE_PASSKEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS,
            )) == null
              ? void 0
              : p.valueOf()) != null
            ? d
            : !1,
        x = { challenge: f(L) },
        $ = C(JSON.stringify(x)),
        P = {
          publicKey: {
            attestation: "none",
            authenticatorSelection: {
              residentKey: "preferred",
              userVerification: "required",
            },
            challenge: $,
            excludeCredentials: I,
            hints: ["client-device"],
            pubKeyCredParams: [
              { alg: -7, type: "public-key" },
              { alg: -257, type: "public-key" },
              { alg: -8, type: "public-key" },
            ],
            rp: {
              id: R,
              name: (_ = (g = S.rp) == null ? void 0 : g.name) != null ? _ : e,
            },
            timeout: s,
            user: { displayName: k, id: C(E.toString()), name: k },
          },
        };
      return {
        callbacks: { onCancel: v, onError: b, onSuccess: y },
        extensions: {
          enable_device_key_signature_ext: T,
          prefer_immediately_available_credentials: D,
        },
        json: P,
      };
    }
    function d(e, t) {
      var n,
        r,
        a,
        i,
        l,
        u,
        c,
        d,
        p,
        _,
        f = t.getExpression(
          (_ = o("CAAPasskeyWebBloksMinificationKeys")).USE_PASSKEY_ON_SUCCESS,
        ),
        g = t.getExpression(_.USE_PASSKEY_ON_ERROR),
        y = t.getExpression(_.USE_PASSKEY_ON_CANCEL),
        b = t.getExpression(_.USE_PASSKEY_ON_NO_AVAILABLE_CREDENTIALS),
        v = JSON.parse(
          (n = t.get(
            o("CAAPasskeyWebBloksMinificationKeys")
              .USE_PASSKEY_ADDITIONAL_PARAMS,
          )) != null
            ? n
            : "{}",
        );
      if (g == null) return null;
      if (f == null) return (m(e, "on_success", g), null);
      if (y == null) return (m(e, "on_cancel", g), null);
      var S =
        (r = t.get(o("CAAPasskeyWebBloksMinificationKeys").USE_PASSKEY_RPID)) !=
        null
          ? r
          : (a = v.rp) == null
            ? void 0
            : a.id;
      if (S == null) return (m(e, "rpid", g), null);
      var R =
        (i = t.get(
          o("CAAPasskeyWebBloksMinificationKeys").USE_PASSKEY_CHALLENGE,
        )) != null
          ? i
          : v.challenge;
      if (R == null) return (m(e, "challenge", g), null);
      var L =
          (l =
            (u = t.get(
              o("CAAPasskeyWebBloksMinificationKeys")
                .USE_PASSKEY_ENABLE_DEVICE_KEY_SIGNATURE_EXT,
            )) == null
              ? void 0
              : u.valueOf()) != null
            ? l
            : !1,
        E =
          (c =
            (d = t.get(
              o("CAAPasskeyWebBloksMinificationKeys")
                .USE_PASSKEY_PREFER_IMMEDIATELY_AVAILABLE_CREDENTIALS,
            )) == null
              ? void 0
              : d.valueOf()) != null
            ? c
            : !1,
        k = v.mediation,
        I = C(R),
        T = (p = v.userVerification) != null ? p : "preferred",
        D = h(v.allowCredentials),
        x = {
          publicKey: {
            challenge: I,
            timeout: s,
            rpId: S,
            userVerification: T,
            allowCredentials: D,
          },
          mediation: k,
        };
      return {
        callbacks: {
          onSuccess: f,
          onError: g,
          onCancel: y,
          onNoAvailableCredentials: b,
        },
        json: x,
        extensions: {
          prefer_immediately_available_credentials: E,
          enable_device_key_signature_ext: L,
        },
      };
    }
    function m(e, t, n) {
      var r = "Missing required parameter " + t;
      e.executeCatch(n.getValue(), [1, r]);
    }
    function p(e) {
      var t = {
          authenticatorAttachment: e.authenticatorAttachment,
          id: e.id,
          raw_id: y(e.rawId),
          response: {
            attestationObject: y(e.response.attestationObject),
            clientDataJSON: y(e.response.clientDataJSON),
          },
          type: e.type,
        },
        n = f(JSON.stringify(t));
      return {
        extension_results: f(JSON.stringify(e.clientExtensionResults)),
        passkey_id: e.id,
        payload: n,
        payload_version: "web",
      };
    }
    function _(e) {
      var t,
        n = f(
          JSON.stringify(
            babelHelpers.extends({}, e.toJSON == null ? void 0 : e.toJSON(), {
              authenticatorAttachment:
                (t = e.authenticatorAttachment) != null ? t : "not_provided",
            }),
          ),
        ),
        r = f(JSON.stringify(e.getClientExtensionResults()));
      return {
        passkey_id: e.id,
        payload: n,
        payload_version: "web",
        extension_results: r,
      };
    }
    function f(e) {
      var t = btoa(e);
      return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function g(e, t, n, r) {
      var o = u.isValid(n) ? n : u.UNKNOWN_ERROR;
      e.executeCatch(t.getValue(), [o, r]);
    }
    var h = function (t) {
        return t.map(function (e) {
          return { type: e.type, id: b(e.id) };
        });
      },
      y = function (t) {
        return S(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      },
      C = function (t) {
        return new Uint8Array(t.length).map(function (e, n) {
          return t.charCodeAt(n);
        });
      },
      b = function (t) {
        return C(atob(v(t)));
      },
      v = function (t) {
        return (t + "===")
          .slice(0, t.length + ((4 - (t.length % 4)) % 4))
          .replace(/-/g, "+")
          .replace(/_/g, "/");
      },
      S = function (t) {
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
    ((l.PasskeyErrorCodes = u),
      (l.getValidatedPasskeyRegistrationParams = c),
      (l.getValidatedPasskeyAssertionParams = d),
      (l.reportMissingParameter = m),
      (l.buildBloksRegistrationArguments = p),
      (l.buildBloksAssertionArguments = _),
      (l.base64UrlEncode = f),
      (l.onError = g));
  },
  98,
);
