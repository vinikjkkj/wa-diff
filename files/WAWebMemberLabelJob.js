__d(
  "WAWebMemberLabelJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMemberLabel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e != null && e.lastEditTimestamp > t.lastEditTimestamp;
    }
    function s(e) {
      var t = e.chatId,
        r = e.member;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMemberLabel",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebSchemaMemberLabel")
              .getMemberLabelTable()
              .get(t);
            if (e != null) return e.memberLabelMap.get(r);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function u(e) {
      var t = e.chatId,
        r = e.member;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteMemberLabel",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["member-label"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        o = yield n.get(t);
                      if (o == null) return !1;
                      if (
                        (o.memberLabelMap.delete(r),
                        o.memberLabelMap.size === 0)
                      )
                        return (yield n.remove(t), !0);
                      var a = { memberLabelMap: o.memberLabelMap };
                      return (yield n.merge(t, a), !0);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function c(t) {
      var r = t.chatId,
        a = t.member,
        i = t.memberLabel;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "createOrUpdateMemberLabel",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["member-label"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        o = yield n.get(r);
                      if (o == null) {
                        var l = {
                          chatId: r,
                          memberLabelMap: new Map([[a, i]]),
                        };
                        return (yield n.create(l), !0);
                      }
                      var s = o.memberLabelMap.get(a);
                      if (e(s, i)) return !1;
                      var u = { memberLabelMap: o.memberLabelMap.set(a, i) };
                      return (yield n.merge(r, u), !0);
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function d(e) {
      var t = e.chatId;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getMemberLabelsForGroups",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebSchemaMemberLabel")
              .getMemberLabelTable()
              .get(t);
            if (e != null) return e.memberLabelMap;
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e) {
      var t = e.chatId;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteAllLabelsForGroup",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["member-label"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        r = yield n.get(t);
                      if (!r) return [];
                      var o = Array.from(r.memberLabelMap.keys());
                      return (yield n.remove(t), o);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e) {
      var t = e.chatId,
        r = e.members;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteMemberLabels",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["member-label"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        o = yield n.get(t);
                      if (o == null) return [];
                      var a = r.filter(function (e) {
                        return o.memberLabelMap.delete(e);
                      });
                      return (
                        o.memberLabelMap.size === 0
                          ? yield n.remove(t)
                          : yield n.merge(t, {
                              memberLabelMap: o.memberLabelMap,
                            }),
                        a
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          }),
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
