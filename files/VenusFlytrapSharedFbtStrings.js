__d(
  "VenusFlytrapSharedFbtStrings",
  ["fbt", "FDSLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e != null
        ? u.jsx(r("FDSLink.react"), {
            "aria-label": s._(
              /*BTDS*/ "Learn more about privacy and data collection",
            ),
            href: e,
            target: "_blank",
            children: s._(/*BTDS*/ "Learn more"),
          })
        : null;
    }
    var d = s._(/*BTDS*/ "Add a screenshot or video"),
      m = s._(/*BTDS*/ "Upload a Screenshot or a video"),
      p = s._(/*BTDS*/ "Capture screen"),
      _ = s._(/*BTDS*/ "Report details"),
      f = s._(/*BTDS*/ "Details"),
      g = s._(/*BTDS*/ "Employees only, options"),
      h = s._(
        /*BTDS*/ "Please include a description in order to submit your report.",
      ),
      y = s._(/*BTDS*/ "Give permission to login as me"),
      C = s._(
        /*BTDS*/ "Select this option if you want the bug to be assigned to you directly. This will opt-out of SLA and Fix Rate.",
      ),
      b = s._(/*BTDS*/ "Assign to me"),
      v = s._(/*BTDS*/ "Please include as much info as possible"),
      S = s._(
        /*BTDS*/ "You can also paste image files here directly to add them as screenshots.",
      ),
      R = s._(/*BTDS*/ "Submit report"),
      L = s._(/*BTDS*/ "Choose an area"),
      E = s._(
        /*BTDS*/ "This area was selected based on the current page you are on.",
      ),
      k = s._(
        /*BTDS*/ "Information about your device, account and this app related to the issue that you are reporting will be automatically included in this report in order to help us understand and resolve the issue.",
      ),
      I = s._(
        /*BTDS*/ "On the next screen you will be prompted to attach screenshots or screen recordings. These will be included in the report.",
      ),
      T = s._(/*BTDS*/ "Don't Include"),
      D = s._(/*BTDS*/ "Include complete logs and diagnostics in your report?"),
      x = s._(/*BTDS*/ "Include"),
      $ = s._(/*BTDS*/ "You need to select an area to continue"),
      P = s._(/*BTDS*/ "Search for an area"),
      N = s._(/*BTDS*/ "[Internal-Only] Bug report submission"),
      M = s._(/*BTDS*/ "Generating your report"),
      w = s._(/*BTDS*/ "Finalizing the Bug ID");
    function A(e) {
      return s._(
        /*BTDS*/ "One of the attachments is greater than{attachment_size_threshold_megabytes}MB, and might fail to upload. Please try using smaller attachments (e.g. shorter videos).",
        [s._param("attachment_size_threshold_megabytes", e)],
      );
    }
    function F(e) {
      return s._(
        /*BTDS*/ "You can further help us fix this problem by sending complete logs and diagnostics. This may include information such as user activity logs, network logs, crash logs and memory dumps associated with this session. We will not use the information contained in this report for other purposes. {Link to the help resource}",
        [s._param("Link to the help resource", c(e))],
      );
    }
    function O(e) {
      return s._(/*BTDS*/ 'Uploaded screenshot, position "{position}"', [
        s._param("position", e),
      ]);
    }
    ((l.FBT_ADD_SCREENSHOT_LABEL = d),
      (l.FBT_ADD_SCREENSHOT_OR_VIDEO_ACTION_LABEL = m),
      (l.FBT_CAPTURE_SCREEN_ACTION_LABEL = p),
      (l.FBT_DETAILED_FORM__REPORT_DETAILS_TITLE = _),
      (l.FBT_DETAILED_FORM_DETAILS_LABEL = f),
      (l.FBT_DETAILED_FORM_EMPLOYEES_ONLY_CHECKBOX_LIST_LABEL = g),
      (l.FBT_DETAILED_FORM_ERROR_MESSAGE_NO_DESCRIPTION = h),
      (l.FBT_DETAILED_FORM_LOGIN_AS_ME_CHECKBOX_LABEL = y),
      (l.FBT_DETAILED_FORM_ASSIGN_TO_ME_CHECKBOX_DESCRIPTION = C),
      (l.FBT_DETAILED_FORM_ASSIGN_TO_ME_CHECKBOX_LABEL = b),
      (l.FBT_DETAILED_FORM_PLACEHOLDER_TEXT_DESCRIPTION = v),
      (l.FBT_DETAILED_FORM_DETAILS_HELPER_TEXT = S),
      (l.FBT_DETAILED_FORM_SUBMIT_REPORT_BUTTON_LABEL = R),
      (l.FBT_PRE_SELECTED_AREA_CHOOSE_AN_AREA_TITLE = L),
      (l.FBT_PRE_SELECTED_AREA_DESCRIPTION = E),
      (l.FBT_PRIVACY_DISCLAIMER_BODY = k),
      (l.FBT_PRIVACY_DISCLAIMER_FOOTER_META = I),
      (l.FBT_PRIVACY_DISCLAIMER_DONT_INCLUDE_IN_REPORT_BUTTON = T),
      (l.FBT_PRIVACY_DISCLAIMER_HEADLINE = D),
      (l.FBT_PRIVACY_DISCLAIMER_INCLUDE_IN_REPORT_BUTTON = x),
      (l.FBT_SELECTED_AREA_ERROR_MESSAGE = $),
      (l.FBT_SELECT_AREA_LABEL = P),
      (l.FBT_SUBMISSION_TITLE = N),
      (l.FBT_SUBMISSION_GENETING_REPORT_STATE = M),
      (l.FBT_SUBMISSION_FINALIZING_BUGID_STATE = w),
      (l.getFbtAttachmentListItemWarning = A),
      (l.getFBTPrivacyDisclaimerWithLink = F),
      (l.getFbtUploadedScreenshotAltText = O));
  },
  226,
);
