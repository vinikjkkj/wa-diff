__d(
  "WAWebGroupIncompatibleDeviceAddResult",
  ["WAWebBotGroupGatingUtils", "WAWebWamEnumAddMembersEntrypointType"],
  function (t, n, r, o, a, i, l) {
    var e = "431";
    function s(t, n) {
      var r = t.participants.some(function (t) {
        var n = t.code,
          r = t.userWid;
        return n === e && !r.isBot();
      });
      return !r ||
        n ===
          o("WAWebWamEnumAddMembersEntrypointType").ADD_MEMBERS_ENTRYPOINT_TYPE
            .ADD_CONTACT_TO_GROUPS_PICKER ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? { hasIncompatibleDeviceRejection: !1, reportedResponse: t }
        : {
            hasIncompatibleDeviceRejection: !0,
            reportedResponse: babelHelpers.extends({}, t, {
              participants: t.participants.filter(function (t) {
                var n = t.code,
                  r = t.userWid;
                return n !== e || r.isBot();
              }),
            }),
          };
    }
    l.splitIncompatibleDeviceRejections = s;
  },
  98,
);
