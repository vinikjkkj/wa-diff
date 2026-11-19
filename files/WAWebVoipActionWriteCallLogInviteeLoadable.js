__d(
  "WAWebVoipActionWriteCallLogInviteeLoadable",
  ["JSResourceForInteraction", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      c().then(function (t) {
        var n = t.writeCallLogForInvitee;
        return n(e);
      }, d);
    }
    function u(e, t, n) {
      c().then(
        function (r) {
          var o = r.writeCallLogsForInvitees;
          return o(e, t, n);
        },
        function (t) {
          (d(t), e.forEach(n));
        },
      );
    }
    function c() {
      return r("JSResourceForInteraction")("WAWebVoipActionWriteCallLogInvitee")
        .__setRef("WAWebVoipActionWriteCallLogInviteeLoadable")
        .load();
    }
    function d(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: invitee call log module failed to load",
            ])),
        )
        .catching(r("getErrorSafe")(t));
    }
    ((l.writeCallLogForInviteeLoadable = s),
      (l.writeCallLogsForInviteesLoadable = u));
  },
  98,
);
