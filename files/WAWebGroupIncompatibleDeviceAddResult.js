__d(
  "WAWebGroupIncompatibleDeviceAddResult",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebWamEnumAddMembersEntrypointType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "431";
    function s(e, t) {
      var n = e.participants.some(function (e) {
        var t = e.code,
          n = e.userWid;
        return c(t, n);
      });
      return !n ||
        t ===
          o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE
            .ADD_CONTACT_TO_GROUPS_PICKER ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? { hasIncompatibleDeviceRejection: !1, reportedResponse: e }
        : {
            hasIncompatibleDeviceRejection: !0,
            reportedResponse: babelHelpers.extends({}, e, {
              participants: e.participants.filter(function (e) {
                var t = e.code,
                  n = e.userWid;
                return !c(t, n);
              }),
            }),
          };
    }
    function u(t) {
      return (
        t.some(function (t) {
          var n = t.code,
            r = t.userWid;
          return (
            n === e && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(r)
          );
        }) && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function c(t, n) {
      return (
        t === e &&
        (!n.isBot() || o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(n))
      );
    }
    ((l.splitIncompatibleDeviceRejections = s),
      (l.hasAgentIncompatibleDeviceRejection = u));
  },
  98,
);
