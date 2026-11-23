__d(
  "WAWebMexLimitSharingUpdateHandler",
  [
    "WAWebLimitSharingPropMappingUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n,
        r,
        a,
        i,
        l = t.xwa2_notify_group_on_prop_change,
        s = o("WAWebWidFactory").createWid(l.updated_by.id),
        u = o(
          "WAWebLimitSharingPropMappingUtils",
        ).getLimitSharingTriggerFromGroupSettingsChange(
          (n = l.properties.limit_sharing) == null
            ? void 0
            : n.limit_sharing_trigger,
        ),
        c = Number(l.update_time),
        d = {
          initiatedBy: s,
          sharingLimited:
            (r =
              (a = l.properties.limit_sharing) == null
                ? void 0
                : a.limit_sharing_enabled) != null
              ? r
              : !1,
          trigger: u,
          limitSharingSettingTimestamp: c,
        },
        m =
          (i = l.properties.limit_sharing) == null
            ? void 0
            : i.limit_companion_sharing_enabled,
        p =
          m == null
            ? null
            : { enabled: m, trigger: u, settingTimestamp: c, initiatedBy: s };
      await o("WAWebLimitSharingProtoUtils").updateGroupWithLimitSharingIfNewer(
        e.from.toString(),
        d,
        p,
      );
    }
    l.mexHandleLimitSharingUpdate = e;
  },
  98,
);
