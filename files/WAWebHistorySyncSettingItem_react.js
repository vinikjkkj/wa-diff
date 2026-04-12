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
    "useWAWebHistorySyncProgressValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o(
          "useWAWebHistorySyncProgressValues",
        ).useHistorySyncProgressValues([
          o("WAWebHistorySyncProgressGetters").getInProgress,
          o("WAWebHistorySyncProgressGetters").getPaused,
          o("WAWebHistorySyncProgressGetters").getProgress,
        ]),
        t = e[0],
        n = e[1],
        a = e[2];
      return t
        ? n
          ? s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
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
            })
          : s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "history-sync-in-progress",
              testid: void 0,
              onSelect: d,
              detailLeft: s.jsx(r("WAWebSettingsStepIcon.react"), {
                setting:
                  o("WAWebSettingsConst").SettingsSteps.HistorySyncInProgress,
              }),
              primary: o(
                "WAWebHistorySyncUIText",
              ).SYNCING_OLDER_MESSAGES_SETTINGS_TITLE(),
              secondary:
                a == null
                  ? null
                  : o(
                      "WAWebHistorySyncUIText",
                    ).SYNCING_OLDER_MESSAGES_SETTINGS_PERCENT_COMPLETE(a),
              border: "bottom-partial",
              isRefresh: !0,
            })
        : null;
    }
    u.displayName = u.name + " [from " + i.id + "]";
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
