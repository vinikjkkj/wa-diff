__d(
  "WAWebGroupMemberTagUpdateLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupMemberTagUpdateWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupMemberTagEntryPointType",
    "WAWebWamEnumGroupMemberTagUpdateActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.ENTRY_POINT = o(
            "WAWebWamEnumGroupMemberTagEntryPointType",
          ).GROUP_MEMBER_TAG_ENTRY_POINT_TYPE;
        }
        var n = t.prototype;
        return (
          (n.$1 = function (n, r) {
            var t = o(
              "WAWebUnifiedSession",
            ).UnifiedSessionManager.getSessionId();
            if (t == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-member-tag] Unified session ID is null",
                  ])),
              );
              return;
            }
            new (o(
              "WAWebGroupMemberTagUpdateWamEvent",
            ).GroupMemberTagUpdateWamEvent)({
              groupId: n.groupId,
              groupMemberTagUpdateAction: r,
              hasMemberTagAtStart: n.hasMemberTagAtStart,
              memberTagEntryPoint: n.memberTagEntryPoint,
              uiSurface: n.uiSurface,
              userJourneyEventMs: o("WATimeUtils").unixTimeMs(),
              unifiedSessionId: t,
            }).commit();
          }),
          (n.logUpdateClick = function (t) {
            this.$1(
              t,
              o("WAWebWamEnumGroupMemberTagUpdateActionType")
                .GROUP_MEMBER_TAG_UPDATE_ACTION_TYPE.UPDATE,
            );
          }),
          (n.logDeleteConfirm = function (t) {
            this.$1(
              t,
              o("WAWebWamEnumGroupMemberTagUpdateActionType")
                .GROUP_MEMBER_TAG_UPDATE_ACTION_TYPE.DELETE_CONFIRM,
            );
          }),
          (n.logError = function (t) {
            this.$1(
              t,
              o("WAWebWamEnumGroupMemberTagUpdateActionType")
                .GROUP_MEMBER_TAG_UPDATE_ACTION_TYPE.ERROR,
            );
          }),
          t
        );
      })(),
      u = new s();
    l.GroupMemberTagUpdateLogger = u;
  },
  98,
);
