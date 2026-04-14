__d(
  "WAWebMediaUploadQualitySettings.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebDrawerSection.react",
    "WAWebPrivacyVisibilityOption.react",
    "WAWebProtobufSyncAction.pb",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebModelValues",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = [
        {
          value: "sd",
          label: function () {
            return c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.bottom8,
                ),
                {
                  children: [
                    s._(/*BTDS*/ "Standard quality"),
                    c.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: s._(
                        /*BTDS*/ "Standard media uses less storage and are faster to send",
                      ),
                    }),
                  ],
                },
              ),
            );
          },
        },
        {
          value: "hd",
          label: function () {
            return c.jsxs(c.Fragment, {
              children: [
                s._(/*BTDS*/ "HD quality"),
                c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: s._(
                    /*BTDS*/ "HD media is slower to send, can be 6 times larger",
                  ),
                }),
              ],
            });
          },
        },
      ];
    function m() {
      var e = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          ["hdMediaEnabled"],
        ),
        t = o("useWAWebSettingSync").useSettingSync(
          "mediaUploadQuality",
          function (t) {
            e.set(
              "hdMediaEnabled",
              t ===
                o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD,
            );
          },
        ),
        n = function (n) {
          var e =
            n === "hd"
              ? o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD
              : o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$SettingsSyncAction$MediaQualitySetting
                  .STANDARD;
          t(e);
        },
        a = e.hdMediaEnabled ? "hd" : "sd";
      return c.jsx(r("WAWebDrawerSection.react"), {
        animation: !1,
        xstyle: [
          o("WAWebUISpacing").uiPadding.horiz30,
          o("WAWebUISpacing").uiPadding.vert20,
        ],
        children: c.jsx("div", {
          role: "radiogroup",
          "aria-label": "Media upload quality",
          children: d.map(function (e) {
            var t = e.label,
              o = e.value;
            return c.jsx(
              r("WAWebPrivacyVisibilityOption.react"),
              {
                text: t(),
                selected: a === o,
                testid: void 0,
                onClick: function () {
                  return n(o);
                },
              },
              o,
            );
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
