__d(
  "WAWebUsernameBridgeApi",
  ["WAWebCmd"],
  function (t, n, r, o, a, i, l) {
    var e = {
      setUsernameStateUpdated: function (t) {
        var e = t.usernameState;
        o("WAWebCmd").Cmd.trigger("username_state_updated", e);
      },
    };
    l.UsernameBridgeApi = e;
  },
  98,
);
