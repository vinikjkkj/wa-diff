__d(
  "EBPrewarmSenderUploadQueue",
  ["EBMinosLogger", "EBSenderUploadQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      try {
        o("EBSenderUploadQueue").ebSenderUploadQueue();
      } catch (t) {
        o("EBMinosLogger").minosLogger.ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "unexpected error prewarming Sender Upload Queue: ",
              "",
            ])),
          t,
        );
      }
    }
    l.prewarmSenderUploadQueue = s;
  },
  98,
);
