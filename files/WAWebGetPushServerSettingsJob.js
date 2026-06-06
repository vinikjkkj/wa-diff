__d(
  "WAWebGetPushServerSettingsJob",
  ["WADeprecatedSendIq", "WADeprecatedWapParser", "WALogger", "WAWap"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (r("WADeprecatedWapParser"))("getPushServerSettings", function (
        t,
      ) {
        if (!t.hasChild("error")) {
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getPushServerSettings: success",
                ])),
            )
            .tags("push-notification");
          var n = t.child("settings"),
            r = n.attrString("webserverkey");
          return r;
        }
        var a = t.child("error"),
          i = a.attrInt("code"),
          l = a.attrString("text");
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getPushServerSettingsRequest: server response with ",
                  ", ",
                  "",
                ])),
              i,
              l,
            )
            .tags("push-notification"),
          { errorCode: i, errorText: l }
        );
      }),
      d = (u = o("WAWap")).wap(
        "iq",
        {
          to: u.S_WHATSAPP_NET,
          type: "get",
          xmlns: "urn:xmpp:whatsapp:push",
          id: u.generateId(),
        },
        u.wap("settings", null),
      );
    async function m() {
      var e = await o("WADeprecatedSendIq").deprecatedSendIq(d, c);
      if (!e.success) {
        var t = e.errorCode,
          n = e.errorText;
        return { errorCode: t, errorText: n };
      }
      return e.result;
    }
    l.getPushServerSettings = m;
  },
  98,
);
