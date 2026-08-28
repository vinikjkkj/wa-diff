__d(
  "ULLCMessageTranslator",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case "DOMAIN":
          return "META_AI_AT_GEDGE";
        case "IPV4":
        case "IPV6":
          return "META_AI";
        case "UNKNOWN":
        default:
          return "UNKNOWN";
      }
    }
    function l(t, n, r) {
      var o, a, i, l;
      t.srtpKey != null &&
        (l = btoa(String.fromCharCode.apply(null, Array.from(t.srtpKey))));
      var u = {
          clientIcePwd: t.clientIcePwd,
          serverIcePwd: t.serverIcePwd,
          serverPrivateKey: t.serverCertificate.privateKeyPem,
          srtpKey: l,
        },
        c =
          (o =
            (a = t.edgerayAddress.ip6Address) != null
              ? a
              : t.edgerayAddress.ip4Address) != null
            ? o
            : "",
        d =
          t.targetServerTier != null && t.targetServerTier !== ""
            ? t.targetServerTier
            : void 0,
        m = n != null ? s(n) : void 0,
        p = {
          aiSessionCallingParams: r,
          appMessages: m,
          audioTrackType: t.audioTrackType,
          clientDtlsFingerprint: t.clientCertificate.fingerprint,
          clientDtlsMode: "ACTIVE",
          clientUfrag: t.clientUfrag,
          edgerayVip: c,
          enableDtlsInStun: t.enableDtlsInStun,
          genaiTier: d,
          secrets: u,
          serverPublicKey: t.serverCertificate.certPem,
          serverUfrag: t.serverUfrag,
          videoTrackType: t.videoTrackType,
          vipType:
            (i = t.edgerayVipType) != null ? i : e(t.edgerayAddress.vipType),
        };
      return p;
    }
    function s(e) {
      return Object.keys(e).map(function (t) {
        var n;
        return { payload: (n = e[t]) != null ? n : "", topic: t };
      });
    }
    function u(e) {
      var t,
        n,
        r,
        o = e.responseStatusCode;
      if (o != null && o !== 200) {
        var a,
          i = e.responseSubCode;
        return {
          detailedReason:
            "Status code: " +
            String(o) +
            (", sub code: " + (i != null ? String(i) : "Unknown")) +
            (", message: " +
              ((a = e.responseStatusMessage) != null ? a : "Unknown")),
          reason: "SIGNALING_MESSAGE_FAILED",
          type: "terminateRequest",
        };
      }
      return {
        edgerayVipUpdatedIpV4: (t = e.edgerayVipUpdatedIpV4) != null ? t : "",
        edgerayVipUpdatedIpV6: (n = e.edgerayVipUpdatedIpV6) != null ? n : "",
        serverUfragUpdated: (r = e.serverUfragUpdated) != null ? r : "",
        type: "joinResponse",
      };
    }
    ((i.translateToJoinRequest = l), (i.translateJoinResponse = u));
  },
  66,
);
