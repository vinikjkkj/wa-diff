__d(
  "RequestStreamState",
  ["RequestStreamCommonRequestStreamCommonTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (t) {
        case o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
          .Accepted:
          return e.seenAccepted ||
            e.flowStatus ===
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Started
            ? e
            : {
                flowStatus: o("RequestStreamCommonRequestStreamCommonTypes")
                  .FlowStatus.Accepted,
                seenAccepted: !0,
              };
        default:
          return !e.seenAccepted || e.flowStatus === t
            ? e
            : { flowStatus: t, seenAccepted: !0 };
      }
    }
    l.getNextState = e;
  },
  98,
);
