__d(
  "WAWebCTWAParsePrivacy",
  ["WALogger", "WASmaxBizSettingsSyncPrivacySettingRPC"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        var n,
          r = o(
            "WASmaxBizSettingsSyncPrivacySettingRPC",
          ).receiveSyncPrivacySettingRPC(t.node()),
          a = r.parsedRequest,
          i =
            (n = a.privacySmbDataSharingSettingMixin) == null
              ? void 0
              : n.value;
        return i == null ? null : { smbDataSharingSetting: i };
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
