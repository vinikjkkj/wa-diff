__d(
  "WAWebListDropdownManageableListCount",
  [
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebCanManageDeviceLocalList",
    "WAWebLabelCollection",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebLabelCollection").LabelCollection.getCustomLists().length;
      if (!o("WAWebListsGatingUtils").isListsM2Enabled()) return e;
      var t =
          o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebBizAiAgentGating").isAiListsWebUIEnabled() &&
          o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent(),
        n = o("WAWebLabelCollection")
          .LabelCollection.getInactivePresetLists()
          .filter(function (e) {
            return o("WAWebListUtils").isDeviceLocalList(e)
              ? o("WAWebCanManageDeviceLocalList").canManageDeviceLocalList()
              : o("WAWebListUtils").isHiddenToYouList(e.type)
                ? !1
                : t || !o("WAWebListUtils").isAiList(e.type);
          });
      return e + n.length;
    }
    l.getListDropdownManageableListCount = e;
  },
  98,
);
