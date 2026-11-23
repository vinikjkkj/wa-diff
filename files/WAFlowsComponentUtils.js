__d(
  "WAFlowsComponentUtils",
  ["WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("WAFlowsTypes")).WA_FLOWS_COMPONENT_NAMES.CHECKBOX_GROUP,
        e.WA_FLOWS_COMPONENT_NAMES.CHIPS_SELECTOR,
        e.WA_FLOWS_COMPONENT_NAMES.SEAT_SELECTOR,
        e.WA_FLOWS_COMPONENT_NAMES.DATE_PICKER,
        e.WA_FLOWS_COMPONENT_NAMES.DROPDOWN,
        e.WA_FLOWS_COMPONENT_NAMES.FORM,
        e.WA_FLOWS_COMPONENT_NAMES.OPT_IN,
        e.WA_FLOWS_COMPONENT_NAMES.RADIOBUTTONS_GROUP,
        e.WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT,
        e.WA_FLOWS_COMPONENT_NAMES.TEXT_AREA,
        e.WA_FLOWS_COMPONENT_NAMES.PHOTO_PICKER,
        e.WA_FLOWS_COMPONENT_NAMES.DOCUMENT_PICKER,
        e.WA_FLOWS_COMPONENT_NAMES.CALENDAR_PICKER,
        e.WA_FLOWS_COMPONENT_NAMES.IF,
        e.WA_FLOWS_COMPONENT_NAMES.SWITCH,
      ],
      u = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/;
    function c(e) {
      return (
        e.type === "TextInput" &&
        e["input-type"] != null &&
        ["password", "passcode"].includes(e["input-type"])
      );
    }
    function d(e) {
      return c(e) || e.type === "OptIn";
    }
    ((l.WA_FLOWS_SUPPORTED_COMPONENTS_FOR_RESPONSE = s),
      (l.BASE_64_ENCODING = u),
      (l.isPasswordOrPasscodeField = c),
      (l.isPrivate = d));
  },
  98,
);
