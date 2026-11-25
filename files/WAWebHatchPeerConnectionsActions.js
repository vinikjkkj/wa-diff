__d(
  "WAWebHatchPeerConnectionsActions",
  [
    "WACryptoSha256",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchAttestationBytes",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchPeerConnectionsDecoder",
    "WAWebHatchPeerInviteActions",
    "WAWebHatchPeerInviteUrl",
    "WAWebHatchPeerRecommendationsDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebPonyfillsCryptoRandomUUID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 100,
      c = 10,
      d = 25e3,
      m = 25e3,
      p = 3e4,
      _ = "https://muse.ai/peer/accept#",
      f = "restricted",
      g = 4096,
      h = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
      y = new Set([
        "invite_create_request_conflict",
        "invite_create_request_terminal",
        "invite_create_request_generation_unsupported",
      ]),
      C = new Set(["already_paired", "connected", "requested"]),
      b = { avatar: 128 * 1024, photo: 32 * 1024 },
      v = 1024 * 1024,
      S = 4,
      R = new Set(["already_ended", "declined", "unknown"]),
      L = 409,
      E = 403,
      k = 404,
      I = 503,
      T = "peer_rule_not_found",
      D = "disabled",
      x = new Set(["connections_unavailable", "peer_operation_unavailable"]),
      $ = { availability: "unavailable", canAccept: !1, canInvite: !1 };
    async function P() {
      return ie("read-status", async function (e) {
        var t = await e.request(
          "GET",
          o("WAWebHatchVmTransport").JarvisPaths.PEERS_STATUS,
          { responseShape: "flat-or-envelope" },
        );
        return t.kind === "Ok"
          ? {
              kind: "ok",
              value: o(
                "WAWebHatchPeerConnectionsDecoder",
              ).decodeHatchPeerStatus(t.value),
            }
          : le(t)
            ? { kind: "ok", value: $ }
            : pe("read-status", t);
      });
    }
    var N = new Map();
    async function M() {
      return ie("read-connections", function (e) {
        return w(e, null, 0, []);
      });
    }
    async function w(t, n, r, a) {
      var i = await t.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTIONS(u, n),
        { responseShape: "flat-or-envelope" },
      );
      if (i.kind !== "Ok") return pe("read-connections", i);
      var l = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerConnections(
        i.value,
      );
      if (l == null) return _e("read-connections", "malformed");
      var s = [].concat(a, l),
        d = o(
          "WAWebHatchPeerConnectionsDecoder",
        ).decodeHatchPeerConnectionsCursor(i.value);
      return d == null
        ? { kind: "ok", value: s }
        : d === n || r + 1 >= c
          ? (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-peer-connections: read-connections truncated reason=",
                    " count=",
                    "",
                  ])),
                d === n ? "cursor_repeat" : "page_cap",
                s.length,
              )
              .sendLogs("hatch-peer-connections-truncated"),
            { kind: "ok", value: s })
          : w(t, d, r + 1, s);
    }
    async function A(e) {
      return ie("read-connection", async function (t) {
        var n = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION(e);
        if (n == null) return _e("read-connection", "invalid_id");
        var r = await t.request("GET", n, {
          responseShape: "flat-or-envelope",
        });
        if (r.kind !== "Ok") return pe("read-connection", r);
        var a = o(
          "WAWebHatchPeerConnectionsDecoder",
        ).decodeHatchPeerConnectionDetail(r.value);
        return a != null
          ? { kind: "ok", value: a }
          : _e("read-connection", "malformed");
      });
    }
    async function F(e) {
      return ie("read-requests", async function (t) {
        var n = await te(t);
        return n != null && (!e || n.count === n.items.length)
          ? { kind: "ok", value: n }
          : ne(t);
      });
    }
    async function O() {
      return o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
        ? ie("read-recommendations", async function (e) {
            var t = await e.request(
              "GET",
              o("WAWebHatchVmTransport").JarvisPaths.PEERS_RECOMMENDATIONS,
              { responseShape: "flat-or-envelope", timeoutMs: m },
            );
            if (
              !o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
            )
              return { kind: "ok", value: [] };
            if (t.kind !== "Ok")
              return se(t)
                ? { kind: "ok", value: [] }
                : pe("read-recommendations", t);
            var n = o(
              "WAWebHatchPeerRecommendationsDecoder",
            ).decodeHatchPeerRecommendations(t.value);
            return n != null
              ? { kind: "ok", value: n }
              : _e("read-recommendations", "malformed");
          })
        : { kind: "ok", value: [] };
    }
    var B = new Map(),
      W = new Set();
    function q(e, t) {
      return H(e, t, function (e) {
        var t,
          n = "" + _ + ((t = be(e, "fragment")) != null ? t : "");
        return o("WAWebHatchPeerInviteUrl").isHatchPeerInviteUrl(n) ? n : null;
      });
    }
    function U(e, t) {
      return H(e, t, function (e) {
        var t = be(e, "invite_b64"),
          n = o("WAWebHatchJsonReaders").readInteger(e, "expires_at_ms");
        return t != null &&
          ye(t) &&
          n != null &&
          Number.isSafeInteger(n) &&
          n > 0
          ? { expiresAtMs: n, inviteB64: t }
          : null;
      });
    }
    async function V(e, t) {
      return o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
        ? ie("mailbox-send", async function (n) {
            var r = await n.request(
              "POST",
              o("WAWebHatchVmTransport").JarvisPaths.PEERS_MAILBOX_SEND,
              {
                body: ve({
                  expires_at_ms: t.expiresAtMs,
                  invite_b64: t.inviteB64,
                  offered_preset: f,
                  recipient: he(e),
                }),
                responseShape: "flat-or-envelope",
                timeoutMs: d,
              },
            );
            if (r.kind !== "Ok")
              return le(r) ? { kind: "failed" } : pe("mailbox-send", r);
            var a = Ce(r.value);
            return a != null
              ? { kind: "ok", value: a }
              : _e("mailbox-send", "not_sent");
          })
        : { kind: "failed" };
    }
    async function H(e, t, n) {
      if (!o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled())
        return { kind: "failed" };
      var r = String(o("WAWebHatchVmConnection").getHatchVmAccountGeneration()),
        a = r + "|" + t,
        i = ue(r, a),
        l = e.replace(/[\0-\x1F\x7F-\x9F]/g, "").trim();
      try {
        return await ie("mint-invite", async function (e) {
          var t = await e.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES,
            {
              body: ve({
                create_request_id: i,
                label: l,
                offered_preset: f,
                recipient_name: l,
              }),
              responseShape: "flat-or-envelope",
              timeoutMs: p,
            },
          );
          if ((de(t) && ce(a, i), t.kind !== "Ok"))
            return le(t) ? { kind: "failed" } : pe("mint-invite", t);
          var r = n(t.value);
          return r != null
            ? { kind: "ok", value: r }
            : _e("mint-invite", "malformed");
        });
      } finally {
        W.delete(i);
      }
    }
    async function G(e, t) {
      t === void 0 && (t = o("WAWebBoolFunc").returnTrue);
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = function () {
          return me(n) && t();
        };
      if (!t()) return { kind: "failed" };
      var a = await ie("accept-read", async function (n) {
        if (!t()) return { kind: "failed" };
        var r = await (e.kind === "delivery" ? re(n) : oe(n));
        if (r.kind !== "Ok") return pe("accept-read", r);
        var a =
          e.kind === "delivery"
            ? o(
                "WAWebHatchPeerConnectionsDecoder",
              ).readHatchPeerInboxInvitationUrl(r.value, e.id)
            : o(
                "WAWebHatchPeerConnectionsDecoder",
              ).readHatchPeerOpenedInvitationUrl(r.value, e.id);
        return (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "ok" &&
            "url" in e
          ) {
            var t = e.url;
            return { kind: "ok", value: t };
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "gone"
          )
            return { kind: "gone" };
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "malformed"
          )
            return _e("accept-read", "malformed");
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(a);
      });
      if (a.kind !== "ok") return t() ? a : { kind: "failed" };
      if (!r()) return { kind: "failed" };
      var i = await o("WAWebHatchPeerInviteActions").acceptHatchPeerInvite(
        a.value,
        r,
      );
      return r()
        ? C.has(i)
          ? { kind: "ok", value: null }
          : _e("accept", i)
        : { kind: "failed" };
    }
    async function z(e) {
      return ae(
        "ignore",
        function (t) {
          return t.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX_DECLINE,
            {
              body: ve({ delivery_id: e }),
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            },
          );
        },
        function (e) {
          return R.has(be(e, "status"));
        },
      );
    }
    async function j(e) {
      var t = o(
        "WAWebHatchVmTransport",
      ).JarvisPaths.PEERS_CONNECTION_DISCONNECT(e);
      return t == null
        ? _e("disconnect", "invalid_id")
        : ae(
            "disconnect",
            function (e) {
              return e.request("POST", t, {
                body: ve({}),
                responseShape: "flat-or-envelope",
                timeoutMs: d,
              });
            },
            function (e) {
              return ge(e, "disconnected");
            },
          );
    }
    async function K(e, t, n, r) {
      var a = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULES(e);
      return a == null
        ? _e("add-rule", "invalid_id")
        : ie("add-rule", async function (e) {
            var o = await e.request("POST", a, {
              body: ve({ description: n, expected_revision: t, rule_id: r }),
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            });
            return o.kind !== "Ok"
              ? pe("add-rule", o)
              : fe(o.value, r, t)
                ? { kind: "ok", value: null }
                : _e("add-rule", "not_applied");
          });
    }
    async function Q(e, t) {
      var n = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULE(
        e,
        t,
      );
      return n == null
        ? _e("remove-rule", "invalid_id")
        : ie("remove-rule", async function (e) {
            var t = await e.request("DELETE", n, {
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            });
            return t.kind === "Rejected" && t.errorCode === T
              ? { kind: "ok", value: null }
              : t.kind !== "Ok"
                ? pe("remove-rule", t)
                : ge(t.value, "accepted")
                  ? { kind: "ok", value: null }
                  : _e("remove-rule", "not_applied");
          });
    }
    async function X(e) {
      var t = await ie("read-image", async function (t) {
        var n = await t.peerImage(e.museId, e.kind, e.sha256);
        return n.kind !== "Ok"
          ? pe("read-image", n)
          : ee("read-image", n.value, {
              maxBytes: b[e.kind],
              sha256: e.sha256,
            });
      });
      return t.kind === "ok"
        ? URL.createObjectURL(new Blob([t.value], { type: "image/jpeg" }))
        : null;
    }
    async function Y() {
      var e = await ie("read-connect-intro", J);
      return e.kind === "ok" ? URL.createObjectURL(e.value) : null;
    }
    async function J(e) {
      var t = await e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_STATUS,
        { responseShape: "flat-or-envelope" },
      );
      if (t.kind !== "Ok")
        return _e("read-connect-intro", t.kind.toLowerCase());
      if (
        !o(
          "WAWebHatchPeerConnectionsDecoder",
        ).decodeHatchPeerConnectIntroSupported(t.value)
      )
        return { kind: "gone" };
      var n = await e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECT_INTRO,
        { responseShape: "flat-or-envelope" },
      );
      if (n.kind !== "Ok")
        return n.kind === "Rejected" && n.statusCode === I
          ? { kind: "gone" }
          : pe("read-connect-intro", n);
      var r = o(
        "WAWebHatchPeerConnectionsDecoder",
      ).decodeHatchPeerConnectIntroImage(n.value);
      if (r == null) return { kind: "gone" };
      var a = N.get(r.sha256);
      return a != null ? { kind: "ok", value: a } : Z(e, r);
    }
    async function Z(e, t) {
      if (t.byteLength > v) return _e("read-connect-intro-image", "size");
      var n = await e.peerConnectIntroImage(t.sha256);
      if (n.kind !== "Ok") return pe("read-connect-intro-image", n);
      var r = await ee("read-connect-intro-image", n.value, {
        byteLength: t.byteLength,
        maxBytes: v,
        sha256: t.sha256,
      });
      if (r.kind !== "ok") return { kind: "failed" };
      var o = new Blob([r.value], { type: "image/jpeg" });
      return (
        N.size >= S && N.clear(),
        N.set(t.sha256, o),
        { kind: "ok", value: o }
      );
    }
    async function ee(e, t, n) {
      if (
        t.byteLength === 0 ||
        t.byteLength > n.maxBytes ||
        (n.byteLength != null && t.byteLength !== n.byteLength)
      )
        return _e(e, "size");
      var r;
      try {
        r = await o("WACryptoSha256").sha256(t);
      } catch (t) {
        return _e(e, "digest_unavailable");
      }
      return o("WAWebHatchAttestationBytes").bytesToHex(new Uint8Array(r)) ===
        n.sha256
        ? { kind: "ok", value: t }
        : _e(e, "digest_mismatch");
    }
    async function te(e) {
      var t = await e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_REQUEST_BANNER,
        { responseShape: "flat-or-envelope" },
      );
      return t.kind === "Ok"
        ? o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerRequestBanner(
            t.value,
          )
        : null;
    }
    async function ne(e) {
      var t = await Promise.all([re(e), oe(e)]),
        n = t[0],
        r = t[1];
      if (n.kind !== "Ok") return pe("read-inbox", n);
      var a = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerInbox(
        n.value,
      );
      if (a == null) return _e("read-inbox", "malformed");
      var i = [];
      if (r.kind === "Ok")
        i = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerOpenedInvites(
          r.value,
        );
      else if (!le(r)) return pe("read-opened", r);
      if (i == null) return _e("read-opened", "malformed");
      var l = [].concat(a, i).sort(function (e, t) {
        return t.receivedAtMs - e.receivedAtMs;
      });
      return { kind: "ok", value: { count: l.length, items: l } };
    }
    function re(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX,
        { responseShape: "flat-or-envelope" },
      );
    }
    function oe(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_OPENED,
        { responseShape: "flat-or-envelope" },
      );
    }
    async function ae(e, t, n) {
      return (
        n === void 0 && (n = o("WAWebBoolFunc").returnTrue),
        ie(e, async function (r) {
          var o = await t(r);
          return o.kind !== "Ok"
            ? pe(e, o)
            : n(o.value)
              ? { kind: "ok", value: null }
              : _e(e, "not_applied");
        })
      );
    }
    async function ie(e, t) {
      if (!o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled())
        return { kind: "failed" };
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
          new AbortController().signal,
        );
      if (!me(n)) return { kind: "failed" };
      if (r.kind !== "ready") return _e(e, "no_vm");
      var a = await t(r.api);
      return me(n) ? a : { kind: "failed" };
    }
    function le(e) {
      return (
        e.kind === "Rejected" &&
        (e.statusCode === k ||
          e.errorCode === D ||
          (e.statusCode === I && x.has(e.errorCode)))
      );
    }
    function se(e) {
      return le(e) || (e.kind === "Rejected" && e.statusCode === E);
    }
    function ue(e, t) {
      for (var n of B.keys()) n.startsWith(e + "|") || B.delete(n);
      var o = B.get(t),
        a = o != null && !W.has(o) ? o : r("WAWebPonyfillsCryptoRandomUUID")();
      return (B.set(t, a), W.add(a), a);
    }
    function ce(e, t) {
      B.get(e) === t && B.delete(e);
    }
    function de(e) {
      return (
        e.kind === "Ok" ||
        le(e) ||
        (e.kind === "Rejected" && (e.statusCode === L || y.has(e.errorCode)))
      );
    }
    function me(e) {
      return (
        o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled() &&
        e === o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      );
    }
    function pe(e, t) {
      return t.kind === "Rejected" && t.statusCode === L
        ? { kind: "conflict" }
        : _e(e, t.kind.toLowerCase());
    }
    function _e(e, t) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-peer-connections: ",
                " failed reason=",
                "",
              ])),
            e,
            t,
          )
          .sendLogs("hatch-peer-connections-failed"),
        { kind: "failed" }
      );
    }
    function fe(e, t, n) {
      var r = o("WAWebHatchJsonReaders").readInteger(e, "revision"),
        a = o("WAWebHatchJsonReaders").readObject(e, "rule");
      return (
        r != null &&
        Number.isSafeInteger(r) &&
        r > 0 &&
        r >= n &&
        o("WAWebHatchJsonReaders").readString(a, "rule_id") === t &&
        o("WAWebHatchJsonReaders").readTrimmedString(a, "title") !== "" &&
        o("WAWebHatchJsonReaders").readTrimmedString(a, "description") !== ""
      );
    }
    function ge(e, t) {
      return (
        e != null && typeof e == "object" && !Array.isArray(e) && e[t] === !0
      );
    }
    function he(e) {
      return { app_target: "WHATSAPP", recipient_id: e.lid.user };
    }
    function ye(e) {
      return e.length > 0 && e.length <= g && h.test(e);
    }
    function Ce(e) {
      return (function (t) {
        return t === "sent"
          ? be(e, "delivery_id") != null
            ? "sent"
            : null
          : t === "not_reachable"
            ? "not_reachable"
            : null;
      })(be(e, "status"));
    }
    function be(e, t) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function ve(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    ((l.readHatchPeerStatus = P),
      (l.readHatchPeerConnections = M),
      (l.readHatchPeerConnection = A),
      (l.readHatchPeerRequests = F),
      (l.readHatchPeerRecommendations = O),
      (l.mintHatchPeerInviteLink = q),
      (l.mintHatchPeerMailboxInvite = U),
      (l.sendHatchPeerMailboxInvite = V),
      (l.acceptHatchPeerRequest = G),
      (l.ignoreHatchPeerInboxRequest = z),
      (l.disconnectHatchPeerConnection = j),
      (l.addHatchPeerConnectionRule = K),
      (l.removeHatchPeerConnectionRule = Q),
      (l.readHatchPeerImageUrl = X),
      (l.readHatchPeerConnectIntroImageUrl = Y));
  },
  98,
);
