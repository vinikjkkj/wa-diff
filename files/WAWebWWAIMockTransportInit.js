__d(
  "WAWebWWAIMockTransportInit",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebWWAITransportRegistry",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1500,
      d = [
        "Here is a rephrased version of your message.",
        "I would suggest writing it this way instead.",
        "Consider this alternative phrasing for clarity.",
      ],
      m = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.sendRequest = function (a) {
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WWAI][Mock] Sending mock request for tone=",
                    "",
                  ])),
                a.tone,
              ),
              new (u || (u = n("Promise")))(function (e) {
                r("setTimeout")(function () {
                  var t = o("WATimeUtils").unixTime();
                  e({
                    suggestions: d
                      .slice(0, a.numSuggestions)
                      .map(function (e, n) {
                        return {
                          text: e,
                          tone: a.tone,
                          requestId: a.requestId,
                          timestamp: t + n,
                        };
                      }),
                    requestId: a.requestId,
                    inProgress: !1,
                  });
                }, c);
              })
            );
          }),
          (a.isAvailable = function () {
            return !0;
          }),
          (a.getName = function () {
            return "MockWWAITransport";
          }),
          t
        );
      })();
    function p() {
      (o("WAWebWWAITransportRegistry").registerTransport(new m()),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[WWAI][Mock] Mock transport registered",
            ])),
        ));
    }
    l.initMockTransport = p;
  },
  98,
);
