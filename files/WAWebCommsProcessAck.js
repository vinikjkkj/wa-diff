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
        (m({ id: String(r), rcat: l, remote: i, timestamp: parseInt(a, 10) }),
          d(l, String(r), i));
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
            participant: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.id,
            r = t.rcat,
            a = t.remote,
            i = t.timestamp,
            l = c(n, a),
            s = String(l);
          try {
            var u = yield o("WAWebSchemaMessage").getMessageTable().get(s);
            if (
              (u == null ? void 0 : u.type) ===
              o("WAWebMsgType").MSG_TYPE.REACTION
            )
              return;
            var d = o("WAWebDBMessageUtils").MessagePropertyType.cast(
              u == null ? void 0 : u.messageRangeIndex.split("_")[1],
            );
            o("WAWebSchemaMessage")
              .getMessageTable()
              .merge(s, {
                messageRangeIndex: o(
                  "WAWebDBMessageUtils",
                ).craftMessageRangeIndex(
                  a.toString(),
                  !1,
                  d ===
                    o("WAWebDBMessageUtils").MessagePropertyType.SystemMessage,
                  i,
                ),
                rcat: r,
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
          o("WAWebActiveMessageRanges").checkAndRemoveActiveMessageRanges(l, i);
        })),
        p.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
