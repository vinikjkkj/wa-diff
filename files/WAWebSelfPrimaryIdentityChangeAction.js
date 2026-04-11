__d(
  "WAWebSelfPrimaryIdentityChangeAction",
  ["WALogger", "WAWebLogoutReasonConstants", "WAWebSocketModel", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      (o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleNewIdentity: self primary id change ignored",
            ])),
        )
        .sendLogs("self-identity-change"),
        r("gkx")("26258")
          ? o("WAWebSocketModel").Socket.logout(
              o("WAWebLogoutReasonConstants").LogoutReason
                .PrimaryIdentityKeyChange,
            )
          : self.setTimeout(function () {
              o("WAWebSocketModel").Socket.logout(
                o("WAWebLogoutReasonConstants").LogoutReason
                  .PrimaryIdentityKeyChange,
              );
            }, 1e4));
    }
    l.handleSelfPrimaryIdentityChange = s;
  },
  98,
);
