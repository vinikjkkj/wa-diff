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
      o("WAWebUserPrefsNuxPreferences").removeNUX(
        o("WAWebNux").NuxKeyTypes.VIEW_COUNT_NUX.STATUS_RESHARE_INTRO,
      );
    }
    ((m.doc =
      "Resets the status reshare intro popup so it shows again on the next contact status reshare."),
      (m.paramsToExecute = []));
    function p() {
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
    ((p.doc =
      "Clear all data in local storage on NUX that acts based on cool-offs."),
      (p.paramsToExecute = []));
    function _(e) {
      return r("WAWebNuxSync").acknowledgeNux(e).then(r("WAWebNoop"));
    }
    function f(e) {
      return r("WAWebNuxSync").unAcknowledgeNux(e).then(r("WAWebNoop"));
    }
    function g(e) {
      return o("WAWebUserPrefsNuxPreferences").shouldShowNUX(e);
    }
    function h() {
      return o("WAWebNux").NuxSyncKey;
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
