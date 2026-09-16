__d(
  "WAWebBroadcastConsts",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2,
      l = 1e3,
      s = 20,
      u = 32,
      c = 40,
      d = "biz_broadcast_campaign_updated",
      m = "https://www.facebook.com/legal/business-broadcasts",
      p = "https://www.facebook.com/privacy/policy",
      _ = "Campaign message unavailable on this device",
      f =
        "whatsapp-smb://marketingmessages?destination=bb_pro_nux&entry_point=bb_web_pro_nux",
      g =
        "whatsapp-smb://marketingmessages?destination=bb_pro_message_limit&entry_point=bb_web_message_limit";
    ((i.MIN_BROADCAST_RECIPIENTS = e),
      (i.MS_PER_SEC = l),
      (i.MAX_BROADCAST_ID_LENGTH = s),
      (i.MESSAGE_SECRET_BYTE_LENGTH = u),
      (i.DEFAULT_PROFILE_PICTURE_SIZE = c),
      (i.BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT = d),
      (i.BIZ_BROADCAST_TOS_URL = m),
      (i.META_PRIVACY_POLICY_URL = p),
      (i.CAMPAIGN_MSG_UNAVAILABLE_ERROR = _),
      (i.BB_PRO_ONBOARDING_DEEPLINK = f),
      (i.BB_PRO_MESSAGE_LIMIT_DEEPLINK = g));
  },
  66,
);
