__d(
  "WAWebHasAcceptedBizBotTos",
  ["WAWebBotTos", "WAWebTos", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      var e = s(o("WAWebBotTos").hasAcceptedBizBotTos),
        t = e[0],
        n = e[1];
      return (
        o("useWAWebListener").useListener(
          o("WAWebTos").TosManager,
          "change",
          function () {
            n(o("WAWebBotTos").hasAcceptedBizBotTos());
          },
        ),
        t
      );
    }
    l.useHasAcceptedBizBotTos = u;
  },
  98,
);
