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
    function s(t) {
      var n = o("FBPayUPLSessionIDGenerator").sessionIDGenerator(),
        a = function () {
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
            session_id: n,
          };
        };
      return (
        r("ClientMutateP2pfeatureInitFalcoEvent").log(a),
        {
          fail: function (t) {
            return r("ClientMutateP2pfeatureFailFalcoEvent").log(function () {
              return babelHelpers.extends({}, a(), { error_code: t });
            });
          },
          success: function () {
            return r("ClientMutateP2pfeatureSuccessFalcoEvent").log(a);
          },
        }
      );
    }
    l.startP2pPaymentCardSaveLog = s;
  },
  98,
);
