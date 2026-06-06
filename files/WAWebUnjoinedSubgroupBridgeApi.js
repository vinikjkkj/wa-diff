__d(
  "WAWebUnjoinedSubgroupBridgeApi",
  [
    "WAWebSchemaUnjoinedSubgroupMetadata",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      restoreUnjoinedSubgroups: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaUnjoinedSubgroupMetadata")
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
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.UnjoinedSubgroupBridgeApi = e;
  },
  98,
);
