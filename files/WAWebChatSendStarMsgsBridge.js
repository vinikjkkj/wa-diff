__d(
  "WAWebChatSendStarMsgsBridge",
  [
    "WALogger",
    "WAWebDBProcessMessage",
    "WAWebStarMessageSync",
    "WAWebSyncdCoreApi",
    "WAWebSyncdWamAppState",
    "asyncToGeneratorRuntime",
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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n || o("WAWebSyncdWamAppState").addUnsetActionCount(t.length);
          var a = yield r("WAWebStarMessageSync").getStarMessageMutations(
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
        })),
        m.apply(this, arguments)
      );
    }
    ((l.sendStarMsgs = u), (l.sendUnstarAll = c));
  },
  98,
);
