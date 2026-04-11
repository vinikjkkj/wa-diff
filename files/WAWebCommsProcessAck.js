__d(
  "WAWebCommsProcessAck",
  [
    "WALogger",
    "WAWebActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebDBMessageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.attrs,
        n = t.from,
        r = t.id,
        a = t.t;
      if (e.attrs.class === "message") {
        var i = o("WAWebWidFactory").createWid(String(n)),
          l = u(e);
        (m(String(r), i, parseInt(a, 10), l), d(l, String(r), i));
      }
    }
    function u(e) {
      var t,
        n,
        r = e.content;
      if (!Array.isArray(r) || ((t = r[0]) == null ? void 0 : t.tag) !== "rcat")
        return null;
      var o = (n = r[0]) == null ? void 0 : n.content;
      return Array.isArray(o) ? null : o;
    }
    function c(e, t) {
      return t.isGroup()
        ? new (r("WAWebMsgKey"))({
            fromMe: !0,
            remote: t,
            id: e,
            participant: o(
              "WAWebUserPrefsMeUser",
            ).getMePnUserOrThrow_DO_NOT_USE(),
          })
        : new (r("WAWebMsgKey"))({ fromMe: !0, remote: t, id: e });
    }
    function d(e, t, n) {
      e != null &&
        o("WAWebBackendApi").frontendFireAndForget("updateMsgRcat", {
          msgKey: String(c(t, n)),
          rcat: e,
        });
    }
    function m(e, t, n, r) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a) {
            var i = c(t, n),
              l = String(i);
            try {
              var s = yield o("WAWebSchemaMessage").getMessageTable().get(l);
              if (
                (s == null ? void 0 : s.type) ===
                o("WAWebMsgType").MSG_TYPE.REACTION
              )
                return;
              var u = o("WAWebDBMessageUtils").MessagePropertyType.cast(
                s == null ? void 0 : s.messageRangeIndex.split("_")[1],
              );
              o("WAWebSchemaMessage")
                .getMessageTable()
                .merge(l, {
                  messageRangeIndex: o(
                    "WAWebDBMessageUtils",
                  ).craftMessageRangeIndex(
                    n.toString(),
                    !1,
                    u ===
                      o("WAWebDBMessageUtils").MessagePropertyType
                        .SystemMessage,
                    r,
                  ),
                  rcat: a,
                });
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "processAckForOutgoingMessage: failed to update in storage",
                      ])),
                  )
                  .verbose()
                  .sendLogs("message processAckForOutgoingMessage failed"),
                t
              );
            }
            o("WAWebActiveMessageRanges").checkAndRemoveActiveMessageRanges(
              i,
              r,
            );
          },
        )),
        p.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
