__d(
  "WAWebViewRepliesModel",
  [
    "WALogger",
    "WAWebBaseModel",
    "WAWebMsgCollection",
    "WAWebThreadId",
    "WAWebThreadModel",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.seedFromChat = function (a) {
            t.prototype.seedFromChat.call(this, a);
            var n = this.id.key.toString();
            if (this.msgs.get(n) == null) {
              var i = a.msgs.get(this.id.key);
              i != null && this.msgs.add(i, { at: 0 });
            }
            this.msgs.get(n) == null &&
              this.hydrateRootMessage().catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadChatParity] hydrateRootMessage failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("hydrate-root-msg-fail");
              });
          }),
          (a.hydrateRootMessage = async function () {
            var e = this.id.key.toString();
            if (this.msgs.get(e) == null) {
              var t;
              try {
                var n = await o(
                  "WAWebMsgCollection",
                ).MsgCollection.hydrateOrGetMessages([e]);
                t = n[0];
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadChatParity] hydrateRootMessage: DB lookup failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("hydrate-root-msg-db-fail");
                return;
              }
              t != null &&
                this.msgs.get(e) == null &&
                (this.msgs.add(t, { at: 0 }),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[ThreadChatParity] hydrateRootMessage: added root to MRM",
                    ])),
                ));
            }
          }),
          n
        );
      })(r("WAWebThreadModel"));
    ((c.Proxy = "viewRepliesThread"), (c.idClass = r("WAWebThreadId")));
    var d = o("WAWebBaseModel").defineModel(c);
    l.default = d;
  },
  98,
);
