__d(
  "WAWebApiUnjoinedSubgroupMetadataStore",
  ["WAWebSchemaUnjoinedSubgroupMetadata", "asyncToGeneratorRuntime"],
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.link,
            n = e.parentGroupId,
            r = e.unjoinedSubgroups;
          if (!t) {
            yield o("WAWebSchemaUnjoinedSubgroupMetadata")
              .getUnjoinedSubgroupMetadataTable()
              .bulkRemove(
                r.map(function (e) {
                  return e.id.toString();
                }),
              );
            return;
          }
          var a = [],
            i = yield o("WAWebSchemaUnjoinedSubgroupMetadata")
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
            yield o("WAWebSchemaUnjoinedSubgroupMetadata")
              .getUnjoinedSubgroupMetadataTable()
              .bulkCreateOrMerge(a));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentGroupId,
            n = e.unjoinedSubgroupIds,
            r = yield o("WAWebSchemaUnjoinedSubgroupMetadata")
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
          yield o("WAWebSchemaUnjoinedSubgroupMetadata")
            .getUnjoinedSubgroupMetadataTable()
            .bulkRemoveByIndex(["id"], l);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSchemaUnjoinedSubgroupMetadata")
            .getUnjoinedSubgroupMetadataTable()
            .get(e.toString());
          if (n != null) {
            var r = babelHelpers.extends({}, n, {
              membershipApprovalRequest: t,
            });
            yield o("WAWebSchemaUnjoinedSubgroupMetadata")
              .getUnjoinedSubgroupMetadataTable()
              .bulkCreateOrMerge([r]);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaUnjoinedSubgroupMetadata")
              .getUnjoinedSubgroupMetadataTable()
              .bulkGet(
                e.map(function (e) {
                  return e.id.toString();
                }),
              ),
            n = [];
          (e.forEach(function (e, r) {
            var o = t[r];
            o &&
              n.push(babelHelpers.extends({}, o, { size: e.participantCount }));
          }),
            yield o("WAWebSchemaUnjoinedSubgroupMetadata")
              .getUnjoinedSubgroupMetadataTable()
              .bulkCreateOrMerge(n));
        })),
        h.apply(this, arguments)
      );
    }
    ((l.removeUnjoinedSubgroupMetadataFromStorage = s),
      (l.updateUnjoinedSubgroups = c),
      (l.cleanUnjoinedSubgroups = m),
      (l.updateMembershipApprovalRequestinDB = _),
      (l.updateSizeInDB = g));
  },
  98,
);
