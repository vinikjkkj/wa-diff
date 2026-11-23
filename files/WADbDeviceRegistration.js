__d(
  "WADbDeviceRegistration",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 25,
      s = 6,
      u = s,
      c = "https://reg-e2ee.facebook.com",
      d = r("gkx")("13108") ? "https://reg-e2ee.messenger.com" : c,
      m = "https://reg-e2ee.instagram.com",
      p = "/v2/fb_register_v2",
      _ = "Device has already been registered to WA servers",
      f = "Device registration finished successfully",
      g =
        "Device registration retries failed " +
        s +
        " times. No longer attempting registration.",
      h = "Device registration response was null",
      y = "Current user id is zero",
      C = "CryptoAuthToken is empty",
      b = "CryptoAuthToken is expired",
      v = { failed: "failed", finished: "finished" };
    ((l.MAX_USERS_FOR_NOTIFY_DEVICE_CHANGE = e),
      (l.MAX_DEVICE_REGISTRATION_RETRIES = s),
      (l.MAX_ROTATE_CRYPTO_AUTH_TOKEN_RETRIES = u),
      (l.REG_FB_DOMAIN = c),
      (l.REG_MSGR_DOMAIN = d),
      (l.REG_IGD_DOMAIN = m),
      (l.REGISTRATION_ENDPOINT = p),
      (l.DEVICE_ALREADY_REGISTERED = _),
      (l.DEVICE_SUCCESSFULLY_REGISTERED = f),
      (l.FAILED_REGISTRATION_RETRIES = g),
      (l.NULL_RESPONSE_FROM_SERVER = h),
      (l.DEVICE_REGISTER_ERROR_ZERO_AS_USER_ID = y),
      (l.DEVICE_REGISTER_ERROR_EMPTY_CAT_TOKEN = C),
      (l.DEVICE_REGISTER_ERROR_EXPIRED_CAT_TOKEN = b),
      (l.RegistrationStatesEnum = v));
  },
  98,
);
