__d(
  "WAWebQueryGroupAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebGroupMetadataModel",
    "WAWebGroupQueryBridge",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebPnhCagUtils",
    "WAWebSyncDeviceAdvDeviceListJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["membershipApprovalRequest", "parentGroupSubject", "subject"];
    async function d(e) {
      var t = await o("WAWebGroupQueryBridge").sendQueryGroupInvite(e),
        n = t.groupInfo,
        a = t.status;
      await o(
        "WAWebLidMappingUsernameLearnUtils",
      ).processParsedGroupInfosForLidMappingAndUsernames([n]);
      var i = n.membershipApprovalRequest,
        l = n.parentGroupSubject,
        s = n.subject,
        u = babelHelpers.objectWithoutPropertiesLoose(n, c),
        d = new (r("WAWebGroupMetadataModel"))(u);
      o("WAWebContactCollection").ContactCollection.gadd(d.id);
      var m = o("WAWebChatCollection").ChatCollection.get(d.id),
        p = !!m && !m.isReadOnly;
      return {
        status: a,
        subject: s,
        groupMetadata: d,
        inGroup: p,
        parentGroupSubject: l,
        membershipApprovalRequest: !!i,
      };
    }
    async function m(t) {
      if (t.deviceStale) {
        if (t.deviceQueryPromise)
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeQueryGroupDevice: ",
                  " - skip duplicate query",
                ])),
              t.id,
            ),
            t.deviceQueryPromise
          );
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "maybeQueryGroupDevice: ",
              " - start query device",
            ])),
          t.id,
        );
        var n = t.isCag
          ? o("WAWebPnhCagUtils").augmentedCagGroupMetadataParticipantList(t)
          : t.participants.map(function (e) {
              return e.id;
            });
        t.deviceQueryPromise = o(
          "WAWebSyncDeviceAdvDeviceListJob",
        ).syncDeviceListJob(n);
        try {
          (await t.deviceQueryPromise,
            (t.deviceStale = !1),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "maybeQueryGroupDevice: ",
                  " - complete query device",
                ])),
              t.id,
            ));
        } finally {
          t.deviceQueryPromise = null;
        }
      }
    }
    ((l.queryGroupInviteInfo = d), (l.maybeQueryGroupDevice = m));
  },
  98,
);
