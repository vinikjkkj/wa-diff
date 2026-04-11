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
          var n, r, a;
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var i = t.xwa2_notify_group_on_prop_change,
              l = {
                initiatedBy: o("WAWebWidFactory").createWid(i.updated_by.id),
                sharingLimited:
                  (n =
                    (r = i.properties.limit_sharing) == null
                      ? void 0
                      : r.limit_sharing_enabled) != null
                    ? n
                    : !1,
                trigger: o(
                  "WAWebLimitSharingPropMappingUtils",
                ).getLimitSharingTriggerFromGroupSettingsChange(
                  (a = i.properties.limit_sharing) == null
                    ? void 0
                    : a.limit_sharing_trigger,
                ),
                limitSharingSettingTimestamp: Number(i.update_time),
              };
            yield o(
              "WAWebLimitSharingProtoUtils",
            ).updateChatWithLimitSharingIfNewer(
              e.from.toString(),
              l,
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
