__d(
  "WAWebVoipRelayConnectionUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebUA",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 0,
      c = 2e4,
      d = 250,
      m = 1e4,
      p = 10 * 1024,
      _ = n("$InternalEnum").Mirrored([
        "None",
        "Connecting",
        "Open",
        "Closed",
        "Failed",
      ]);
    function f(e, t) {
      return e.includes(":") ? "[" + e + "]:" + t : e + ":" + t;
    }
    function g() {
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
    function h() {
      return { packets: [], bufferedBytes: 0 };
    }
    function y(e, t, n, r) {
      if ((r === void 0 && (r = p), t.byteLength > r))
        return (n.droppedPackets++, !1);
      for (; e.packets.length > 0 && e.bufferedBytes + t.byteLength > r; ) {
        var o = e.packets.shift();
        o != null && ((e.bufferedBytes -= o.byteLength), n.droppedPackets++);
      }
      return (e.packets.push(t), (e.bufferedBytes += t.byteLength), !0);
    }
    function C(e) {
      var t = e.packets.shift();
      return t != null ? ((e.bufferedBytes -= t.byteLength), t) : null;
    }
    function b(e) {
      ((e.packets = []), (e.bufferedBytes = 0));
    }
    function v(e) {
      var t = new ArrayBuffer(e.byteLength);
      return (new Uint8Array(t).set(new Uint8Array(e)), t);
    }
    function S(t, n) {
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
        var p = null;
        d &&
          c != null &&
          m.auth_token_id != null &&
          m.auth_token_id >= 0 &&
          m.auth_token_id < c.length &&
          (p = c[m.auth_token_id]);
        for (var _ of m.addresses)
          if (_.protocol === u) {
            if (_.ipv4 != null && _.ipv4 !== "" && _.port != null) {
              var g = _.ipv4,
                h = _.port,
                y = n != null && n.portOverride ? n.portOverride(h) : h,
                C = f(g, y),
                b = {
                  id: C,
                  relayId: m.relay_id,
                  ip: g,
                  port: y,
                  originalPort: h,
                  isIPv6: !1,
                  token: l[m.token_id],
                  authToken: p != null ? p : void 0,
                  key: i,
                  name: m.relay_name,
                  enableEdgerayDtlsActiveMode:
                    t.enable_edgeray_dtls_active_mode === !0,
                  clusterDomain: m.domain_name,
                };
              a.set(C, b);
            }
            if (_.ipv6 != null && _.ipv6 !== "" && _.port_v6 != null) {
              var v = _.ipv6,
                S = _.port_v6,
                R = n != null && n.portOverride ? n.portOverride(S) : S,
                L = f(v, R),
                E = {
                  id: L,
                  relayId: m.relay_id,
                  ip: v,
                  port: R,
                  originalPort: S,
                  isIPv6: !0,
                  token: l[m.token_id],
                  authToken: p != null ? p : void 0,
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
    function R() {
      if (!o("WAWebUA").UA.isSafari) return 0;
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_voip_sctp_worker_safari_exp",
      );
      return e === 1 ? 1 : 0;
    }
    function L() {
      return o("WAWebUA").UA.isFirefox ? 1 : 0;
    }
    function E() {
      return R() === 1 || L() === 1;
    }
    var k = { negotiated: !0, id: 0, ordered: !1, maxRetransmits: 0 };
    function I(e) {
      var t = e.match(/a=ice-ufrag:([^\r\n]+)/),
        n = e.match(/a=ice-pwd:([^\r\n]+)/);
      return t != null && n != null ? { ufrag: t[1], pwd: n[1] } : null;
    }
    function T(e) {
      var t = e.match(/a=fingerprint:(\S+)\s+([^\r\n]+)/);
      return t != null ? { algorithm: t[1], fingerprint: t[2] } : null;
    }
    function D(e, t, n) {
      var r = e.replace(/a=ice-ufrag:[^\r\n]+/g, "a=ice-ufrag:" + t);
      return ((r = r.replace(/a=ice-pwd:[^\r\n]+/g, "a=ice-pwd:" + n)), r);
    }
    function x(e, t, n) {
      return e.replace(
        /a=fingerprint:[^\r\n]+/g,
        "a=fingerprint:" + t + " " + n,
      );
    }
    function $(e) {
      var t = e.replace(/a=candidate:[^\r\n]+\r?\n/g, "");
      return ((t = t.replace(/a=end-of-candidates\r?\n?/g, "")), t);
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e instanceof ArrayBuffer
            ? e
            : e instanceof Blob
              ? yield e.arrayBuffer()
              : null;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      var r =
          "a=candidate:2 1 udp 2122262783 " +
          e +
          " " +
          t +
          " typ host generation 0 network-cost 5",
        o = [r, "a=end-of-candidates"].join("\r\n"),
        a = $(n);
      return ((a += o + "\r\n"), a);
    }
    function w(e, t) {
      var n,
        r = t.enableEdgerayDtlsActiveMode
          ? "a=setup:active"
          : "a=setup:passive",
        o = e.replace(/a=setup:actpass/g, r),
        a = (n = t.authToken) != null ? n : t.token;
      return (
        (o = D(o, a, t.key)),
        (o = x(
          o,
          "sha-256",
          "F9:CA:0C:98:A3:CC:71:D6:42:CE:5A:E2:53:D2:15:20:D3:1B:BA:D8:57:A4:F0:AF:BE:0B:FB:F3:6B:0C:A0:68",
        )),
        (o = o.replace(/a=ice-options:[^\r\n]+\r\n/g, "")),
        (o = o.replace(
          /a=max-message-size:[^\r\n]+/g,
          "a=max-message-size:1500",
        )),
        (o = M(t.ip, t.port.toString(), o)),
        o
      );
    }
    var A = n("$InternalEnum").Mirrored([
      "STUN_ALLOC",
      "STUN_BIND",
      "STUN_UNKNOWN",
      "NonSTUN",
    ]);
    function F(e) {
      if (e.byteLength < 2) return A.NonSTUN;
      var t = new Uint8Array(e),
        n = t[0],
        r = t[1];
      if ((n & 192) === 0) {
        var o = ((n & 63) << 8) | r;
        return o === 1 ? A.STUN_BIND : o === 3 ? A.STUN_ALLOC : A.STUN_UNKNOWN;
      }
      return A.NonSTUN;
    }
    ((l.CONNECTION_TIMEOUT_MS = c),
      (l.WEBTRANSPORT_SCTP_FALLBACK_TIMEOUT_MIN_MS = d),
      (l.WEBTRANSPORT_SCTP_FALLBACK_TIMEOUT_MAX_MS = m),
      (l.ConnectionState = _),
      (l.getConnectionIdentifier = f),
      (l.createEmptyConnectionStats = g),
      (l.createPacketBuffer = h),
      (l.bufferPacket = y),
      (l.shiftPacket = C),
      (l.clearPacketBuffer = b),
      (l.copyArrayBuffer = v),
      (l.extractRelayConnectionMap = S),
      (l.isDcTransferDisabled = E),
      (l.BASE_DATA_CHANNEL_OPTIONS = k),
      (l.extractIceCredentials = I),
      (l.extractDtlsFingerprint = T),
      (l.replaceIceCredentials = D),
      (l.replaceDtlsFingerprint = x),
      (l.removeIceCandidates = $),
      (l.dataToArrayBuffer = P),
      (l.createAnswerSdp = w),
      (l.PacketType = A),
      (l.inspectPacketType = F));
  },
  98,
);
