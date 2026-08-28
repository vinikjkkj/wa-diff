__d(
  "PolarisVenusFlytrapFbtStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Give feedback to Instagram"),
      u = s._(/*BTDS*/ "Attachments"),
      c = s._(/*BTDS*/ "Explain what is not working"),
      d = s._(
        /*BTDS*/ "Please include steps to reproduce and how to navigate to the issue. More details with attachments help a lot!",
      );
    function m(e, t) {
      return s._(
        /*BTDS*/ "{bold text} Check out our {help center link} for quick answers and AI assistance \u2014 the solution you need is just a click away.",
        [s._param("bold text", e), s._param("help center link", t)],
      );
    }
    function p(e, t, n) {
      return s._(
        /*BTDS*/ "If you're looking for help with specific products, please navigate to {facebook link}, {threads link}, {whatsapp link} to get help.",
        [
          s._param("facebook link", e),
          s._param("threads link", t),
          s._param("whatsapp link", n),
        ],
      );
    }
    var _ = s._(
        /*BTDS*/ "If that doesn't help, submit a bug report. We're happy to help!",
      ),
      f = s._(/*BTDS*/ "Continue to report");
    ((l.FBT_VENUS_FLYTRAP_INSTAGRAM_DEFAULT_TITLE = e),
      (l.FBT_ATTACHMENT_LABEL = u),
      (l.FBT_DETAILED_FORM_EXPLAIN_LABEL = c),
      (l.FBT_DETAILED_FORM_PLACEHOLDER_TEXT_REPRODUCE_STEPS = d),
      (l.getFBTHelpCenterMainContext = m),
      (l.getFBTHelpCenterNavigationContext = p),
      (l.FBT_HELP_CENTER_SUB_TEXT = _),
      (l.FBT_HELP_CENTER_CONTINUE_BUTTON = f));
  },
  226,
);
