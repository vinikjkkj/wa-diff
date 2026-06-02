__d(
  "WAWebMemberLabelJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMemberLabel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e != null && e.lastEditTimestamp > t.lastEditTimestamp;
    }
    function s(e) {
      var t = e.chatId,
        n = e.member;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMemberLabel",
          async function () {
            var e = await o("WAWebSchemaMemberLabel")
              .getMemberLabelTable()
              .get(t);
            if (e != null) return e.memberLabelMap.get(n);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function u(e) {
      var t = e.chatId,
        n = e.member;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteMemberLabel",
          async function () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["member-label"], async function (e) {
                var r = e[0],
                  o = await r.get(t);
                if (o == null) return !1;
                if ((o.memberLabelMap.delete(n), o.memberLabelMap.size === 0))
                  return (await r.remove(t), !0);
                var a = { memberLabelMap: o.memberLabelMap };
                return (await r.merge(t, a), !0);
              });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function c(t) {
      var n = t.chatId,
        r = t.member,
        a = t.memberLabel;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "createOrUpdateMemberLabel",
          async function () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["member-label"], async function (t) {
                var o = t[0],
                  i = await o.get(n);
                if (i == null) {
                  var l = { chatId: n, memberLabelMap: new Map([[r, a]]) };
                  return (await o.create(l), !0);
                }
                var s = i.memberLabelMap.get(r);
                if (e(s, a)) return !1;
                var u = { memberLabelMap: i.memberLabelMap.set(r, a) };
                return (await o.merge(n, u), !0);
              });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function d(e) {
      var t = e.chatId;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMemberLabelsForGroups",
          async function () {
            var e = await o("WAWebSchemaMemberLabel")
              .getMemberLabelTable()
              .get(t);
            if (e != null) return e.memberLabelMap;
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e) {
      var t = e.chatId;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteAllLabelsForGroup",
          async function () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["member-label"], async function (e) {
                var n = e[0],
                  r = await n.get(t);
                if (!r) return [];
                var o = Array.from(r.memberLabelMap.keys());
                return (await n.remove(t), o);
              });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e) {
      var t = e.chatId,
        n = e.members;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteMemberLabels",
          async function () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["member-label"], async function (e) {
                var r = e[0],
                  o = await r.get(t);
                if (o == null) return [];
                var a = n.filter(function (e) {
                  return o.memberLabelMap.delete(e);
                });
                return (
                  o.memberLabelMap.size === 0
                    ? await r.remove(t)
                    : await r.merge(t, { memberLabelMap: o.memberLabelMap }),
                  a
                );
              });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.getMemberLabel = s),
      (l.deleteMemberLabel = u),
      (l.createOrUpdateMemberLabel = c),
      (l.getMemberLabelsForGroups = d),
      (l.deleteAllMemberLabelsForGroup = m),
      (l.deleteMemberLabelsForGroup = p));
  },
  98,
);
