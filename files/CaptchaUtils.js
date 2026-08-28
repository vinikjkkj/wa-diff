__d(
  "CaptchaUtils",
  ["CaptchaConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || typeof e != "object") return null;
      if (
        e.type === o("CaptchaConstants").CaptchaIFrameMessageTypes.RESIZE_IFRAME
      ) {
        var t = e.size;
        if (
          typeof t == "object" &&
          t !== null &&
          Object.prototype.hasOwnProperty.call(t, "height") &&
          typeof t.height == "number"
        )
          return {
            type: o("CaptchaConstants").CaptchaIFrameMessageTypes.RESIZE_IFRAME,
            size: { height: t.height },
          };
      } else {
        if (
          e.type ===
            o("CaptchaConstants").CaptchaIFrameMessageTypes.CAPTCHA_SOLVED &&
          typeof e.token == "string"
        )
          return {
            type: o("CaptchaConstants").CaptchaIFrameMessageTypes
              .CAPTCHA_SOLVED,
            token: e.token,
          };
        if (
          e.type ===
          o("CaptchaConstants").CaptchaIFrameMessageTypes.CAPTCHA_EXPIRED
        )
          return {
            type: o("CaptchaConstants").CaptchaIFrameMessageTypes
              .CAPTCHA_EXPIRED,
          };
        if (
          e.type === o("CaptchaConstants").CaptchaIFrameMessageTypes.GET_ORIGIN
        )
          return {
            type: o("CaptchaConstants").CaptchaIFrameMessageTypes.GET_ORIGIN,
          };
      }
      return null;
    }
    l.toIFrameMessage = e;
  },
  98,
);
