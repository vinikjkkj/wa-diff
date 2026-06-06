__d(
  "WAWebDBStoreEncryptedMsgs",
  [
    "WALogger",
    "WAPromiseMap",
    "WAWeb-dexie",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBStoreMessage",
    "WAWebDBStoreMessageAssociations",
    "WAWebDBStoreMsgsUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebPostIncomingMessageDropDBOperationFailedForMsgRows",
    "WAWebWidFactory",
    "compactMap",
    "cr:375",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E = (e = n("cr:375")) != null ? e : {},
      k = E.ftsLightClient;
    function I(e, t, n, a, i) {
      return (
        n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message", "message-association"], async function (l) {
            n &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedDBMessages: storing ",
                    " messages: lock acquired",
                  ])),
                e.length,
              );
            var y = l[0],
              C = l[1],
              b = e;
            if (a) {
              var v = await o("WAWebDBMsgUtils").getMsgsExistByMsgKey(
                e.map(function (e) {
                  var t = e[0];
                  return t.id.toString();
                }),
              );
              if (
                ((b = e.filter(function (e, t) {
                  return !v[t];
                })),
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[storeEncryptedDBMessages] fallback ",
                      "/",
                      " msgs",
                    ])),
                  b.length,
                  e.length,
                ),
                b.length === 0)
              )
                return;
            }
            var S = await o("WAWebDBStoreMsgsUtils").getLastRowId(y, n);
            n &&
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedDBMessages: storing ",
                    " messages: got last row id ",
                    "",
                  ])),
                e.length,
                S,
              );
            var R = t.map(function (e) {
                return o("WAWebWidFactory").createWid(e);
              }),
              L = new Map();
            (await $({
              chatWids: R,
              groupHistoryAnchor: i,
              internalIdPrefix: o("WAWebDBMessageUtils").InternalIdPrefix
                .Default,
              isHistory: n,
              messageTable: y,
              output: L,
            }),
              n &&
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "storeEncryptedDBMessages: storing ",
                      " messages: chat map built",
                    ])),
                  e.length,
                ),
              b.some(function (e) {
                var t = e[0],
                  n = e[1];
                return t.isGroupStatus === !0;
              }) &&
                (await $({
                  chatWids: R.filter(function (e) {
                    return e.isGroup();
                  }),
                  groupHistoryAnchor: i,
                  internalIdPrefix: o("WAWebDBMessageUtils").InternalIdPrefix
                    .GroupStatus,
                  isHistory: n,
                  messageTable: y,
                  output: L,
                }),
                n &&
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[storeEncryptedDBMessages] ",
                        " msgs: group status map built",
                      ])),
                    e.length,
                  )));
            var E = i != null,
              k = n ? -1 : 1,
              I = n || E ? -1 : 1,
              N = [],
              M = (
                await o("WAPromiseMap").promiseMap(b, async function (e, t) {
                  var a = e[0],
                    i = e[1];
                  n && (a.isMdHistoryMsg = !0);
                  var l = r("WAWebMsgKey").fromString(a.id),
                    s = l.remote.toString(),
                    u = S + k * (t + 1),
                    c = P(
                      s,
                      o("WAWebDBMessageUtils").getPrefixForInternalId(a),
                    ),
                    d = L.get(c);
                  if (d == null || Number.isNaN(d)) {
                    N.length < 3 &&
                      N.push({
                        error: d == null ? "null" : "nan",
                        msgType: a.type,
                        msgSubtype: a.subtype,
                        mapKey: c,
                      });
                    return;
                  }
                  var m = d + I * 1;
                  L.set(c, m);
                  var p =
                      !n &&
                      o("WAWebDBStoreMessage").isPendingUnreadReceipt(l, a),
                    _ = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                      msg: a,
                      chatId: s,
                      hasLink: i,
                      rowId: u,
                      inChatMsgId: m,
                      pendingReadReceipt: p,
                    });
                  return _;
                })
              ).filter(Boolean);
            if (N.length > 0) {
              var w = n ? "history-sync-" : "",
                A = N.map(function (e) {
                  return e.error;
                }),
                F = A.includes("null"),
                O = A.includes("nan"),
                B = "nan";
              (F && O ? (B = "null-and-nan") : F && (B = "null"),
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[storeEncryptedMessage] lastChatMsgId invalid=",
                        " ",
                        "",
                      ])),
                    N.length,
                    N.map(function (e) {
                      return (
                        "err=" +
                        e.error +
                        ",t=" +
                        String(e.msgType) +
                        ",st=" +
                        String(e.msgSubtype)
                      );
                    }),
                  )
                  .sendLogs(
                    "" +
                      w +
                      B +
                      "-error-check-lastinchatmsgidmap-lastChatMsgId",
                  ));
            }
            n &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[storeEncryptedDBMessages] ",
                    " msgs: ",
                    " hydrated",
                  ])),
                e.length,
                M.length,
              );
            try {
              (o(
                "WAWebMessageAssociationGatingUtils",
              ).isMessageAssociationInfraEnabled() &&
                (await o(
                  "WAWebDBStoreMessageAssociations",
                ).bulkStoreMessageAssociations(M, !0),
                n &&
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "storeEncryptedDBMessages: storing ",
                        " messages: associations stored",
                      ])),
                    e.length,
                  )),
                await y.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(M, !!n),
                n &&
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "storeEncryptedDBMessages: storing ",
                        " messages: stored",
                      ])),
                    e.length,
                  ));
            } catch (t) {
              var W = r("getErrorSafe")(t);
              if (n && W instanceof r("WAWeb-dexie").BulkError)
                (o("WALogger").ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[storeEncryptedDBMessages] BulkError, retrying bulkCreateOrReplace",
                    ])),
                ),
                  await y.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(
                    M,
                  ));
              else throw ((a || !T(e.length, W)) && (D(M, W), x(M)), W);
            }
            return M;
          })
          .then(function (t) {
            t &&
              t.length > 0 &&
              r("WAWeb-dexie").ignoreTransaction(async function () {
                (n &&
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[storeEncryptedDBMessages] ",
                        " msgs: +",
                        " to index",
                      ])),
                    e.length,
                    t.length,
                  ),
                  await (k == null
                    ? void 0
                    : k.addToIndexingTable(
                        r("compactMap")(t, function (e) {
                          return e.rowId != null ? String(e.rowId) : null;
                        }),
                      )),
                  n &&
                    o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[storeEncryptedDBMessages] ",
                          " msgs: fts index ",
                          "",
                        ])),
                      e.length,
                      t.length,
                    ),
                  k == null || k.index().catch(r("WAWebNoop")));
              });
          })
      );
    }
    function T(e, t) {
      return e > 1 && t instanceof r("WAWeb-dexie").BulkError;
    }
    function D(e, t) {
      r("WAWeb-dexie")
        .ignoreTransaction(async function () {
          var n = e;
          if (t instanceof r("WAWeb-dexie").BulkError) {
            var a = e.map(function (e) {
                var t = e.id;
                return t.toString();
              }),
              i = await o("WAWebDBMsgUtils").getMsgsExistByMsgKey(a);
            n = e.filter(function (e, t) {
              return !i[t];
            });
          }
          n.length > 0
            ? (o("WALogger")
                .WARN(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[storeEncryptedDBMessages] dropped ",
                      " with failed/all msgs ratio ",
                      "/",
                      " err=",
                      "",
                    ])),
                  n.length,
                  n.length,
                  e.length,
                  t,
                )
                .sendLogs("incoming-message-drop-db-operation-failed", {
                  sampling: 0.01,
                }),
              o(
                "WAWebPostIncomingMessageDropDBOperationFailedForMsgRows",
              ).postIncomingMessageDropDBOperationFailedForMsgRows(n))
            : o("WALogger").WARN(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "storeEncryptedDBMessages: all ",
                    " message(s) are already in the DB",
                  ])),
                e.length,
              );
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "storeEncryptedDBMessages: failed to post db error metrics: ",
                  "",
                ])),
              e,
            )
            .sendLogs("failed-to-post-db-error-metrics");
        });
    }
    function x(e) {
      if (!r("gkx")("26258")) {
        var t = [],
          n = function (n) {
            var e = new Set(),
              r = function (o, a) {
                Object.entries(o).forEach(function (n) {
                  var o = n[0],
                    i = n[1];
                  if (typeof i == "function") {
                    var l = [].concat(a, [o]).join(".");
                    t.length < 3 && t.push({ path: l, value: i });
                  } else if (i != null && typeof i == "object") {
                    if (e.has(i)) return;
                    (e.add(i), r(i, [].concat(a, [o])));
                  }
                });
              };
            r(n, []);
          };
        try {
          e.forEach(n);
        } catch (e) {
          o("WALogger").WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "storeEncryptedDBMessages: failed to log bad message properties: ",
                "",
              ])),
            e,
          );
        }
        t.length > 0 &&
          o("WALogger").WARN(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "[storeEncryptedDBMessages] ",
                " fn props can't clone: ",
                "",
              ])),
            t.length,
            t.map(function (e) {
              return "'" + e.path + "'=" + String(e.value);
            }),
          );
      }
    }
    async function $(e) {
      var t = e.chatWids,
        n = e.groupHistoryAnchor,
        r = n === void 0 ? null : n,
        a = e.internalIdPrefix,
        i =
          a === void 0 ? o("WAWebDBMessageUtils").InternalIdPrefix.Default : a,
        l = e.isHistory,
        s = e.messageTable,
        u = e.output;
      if (t.length === 0) return Promise.resolve();
      var c = i;
      await Promise.all(
        t.map(function (e) {
          if (
            !(
              i === o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus &&
              !e.isGroup()
            )
          ) {
            if (r != null && r.chatId.equals(e)) {
              u.set(P(e.toString(), c), r.anchorInChatMsgId);
              return;
            }
            var t = c + o("WAWebDBMessageUtils").beginningOfChat(e),
              n = c + o("WAWebDBMessageUtils").endOfChat(e);
            return s
              .between(["internalId"], t, n, {
                limit: 1,
                reverse: !l,
                returnKeyType: "keys",
              })
              .then(function (t) {
                var n = o(
                  "WAWebDBStoreMsgsUtils",
                ).INLINE_MESSAGE_STARTING_INDEX;
                (t.length > 0 &&
                  t[0] != null &&
                  (n = o("WAWebDBMessageUtils").getInChatMsgId(t[0])),
                  u.set(P(e.toString(), c), n));
              });
          }
        }),
      );
    }
    function P(e, t) {
      return (t === void 0 && (t = ""), t + e);
    }
    ((l.storeEncryptedDBMessages = I),
      (l.isEligibleForFallback = T),
      (l.buildLastInChatMsgIdMap = $));
  },
  98,
);
