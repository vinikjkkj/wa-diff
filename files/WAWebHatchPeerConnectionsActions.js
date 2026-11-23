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
    "WAWebHatchPeerRecommendationsDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 100,
      c = 10,
      d = 25e3,
      m = 25e3,
      p = new Set(["already_paired", "connected", "requested"]),
      _ = { avatar: 128 * 1024, photo: 32 * 1024 },
      f = 1024 * 1024,
      g = 4,
      h = new Set(["already_ended", "declined", "unknown"]),
      y = 409,
      C = 404,
      b = 503,
      v = "peer_rule_not_found",
      S = "disabled",
      R = new Set(["connections_unavailable", "peer_operation_unavailable"]),
      L = { availability: "unavailable", canAccept: !1 };
    async function E() {
      return j("read-status", async function (e) {
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
          : K(t)
            ? { kind: "ok", value: L }
            : X("read-status", t);
      });
    }
    var k = new Map();
    async function I() {
      return j("read-connections", function (e) {
        return T(e, null, 0, []);
      });
    }
    async function T(t, n, r, a) {
      var i = await t.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTIONS(u, n),
        { responseShape: "flat-or-envelope" },
      );
      if (i.kind !== "Ok") return X("read-connections", i);
      var l = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerConnections(
        i.value,
      );
      if (l == null) return Y("read-connections", "malformed");
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
          : T(t, d, r + 1, s);
    }
    async function D(e) {
      return j("read-connection", async function (t) {
        var n = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION(e);
        if (n == null) return Y("read-connection", "invalid_id");
        var r = await t.request("GET", n, {
          responseShape: "flat-or-envelope",
        });
        if (r.kind !== "Ok") return X("read-connection", r);
        var a = o(
          "WAWebHatchPeerConnectionsDecoder",
        ).decodeHatchPeerConnectionDetail(r.value);
        return a != null
          ? { kind: "ok", value: a }
          : Y("read-connection", "malformed");
      });
    }
    async function x(e) {
      return j("read-requests", async function (t) {
        var n = await U(t);
        return n != null && (!e || n.count === n.items.length)
          ? { kind: "ok", value: n }
          : V(t);
      });
    }
    async function $() {
      return o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
        ? j("read-recommendations", async function (e) {
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
              return K(t)
                ? { kind: "ok", value: [] }
                : X("read-recommendations", t);
            var n = o(
              "WAWebHatchPeerRecommendationsDecoder",
            ).decodeHatchPeerRecommendations(t.value);
            return n != null
              ? { kind: "ok", value: n }
              : Y("read-recommendations", "malformed");
          })
        : { kind: "ok", value: [] };
    }
    async function P(e, t) {
      t === void 0 && (t = o("WAWebBoolFunc").returnTrue);
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = function () {
          return Q(n) && t();
        };
      if (!t()) return { kind: "failed" };
      var a = await j("accept-read", async function (n) {
        if (!t()) return { kind: "failed" };
        var r = await (e.kind === "delivery" ? H(n) : G(n));
        if (r.kind !== "Ok") return X("accept-read", r);
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
            return Y("accept-read", "malformed");
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
        ? p.has(i)
          ? { kind: "ok", value: null }
          : Y("accept", i)
        : { kind: "failed" };
    }
    async function N(e) {
      return z(
        "ignore",
        function (t) {
          return t.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX_DECLINE,
            {
              body: te({ delivery_id: e }),
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            },
          );
        },
        function (e) {
          return h.has(ee(e, "status"));
        },
      );
    }
    async function M(e) {
      var t = o(
        "WAWebHatchVmTransport",
      ).JarvisPaths.PEERS_CONNECTION_DISCONNECT(e);
      return t == null
        ? Y("disconnect", "invalid_id")
        : z(
            "disconnect",
            function (e) {
              return e.request("POST", t, {
                body: te({}),
                responseShape: "flat-or-envelope",
                timeoutMs: d,
              });
            },
            function (e) {
              return Z(e, "disconnected");
            },
          );
    }
    async function w(e, t, n, r) {
      var a = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULES(e);
      return a == null
        ? Y("add-rule", "invalid_id")
        : j("add-rule", async function (e) {
            var o = await e.request("POST", a, {
              body: te({ description: n, expected_revision: t, rule_id: r }),
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            });
            return o.kind !== "Ok"
              ? X("add-rule", o)
              : J(o.value, r, t)
                ? { kind: "ok", value: null }
                : Y("add-rule", "not_applied");
          });
    }
    async function A(e, t) {
      var n = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULE(
        e,
        t,
      );
      return n == null
        ? Y("remove-rule", "invalid_id")
        : j("remove-rule", async function (e) {
            var t = await e.request("DELETE", n, {
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            });
            return t.kind === "Rejected" && t.errorCode === v
              ? { kind: "ok", value: null }
              : t.kind !== "Ok"
                ? X("remove-rule", t)
                : Z(t.value, "accepted")
                  ? { kind: "ok", value: null }
                  : Y("remove-rule", "not_applied");
          });
    }
    async function F(e) {
      var t = await j("read-image", async function (t) {
        var n = await t.peerImage(e.museId, e.kind, e.sha256);
        return n.kind !== "Ok"
          ? X("read-image", n)
          : q("read-image", n.value, { maxBytes: _[e.kind], sha256: e.sha256 });
      });
      return t.kind === "ok"
        ? URL.createObjectURL(new Blob([t.value], { type: "image/jpeg" }))
        : null;
    }
    async function O() {
      var e = await j("read-connect-intro", B);
      return e.kind === "ok" ? URL.createObjectURL(e.value) : null;
    }
    async function B(e) {
      var t = await e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_STATUS,
        { responseShape: "flat-or-envelope" },
      );
      if (t.kind !== "Ok") return Y("read-connect-intro", t.kind.toLowerCase());
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
        return n.kind === "Rejected" && n.statusCode === b
          ? { kind: "gone" }
          : X("read-connect-intro", n);
      var r = o(
        "WAWebHatchPeerConnectionsDecoder",
      ).decodeHatchPeerConnectIntroImage(n.value);
      if (r == null) return { kind: "gone" };
      var a = k.get(r.sha256);
      return a != null ? { kind: "ok", value: a } : W(e, r);
    }
    async function W(e, t) {
      if (t.byteLength > f) return Y("read-connect-intro-image", "size");
      var n = await e.peerConnectIntroImage(t.sha256);
      if (n.kind !== "Ok") return X("read-connect-intro-image", n);
      var r = await q("read-connect-intro-image", n.value, {
        byteLength: t.byteLength,
        maxBytes: f,
        sha256: t.sha256,
      });
      if (r.kind !== "ok") return { kind: "failed" };
      var o = new Blob([r.value], { type: "image/jpeg" });
      return (
        k.size >= g && k.clear(),
        k.set(t.sha256, o),
        { kind: "ok", value: o }
      );
    }
    async function q(e, t, n) {
      if (
        t.byteLength === 0 ||
        t.byteLength > n.maxBytes ||
        (n.byteLength != null && t.byteLength !== n.byteLength)
      )
        return Y(e, "size");
      var r;
      try {
        r = await o("WACryptoSha256").sha256(t);
      } catch (t) {
        return Y(e, "digest_unavailable");
      }
      return o("WAWebHatchAttestationBytes").bytesToHex(new Uint8Array(r)) ===
        n.sha256
        ? { kind: "ok", value: t }
        : Y(e, "digest_mismatch");
    }
    async function U(e) {
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
    async function V(e) {
      var t = await Promise.all([H(e), G(e)]),
        n = t[0],
        r = t[1];
      if (n.kind !== "Ok") return X("read-inbox", n);
      var a = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerInbox(
        n.value,
      );
      if (a == null) return Y("read-inbox", "malformed");
      var i = [];
      if (r.kind === "Ok")
        i = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerOpenedInvites(
          r.value,
        );
      else if (!K(r)) return X("read-opened", r);
      if (i == null) return Y("read-opened", "malformed");
      var l = [].concat(a, i).sort(function (e, t) {
        return t.receivedAtMs - e.receivedAtMs;
      });
      return { kind: "ok", value: { count: l.length, items: l } };
    }
    function H(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX,
        { responseShape: "flat-or-envelope" },
      );
    }
    function G(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_OPENED,
        { responseShape: "flat-or-envelope" },
      );
    }
    async function z(e, t, n) {
      return (
        n === void 0 && (n = o("WAWebBoolFunc").returnTrue),
        j(e, async function (r) {
          var o = await t(r);
          return o.kind !== "Ok"
            ? X(e, o)
            : n(o.value)
              ? { kind: "ok", value: null }
              : Y(e, "not_applied");
        })
      );
    }
    async function j(e, t) {
      if (!o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled())
        return { kind: "failed" };
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
          new AbortController().signal,
        );
      if (!Q(n)) return { kind: "failed" };
      if (r.kind !== "ready") return Y(e, "no_vm");
      var a = await t(r.api);
      return Q(n) ? a : { kind: "failed" };
    }
    function K(e) {
      return (
        e.kind === "Rejected" &&
        (e.statusCode === C ||
          e.errorCode === S ||
          (e.statusCode === b && R.has(e.errorCode)))
      );
    }
    function Q(e) {
      return (
        o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled() &&
        e === o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      );
    }
    function X(e, t) {
      return t.kind === "Rejected" && t.statusCode === y
        ? { kind: "conflict" }
        : Y(e, t.kind.toLowerCase());
    }
    function Y(e, t) {
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
    function J(e, t, n) {
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
    function Z(e, t) {
      return (
        e != null && typeof e == "object" && !Array.isArray(e) && e[t] === !0
      );
    }
    function ee(e, t) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function te(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    ((l.readHatchPeerStatus = E),
      (l.readHatchPeerConnections = I),
      (l.readHatchPeerConnection = D),
      (l.readHatchPeerRequests = x),
      (l.readHatchPeerRecommendations = $),
      (l.acceptHatchPeerRequest = P),
      (l.ignoreHatchPeerInboxRequest = N),
      (l.disconnectHatchPeerConnection = M),
      (l.addHatchPeerConnectionRule = w),
      (l.removeHatchPeerConnectionRule = A),
      (l.readHatchPeerImageUrl = F),
      (l.readHatchPeerConnectIntroImageUrl = O));
  },
  98,
);
