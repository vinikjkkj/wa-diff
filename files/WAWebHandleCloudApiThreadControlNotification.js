__d(
  "WAWebHandleCloudApiThreadControlNotification",
  ["WALogger", "WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      var n = t.consumerLid,
        r = t.consumerPhoneNumber,
        a = t.status;
      if (r == null && n == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Maiba] thread ctrl missing phone & lid, status=",
              "",
            ])),
          a,
        );
        return;
      }
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[Biz AI] Received thread control notification, status: ",
            "",
          ])),
        a,
      ),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateChatCapiThreadControl",
          { consumerPhoneNumber: r, consumerLid: n, status: a },
        ));
    }
    l.default = u;
  },
  98,
);
