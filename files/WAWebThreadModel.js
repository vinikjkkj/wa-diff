__d(
  "WAWebThreadModel",
  [
    "WALogger",
    "WAWebBaseModel",
    "WAWebChatCollection",
    "WAWebChatLoadMessages",
    "WAWebChatMsgsCollection",
    "WAWebSuperChatMsgs",
    "WAWebThreadId",
    "WAWebThreadMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.creationTimestamp = o("WAWebBaseModel").prop()),
            (e.lastMessageTimestamp = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getParentChat = function () {
            return o("WAWebChatCollection").ChatCollection.get(
              this.id.key.remote,
            );
          }),
          (r.initialize = function () {
            (t.prototype.initialize.call(this),
              (this.msgs.threadId = this.id),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadChatParity] ThreadModel.initialize: threadId=",
                    ", msgs.threadId set",
                  ])),
                this.id.toString(),
              ));
          }),
          (r.seedFromChat = function (t) {
            var e = this;
            if (!(this.msgs.length > 0)) {
              var n = this.id,
                r = [];
              (t.msgs.forEach(function (e) {
                o("WAWebThreadMsgUtils").isMsgInThread(e, n) && r.push(e);
              }),
                r.length > 0 &&
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadChatParity] seedFromChat: seeding thread=",
                        " with ",
                        " msgs from chat.msgs",
                      ])),
                    n.toString(),
                    r.length,
                  ),
                  this.msgs.add(r)));
              var a = function () {
                var t = [];
                if (
                  (i.forEach(function (e) {
                    o("WAWebThreadMsgUtils").isMsgInThread(e, n) && t.push(e);
                  }),
                  t.length > 0)
                ) {
                  var r = new (o(
                    "WAWebChatMsgsCollection",
                  ).ChatMsgsCollection)();
                  ((r.threadId = n),
                    r.add(t),
                    e.msgChunks.push(r),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[ThreadChatParity] seedFromChat: seeding thread=",
                          " sparse chunk with ",
                          " msgs",
                        ])),
                      n.toString(),
                      t.length,
                    ));
                }
              };
              for (var i of t.msgChunks) a();
            }
          }),
          (r.onEmptyMRM = function () {
            var e = this.getParentChat();
            e != null &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[ThreadChatParity] onEmptyMRM: thread=",
                    " reloading",
                  ])),
                this.id.toString(),
              ),
              o("WAWebChatLoadMessages")
                .loadEarlierMsgs({
                  chat: e,
                  msgCollection: this.msgs,
                  threadId: this.id,
                })
                .catch(function () {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[ThreadChatParity] onEmptyMRM: loadEarlierMsgs failed",
                      ])),
                  );
                }));
          }),
          n
        );
      })(r("WAWebSuperChatMsgs"));
    ((m.Proxy = "thread"), (m.idClass = r("WAWebThreadId")), (l.default = m));
  },
  98,
);
