__d(
  "WAWebInboundMsgLeftoverLidPnMappings",
  [
    "WALogger",
    "WAPromiseReduce",
    "WAWebApiContact",
    "WAWebInboundMsgQueueStore",
    "WAWebInboundMsgRowCodec",
    "WAWebProcessPhoneNumberMapping",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e3;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebApiContact").warmUpAllLidPnMappings();
          var t = globalThis.performance.now();
          try {
            var n = yield p(null, 0);
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("WAWebInboundMsgQueueStore").readLeftoverInboundMsgs(
            c,
            e,
          );
          yield o("WAPromiseReduce").promiseReduce(
            r,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  yield f(t);
                },
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            void 0,
          );
          var a = t + r.length,
            i = r[r.length - 1];
          return r.length < c || i == null ? a : p(i.queueId, a);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.row;
          if (t.kind === "message")
            try {
              var n = yield o("WAWebInboundMsgRowCodec").decodeInboundMsgRow(t),
                a = n.input,
                i = a.msgInfo,
                l = a.msgMeta;
              yield o(
                "WAWebProcessPhoneNumberMapping",
              ).processPhoneNumberMappings(i, l, !1, {
                lidMetadataUpdates: [],
              });
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
        })),
        g.apply(this, arguments)
      );
    }
    l.learnLeftoverInboundMsgLidPnMappings = d;
  },
  98,
);
