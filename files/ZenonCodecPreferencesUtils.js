__d(
  "ZenonCodecPreferencesUtils",
  ["ZenonAuditedCheckpointLogId", "ZenonInfraActionsLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        typeof window.RTCRtpTransceiver == "function" &&
        typeof window.RTCRtpTransceiver.prototype.setCodecPreferences ==
          "function"
      );
    }
    function s(e, t) {
      var n = t.clockRate,
        o = t.codec,
        a = t.sdpFmtpLine,
        i = [],
        l = [];
      for (var s of e) h(s, t) ? i.push(s) : l.push(s);
      return i.length === 0
        ? (r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint:
              "[ZP] Codec preference not found: " +
              o +
              (n != null ? "/" + n : "") +
              (a != null ? " (" + a + ")" : ""),
          }),
          e)
        : [].concat(i, l);
    }
    function u(t, n) {
      if (!e())
        return (
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint:
              "[ZP] setCodecPreferences API not supported, falling back to SDP munging",
          }),
          !1
        );
      try {
        var o,
          a,
          i,
          l =
            (o =
              (a = t.receiver) == null || (a = a.track) == null
                ? void 0
                : a.kind) != null
              ? o
              : (i = t.sender) == null || (i = i.track) == null
                ? void 0
                : i.kind;
        if (l !== "audio" && l !== "video") return !1;
        var u = g(l),
          c = s(u, n);
        return (
          t.setCodecPreferences([].concat(c)),
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint: "[ZP] Applied codec preference via API: " + n.codec,
          }),
          !0
        );
      } catch (e) {
        var d = r("getErrorSafe")(e);
        return (
          r("ZenonInfraActionsLogger").logError({
            auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
            checkpoint: "[ZP] Failed to apply codec preferences via API",
            error: d.toString(),
            errorDomain:
              "ZenonCodecPreferencesUtils_applyCodecPreferencesToTransceiver",
          }),
          !1
        );
      }
    }
    function c(e) {
      var t,
        n,
        r = (t = e.receiver) == null || (t = t.track) == null ? void 0 : t.kind;
      if (r === "audio" || r === "video") return r;
      var o = (n = e.sender) == null || (n = n.track) == null ? void 0 : n.kind;
      return o === "audio" || o === "video" ? o : null;
    }
    function d(t, n) {
      if (!e())
        return (
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint:
              "[ZP] setCodecPreferences not supported, falling back to SDP munging",
          }),
          !1
        );
      var o = t.filter(function (e) {
        return c(e) === "video";
      });
      if (o.length === 0)
        return (
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint:
              "[ZP] No video transceivers found (total transceivers: " +
              t.length +
              "), cannot apply codec preferences via API",
          }),
          !1
        );
      r("ZenonInfraActionsLogger").logCheckpoint({
        auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__PLATFORM,
        checkpoint:
          "[ZP] Found " +
          o.length +
          " video transceiver(s), applying codec preference: " +
          n.codec,
      });
      for (var a of o) {
        var i = u(a, n);
        if (!i) return !1;
      }
      return !0;
    }
    function m(e) {
      var t = e.levelAsymmetryAllowed ? "1" : "0",
        n = e.packetizationMode ? "1" : "0";
      return {
        clockRate: 9e4,
        codec: "H264",
        sdpFmtpLine:
          "level-asymmetry-allowed=" +
          t +
          ";packetization-mode=" +
          n +
          ";profile-level-id=" +
          e.profileLevelId,
      };
    }
    function p(e, t) {
      var n = new Set(
        t.map(function (e) {
          return e.toUpperCase();
        }),
      );
      return e.filter(function (e) {
        var t,
          r = (t = e.mimeType.split("/")[1]) == null ? void 0 : t.toUpperCase();
        return r == null || !n.has(r);
      });
    }
    function _(e, t) {
      return e.filter(function (e) {
        var n,
          r = (n = e.mimeType.split("/")[1]) == null ? void 0 : n.toUpperCase();
        return r !== "H264" || e.sdpFmtpLine == null
          ? !0
          : !t.test(e.sdpFmtpLine);
      });
    }
    function f(t, n) {
      if (!e())
        return (
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint:
              "[ZP] setCodecPreferences not supported, falling back to SDP munging",
          }),
          !1
        );
      var o = t.filter(function (e) {
        return c(e) === "video";
      });
      if (o.length === 0)
        return (
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint:
              "[ZP] No video transceivers found (total: " +
              t.length +
              "), cannot apply filtered codec preferences",
          }),
          !1
        );
      try {
        var a = g("video");
        if (a.length === 0) return !1;
        var i = a;
        if (
          (n.codecNamesToExclude != null &&
            n.codecNamesToExclude.length > 0 &&
            (i = p(i, n.codecNamesToExclude)),
          n.h264FmtpExcludePatterns != null)
        )
          for (var l of n.h264FmtpExcludePatterns) i = _(i, l);
        n.preference != null && (i = s(i, n.preference));
        for (var u of o) u.setCodecPreferences([].concat(i));
        return (
          r("ZenonInfraActionsLogger").logCheckpoint({
            auditId: r("ZenonAuditedCheckpointLogId")
              .RP_ROOMS_INFRA_WWW__PLATFORM,
            checkpoint:
              "[ZP] Applied filtered codec preferences via API to " +
              o.length +
              " transceiver(s)",
          }),
          !0
        );
      } catch (e) {
        var d = r("getErrorSafe")(e);
        return (
          r("ZenonInfraActionsLogger").logError({
            auditId: r("ZenonAuditedCheckpointLogId").RP_ROOMS_INFRA_WWW__ERROR,
            checkpoint:
              "[ZP] Failed to apply filtered codec preferences via API",
            error: d.toString(),
            errorDomain:
              "ZenonCodecPreferencesUtils_applyFilteredVideoCodecPreferences",
          }),
          !1
        );
      }
    }
    function g(e) {
      var t = RTCRtpSender;
      if (t != null && typeof t.getCapabilities == "function") {
        var n, r;
        return (n = (r = t.getCapabilities(e)) == null ? void 0 : r.codecs) !=
          null
          ? n
          : [];
      }
      return [];
    }
    function h(e, t) {
      var n,
        r = (n = e.mimeType.split("/")[1]) == null ? void 0 : n.toUpperCase(),
        o = t.codec.toUpperCase();
      if (r !== o || (t.clockRate != null && e.clockRate !== t.clockRate))
        return !1;
      if (t.sdpFmtpLine != null) {
        var a = e.sdpFmtpLine;
        if (a == null) return !1;
        var i = t.sdpFmtpLine.split(";").map(function (e) {
          return e.trim();
        });
        for (var l of i) if (!a.includes(l)) return !1;
      }
      return !0;
    }
    ((l.isSetCodecPreferencesSupported = e),
      (l.reorderCodecsToPrefer = s),
      (l.applyCodecPreferencesToTransceiver = u),
      (l.applyVideoCodecPreferences = d),
      (l.createH264Preference = m),
      (l.filterCodecsByName = p),
      (l.filterOutH264ByFmtp = _),
      (l.applyFilteredVideoCodecPreferences = f));
  },
  98,
);
