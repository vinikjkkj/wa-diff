__d(
  "MAWThreadMappingUtils",
  [
    "FBLogger",
    "LSMessagingThreadTypeUtil",
    "MAWJids",
    "MAWMiActOnActThreadReadyInstrumentation",
    "Promise",
    "ReQL",
    "ReQLSubscribe",
    "asyncToGeneratorRuntime",
    "err",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(e.threads).getKeyRange(t),
          );
          return n == null
            ? (r("FBLogger")("messenger_web").mustfix(
                "[onActThreadReady] Thread is not ready to be used.",
              ),
              null)
            : o("LSMessagingThreadTypeUtil").isGroup(n.threadType);
        })),
        c.apply(this, arguments)
      );
    }
    function d(t, a) {
      return (e || (e = n("Promise")))
        .all([
          u(t, a),
          o("ReQL").firstAsync(
            o("ReQL").fromTableAscending(t.mi_act_mapping_table).getKeyRange(a),
          ),
        ])
        .then(function (e) {
          var t = e[0],
            n = e[1];
          return n == null || t == null
            ? (r("FBLogger")("messenger_web").mustfix(
                "[onActThreadReady] Thread is not ready to be used.",
              ),
              null)
            : o("MAWJids").convertIntJidToChatJid(n.jid, t);
        });
    }
    function m(e, t) {
      return o("ReQL")
        .firstAsync(
          o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(t),
        )
        .then(function (e) {
          return e == null
            ? (r("FBLogger")("messenger_web").mustfix(
                "[onActThreadReady] Thread is not ready to be used.",
              ),
              null)
            : e.jid;
        });
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l,
            c = null,
            m = (l = o(
              "MAWMiActOnActThreadReadyInstrumentation",
            )).getOnActThreadReadyInstanceKey(i);
          (l.startQPL(m, i, a, "getChatJidOnceInThreadMappingTable"),
            l.addPointQPL(m, "get_existing_int_jid_from_mapping_table_start"));
          var p = yield d(t.tables, a);
          if (
            (l.addPointQPL(m, "get_existing_int_jid_from_mapping_table_end"),
            p != null)
          )
            return (
              o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(m),
              (e || (e = n("Promise"))).resolve(p)
            );
          var _ = yield u(t.tables, a);
          if (_ == null)
            throw (
              o("MAWMiActOnActThreadReadyInstrumentation").endFailureQPL(
                m,
                "thread_not_ready_to_be_used",
              ),
              r("FBLogger")("messenger_web").mustfixThrow(
                "Thread is not ready to be used.",
              )
            );
          return (
            o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(
              m,
              "subscribe_to_mapping_table_start",
            ),
            new (e || (e = n("Promise")))(function (e, n) {
              var i = o("ReQL")
                  .fromTableDescending(t.tables.mi_act_mapping_table)
                  .getKeyRange(a),
                l = o("ReQLSubscribe").subscribeToFirst(i, function (t) {
                  t != null &&
                    (c != null && window.clearTimeout(c),
                    l(),
                    o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(
                      m,
                      "subscribe_to_mapping_table_end",
                    ),
                    o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(
                      m,
                    ),
                    e(o("MAWJids").convertIntJidToChatJid(t.jid, _)));
                });
              c = r("setTimeout")(function () {
                (l(),
                  o("MAWMiActOnActThreadReadyInstrumentation").endFailureQPL(
                    m,
                    "subscribe_to_mapping_table_timeout",
                  ),
                  n(
                    r("err")(
                      "Timeout waiting for int jid to be populated in mapping table.",
                    ),
                  ));
              }, s);
            })
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l,
            u = null,
            c = (l = o(
              "MAWMiActOnActThreadReadyInstrumentation",
            )).getOnActThreadReadyInstanceKey(i);
          (l.startQPL(c, i, a, "getIntJidOnceInThreadMappingTable"),
            l.addPointQPL(c, "get_existing_int_jid_from_mapping_table_start"));
          var d = yield m(t.tables, a);
          return (
            l.addPointQPL(c, "get_existing_int_jid_from_mapping_table_end"),
            d != null
              ? (o("MAWMiActOnActThreadReadyInstrumentation").endSuccessQPL(c),
                (e || (e = n("Promise"))).resolve(d))
              : (o("MAWMiActOnActThreadReadyInstrumentation").addPointQPL(
                  c,
                  "subscribe_to_mapping_table_start",
                ),
                new (e || (e = n("Promise")))(function (e, n) {
                  var i = o("ReQL")
                      .fromTableDescending(t.tables.mi_act_mapping_table)
                      .getKeyRange(a),
                    l = o("ReQLSubscribe").subscribeToFirst(i, function (t) {
                      t != null &&
                        (u != null && window.clearTimeout(u),
                        l(),
                        o(
                          "MAWMiActOnActThreadReadyInstrumentation",
                        ).addPointQPL(c, "subscribe_to_mapping_table_end"),
                        o(
                          "MAWMiActOnActThreadReadyInstrumentation",
                        ).endSuccessQPL(c),
                        e(t.jid));
                    });
                  u = r("setTimeout")(function () {
                    (l(),
                      o(
                        "MAWMiActOnActThreadReadyInstrumentation",
                      ).endFailureQPL(c, "subscribe_to_mapping_table_timeout"),
                      n(
                        r("err")(
                          "Timeout waiting for int jid to be populated in mapping table.",
                        ),
                      ));
                  }, s);
                }))
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.isThreadGroup = u),
      (l.getChatJidFromMappingTable = d),
      (l.getIntJidFromMappingTable = m),
      (l.getChatJidOnceInThreadMappingTable = p),
      (l.getIntJidOnceInThreadMappingTable = f));
  },
  98,
);
