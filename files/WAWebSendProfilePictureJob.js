__d(
  "WAWebSendProfilePictureJob",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))("photoResponseParser", function (e) {
        if ((e.assertAttr("type", "result"), e.hasChild("picture"))) {
          var t = e.child("picture");
          return { id: t.attrInt("id") };
        }
        return { id: null };
      });
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = yield o("WADeprecatedSendIq").deprecatedSendIq(
            o("WAWap").wap(
              "iq",
              {
                to: o("WAWap").S_WHATSAPP_NET,
                target: r("WAWebWid").isGroup(t)
                  ? o("WAWebCommsWapMd").CHAT_JID(t)
                  : o("WAWap").DROP_ATTR,
                type: "set",
                xmlns: "w:profile:picture",
                id: o("WAWap").generateId(),
              },
              a ? o("WAWap").wap("picture", { type: "image" }, a) : null,
            ),
            s,
          );
          return i.success
            ? { id: i.result.id }
            : (e || (e = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  i.errorCode,
                  i.errorText,
                ),
              );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
