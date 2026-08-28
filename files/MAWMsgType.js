__d(
  "MAWMsgType",
  ["WAMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return f.has(t);
      },
      s = "EphemeralScreenshotAction",
      u = "Raven",
      c = "RavenAction",
      d = "XMA",
      m = "BumpExistingMessage",
      p = "DeleteThread",
      _ = babelHelpers.extends({}, o("WAMsgType").MSG_TYPE, {
        BUMP_EXISTING_MESSAGE: m,
        DELETE_THREAD: p,
        EPHEMERAL_SCREENSHOT_ACTION: s,
        RAVEN: u,
        RAVEN_ACTION: c,
        XMA: d,
      }),
      f = new Set([
        _.IMAGE,
        _.VIDEO,
        _.PTT,
        _.GIF,
        _.STICKER,
        _.XMA,
        _.RAVEN,
        _.DOCUMENT_FILE,
        _.RECEIVER_FETCH,
      ]);
    ((l.isMAWSupportedMediaType = e),
      (l.EPHEMERAL_SCREENSHOT_ACTION = s),
      (l.MSG_TYPE = _));
  },
  98,
);
