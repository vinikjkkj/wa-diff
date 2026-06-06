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
          var s = n.value;
          return s.privacySmbDataSharingSettingMixin.value;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    async function d(e) {
      var t = { smbDataSharingSettingMixinArgs: { anyValue: e } },
        n = await o(
          "WASmaxBizSettingsSetPrivacySettingRPC",
        ).sendSetPrivacySettingRPC(t);
      switch (n.name) {
        case "SetPrivacySettingResponseError": {
          var r = n.value.errorPrivacySettingErrors.value,
            a = r.code,
            i = r.text;
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
          var l, c;
          return (
            n.name,
            n.value.privacySmbDataSharingSettingMixin == null &&
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ctwa] SetPrivacySettingResponseError: null value",
                  ])),
              ),
            (l =
              (c = n.value.privacySmbDataSharingSettingMixin) == null
                ? void 0
                : c.value) != null
              ? l
              : null
          );
        }
      }
    }
    ((l.getCtwaBizDataSharingSettingJob = c),
      (l.setCtwaBizDataSharingSettingJob = d));
  },
  98,
);
