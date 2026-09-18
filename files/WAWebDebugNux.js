__d(
  "WAWebDebugNux",
  [
    "WAWebBizAiMessageEditEducationState",
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
      o("WAWebBizAiMessageEditEducationState").clearMessageEditEducationState();
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
      (o(
        "WAWebBizAiMessageEditEducationState",
      ).clearMessageEditEducationState(),
        o("WAWebUserPrefsNuxPreferences").removeNUX(
          o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX
            .BUSINESS_AI_MESSAGE_EDITING_DISCOVERY_TOOLTIP,
        ));
    }
    ((c.doc =
      "Resets the Business AI message-editing education state and discovery tooltip."),
      (c.paramsToExecute = []));
    function d() {
      (o("WAWebUserPrefsNuxPreferences").removeNUX(
        o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX.NEWSLETTER_STATUS_INTRO,
      ),
        o("WAWebUserPrefsNuxPreferences").removeNUX(
          o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX
            .NEWSLETTER_STATUS_ADD_TOOLTIP,
        ));
    }
    ((d.doc =
      "Resets the channel status first-time education (intro popup + add-to-status tooltip) so both show again."),
      (d.paramsToExecute = []));
    function m() {
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
    ((m.doc =
      "Clear all data in local storage on NUX that acts based on cool-offs."),
      (m.paramsToExecute = []));
    function p(e) {
      return r("WAWebNuxSync").acknowledgeNux(e).then(r("WAWebNoop"));
    }
    function _(e) {
      return r("WAWebNuxSync").unAcknowledgeNux(e).then(r("WAWebNoop"));
    }
    function f(e) {
      return o("WAWebUserPrefsNuxPreferences").shouldShowNUX(e);
    }
    function g() {
      return o("WAWebNux").NuxSyncKey;
    }
    ((g.doc = "return NuxSyncKey enum"), (g.paramsToExecute = []));
    var h = {
      acknowledgeNux: p,
      unAcknowledgeNux: _,
      dismissAllNux: s,
      dismissNux: o("WAWebNuxAction").dismissNux,
      getNuxSyncList: o("WAWebUserPrefsNuxPreferences").getNuxSyncList,
      nuxExistsInNuxSync: o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync,
      resetAllNuxCoolOff: m,
      resetAllNux: e,
      resetBizAiMessageEditEducationNux: c,
      resetChatAssignmentNux: u,
      resetNewsletterStatusEducationNux: d,
      shouldShowNux: f,
      getNuxSyncKey: g,
    };
    l.default = h;
  },
  98,
);
