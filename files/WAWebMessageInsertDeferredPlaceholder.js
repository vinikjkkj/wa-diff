__d(
  "WAWebMessageInsertDeferredPlaceholder",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageProcessorCache",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "-DEFERRED";
    function d(e) {
      var t = o("WAWebMsgProcessingApiUtils").generateBaseMsg(e).id;
      return new (r("WAWebMsgKey"))({
        fromMe: t.fromMe,
        id: "" + t.id + c,
        participant: t.participant,
        remote: t.remote,
      });
    }
    function m(e) {
      return o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
        ? _(e)
        : (u || (u = n("Promise"))).resolve();
    }
    function p(e) {
      return o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
        ? g(e)
        : (u || (u = n("Promise"))).resolve();
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgInfo,
            r = t.reason;
          try {
            var a = d(n),
              i = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey([
                a.toString(),
              ]),
              l = i[0];
            if (l) return;
            var s = babelHelpers.extends(
              {},
              o("WAWebMsgProcessingApiUtils").generateBaseMsg(n),
              {
                id: a,
                type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
                kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
                body: r,
              },
            );
            (yield o(
              "WAWebMessageProcessorCache",
            ).messageProcessorCache.addMessages([{ msg: s }], !0),
              o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "updateMessageUI",
                  { chatId: s.id.remote, msg: s },
                )));
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[insertDeferredPlaceholder] msgId=",
                    " insert failed: ",
                    "",
                  ])),
                n.externalId,
                t,
              )
              .tags("messaging");
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = d(e);
            if (yield y(t)) return;
            var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
            n != null && (yield y(n));
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[removeDeferredPlaceholder] msgKey removal failed: ",
                    "",
                  ])),
                e,
              )
              .tags("messaging");
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.toString(),
            n = yield o("WAWebSchemaMessage").getMessageTable().get(t);
          if (n == null) return !1;
          var r = o("WAWebDBMessageSerialization").messageFromDbRow(n);
          return r.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER
            ? !1
            : (yield o("WAWebSchemaMessage").getMessageTable().bulkRemove([t]),
              o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
                msg: r,
              }),
              !0);
        })),
        C.apply(this, arguments)
      );
    }
    ((l.maybeInsertDeferredPlaceholder = m),
      (l.maybeRemoveDeferredPlaceholder = p));
  },
  98,
);
