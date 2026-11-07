__d(
  "WAWebHatchContactInfoRows",
  ["WAWebHatchFrontendGating", "WAWebHatchLibraryGating"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.areVmFeaturesHidden,
        n = e.hasPermissionsScreen,
        r = e.hasScheduledTasksScreen,
        a = e.hasSubscriptionScreen,
        i =
          a && o("WAWebHatchFrontendGating").isHatchManageSubscriptionEnabled();
      return t
        ? {
            activity: !1,
            approvalHistory: !1,
            connectors: !1,
            ideas: !1,
            permissions: !1,
            scheduledTasks: !1,
            secureCredentials: !1,
            subscription: i,
          }
        : {
            activity: o("WAWebHatchFrontendGating").isHatchActivityEnabled(),
            approvalHistory: o(
              "WAWebHatchFrontendGating",
            ).isHatchApprovalHistoryEnabled(),
            connectors: o(
              "WAWebHatchFrontendGating",
            ).isHatchConnectorsEnabled(),
            ideas: o("WAWebHatchFrontendGating").isHatchIdeasEnabled(),
            permissions:
              n && o("WAWebHatchFrontendGating").isHatchPermissionsEnabled(),
            scheduledTasks:
              r && o("WAWebHatchFrontendGating").isHatchScheduledTasksEnabled(),
            secureCredentials: o(
              "WAWebHatchFrontendGating",
            ).isHatchSecureCredentialsEnabled(),
            subscription: i,
          };
    }
    function s(t) {
      var n = t.areVmFeaturesHidden,
        r = t.contactId,
        a = t.isConnected,
        i = t.screens,
        l = [];
      if (a) {
        i.identity &&
          o("WAWebHatchFrontendGating").isHatchIdentityEnabled() &&
          l.push("identity");
        var s = e({
          areVmFeaturesHidden: n,
          hasPermissionsScreen: i.permissions,
          hasScheduledTasksScreen: i.scheduledTasks,
          hasSubscriptionScreen: i.subscription,
        });
        for (var u of [
          ["ideas", s.ideas],
          ["activity", s.activity],
          ["approvals_history", s.approvalHistory],
          ["scheduled_tasks", s.scheduledTasks],
          ["subscription", s.subscription],
          ["connectors", s.connectors],
          ["wallet", s.connectors],
          ["secure_credentials", s.secureCredentials],
          ["permissions", s.permissions],
        ]) {
          var c = u[0],
            d = u[1];
          d && l.push(c);
        }
      }
      return (
        o("WAWebHatchLibraryGating").isHatchLibraryChat(r) && l.push("library"),
        a &&
          i.dataControls &&
          !n &&
          o("WAWebHatchFrontendGating").isHatchDataControlsEnabled() &&
          l.push("data_controls"),
        l
      );
    }
    ((l.getHatchContactInfoVisibleRows = e), (l.hatchContactInfoRowsShown = s));
  },
  98,
);
