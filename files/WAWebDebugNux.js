__d(
  "WAWebDebugNux",
  [
    "WAWebNoop",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebNuxCoolOff",
    "WAWebNuxSync",
    "WAWebUserPrefsNuxPreferences",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = Object.keys(o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX);
      e.forEach(function (e) {
        o("WAWebUserPrefsNuxPreferences").removeNUX(
          o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX[e],
        );
      });
      var t = o("WAWebUserPrefsNuxPreferences").getNuxSyncList();
      (t.forEach(function (e) {
        r("WAWebUserPrefsStore").setUser(e);
      }),
        o("WAWebUserPrefsNuxPreferences").removeAllNuxSync());
    }
    ((e.doc = "Clear all data for ViewCountNux banners from storage."),
      (e.paramsToExecute = []));
    function s() {
      var e = Object.keys(o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX);
      e.forEach(function (e) {
        o("WAWebNuxAction").dismissNux(
          o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX[e],
        );
      });
    }
    ((s.doc = "Set Data for for ViewCountNux banners from storage."),
      (s.paramsToExecute = []));
    function u() {
      r("WAWebUserPrefsStore").setUser(
        "chat_assignment_agent_has_assigned_chats",
        null,
      );
    }
    ((u.doc = "Resets flag indicating whether the user assigned a chat"),
      (u.paramsToExecute = []));
    function c() {
      var e = Object.keys(o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX);
      (e.forEach(function (e) {
        o("WAWebNuxCoolOff").resetNuxCoolOff(
          o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX[e],
        );
      }),
        o("WAWebNuxCoolOff").resetCoolOffNuxDate());
    }
    ((c.doc =
      "Clear all data in local storage on NUX that acts based on cool-offs."),
      (c.paramsToExecute = []));
    function d(e) {
      return r("WAWebNuxSync").acknowledgeNux(e).then(r("WAWebNoop"));
    }
    function m(e) {
      return r("WAWebNuxSync").unAcknowledgeNux(e).then(r("WAWebNoop"));
    }
    function p(e) {
      return o("WAWebUserPrefsNuxPreferences").shouldShowNUX(e);
    }
    function _() {
      return o("WAWebNux").NuxSyncKey;
    }
    ((_.doc = "return NuxSyncKey enum"), (_.paramsToExecute = []));
    var f = {
      acknowledgeNux: d,
      unAcknowledgeNux: m,
      dismissAllNux: s,
      dismissNux: o("WAWebNuxAction").dismissNux,
      getNuxSyncList: o("WAWebUserPrefsNuxPreferences").getNuxSyncList,
      nuxExistsInNuxSync: o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync,
      resetAllNuxCoolOff: c,
      resetAllNux: e,
      resetChatAssignmentNux: u,
      shouldShowNux: p,
      getNuxSyncKey: _,
    };
    l.default = f;
  },
  98,
);
