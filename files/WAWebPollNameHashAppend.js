__d(
  "WAWebPollNameHashAppend",
  [
    "WALogger",
    "WAWebAddonLogUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashUtils",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      try {
        var n = await Promise.allSettled(t.map(d));
        o("WAWebAddonLogUtils").hasSettledWithError(n) &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] failed to build poll name hash entries",
                ])),
            )
            .sendLogs("poll-name-hash-append-failed");
        var a = r("compactMap")(n, function (e) {
          return e.status === "fulfilled" ? e.value : null;
        });
        a.length > 0 && (await c(m(a)));
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
    }
    async function c(e) {
      var t = Array.from(e.keys());
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (n) {
          var r = n[0],
            a = await r.bulkGet(t),
            i = [];
          for (var l of a) {
            var s;
            if (
              !(
                l == null ||
                !o("WAWebPollNameHashHistoryUtils").hasPollNameHashHistory(l)
              )
            ) {
              var u = p(
                l.pollNameHashHistory,
                (s = e.get(l.id)) != null ? s : [],
              );
              u != null && i.push({ id: l.id, pollNameHashHistory: u });
            }
          }
          i.length > 0 && (await r.bulkCreateOrMerge(i));
        });
    }
    async function d(e) {
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
      var i = await o("WAWebPollNameHashUtils").tryComputePollNameHash(r);
      return i == null
        ? null
        : {
            parentMsgKey: t.id.toString(),
            entry: { editStanzaId: a, pollNameHash: i },
          };
    }
    function m(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.entry,
          o = n.parentMsgKey,
          a = t.get(o);
        a != null ? a.push(r) : t.set(o, [r]);
      }
      return t;
    }
    function p(e, t) {
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
    l.appendPollNameHashesForEdits = u;
  },
  98,
);
