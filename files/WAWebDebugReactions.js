__d(
  "WAWebDebugReactions",
  [
    "WALogger",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebMsgCollection",
    "WAWebSchemaReactions",
    "WAWebSendReactionMsgAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n;
            if (typeof e == "string") {
              var r = yield o(
                  "WAWebMsgCollection",
                ).MsgCollection.getMessagesById([e]),
                a = r.messages;
              n = yield o("WAWebSendReactionMsgAction").sendReactionToMsg(
                a[0],
                t,
              );
            } else
              n = yield o("WAWebSendReactionMsgAction").sendReactionToMsg(e, t);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendReactionMsg: ",
                  "",
                ])),
              String(n),
            );
          } catch (e) {
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "sendReactionMsg: error ",
                  "",
                ])),
              e,
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    _.doc = "Send a reaction message";
    function g(t, n) {
      (n &&
        t.forEach(function (e) {
          e.parentMsgKey = n.id.toString();
        }),
        o("WAWebDBCreateOrUpdateReactions")
          .createOrUpdateReactions(t)
          .then(function (t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrUpdateReactionsDebug: ",
                  "",
                ])),
              String(t),
            );
          })
          .catch(function (e) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "createOrUpdateReactionsDebug: error ",
                  "",
                ])),
              e,
            );
          }));
    }
    g.doc = "Store in database reactions, use msg key from param if available";
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = String(e.id != null ? e.id : e),
            n = yield o("WAWebSchemaReactions")
              .getReactionsTable()
              .equals(["parentMsgKey"], t);
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "getReactionsByParentDebug: ",
                  "",
                ])),
              JSON.stringify(n),
            ),
            n
          );
        })),
        y.apply(this, arguments)
      );
    }
    h.doc = "Get reactions from table based on parent msg";
    function C(e) {
      o("WAWebCheckUpdateOrphanReactions")
        .checkUpdateForOrphanReactions(e)
        .then(function (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "changeOrphanStateReactionsDebug: ",
                "",
              ])),
            String(e),
          );
        })
        .catch(function (e) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "changeOrphanStateReactionsDebug: error ",
                "",
              ])),
            e,
          );
        });
    }
    C.doc = "Update orphans from reactions table database";
    var b = {
      sendReactionMsg: _,
      createOrUpdateReactionsDebug: g,
      getReactionsByParentDebug: h,
      changeOrphanStateReactionsDebug: C,
    };
    l.default = b;
  },
  98,
);
