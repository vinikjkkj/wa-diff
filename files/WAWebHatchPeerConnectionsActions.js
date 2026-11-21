__d(
  "WAWebHatchPeerConnectionsActions",
  [
    "Promise",
    "WACryptoSha256",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebHatchAttestationBytes",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchPeerConnectionsDecoder",
    "WAWebHatchPeerInviteActions",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 100,
      d = 10,
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
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return ce(
            "read-status",
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield e.request(
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
                    : me(t)
                      ? { kind: "ok", value: L }
                      : _e("read-status", t);
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
        })),
        k.apply(this, arguments)
      );
    }
    var I = new Map();
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return ce("read-connections", function (e) {
            return x(e, null, 0, []);
          });
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n, r) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield e.request(
              "GET",
              o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTIONS(c, t),
              { responseShape: "flat-or-envelope" },
            );
            if (a.kind !== "Ok") return _e("read-connections", a);
            var i = o(
              "WAWebHatchPeerConnectionsDecoder",
            ).decodeHatchPeerConnections(a.value);
            if (i == null) return fe("read-connections", "malformed");
            var l = [].concat(r, i),
              u = o(
                "WAWebHatchPeerConnectionsDecoder",
              ).decodeHatchPeerConnectionsCursor(a.value);
            return u == null
              ? { kind: "ok", value: l }
              : u === t || n + 1 >= d
                ? (o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-peer-connections: read-connections truncated reason=",
                          " count=",
                          "",
                        ])),
                      u === t ? "cursor_repeat" : "page_cap",
                      l.length,
                    )
                    .sendLogs("hatch-peer-connections-truncated"),
                  { kind: "ok", value: l })
                : x(e, u, n + 1, l);
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return ce(
            "read-connection",
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = o(
                    "WAWebHatchVmTransport",
                  ).JarvisPaths.PEERS_CONNECTION(e);
                  if (n == null) return fe("read-connection", "invalid_id");
                  var r = yield t.request("GET", n, {
                    responseShape: "flat-or-envelope",
                  });
                  if (r.kind !== "Ok") return _e("read-connection", r);
                  var a = o(
                    "WAWebHatchPeerConnectionsDecoder",
                  ).decodeHatchPeerConnectionDetail(r.value);
                  return a != null
                    ? { kind: "ok", value: a }
                    : fe("read-connection", "malformed");
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return ce(
            "read-requests",
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield ne(t);
                  return n != null && (!e || n.count === n.items.length)
                    ? { kind: "ok", value: n }
                    : oe(t);
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = o("WAWebBoolFunc").returnTrue);
          var r = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            a = function () {
              return pe(r) && t();
            };
          if (!t()) return { kind: "failed" };
          var i = yield ce(
            "accept-read",
            (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  if (!t()) return { kind: "failed" };
                  var r = yield e.kind === "delivery" ? ie(n) : le(n);
                  if (r.kind !== "Ok") return _e("accept-read", r);
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
                      ((typeof e == "object" && e !== null) ||
                        typeof e == "function") &&
                      e.kind === "ok" &&
                      "url" in e
                    ) {
                      var t = e.url;
                      return { kind: "ok", value: t };
                    }
                    if (
                      ((typeof e == "object" && e !== null) ||
                        typeof e == "function") &&
                      e.kind === "gone"
                    )
                      return { kind: "gone" };
                    if (
                      ((typeof e == "object" && e !== null) ||
                        typeof e == "function") &&
                      e.kind === "malformed"
                    )
                      return fe("accept-read", "malformed");
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })(a);
                },
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })(),
          );
          if (i.kind !== "ok") return t() ? i : { kind: "failed" };
          if (!a()) return { kind: "failed" };
          var l = yield o("WAWebHatchPeerInviteActions").acceptHatchPeerInvite(
            i.value,
            a,
          );
          return a()
            ? p.has(l)
              ? { kind: "ok", value: null }
              : fe("accept", l)
            : { kind: "failed" };
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return se(
            "ignore",
            function (t) {
              return t.request(
                "POST",
                o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX_DECLINE,
                {
                  body: Ce({ delivery_id: e }),
                  responseShape: "flat-or-envelope",
                  timeoutMs: m,
                },
              );
            },
            function (e) {
              return h.has(ye(e, "status"));
            },
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebHatchVmTransport",
          ).JarvisPaths.PEERS_CONNECTION_DISCONNECT(e);
          return t == null
            ? fe("disconnect", "invalid_id")
            : se(
                "disconnect",
                function (e) {
                  return e.request("POST", t, {
                    body: Ce({}),
                    responseShape: "flat-or-envelope",
                    timeoutMs: m,
                  });
                },
                function (e) {
                  return he(e, "disconnected");
                },
              );
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n, r) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = o(
              "WAWebHatchVmTransport",
            ).JarvisPaths.PEERS_CONNECTION_RULES(e);
            return i == null
              ? fe("add-rule", "invalid_id")
              : ce(
                  "add-rule",
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = yield e.request("POST", i, {
                          body: Ce({
                            description: r,
                            expected_revision: t,
                            rule_id: a,
                          }),
                          responseShape: "flat-or-envelope",
                          timeoutMs: m,
                        });
                        return n.kind !== "Ok"
                          ? _e("add-rule", n)
                          : ge(n.value, a, t)
                            ? { kind: "ok", value: null }
                            : fe("add-rule", "not_applied");
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
          },
        )),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECTION_RULE(
            e,
            t,
          );
          return r == null
            ? fe("remove-rule", "invalid_id")
            : ce(
                "remove-rule",
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield e.request("DELETE", r, {
                        responseShape: "flat-or-envelope",
                        timeoutMs: m,
                      });
                      return t.kind === "Rejected" && t.errorCode === v
                        ? { kind: "ok", value: null }
                        : t.kind !== "Ok"
                          ? _e("remove-rule", t)
                          : he(t.value, "accepted")
                            ? { kind: "ok", value: null }
                            : fe("remove-rule", "not_applied");
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield ce(
            "read-image",
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = yield t.peerImage(e.museId, e.kind, e.sha256);
                  return n.kind !== "Ok"
                    ? _e("read-image", n)
                    : ee("read-image", n.value, {
                        maxBytes: _[e.kind],
                        sha256: e.sha256,
                      });
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
          return t.kind === "ok"
            ? URL.createObjectURL(new Blob([t.value], { type: "image/jpeg" }))
            : null;
        })),
        j.apply(this, arguments)
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield ce("read-connect-intro", X);
          return e.kind === "ok" ? URL.createObjectURL(e.value) : null;
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_STATUS,
            { responseShape: "flat-or-envelope" },
          );
          if (t.kind !== "Ok")
            return fe("read-connect-intro", t.kind.toLowerCase());
          if (
            !o(
              "WAWebHatchPeerConnectionsDecoder",
            ).decodeHatchPeerConnectIntroSupported(t.value)
          )
            return { kind: "gone" };
          var n = yield e.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_CONNECT_INTRO,
            { responseShape: "flat-or-envelope" },
          );
          if (n.kind !== "Ok")
            return n.kind === "Rejected" && n.statusCode === b
              ? { kind: "gone" }
              : _e("read-connect-intro", n);
          var r = o(
            "WAWebHatchPeerConnectionsDecoder",
          ).decodeHatchPeerConnectIntroImage(n.value);
          if (r == null) return { kind: "gone" };
          var a = I.get(r.sha256);
          return a != null ? { kind: "ok", value: a } : J(e, r);
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.byteLength > f) return fe("read-connect-intro-image", "size");
          var n = yield e.peerConnectIntroImage(t.sha256);
          if (n.kind !== "Ok") return _e("read-connect-intro-image", n);
          var r = yield ee("read-connect-intro-image", n.value, {
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
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e, t, n) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (
              t.byteLength === 0 ||
              t.byteLength > n.maxBytes ||
              (n.byteLength != null && t.byteLength !== n.byteLength)
            )
              return fe(e, "size");
            var r;
            try {
              r = yield o("WACryptoSha256").sha256(t);
            } catch (t) {
              return fe(e, "digest_unavailable");
            }
            return o("WAWebHatchAttestationBytes").bytesToHex(
              new Uint8Array(r),
            ) === n.sha256
              ? { kind: "ok", value: t }
              : fe(e, "digest_mismatch");
          },
        )),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e.request(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.PEERS_REQUEST_BANNER,
            { responseShape: "flat-or-envelope" },
          );
          return t.kind === "Ok"
            ? o(
                "WAWebHatchPeerConnectionsDecoder",
              ).decodeHatchPeerRequestBanner(t.value)
            : null;
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      return ae.apply(this, arguments);
    }
    function ae() {
      return (
        (ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (u || (u = n("Promise"))).all([ie(e), le(e)]),
            r = t[0],
            a = t[1];
          if (r.kind !== "Ok") return _e("read-inbox", r);
          var i = o("WAWebHatchPeerConnectionsDecoder").decodeHatchPeerInbox(
            r.value,
          );
          if (i == null) return fe("read-inbox", "malformed");
          var l = [];
          if (a.kind === "Ok")
            l = o(
              "WAWebHatchPeerConnectionsDecoder",
            ).decodeHatchPeerOpenedInvites(a.value);
          else if (!me(a)) return _e("read-opened", a);
          if (l == null) return fe("read-opened", "malformed");
          var s = [].concat(i, l).sort(function (e, t) {
            return t.receivedAtMs - e.receivedAtMs;
          });
          return { kind: "ok", value: { count: s.length, items: s } };
        })),
        ae.apply(this, arguments)
      );
    }
    function ie(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INBOX,
        { responseShape: "flat-or-envelope" },
      );
    }
    function le(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PEERS_INVITES_OPENED,
        { responseShape: "flat-or-envelope" },
      );
    }
    function se(e, t, n) {
      return ue.apply(this, arguments);
    }
    function ue() {
      return (
        (ue = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            return (
              r === void 0 && (r = o("WAWebBoolFunc").returnTrue),
              ce(
                e,
                (function () {
                  var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var o = yield t(n);
                      return o.kind !== "Ok"
                        ? _e(e, o)
                        : r(o.value)
                          ? { kind: "ok", value: null }
                          : fe(e, "not_applied");
                    },
                  );
                  return function (e) {
                    return o.apply(this, arguments);
                  };
                })(),
              )
            );
          },
        )),
        ue.apply(this, arguments)
      );
    }
    function ce(e, t) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled())
            return { kind: "failed" };
          var n = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            r = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
              new AbortController().signal,
            );
          if (!pe(n)) return { kind: "failed" };
          if (r.kind !== "ready") return fe(e, "no_vm");
          var a = yield t(r.api);
          return pe(n) ? a : { kind: "failed" };
        })),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return (
        e.kind === "Rejected" &&
        (e.statusCode === C ||
          e.errorCode === S ||
          (e.statusCode === b && R.has(e.errorCode)))
      );
    }
    function pe(e) {
      return (
        o("WAWebHatchFrontendGating").isHatchPeerPairingCardEnabled() &&
        e === o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      );
    }
    function _e(e, t) {
      return t.kind === "Rejected" && t.statusCode === y
        ? { kind: "conflict" }
        : fe(e, t.kind.toLowerCase());
    }
    function fe(t, n) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-peer-connections: ",
                " failed reason=",
                "",
              ])),
            t,
            n,
          )
          .sendLogs("hatch-peer-connections-failed"),
        { kind: "failed" }
      );
    }
    function ge(e, t, n) {
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
    function he(e, t) {
      return (
        e != null && typeof e == "object" && !Array.isArray(e) && e[t] === !0
      );
    }
    function ye(e, t) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var n = e[t];
      return typeof n == "string" ? n : null;
    }
    function Ce(e) {
      return new TextEncoder().encode(JSON.stringify(e));
    }
    ((l.readHatchPeerStatus = E),
      (l.readHatchPeerConnections = T),
      (l.readHatchPeerConnection = P),
      (l.readHatchPeerRequests = M),
      (l.acceptHatchPeerRequest = A),
      (l.ignoreHatchPeerInboxRequest = O),
      (l.disconnectHatchPeerConnection = W),
      (l.addHatchPeerConnectionRule = U),
      (l.removeHatchPeerConnectionRule = H),
      (l.readHatchPeerImageUrl = z),
      (l.readHatchPeerConnectIntroImageUrl = K));
  },
  98,
);
