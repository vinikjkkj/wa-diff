__d(
  "MAIBABusinessSetupConstants",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "[System: GP8_BUSINESS_SETUP]",
      u = "[System: GP8] ",
      c = s._(/*BTDS*/ ""),
      d = "https://www.facebook.com/images/crm/organization/default_normal.png",
      m = "business_setup_completed",
      p = "I want to finish my setup",
      _ = "Business portfolio created",
      f = "business_setup_workspace_finish",
      g = "gp8_business_setup_error_card",
      h = "business_setup_workspace_error",
      y = "maiba_uri_encoded:",
      C = "[System: business setup error]",
      b = "[System: business setup partial]";
    ((l.BUSINESS_SETUP_TRIGGER_MESSAGE = e),
      (l.BUSINESS_SETUP_POSTBACK_PREFIX = u),
      (l.BUSINESS_SETUP_DISPLAY_MESSAGE = c),
      (l.BUSINESS_DEFAULT_AVATAR_URI = d),
      (l.BUSINESS_SETUP_COMPLETED_ATTR = m),
      (l.BUSINESS_SETUP_FINISH_MESSAGE = p),
      (l.BUSINESS_SETUP_CREATED_MESSAGE_PREFIX = _),
      (l.BUSINESS_SETUP_FINISH_ORIGIN_COMPONENT = f),
      (l.BUSINESS_SETUP_ERROR_CARD_ORIGIN_COMPONENT = g),
      (l.BUSINESS_SETUP_ERROR_ORIGIN_COMPONENT = h),
      (l.BUSINESS_SETUP_ERROR_BODY_ENCODING_PREFIX = y),
      (l.BUSINESS_SETUP_ERROR_POSTBACK_PREFIX = C),
      (l.BUSINESS_SETUP_PARTIAL_POSTBACK_PREFIX = b));
  },
  226,
);
