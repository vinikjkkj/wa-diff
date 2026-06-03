__d(
  "WAWebSendSharePhoneNumberChatAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebContactBlockedErrorAction",
    "WAWebContactGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSendMsgChatAction",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.id;
          if (!n.isLid())
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendSharePhoneNumber should not be called for non lid chat ",
                    "",
                  ])),
                n,
              ),
              r("err")(
                "sendSharePhoneNumber should not be called for non lid chat",
              )
            );
          var a = t.contact;
          if (o("WAWebContactGetters").getIsUser(a) && a.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "share phone number for a blocked contact",
              a,
            );
          var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (i != null) {
            a.shareOwnPn !== !0 &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
                { lid: n, data: { shareOwnPn: !0 } },
              ]));
            var l = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: t.id,
                fromMe: !0,
              }),
              u = {
                id: l,
                from: i,
                to: t.id,
                t: o("WATimeUtils").unixTime(),
                type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                kind: o("WAWebMsgType").MsgKind.Protocol,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                subtype: "share_phone_number",
                local: !0,
                isNewMsg: !0,
                messageSecret: self.crypto.getRandomValues(new Uint8Array(32)),
              };
            (yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, u)[1],
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "chat.sendSharePhoneNumber updated chatId=",
                    "",
                  ])),
                n,
              ));
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.sendSharePhoneNumber = u;
  },
  98,
);
