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
      u,
      c = 100,
      d = 10,
      m = 25e3,
      p = 25e3,
      _ = 3e4,
      f = "https://muse.ai/peer/accept#",
      g = "restricted",
      h = 4096,
      y = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
      C = new Set([
        "invite_create_request_conflict",
        "invite_create_request_terminal",
        "invite_create_request_generation_unsupported",
      ]),
      b = new Set(["already_paired", "connected", "requested"]),
      v = { avatar: 128 * 1024, photo: 32 * 1024 },
      S = 1024 * 1024,
      R = 4,
      L = new Set(["already_ended", "declined", "unknown"]),
      E = 409,
      k = 403,
      I = 404,
      T = 502,
      D = 503,
      x = 3e4,
      $ = 4e4,
      P = new Set([k, I, T, D]),
      N = "peer_rule_not_found",
      M = "disabled",
      w = new Set(["connections_unavailable", "peer_operation_unavailable"]),
      A = { availability: "unavailable", canAccept: !1, canInvite: !1 };
    async function F() {
      return _e("read-status", async function (e) {
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
          : fe(t)
            ? { kind: "ok", value: A }
            : ve("read-status", t);
      });
    }
    var O = new Map(),
      B = null;
    async function W() {
      return _e("read-connections", function (e) {
        return q(e, null, 0, []);
      });
    }
    async function q(t, n, r, a) {
      var i = await t.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTIONS(c, n),
        { responseShape: "flat-or-envelope" },
      );
      if (i.kind !== "Ok") return ve("read-connections", i);
      var l = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerConnections(
        i.value,
      );
      if (l == null) return Se("read-connections", "malformed");
      var s = [].concat(a, l),
        u = o(
          "WAWebHatchPeerConnectionsDecoder",
        ).decodeHatchPeerConnectionsCursor(i.value);
      return u == null
        ? { kind: "ok", value: s }
        : u === n || r + 1 >= d
          ? (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-peer-connections: read-connections truncated reason=",
                    " count=",
                    "",
                  ])),
                u === n ? "cursor_repeat" : "page_cap",
                s.length,
              )
              .sendLogs("hatch-peer-connections-truncated"),
            { kind: "ok", value: s })
          : q(t, u, r + 1, s);
    }
    async function U(e) {
      return _e("read-connection", async function (t) {
        var n = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION(e);
        if (n == null) return Se("read-connection", "invalid_id");
        var r = await t.request("GET", n, {
          responseShape: "flat-or-envelope",
        });
        if (r.kind !== "Ok") return ve("read-connection", r);
        var a = o(
          "WAWebHatchPeerConnectionsDecoder",
        ).decodeHatchPeerConnectionDetail(r.value);
        return a != null
          ? { kind: "ok", value: a }
          : Se("read-connection", "malformed");
      });
    }
    async function V(e) {
      return _e("read-requests", async function (t) {
        var n = await ue(t);
        return n != null && (!e || n.count === n.items.length)
          ? { kind: "ok", value: n }
          : ce(t);
      });
    }
    async function H() {
      return o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
        ? _e("read-recommendations", async function (e) {
            var t = await e.request(
              "GET",
              o("WAWebHatchVmTransport").JarvisPaths.PEERS_RECOMMENDATIONS,
              { responseShape: "flat-or-envelope", timeoutMs: p },
            );
            if (
              !o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
            )
              return { kind: "ok", value: [] };
            if (t.kind !== "Ok")
              return ge(t)
                ? { kind: "ok", value: [] }
                : ve("read-recommendations", t);
            var n = o(
              "WAWebHatchPeerRecommendationsDecoder",
            ).decodeHatchPeerRecommendations(t.value);
            return n != null
              ? { kind: "ok", value: n }
              : Se("read-recommendations", "malformed");
          })
        : { kind: "ok", value: [] };
    }
    var G = new Map(),
      z = new Set();
    function j(e, t) {
      return X(e, t, function (e) {
        var t,
          n = "" + f + ((t = Te(e, "fragment")) != null ? t : "");
        return o("WAWebHatchPeerInviteUrl").isHatchPeerInviteUrl(n) ? n : null;
      });
    }
    function K(e, t) {
      return X(e, t, function (e) {
        var t = Te(e, "invite_b64"),
          n = o("WAWebHatchJsonReaders").readInteger(e, "expires_at_ms");
        return t != null &&
          ke(t) &&
          n != null &&
          Number.isSafeInteger(n) &&
          n > 0
          ? { expiresAtMs: n, inviteB64: t }
          : null;
      });
    }
    async function Q(e, t) {
      return o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
        ? _e("mailbox-send", async function (n) {
            var r = await n.request(
              "POST",
              o("WAWebHatchVmTransport").JarvisPaths.PEERS_MAILBOX_SEND,
              {
                body: De({
                  expires_at_ms: t.expiresAtMs,
                  invite_b64: t.inviteB64,
                  offered_preset: g,
                  recipient: Ee(e),
                }),
                responseShape: "flat-or-envelope",
                timeoutMs: m,
              },
            );
            if (r.kind !== "Ok")
              return fe(r) ? { kind: "failed" } : ve("mailbox-send", r);
            var a = Ie(r.value);
            return a != null
              ? { kind: "ok", value: a }
              : Se("mailbox-send", "not_sent");
          })
        : { kind: "failed" };
    }
    async function X(e, t, n) {
      if (!o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled())
        return { kind: "failed" };
      var r = String(o("WAWebHatchVmConnection").getHatchVmAccountGeneration()),
        a = r + "|" + t,
        i = he(r, a),
        l = e.replace(/[\0-\x1F\x7F-\x9F]/g, "").trim();
      try {
        return await _e("mint-invite", async function (e) {
          var t = await e.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES,
            {
              body: De({
                create_request_id: i,
                label: l,
                offered_preset: g,
                recipient_name: l,
              }),
              responseShape: "flat-or-envelope",
              timeoutMs: _,
            },
          );
          if ((Ce(t) && ye(a, i), t.kind !== "Ok"))
            return fe(t) ? { kind: "failed" } : ve("mint-invite", t);
          var r = n(t.value);
          return r != null
            ? { kind: "ok", value: r }
            : Se("mint-invite", "malformed");
        });
      } finally {
        z.delete(i);
      }
    }
    async function Y(e, t) {
      t === void 0 && (t = o("WAWebBoolFunc").returnTrue);
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = function () {
          return be(n) && t();
        };
      if (!t()) return { kind: "failed" };
      var a = await _e("accept-read", async function (n) {
        if (!t()) return { kind: "failed" };
        var r = await (e.kind === "delivery" ? de(n) : me(n));
        if (r.kind !== "Ok") return ve("accept-read", r);
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
            return Se("accept-read", "malformed");
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
        ? b.has(i)
          ? { kind: "ok", value: null }
          : Se("accept", i)
        : { kind: "failed" };
    }
    function J() {
      var e = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        t = Date.now(),
        n = B;
      if (
        n != null &&
        n.generation === e &&
        (n.fetched != null || t - n.atMs < x)
      ) {
        var r;
        return (r = n.fetched) != null ? r : Promise.resolve(!1);
      }
      var a = { atMs: t, fetched: null, generation: e },
        i = Z().finally(function () {
          a.fetched = null;
        });
      return ((a.fetched = i), (B = a), i);
    }
    async function Z() {
      var e = await _e("fetch-inbox", async function (e) {
        var t = await e.request(
          "POST",
          o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX_FETCH,
          { responseShape: "flat-or-envelope", timeoutMs: $ },
        );
        return t.kind === "Ok"
          ? { kind: "ok", value: null }
          : t.kind === "Rejected" && P.has(t.statusCode)
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-peer-connections: fetch-inbox unavailable status=",
                    "",
                  ])),
                String(t.statusCode),
              ),
              { kind: "failed" })
            : ve("fetch-inbox", t);
      });
      return e.kind === "ok";
    }
    async function ee(e) {
      return pe(
        "ignore",
        function (t) {
          return t.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX_DECLINE,
            {
              body: De({ delivery_id: e }),
              responseShape: "flat-or-envelope",
              timeoutMs: m,
            },
          );
        },
        function (e) {
          return L.has(Te(e, "status"));
        },
      );
    }
    async function te(e) {
      var t = o(
        "WAWebHatchVmTransport",
      ).JarvisPaths.PEERS_CONNECTION_DISCONNECT(e);
      return t == null
        ? Se("disconnect", "invalid_id")
        : pe(
            "disconnect",
            function (e) {
              return e.request("POST", t, {
                body: De({}),
                responseShape: "flat-or-envelope",
                timeoutMs: m,
              });
            },
            function (e) {
              return Le(e, "disconnected");
            },
          );
    }
    async function ne(e, t, n, r) {
      var a = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULES(e);
      return a == null
        ? Se("add-rule", "invalid_id")
        : _e("add-rule", async function (e) {
            var o = await e.request("POST", a, {
              body: De({ description: n, expected_revision: t, rule_id: r }),
              responseShape: "flat-or-envelope",
              timeoutMs: m,
            });
            return o.kind !== "Ok"
              ? ve("add-rule", o)
              : Re(o.value, r, t)
                ? { kind: "ok", value: null }
                : Se("add-rule", "not_applied");
          });
    }
    async function re(e, t) {
      var n = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULE(
        e,
        t,
      );
      return n == null
        ? Se("remove-rule", "invalid_id")
        : _e("remove-rule", async function (e) {
            var t = await e.request("DELETE", n, {
              responseShape: "flat-or-envelope",
              timeoutMs: m,
            });
            return t.kind === "Rejected" && t.errorCode === N
              ? { kind: "ok", value: null }
              : t.kind !== "Ok"
                ? ve("remove-rule", t)
                : Le(t.value, "accepted")
                  ? { kind: "ok", value: null }
                  : Se("remove-rule", "not_applied");
          });
    }
    async function oe(e) {
      var t = await _e("read-image", async function (t) {
        var n = await t.peerImage(e.museId, e.kind, e.sha256);
        return n.kind !== "Ok"
          ? ve("read-image", n)
          : se("read-image", n.value, {
              maxBytes: v[e.kind],
              sha256: e.sha256,
            });
      });
      return t.kind === "ok"
        ? URL.createObjectURL(new Blob([t.value], { type: "image/jpeg" }))
        : null;
    }
    async function ae() {
      var e = await _e("read-connect-intro", ie);
      return e.kind === "ok" ? URL.createObjectURL(e.value) : null;
    }
    async function ie(e) {
      var t = await e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_STATUS,
        { responseShape: "flat-or-envelope" },
      );
      if (t.kind !== "Ok")
        return Se("read-connect-intro", t.kind.toLowerCase());
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
        return n.kind === "Rejected" && n.statusCode === D
          ? { kind: "gone" }
          : ve("read-connect-intro", n);
      var r = o(
        "WAWebHatchPeerConnectionsDecoder",
      ).decodeHatchPeerConnectIntroImage(n.value);
      if (r == null) return { kind: "gone" };
      var a = O.get(r.sha256);
      return a != null ? { kind: "ok", value: a } : le(e, r);
    }
    async function le(e, t) {
      if (t.byteLength > S) return Se("read-connect-intro-image", "size");
      var n = await e.peerConnectIntroImage(t.sha256);
      if (n.kind !== "Ok") return ve("read-connect-intro-image", n);
      var r = await se("read-connect-intro-image", n.value, {
        byteLength: t.byteLength,
        maxBytes: S,
        sha256: t.sha256,
      });
      if (r.kind !== "ok") return { kind: "failed" };
      var o = new Blob([r.value], { type: "image/jpeg" });
      return (
        O.size >= R && O.clear(),
        O.set(t.sha256, o),
        { kind: "ok", value: o }
      );
    }
    async function se(e, t, n) {
      if (
        t.byteLength === 0 ||
        t.byteLength > n.maxBytes ||
        (n.byteLength != null && t.byteLength !== n.byteLength)
      )
        return Se(e, "size");
      var r;
      try {
        r = await o("WACryptoSha256").sha256(t);
      } catch (t) {
        return Se(e, "digest_unavailable");
      }
      return o("WAWebHatchAttestationBytes").bytesToHex(new Uint8Array(r)) ===
        n.sha256
        ? { kind: "ok", value: t }
        : Se(e, "digest_mismatch");
    }
    async function ue(e) {
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
    async function ce(e) {
      var t = await Promise.all([de(e), me(e)]),
        n = t[0],
        r = t[1];
      if (n.kind !== "Ok") return ve("read-inbox", n);
      var a = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerInbox(
        n.value,
      );
      if (a == null) return Se("read-inbox", "malformed");
      var i = [];
      if (r.kind === "Ok")
        i = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerOpenedInvites(
          r.value,
        );
      else if (!fe(r)) return ve("read-opened", r);
      if (i == null) return Se("read-opened", "malformed");
      var l = [].concat(a, i).sort(function (e, t) {
        return t.receivedAtMs - e.receivedAtMs;
      });
      return { kind: "ok", value: { count: l.length, items: l } };
    }
    function de(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX,
        { responseShape: "flat-or-envelope" },
      );
    }
    function me(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_OPENED,
        { responseShape: "flat-or-envelope" },
      );
    }
    async function pe(e, t, n) {
      return (
        n === void 0 && (n = o("WAWebBoolFunc").returnTrue),
        _e(e, async function (r) {
          var o = await t(r);
          return o.kind !== "Ok"
            ? ve(e, o)
            : n(o.value)
              ? { kind: "ok", value: null }
              : Se(e, "not_applied");
        })
      );
    }
    async function _e(e, t) {
      if (!o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled())
        return { kind: "failed" };
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
          new AbortController().signal,
        );
      if (!be(n)) return { kind: "failed" };
      if (r.kind !== "ready") return Se(e, "no_vm");
      var a = await t(r.api);
      return be(n) ? a : { kind: "failed" };
    }
    function fe(e) {
      return (
        e.kind === "Rejected" &&
        (e.statusCode === I ||
          e.errorCode === M ||
          (e.statusCode === D && w.has(e.errorCode)))
      );
    }
    function ge(e) {
      return fe(e) || (e.kind === "Rejected" && e.statusCode === k);
    }
    function he(e, t) {
      for (var n of G.keys()) n.startsWith(e + "|") || G.delete(n);
      var o = G.get(t),
        a = o != null && !z.has(o) ? o : r("WAWebPonyfillsCryptoRandomUUID")();
      return (G.set(t, a), z.add(a), a);
    }
    function ye(e, t) {
      G.get(e) === t && G.delete(e);
    }
    function Ce(e) {
      return (
        e.kind === "Ok" ||
        fe(e) ||
        (e.kind === "Rejected" && (e.statusCode === E || C.has(e.errorCode)))
      );
    }
    function be(e) {
      return (
        o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled() &&
        e === o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      );
    }
    function ve(e, t) {
      return t.kind === "Rejected" && t.statusCode === E
        ? { kind: "conflict" }
        : Se(e, t.kind.toLowerCase());
    }
    function Se(e, t) {
      return (
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function Re(e, t, n) {
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
    function Le(e, t) {
      return (
        e != null && typeof e == "object" && !Array.isArray(e) && e[t] === !0
      );
    }
    function Ee(e) {
      return { app_target: "WHATSAPP", recipient_id: e.lid.user };
    }
    function ke(e) {
      return e.length > 0 && e.length <= h && y.test(e);
    }
    function Ie(e) {
      return (function (t) {
        return t === "sent"
          ? Te(e, "delivery_id") != null
            ? "sent"
            : null
          : t === "not_reachable"
            ? "not_reachable"
            : null;
      })(Te(e, "status"));
    }
    function Te(e, t) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function De(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    ((l.readHatchPeerStatus = F),
      (l.readHatchPeerConnections = W),
      (l.readHatchPeerConnection = U),
      (l.readHatchPeerRequests = V),
      (l.readHatchPeerRecommendations = H),
      (l.mintHatchPeerInviteLink = j),
      (l.mintHatchPeerMailboxInvite = K),
      (l.sendHatchPeerMailboxInvite = Q),
      (l.acceptHatchPeerRequest = Y),
      (l.fetchHatchPeerInbox = J),
      (l.ignoreHatchPeerInboxRequest = ee),
      (l.disconnectHatchPeerConnection = te),
      (l.addHatchPeerConnectionRule = ne),
      (l.removeHatchPeerConnectionRule = re),
      (l.readHatchPeerImageUrl = oe),
      (l.readHatchPeerConnectIntroImageUrl = ae));
  },
  98,
);
