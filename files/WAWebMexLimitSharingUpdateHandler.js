__d(
  "WAWebMexLimitSharingUpdateHandler",
  [
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = t.xwa2_notify_group_on_prop_change,
            a =
              (n = r.properties.limit_sharing) == null
                ? void 0
                : n.limit_companion_sharing_enabled;
          if (a != null) {
            var i,
              l = e.from.toString(),
              s = {
                enabled: a,
                trigger: o(
                  "WAWebLimitSharingPropMappingUtils",
                ).getLimitSharingTriggerFromGroupSettingsChange(
                  (i = r.properties.limit_sharing) == null
                    ? void 0
                    : i.limit_sharing_trigger,
                ),
                settingTimestamp: Number(r.update_time),
                initiatedBy: o("WAWebWidFactory").createWid(r.updated_by.id),
              };
            yield o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()
              ? o("WAWebLimitSharingProtoUtils").updateChatWithAcp2IfNewer(
                  l,
                  s,
                  "onValueChange",
                )
              : o(
                  "WAWebLimitSharingProtoUtils",
                ).updateExistingAcp2SettingIfNewer(l, s);
          }
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var u,
              c,
              d,
              m = {
                initiatedBy: o("WAWebWidFactory").createWid(r.updated_by.id),
                sharingLimited:
                  (u =
                    (c = r.properties.limit_sharing) == null
                      ? void 0
                      : c.limit_sharing_enabled) != null
                    ? u
                    : !1,
                trigger: o(
                  "WAWebLimitSharingPropMappingUtils",
                ).getLimitSharingTriggerFromGroupSettingsChange(
                  (d = r.properties.limit_sharing) == null
                    ? void 0
                    : d.limit_sharing_trigger,
                ),
                limitSharingSettingTimestamp: Number(r.update_time),
              };
            yield o(
              "WAWebLimitSharingProtoUtils",
            ).updateChatWithLimitSharingIfNewer(
              e.from.toString(),
              m,
              "onValueChange",
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.mexHandleLimitSharingUpdate = e;
  },
  98,
);
