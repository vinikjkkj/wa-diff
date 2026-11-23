__d(
  "WAWebMessageInsertDebugPlaceholder",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebMessageProcessorCache",
    "WAWebMessagingGatingUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled() && c(e);
    }
    async function c(t) {
      var n = t.additionalInfo,
        r = t.externalId,
        a = t.msgInfo,
        i = t.nackReason,
        l = t.offline;
      if (a == null) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[insertDebugPlaceholder] msgId=",
                " parse msgInfo failed",
              ])),
            r,
          )
          .tags("messaging");
        return;
      }
      var u = i.toString(),
        c = n != null ? u + " " + n : u,
        d = babelHelpers.extends(
          {},
          o("WAWebMsgProcessingApiUtils").generateBaseMsg(a),
          {
            type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
            kind: o("WAWebMsgType").MsgKind.DebugPlaceholder,
            body: c,
          },
        );
      try {
        (await o(
          "WAWebMessageProcessorCache",
        ).messageProcessorCache.addMessages([{ msg: d }], l !== !0),
          o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "updateMessageUI",
              { chatId: d.id.remote, msg: d },
            )));
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[insertDebugPlaceholder] msgId=",
                " insert failed: ",
                "",
              ])),
            r,
            e,
          )
          .tags("messaging");
      }
    }
    l.maybeInsertDebugPlaceholder = u;
  },
  98,
);
