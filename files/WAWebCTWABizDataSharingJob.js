__d(
  "WAWebCTWABizDataSharingJob",
  [
    "WALogger",
    "WASmaxBizSettingsGetPrivacySettingRPC",
    "WASmaxBizSettingsSetPrivacySettingRPC",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c() {
      var t = await o(
        "WASmaxBizSettingsGetPrivacySettingRPC",
      ).sendGetPrivacySettingRPC();
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "GetPrivacySettingResponseError" &&
          "value" in n
        ) {
          var r = n.value,
            a = r.errorPrivacySettingErrors.value,
            i = a.code,
            l = a.text;
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctwa] GetPrivacySettingResponseError: fetch failed",
                ])),
            ),
            null
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "GetPrivacySettingResponseSuccess" &&
          "value" in n
        ) {
          var s = n.value,
            u = s.privacySmbDataSharingSettingMixin;
          return { value: u.value, version: u.version };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    async function d(e, t) {
      var n = t != null ? { anyValue: e, anyVersion: t } : { anyValue: e },
        r = { smbDataSharingSettingMixinArgs: n },
        a = await o(
          "WASmaxBizSettingsSetPrivacySettingRPC",
        ).sendSetPrivacySettingRPC(r);
      switch (a.name) {
        case "SetPrivacySettingResponseError": {
          var i = a.value.errorPrivacySettingErrors.value,
            l = i.code,
            c = i.text;
          return (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[ctwa] SetPrivacySettingResponseError: set failed",
                ])),
            ),
            null
          );
        }
        default: {
          a.name;
          var d = a.value.privacySmbDataSharingSettingMixin;
          return d == null
            ? (o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] SetPrivacySettingResponseError: null value",
                  ])),
              ),
              null)
            : { value: d.value, version: d.version };
        }
      }
    }
    ((l.getCtwaBizDataSharingSettingJob = c),
      (l.setCtwaBizDataSharingSettingJob = d));
  },
  98,
);
