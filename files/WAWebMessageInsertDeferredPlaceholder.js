__d(
  "WAWebMessageInsertDeferredPlaceholder",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "-DEFERRED";
    function c(e) {
      var t = o("WAWebMsgProcessingApiUtils").generateBaseMsg(e).id;
      return new (r("WAWebMsgKey"))({
        fromMe: t.fromMe,
        id: "" + t.id + u,
        participant: t.participant,
        remote: t.remote,
      });
    }
    function d(e) {
      return o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
        ? p(e)
        : Promise.resolve();
    }
    function m(e) {
      return o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
        ? _(e)
        : Promise.resolve();
    }
    async function p(t) {
      var n = t.msgInfo,
        r = t.reason;
      try {
        var a = c(n),
          i = await o("WAWebDBMsgUtils").getMsgsExistByMsgKey([a.toString()]),
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
        (await o(
          "WAWebMessageProcessorCache",
        ).messageProcessorCache.addMessages([{ msg: s }], !0),
          o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
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
    }
    async function _(e) {
      try {
        var t = c(e);
        if (await f(t)) return;
        var n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
        n != null && (await f(n));
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
    }
    async function f(e) {
      var t = e.toString(),
        n = await o("WAWebSchemaMessage").getMessageTable().get(t);
      if (n == null) return !1;
      var r = o("WAWebDBMessageSerialization").messageFromDbRow(n);
      return r.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER
        ? !1
        : (await o("WAWebSchemaMessage").getMessageTable().bulkRemove([t]),
          o("WAWebBackendApi").frontendFireAndForget("removePlaceholder", {
            msg: r,
          }),
          !0);
    }
    ((l.maybeInsertDeferredPlaceholder = d),
      (l.maybeRemoveDeferredPlaceholder = m));
  },
  98,
);
