__d(
  "WAWebDebugUtils",
  ["err"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = window.chat;
      if (!e) throw r("err")("Please open a chat");
      return e;
    }
    function s() {
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
