__d(
  "WAWebHistorySyncSettingItem.react",
  [
    "WAWebHistorySyncInProgressPopup.react",
    "WAWebHistorySyncPausedPopup.react",
    "WAWebHistorySyncProgressGetters",
    "WAWebHistorySyncUIText",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebSettingsConst",
    "WAWebSettingsStepIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebHistorySyncProgressValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(8),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [
            o("WAWebHistorySyncProgressGetters").getInProgress,
            o("WAWebHistorySyncProgressGetters").getPaused,
            o("WAWebHistorySyncProgressGetters").getProgress,
          ]),
          (e[0] = t))
        : (t = e[0]);
      var n = o(
          "useWAWebHistorySyncProgressValues",
        ).useHistorySyncProgressValues(t),
        a = n[0],
        i = n[1],
        l = n[2];
      if (!a) return null;
      if (i) {
        var u;
        return (
          e[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                optionId: "history-sync-paused",
                testid: void 0,
                onSelect: c,
                detailLeft: s.jsx(r("WAWebSettingsStepIcon.react"), {
                  setting:
                    o("WAWebSettingsConst").SettingsSteps.HistorySyncPaused,
                }),
                primary: o(
                  "WAWebHistorySyncUIText",
                ).SYNCING_PAUSED_GLOBAL_SETTINGS_TITLE(),
                secondary: o(
                  "WAWebHistorySyncUIText",
                ).SYNCING_PAUSED_GLOBAL_SETTINGS_SUBTITLE(),
                border: "bottom-partial",
                isRefresh: !0,
              })),
              (e[1] = u))
            : (u = e[1]),
          u
        );
      }
      var m, p;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx(r("WAWebSettingsStepIcon.react"), {
            setting:
              o("WAWebSettingsConst").SettingsSteps.HistorySyncInProgress,
          })),
          (p = o(
            "WAWebHistorySyncUIText",
          ).SYNCING_OLDER_MESSAGES_SETTINGS_TITLE()),
          (e[2] = m),
          (e[3] = p))
        : ((m = e[2]), (p = e[3]));
      var _;
      e[4] !== l
        ? ((_ =
            l == null
              ? null
              : o(
                  "WAWebHistorySyncUIText",
                ).SYNCING_OLDER_MESSAGES_SETTINGS_PERCENT_COMPLETE(l)),
          (e[4] = l),
          (e[5] = _))
        : (_ = e[5]);
      var f;
      return (
        e[6] !== _
          ? ((f = s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "history-sync-in-progress",
              testid: void 0,
              onSelect: d,
              detailLeft: m,
              primary: p,
              secondary: _,
              border: "bottom-partial",
              isRefresh: !0,
            })),
            (e[6] = _),
            (e[7] = f))
          : (f = e[7]),
        f
      );
    }
    function c() {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebHistorySyncPausedPopup.react"), {}),
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebHistorySyncInProgressPopup.react"), {}),
      );
    }
    l.default = u;
  },
  98,
);
