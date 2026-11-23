__d(
  "WAWebQueryGroupAction",
  [
    "WAWebBackendRuntime",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebGroupMetadataModel",
    "WAWebGroupQueryBridge",
    "WAWebGroupQueryService",
    "WAWebLidMappingService",
    "WAWebLidMappingUsernameLearnUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["membershipApprovalRequest", "parentGroupSubject", "subject"];
    async function s(t) {
      var n = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupQueryService").GroupQueryService,
              ).sendQueryGroupInvite
            : o("WAWebGroupQueryBridge").sendQueryGroupInvite
        )(t),
        a = n.groupInfo,
        i = n.status;
      await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebLidMappingService").LidMappingService,
            ).processParsedGroupInfosForLidMappingAndUsernames
          : o("WAWebLidMappingUsernameLearnUtils")
              .processParsedGroupInfosForLidMappingAndUsernames
      )([a]);
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
    }
    l.queryGroupInviteInfo = s;
  },
  98,
);
