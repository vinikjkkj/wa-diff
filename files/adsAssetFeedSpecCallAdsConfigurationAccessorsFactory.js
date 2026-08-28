__d(
  "adsAssetFeedSpecCallAdsConfigurationAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          agent_greeting: n.basicFieldAccessorFactory(e, t, "agent_greeting"),
          auto_response: n.basicFieldAccessorFactory(e, t, "auto_response"),
          bizai_config: n.basicFieldAccessorFactory(e, t, "bizai_config"),
          business_hours: n.basicFieldAccessorFactory(e, t, "business_hours"),
          call_destination_type: n.basicFieldAccessorFactory(
            e,
            t,
            "call_destination_type",
          ),
          call_forwarding: n.basicFieldAccessorFactory(e, t, "call_forwarding"),
          call_transcript: n.basicFieldAccessorFactory(e, t, "call_transcript"),
          callback_type: n.basicFieldAccessorFactory(e, t, "callback_type"),
          greeting_audio_url: n.basicFieldAccessorFactory(
            e,
            t,
            "greeting_audio_url",
          ),
          phone_number: n.basicFieldAccessorFactory(e, t, "phone_number"),
          recording_consent: n.basicFieldAccessorFactory(
            e,
            t,
            "recording_consent",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
