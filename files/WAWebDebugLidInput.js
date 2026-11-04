__d(
  "WAWebDebugLidInput",
  ["WAWebWidFactory", "WAWebWidToJid", "err", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e = /^\d+(@lid)?$/;
    function s(t) {
      return e.test(t.trim());
    }
    function u(e) {
      r("vulture")("1NdZxcEhrbOMDDYFQACTbwxgRXI=");
      var t = e.trim();
      if (!s(t))
        throw r("err")(
          '[CustomerManager] debug: expected a LID, got "' + t + '"',
        );
      return o("WAWebWidToJid").widToChatJid(
        o("WAWebWidFactory").createUserLidOrThrow(t, "lid"),
      );
    }
    ((l.isValidLidInput = s), (l.parseLidChatJid = u));
  },
  98,
);
