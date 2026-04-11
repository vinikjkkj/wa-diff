__d(
  "WAWebBatchUpdateBroadcastAck",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebBroadcastConsts",
    "WAWebMsgCollection",
    "WAWebMsgModelUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum")({
        NO_FANOUT_KEYS: "no_fanout_keys",
        MISSING_CLONES: "missing_clones",
      });
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          r === void 0 && (r = o("WAWebSchemaMessage").getMessageTable());
          var a = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(t);
          if (
            a == null ||
            a.length < o("WAWebBroadcastConsts").MIN_BROADCAST_RECIPIENTS
          )
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:ack] no fanout keys",
                    ])),
                )
                .sendLogs("broadcast-ack-no-fanout-keys"),
              d.NO_FANOUT_KEYS
            );
          var i = a.length;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:ack] start keyId=",
                " ack=",
                " cnt=",
                "",
              ])),
            t.id.id,
            n,
            i,
          );
          var l = [{ id: t.id.toString(), ack: n }],
            m = [t],
            p = 0;
          for (var _ of a) {
            var f = o("WAWebMsgCollection").MsgCollection.get(_);
            f != null && (l.push({ id: _.toString(), ack: n }), m.push(f), p++);
          }
          yield r.bulkCreateOrMerge(l);
          for (var g of m) g.ack = n;
          return p !== i
            ? (o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:ack] clones missing found=",
                      " expected=",
                      "",
                    ])),
                  p,
                  i,
                )
                .sendLogs("broadcast-ack-missing-clones"),
              d.MISSING_CLONES)
            : (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:ack] done 1 broadcast + ",
                    " clones",
                  ])),
                i,
              ),
              null);
        })),
        p.apply(this, arguments)
      );
    }
    ((l.BatchUpdateAckError = d), (l.batchUpdateAckForBroadcastMessages = m));
  },
  98,
);
