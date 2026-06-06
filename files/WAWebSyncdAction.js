__d(
  "WAWebSyncdAction",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.malformedActionIndex = function () {
            var e = this.asSyncdActionHandler();
            return o("WAWebSyncdIndexUtils").malformedActionIndex(
              e.collectionName,
              e.getAction(),
            );
          }),
          (n.resolveConflicts = function (t, n) {
            var e = n.timestamp;
            return e >= t.timestamp
              ? Promise.resolve(
                  o("WASyncdConst").ConflictResolutionState
                    .ApplyRemoteAndDropLocal,
                )
              : Promise.resolve(
                  o("WASyncdConst").ConflictResolutionState.SkipRemote,
                );
          }),
          (n.dropMutationDueToCrossIndexConflict = function (t, n) {
            return Promise.resolve(!1);
          }),
          (n.getValidatedContent = async function (t) {
            switch (t.operation) {
              case "remove":
                return this.getValidatedContentRemove(t);
              case "set":
                return this.getValidatedContentSet(t);
            }
          }),
          (n.getValidatedContentSet = async function (t) {
            throw r("err")(
              "You must implement getValidatedContent on your handler before using `withValidatedContent`",
            );
          }),
          (n.getValidatedContentRemove = async function (t) {
            return { result: "unsupported" };
          }),
          (n.withValidatedContent = async function (n, r) {
            var t = await this.getValidatedContent(n),
              a = this.asSyncdActionHandler();
            switch (t.result) {
              case "malformed_index":
                return this.malformedActionIndex();
              case "malformed_value":
                return o("WAWebSyncdIndexUtils").malformedActionValue(
                  a.collectionName,
                );
              case "unsupported":
                return {
                  actionState: o("WASyncdConst").SyncActionState.Unsupported,
                };
              case "ok":
                return r(t.content).catch(function (t) {
                  var n = t instanceof Error ? t.message : String(t);
                  return (
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] withValidatedContent err: ",
                          ": ",
                          "",
                        ])),
                      a.getAction(),
                      n,
                    ),
                    { actionState: o("WASyncdConst").SyncActionState.Failed }
                  );
                });
            }
          }),
          (n.asSyncdActionHandler = function () {
            if (this.isSyncdAction()) return this;
            throw r("err")("Invalid cast to SyncdAction");
          }),
          (n.isLidMutation = function (t) {
            return !1;
          }),
          (n.isSyncdAction = function () {
            return !0;
          }),
          (n.isAccountSyncdAction = function () {
            return !1;
          }),
          (n.isChatSyncdAction = function () {
            return !1;
          }),
          (n.isChatOrContactSyncdAction = function () {
            return !1;
          }),
          (n.isChatMessageRangeSyncdAction = function () {
            return !1;
          }),
          (n.isMessageSyncdAction = function () {
            return !1;
          }),
          t
        );
      })(),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isAccountSyncdAction = function () {
            return !0;
          }),
          (n.asAccountSyncdActionHandler = function () {
            if (this.isAccountSyncdAction()) return this;
            throw r("err")("Invalid cast to AccountSyncdAction");
          }),
          t
        );
      })(u),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isChatSyncdAction = function () {
            return !0;
          }),
          (n.asChatSyncdActionHandler = function () {
            if (this.isChatSyncdAction()) return this;
            throw r("err")("Invalid cast to ChatSyncdAction");
          }),
          (n.isLidMutation = function (t) {
            var e = this.asChatSyncdActionHandler(),
              n = t[e.chatJidIndex];
            if (n == null) return !1;
            try {
              return o("WAWebWidFactory").createWid(n).isLid();
            } catch (e) {
              var a = r("getErrorSafe")(e);
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "isLidMutation: invalid wid in mutation index, error: ",
                        "",
                      ])),
                    a.message,
                  )
                  .sendLogs("syncd: isLidMutation invalid wid"),
                !1
              );
            }
          }),
          t
        );
      })(u),
      m = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isChatOrContactSyncdAction = function () {
            return !0;
          }),
          (n.asChatOrContactSyncdActionHandler = function () {
            if (this.isChatOrContactSyncdAction()) return this;
            throw r("err")("Invalid cast to ChatOrContactSyncdAction");
          }),
          t
        );
      })(d),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isMessageSyncdAction = function () {
            return !0;
          }),
          (n.asMessageSyncdActionHandler = function () {
            if (this.isMessageSyncdAction()) return this;
            throw r("err")("Invalid cast to MessageSyncdAction");
          }),
          t
        );
      })(d),
      _ = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isChatMessageRangeSyncdAction = function () {
            return !0;
          }),
          (n.asChatMessageRangeSyncdActionHandler = function () {
            if (this.isChatMessageRangeSyncdAction()) return this;
            throw r("err")("Invalid cast to ChatMessageRangeSyncdActionBase");
          }),
          t
        );
      })(d);
    ((l.AccountSyncdActionBase = c),
      (l.ChatSyncdActionBase = d),
      (l.ChatOrContactSyncdActionBase = m),
      (l.MessageSyncdActionBase = p),
      (l.ChatMessageRangeSyncdActionBase = _));
  },
  98,
);
