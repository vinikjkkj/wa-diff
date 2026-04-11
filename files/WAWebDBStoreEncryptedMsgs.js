__d(
  "WAWebDBStoreEncryptedMsgs",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      E,
      k = (e = n("cr:375")) != null ? e : {},
      I = k.ftsLightClient;
    function T(e, t, a, i, l) {
      return (
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["message", "message-association"],
            (function () {
              var y = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (y) {
                  a &&
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "storeEncryptedDBMessages: storing ",
                          " messages: lock acquired",
                        ])),
                      e.length,
                    );
                  var C = y[0],
                    b = y[1],
                    v = e;
                  if (i) {
                    var S = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(
                      e.map(function (e) {
                        var t = e[0];
                        return t.id.toString();
                      }),
                    );
                    if (
                      ((v = e.filter(function (e, t) {
                        return !S[t];
                      })),
                      o("WALogger").WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[storeEncryptedDBMessages] fallback ",
                            "/",
                            " msgs",
                          ])),
                        v.length,
                        e.length,
                      ),
                      v.length === 0)
                    )
                      return;
                  }
                  var R = yield o("WAWebDBStoreMsgsUtils").getLastRowId(C, a);
                  a &&
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "storeEncryptedDBMessages: storing ",
                          " messages: got last row id ",
                          "",
                        ])),
                      e.length,
                      R,
                    );
                  var L = t.map(function (e) {
                      return o("WAWebWidFactory").createWid(e);
                    }),
                    E = new Map();
                  (yield P(
                    L,
                    a,
                    C,
                    E,
                    o("WAWebDBMessageUtils").InternalIdPrefix.Default,
                    l,
                  ),
                    a &&
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "storeEncryptedDBMessages: storing ",
                            " messages: chat map built",
                          ])),
                        e.length,
                      ),
                    v.some(function (e) {
                      var t = e[0],
                        n = e[1];
                      return t.isGroupStatus === !0;
                    }) &&
                      (yield P(
                        L.filter(function (e) {
                          return e.isGroup();
                        }),
                        a,
                        C,
                        E,
                        o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus,
                        l,
                      ),
                      a &&
                        o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[storeEncryptedDBMessages] ",
                              " msgs: group status map built",
                            ])),
                          e.length,
                        )));
                  var k = l != null,
                    I = a ? -1 : 1,
                    T = a || k ? -1 : 1,
                    N = [],
                    w = (yield o("WAPromiseMap").promiseMap(
                      v,
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, t) {
                            var n = e[0],
                              i = e[1];
                            a && (n.isMdHistoryMsg = !0);
                            var l = r("WAWebMsgKey").fromString(n.id),
                              s = l.remote.toString(),
                              u = R + I * (t + 1),
                              c = M(
                                s,
                                o("WAWebDBMessageUtils").getPrefixForInternalId(
                                  n,
                                ),
                              ),
                              d = E.get(c);
                            if (d == null || Number.isNaN(d)) {
                              N.length < 3 &&
                                N.push({
                                  error: d == null ? "null" : "nan",
                                  msgType: n.type,
                                  msgSubtype: n.subtype,
                                  mapKey: c,
                                });
                              return;
                            }
                            var m = d + T * 1;
                            E.set(c, m);
                            var p =
                                !a &&
                                o("WAWebDBStoreMessage").isPendingUnreadReceipt(
                                  l,
                                  n,
                                ),
                              _ = o(
                                "WAWebDBStoreMessage",
                              ).addMsgMetadataToMsgRow({
                                msg: n,
                                chatId: s,
                                hasLink: i,
                                rowId: u,
                                inChatMsgId: m,
                                pendingReadReceipt: p,
                              });
                            return _;
                          },
                        );
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    )).filter(Boolean);
                  if (N.length > 0) {
                    var A = a ? "history-sync-" : "",
                      F = N.map(function (e) {
                        return e.error;
                      }),
                      O = F.includes("null"),
                      B = F.includes("nan"),
                      W = "nan";
                    (O && B ? (W = "null-and-nan") : O && (W = "null"),
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
                            A +
                            W +
                            "-error-check-lastinchatmsgidmap-lastChatMsgId",
                        ));
                  }
                  a &&
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[storeEncryptedDBMessages] ",
                          " msgs: ",
                          " hydrated",
                        ])),
                      e.length,
                      w.length,
                    );
                  try {
                    (o(
                      "WAWebMessageAssociationGatingUtils",
                    ).isMessageAssociationInfraEnabled() &&
                      (yield o(
                        "WAWebDBStoreMessageAssociations",
                      ).bulkStoreMessageAssociations(w, !0),
                      a &&
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "storeEncryptedDBMessages: storing ",
                              " messages: associations stored",
                            ])),
                          e.length,
                        )),
                      yield C.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(
                        w,
                        !!a,
                      ),
                      a &&
                        o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "storeEncryptedDBMessages: storing ",
                              " messages: stored",
                            ])),
                          e.length,
                        ));
                  } catch (t) {
                    var q = r("getErrorSafe")(t);
                    if (a && q instanceof r("WAWeb-dexie").BulkError)
                      (o("WALogger").ERROR(
                        h ||
                          (h = babelHelpers.taggedTemplateLiteralLoose([
                            "[storeEncryptedDBMessages] BulkError, retrying bulkCreateOrReplace",
                          ])),
                      ),
                        yield C.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(
                          w,
                        ));
                    else throw ((i || !D(e.length, q)) && (x(w, q), $(w)), q);
                  }
                  return w;
                },
              );
              return function (e) {
                return y.apply(this, arguments);
              };
            })(),
          )
          .then(function (t) {
            t &&
              t.length > 0 &&
              r("WAWeb-dexie").ignoreTransaction(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  (a &&
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
                    yield I == null
                      ? void 0
                      : I.addToIndexingTable(
                          r("compactMap")(t, function (e) {
                            return e.rowId != null ? String(e.rowId) : null;
                          }),
                        ),
                    a &&
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
                    I == null || I.index().catch(r("WAWebNoop")));
                }),
              );
          })
      );
    }
    function D(e, t) {
      return e > 1 && t instanceof r("WAWeb-dexie").BulkError;
    }
    function x(e, t) {
      r("WAWeb-dexie")
        .ignoreTransaction(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = e;
            if (t instanceof r("WAWeb-dexie").BulkError) {
              var a = e.map(function (e) {
                  var t = e.id;
                  return t.toString();
                }),
                i = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(a);
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
          }),
        )
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
    function $(e) {
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
    function P(e, t, n, r, o, a) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i, l) {
            if (
              (i === void 0 &&
                (i = o("WAWebDBMessageUtils").InternalIdPrefix.Default),
              l === void 0 && (l = null),
              e.length === 0)
            )
              return (E || (E = n("Promise"))).resolve();
            var s = i;
            yield (E || (E = n("Promise"))).all(
              e.map(function (e) {
                if (
                  !(
                    i ===
                      o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus &&
                    !e.isGroup()
                  )
                ) {
                  if (l != null && l.chatId.equals(e)) {
                    a.set(M(e.toString(), s), l.anchorInChatMsgId);
                    return;
                  }
                  var n = s + o("WAWebDBMessageUtils").beginningOfChat(e),
                    u = s + o("WAWebDBMessageUtils").endOfChat(e);
                  return r
                    .between(["internalId"], n, u, {
                      limit: 1,
                      reverse: !t,
                      returnKeyType: "keys",
                    })
                    .then(function (t) {
                      var n = o(
                        "WAWebDBStoreMsgsUtils",
                      ).INLINE_MESSAGE_STARTING_INDEX;
                      (t.length > 0 &&
                        t[0] != null &&
                        (n = o("WAWebDBMessageUtils").getInChatMsgId(t[0])),
                        a.set(M(e.toString(), s), n));
                    });
                }
              }),
            );
          },
        )),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return (t === void 0 && (t = ""), t + e);
    }
    ((l.storeEncryptedDBMessages = T),
      (l.isEligibleForFallback = D),
      (l.buildLastInChatMsgIdMap = P));
  },
  98,
);
