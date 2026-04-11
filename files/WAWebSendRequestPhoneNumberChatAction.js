__d(
  "WAWebSendRequestPhoneNumberChatAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
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
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.id;
          if (!n.isLid())
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "requestPhoneNumber should not be called for non lid chat ",
                    "",
                  ])),
                n,
              ),
              r("err")(
                "requestPhoneNumber should not be called for non lid chat",
              )
            );
          var a = t.contact;
          if (o("WAWebContactGetters").getIsUser(a) && a.isContactBlocked)
            throw new (r("WAWebContactBlockedErrorAction"))(
              "request phone number for a blocked contact",
              a,
            );
          var i = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
          if (i != null) {
            var l = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: t.id,
                fromMe: !0,
              }),
              s = {
                type: o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER,
                kind: o("WAWebMsgType").MsgKind.RequestPhoneNumber,
                ack: o("WAWebAck").ACK.CLOCK,
                from: i,
                to: t.id,
                id: l,
                local: !0,
                isNewMsg: !0,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                t: o("WATimeUtils").unixTime(),
              };
            (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob([
              {
                lid: n,
                data: {
                  shareOwnPn: a.shareOwnPn,
                  requestedPnTimestamp: o("WATimeUtils").unixTime(),
                },
              },
            ]),
              yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, s)[1]);
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.sendRequestPhoneNumber = s;
  },
  98,
);
