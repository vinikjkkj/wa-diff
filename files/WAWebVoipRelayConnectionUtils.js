__d(
  "WAWebVoipRelayConnectionUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 0,
      c = 2e4,
      d = 10 * 1024,
      m = n("$InternalEnum").Mirrored([
        "None",
        "Connecting",
        "Open",
        "Closed",
        "Failed",
      ]);
    function p(e, t) {
      return e.includes(":") ? "[" + e + "]:" + t : e + ":" + t;
    }
    function _() {
      return {
        sentPackets: 0,
        receivedPackets: 0,
        sentBytes: 0,
        receivedBytes: 0,
        firstSendRequestTime: 0,
        firstResponseRecvTime: 0,
        connectionReadyTime: 0,
        droppedPackets: 0,
      };
    }
    function f() {
      return { packets: [], bufferedBytes: 0 };
    }
    function g(e, t, n, r) {
      if ((r === void 0 && (r = d), t.byteLength > r))
        return (n.droppedPackets++, !1);
      for (; e.packets.length > 0 && e.bufferedBytes + t.byteLength > r; ) {
        var o = e.packets.shift();
        o != null && ((e.bufferedBytes -= o.byteLength), n.droppedPackets++);
      }
      return (e.packets.push(t), (e.bufferedBytes += t.byteLength), !0);
    }
    function h(e) {
      var t = e.packets.shift();
      return t != null ? ((e.bufferedBytes -= t.byteLength), t) : null;
    }
    function y(e) {
      ((e.packets = []), (e.bufferedBytes = 0));
    }
    function C(e) {
      var t = new ArrayBuffer(e.byteLength);
      return (new Uint8Array(t).set(new Uint8Array(e)), t);
    }
    function b(t, n) {
      var r,
        a = new Map(),
        i = t.relay_key,
        l = t.relay_tokens,
        c = t.auth_tokens,
        d = (r = n == null ? void 0 : n.useAuthToken) != null ? r : !0;
      if (!l || l.length === 0)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [RelayConnectionUtils] relayTokens empty",
              ])),
          ),
          a
        );
      for (var m of t.relays) {
        if (m.token_id == null || m.token_id >= l.length || m.token_id < 0) {
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [RelayConnectionUtils] invalid token_id ",
                " relay ",
                "",
              ])),
            m.token_id,
            m.relay_id,
          );
          continue;
        }
        var _ = null;
        d &&
          c != null &&
          m.auth_token_id != null &&
          m.auth_token_id >= 0 &&
          m.auth_token_id < c.length &&
          (_ = c[m.auth_token_id]);
        for (var f of m.addresses)
          if (f.protocol === u) {
            if (f.ipv4 != null && f.ipv4 !== "" && f.port != null) {
              var g = f.ipv4,
                h = f.port,
                y = n != null && n.portOverride ? n.portOverride(h) : h,
                C = p(g, y),
                b = {
                  id: C,
                  relayId: m.relay_id,
                  ip: g,
                  port: y,
                  originalPort: h,
                  isIPv6: !1,
                  token: l[m.token_id],
                  authToken: _ != null ? _ : void 0,
                  key: i,
                  name: m.relay_name,
                  enableEdgerayDtlsActiveMode:
                    t.enable_edgeray_dtls_active_mode === !0,
                  clusterDomain: m.domain_name,
                };
              a.set(C, b);
            }
            if (f.ipv6 != null && f.ipv6 !== "" && f.port_v6 != null) {
              var v = f.ipv6,
                S = f.port_v6,
                R = n != null && n.portOverride ? n.portOverride(S) : S,
                L = p(v, R),
                E = {
                  id: L,
                  relayId: m.relay_id,
                  ip: v,
                  port: R,
                  originalPort: S,
                  isIPv6: !0,
                  token: l[m.token_id],
                  authToken: _ != null ? _ : void 0,
                  key: i,
                  name: m.relay_name,
                  enableEdgerayDtlsActiveMode:
                    t.enable_edgeray_dtls_active_mode === !0,
                  clusterDomain: m.domain_name,
                };
              a.set(L, E);
            }
          }
      }
      return a;
    }
    function v() {
      if (!o("WAWebUA").UA.isSafari) return 0;
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_voip_sctp_worker_safari_exp",
      );
      return e === 1 ? 1 : 0;
    }
    function S() {
      return o("WAWebUA").UA.isFirefox && r("justknobx")._("5308") ? 1 : 0;
    }
    function R() {
      return v() === 1 || S() === 1;
    }
    var L = { negotiated: !0, id: 0, ordered: !1, maxRetransmits: 0 };
    function E(e) {
      var t = e.match(/a=ice-ufrag:([^\r\n]+)/),
        n = e.match(/a=ice-pwd:([^\r\n]+)/);
      return t != null && n != null ? { ufrag: t[1], pwd: n[1] } : null;
    }
    function k(e) {
      var t = e.match(/a=fingerprint:(\S+)\s+([^\r\n]+)/);
      return t != null ? { algorithm: t[1], fingerprint: t[2] } : null;
    }
    function I(e, t, n) {
      var r = e.replace(/a=ice-ufrag:[^\r\n]+/g, "a=ice-ufrag:" + t);
      return ((r = r.replace(/a=ice-pwd:[^\r\n]+/g, "a=ice-pwd:" + n)), r);
    }
    function T(e, t, n) {
      return e.replace(
        /a=fingerprint:[^\r\n]+/g,
        "a=fingerprint:" + t + " " + n,
      );
    }
    function D(e) {
      var t = e.replace(/a=candidate:[^\r\n]+\r?\n/g, "");
      return ((t = t.replace(/a=end-of-candidates\r?\n?/g, "")), t);
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e instanceof ArrayBuffer
            ? e
            : e instanceof Blob
              ? yield e.arrayBuffer()
              : null;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      var r =
          "a=candidate:2 1 udp 2122262783 " +
          e +
          " " +
          t +
          " typ host generation 0 network-cost 5",
        o = [r, "a=end-of-candidates"].join("\r\n"),
        a = D(n);
      return ((a += o + "\r\n"), a);
    }
    function N(e, t) {
      var n,
        r = t.enableEdgerayDtlsActiveMode
          ? "a=setup:active"
          : "a=setup:passive",
        o = e.replace(/a=setup:actpass/g, r),
        a = (n = t.authToken) != null ? n : t.token;
      return (
        (o = I(o, a, t.key)),
        (o = T(
          o,
          "sha-256",
          "F9:CA:0C:98:A3:CC:71:D6:42:CE:5A:E2:53:D2:15:20:D3:1B:BA:D8:57:A4:F0:AF:BE:0B:FB:F3:6B:0C:A0:68",
        )),
        (o = o.replace(/a=ice-options:[^\r\n]+\r\n/g, "")),
        (o = o.replace(
          /a=max-message-size:[^\r\n]+/g,
          "a=max-message-size:1500",
        )),
        (o = P(t.ip, t.port.toString(), o)),
        o
      );
    }
    var M = n("$InternalEnum").Mirrored([
      "STUN_ALLOC",
      "STUN_BIND",
      "STUN_UNKNOWN",
      "NonSTUN",
    ]);
    function w(e) {
      if (e.byteLength < 2) return M.NonSTUN;
      var t = new Uint8Array(e),
        n = t[0],
        r = t[1];
      if ((n & 192) === 0) {
        var o = ((n & 63) << 8) | r;
        return o === 1 ? M.STUN_BIND : o === 3 ? M.STUN_ALLOC : M.STUN_UNKNOWN;
      }
      return M.NonSTUN;
    }
    ((l.RELAY_PROTO_UDP = u),
      (l.CONNECTION_TIMEOUT_MS = c),
      (l.MAX_BUFFER_SIZE = d),
      (l.ConnectionState = m),
      (l.getConnectionIdentifier = p),
      (l.createEmptyConnectionStats = _),
      (l.createPacketBuffer = f),
      (l.bufferPacket = g),
      (l.shiftPacket = h),
      (l.clearPacketBuffer = y),
      (l.copyArrayBuffer = C),
      (l.extractRelayConnectionMap = b),
      (l.isDcTransferDisabled = R),
      (l.BASE_DATA_CHANNEL_OPTIONS = L),
      (l.extractIceCredentials = E),
      (l.extractDtlsFingerprint = k),
      (l.replaceIceCredentials = I),
      (l.replaceDtlsFingerprint = T),
      (l.removeIceCandidates = D),
      (l.dataToArrayBuffer = x),
      (l.addIceCandidates = P),
      (l.createAnswerSdp = N),
      (l.PacketType = M),
      (l.inspectPacketType = w));
  },
  98,
);
