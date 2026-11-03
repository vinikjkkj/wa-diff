__d(
  "WAWebDebugComments",
  [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebMsgCollection",
    "WAWebSendCommentMessageAction",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
      (n === void 0 && (n = 1), r("vulture")("LyjxMRCvXLz_HIbCTVJj7HtDiXU="));
      var a = [],
        i;
      if (typeof t == "string") {
        var l = await o("WAWebMsgCollection").MsgCollection.getMessagesById([
            t,
          ]),
          u = l.messages;
        i = u[0];
      } else i = t;
      for (var c = 0; c < n; c++)
        a.push(
          o("WAWebSendCommentMessageAction").sendCommentMessage(
            i,
            "This is comment message number" + c.toString(),
          ),
        );
      try {
        var d = await Promise.all(a);
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendNCommentDebugMsg: log ",
              "",
            ])),
          String(d),
        );
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "sendNCommentDebugMsg:error ",
              "",
            ])),
          e,
        );
      }
    }
    d.doc = "Send N Comment Messages";
    function m(e) {
      (r("vulture")("nUeUNPzNA8zQcSWgKxJKscaiI1I="),
        o("WAWebAddonDBTable")
          .addonInternalDBTable.bulkUpsert(
            o("WAWebAddonConstants").AddonTableMode.Comment,
            e,
          )
          .then(function () {
            (r("vulture")("Cnvyk6RqgkWH73fgsIk6Bi9DKLY="),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "createOrUpdateCommentsStorage: ",
                    "",
                  ])),
                String(e),
              ));
          })
          .catch(function (e) {
            (r("vulture")("DD1U0zGG6k9i951w9dCiaaIfejY="),
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createOrUpdateCommentsStorage: error ",
                    "",
                  ])),
                e,
              ));
          }));
    }
    m.doc = "Store in database comments, use msg key from param if available";
    var p = { sendCommentDebugMsg: d, createOrUpdateCommentsStorageDebug: m };
    l.default = p;
  },
  98,
);
