__d(
  "MAWGetPriorityFromDownloadEntry",
  ["WAMediaManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "ForwardMedia"
        ? o("WAMediaManager").MediaTaskPriority.CRITICAL
        : e === "UILayout" || e === "DYIMediaManager"
          ? o("WAMediaManager").MediaTaskPriority.HIGH
          : e === "MebWAMediaDownloader" ||
              e === "InstamadilloAddMessageMediaContent" ||
              e === "MAWDyiDownloadMedia" ||
              e === "MpsSyncMedia" ||
              e === "WAIncomingMsg"
            ? o("WAMediaManager").MediaTaskPriority.MEDIUM
            : e === "MAWHandleFutureproofMsg" ||
                e === "handleEchoMediaMsgsRestore" ||
                e === "MpsEBRestore" ||
                e === "EBRestore"
              ? o("WAMediaManager").MediaTaskPriority.LOW
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.getPriorityFromDownloadEntry = e;
  },
  98,
);
