__d(
  "WAWebGroupMemberListLogger",
  [
    "GroupMemberListInteractionFalcoEvent",
    "WAWebABProps",
    "WAWebGetMaybeChatById",
    "WAWebGroupMembersGating",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = 200,
      u = 207,
      c = String(s);
    function d(e, t, n) {
      h(e, { surface: t, action: "open", entry_point: n });
    }
    function m(e, t) {
      var n = o("WAWebGetMaybeChatById").getMaybeChatById(e),
        r =
          n != null && o("WAWebGroupMembersGating").isGroupMembersViewEnabled(n)
            ? "manage_members"
            : "group_member_search";
      d(e, r, t);
    }
    function p(t, n, r) {
      e: {
        var o = r;
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "open"
        ) {
          _(t, n, "menu_open", e);
          break e;
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "item" &&
          "item" in o
        ) {
          var a = o.item;
          _(t, n, a, e);
          break e;
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "change" &&
          "change" in o &&
          "response" in o
        ) {
          var i = o.change,
            l = o.response;
          f(t, n, i, e, g(l, e));
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            o,
        );
      }
    }
    function _(e, t, n, r) {
      h(e, {
        surface: t,
        action: n,
        target_count: r != null ? String(r) : null,
      });
    }
    function f(e, t, n, r, o) {
      h(e, {
        surface: t,
        action: n,
        target_count: String(r),
        failed_count: String(o),
        is_successful: o === 0,
      });
    }
    function g(e, t) {
      return e != null && e.status === u
        ? e.participants.filter(function (e) {
            var t = e.code;
            return t !== c;
          }).length
        : (e == null ? void 0 : e.status) === s
          ? 0
          : t;
    }
    function h(e, t) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_group_member_list_logging_enabled",
        )
      ) {
        var n = o("WAWebGetMaybeChatById").getMaybeChatById(e),
          a = n != null ? y(n) : null;
        r("GroupMemberListInteractionFalcoEvent").log(function () {
          return babelHelpers.extends({}, t, a);
        });
      }
    }
    function y(e) {
      var t,
        n = e.groupMetadata;
      return {
        is_admin:
          (t = n == null ? void 0 : n.participants.iAmAdmin()) != null
            ? t
            : null,
        group_size: n != null ? String(C(n)) : null,
        new_view_enabled: o(
          "WAWebGroupMembersGating",
        ).isGroupMembersViewEnabled(e),
      };
    }
    function C(e) {
      var t = e.size;
      return o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
        t != null &&
        t > 0
        ? t
        : e.participants.length;
    }
    ((l.logGroupMemberListOpen = d),
      (l.logGroupParticipantsFlowOpen = m),
      (l.logGroupParticipantMenuEvent = p),
      (l.logGroupMemberListTap = _),
      (l.logGroupMemberListChange = f),
      (l.countFailedMembers = g));
  },
  98,
);
