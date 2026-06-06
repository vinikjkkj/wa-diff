__d(
  "WAWebUnjoinedSubgroupBridgeApi",
  [
    "WAWebSchemaUnjoinedSubgroupMetadata",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      restoreUnjoinedSubgroups: async function () {
        var e = await o("WAWebSchemaUnjoinedSubgroupMetadata")
          .getUnjoinedSubgroupMetadataTable()
          .all();
        e.forEach(function (e) {
          r("WAWebUnjoinedSubgroupMetadataCollection").add(
            {
              id: o("WAWebWidFactory").createWid(e.id),
              subject: e.subject,
              subjectTime: e.subjectTime,
              defaultSubgroup: e.defaultSubgroup,
              parentGroupId: o("WAWebWidFactory").createWid(e.parentGroup),
              size: e.size,
              generalSubgroup: e.generalSubgroup,
              membershipApprovalMode: e.membershipApprovalMode,
              membershipApprovalRequest: e.membershipApprovalRequest,
              hiddenSubgroup: e.hiddenSubgroup,
            },
            { merge: !0 },
          );
        });
      },
    };
    l.UnjoinedSubgroupBridgeApi = e;
  },
  98,
);
