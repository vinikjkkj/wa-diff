__d(
  "CaptchaConstants",
  ["keyMirror"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("keyMirror")({
        RESIZE_IFRAME: null,
        CAPTCHA_SOLVED: null,
        CAPTCHA_EXPIRED: null,
        GET_ORIGIN: null,
      }),
      s = 15,
      u = 78 + s,
      c = 15,
      d = 540;
    ((l.CaptchaIFrameMessageTypes = e),
      (l.RECAPTCHA_EXTRA_HEIGHT = s),
      (l.RECAPTCHA_INITIAL_HEIGHT = u),
      (l.ARKOSE_CAPTCHA_EXTRA_HEIGHT = c),
      (l.ARKOSE_CAPTCHA_MIN_HEIGHT = d));
  },
  98,
);
