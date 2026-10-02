__d(
  "EBSenderUploadQueue",
  ["EBMinosLogger", "PersistedQueueApi", "WAPersistedQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u() {
      return s == null ? c() : s;
    }
    function c() {
      s != null &&
        o("EBMinosLogger").minosLogger.ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "EB Upload Queue is already initialized",
            ])),
        );
      var t = o("WAPersistedQueue").initPersistedQueue(
        "ebSenderUploadQueueV3",
        o("PersistedQueueApi").persistedQueueApi(),
      );
      return ((s = t), t);
    }
    l.ebSenderUploadQueue = u;
  },
  98,
);
