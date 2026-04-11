__d(
  "WAWebCommunityGroupJourneyEventImpl",
  [
    "WALogger",
    "WAWebGetSharedSessionId",
    "WAWebGetThreadType",
    "WAWebGetUserRole",
    "WAWebGroupJourneyWamEvent",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t(e) {
          var t = e.action,
            n = e.chat,
            r = e.surface;
          ((this.action = t),
            (this.surface = r),
            (this.chat = n),
            (this.sessionId = o(
              "WAWebGetSharedSessionId",
            ).getSharedSessionId()));
        }
        t.inviteModalSourceToSurface = function (n) {
          var t;
          e: {
            if (n === "community_home") {
              t = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_HOME;
              break e;
            }
            if (n === "community_nav") {
              t = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV;
              break e;
            }
            if (n === "subgroup_switcher") {
              t = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV_SHEET;
              break e;
            }
            if (n === "invite_link" || n === "group_mention") {
              t = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT;
              break e;
            }
            if (n === "other") {
              (o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "No relevant communtiy journey log for this invite modal",
                  ])),
              ),
                (t = null));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
            );
          }
          return t;
        };
        var n = t.prototype;
        return (
          (n.shouldLogThreadType = function () {
            switch (this.surface) {
              case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT:
              case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST:
              case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_HOME:
              case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_TAB:
              case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV:
              case o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .COMMUNITY_NAV_SHEET:
              case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_SETTINGS:
              case o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GROUP_INFO:
                return !0;
              default:
                return !1;
            }
          }),
          (n.getThreadType = function () {
            var e;
            return !this.shouldLogThreadType() ||
              ((e = this.chat) == null ? void 0 : e.groupMetadata) == null
              ? null
              : o("WAWebGetThreadType").getThreadType(this.chat);
          }),
          (n.getGroupSize = function () {
            var e,
              t,
              n = (e = this.chat) == null ? void 0 : e.groupMetadata;
            return n == null ? 0 : (t = n.participants.length) != null ? t : 0;
          }),
          (n.getUserRole = function () {
            return o("WAWebGetUserRole").getUserRole(this.chat);
          }),
          (n.commit = function () {
            var e = new (o("WAWebGroupJourneyWamEvent").GroupJourneyWamEvent)({
                actionType: this.action,
                appSessionId: this.sessionId,
                surface: this.surface,
                groupSize: this.getGroupSize(),
              }),
              t = this.getThreadType();
            t != null && (e.threadType = t);
            var n = this.getUserRole();
            (n != null && (e.userRole = n), e.commit());
          }),
          t
        );
      })();
    l.CommunityGroupJourneyEvent = s;
  },
  98,
);
