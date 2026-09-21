__d(
  "WAWebVoipCallIdProvider",
  ["WALogger", "WARandomHex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "00",
      u = null;
    function c() {
      var t = s + o("WARandomHex").randomHex(16).slice(2);
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip:generateCallId: ",
              "",
            ])),
          t,
        ),
        t
      );
    }
    function d() {
      var e = c();
      return ((u = e), e);
    }
    function m() {
      var e = u;
      return e != null ? ((u = null), e) : c();
    }
    function p() {
      u = null;
    }
    function _() {
      return u;
    }
    ((l.generateNewCallId = c),
      (l.generateAndStoreNewCallId = d),
      (l.consumeOrGenerateCallId = m),
      (l.resetPendingCallId = p),
      (l.getPendingCallIdForTest = _));
  },
  98,
);
