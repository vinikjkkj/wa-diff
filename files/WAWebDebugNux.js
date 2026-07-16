__d(
  "WAWebDebugNux",
  [
    "WAWebDataSharingOptInCoolOffModel",
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
      (o("WAWebUserPrefsNuxPreferences").removeNUX(
        o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX.NEWSLETTER_STATUS_INTRO,
      ),
        o("WAWebUserPrefsNuxPreferences").removeNUX(
          o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX
            .NEWSLETTER_STATUS_ADD_TOOLTIP,
        ));
    }
    ((c.doc =
      "Resets the channel status first-time education (intro popup + add-to-status tooltip) so both show again."),
      (c.paramsToExecute = []));
    function d() {
      var e = Object.keys(o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX);
      (e.forEach(function (e) {
        o("WAWebNuxCoolOff").resetNuxCoolOff(
          o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX[e],
        );
      }),
        o("WAWebNuxCoolOff").resetCoolOffNuxDate(),
        o(
          "WAWebDataSharingOptInCoolOffModel",
        ).DataSharingOptInCoolOffModel.resetCoolOffStartTimestamp());
    }
    ((d.doc =
      "Clear all data in local storage on NUX that acts based on cool-offs."),
      (d.paramsToExecute = []));
    function m(e) {
      return r("WAWebNuxSync").acknowledgeNux(e).then(r("WAWebNoop"));
    }
    function p(e) {
      return r("WAWebNuxSync").unAcknowledgeNux(e).then(r("WAWebNoop"));
    }
    function _(e) {
      return o("WAWebUserPrefsNuxPreferences").shouldShowNUX(e);
    }
    function f() {
      return o("WAWebNux").NuxSyncKey;
    }
    ((f.doc = "return NuxSyncKey enum"), (f.paramsToExecute = []));
    var g = {
      acknowledgeNux: m,
      unAcknowledgeNux: p,
      dismissAllNux: s,
      dismissNux: o("WAWebNuxAction").dismissNux,
      getNuxSyncList: o("WAWebUserPrefsNuxPreferences").getNuxSyncList,
      nuxExistsInNuxSync: o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync,
      resetAllNuxCoolOff: d,
      resetAllNux: e,
      resetChatAssignmentNux: u,
      resetNewsletterStatusEducationNux: c,
      shouldShowNux: _,
      getNuxSyncKey: f,
    };
    l.default = g;
  },
  98,
);
