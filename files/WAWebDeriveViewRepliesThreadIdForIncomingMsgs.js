__d(
  "WAWebDeriveViewRepliesThreadIdForIncomingMsgs",
  [
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBProcessReplyMsgs",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebSchemaMessage",
    "WAWebThreadId",
    "WAWebThreadMsgUtils",
    "WAWebThreadUtils",
    "WAWebThreadsGating",
    "WAWebViewRepliesChatUtils",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "missing-stanza-id";
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 0) {
            var n = [],
              r = new Set();
            for (var a of t)
              if (
                o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(a) ==
                  null &&
                o("WAWebViewRepliesChatUtils").isChatSupportedForViewRepliesWid(
                  a.id.remote,
                ) &&
                !(
                  a.quotedRemoteJid != null &&
                  !a.quotedRemoteJid.equals(a.id.remote)
                )
              ) {
                var i = o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(a);
                i !== s && (n.push(a), r.add(i.toString()));
              }
            if (
              !(
                n.length === 0 ||
                !o("WAWebThreadsGating").isViewRepliesThreadIdEnabled()
              )
            ) {
              var l = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(Array.from(r)),
                u = new Map(
                  l.map(function (e) {
                    return [e.id.toString(), e];
                  }),
                ),
                c = new Map(
                  t.map(function (e) {
                    return [e.id.toString(), e];
                  }),
                ),
                m = new Map();
              for (var p of n) {
                var _ = d(p, u, c, m);
                _ != null && m.set(p.id.toString(), _);
              }
              if (m.size !== 0) {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[derive-view-replies-threadid] derived ",
                      " threadIds",
                    ])),
                  m.size,
                );
                for (
                  var f = Array.from(m.keys()),
                    g = o("WAWebSchemaMessage").getMessageTable(),
                    h = yield g.bulkGet(f),
                    y = [],
                    C = [],
                    b = function* () {
                      var e,
                        n = f[v],
                        r = m.get(n),
                        a = h[v];
                      if (r == null || a == null || a.internalId == null)
                        return 1;
                      var i = o("WAWebDBMessageUtils").getInChatMsgId(
                          a.internalId,
                        ),
                        l = o("WAWebDBMessageUtils").craftInternalThreadId(
                          i,
                          r,
                        ),
                        s = (e = a.internalThreadIDs) != null ? e : [];
                      y.push({ id: n, internalThreadIDs: [].concat(s, [l]) });
                      var u = t.find(function (e) {
                        return e.id.toString() === n;
                      });
                      if (u != null) {
                        var c,
                          d = (c = u.threadIds) != null ? c : [];
                        ((u.threadIds = [].concat(d, [r])), C.push(u));
                      }
                    },
                    v = 0;
                  v < f.length;
                  v++
                )
                  yield* b();
                (y.length > 0 && (yield g.bulkCreateOrMerge(y)),
                  C.length > 0 &&
                    (yield o(
                      "WAWebDBThreadMetadataBulkHelper",
                    ).persistNewMessagesThreadMetadataInBulk(C)));
              }
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, a) {
      var i,
        l = o("WAWebDBProcessReplyMsgs").createQuotedMsgKey(e);
      if (l === s) return null;
      var u = l.toString(),
        c = (i = n.get(u)) != null ? i : t.get(u);
      if (c == null) return null;
      var d = c.id.toString(),
        m = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(c);
      if (m == null) {
        var p = a.get(d);
        p != null && (m = p);
      }
      return m != null
        ? m
        : r("isStringNullOrEmpty")(c.quotedStanzaID)
          ? r("WAWebThreadId").fromMessage(
              c.id,
              o("WAWebThreadUtils").ThreadType.ViewAllReplies,
            )
          : null;
    }
    l.maybeGenerateViewRepliesThreadIdsForIncomingMsgs = u;
  },
  98,
);
