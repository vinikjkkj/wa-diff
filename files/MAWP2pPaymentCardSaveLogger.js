__d(
  "MAWP2pPaymentCardSaveLogger",
  [
    "ClientMutateP2pfeatureFailFalcoEvent",
    "ClientMutateP2pfeatureInitFalcoEvent",
    "ClientMutateP2pfeatureSuccessFalcoEvent",
    "FBPayUPLSessionIDGenerator",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t, n, a) {
      var i = o("FBPayUPLSessionIDGenerator").sessionIDGenerator(),
        l = function () {
          return {
            actual_event_time: Math.round(
              (e || (e = r("performanceAbsoluteNow")))(),
            ).toString(),
            event_payload: {
              entry_point: "webhook",
              target_name: "mps_persist_step",
              wallet_type: t,
            },
            platform: "web",
            product_type: "nmor_p2p",
            session_id: i,
          };
        },
        s = function (t) {
          return r("ClientMutateP2pfeatureFailFalcoEvent").log(function () {
            return babelHelpers.extends({}, l(), { error_code: t });
          });
        };
      r("ClientMutateP2pfeatureInitFalcoEvent").log(l);
      var u = "build_failed";
      try {
        var c = n();
        ((u = "save_failed"), await a(c));
      } catch (e) {
        throw (s(u), e);
      }
      r("ClientMutateP2pfeatureSuccessFalcoEvent").log(l);
    }
    l.logP2pPaymentCardSave = s;
  },
  98,
);
