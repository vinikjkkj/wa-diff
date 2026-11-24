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
      C = 403,
      b = 404,
      v = 503,
      S = "peer_rule_not_found",
      R = "disabled",
      L = new Set(["connections_unavailable", "peer_operation_unavailable"]),
      E = { availability: "unavailable", canAccept: !1 };
    async function k() {
      return K("read-status", async function (e) {
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
          : Q(t)
            ? { kind: "ok", value: E }
            : J("read-status", t);
      });
    }
    var I = new Map();
    async function T() {
      return K("read-connections", function (e) {
        return D(e, null, 0, []);
      });
    }
    async function D(t, n, r, a) {
      var i = await t.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTIONS(u, n),
        { responseShape: "flat-or-envelope" },
      );
      if (i.kind !== "Ok") return J("read-connections", i);
      var l = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerConnections(
        i.value,
      );
      if (l == null) return Z("read-connections", "malformed");
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
          : D(t, d, r + 1, s);
    }
    async function x(e) {
      return K("read-connection", async function (t) {
        var n = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION(e);
        if (n == null) return Z("read-connection", "invalid_id");
        var r = await t.request("GET", n, {
          responseShape: "flat-or-envelope",
        });
        if (r.kind !== "Ok") return J("read-connection", r);
        var a = o(
          "WAWebHatchPeerConnectionsDecoder",
        ).decodeHatchPeerConnectionDetail(r.value);
        return a != null
          ? { kind: "ok", value: a }
          : Z("read-connection", "malformed");
      });
    }
    async function $(e) {
      return K("read-requests", async function (t) {
        var n = await V(t);
        return n != null && (!e || n.count === n.items.length)
          ? { kind: "ok", value: n }
          : H(t);
      });
    }
    async function P() {
      return o("WAWebHatchFrontendGating").isHatchPeerConnectionsSendEnabled()
        ? K("read-recommendations", async function (e) {
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
              return X(t)
                ? { kind: "ok", value: [] }
                : J("read-recommendations", t);
            var n = o(
              "WAWebHatchPeerRecommendationsDecoder",
            ).decodeHatchPeerRecommendations(t.value);
            return n != null
              ? { kind: "ok", value: n }
              : Z("read-recommendations", "malformed");
          })
        : { kind: "ok", value: [] };
    }
    async function N(e, t) {
      t === void 0 && (t = o("WAWebBoolFunc").returnTrue);
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = function () {
          return Y(n) && t();
        };
      if (!t()) return { kind: "failed" };
      var a = await K("accept-read", async function (n) {
        if (!t()) return { kind: "failed" };
        var r = await (e.kind === "delivery" ? G(n) : z(n));
        if (r.kind !== "Ok") return J("accept-read", r);
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
            return Z("accept-read", "malformed");
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
          : Z("accept", i)
        : { kind: "failed" };
    }
    async function M(e) {
      return j(
        "ignore",
        function (t) {
          return t.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX_DECLINE,
            {
              body: re({ delivery_id: e }),
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            },
          );
        },
        function (e) {
          return h.has(ne(e, "status"));
        },
      );
    }
    async function w(e) {
      var t = o(
        "WAWebHatchVmTransport",
      ).JarvisPaths.PEERS_CONNECTION_DISCONNECT(e);
      return t == null
        ? Z("disconnect", "invalid_id")
        : j(
            "disconnect",
            function (e) {
              return e.request("POST", t, {
                body: re({}),
                responseShape: "flat-or-envelope",
                timeoutMs: d,
              });
            },
            function (e) {
              return te(e, "disconnected");
            },
          );
    }
    async function A(e, t, n, r) {
      var a = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULES(e);
      return a == null
        ? Z("add-rule", "invalid_id")
        : K("add-rule", async function (e) {
            var o = await e.request("POST", a, {
              body: re({ description: n, expected_revision: t, rule_id: r }),
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            });
            return o.kind !== "Ok"
              ? J("add-rule", o)
              : ee(o.value, r, t)
                ? { kind: "ok", value: null }
                : Z("add-rule", "not_applied");
          });
    }
    async function F(e, t) {
      var n = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULE(
        e,
        t,
      );
      return n == null
        ? Z("remove-rule", "invalid_id")
        : K("remove-rule", async function (e) {
            var t = await e.request("DELETE", n, {
              responseShape: "flat-or-envelope",
              timeoutMs: d,
            });
            return t.kind === "Rejected" && t.errorCode === S
              ? { kind: "ok", value: null }
              : t.kind !== "Ok"
                ? J("remove-rule", t)
                : te(t.value, "accepted")
                  ? { kind: "ok", value: null }
                  : Z("remove-rule", "not_applied");
          });
    }
    async function O(e) {
      var t = await K("read-image", async function (t) {
        var n = await t.peerImage(e.museId, e.kind, e.sha256);
        return n.kind !== "Ok"
          ? J("read-image", n)
          : U("read-image", n.value, { maxBytes: _[e.kind], sha256: e.sha256 });
      });
      return t.kind === "ok"
        ? URL.createObjectURL(new Blob([t.value], { type: "image/jpeg" }))
        : null;
    }
    async function B() {
      var e = await K("read-connect-intro", W);
      return e.kind === "ok" ? URL.createObjectURL(e.value) : null;
    }
    async function W(e) {
      var t = await e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_STATUS,
        { responseShape: "flat-or-envelope" },
      );
      if (t.kind !== "Ok") return Z("read-connect-intro", t.kind.toLowerCase());
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
        return n.kind === "Rejected" && n.statusCode === v
          ? { kind: "gone" }
          : J("read-connect-intro", n);
      var r = o(
        "WAWebHatchPeerConnectionsDecoder",
      ).decodeHatchPeerConnectIntroImage(n.value);
      if (r == null) return { kind: "gone" };
      var a = I.get(r.sha256);
      return a != null ? { kind: "ok", value: a } : q(e, r);
    }
    async function q(e, t) {
      if (t.byteLength > f) return Z("read-connect-intro-image", "size");
      var n = await e.peerConnectIntroImage(t.sha256);
      if (n.kind !== "Ok") return J("read-connect-intro-image", n);
      var r = await U("read-connect-intro-image", n.value, {
        byteLength: t.byteLength,
        maxBytes: f,
        sha256: t.sha256,
      });
      if (r.kind !== "ok") return { kind: "failed" };
      var o = new Blob([r.value], { type: "image/jpeg" });
      return (
        I.size >= g && I.clear(),
        I.set(t.sha256, o),
        { kind: "ok", value: o }
      );
    }
    async function U(e, t, n) {
      if (
        t.byteLength === 0 ||
        t.byteLength > n.maxBytes ||
        (n.byteLength != null && t.byteLength !== n.byteLength)
      )
        return Z(e, "size");
      var r;
      try {
        r = await o("WACryptoSha256").sha256(t);
      } catch (t) {
        return Z(e, "digest_unavailable");
      }
      return o("WAWebHatchAttestationBytes").bytesToHex(new Uint8Array(r)) ===
        n.sha256
        ? { kind: "ok", value: t }
        : Z(e, "digest_mismatch");
    }
    async function V(e) {
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
    async function H(e) {
      var t = await Promise.all([G(e), z(e)]),
        n = t[0],
        r = t[1];
      if (n.kind !== "Ok") return J("read-inbox", n);
      var a = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerInbox(
        n.value,
      );
      if (a == null) return Z("read-inbox", "malformed");
      var i = [];
      if (r.kind === "Ok")
        i = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerOpenedInvites(
          r.value,
        );
      else if (!Q(r)) return J("read-opened", r);
      if (i == null) return Z("read-opened", "malformed");
      var l = [].concat(a, i).sort(function (e, t) {
        return t.receivedAtMs - e.receivedAtMs;
      });
      return { kind: "ok", value: { count: l.length, items: l } };
    }
    function G(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX,
        { responseShape: "flat-or-envelope" },
      );
    }
    function z(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_OPENED,
        { responseShape: "flat-or-envelope" },
      );
    }
    async function j(e, t, n) {
      return (
        n === void 0 && (n = o("WAWebBoolFunc").returnTrue),
        K(e, async function (r) {
          var o = await t(r);
          return o.kind !== "Ok"
            ? J(e, o)
            : n(o.value)
              ? { kind: "ok", value: null }
              : Z(e, "not_applied");
        })
      );
    }
    async function K(e, t) {
      if (!o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled())
        return { kind: "failed" };
      var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        r = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
          new AbortController().signal,
        );
      if (!Y(n)) return { kind: "failed" };
      if (r.kind !== "ready") return Z(e, "no_vm");
      var a = await t(r.api);
      return Y(n) ? a : { kind: "failed" };
    }
    function Q(e) {
      return (
        e.kind === "Rejected" &&
        (e.statusCode === b ||
          e.errorCode === R ||
          (e.statusCode === v && L.has(e.errorCode)))
      );
    }
    function X(e) {
      return Q(e) || (e.kind === "Rejected" && e.statusCode === C);
    }
    function Y(e) {
      return (
        o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled() &&
        e === o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      );
    }
    function J(e, t) {
      return t.kind === "Rejected" && t.statusCode === y
        ? { kind: "conflict" }
        : Z(e, t.kind.toLowerCase());
    }
    function Z(e, t) {
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
    function ee(e, t, n) {
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
    function te(e, t) {
      return (
        e != null && typeof e == "object" && !Array.isArray(e) && e[t] === !0
      );
    }
    function ne(e, t) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function re(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    ((l.readHatchPeerStatus = k),
      (l.readHatchPeerConnections = T),
      (l.readHatchPeerConnection = x),
      (l.readHatchPeerRequests = $),
      (l.readHatchPeerRecommendations = P),
      (l.acceptHatchPeerRequest = N),
      (l.ignoreHatchPeerInboxRequest = M),
      (l.disconnectHatchPeerConnection = w),
      (l.addHatchPeerConnectionRule = A),
      (l.removeHatchPeerConnectionRule = F),
      (l.readHatchPeerImageUrl = O),
      (l.readHatchPeerConnectIntroImageUrl = B));
  },
  98,
);
