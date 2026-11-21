__d(
  "WAWebHatchPeerInvite",
  ["WAWebHatchJsonReaders", "WAWebHatchPeerInviteUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 409,
      s = /^[0-9a-f]{64}$/,
      u = 410,
      c = "no_session_id",
      d = 2048,
      m = 120,
      p = 256,
      _ =
        /(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/g,
      f =
        /(?!\n)(?:[\0-\x1F\x7F-\x9F\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F])/g;
    function g(e) {
      if (
        o("WAWebHatchJsonReaders").readNumber(e, "version") !== 1 ||
        o("WAWebHatchJsonReaders").readString(e, "action") !== "accept"
      )
        return null;
      var t = o("WAWebHatchJsonReaders").readString(e, "invitation_url"),
        n = T(o("WAWebHatchJsonReaders").readString(e, "body"), d, !0),
        r = T(o("WAWebHatchJsonReaders").readString(e, "button_label"), m);
      return t == null ||
        !o("WAWebHatchPeerInviteUrl").isHatchPeerInviteUrl(t) ||
        n == null ||
        r == null
        ? null
        : {
            accepted: o("WAWebHatchJsonReaders").readBool(e, "accepted") === !0,
            body: n,
            buttonLabel: r,
            deliveryId: T(
              o("WAWebHatchJsonReaders").readString(e, "delivery_id"),
              p,
            ),
            invitationUrl: t,
            museId: E(o("WAWebHatchJsonReaders").readString(e, "muse_id")),
            museName: T(
              o("WAWebHatchJsonReaders").readString(e, "muse_name"),
              p,
            ),
            peerMuseAvatarSha256: L(
              o("WAWebHatchJsonReaders").readString(e, "peer_muse_avatar"),
            ),
            personName: T(
              o("WAWebHatchJsonReaders").readString(e, "person_name"),
              p,
            ),
          };
    }
    function h(e) {
      return T(e, p);
    }
    function y(e) {
      if (e.kind === "Rejected")
        return { outcome: k(I(e)), presentedIn: null, reason: null };
      if (e.kind !== "Ok")
        return { outcome: "failed", presentedIn: null, reason: null };
      var t = (function (e) {
        return e === "posted"
          ? "posted"
          : e === "already_paired"
            ? "already_paired"
            : e === "expired"
              ? "expired"
              : e === "invalid"
                ? "invalid"
                : "failed";
      })(o("WAWebHatchJsonReaders").readString(e.value, "status"));
      return {
        outcome: t,
        presentedIn: C(e),
        reason: o("WAWebHatchJsonReaders").readString(e.value, "reason"),
      };
    }
    function C(e) {
      var t;
      return e.kind !== "Ok"
        ? null
        : (function (e) {
            return e === void 0 || e === ""
              ? null
              : e === "whatsapp"
                ? "whatsapp"
                : e === "app"
                  ? "app"
                  : "other";
          })(
            (t = o("WAWebHatchJsonReaders").readString(
              e.value,
              "presented_in",
            )) == null
              ? void 0
              : t.trim(),
          );
    }
    function b(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Ok" &&
          "value" in e
        ) {
          var t = e.value;
          if (E(o("WAWebHatchJsonReaders").readString(t, "muse_id")) == null)
            return "failed";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Ok" &&
          "value" in e
        ) {
          var n = e.value;
          return o("WAWebHatchJsonReaders").readBool(
            n,
            "pending_remote_confirmation",
          ) === !1
            ? "connected"
            : "requested";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Rejected"
        ) {
          var r = e;
          return I(r);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "Failure" &&
          "detail" in e
        ) {
          var a = e.detail;
          if (a === c) return "no_chat";
        }
        return "failed";
      })(e);
    }
    function v(e) {
      return e.kind === "Ok"
        ? E(o("WAWebHatchJsonReaders").readString(e.value, "muse_id"))
        : null;
    }
    function S(e, t) {
      var n = o("WAWebHatchJsonReaders")
        .readObjects(e, "items")
        .find(function (e) {
          return E(o("WAWebHatchJsonReaders").readString(e, "muse_id")) === t;
        });
      return n == null
        ? "absent"
        : o("WAWebHatchJsonReaders").readString(n, "status") === "verified"
          ? "verified"
          : "not_verified";
    }
    function R(e) {
      return E(o("WAWebHatchJsonReaders").readString(e, "next_cursor"));
    }
    function L(e) {
      return e != null && s.test(e) ? e : null;
    }
    function E(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    function k(e) {
      return e === "already_paired"
        ? "already_paired"
        : e === "expired"
          ? "expired"
          : e === "invalid"
            ? "invalid"
            : e === "requested" ||
                e === "connected" ||
                e === "conflict" ||
                e === "no_chat" ||
                e === "failed"
              ? "failed"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function I(t) {
      var n,
        r = (n = t.errorCode) != null ? n : "";
      return r === "already_paired"
        ? "already_paired"
        : r.includes("expired") || t.statusCode === u
          ? "expired"
          : r.includes("invalid") || r === "peer_invite_generation_unsupported"
            ? "invalid"
            : t.statusCode === e
              ? "conflict"
              : "failed";
    }
    function T(e, t, n) {
      n === void 0 && (n = !1);
      var r = e == null ? void 0 : e.replace(n ? f : _, "").trim();
      return r == null || r === "" ? null : Array.from(r).slice(0, t).join("");
    }
    ((l.HATCH_PEER_INVITE_NO_SESSION = c),
      (l.parseHatchPairingLauncherAccept = g),
      (l.boundedHatchPeerName = h),
      (l.decodeHatchPeerInviteOpenResult = y),
      (l.readHatchPeerInvitePresentedIn = C),
      (l.decodeHatchPeerInviteAcceptResult = b),
      (l.readHatchPeerInviteAcceptedMuseId = v),
      (l.readHatchPeerContactStatus = S),
      (l.readHatchPeerContactsCursor = R));
  },
  98,
);
