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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = 1);
          var r = [],
            a;
          if (typeof e == "string") {
            var i = yield o("WAWebMsgCollection").MsgCollection.getMessagesById(
                [e],
              ),
              l = i.messages;
            a = l[0];
          } else a = e;
          for (var s = 0; s < t; s++)
            r.push(
              o("WAWebSendCommentMessageAction").sendCommentMessage(
                a,
                "This is comment message number" + s.toString(),
              ),
            );
          try {
            var m = yield (d || (d = n("Promise"))).all(r);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendNCommentDebugMsg: log ",
                  "",
                ])),
              String(m),
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
      o("WAWebAddonDBTable")
        .addonInternalDBTable.bulkUpsert(
          o("WAWebAddonConstants").AddonTableMode.Comment,
          t,
        )
        .then(function () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "createOrUpdateCommentsStorage: ",
                "",
              ])),
            String(t),
          );
        })
        .catch(function (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "createOrUpdateCommentsStorage: error ",
                "",
              ])),
            e,
          );
        });
    }
    _.doc = "Store in database comments, use msg key from param if available";
    var f = { sendCommentDebugMsg: m, createOrUpdateCommentsStorageDebug: _ };
    l.default = f;
  },
  98,
);
