__d(
  "WAWebCommonParsersVerifiedName",
  [
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebNonEmptyString",
    "WAWebValidateBusinessCertificate",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebValidateBusinessCertificate").getParsedProtoObjects(e);
      if (t != null && t.details) {
        var n = o(
            "WAWebValidateBusinessCertificate",
          ).extractCertificateDetailsParams(t.details),
          r = n.isApi,
          a = n.isSmb,
          i = n.name,
          l = n.serial;
        return { name: i, serial: String(l), isApi: r, isSmb: a };
      }
    }
    function s(t) {
      var n = t.attrEnum(
          "verified_level",
          o("WAWebHandleMsgCommon").MSG_VERIFIED_LEVEL,
        ),
        r = t.hasContent() ? t.contentBytes() : null,
        a = o("WAWebNonEmptyString").asMaybeNonEmptyString(
          t.maybeAttrString("serial"),
        ),
        i = (r && e(r)) || {},
        l = i.isApi,
        s = i.isSmb,
        u = i.name,
        c = i.serial,
        d = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(
          t.maybeAttrInt("actual_actors"),
        ),
        m = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(
          t.maybeAttrInt("host_storage"),
        ),
        p = t.maybeAttrInt("privacy_mode_ts"),
        _ =
          d != null && m != null && p != null
            ? { actualActors: d, hostStorage: m, privacyModeTs: p }
            : null;
      return {
        level: n,
        serial: a != null ? a : c,
        name: u,
        isApi: l === !0,
        isSmb: s === !0,
        privacyMode: _,
      };
    }
    l.default = s;
  },
  98,
);
