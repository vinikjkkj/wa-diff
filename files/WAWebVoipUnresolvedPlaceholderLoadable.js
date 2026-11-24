__d(
  "WAWebVoipUnresolvedPlaceholderLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebLazyLoadedRetriable",
    "WAWebReleaseToEventLoop",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (d = r("WAWebLazyLoadedRetriable"))(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionUncountUnresolvedPlaceholder",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipUncountUnresolvedPlaceholder"),
      p = d(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionCountShownPlaceholder",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipCountShownPlaceholder"),
      _ = d(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionSweepUnresolvedPlaceholders",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipSweepUnresolvedPlaceholders"),
      f = 3e4,
      g = 1e4,
      h = d(function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipActionRepairSwitchEntryCallLog",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipRepairSwitchEntryCallLog"),
      y = d(async function () {
        return r("JSResourceForInteraction")(
          "WAWebVoipOrderingHiddenCallLogAlert",
        )
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipOrderingHiddenCallLogAlert"),
      C = 1e4,
      b = d(async function () {
        return r("JSResourceForInteraction")("WAWebVoipCallLogOrderingPolicy")
          .__setRef("WAWebVoipUnresolvedPlaceholderLoadable")
          .load();
      }, "VoipCallLogOrderingPolicy");
    function v() {
      return o("WAPromiseTimeout").promiseTimeout(b(), C);
    }
    function S() {
      _().then(
        function (e) {
          var t = e.scheduleUnresolvedPlaceholderSweep;
          return t();
        },
        function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] unresolved placeholder sweep not loaded",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .tags("non-sad");
        },
      );
    }
    function R(e) {
      m().then(
        function (t) {
          var n = t.scheduleUnresolvedPlaceholderCheck;
          return n(e);
        },
        function (t) {
          return T(e, t);
        },
      );
    }
    function L(e) {
      p().then(
        function (t) {
          var n = t.queueCountShownPlaceholderAgain;
          return n(e);
        },
        function (t) {
          return T(e, t);
        },
      );
    }
    function E(e, t, n) {
      D(e.id, function (r) {
        var o = r.repairSwitchEntryCallLog;
        return n === !0 ? o(e, t, !0) : o(e, t);
      });
    }
    function k(e, t, n) {
      var r = babelHelpers.extends({}, e, {
        participants: e.participants.map(function (e) {
          return babelHelpers.extends({}, e);
        }),
      });
      D(t, function (e) {
        var o = e.repairSyncedRootCallLog;
        return o(r, t, n);
      });
    }
    function I(e) {
      o("WAWebReleaseToEventLoop")
        .releaseToEventLoop()
        .then(function () {
          return o("WAPromiseTimeout").promiseTimeout(y(), g);
        })
        .then(
          function (t) {
            var n = t.alertOrderingHiddenCallLog;
            return n(e);
          },
          function (t) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] call log ",
                    ": out-of-order alert not loaded",
                  ])),
                e.msg.id.id,
              )
              .catching(r("getErrorSafe")(t))
              .tags("non-sad");
          },
        );
    }
    function T(e, t) {
      o("WALogger")
        .WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] placeholder ",
              ": unread update not loaded",
            ])),
          e.id,
        )
        .catching(r("getErrorSafe")(t))
        .tags("non-sad");
    }
    function D(e, t) {
      o("WAWebReleaseToEventLoop")
        .releaseToEventLoop()
        .then(function () {
          return o("WAPromiseTimeout").promiseTimeout(h(), f);
        })
        .then(t)
        .catch(function (t) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip-order] phase=repair-failed callId=",
                  "",
                ])),
              e,
            )
            .catching(r("getErrorSafe")(t))
            .tags("non-sad");
        });
    }
    ((l.loadCallLogOrderingPolicy = v),
      (l.scheduleUnresolvedPlaceholderSweepLoadable = S),
      (l.scheduleUnresolvedPlaceholderCheckLoadable = R),
      (l.countShownPlaceholderAgainLoadable = L),
      (l.scheduleSwitchEntryCallLogRepair = E),
      (l.scheduleSyncedRootCallLogRepair = k),
      (l.scheduleOrderingHiddenCallLogAlertLoadable = I));
  },
  98,
);
