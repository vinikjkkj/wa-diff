__d(
  "WAWebChatSendStarMsgsBridge",
  [
    "WALogger",
    "WAWebDBProcessMessage",
    "WAWebStarMessageSync",
    "WAWebSyncdCoreApi",
    "WAWebSyncdWamAppState",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return d(t, n);
    }
    function c(e, t) {
      return d(e, !1);
    }
    async function d(t, n) {
      n || o("WAWebSyncdWamAppState").addUnsetActionCount(t.length);
      var a = await r("WAWebStarMessageSync").getStarMessageMutations(
        t.map(function (e) {
          return e.id;
        }),
        n,
      );
      return o("WAWebSyncdCoreApi").lockForSync(
        ["message", "message-association"],
        a,
        function () {
          return n
            ? o("WAWebDBProcessMessage")
                .starMessages(
                  t.map(function (e) {
                    return e.id.toString();
                  }),
                )
                .catch(function (t) {
                  throw (
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "star messages failed",
                          ])),
                      )
                      .verbose()
                      .sendLogs("star messages failed"),
                    r("err")("star messages failed")
                  );
                })
            : o("WAWebDBProcessMessage")
                .unstarMessages(
                  t.map(function (e) {
                    return e.id.toString();
                  }),
                )
                .catch(function (e) {
                  throw (
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "unstar messages failed",
                          ])),
                      )
                      .verbose()
                      .sendLogs("unstar messages failed"),
                    r("err")("unstar messages failed")
                  );
                });
        },
      );
    }
    ((l.sendStarMsgs = u), (l.sendUnstarAll = c));
  },
  98,
);
