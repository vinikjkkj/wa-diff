__d(
  "CometAICallingSessionParamsSerializer",
  [
    "CompactSerializer",
    "ConversationBotTypesAiCallingSessionParamsSerializers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("CompactSerializer").serialize(
        e,
        o("ConversationBotTypesAiCallingSessionParamsSerializers")
          .serializeAiCallingSessionParams,
      );
    }
    l.serializeCometAICallingSessionParams = e;
  },
  98,
);
