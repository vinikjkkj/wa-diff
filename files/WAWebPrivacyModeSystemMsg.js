__d(
  "WAWebPrivacyModeSystemMsg",
  ["$InternalEnum", "WAWebHandleMsgTypes"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["E2EE", "BSP", "FB", "HOSTED_GROUP"]);
    function s(t) {
      return t == null ||
        (t.actualActors ===
          o("WAWebHandleMsgTypes").ActualActorsEnumType.Self &&
          t.hostStorage ===
            o("WAWebHandleMsgTypes").HostStorageEnumType.OnPremise)
        ? e.E2EE
        : t.actualActors === o("WAWebHandleMsgTypes").ActualActorsEnumType.Capi
          ? e.HOSTED_GROUP
          : t.hostStorage ===
              o("WAWebHandleMsgTypes").HostStorageEnumType.Facebook
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
    function c(e) {
      var t,
        n = (t = e.bizInfo) == null ? void 0 : t.verifiedName;
      return n == null ? null : e.biz && n.isApi === !0 ? n.privacyMode : null;
    }
    ((l.ReducedPrivacyMode = e),
      (l.getReducedPrivacyMode = s),
      (l.getLatestPrivacyMode = u),
      (l.getPrivacyModeFromQueryExistResponse = c));
  },
  98,
);
