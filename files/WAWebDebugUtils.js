__d(
  "WAWebDebugUtils",
  ["err", "vulture"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("vulture")("N6A9Rjm5620YXkzZ_0T0puW6L8M=");
      var e = window.chat;
      if (!e) throw r("err")("Please open a chat");
      return e;
    }
    function s() {
      r("vulture")("YoIkzUte_4f2DAEghrMvZrG6jIY=");
      var e = window.msg;
      if (!e)
        throw r("err")(
          "Please select a message by right clicking on its message bubble.",
        );
      return e;
    }
    ((l.getSelectedChat = e), (l.getSelectedMsg = s));
  },
  98,
);
