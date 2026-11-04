__d(
  "WAWebDebugSignalStateFlush",
  [
    "Promise",
    "WALogger",
    "WAWebMessageQueueImpl",
    "WAWebSignalProtocolStore",
    "WAWebSignalStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .cache_TESTONLY(),
            r = yield (s || (s = n("Promise"))).all([
              o("WAWebSignalStorage").getSessionTable().all(),
              o("WAWebSignalStorage").getSenderKeyTable().all(),
            ]),
            a = r[0],
            i = r[1],
            l = d(
              new Map(
                Array.from(t.SessionStore.entries(), function (e) {
                  var t = e[0],
                    n = e[1];
                  return [t, n == null || n.deleted === !0 ? null : n.session];
                }),
              ),
              new Map(
                a.map(function (e) {
                  var t = e.address,
                    n = e.session;
                  return [t, n];
                }),
              ),
            ),
            u = d(
              t.SenderKeyStore,
              new Map(
                i.map(function (e) {
                  var t = e.senderKey,
                    n = e.senderKeyName;
                  return [n, t];
                }),
              ),
            ),
            c = {
              queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
              senderKeys: u,
              sessions: l,
            };
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "compareSignalStateWithDisk: queue=",
                  " sessions: ",
                  "; sender keys: ",
                  "",
                ])),
              c.queueImpl,
              p(l),
              p(u),
            ),
            c
          );
        })),
        c.apply(this, arguments)
      );
    }
    u.doc =
      "Manual test for the OneQueue signal state flushable: compares the Signal sessions and sender keys in memory with those on disk. Once received messages have settled, every differing entry is signal state that a crash would lose. Run it with wmi_wa_web_one_queue_adoption on and off and compare.";
    function d(e, t) {
      var n = [],
        r = [],
        o = [],
        a = 0;
      return (
        e.forEach(function (e, i) {
          var l = t.get(i);
          e == null
            ? l != null && n.push(i)
            : l == null
              ? o.push(i)
              : m(l) !== m(e)
                ? r.push(i)
                : a++;
        }),
        {
          deletedOnlyInMemory: n,
          differentOnDisk: r,
          matching: a,
          notOnDisk: o,
        }
      );
    }
    function m(e) {
      var t;
      return typeof e == "string"
        ? e
        : (t = JSON.stringify(e)) != null
          ? t
          : "";
    }
    function p(e) {
      var t = e.deletedOnlyInMemory,
        n = e.differentOnDisk,
        r = e.matching,
        o = e.notOnDisk;
      return (
        r +
        " matching, " +
        n.length +
        " different on disk [" +
        n.join(", ") +
        "], " +
        o.length +
        " not on disk [" +
        o.join(", ") +
        "], " +
        t.length +
        " deleted only in memory [" +
        t.join(", ") +
        "]"
      );
    }
    var _ = { compareSignalStateWithDisk: u };
    l.default = _;
  },
  98,
);
