__d(
  "AdsInteractivePollAPISpecWriteUtils",
  ["AdsInteractiveComponentConstants", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return r("immutable").List([
        r("immutable").Map(
          ((n = {}),
          (n.type = o(
            "AdsInteractiveComponentConstants",
          ).INTERACTIVE_COMPONENT_POLL_TYPE),
          (n.position_spec = t),
          (n.poll_spec = e),
          n),
        ),
      ]);
    }
    function s(e) {
      var t = r("immutable").fromJS(e);
      return (
        (t = t.delete("option_a_call_to_action")),
        (t = t.delete("option_b_call_to_action")),
        t
      );
    }
    function u(e) {
      var t = r("immutable").fromJS(e);
      return (
        (t = t.set(
          "option_a_call_to_action",
          o("AdsInteractiveComponentConstants").DEFAULT_CTA_DATA,
        )),
        (t = t.set(
          "option_b_call_to_action",
          o("AdsInteractiveComponentConstants").DEFAULT_CTA_DATA,
        )),
        t
      );
    }
    function c(e) {
      return "FF" + e.slice(1, 7);
    }
    ((l.constructPollSpecInInteractiveComponentsSpec = e),
      (l.removePollLinkInformationFromPollSpec = s),
      (l.addPollLinkSectionForPollSpec = u),
      (l.convertColorHexFromToSpec = c));
  },
  98,
);
