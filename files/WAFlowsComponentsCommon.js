__d(
  "WAFlowsComponentsCommon",
  ["$InternalEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      enabled: { type: "boolean" },
      isLoading: { type: "boolean" },
      isOverlayVisible: { type: "boolean" },
      screenID: { type: "string" },
      isNavBarContextMenuVisible: { type: "boolean" },
      version: { type: "number" },
      isFlowInDraft: { type: "boolean" },
    };
    function s(e, t, n) {
      if (n != null)
        return e === 0 ? n : Math.max(Math.min(n, e), t != null ? t : 0);
    }
    function u(e) {
      return e != null && +e >= 600 && +e < 700;
    }
    var c = n("$InternalEnum")({ LARGE: "large" });
    ((l.WAFlowsComponentsCommonSchemaProperties = e),
      (l.getReachableMaxSelectedItems = s),
      (l.getExecuteOnSelectActionScreenChange = u),
      (l.WhatsAppFlowsTextEntryLabelVariant = c));
  },
  98,
);
