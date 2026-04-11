__d(
  "WAWebSendLocationChatAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebMsgKey",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
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
          var n = t.chat,
            a = t.lat,
            i = t.lng,
            l = t.loc,
            s = t.meUser,
            u = yield c({ chat: n, lat: a, lng: i, loc: l, meUser: s });
          try {
            var d = yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(
              n,
              u,
            )[1];
            if (
              !d ||
              d.messageSendResult !==
                o("WAWebSendMsgResultAction").SendMsgResult.OK
            )
              throw r("err")("Location message SendMsgResult failure status");
          } catch (t) {
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Location message send to chat failure: ",
                    "",
                  ])),
                t,
              ),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.lat,
            a = e.lng,
            i = e.loc,
            l = e.meUser,
            s = {
              type: "location",
              ack: o("WAWebAck").ACK.CLOCK,
              from: l,
              id: new (r("WAWebMsgKey"))({
                from: l,
                to: t.id,
                id: yield r("WAWebMsgKey").newId(),
                participant: void 0,
                selfDir: "out",
              }),
              local: !0,
              isNewMsg: !0,
              t: o("WATimeUtils").unixTime(),
              to: t.id,
              lat: n,
              lng: a,
              loc: i,
            };
          return s;
        })),
        d.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
