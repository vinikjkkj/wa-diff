__d(
  "WAWebCanManageDeviceLocalList",
  ["WAWebListsGatingUtils", "WAWebMetaAiChatFilter", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMetaAiChatFilter").shouldShowMetaAiFilter() &&
        (!o("WAWebMobilePlatforms").isSMB() ||
          o("WAWebListsGatingUtils").isListsM2Enabled())
      );
    }
    l.canManageDeviceLocalList = e;
  },
  98,
);
