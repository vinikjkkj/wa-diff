__d(
  "WAWebNewChatButtonGatingUtils",
  ["$InternalEnum", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      CONTROL: 0,
      FILLED_ICON_BUTTON: 1,
      FILLED_TEXT_BUTTON: 2,
    });
    function s() {
      if (!r("gkx")("26258")) {
        var t = new URLSearchParams(window.location.search),
          n = t.get("new_chat_button_variant");
        if (n != null) {
          var o = parseInt(n, 10);
          if (o === 0) return e.CONTROL;
          if (o === 1) return e.FILLED_ICON_BUTTON;
          if (o === 2) return e.FILLED_TEXT_BUTTON;
        }
      }
      return e.CONTROL;
    }
    ((l.NewChatButtonVariant = e), (l.getNewChatButtonVariant = s));
  },
  98,
);
