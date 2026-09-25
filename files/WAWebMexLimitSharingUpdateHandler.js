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
            a = o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()
              ? (n = r.properties.limit_sharing) == null
                ? void 0
                : n.limit_companion_sharing_enabled
              : void 0;
          if (a != null) {
            var i,
              l = {
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
            yield o("WAWebLimitSharingProtoUtils").updateChatWithAcp2IfNewer(
              e.from.toString(),
              l,
              "onValueChange",
            );
          }
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var s,
              u,
              c,
              d = {
                initiatedBy: o("WAWebWidFactory").createWid(r.updated_by.id),
                sharingLimited:
                  (s =
                    (u = r.properties.limit_sharing) == null
                      ? void 0
                      : u.limit_sharing_enabled) != null
                    ? s
                    : !1,
                trigger: o(
                  "WAWebLimitSharingPropMappingUtils",
                ).getLimitSharingTriggerFromGroupSettingsChange(
                  (c = r.properties.limit_sharing) == null
                    ? void 0
                    : c.limit_sharing_trigger,
                ),
                limitSharingSettingTimestamp: Number(r.update_time),
              };
            yield o(
              "WAWebLimitSharingProtoUtils",
            ).updateChatWithLimitSharingIfNewer(
              e.from.toString(),
              d,
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
