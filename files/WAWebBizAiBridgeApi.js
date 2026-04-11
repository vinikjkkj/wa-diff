__d(
  "WAWebBizAiBridgeApi",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {
        updateChatCapiThreadControl: function (n) {
          var t = n.consumerLid,
            r = n.consumerPhoneNumber,
            a = n.status;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] updateChatCapiThreadControl status=",
                "",
              ])),
            a,
          );
          var i = null,
            l =
              t != null
                ? o("WAWebWidFactory").createUserWidOrThrow(t, "lid")
                : null,
            c = r != null ? o("WAWebWidFactory").createUserWidOrThrow(r) : null;
          if (
            (l != null && (i = o("WAWebChatCollection").ChatCollection.get(l)),
            i == null &&
              c != null &&
              (i = o("WAWebChatCollection").ChatCollection.get(c)),
            i == null && c == null)
          ) {
            var d = l != null ? o("WAWebLidMigrationUtils").toPn(l) : null;
            i =
              d != null ? o("WAWebChatCollection").ChatCollection.get(d) : null;
          } else if (i == null && l == null) {
            var m = c != null ? o("WAWebLidMigrationUtils").toLid(c) : null;
            i =
              m != null ? o("WAWebChatCollection").ChatCollection.get(m) : null;
          }
          i != null
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Maiba] updateChatCapiThreadControl: applying status=",
                    " to chat=",
                    "",
                  ])),
                a,
                i.id.toLogString(),
              ),
              i.setCapiThreadControl(a))
            : o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[BizAI] updateChatCapiThreadControl: chat not found",
                    ])),
                )
                .sendLogs("maiba-thread-control-chat-not-found");
        },
      };
    l.BizAiBridgeApi = c;
  },
  98,
);
