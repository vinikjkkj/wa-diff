__d(
  "WAWebInboundMsgLeftoverLidPnMappings",
  [
    "WALogger",
    "WAPromiseReduce",
    "WAWebApiContact",
    "WAWebInboundMsgQueueStore",
    "WAWebInboundMsgRowCodec",
    "WAWebProcessPhoneNumberMapping",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e3;
    async function d() {
      await o("WAWebApiContact").warmUpAllLidPnMappings();
      var t = globalThis.performance.now();
      try {
        var n = await m(null, 0);
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] read ",
                " leftover rows for their LID/PN mappings in ",
                " ms",
              ])),
            n,
            Math.round(globalThis.performance.now() - t),
          )
          .tags("messaging");
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] could not read the leftover rows to learn their LID/PN mappings: ",
                "",
              ])),
            r("getErrorSafe")(e).name,
          )
          .tags("messaging");
      }
    }
    async function m(e, t) {
      var n = await o("WAWebInboundMsgQueueStore").readLeftoverInboundMsgs(
        c,
        e,
      );
      await o("WAPromiseReduce").promiseReduce(
        n,
        async function (e, t) {
          await p(t);
        },
        void 0,
      );
      var r = t + n.length,
        a = n[n.length - 1];
      return n.length < c || a == null ? r : m(a.queueId, r);
    }
    async function p(e) {
      var t = e.row;
      if (t.kind === "message")
        try {
          var n = await o("WAWebInboundMsgRowCodec").decodeInboundMsgRow(t),
            a = n.input,
            i = a.msgInfo,
            l = a.msgMeta;
          await o("WAWebProcessPhoneNumberMapping").processPhoneNumberMappings(
            i,
            l,
            !1,
            { lidMetadataUpdates: [] },
          );
        } catch (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] could not learn the LID/PN mappings of a leftover row: ",
                  "",
                ])),
              r("getErrorSafe")(e).name,
            )
            .tags("messaging");
        }
    }
    l.learnLeftoverInboundMsgLidPnMappings = d;
  },
  98,
);
