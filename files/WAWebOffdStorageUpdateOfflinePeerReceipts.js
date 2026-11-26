__d(
  "WAWebOffdStorageUpdateOfflinePeerReceipts",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebApiOrphanReceipt",
    "WAWebBackendApi",
    "WAWebDBBulkGetRootMsgs",
    "WAWebDBChatValidation",
    "WAWebDBMsgUtils",
    "WAWebDBReadReceiptOriginBindings",
    "WAWebHandleMsgReceiptCommon",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationKeyUtils",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMessageReceiptUtils",
    "WAWebMetaAiFileDocMsgId",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSchemaPeerReadReceipt",
    "WAWebStatusGatingUtils",
    "WAWebStorageCrashAnnotations",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "compactMap",
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
      E = 3,
      k = 16,
      I = 3,
      T = -1;
    async function D(t) {
      if (t.length === 0) return t;
      for (var n = [], r = [], a = new Map(), i = 0; i < t.length; i++) {
        var l = t[i];
        if (l.id != null) {
          var u = o("WAWebWidFactory").createWid(l.id);
          if (u != null) {
            if (!u.isRegularUser()) {
              n.push(l);
              continue;
            }
            var c = l.id;
            if (c != null) {
              r.push(c);
              var d = o("WAWebLidMigrationUtils").toLid(u);
              a.set(c, { chatUpdate: l, lid: d, chatWid: u });
            }
          }
        }
      }
      var m = [],
        p = 0,
        _ = [],
        f = 0;
      if (r.length > 0)
        for (
          var g = await o("WAWebSchemaChat").getChatTable().bulkGet(r), h = 0;
          h < r.length;
          h++
        ) {
          var y = r[h],
            C = g[h],
            b = a.get(y);
          if (b != null) {
            var v = b.chatUpdate,
              S = b.chatWid,
              R = b.lid;
            if (C != null) n.push(v);
            else if (R != null) {
              (p++,
                m.length < 3 &&
                  m.push(S.toLogString() + ", " + R.toLogString()));
              var L = babelHelpers.extends({}, v, { accountLid: R.toString() });
              (S.isLid() &&
                (L.lidOriginType =
                  o("WAWebUsernameTypes").LidOriginType.GENERAL),
                n.push(L));
            } else (f++, _.length < 3 && _.push(S.toLogString()));
          }
        }
      return (
        p > 0 &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "addAccountLidToUpdates: added account_lid to ",
                " chats => ",
                "",
              ])),
            p,
            m,
          ),
        f > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "addAccountLidToUpdates: no Lid for ",
                " chats => ",
                "",
              ])),
            f,
            _,
          ),
        n
      );
    }
    async function x() {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[init-from-storage] updatePeerReceipts start",
          ])),
      );
      var e = self.performance.now(),
        t = await $(await o("WAWebSchemaPeerReadReceipt").getTable().all());
      return o("WAWebSchemaPeerReadReceipt")
        .getTable()
        .clear()
        .then(function () {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] updatePeerReceipts: processed ",
                " peer receipt rows in ",
                "ms",
              ])),
            t,
            Math.round(self.performance.now() - e),
          );
        });
    }
    async function $(e) {
      var t = w(M(e));
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[init-from-storage] updatePeerReceipts: ",
            " peer receipt rows",
          ])),
        t.length,
      ),
        o("WAWebStorageCrashAnnotations").annotateCrashWithPeerReceiptRows(t));
      var n = self.performance.now();
      (await q(t),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[init-from-storage] updatePeerReceipts: chat lookup took ",
              "ms",
            ])),
          Math.round(self.performance.now() - n),
        ));
      var a = [],
        i = [],
        l = [],
        s = 0;
      (t.forEach(function (e) {
        e.ack === o("WAWebAck").ACK.READ
          ? a.push(e)
          : e.ack === o("WAWebAck").ACK.PLAYED
            ? i.push(e)
            : (s++, l.length < 3 && l.push(e.ack));
      }),
        s > 0 &&
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "updatePeerReceipts: ",
                " unknown ack types => ",
                "",
              ])),
            s,
            l,
          ));
      var u = await V(a),
        c = u.chatAckUpdates,
        f = u.chatIdsToKeepUnread,
        g = u.chatUpdates,
        h = u.msgIdsToRecheckBeforeAck,
        y = u.orphanMsgKeys,
        C = u.pendingReadSnapshots,
        b = u.statusAckUpdates,
        v = await O(a),
        S = c.concat(b, v),
        R = new Map(
          b.map(function (e) {
            return [e.id, e];
          }),
        ),
        L = new Map(
          S.map(function (e) {
            return [e.id, e];
          }),
        ),
        E = te(i);
      E.forEach(function (e) {
        var t = L.get(e.id);
        t == null
          ? L.set(e.id, e)
          : L.set(e.id, babelHelpers.extends({}, t, { ack: e.ack }));
      });
      var k = Array.from(L.values()),
        I = function (t) {
          return o("WAWebBackendApi").frontendFireAndForget(
            "updateOfflinePeerReceipt",
            {
              chatUpdates: P(g, f).map(function (e) {
                var t;
                return {
                  chatId: e.id,
                  unreadCount: e.unreadCount,
                  unreadMentionsOfMe:
                    (t = e.unreadMentionsOfMe) != null ? t : [],
                };
              }),
              ackUpdates: t.map(function (e) {
                var t = e.id;
                return (
                  R.has(e.id) &&
                    (t = o("WAWebLidStatusMigrationKeyUtils")
                      .matKeyConvert(r("WAWebMsgKey").fromString(t))
                      .toString()),
                  { msgKey: t, ack: e.ack }
                );
              }),
            },
          );
        };
      h.size === 0 && I(k);
      var T = await D(g);
      return (
        o("WALogger")
          .LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "updatePeerReceipts: bulkCreateOrMerge ",
                "",
              ])),
            T.slice(-15)
              .map(function (e) {
                return e.id;
              })
              .join(","),
          )
          .tags("missing-lid"),
        o("WAWebDBChatValidation").validateAccountLidInChatRows(
          T,
          "updatePeerReceipts",
        ),
        await Promise.all([
          o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message", "chat"], async function (e) {
              var t = e[0],
                n = e[1],
                r = await N(t, k, h);
              return (
                await Promise.all([
                  t.bulkCreateOrMerge(await U(t, r, C)),
                  n.bulkCreateOrMerge(P(T, f)),
                ]),
                r
              );
            })
            .then(function (e) {
              h.size > 0 && I(e);
            }),
          o("WAWebMarkAddOnsAsReadJob")
            .markUnclassifiedAddOnsAsReadJob(
              Array.from(ee(a), function (e) {
                return r("WAWebMsgKey").from(e);
              }),
            )
            .then(function (e) {
              var t = e.updatedAddOns,
                n = e.updatedOrphans;
              return H(
                y,
                new Set(
                  [].concat(n, Array.from(t.values()).flat()).map(String),
                ),
                a,
              );
            }),
        ]),
        t.length
      );
    }
    function P(e, t) {
      return t.size === 0
        ? e
        : e.map(function (e) {
            return e.unreadCount === 0 && t.has(String(e.id))
              ? babelHelpers.extends({}, e, { unreadCount: T })
              : e;
          });
    }
    async function N(e, t, n) {
      var a = t.filter(function (e) {
        return n.has(e.id);
      });
      if (a.length === 0) return t;
      var i = await e.bulkGet(
          a.map(function (e) {
            return e.id;
          }),
          !1,
        ),
        l = new Set(
          r("compactMap")(a, function (e, t) {
            var n,
              r = i[t];
            return r == null ||
              r.pendingReadReceipt != null ||
              ((n = r.ack) != null ? n : o("WAWebAck").ACK.CLOCK) >= e.ack
              ? e.id
              : null;
          }),
        );
      return t.filter(function (e) {
        return !l.has(e.id);
      });
    }
    function M(e) {
      var t = 0,
        n = e.map(function (e) {
          var n = e.msgKeys.filter(function (e) {
            return !o("WAWebMetaAiFileDocMsgId").isMetaAiFileDocMsgKeyString(e);
          });
          return (
            (t += e.msgKeys.length - n.length),
            babelHelpers.extends({}, e, { msgKeys: n })
          );
        });
      return (
        t > 0 &&
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped ",
                  " Meta AI file doc msg keys",
                ])),
              t,
            )
            .sendLogs("update-peer-receipts-meta-ai-file-doc-msg-key"),
        n
      );
    }
    function w(e) {
      var t = [],
        n = e.map(function (e) {
          var n = e.msgKeys.filter(function (e) {
            return F(e) ? !0 : (t.push(e), !1);
          });
          return babelHelpers.extends({}, e, { msgKeys: n });
        });
      return (
        t.length > 0 &&
          (r("gkx")("9092") &&
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped msg ids starting ",
                  "",
                ])),
              t.slice(0, E).map(A).join(","),
            ),
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "updatePeerReceipts: dropped ",
                  " unparsable msg keys",
                ])),
              t.length,
            )
            .sendLogs("update-peer-receipts-unparsable-msg-key")),
        n
      );
    }
    function A(e) {
      return e
        .split("_")
        .slice(2)
        .filter(function (e) {
          return !e.includes("@");
        })
        .join("_")
        .slice(0, k);
    }
    function F(e) {
      try {
        return (r("WAWebMsgKey").fromString(e), !0);
      } catch (e) {
        return !1;
      }
    }
    async function O(e) {
      var t = r("compactMap")(e, function (e) {
          var t = e.msgKeys,
            n = e.ts;
          return n != null ? { msgKeys: t, ts: n } : null;
        }),
        n = t.flatMap(function (e) {
          var t = e.msgKeys;
          return t.filter(W);
        });
      if (n.length === 0) return [];
      var a = await Promise.all([
          o("WAWebSchemaMessage").getMessageTable().bulkGet(n, !1),
          o(
            "WAWebMessageReceiptUtils",
          ).getMyUnreadStatusKeysReadByMyOtherDevice(n),
        ]),
        i = a[0],
        l = a[1],
        s = [].concat(
          o("WAWebMessageReceiptUtils").getUnreadStatusKeysFromOthers(
            r("compactMap")(i, function (e) {
              return e != null &&
                o("WAWebMessageReceiptUtils").isGroupOrChannelStatusRow(e)
                ? e
                : null;
            }),
          ),
          l,
        );
      return s.length === 0 ||
        !o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled()
        ? []
        : (await Promise.all(
            t.map(function (e) {
              var t = e.msgKeys,
                n = e.ts,
                a = s.filter(function (e) {
                  return B(e, t);
                });
              if (a.length !== 0)
                return o("WAWebMessageReceiptUtils")
                  .markStatusesReadFromPeer(a, n)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "updatePeerReceipts: failed to mark statuses read",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("update-peer-receipts-mark-statuses-fail");
                  });
            }),
          ),
          s.map(function (e) {
            return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
          }));
    }
    function B(e, t) {
      return t.some(function (t) {
        var n = r("WAWebMsgKey").fromString(t),
          o = n.id,
          a = n.remote;
        return o === e.id && a.equals(e.remote);
      });
    }
    function W(e) {
      var t = r("WAWebMsgKey").fromString(e),
        n = t.fromMe,
        o = t.remote;
      return !n && (o.isGroup() || o.isNewsletter());
    }
    async function q(e) {
      if (!r("gkx")("5598")) {
        await Promise.all(
          e.map(async function (e) {
            e.msgKeys = await o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithChatId(
              e.msgKeys,
            );
          }),
        );
        return;
      }
      var t = await o("WAWebDBBulkGetRootMsgs").fixMsgKeysWithChatId(
          e.flatMap(function (e) {
            return e.msgKeys;
          }),
        ),
        n = 0;
      for (var a of e) {
        var i = n + a.msgKeys.length;
        ((a.msgKeys = t.slice(n, i)), (n = i));
      }
    }
    async function U(e, t, n) {
      var r = t
        .filter(function (e) {
          return e.pendingReadReceipt == null;
        })
        .map(function (e) {
          return e.id;
        })
        .filter(function (e) {
          return n.has(e);
        });
      if (r.length === 0) return t;
      var a = await e.bulkGet(r, !1),
        i = new Set(
          r.filter(function (e, t) {
            var r = a[t];
            return (
              r != null &&
              !o(
                "WAWebDBReadReceiptOriginBindings",
              ).isPendingReadReceiptTargetUnchanged(r, n.get(e))
            );
          }),
        );
      return t.map(function (e) {
        return i.has(e.id) ? { id: e.id, ack: e.ack } : e;
      });
    }
    async function V(e) {
      o("WALogger").LOG(
        C ||
          (C = babelHelpers.taggedTemplateLiteralLoose([
            "getUpdatesForPeerReadReceipts",
          ])),
      );
      var t = ee(e),
        n = await y(e),
        a = Array.from(n.keys()),
        i = a.reduce(function (e, t) {
          return (
            e.push([t, o("WAWebDBMsgUtils").PendingReadReceiptType.Message]),
            e.push([
              t,
              o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit,
            ]),
            e
          );
        }, []),
        l = await o("WAWebSchemaMessage")
          .getMessageTable()
          .anyOf(["from", "pendingReadReceipt"], i, { shouldDecrypt: !1 }),
        s = await h(),
        u = s.msgsWithReadReceipts,
        c = s.orphanMsgKeys,
        d = r("gkx")("26"),
        m =
          d && u != null
            ? u.filter(function (e) {
                return !z(e.from);
              })
            : null;
      ((m == null
        ? l
        : m.concat(
            l.filter(function (e) {
              return z(e.from);
            }),
          )
      ).forEach(function (e) {
        return v(n.get(e.from), e);
      }),
        l.forEach(function (e) {
          return S(n.get(e.from), e);
        }));
      var p = Q(m != null ? m : [], l),
        _ = R().concat(p),
        f = await Z(t),
        g = r("compactMap")(a, function (e) {
          var t = n.get(e);
          return t != null && t.lastUnreadMsgRowId != null
            ? {
                id: e,
                unreadCount: t.unreadCount,
                unreadMentionsOfMe: t.unreadMentionsOfMe,
              }
            : null;
        });
      return (
        X(t, n, l),
        {
          chatIdsToKeepUnread: d
            ? await j(g, u != null ? u : l.filter(E))
            : new Set(),
          chatUpdates: g,
          chatAckUpdates: _,
          msgIdsToRecheckBeforeAck: new Set(
            p.map(function (e) {
              return e.id;
            }),
          ),
          orphanMsgKeys: c,
          pendingReadSnapshots: new Map(
            l.map(function (e) {
              return [e.id, e];
            }),
          ),
          statusAckUpdates: f,
        }
      );
      async function h() {
        var e = Array.from(t).filter(function (e) {
          return n.has(J(e));
        });
        if (e.length === 0)
          return { msgsWithReadReceipts: [], orphanMsgKeys: [] };
        var a;
        try {
          a = await o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(e);
        } catch (e) {
          return (
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePeerReceipts: failed to look up msgs with read receipts",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("update-peer-receipts-orphan-lookup-fail"),
            { msgsWithReadReceipts: null, orphanMsgKeys: [] }
          );
        }
        var i = new Map();
        return (
          a.forEach(function (e) {
            e != null &&
              n.has(e.from) &&
              !o("WAWebMessageReceiptUtils").isGroupOrChannelStatusRow(e) &&
              i.set(e.id, e);
          }),
          {
            msgsWithReadReceipts: Array.from(i.values()),
            orphanMsgKeys: e.filter(function (e, t) {
              return a[t] == null;
            }),
          }
        );
      }
      async function y(e) {
        return new Map(
          e
            .flatMap(function (e) {
              return e.msgKeys;
            })
            .map(J)
            .filter(function (e) {
              return e !== o("WAJids").STATUS_JID;
            })
            .map(function (e) {
              return [
                e,
                {
                  unreadCount: 0,
                  lastUnreadMsgRowId: void 0,
                  unreadMentionsOfMe: [],
                  unreadMentionCount: 0,
                },
              ];
            }),
        );
      }
      function v(e, t) {
        var n = t.rowId;
        e == null ||
          n == null ||
          (E(t) &&
            (e.lastUnreadMsgRowId == null || n > e.lastUnreadMsgRowId) &&
            (e.lastUnreadMsgRowId = n));
      }
      function S(e, t) {
        var n = t.rowId;
        if (
          !(e == null || n == null || e.lastUnreadMsgRowId == null) &&
          n > e.lastUnreadMsgRowId &&
          t.ack !== o("WAWebAck").ACK.READ &&
          ((e.unreadCount += 1), o("WAWebMsgGetters").getIsImportantMessage(t))
        ) {
          var r = { id: t.id, timestamp: t.t };
          e.unreadMentionsOfMe.push(r);
        }
      }
      function R() {
        return r("compactMap")(l, function (e) {
          var t = e.rowId,
            r = n.get(e.from);
          return r == null || t == null || r.lastUnreadMsgRowId == null
            ? null
            : t <= r.lastUnreadMsgRowId
              ? e.pendingReadReceipt ===
                  o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit &&
                !L(e)
                ? null
                : {
                    id: e.id,
                    ack: o("WAWebAck").ACK.READ,
                    pendingReadReceipt: null,
                    pendingReadReceiptOrigin: null,
                  }
              : null;
        });
      }
      function L(e) {
        return e.latestEditMsgKey != null && t.has(e.latestEditMsgKey);
      }
      function E(e) {
        return t.has(e.id) || L(e);
      }
    }
    function H(e, t, n) {
      var a = e.filter(function (e) {
        return !t.has(e);
      });
      if (a.length === 0) return Promise.resolve();
      o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "updatePeerReceipts: storing ",
            " orphan acks",
          ])),
        a.length,
      );
      var i = G(n),
        l = new Map();
      return (
        a.forEach(function (e) {
          var t,
            n,
            r = (t = i.get(e)) != null ? t : o("WATimeUtils").unixTime(),
            a = (n = l.get(r)) != null ? n : [];
          (a.push(e), l.set(r, a));
        }),
        Promise.all(
          Array.from(l, function (e) {
            var t = e[0],
              n = e[1];
            return o("WAWebApiOrphanReceipt").createOrUpdateOrphanReceipt(
              o("WAWebAck").ACK_STRING.READ,
              t,
              n,
            );
          }),
        )
          .then(r("WAWebNoop"))
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "updatePeerReceipts: failed to store orphan acks",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("update-peer-receipts-store-orphan-fail");
          })
      );
    }
    function G(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.msgKeys,
            r = e.ts;
          r != null &&
            n.forEach(function (e) {
              var n = t.get(e);
              (n == null || r < n) && t.set(e, r);
            });
        }),
        t
      );
    }
    function z(e) {
      return o("WAWebWidFactory").createWid(e).isNewsletter();
    }
    async function j(e, t) {
      var n = new Map();
      t.forEach(function (e) {
        var t,
          r = (t = n.get(e.from)) != null ? t : [];
        (r.push(e), n.set(e.from, r));
      });
      var a = r("compactMap")(e, function (e) {
          return e.unreadCount === 0 ? String(e.id) : null;
        }),
        i = await Promise.all(
          a.map(function (e) {
            var t;
            return o("WAWebHandleMsgReceiptCommon")
              .shouldMarkChatRead(e, (t = n.get(e)) != null ? t : [])
              .catch(function (e) {
                return (
                  o("WALogger")
                    .WARN(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "updatePeerReceipts: failed to read mark-as-unread ranges",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  !0
                );
              });
          }),
        );
      return new Set(
        a.filter(function (e, t) {
          return !i[t];
        }),
      );
    }
    function K(e) {
      return e.ack == null || e.ack < o("WAWebAck").ACK.READ;
    }
    function Q(e, t) {
      var n = new Set(
        t.map(function (e) {
          return e.id;
        }),
      );
      return r("compactMap")(e, function (e) {
        return !n.has(e.id) && K(e)
          ? { id: e.id, ack: o("WAWebAck").ACK.READ }
          : null;
      });
    }
    function X(e, t, n) {
      var r = Array.from(t)
        .filter(function (e) {
          var t = e[1];
          return t.lastUnreadMsgRowId == null;
        })
        .map(function (e) {
          var t = e[0];
          return t;
        });
      if (r.length !== 0) {
        var a = Y(Array.from(e, J)),
          i = Y(
            n.map(function (e) {
              return e.from;
            }),
          ),
          l = r.slice(0, I).map(function (e) {
            var t, n, r, l;
            return (
              ((t =
                (n = o("WAWebWidFactory").createWid(e)) == null
                  ? void 0
                  : n.toLogString()) != null
                ? t
                : "invalid") +
              " (receipt msgs: " +
              ((r = a.get(e)) != null ? r : 0) +
              ", pending msgs: " +
              ((l = i.get(e)) != null ? l : 0) +
              ")"
            );
          });
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "updatePeerReceipts: no pending msg matched read receipts for ",
              " chats => ",
              "",
            ])),
          r.length,
          l.join(", "),
        );
      }
    }
    function Y(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n;
          return t.set(e, ((n = t.get(e)) != null ? n : 0) + 1);
        }),
        t
      );
    }
    function J(e) {
      return r("WAWebMsgKey").fromString(e).remote.toString();
    }
    async function Z(e) {
      var t = Array.from(e)
          .filter(function (e) {
            return J(e) === o("WAJids").STATUS_JID;
          })
          .map(function (e) {
            return r("WAWebMsgKey").fromString(e);
          }),
        n = await o("WAWebMessageReceiptUtils").fixStatusReceiptKeys(t);
      return n.map(function (e) {
        return { id: e.toString(), ack: o("WAWebAck").ACK.READ };
      });
    }
    function ee(e) {
      return new Set(
        e.flatMap(function (e) {
          return e.msgKeys;
        }),
      );
    }
    function te(e) {
      var t = new Set();
      return (
        e.forEach(function (e) {
          e.ack === o("WAWebAck").ACK.PLAYED &&
            e.msgKeys.forEach(function (e) {
              return t.add(e);
            });
        }),
        Array.from(t, function (e) {
          return {
            id: e,
            ack: o("WAWebAck").ACK.PLAYED,
            pendingReadReceipt: null,
            pendingReadReceiptOrigin: null,
          };
        })
      );
    }
    ((l.addAccountLidToUpdates = D),
      (l.updatePeerReceipts = x),
      (l.getStatusMsgAckUpdates = Z));
  },
  98,
);
