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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(12),
        t,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = r("WAWebChatPreferenceCollection").getDefault()),
          (n = ["hdMediaEnabled"]),
          (e[0] = t),
          (e[1] = n))
        : ((t = e[0]), (n = e[1]));
      var a = o("useWAWebModelValues").useModelValues(t, n),
        i;
      e[2] !== a
        ? ((i = function (t) {
            a.set(
              "hdMediaEnabled",
              t ===
                o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD,
            );
          }),
          (e[2] = a),
          (e[3] = i))
        : (i = e[3]);
      var l = o("useWAWebSettingSync").useSettingSync("mediaUploadQuality", i),
        s;
      e[4] !== l
        ? ((s = function (t) {
            var e =
              t === "hd"
                ? o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting.HD
                : o("WAWebProtobufSyncAction.pb")
                    .SyncActionValue$SettingsSyncAction$MediaQualitySetting
                    .STANDARD;
            l(e);
          }),
          (e[4] = l),
          (e[5] = s))
        : (s = e[5]);
      var u = s,
        m = a.hdMediaEnabled ? "hd" : "sd",
        p;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = [
            o("WAWebUISpacing").uiPadding.horiz30,
            o("WAWebUISpacing").uiPadding.vert20,
          ]),
          (e[6] = p))
        : (p = e[6]);
      var _;
      e[7] !== m || e[8] !== u
        ? ((_ = d.map(function (e) {
            var t = e.label,
              n = e.value;
            return c.jsx(
              r("WAWebPrivacyVisibilityOption.react"),
              {
                text: t(),
                selected: m === n,
                testid: void 0,
                onClick: function () {
                  return u(n);
                },
              },
              n,
            );
          })),
          (e[7] = m),
          (e[8] = u),
          (e[9] = _))
        : (_ = e[9]);
      var f;
      return (
        e[10] !== _
          ? ((f = c.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: p,
              children: c.jsx("div", {
                role: "radiogroup",
                "aria-label": "Media upload quality",
                children: _,
              }),
            })),
            (e[10] = _),
            (e[11] = f))
          : (f = e[11]),
        f
      );
    }
    l.default = m;
  },
  226,
);
