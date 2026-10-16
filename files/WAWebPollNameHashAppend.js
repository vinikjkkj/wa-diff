__d(
  "WAWebPollNameHashAppend",
  [
    "Promise",
    "WALogger",
    "WAWebAddonLogUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashUtils",
    "WAWebPollsGatingUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebPollsGatingUtils").isPollTCReceivingEnabled())
            try {
              var a = yield (u || (u = n("Promise"))).allSettled(t.map(_));
              o("WAWebAddonLogUtils").hasSettledWithError(a) &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[polls/tc] failed to build poll name hash entries",
                      ])),
                  )
                  .sendLogs("poll-name-hash-append-failed");
              var i = r("compactMap")(a, function (e) {
                return e.status === "fulfilled" ? e.value : null;
              });
              i.length > 0 && (yield m(g(i)));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls/tc] failed to append poll name hashes",
                    ])),
                )
                .sendLogs("poll-name-hash-append-failed");
            }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(e.keys());
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["message"],
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var r = n[0],
                      a = yield r.bulkGet(t),
                      i = [];
                    for (var l of a) {
                      var s;
                      if (
                        !(
                          l == null ||
                          !o(
                            "WAWebPollNameHashHistoryUtils",
                          ).hasPollNameHashHistory(l)
                        )
                      ) {
                        var u = h(
                          l.pollNameHashHistory,
                          (s = e.get(l.id)) != null ? s : [],
                        );
                        u != null &&
                          i.push({ id: l.id, pollNameHashHistory: u });
                      }
                    }
                    i.length > 0 && (yield r.bulkCreateOrMerge(i));
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.parentMsg,
            n = e.protocolMsg,
            r = n.pollName,
            a = n.id.id;
          if (
            t.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            t.id.remote.isNewsletter() ||
            a ===
              o("WAWebPollNameHashHistoryUtils")
                .ORIGINAL_POLL_VERSION_EDIT_STANZA_ID ||
            r == null ||
            r.length === 0
          )
            return null;
          var i = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(r);
          return i == null
            ? null
            : {
                parentMsgKey: t.id.toString(),
                entry: { editStanzaId: a, pollNameHash: i },
              };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.entry,
          o = n.parentMsgKey,
          a = t.get(o);
        a != null ? a.push(r) : t.set(o, [r]);
      }
      return t;
    }
    function h(e, t) {
      var n = e;
      for (var r of t) {
        var a = r.editStanzaId,
          i = r.pollNameHash;
        o("WAWebPollNameHashHistoryUtils").getPollNameHashFor(
          { pollNameHashHistory: n },
          a,
        ) == null &&
          (n = o("WAWebPollNameHashHistoryUtils").appendPollNameHash(n, a, i));
      }
      return n === e ? null : n;
    }
    l.appendPollNameHashesForEdits = c;
  },
  98,
);
