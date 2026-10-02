__d(
  "WACommonMessageBase",
  ["WAFrankingTypes", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = e.folderMixin,
        a = e.frankingMixin,
        i = e.id,
        l = e.metaHideDecryptionPlaceholderMixin,
        s = e.offlineMixin,
        u = e.t,
        c = a == null ? void 0 : a.frankingReportingTagElementValue,
        d =
          a == null || (t = a.clientFrankingTagMixin) == null
            ? void 0
            : t.frankingFrankingTagElementValue;
      return {
        stanzaId: i,
        serverTs: o("WATimeUtils").castToUnixTime(u),
        offline: s == null ? void 0 : s.offline,
        fbFolderId: r == null ? void 0 : r.folderId,
        hideDecryptionFailure:
          (l == null ? void 0 : l.metaDecryptFail) === "hide",
        frankingTag:
          d == null ? null : o("WAFrankingTypes").castToFrankingTag(d),
        reportingTag:
          c == null ? null : o("WAFrankingTypes").castToReportingTag(c),
        internalTestConfig:
          (n = e.internalTestMixin) == null ? void 0 : n.testConfig,
      };
    }
    l.transformMessageParsedRequest = e;
  },
  98,
);
