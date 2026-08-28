__d(
  "MediaOnlySdpInfoFactory",
  [
    "FBLogger",
    "MediaOnlyCryptoUtils",
    "Promise",
    "ZenonEdgerayDNSCache",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l,
            s,
            u,
            c,
            d = (c = o("MediaOnlyCryptoUtils")).createIcePwd(),
            m = c.createClientIceUfrag(),
            p = c.createIcePwd(),
            _ = c.createServerIceUfrag(),
            f = yield (e || (e = n("Promise"))).all([
              o("MediaOnlyCryptoUtils").createCertificate(),
              o("MediaOnlyCryptoUtils").createExportableCertificate(),
            ]),
            g = f[0],
            h = f[1];
          if (g == null)
            return (
              r("FBLogger")("rtc_www").warn(
                "MediaOnlySdpInfoFactory: Failed to generate client certificate",
              ),
              null
            );
          if (h == null)
            return (
              r("FBLogger")("rtc_www").warn(
                "MediaOnlySdpInfoFactory: Failed to generate server certificate",
              ),
              null
            );
          var y = null;
          a.bypassDtlsForSrtp === !0 &&
            (y = o("MediaOnlyCryptoUtils").createSrtpMasterKey());
          var C = t.edgerayAddress,
            b,
            v;
          if (o("ZenonEdgerayDNSCache").isEnabled())
            try {
              var S = yield o("ZenonEdgerayDNSCache").resolve(C.name);
              ((b = S.ip4Address || void 0), (v = S.ip6Address || void 0));
            } catch (e) {}
          var R = {
              dnsAddress: C.name,
              ip4Address: b,
              ip6Address: v,
              port: C.port,
              vipType: C.vipType,
            },
            L = {
              addTcpCandidates: (i = a.enableTcpCandidate) != null ? i : !1,
              audioTrackType: t.audioTrackType,
              clientCertificate: g,
              clientIcePwd: d,
              clientUfrag: m,
              edgerayAddress: R,
              edgerayVipType: t.edgerayVipType,
              enableDtlsInStun: (l = a.enableDtlsInStun) != null ? l : !1,
              relayOverrideActive:
                (s = t.relayOverrideEnabled) != null ? s : !1,
              serverCertificate: h,
              serverIcePwd: p,
              serverUfrag: _,
              srtpKey: y,
              targetServerTier: (u = t.targetServerTier) != null ? u : null,
              videoTrackType: t.videoTrackType,
            };
          return L;
        })),
        u.apply(this, arguments)
      );
    }
    l.createMediaOnlySdpInfo = s;
  },
  98,
);
