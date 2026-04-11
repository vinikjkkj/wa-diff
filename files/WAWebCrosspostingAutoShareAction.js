__d(
  "WAWebCrosspostingAutoShareAction",
  [
    "Promise",
    "WALogger",
    "WAWebCrosspostingGatingUtils",
    "WAWebSettingsModel",
    "WAWebStatusSetAndSyncPrivacy",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (o("WAWebCrosspostingGatingUtils").statusCrosspostingEnabled()) {
            t === "fb"
              ? (yield r("WAWebUserPrefsStatus").persistShareToFB(a),
                (r("WAWebSettingsModel").shareToFB = a))
              : t === "ig" &&
                (yield r("WAWebUserPrefsStatus").persistShareToIG(a),
                (r("WAWebSettingsModel").shareToIG = a));
            var i = yield (s || (s = n("Promise"))).all([
                r("WAWebUserPrefsStatus").getStatusPrivacySetting(),
                r("WAWebUserPrefsStatus").getStatusAllowList(),
                r("WAWebUserPrefsStatus").getStatusDenyList(),
                r("WAWebUserPrefsStatus").getShareToFB(),
                r("WAWebUserPrefsStatus").getShareToIG(),
              ]),
              l = i[0],
              u = i[1],
              c = i[2],
              d = i[3],
              m = i[4],
              p = [];
            e: {
              if (
                l ===
                o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
              ) {
                p = u;
                break e;
              }
              if (
                l ===
                o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
              ) {
                p = c;
                break e;
              }
              if (
                l ===
                o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
              )
                break e;
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  l,
              );
            }
            var _ = t === "fb" ? a : d,
              f = t === "ig" ? a : m;
            try {
              yield o("WAWebStatusSetAndSyncPrivacy").setAndSyncStatusPrivacy({
                setting: l,
                list: p,
                overrideShareToFB: _,
                overrideShareToIG: f,
              });
            } catch (n) {
              throw (
                n instanceof Error &&
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "crossposting_auto_share: toggle ",
                          " failed ",
                          "",
                        ])),
                      t,
                      n.stack,
                    )
                    .sendLogs(
                      "crossposting_auto_share: toggle " + t + " failed",
                    ),
                n
              );
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.toggleCrosspostAutoShare = u;
  },
  98,
);
