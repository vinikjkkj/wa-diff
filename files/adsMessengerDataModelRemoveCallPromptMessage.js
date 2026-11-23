__d(
  "adsMessengerDataModelRemoveCallPromptMessage",
  ["adsMessengerDataModelClone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelClone")(e);
      return (
        (t.text_format.message.call_prompt_data = void 0),
        (t.image_format.message.call_prompt_data = void 0),
        (t.video_format.message.call_prompt_data = void 0),
        t
      );
    }
    l.default = e;
  },
  98,
);
