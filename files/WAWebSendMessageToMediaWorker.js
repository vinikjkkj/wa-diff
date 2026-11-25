__d(
  "WAWebSendMessageToMediaWorker",
  ["Promise", "WALogger", "WAWebMediaWorkerResource", "WebWorker", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = m();
    function d(t) {
      var a;
      return new (u || (u = n("Promise")))(function (n, i) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "MediaAnalyzer:sendMessageToMediaWorker",
            ])),
        ),
          (a = c && p(c) ? m() : c),
          a
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
                i(e);
              }
            })
            .setErrorHandler(function (e) {
              i(
                r("err")(
                  "Milan.onerror = " + (e != null && e.message ? e.message : e),
                ),
              );
            })
            .execute(),
          a.postMessage(t));
      }).finally(function () {
        a &&
          (a.terminate(),
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
