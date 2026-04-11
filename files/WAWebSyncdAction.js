__d(
  "WAWebSyncdAction",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.malformedActionIndex = function () {
            var e = this.asSyncdActionHandler();
            return o("WAWebSyncdIndexUtils").malformedActionIndex(
              e.collectionName,
              e.getAction(),
            );
          }),
          (a.resolveConflicts = function (t, r) {
            var e = r.timestamp;
            return e >= t.timestamp
              ? (s || (s = n("Promise"))).resolve(
                  o("WASyncdConst").ConflictResolutionState
                    .ApplyRemoteAndDropLocal,
                )
              : (s || (s = n("Promise"))).resolve(
                  o("WASyncdConst").ConflictResolutionState.SkipRemote,
                );
          }),
          (a.dropMutationDueToCrossIndexConflict = function (t, r) {
            return (s || (s = n("Promise"))).resolve(!1);
          }),
          (a.getValidatedContent = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                switch (e.operation) {
                  case "remove":
                    return this.getValidatedContentRemove(e);
                  case "set":
                    return this.getValidatedContentSet(e);
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getValidatedContentSet = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                throw r("err")(
                  "You must implement getValidatedContent on your handler before using `withValidatedContent`",
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getValidatedContentRemove = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return { result: "unsupported" };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.withValidatedContent = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var r = yield this.getValidatedContent(t),
                  a = this.asSyncdActionHandler();
                switch (r.result) {
                  case "malformed_index":
                    return this.malformedActionIndex();
                  case "malformed_value":
                    return o("WAWebSyncdIndexUtils").malformedActionValue(
                      a.collectionName,
                    );
                  case "unsupported":
                    return {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    };
                  case "ok":
                    return n(r.content).catch(function (t) {
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
                        {
                          actionState: o("WASyncdConst").SyncActionState.Failed,
                        }
                      );
                    });
                }
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.asSyncdActionHandler = function () {
            if (this.isSyncdAction()) return this;
            throw r("err")("Invalid cast to SyncdAction");
          }),
          (a.isLidMutation = function (t) {
            return !1;
          }),
          (a.isSyncdAction = function () {
            return !0;
          }),
          (a.isAccountSyncdAction = function () {
            return !1;
          }),
          (a.isChatSyncdAction = function () {
            return !1;
          }),
          (a.isChatOrContactSyncdAction = function () {
            return !1;
          }),
          (a.isChatMessageRangeSyncdAction = function () {
            return !1;
          }),
          (a.isMessageSyncdAction = function () {
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
            return n == null ? !1 : o("WAWebWidFactory").createWid(n).isLid();
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
