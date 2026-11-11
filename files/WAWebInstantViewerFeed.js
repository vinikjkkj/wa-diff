__d(
  "WAWebInstantViewerFeed",
  [
    "WALogger",
    "WAWebChatGroupUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInstantsConsumption",
    "WAWebMsgGetters",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 100;
    function u(e) {
      return [].concat(
        e.filter(function (e) {
          return (
            !o("WAWebInstantsConsumption").isInstantConsumed(e) &&
            !o("WAWebChatGroupUtils").isSuspendedGroup(
              o("WAWebFrontendMsgGetters").getMaybeChat(e),
            )
          );
        }),
        e.filter(function (e) {
          return o("WAWebInstantsConsumption").isInstantConsumed(e);
        }),
        c(e),
      );
    }
    function c(t) {
      var n = t.at(-1),
        r = n != null ? o("WAWebFrontendMsgGetters").getMaybeChat(n) : null;
      if (n == null || r == null) return [];
      var a = r.msgs.getModelsArray(),
        i = a.indexOf(n);
      return i === -1
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "instants: the tapped stack is not in its chat's loaded messages",
                ])),
            )
            .sendLogs("instants-tapped-stack-not-loaded"),
          [])
        : a
            .slice(i + 1)
            .filter(function (e) {
              return d(e, r);
            })
            .slice(0, s);
    }
    function d(e, t) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE
        ? !1
        : o("WAWebMsgGetters").getIsSentByMe(e)
          ? !o("WAWebInstantsConsumption").isInstantConsumed(e) &&
            !o("WAWebChatGroupUtils").isSuspendedGroup(t)
          : o("WAWebInstantsConsumption").canConsumeInstant(e);
    }
    l.buildInstantViewerFeed = u;
  },
  98,
);
