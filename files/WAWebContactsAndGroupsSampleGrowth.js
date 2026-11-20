__d(
  "WAWebContactsAndGroupsSampleGrowth",
  [
    "WAWebContactsAndGroupsGroupSetup",
    "WAWebContactsAndGroupsMyGroups",
    "WAWebContactsAndGroupsSampleData",
    "WAWebEventEmitter",
    "WAWebFrontendChatGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 3,
      u = new (r("WAWebEventEmitter"))(),
      c = new Set(),
      d = null;
    function m(t, n) {
      if (!o("WAWebContactsAndGroupsSampleData").isSampleDataOn()) return null;
      var r = o("WAWebContactsAndGroupsMyGroups")
          .getMyGroups()
          .filter(function (e) {
            var t;
            return (
              !o("WAWebFrontendChatGetters").getIsCommunity(e) &&
              ((t = e.groupMetadata) == null
                ? void 0
                : t.participants.iAmAdmin()) === !0 &&
              !o("WAWebContactsAndGroupsGroupSetup").isGroupCreatedThisWeek(
                e,
                n,
              )
            );
          }),
        a = r[0],
        i = r[1];
      if ((a == null ? void 0 : a.id.equals(t)) === !0) {
        var l, u;
        return {
          adminCount:
            (l =
              (u = a.groupMetadata) == null
                ? void 0
                : u.participants.getAdmins().length) != null
              ? l
              : 0,
          joins: { joinCount: e, linkJoinCount: e },
          needsApproval: !1,
        };
      }
      return (i == null ? void 0 : i.id.equals(t)) === !0
        ? {
            adminCount: 1,
            joins: { joinCount: s, linkJoinCount: 0 },
            needsApproval: null,
          }
        : null;
    }
    function p(e, t) {
      return f().has(e.toString() + ":" + t);
    }
    function _(e, t) {
      (f().add(e.toString() + ":" + t), u.trigger("change"));
    }
    function f() {
      var e = o("WAWebContactsAndGroupsSampleData").getSampleDataSession();
      return (d !== e && ((c = new Set()), (d = e)), c);
    }
    ((l.sampleGrowthDismissals = u),
      (l.getSampleGrowthSignals = m),
      (l.isSampleGrowthSuggestionDismissed = p),
      (l.dismissSampleGrowthSuggestion = _));
  },
  98,
);
