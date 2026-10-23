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
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      (r("vulture")("E0nMS9sF5wKdGMIqOQ0OvDjYXM8="),
        o(
          "WAWebBizAiMessageEditEducationState",
        ).clearMessageEditEducationState());
      var e = Object.keys(o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX);
      e.forEach(function (e) {
        (r("vulture")("DUSBWmf1b3PFjBGoNNUXerxzd9Q="),
          o("WAWebUserPrefsNuxPreferences").removeNUX(
            o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX[e],
          ));
      });
      var t = o("WAWebUserPrefsNuxPreferences").getNuxSyncList();
      (t.forEach(function (e) {
        (r("vulture")("KzdyblXjbIuM5t8wOSwOfRqPF-Y="),
          r("WAWebUserPrefsStore").setUser(e));
      }),
        o("WAWebUserPrefsNuxPreferences").removeAllNuxSync());
    }
    ((e.doc = "Clear all data for ViewCountNux banners from storage."),
      (e.paramsToExecute = []));
    function s() {
      r("vulture")("vGv0z2vA1phlHrFIxXcltyEL0Mc=");
      var e = Object.keys(o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX);
      e.forEach(function (e) {
        (r("vulture")("91tfUkwvi_yIJtM-boBWnz5qAXE="),
          o("WAWebNuxAction").dismissNux(
            o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX[e],
          ));
      });
    }
    ((s.doc = "Set Data for for ViewCountNux banners from storage."),
      (s.paramsToExecute = []));
    function u() {
      (r("vulture")("whcye3lrrih2y44Bs1hpZpwSQVs="),
        r("WAWebUserPrefsStore").setUser(
          "chat_assignment_agent_has_assigned_chats",
          null,
        ));
    }
    ((u.doc = "Resets flag indicating whether the user assigned a chat"),
      (u.paramsToExecute = []));
    function c() {
      (r("vulture")("bfhB_tPM6ah6SSqkM7A9gqijzes="),
        o(
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
      (r("vulture")("ep5L8NUrSynMg_hLwo0bQBdr7JI="),
        o("WAWebUserPrefsNuxPreferences").removeNUX(
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
      (r("vulture")("n47nYfJtuRwwKbar1pqfXqa9KFk="),
        o("WAWebUserPrefsNuxPreferences").removeNUX(
          o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX.STATUS_RESHARE_INTRO,
        ));
    }
    ((m.doc =
      "Resets the status reshare intro popup so it shows again on the next contact status reshare."),
      (m.paramsToExecute = []));
    function p() {
      r("vulture")("HdRFZtjytqc3fDwYThuRlHfQKXI=");
      var e = Object.keys(o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX);
      (e.forEach(function (e) {
        (r("vulture")("uxMi3o6abwFMj9NmLr4RGsS-gfc="),
          o("WAWebNuxCoolOff").resetNuxCoolOff(
            o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX[e],
          ));
      }),
        o("WAWebNuxCoolOff").resetCoolOffNuxDate(),
        o(
          "WAWebDataSharingOptInCoolOffModel",
        ).DataSharingOptInCoolOffModel.resetCoolOffStartTimestamp());
    }
    ((p.doc =
      "Clear all data in local storage on NUX that acts based on cool-offs."),
      (p.paramsToExecute = []));
    function _(e) {
      return (
        r("vulture")("AoT3-9gY27kFK46JtaTy3FtfVh0="),
        r("WAWebNuxSync").acknowledgeNux(e).then(r("WAWebNoop"))
      );
    }
    function f(e) {
      return (
        r("vulture")("kbAOY9JSwjgdi5taU7eRxRCk1bc="),
        r("WAWebNuxSync").unAcknowledgeNux(e).then(r("WAWebNoop"))
      );
    }
    function g(e) {
      return (
        r("vulture")("O3Ttr9ktEQM35FzS_IIw6UgQAV0="),
        o("WAWebUserPrefsNuxPreferences").shouldShowNUX(e)
      );
    }
    function h() {
      return (
        r("vulture")("wIk_YRbjM1UHICo1PFRAb07e74o="),
        o("WAWebNux").NuxSyncKey
      );
    }
    ((h.doc = "return NuxSyncKey enum"), (h.paramsToExecute = []));
    var y = {
      acknowledgeNux: _,
      unAcknowledgeNux: f,
      dismissAllNux: s,
      dismissNux: o("WAWebNuxAction").dismissNux,
      getNuxSyncList: o("WAWebUserPrefsNuxPreferences").getNuxSyncList,
      nuxExistsInNuxSync: o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync,
      resetAllNuxCoolOff: p,
      resetAllNux: e,
      resetBizAiMessageEditEducationNux: c,
      resetChatAssignmentNux: u,
      resetNewsletterStatusEducationNux: d,
      resetStatusReshareIntroNux: m,
      shouldShowNux: g,
      getNuxSyncKey: h,
    };
    l.default = y;
  },
  98,
);
