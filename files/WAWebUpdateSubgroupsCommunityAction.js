__d(
  "WAWebUpdateSubgroupsCommunityAction",
  [
    "WAWebApiUnjoinedSubgroupMetadataStore",
    "WAWebChatCollection",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
    "WAWebGroupUnjoinedSubgroupJob",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.joinedSubgroups = r("WAWebGroupMetadataCollection")
        .filter(function (t) {
          var n;
          return (
            ((n = t.parentGroup) == null ? void 0 : n.equals(e.id)) &&
            t.participants.iAmMember()
          );
        })
        .map(function (e) {
          return e.id;
        });
    }
    function s(e) {
      e.unjoinedSubgroups = r("WAWebUnjoinedSubgroupMetadataCollection")
        .filter(function (t) {
          return t.parentGroupId.equals(e.id);
        })
        .map(function (e) {
          return e.id;
        });
    }
    function u(t, n) {
      (o(
        "WAWebApiUnjoinedSubgroupMetadataStore",
      ).removeUnjoinedSubgroupMetadataFromStorage(n),
        m(n),
        s(t),
        e(t));
    }
    function c(t, n) {
      (r("WAWebGroupMetadataCollection").add(
        { id: n, parentGroup: null },
        { merge: !0 },
      ),
        e(t));
    }
    function d(t, n) {
      var r = o("WAWebChatCollection").ChatCollection.get(n.toString()),
        a = r == null ? void 0 : r.groupMetadata;
      if (
        !(r == null || a == null) &&
        (e(t),
        !(
          a.participants.length === 0 ||
          (!t.participants.iAmAdmin() && a.hiddenSubgroup === !0) ||
          !t.hasJoined()
        ))
      ) {
        var i = {
          id: n,
          subject: r.formattedTitle,
          defaultSubgroup: !!a.defaultSubgroup,
          generalSubgroup: !!a.generalSubgroup,
          parentGroupId: t.id,
          membershipApprovalMode: a.membershipApprovalMode,
          hiddenSubgroup: !!a.hiddenSubgroup,
        };
        (o("WAWebGroupUnjoinedSubgroupJob").updateUnjoinedSubgroupsJob(
          [i],
          t.id,
        ),
          p([i], t.id));
      }
    }
    function m(e) {
      r("WAWebUnjoinedSubgroupMetadataCollection").remove(e.toString());
    }
    function p(e, t, n) {
      (n === void 0 && (n = !0),
        e.forEach(function (e) {
          if (!n) {
            m(e.id);
            return;
          }
          var o = e.subject,
            a = e.subjectTime,
            i = r("WAWebUnjoinedSubgroupMetadataCollection").get(
              e.id.toString(),
            );
          (i &&
            (i.subjectTime || 0) > (a || 0) &&
            ((o = i.subject), (a = i.subjectTime)),
            r("WAWebUnjoinedSubgroupMetadataCollection").add(
              babelHelpers.extends({}, e, {
                parentGroupId: t,
                subject: o,
                subjectTime: a,
              }),
              { merge: !0 },
            ));
        }));
      var o = r("WAWebGroupMetadataCollection").get(t.toString());
      o && s(o);
    }
    function _(e, t) {
      var n = r("WAWebUnjoinedSubgroupMetadataCollection")
          .filter(function (e) {
            return e.parentGroupId.equals(t);
          })
          .map(function (e) {
            return e.id;
          }),
        o = n.filter(function (t) {
          return !e.includes(t);
        });
      r("WAWebUnjoinedSubgroupMetadataCollection").remove(o);
    }
    function f(t, n, a) {
      (a === void 0 && (a = !0),
        t.forEach(function (e) {
          var t = e.generalSubgroup,
            i = e.hiddenSubgroup,
            l = e.id,
            s = e.subject;
          (s != null && o("WAWebGroupQueryBridge").updateSubject(l, s),
            r("WAWebGroupMetadataCollection").add(
              babelHelpers.extends({}, e, {
                parentGroup: a ? n : null,
                generalSubgroup: a ? t : null,
                hiddenSubgroup: a ? i : null,
              }),
              { merge: !0 },
            ));
        }),
        e(r("WAWebGroupMetadataCollection").assertGet(n.toString())));
    }
    function g(e) {
      var t,
        n = o("WAWebChatCollection").ChatCollection.get(e.toString());
      return (
        n == null ||
        !((t = n.groupMetadata) != null && t.participants.iAmMember())
      );
    }
    function h(e) {
      return e.filter(function (e) {
        return g(e);
      });
    }
    function y(e) {
      var t = h(
        e.map(function (e) {
          var t = e.id;
          return t;
        }),
      );
      return e.filter(function (e) {
        return t.includes(e.id);
      });
    }
    function C(e, t) {
      var n = r("WAWebUnjoinedSubgroupMetadataCollection").get(e);
      n != null && (n.membershipApprovalRequest = t);
    }
    function b(e, t) {
      (o(
        "WAWebApiUnjoinedSubgroupMetadataStore",
      ).updateMembershipApprovalRequestinDB(e, t),
        C(e, t));
    }
    function v(e) {
      var t = e.map(function (e) {
        return { id: e.id, size: e.participantCount };
      });
      r("WAWebUnjoinedSubgroupMetadataCollection").add(t, { merge: !0 });
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebApiUnjoinedSubgroupMetadataStore").updateSizeInDB(e),
            v(e));
        })),
        R.apply(this, arguments)
      );
    }
    ((l.updateJoinedSubgroups = e),
      (l.updateUnjoinedSubgroups = s),
      (l.subgroupUnjoinedToJoined = u),
      (l.unlinkParentGroup = c),
      (l.subgroupJoinedToUnjoined = d),
      (l.updateUnjoinedSubgroupsInCollection = p),
      (l.cleanUnjoinedSubgroupsInCollection = _),
      (l.updateJoinedSubgroupsInCollection = f),
      (l.determineUnjoined = g),
      (l.getUnjoinedSubgroups = y),
      (l.updateMembershipApprovalRequest = b),
      (l.updateUnjoinedSubgroupSize = S));
  },
  98,
);
