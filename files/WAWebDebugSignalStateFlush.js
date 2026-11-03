__d(
  "WAWebDebugSignalStateFlush",
  [
    "WALogger",
    "WAWebMessageQueueImpl",
    "WAWebSignalProtocolStore",
    "WAWebSignalStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      var t = o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .cache_TESTONLY(),
        n = await Promise.all([
          o("WAWebSignalStorage").getSessionTable().all(),
          o("WAWebSignalStorage").getSenderKeyTable().all(),
        ]),
        r = n[0],
        a = n[1],
        i = u(
          new Map(
            Array.from(t.SessionStore.entries(), function (e) {
              var t = e[0],
                n = e[1];
              return [t, n == null || n.deleted === !0 ? null : n.session];
            }),
          ),
          new Map(
            r.map(function (e) {
              var t = e.address,
                n = e.session;
              return [t, n];
            }),
          ),
        ),
        l = u(
          t.SenderKeyStore,
          new Map(
            a.map(function (e) {
              var t = e.senderKey,
                n = e.senderKeyName;
              return [n, t];
            }),
          ),
        ),
        s = {
          queueImpl: o("WAWebMessageQueueImpl").getMessageQueueImpl(),
          senderKeys: l,
          sessions: i,
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
          s.queueImpl,
          d(i),
          d(l),
        ),
        s
      );
    }
    s.doc =
      "Manual test for the OneQueue signal state flushable: compares the Signal sessions and sender keys in memory with those on disk. Once received messages have settled, every differing entry is signal state that a crash would lose. Run it with wmi_wa_web_one_queue_adoption on and off and compare.";
    function u(e, t) {
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
              : c(l) !== c(e)
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
    function c(e) {
      var t;
      return typeof e == "string"
        ? e
        : (t = JSON.stringify(e)) != null
          ? t
          : "";
    }
    function d(e) {
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
    var m = { compareSignalStateWithDisk: s };
    l.default = m;
  },
  98,
);
