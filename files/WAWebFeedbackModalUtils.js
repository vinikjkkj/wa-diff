__d(
  "WAWebFeedbackModalUtils",
  [
    "WAWebFeedbackIntroNuxModal.react",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebSendFeedbackModal.react",
    "WAWebUserPrefsNuxPreferences",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
        o("WAWebNux").NUX.FEEDBACK_INTRO,
      )
        ? o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebFeedbackIntroNuxModal.react"), {
              onAcknowledge: function () {
                o("WAWebModalManager").ModalManager.open(
                  s.jsx(r("WAWebSendFeedbackModal.react"), {
                    bugReportingEntryPoint: e,
                  }),
                );
              },
            }),
          )
        : o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebSendFeedbackModal.react"), {
              bugReportingEntryPoint: e,
            }),
          );
    }
    l.openFeedbackModal = u;
  },
  98,
);
