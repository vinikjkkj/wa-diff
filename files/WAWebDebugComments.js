__d(
  "WAWebDebugComments",
  [
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebMsgCollection",
    "WAWebSendCommentMessageAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
      n === void 0 && (n = 1);
      var r = [],
        a;
      if (typeof t == "string") {
        var i = await o("WAWebMsgCollection").MsgCollection.getMessagesById([
            t,
          ]),
          l = i.messages;
        a = l[0];
      } else a = t;
      for (var u = 0; u < n; u++)
        r.push(
          o("WAWebSendCommentMessageAction").sendCommentMessage(
            a,
            "This is comment message number" + u.toString(),
          ),
        );
      try {
        var c = await Promise.all(r);
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendNCommentDebugMsg: log ",
              "",
            ])),
          String(c),
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
      o("WAWebAddonDBTable")
        .addonInternalDBTable.bulkUpsert(
          o("WAWebAddonConstants").AddonTableMode.Comment,
          e,
        )
        .then(function () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createOrUpdateCommentsStorage: ",
                "",
              ])),
            String(e),
          );
        })
        .catch(function (e) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "createOrUpdateCommentsStorage: error ",
                "",
              ])),
            e,
          );
        });
    }
    m.doc = "Store in database comments, use msg key from param if available";
    var p = { sendCommentDebugMsg: d, createOrUpdateCommentsStorageDebug: m };
    l.default = p;
  },
  98,
);
