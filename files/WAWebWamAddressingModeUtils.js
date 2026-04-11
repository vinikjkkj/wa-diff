__d(
  "WAWebWamAddressingModeUtils",
  ["WAWebHandleMsgCommon", "WAWebWamEnumAddressingMode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === !0
        ? o("WAWebWamEnumAddressingMode").ADDRESSING_MODE.LID
        : e === !1
          ? o("WAWebWamEnumAddressingMode").ADDRESSING_MODE.PN
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function s(e) {
      return e === o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid
        ? o("WAWebWamEnumAddressingMode").ADDRESSING_MODE.LID
        : o("WAWebWamEnumAddressingMode").ADDRESSING_MODE.PN;
    }
    function u(t) {
      if (t.isLidAddressingMode != null) return e(t.isLidAddressingMode);
    }
    ((l.getWamAddressingModeFromString = s),
      (l.getAddressingModeMetricsFromGroupMetadata = u));
  },
  98,
);
