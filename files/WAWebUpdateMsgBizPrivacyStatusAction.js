__d(
  "WAWebUpdateMsgBizPrivacyStatusAction",
  [
    "WALogger",
    "WAWebPrivacyModeSystemMsg",
    "WAWebProtobufsWeb.pb",
    "WAWebSchemaMessage",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          if (
            r("WAWebWid").isUser(t.id.remote) &&
            !(
              t.id.remote.isBot() ||
              ((a = t.invokedBotWid) != null && a.isBot())
            )
          ) {
            var i = t.privacyModeWhenSent;
            if (
              !(i == null && n == null) &&
              !(i != null && n != null && i.privacyModeTs >= n.privacyModeTs)
            ) {
              var l = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(n),
                s = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(i);
              if (l !== s) {
                if (t.bizPrivacyStatus != null) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "msg.bizPrivacyStatus already set, cannot reassign",
                      ])),
                  );
                  return;
                }
                var u = c(l);
                ((t.bizPrivacyStatus = u),
                  yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .merge(t.id.toString(), { bizPrivacyStatus: u }));
              }
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      switch (e) {
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE:
          return o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.E2EE;
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP:
          return o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.BSP;
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB:
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP:
          return o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.FB;
      }
    }
    l.default = s;
  },
  98,
);
