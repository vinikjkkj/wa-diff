__d(
  "WAWebSuperChatMsgs",
  [
    "WALogger",
    "WAWebBaseModel",
    "WAWebChatMsgsCollection",
    "WAWebGroupHistoryGating",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.pendingMsgs = o("WAWebBaseModel").prop()),
            (e.labels = o("WAWebBaseModel").prop()),
            (e.msgChunks = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.lastReceivedKey = o("WAWebBaseModel").session()),
            (e.unreadMsgAnchor = o("WAWebBaseModel").session()),
            (e.disableUnreadAnchor = o("WAWebBaseModel").session()),
            (e.msgsLength = o("WAWebBaseModel").session()),
            (e.msgsChanged = o("WAWebBaseModel").session(0)),
            (e.noEarlierMsgs = o("WAWebBaseModel").session(!1)),
            (e.msgs = o("WAWebBaseModel").collection(
              o("WAWebChatMsgsCollection").ChatMsgsCollection,
            )),
            (e.$ChatMsgs$p_1 = null),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            var e = this;
            (t.prototype.initialize.call(this),
              this.listenTo(this.msgs, "change:last", function () {
                e.msgsChanged++;
              }),
              this.listenTo(this.msgs, "add remove bulk_add", function () {
                (e.msgsChanged++, (e.msgsLength = e.msgs.length));
              }));
            var n = this.id;
            if (
              n instanceof r("WAWebWid") &&
              n.isGroup() &&
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(n)
            ) {
              var a = function () {
                var t = e.msgs.msgLoadState.noEarlierMsgs;
                e.noEarlierMsgs !== t && (e.noEarlierMsgs = t);
              };
              ((this.$ChatMsgs$p_1 = this.msgs.onMsgLoadStateChange(a)), a());
            }
          }),
          (a.onEmptyMRM = function () {
            throw r("err")("onEmptyMRM not implemented");
          }),
          (a.delete = function () {
            var e;
            ((e = this.$ChatMsgs$p_1) == null || e.call(this),
              t.prototype.delete.call(this),
              this.getAllCMCs().forEach(function (e) {
                (e.forEach(function (e) {
                  e.delete();
                }),
                  e.delete());
              }));
          }),
          (a.removeMsg = function (n) {
            var t = this;
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Chat:removeMsg ",
                  "",
                ])),
              n.get("id"),
            ),
              this.$ChatMsgs$p_2(n, n.getMsgChunk()),
              n.forEachThreadMsgChunk(function (e) {
                t.$ChatMsgs$p_2(n, e);
              }));
          }),
          (a.$ChatMsgs$p_2 = function (t, n) {
            n == null ||
              !n.includes(t) ||
              (n.remove(t),
              n.length === 0 &&
                (n === this.msgs
                  ? this.onEmptyMRM()
                  : this.msgChunks.includes(n) &&
                    this.removeMsgsCollection(n)));
          }),
          (a.getAllCMCs = function () {
            return this.msgChunks.concat([this.msgs]);
          }),
          (a.getAllMsgs = function () {
            return this.getAllCMCs()
              .map(function (e) {
                return e.getModelsArray();
              })
              .flat();
          }),
          (a.replaceMsgsCollection = function (t) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "model:Chat:replaceMsgsCollection:",
                  "",
                ])),
              this.id.toString(),
            );
            var e = { msg: t.last() };
            (this.msgs.replace(t),
              this.notifyMsgCollectionMerge({
                cmc1: t,
                cmc2: this.msgs,
                cmcResult: this.msgs,
                newFocusCtx: e,
              }),
              (this.msgChunks = this.msgChunks.filter(function (e) {
                return e !== t;
              })),
              t.delete());
          }),
          (a.removeMsgsCollection = function (t) {
            ((this.msgChunks = this.msgChunks.filter(function (e) {
              return e !== t;
            })),
              t.delete());
          }),
          (a.notifyMsgCollectionMerge = function (t) {
            var e = t.cmc1,
              n = t.cmc2,
              r = t.cmcResult,
              o = t.newFocusCtx;
            this.trigger("change:cmc:merge", {
              cmc1: e,
              cmc2: n,
              cmcResult: r,
              newFocusCtx: o,
            });
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    l.default = u;
  },
  98,
);
