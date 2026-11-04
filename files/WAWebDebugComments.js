__d(
  "WAWebDebugComments",
  [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebMsgCollection",
    "WAWebSendCommentMessageAction",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (t === void 0 && (t = 1),
            r("vulture")("LyjxMRCvXLz_HIbCTVJj7HtDiXU="));
          var a = [],
            i;
          if (typeof e == "string") {
            var l = yield o("WAWebMsgCollection").MsgCollection.getMessagesById(
                [e],
              ),
              s = l.messages;
            i = s[0];
          } else i = e;
          for (var m = 0; m < t; m++)
            a.push(
              o("WAWebSendCommentMessageAction").sendCommentMessage(
                i,
                "This is comment message number" + m.toString(),
              ),
            );
          try {
            var p = yield (d || (d = n("Promise"))).all(a);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendNCommentDebugMsg: log ",
                  "",
                ])),
              String(p),
            );
          } catch (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "sendNCommentDebugMsg:error ",
                  "",
                ])),
              e,
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    m.doc = "Send N Comment Messages";
    function _(t) {
      (r("vulture")("nUeUNPzNA8zQcSWgKxJKscaiI1I="),
        o("WAWebAddonDBTable")
          .addonInternalDBTable.bulkUpsert(
            o("WAWebAddonConstants").AddonTableMode.Comment,
            t,
          )
          .then(function () {
            (r("vulture")("Cnvyk6RqgkWH73fgsIk6Bi9DKLY="),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createOrUpdateCommentsStorage: ",
                    "",
                  ])),
                String(t),
              ));
          })
          .catch(function (e) {
            (r("vulture")("DD1U0zGG6k9i951w9dCiaaIfejY="),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createOrUpdateCommentsStorage: error ",
                    "",
                  ])),
                e,
              ));
          }));
    }
    _.doc = "Store in database comments, use msg key from param if available";
    var f = { sendCommentDebugMsg: m, createOrUpdateCommentsStorageDebug: _ };
    l.default = f;
  },
  98,
);
