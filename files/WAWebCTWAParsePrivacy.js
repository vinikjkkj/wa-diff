__d(
  "WAWebCTWAParsePrivacy",
  ["WALogger", "WASmaxBizSettingsSyncPrivacySettingRPC"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        var n,
          r,
          a,
          i = o(
            "WASmaxBizSettingsSyncPrivacySettingRPC",
          ).receiveSyncPrivacySettingRPC(t.node()),
          l = i.parsedRequest,
          s =
            (n = l.privacySmbDataSharingSettingMixin) == null
              ? void 0
              : n.value;
        if (s == null) return null;
        var u =
          (r =
            (a = l.privacySmbDataSharingSettingMixin) == null
              ? void 0
              : a.version) != null
            ? r
            : void 0;
        return { smbDataSharingSetting: s, smbDataSharingVersion: u };
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "parseCTWAPrivacy: Could not parse RPC response",
              ])),
          ),
          null
        );
      }
    }
    l.parseCTWAPrivacy = s;
  },
  98,
);
