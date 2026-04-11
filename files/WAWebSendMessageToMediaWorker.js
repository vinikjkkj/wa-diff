__d(
  "WAWebSendMessageToMediaWorker",
  ["Promise", "WALogger", "WAWebMediaWorkerResource", "WebWorker"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = m();
    function d(t) {
      var r;
      return new (u || (u = n("Promise")))(function (n, a) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "MediaAnalyzer:sendMessageToMediaWorker",
            ])),
        ),
          (r = c && p(c) ? m() : c),
          r
            .setMessageHandler(function (e) {
              try {
                e.type === "log"
                  ? o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "(via Milan) ",
                          "",
                        ])),
                      e.msg,
                    )
                  : n(e);
              } catch (e) {
                a(e);
              }
            })
            .setErrorHandler(function (e) {
              a(
                new Error(
                  "Milan.onerror = " + (e != null && e.message ? e.message : e),
                ),
              );
            })
            .execute(),
          r.postMessage(t));
      }).finally(function () {
        r &&
          (r.terminate(),
          (!c || !c.isCurrentState("constructed")) && (c = m()));
      });
    }
    function m() {
      return new (r("WebWorker"))(
        r("WAWebMediaWorkerResource"),
      ).setAllowCrossPageTransition(!0);
    }
    function p(e) {
      return e.isCurrentState("preparing") || e.isCurrentState("executing");
    }
    l.sendMessageToMediaWorker = d;
  },
  98,
);
