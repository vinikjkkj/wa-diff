__d(
  "WAWebQueryGroupAction",
  [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebGroupMetadataModel",
    "WAWebGroupQueryBridge",
    "WAWebLidMappingUsernameLearnUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["membershipApprovalRequest", "parentGroupSubject", "subject"];
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebGroupQueryBridge").sendQueryGroupInvite(t),
            a = n.groupInfo,
            i = n.status;
          yield o(
            "WAWebLidMappingUsernameLearnUtils",
          ).processParsedGroupInfosForLidMappingAndUsernames([a]);
          var l = a.membershipApprovalRequest,
            s = a.parentGroupSubject,
            u = a.subject,
            c = babelHelpers.objectWithoutPropertiesLoose(a, e),
            d = new (r("WAWebGroupMetadataModel"))(c);
          o("WAWebContactCollection").ContactCollection.gadd(d.id);
          var m = o("WAWebChatCollection").ChatCollection.get(d.id),
            p = !!m && !m.isReadOnly;
          return {
            status: i,
            subject: u,
            groupMetadata: d,
            inGroup: p,
            parentGroupSubject: s,
            membershipApprovalRequest: !!l,
          };
        })),
        u.apply(this, arguments)
      );
    }
    l.queryGroupInviteInfo = s;
  },
  98,
);
