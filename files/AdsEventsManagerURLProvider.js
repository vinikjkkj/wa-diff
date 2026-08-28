__d(
  "AdsEventsManagerURLProvider",
  [
    "AdsEventsManagerClassificationAppealsModalProvider",
    "AdsEventsManagerClassificationAppealsModalStateTriggerReducerPlugin",
    "AdsEventsManagerDialogDataProvider",
    "AdsEventsManagerDomainControlModalDeeplinkTriggerReducerPlugin",
    "AdsEventsManagerEventDetailsStateProvider",
    "AdsEventsManagerEventDetailsStateTriggerReducerPlugin",
    "AdsEventsManagerSensitiveParameterDetailsModalStateTriggerReducerPlugin",
    "AdsEventsManagerSignalsIntegrityEscalationPathModalDataProvider",
    "AdsEventsManagerURLProviderPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = n("Laminar").__createProvider(
      n("AdsEventsManagerURLProviderPlugin"),
      "AdsEventsManagerURLProviderPlugin",
      function () {
        var e;
        return [
          (e = n("Laminar")).__createTriggerReducer(
            n(
              "AdsEventsManagerClassificationAppealsModalStateTriggerReducerPlugin",
            ),
            "AdsEventsManagerClassificationAppealsModalStateTriggerReducerPlugin",
            n("AdsEventsManagerClassificationAppealsModalProvider"),
          ),
          e.__createTriggerReducer(
            n("AdsEventsManagerDomainControlModalDeeplinkTriggerReducerPlugin"),
            "AdsEventsManagerDomainControlModalDeeplinkTriggerReducerPlugin",
            n("AdsEventsManagerDialogDataProvider"),
          ),
          e.__createTriggerReducer(
            n("AdsEventsManagerEventDetailsStateTriggerReducerPlugin"),
            "AdsEventsManagerEventDetailsStateTriggerReducerPlugin",
            n("AdsEventsManagerEventDetailsStateProvider"),
          ),
          e.__createTriggerReducer(
            n(
              "AdsEventsManagerSensitiveParameterDetailsModalStateTriggerReducerPlugin",
            ),
            "AdsEventsManagerSensitiveParameterDetailsModalStateTriggerReducerPlugin",
            n(
              "AdsEventsManagerSignalsIntegrityEscalationPathModalDataProvider",
            ),
          ),
        ];
      },
    );
  },
  null,
);
