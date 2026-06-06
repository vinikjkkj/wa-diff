__d(
  "WAWebApiUnjoinedSubgroupMetadataStore",
  ["WAWebSchemaUnjoinedSubgroupMetadata"],
  function (t, n, r, o, a, i, l) {
    var e = ["defaultSubgroup", "generalSubgroup", "parentGroupId"];
    function s(e) {
      o("WAWebSchemaUnjoinedSubgroupMetadata")
        .getUnjoinedSubgroupMetadataTable()
        .remove(e.toString());
    }
    function u(t) {
      var n,
        r,
        o,
        a = {},
        i = t.defaultSubgroup,
        l = t.generalSubgroup,
        s = t.parentGroupId,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return (
        i != null && (a.defaultSubgroup = i),
        l != null && (a.generalSubgroup = l),
        s != null && (a.parentGroup = s.toString()),
        babelHelpers.extends({}, u, a, {
          id: t.id.toString(),
          hiddenSubgroup: (n = t.hiddenSubgroup) != null ? n : !1,
          membershipApprovalMode:
            (r = t.membershipApprovalMode) != null ? r : !1,
          membershipApprovalRequest:
            (o = t.membershipApprovalRequest) != null ? o : !1,
        })
      );
    }
    async function c(e) {
      var t = e.link,
        n = e.parentGroupId,
        r = e.unjoinedSubgroups;
      if (!t) {
        await o("WAWebSchemaUnjoinedSubgroupMetadata")
          .getUnjoinedSubgroupMetadataTable()
          .bulkRemove(
            r.map(function (e) {
              return e.id.toString();
            }),
          );
        return;
      }
      var a = [],
        i = await o("WAWebSchemaUnjoinedSubgroupMetadata")
          .getUnjoinedSubgroupMetadataTable()
          .bulkGet(
            r.map(function (e) {
              return e.id.toString();
            }),
          );
      ((a = r.map(function (e, t) {
        var r = i[t],
          o = { subject: e.subject, subjectTime: e.subjectTime || 0 };
        if (r) {
          var a = r.subjectTime || 0;
          a > o.subjectTime && (o = { subject: r.subject, subjectTime: a });
        }
        return u(babelHelpers.extends({}, e, o, { parentGroupId: n }));
      })),
        await o("WAWebSchemaUnjoinedSubgroupMetadata")
          .getUnjoinedSubgroupMetadataTable()
          .bulkCreateOrMerge(a));
    }
    async function d(e) {
      var t = e.parentGroupId,
        n = e.unjoinedSubgroupIds,
        r = await o("WAWebSchemaUnjoinedSubgroupMetadata")
          .getUnjoinedSubgroupMetadataTable()
          .equals(["parentGroup"], t.toString()),
        a = r.map(function (e) {
          return e.id;
        }),
        i = n.map(function (e) {
          return e.toString();
        }),
        l = a.filter(function (e) {
          return !i.includes(e);
        });
      await o("WAWebSchemaUnjoinedSubgroupMetadata")
        .getUnjoinedSubgroupMetadataTable()
        .bulkRemoveByIndex(["id"], l);
    }
    async function m(e, t) {
      var n = await o("WAWebSchemaUnjoinedSubgroupMetadata")
        .getUnjoinedSubgroupMetadataTable()
        .get(e.toString());
      if (n != null) {
        var r = babelHelpers.extends({}, n, { membershipApprovalRequest: t });
        await o("WAWebSchemaUnjoinedSubgroupMetadata")
          .getUnjoinedSubgroupMetadataTable()
          .bulkCreateOrMerge([r]);
      }
    }
    async function p(e) {
      var t = await o("WAWebSchemaUnjoinedSubgroupMetadata")
          .getUnjoinedSubgroupMetadataTable()
          .bulkGet(
            e.map(function (e) {
              return e.id.toString();
            }),
          ),
        n = [];
      (e.forEach(function (e, r) {
        var o = t[r];
        o && n.push(babelHelpers.extends({}, o, { size: e.participantCount }));
      }),
        await o("WAWebSchemaUnjoinedSubgroupMetadata")
          .getUnjoinedSubgroupMetadataTable()
          .bulkCreateOrMerge(n));
    }
    ((l.removeUnjoinedSubgroupMetadataFromStorage = s),
      (l.updateUnjoinedSubgroups = c),
      (l.cleanUnjoinedSubgroups = d),
      (l.updateMembershipApprovalRequestinDB = m),
      (l.updateSizeInDB = p));
  },
  98,
);
