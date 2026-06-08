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
          var a, i, l, s, u, m, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D;
          if (t == null || !p(t)) return null;
          var x = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .postflightDecryptSingleRecord(t),
            $ = r("WANullthrows")(r("WAWebParseMsgKeyString")(x.id)),
            P = $.remote;
          if (P === "status@broadcast") return null;
          var N = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
                .MsgRowOpaqueDataSpec,
              x.msgRowOpaqueData,
            ),
            M =
              (a = (i = N.currentMsg) == null ? void 0 : i.pollOptions) != null
                ? a
                : [],
            w =
              (l =
                (s = N.currentMsg) == null || (s = s.pollVotesSnapshot) == null
                  ? void 0
                  : s.pollVotes) != null
                ? l
                : [],
            A = [
              (u = N.currentMsg) == null ? void 0 : u.title,
              (m = N.currentMsg) == null ? void 0 : m.description,
              (f = N.currentMsg) == null ? void 0 : f.caption,
              (g = N.currentMsg) == null ? void 0 : g.vcardFormattedName,
              (h = N.currentMsg) == null || (h = h.list) == null
                ? void 0
                : h.title,
              (y = N.currentMsg) == null || (y = y.list) == null
                ? void 0
                : y.description,
              (C = N.currentMsg) == null ? void 0 : C.pollName,
              (b = N.currentMsg) == null ? void 0 : b.eventName,
              (v = N.currentMsg) == null ? void 0 : v.sharableEventInviteTitle,
              (S = N.currentMsg) == null
                ? void 0
                : S.sharableEventInviteCaption,
            ]
              .concat(
                M.map(function (e) {
                  return e.name;
                }),
                w.map(function (e) {
                  var t = e.option;
                  return t == null ? void 0 : t.name;
                }),
                [
                  x.vcardFormattedName,
                  x.message,
                  (R = x.list) == null ? void 0 : R.title,
                  (L = x.list) == null ? void 0 : L.description,
                  (E = x.interactiveHeader) == null ? void 0 : E.title,
                  (k = x.interactiveHeader) == null ? void 0 : k.subtitle,
                  x.filename,
                  x.stickerPackPublisher,
                ],
              )
              .filter(Boolean);
          (t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
            ((I = x.ctwaContext) == null ? void 0 : I.greetingMessageBody) !=
              null &&
            A.push(x.ctwaContext.greetingMessageBody),
            !c.has(t.type) &&
              (T = N.currentMsg) != null &&
              T.body &&
              A.push(N.currentMsg.body),
            d.has(t.type) && x.footer && A.push(x.footer));
          var F = (D = x.bloksWidget) == null ? void 0 : D.fallback;
          if (
            (F != null && F !== "" && A.push(F),
            x.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              x.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS)
          ) {
            var O = o("WAWebOrderStatusButton").getOrderStatusButton(x);
            if (O != null) {
              var B, W;
              A.push.apply(
                A,
                [
                  O.reference_id,
                  O.order.status,
                  O.order.shipping_method,
                  (B = O.order.tracking) == null ? void 0 : B.courier_name,
                  (W = O.order.tracking) == null ? void 0 : W.tracking_ref,
                ].filter(Boolean),
              );
            }
          }
          if (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
            if (x.unifiedResponse != null) {
              var q = r("getPlainTextFromUnifiedResponse")(x.unifiedResponse);
              q !== "" && A.push(q);
            }
            if (x.richResponse != null) {
              var U = r("WAWebCompactMapString")(
                x.richResponse.fragments,
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
              U.length > 0 && A.push(U.join("\n"));
            }
          }
          if (n)
            try {
              var V = yield _(x);
              if (V != null)
                for (var H = 0; H < A.length; H++) {
                  var G = A[H];
                  for (var z of Object.keys(V)) G = G.replaceAll(z, V[z]);
                  A[H] = G;
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
          return A.length === 0
            ? null
            : {
                id: String(x.rowId),
                chatId: P,
                timestamp: x.t,
                textFragments: A,
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
