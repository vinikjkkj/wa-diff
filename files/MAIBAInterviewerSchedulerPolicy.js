__d(
  "MAIBAInterviewerSchedulerPolicy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      armed: !1,
      currentRecIds: [],
      engaged: !1,
      engagedRecIds: [],
      hasStreamedThisSession: !1,
      invited: !1,
      latestRecId: null,
      pendingFire: !1,
      seenRecIds: new Set(),
      streaming: !1,
    };
    function l(e, t) {
      var n = e.currentRecIds,
        r = e.engagedRecIds,
        o = e.latestRecId;
      return r.length > 0 ? t(r) : n.length > 0 ? t(n) : o;
    }
    function s(e) {
      return e.streaming
        ? [babelHelpers.extends({}, e, { pendingFire: !0 }), []]
        : [
            babelHelpers.extends({}, e, {
              armed: !1,
              invited: !0,
              pendingFire: !1,
            }),
            ["FIRE"],
          ];
    }
    function u(e, t) {
      if (e.invited) return [e, []];
      switch (t.type) {
        case "RECOMMENDATION_SHOWN": {
          var n = t.recId;
          if (!e.hasStreamedThisSession) return [e, []];
          if (n != null && n !== "" && e.seenRecIds.has(n)) return [e, []];
          var r =
              n != null && n !== ""
                ? new Set([].concat(Array.from(e.seenRecIds), [n]))
                : e.seenRecIds,
            o =
              n != null && n !== "" && !e.currentRecIds.includes(n)
                ? [].concat(e.currentRecIds, [n])
                : e.currentRecIds;
          return [
            babelHelpers.extends({}, e, {
              armed: !0,
              currentRecIds: o,
              latestRecId: n != null ? n : e.latestRecId,
              pendingFire: !1,
              seenRecIds: r,
            }),
            ["START_TIMER"],
          ];
        }
        case "USER_SENT":
          return !e.armed && !e.pendingFire
            ? [
                babelHelpers.extends({}, e, {
                  currentRecIds: [],
                  engaged: !1,
                  engagedRecIds: [],
                }),
                [],
              ]
            : [
                babelHelpers.extends({}, e, {
                  armed: !1,
                  currentRecIds: [],
                  engaged: !1,
                  engagedRecIds: [],
                  pendingFire: !1,
                }),
                ["CANCEL_TIMER"],
              ];
        case "ENGAGED": {
          var a = t.recId,
            i =
              a != null && a !== "" && !e.engagedRecIds.includes(a)
                ? [].concat(e.engagedRecIds, [a])
                : e.engagedRecIds;
          return e.engaged && i === e.engagedRecIds
            ? [e, []]
            : [
                babelHelpers.extends({}, e, { engaged: !0, engagedRecIds: i }),
                [],
              ];
        }
        case "STREAMING_CHANGED": {
          var l = babelHelpers.extends({}, e, {
            hasStreamedThisSession: e.hasStreamedThisSession || t.streaming,
            streaming: t.streaming,
          });
          return !t.streaming && e.pendingFire ? s(l) : [l, []];
        }
        case "TIMER_ELAPSED":
          return e.armed ? s(e) : [e, []];
      }
      return [e, []];
    }
    ((i.initialSchedulerState = e),
      (i.selectRecIdForInterview = l),
      (i.interviewerSchedulerReducer = u));
  },
  66,
);
