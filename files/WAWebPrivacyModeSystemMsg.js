__d(
  "WAWebPrivacyModeSystemMsg",
  ["$InternalEnum", "WAWebHandleMsgTypes.flow"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["E2EE", "BSP", "FB", "HOSTED_GROUP"]);
    function s(t) {
      return t == null ||
        (t.actualActors ===
          o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.Self &&
          t.hostStorage ===
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.OnPremise)
        ? e.E2EE
        : t.actualActors ===
            o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.Capi
          ? e.HOSTED_GROUP
          : t.hostStorage ===
              o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook
            ? e.FB
            : e.BSP;
    }
    function u(e, t) {
      return e == null
        ? t
        : t == null || e.privacyModeTs > t.privacyModeTs
          ? e
          : t;
    }
    function c(e, t) {
      return e == null && t == null
        ? 0
        : t == null
          ? 1
          : e == null
            ? -1
            : e.privacyModeTs - t.privacyModeTs;
    }
    function d(e) {
      var t,
        n = (t = e.bizInfo) == null ? void 0 : t.verifiedName;
      return n == null ? null : e.biz && n.isApi === !0 ? n.privacyMode : null;
    }
    ((l.ReducedPrivacyMode = e),
      (l.getReducedPrivacyMode = s),
      (l.getLatestPrivacyMode = u),
      (l.comparePrivacyMode = c),
      (l.getPrivacyModeFromQueryExistResponse = d));
  },
  98,
);
