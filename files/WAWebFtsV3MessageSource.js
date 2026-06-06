__d(
  "WAWebFtsV3MessageSource",
  [
    "WAAsyncSleep",
    "WALogger",
    "WANullthrows",
    "WAWebBotTypes",
    "WAWebCompactMapString",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebOrderStatusButton",
    "WAWebParseMsgKeyString",
    "WAWebProtobufsMdStorageMsgRowOpaqueData.pb",
    "WAWebRichResponse.flow",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getPlainTextFromUnifiedResponse",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Set([
        (s = o("WAWebMsgType")).MSG_TYPE.AUDIO,
        s.MSG_TYPE.CHAT,
        s.MSG_TYPE.DOCUMENT,
        s.MSG_TYPE.GROUPS_V4_INVITE,
        s.MSG_TYPE.HSM,
        s.MSG_TYPE.IMAGE,
        s.MSG_TYPE.INTERACTIVE,
        s.MSG_TYPE.INTERACTIVE_RESPONSE,
        s.MSG_TYPE.LIST,
        s.MSG_TYPE.LOCATION,
        s.MSG_TYPE.MULTI_VCARD,
        s.MSG_TYPE.ORDER,
        s.MSG_TYPE.PAYMENT,
        s.MSG_TYPE.POLL_CREATION,
        s.MSG_TYPE.POLL_RESULT_SNAPSHOT,
        s.MSG_TYPE.PRODUCT,
        s.MSG_TYPE.PTT,
        s.MSG_TYPE.RICH_RESPONSE,
        s.MSG_TYPE.STICKER,
        s.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
        s.MSG_TYPE.VCARD,
        s.MSG_TYPE.VIDEO,
        s.MSG_TYPE.EVENT_CREATION,
        s.MSG_TYPE.SHARABLE_EVENT_INVITE,
        s.MSG_TYPE.STICKER_PACK,
        s.MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
      ]),
      c = new Set([
        s.MSG_TYPE.LOCATION,
        s.MSG_TYPE.VIDEO,
        s.MSG_TYPE.PRODUCT,
        s.MSG_TYPE.ORDER,
        s.MSG_TYPE.IMAGE,
        s.MSG_TYPE.AUDIO,
        s.MSG_TYPE.RICH_RESPONSE,
      ]),
      d = new Set([s.MSG_TYPE.INTERACTIVE]),
      m = function (t) {
        return t.filter(Boolean);
      };
    function p(e) {
      if (!u.has(e.type) || e.isViewOnce === !0) return !1;
      var t = e.botEditType;
      return !(
        t === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        t === o("WAWebBotTypes").BotMsgEditType.INNER
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupMentions,
            n = e.mentionedJidList;
          if ((n == null || n.length === 0) && (t == null || t.length === 0))
            return null;
          var a = {};
          if (n != null && n.length > 0)
            for (
              var i = o(
                  "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
                ).getContactTable(),
                l = n.map(function (e) {
                  return e.user + "@" + e.server;
                }),
                s = yield i.bulkGet(l),
                u = 0;
              u < n.length;
              u++
            ) {
              var c = s[u];
              if (c != null) {
                var d = n[u].user;
                if (d != null) {
                  var m =
                    (c == null ? void 0 : c.name) ||
                    (c == null ? void 0 : c.verifiedName) ||
                    (c == null ? void 0 : c.pushname) ||
                    (c == null ? void 0 : c.shortName);
                  m != null && m !== "" && (a["@" + d] = "@" + m);
                }
              }
            }
          if (t != null && t.length > 0)
            for (var p of t) {
              var _ = p.groupJid,
                f = p.groupSubject;
              {
                if (f == null) continue;
                var g = _.user;
                g != null && (a["@" + g] = "@" + f);
              }
            }
          return r("isEmptyObject")(a) ? null : a;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a, i, l, s, u, m, f, g, h, y, C, b, v, S, R, L, E, k, I, T;
          if (t == null || !p(t)) return null;
          var D = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .postflightDecryptSingleRecord(t),
            x = r("WANullthrows")(r("WAWebParseMsgKeyString")(D.id)),
            $ = x.remote;
          if ($ === "status@broadcast") return null;
          var P = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
                .MsgRowOpaqueDataSpec,
              D.msgRowOpaqueData,
            ),
            N =
              (a = (i = P.currentMsg) == null ? void 0 : i.pollOptions) != null
                ? a
                : [],
            M =
              (l =
                (s = P.currentMsg) == null || (s = s.pollVotesSnapshot) == null
                  ? void 0
                  : s.pollVotes) != null
                ? l
                : [],
            w = [
              (u = P.currentMsg) == null ? void 0 : u.title,
              (m = P.currentMsg) == null ? void 0 : m.description,
              (f = P.currentMsg) == null ? void 0 : f.caption,
              (g = P.currentMsg) == null ? void 0 : g.vcardFormattedName,
              (h = P.currentMsg) == null || (h = h.list) == null
                ? void 0
                : h.title,
              (y = P.currentMsg) == null || (y = y.list) == null
                ? void 0
                : y.description,
              (C = P.currentMsg) == null ? void 0 : C.pollName,
              (b = P.currentMsg) == null ? void 0 : b.eventName,
              (v = P.currentMsg) == null ? void 0 : v.sharableEventInviteTitle,
              (S = P.currentMsg) == null
                ? void 0
                : S.sharableEventInviteCaption,
            ]
              .concat(
                N.map(function (e) {
                  return e.name;
                }),
                M.map(function (e) {
                  var t = e.option;
                  return t == null ? void 0 : t.name;
                }),
                [
                  D.vcardFormattedName,
                  D.message,
                  (R = D.list) == null ? void 0 : R.title,
                  (L = D.list) == null ? void 0 : L.description,
                  (E = D.interactiveHeader) == null ? void 0 : E.title,
                  (k = D.interactiveHeader) == null ? void 0 : k.subtitle,
                  D.filename,
                  D.stickerPackPublisher,
                ],
              )
              .filter(Boolean);
          if (
            (t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
              ((I = D.ctwaContext) == null ? void 0 : I.greetingMessageBody) !=
                null &&
              w.push(D.ctwaContext.greetingMessageBody),
            !c.has(t.type) &&
              (T = P.currentMsg) != null &&
              T.body &&
              w.push(P.currentMsg.body),
            d.has(t.type) && D.footer && w.push(D.footer),
            D.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              D.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS)
          ) {
            var A = o("WAWebOrderStatusButton").getOrderStatusButton(D);
            if (A != null) {
              var F, O;
              w.push.apply(
                w,
                [
                  A.reference_id,
                  A.order.status,
                  A.order.shipping_method,
                  (F = A.order.tracking) == null ? void 0 : F.courier_name,
                  (O = A.order.tracking) == null ? void 0 : O.tracking_ref,
                ].filter(Boolean),
              );
            }
          }
          if (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
            if (D.unifiedResponse != null) {
              var B = r("getPlainTextFromUnifiedResponse")(D.unifiedResponse);
              B !== "" && w.push(B);
            }
            if (D.richResponse != null) {
              var W = r("WAWebCompactMapString")(
                D.richResponse.fragments,
                function (e) {
                  return e.type ===
                    o("WAWebRichResponse.flow").RichResponseFragmentType.Text
                    ? e.text
                    : e.type ===
                        o("WAWebRichResponse.flow").RichResponseFragmentType
                          .Table
                      ? e.table
                          .map(function (e) {
                            return e.items.join(" ");
                          })
                          .join(" ")
                      : null;
                },
              );
              W.length > 0 && w.push(W.join("\n"));
            }
          }
          if (n)
            try {
              var q = yield _(D);
              if (q != null)
                for (var U = 0; U < w.length; U++) {
                  var V = w[U];
                  for (var H of Object.keys(q)) V = V.replaceAll(H, q[H]);
                  w[U] = V;
                }
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[fts] Failed to resolve @mention replacements: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("mention-search");
            }
          return w.length === 0
            ? null
            : {
                id: String(D.rowId),
                chatId: $,
                timestamp: D.t,
                textFragments: w,
              };
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (var n = [], r = 0; r < e.length; r++) {
            var a = yield g(e[r], t);
            (n.push(a),
              yield o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(
                r,
                100,
              ));
          }
          return n;
        })),
        C.apply(this, arguments)
      );
    }
    var b = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getBacklogged = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield o("WAWebSchemaFtsIndexingQueue")
              .getFtsIndexingQueueTable()
              .all({
                limit: e == null ? void 0 : e.limit,
                offset: e == null ? void 0 : e.offset,
              });
            if (t == null || t.length === 0) return null;
            var n = t.map(function (e) {
                return +e.id;
              }),
              r = new Set(n),
              a = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .anyOf(["rowId"], n, { shouldDecrypt: !1 }),
              i = yield y(a, this.$1),
              l = yield m(i);
            return (
              l.forEach(function (e) {
                var t = e.id;
                return r.delete(+t);
              }),
              yield this.removeFromBacklog(
                Array.from(r.values(), function (e) {
                  return "" + e;
                }),
              ),
              l
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.hasBacklogged = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebSchemaFtsIndexingQueue")
              .getFtsIndexingQueueTable()
              .count();
            return e > 0;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.removeFromBacklog = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            yield o("WAWebSchemaFtsIndexingQueue")
              .getFtsIndexingQueueTable()
              .bulkRemove(e);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.getAllAfterId = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = !1,
                r = yield o("WAWebSchemaMessage")
                  .getMessageTable()
                  .greaterThan(["rowId"], +e, {
                    limit: t == null ? void 0 : t.limit,
                    offset: t == null ? void 0 : t.offset,
                    shouldDecrypt: n,
                  });
              if (r.length === 0) return null;
              var a = yield y(r, this.$1);
              return m(a);
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.getAll = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = !1,
              n = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .all({
                  limit: e == null ? void 0 : e.limit,
                  offset: e == null ? void 0 : e.offset,
                  shouldDecrypt: t,
                });
            if (n.length === 0) return null;
            var r = yield y(n, this.$1);
            return m(r);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.size = function () {
          return o("WAWebSchemaMessage").getMessageTable().count();
        }),
        e
      );
    })();
    l.default = b;
  },
  98,
);
