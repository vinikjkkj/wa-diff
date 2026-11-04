__d(
  "WAWebContactsAndGroupsSession",
  ["WAWebCmd"],
  function (t, n, r, o, a, i, l) {
    var e = [],
      s = !1;
    function u(t) {
      var n = t;
      return (
        e.push(function () {
          n = t;
        }),
        s || ((s = !0), o("WAWebCmd").Cmd.on("logout_from_bridge", c)),
        {
          get: function () {
            return n;
          },
          set: function (t) {
            n = t;
          },
        }
      );
    }
    function c() {
      e.forEach(function (e) {
        return e();
      });
    }
    ((l.createContactsAndGroupsSessionValue = u),
      (l.clearContactsAndGroupsSession = c));
  },
  98,
);
