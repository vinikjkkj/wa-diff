__d(
  "WAWebSendProfilePictureJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("photoResponseParser", function (
      e,
    ) {
      if ((e.assertAttr("type", "result"), e.hasChild("picture"))) {
        var t = e.child("picture");
        return { id: t.attrInt("id") };
      }
      return { id: null };
    });
    async function s(t, n) {
      var a = await o("WADeprecatedSendIq").deprecatedSendIq(
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
          n ? o("WAWap").wap("picture", { type: "image" }, n) : null,
        ),
        e,
      );
      return a.success
        ? { id: a.result.id }
        : Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              a.errorCode,
              a.errorText,
            ),
          );
    }
    l.default = s;
  },
  98,
);
