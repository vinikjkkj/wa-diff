__d(
  "WAWebHatchPeerConnectionsDecoder",
  ["WAWebHatchJsonReaders", "WAWebHatchPeerInvite"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[0-9a-f]{64}$/,
      s = "group";
    function u(e) {
      var t = b(e);
      return t == null
        ? null
        : t
            .filter(function (e) {
              return (
                o("WAWebHatchJsonReaders").readBool(e, "active") === !0 &&
                o("WAWebHatchJsonReaders").readBool(e, "space_only") !== !0
              );
            })
            .map(R)
            .filter(Boolean);
    }
    function c(e) {
      return T(o("WAWebHatchJsonReaders").readString(e, "next"));
    }
    function d(e) {
      var t,
        n,
        r,
        a = R(o("WAWebHatchJsonReaders").readObject(e, "connection")),
        i = o("WAWebHatchJsonReaders").readInteger(e, "revision"),
        l =
          (t = o("WAWebHatchJsonReaders").readArray(e, "rules")) != null
            ? t
            : [];
      if (a == null || i == null || i < 0 || !Number.isSafeInteger(i))
        return null;
      var s = new Set(
        ((n = o("WAWebHatchJsonReaders").readArray(
          e,
          "unconfirmed_rule_ids",
        )) != null
          ? n
          : []
        ).filter(function (e) {
          return typeof e == "string";
        }),
      );
      return {
        connection: babelHelpers.extends({}, a, {
          chatSessionId:
            (r = a.chatSessionId) != null
              ? r
              : T(o("WAWebHatchJsonReaders").readString(e, "chat_session_id")),
        }),
        revision: i,
        rules: l
          .filter(o("WAWebHatchJsonReaders").isObject)
          .map(function (e) {
            return k(e, s);
          })
          .filter(Boolean),
      };
    }
    function m(e, t) {
      var n;
      t === void 0 && (t = Date.now());
      var r = o("WAWebHatchJsonReaders").readInteger(e, "count");
      if (r == null || r < 0) return null;
      var a =
        (n = b(e)) == null
          ? void 0
          : n.filter(function (e) {
              var t = o("WAWebHatchJsonReaders").readString(e, "kind");
              return (
                (t === "delivery" || t === "opened") &&
                T(o("WAWebHatchJsonReaders").readString(e, "id")) != null
              );
            });
      return a == null || r < a.length
        ? null
        : {
            count: r,
            items: a
              .filter(function (e) {
                return f(e, t);
              })
              .map(function (e) {
                return y(
                  e,
                  o("WAWebHatchJsonReaders").readString(e, "kind") === "opened"
                    ? "opened"
                    : "delivery",
                  "id",
                  "received_at_ms",
                );
              })
              .filter(Boolean),
          };
    }
    function p(e, t) {
      t === void 0 && (t = Date.now());
      var n = b(e);
      return n == null
        ? null
        : n
            .filter(function (e) {
              return f(e, t);
            })
            .map(function (e) {
              return y(e, "delivery", "delivery_id", "received_at_ms");
            })
            .filter(Boolean);
    }
    function _(e, t) {
      t === void 0 && (t = Date.now());
      var n = b(e);
      return n == null
        ? null
        : n
            .filter(function (e) {
              return (
                T(o("WAWebHatchJsonReaders").readString(e, "invitation_url")) !=
                  null && f(e, t)
              );
            })
            .map(function (e) {
              return y(e, "opened", "opened_id", "opened_at_ms");
            })
            .filter(Boolean);
    }
    function f(e, t) {
      var n,
        r =
          (n = o("WAWebHatchJsonReaders").readInteger(e, "expires_at_ms")) !=
          null
            ? n
            : 0;
      return r <= 0 || r > t;
    }
    function g(e, t) {
      return C(e, "delivery_id", t);
    }
    function h(e, t) {
      return C(e, "opened_id", t);
    }
    function y(e, t, n, r) {
      var a,
        i,
        l,
        s = T(o("WAWebHatchJsonReaders").readString(e, n));
      return s == null
        ? null
        : {
            id: s,
            kind: t,
            museName: o("WAWebHatchPeerInvite").boundedHatchPeerName(
              o("WAWebHatchJsonReaders").readString(e, "muse_name"),
            ),
            personName:
              (a =
                (i = o("WAWebHatchPeerInvite").boundedHatchPeerName(
                  o("WAWebHatchJsonReaders").readString(e, "person_name"),
                )) != null
                  ? i
                  : o("WAWebHatchPeerInvite").boundedHatchPeerName(
                      o("WAWebHatchJsonReaders").readString(
                        o("WAWebHatchJsonReaders").readObject(e, "person"),
                        "display_name",
                      ),
                    )) != null
                ? a
                : "",
            receivedAtMs:
              (l = o("WAWebHatchJsonReaders").readInteger(e, r)) != null
                ? l
                : 0,
          };
    }
    function C(e, t, n) {
      var r = b(e);
      if (r == null) return { kind: "malformed" };
      var a = r.find(function (e) {
        return T(o("WAWebHatchJsonReaders").readString(e, t)) === n;
      });
      if (a == null) return { kind: "gone" };
      var i = T(o("WAWebHatchJsonReaders").readString(a, "invitation_url"));
      return i != null ? { kind: "ok", url: i } : { kind: "malformed" };
    }
    function b(e) {
      var t;
      return (t = o("WAWebHatchJsonReaders").readArray(e, "items")) == null
        ? void 0
        : t.filter(o("WAWebHatchJsonReaders").isObject);
    }
    function v(e) {
      return (
        o("WAWebHatchJsonReaders").readBool(
          o("WAWebHatchJsonReaders").readObject(e, "features"),
          "connect_intro",
        ) === !0
      );
    }
    function S(t) {
      if (o("WAWebHatchJsonReaders").readString(t, "state") !== "ready")
        return null;
      var n = o("WAWebHatchJsonReaders").readObject(t, "image"),
        r = o("WAWebHatchJsonReaders").readString(n, "sha256"),
        a = o("WAWebHatchJsonReaders").readInteger(n, "byte_length");
      return r != null &&
        e.test(r) &&
        o("WAWebHatchJsonReaders").readString(n, "mime_type") ===
          "image/jpeg" &&
        a != null &&
        a > 0
        ? { byteLength: a, sha256: r }
        : null;
    }
    function R(e) {
      var t,
        n,
        r,
        a = T(o("WAWebHatchJsonReaders").readString(e, "connection_id"));
      if (a == null) return null;
      var i = T(o("WAWebHatchJsonReaders").readString(e, "muse_id")),
        l = o("WAWebHatchJsonReaders").readObject(e, "contact");
      return {
        agentName:
          (t = o("WAWebHatchPeerInvite").boundedHatchPeerName(
            o("WAWebHatchJsonReaders").readString(e, "agent_name"),
          )) != null
            ? t
            : o("WAWebHatchPeerInvite").boundedHatchPeerName(
                o("WAWebHatchJsonReaders").readString(l, "agent_name"),
              ),
        capabilities: E(
          o("WAWebHatchJsonReaders").readObject(e, "capabilities"),
        ),
        chatSessionId: T(
          o("WAWebHatchJsonReaders").readString(e, "chat_session_id"),
        ),
        connectionId: a,
        displayName:
          (n =
            (r = o("WAWebHatchPeerInvite").boundedHatchPeerName(
              o("WAWebHatchJsonReaders").readString(e, "display_name"),
            )) != null
              ? r
              : o("WAWebHatchPeerInvite").boundedHatchPeerName(
                  o("WAWebHatchJsonReaders").readString(l, "display_name"),
                )) != null
            ? n
            : "",
        isGroup: o("WAWebHatchJsonReaders").readString(e, "audience") === s,
        museAvatar: L(i, "avatar", l, "muse_avatar"),
        museId: i,
        personPhoto: L(i, "photo", l, "profile_photo"),
      };
    }
    function L(t, n, r, a) {
      var i,
        l =
          (i = o("WAWebHatchJsonReaders").readString(
            o("WAWebHatchJsonReaders").readObject(r, a + "_ref"),
            "sha256",
          )) != null
            ? i
            : o("WAWebHatchJsonReaders").readString(
                o("WAWebHatchJsonReaders").readObject(r, a),
                "sha256",
              );
      return t != null && l != null && e.test(l)
        ? { kind: n, museId: t, sha256: l }
        : null;
    }
    function E(e) {
      return {
        disconnectEffect: T(
          o("WAWebHatchJsonReaders").readString(e, "disconnect_effect"),
        ),
        ordinaryProviderMessaging:
          o("WAWebHatchJsonReaders").readBool(
            e,
            "ordinary_provider_messaging",
          ) === !0,
        rulesEnforced:
          o("WAWebHatchJsonReaders").readBool(e, "rules_enforced") === !0,
      };
    }
    function k(e, t) {
      var n,
        r,
        a = T(o("WAWebHatchJsonReaders").readString(e, "rule_id")),
        i = T(o("WAWebHatchJsonReaders").readString(e, "description")),
        l =
          (n =
            (r = T(o("WAWebHatchJsonReaders").readString(e, "title"))) != null
              ? r
              : T(o("WAWebHatchJsonReaders").readString(e, "summary"))) != null
            ? n
            : i;
      return a == null || l == null
        ? null
        : { description: i, isConfirmed: !t.has(a), ruleId: a, title: l };
    }
    function I(e) {
      var t,
        n = (function (e) {
          return e === "enabled"
            ? "enabled"
            : e === "management_only"
              ? "management_only"
              : "unavailable";
        })(o("WAWebHatchJsonReaders").readString(e, "availability")),
        r =
          (t = o("WAWebHatchJsonReaders").readArray(e, "allowed_operations")) !=
          null
            ? t
            : [],
        a =
          n === "enabled" &&
          o("WAWebHatchJsonReaders").readBool(e, "supported") === !0 &&
          o("WAWebHatchJsonReaders").readBool(
            o("WAWebHatchJsonReaders").readObject(e, "features"),
            "pairing",
          ) === !0;
      return {
        availability: n,
        canAccept: a && r.includes("accept_invitation"),
        canInvite: a && r.includes("create_invitation"),
      };
    }
    function T(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    ((l.decodeHatchPeerConnections = u),
      (l.decodeHatchPeerConnectionsCursor = c),
      (l.decodeHatchPeerConnectionDetail = d),
      (l.decodeHatchPeerRequestBanner = m),
      (l.decodeHatchPeerInbox = p),
      (l.decodeHatchPeerOpenedInvites = _),
      (l.readHatchPeerInboxInvitationUrl = g),
      (l.readHatchPeerOpenedInvitationUrl = h),
      (l.decodeHatchPeerConnectIntroSupported = v),
      (l.decodeHatchPeerConnectIntroImage = S),
      (l.decodeHatchPeerStatus = I));
  },
  98,
);
