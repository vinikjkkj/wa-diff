__d(
  "WAWebFtsV3MessageSource",
  [
    "WAAsyncSleep",
    "WALogger",
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
    "decodeProtobuf",
    "getPlainTextFromUnifiedResponse",
    "isEmptyObject",
    "nullthrows",
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
      d = new Set([s.MSG_TYPE.INTERACTIVE]);
    function m(e) {
      return e.filter(Boolean);
    }
    function p(e) {
      if (!u.has(e.type) || e.isViewOnce === !0) return !1;
      var t = e.botEditType;
      return !(
        t === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        t === o("WAWebBotTypes").BotMsgEditType.INNER
      );
    }
    async function _(e) {
      var t = e.groupMentions,
        n = e.mentionedJidList;
      if ((n == null || n.length === 0) && (t == null || t.length === 0))
        return null;
      var a = {};
      if (n != null && n.length > 0)
        for (
          var i = o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable(),
            l = n.map(function (e) {
              return e.user + "@" + e.server;
            }),
            s = await i.bulkGet(l),
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
    }
    async function f(t) {
      var n, a, i, l, s, u, m, f, g, h, y, C, b, v, S, R, L, E, k, I, T;
      if (t == null || !p(t)) return null;
      var D = await o("WAWebSchemaMessage")
          .getMessageTable()
          .postflightDecryptSingleRecord(t),
        x = r("nullthrows")(r("WAWebParseMsgKeyString")(D.id)),
        $ = x.remote;
      if ($ === "status@broadcast") return null;
      var P = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
          D.msgRowOpaqueData,
        ),
        N =
          (n = (a = P.currentMsg) == null ? void 0 : a.pollOptions) != null
            ? n
            : [],
        M =
          (i =
            (l = P.currentMsg) == null || (l = l.pollVotesSnapshot) == null
              ? void 0
              : l.pollVotes) != null
            ? i
            : [],
        w = [
          (s = P.currentMsg) == null ? void 0 : s.title,
          (u = P.currentMsg) == null ? void 0 : u.description,
          (m = P.currentMsg) == null ? void 0 : m.caption,
          (f = P.currentMsg) == null ? void 0 : f.vcardFormattedName,
          (g = P.currentMsg) == null || (g = g.list) == null ? void 0 : g.title,
          (h = P.currentMsg) == null || (h = h.list) == null
            ? void 0
            : h.description,
          (y = P.currentMsg) == null ? void 0 : y.pollName,
          (C = P.currentMsg) == null ? void 0 : C.eventName,
          (b = P.currentMsg) == null ? void 0 : b.sharableEventInviteTitle,
          (v = P.currentMsg) == null ? void 0 : v.sharableEventInviteCaption,
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
              (S = D.list) == null ? void 0 : S.title,
              (R = D.list) == null ? void 0 : R.description,
              (L = D.interactiveHeader) == null ? void 0 : L.title,
              (E = D.interactiveHeader) == null ? void 0 : E.subtitle,
              D.filename,
              D.stickerPackPublisher,
            ],
          )
          .filter(Boolean);
      (t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        ((k = D.ctwaContext) == null ? void 0 : k.greetingMessageBody) !=
          null &&
        w.push(D.ctwaContext.greetingMessageBody),
        !c.has(t.type) &&
          ((I = P.currentMsg) == null ? void 0 : I.body) != null &&
          P.currentMsg.body !== "" &&
          w.push(P.currentMsg.body),
        d.has(t.type) &&
          D.footer != null &&
          D.footer !== "" &&
          w.push(D.footer));
      var A = (T = D.bloksWidget) == null ? void 0 : T.fallback;
      if (
        (A != null && A !== "" && w.push(A),
        D.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          D.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS)
      ) {
        var F = o("WAWebOrderStatusButton").getOrderStatusButton(D);
        if (F != null) {
          var O, B;
          w.push.apply(
            w,
            [
              F.reference_id,
              F.order.status,
              F.order.shipping_method,
              (O = F.order.tracking) == null ? void 0 : O.courier_name,
              (B = F.order.tracking) == null ? void 0 : B.tracking_ref,
            ].filter(Boolean),
          );
        }
      }
      if (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE) {
        if (D.unifiedResponse != null) {
          var W = r("getPlainTextFromUnifiedResponse")(D.unifiedResponse);
          W !== "" && w.push(W);
        }
        if (D.richResponse != null) {
          var q = r("WAWebCompactMapString")(
            D.richResponse.fragments,
            function (e) {
              return e.type ===
                o("WAWebRichResponse.flow").RichResponseFragmentType.Text
                ? e.text
                : e.type ===
                    o("WAWebRichResponse.flow").RichResponseFragmentType.Table
                  ? e.table
                      .map(function (e) {
                        return e.items.join(" ");
                      })
                      .join(" ")
                  : null;
            },
          );
          q.length > 0 &&
            w.push(
              q.join(`
`),
            );
        }
      }
      try {
        var U = await _(D);
        if (U != null)
          for (var V = 0; V < w.length; V++) {
            var H = w[V];
            for (var G of Object.keys(U)) H = H.replaceAll(G, U[G]);
            w[V] = H;
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
        : { id: String(D.rowId), chatId: $, timestamp: D.t, textFragments: w };
    }
    async function g(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = await f(e[n]);
        (t.push(r),
          await o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(n, 100));
      }
      return t;
    }
    var h = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getBacklogged = async function (t) {
          var e = await o("WAWebSchemaFtsIndexingQueue")
            .getFtsIndexingQueueTable()
            .all({
              limit: t == null ? void 0 : t.limit,
              offset: t == null ? void 0 : t.offset,
            });
          if (e == null || e.length === 0) return null;
          var n = e.map(function (e) {
              return +e.id;
            }),
            r = new Set(n),
            a = await o("WAWebSchemaMessage")
              .getMessageTable()
              .anyOf(["rowId"], n, { shouldDecrypt: !1 }),
            i = await g(a),
            l = await m(i);
          return (
            l.forEach(function (e) {
              var t = e.id;
              return r.delete(+t);
            }),
            await this.removeFromBacklog(
              Array.from(r.values(), function (e) {
                return "" + e;
              }),
            ),
            l
          );
        }),
        (t.hasBacklogged = async function () {
          var e = await o("WAWebSchemaFtsIndexingQueue")
            .getFtsIndexingQueueTable()
            .count();
          return e > 0;
        }),
        (t.removeFromBacklog = async function (t) {
          await o("WAWebSchemaFtsIndexingQueue")
            .getFtsIndexingQueueTable()
            .bulkRemove(t);
        }),
        (t.getAllAfterId = async function (t, n) {
          var e = !1,
            r = await o("WAWebSchemaMessage")
              .getMessageTable()
              .greaterThan(["rowId"], +t, {
                limit: n == null ? void 0 : n.limit,
                offset: n == null ? void 0 : n.offset,
                shouldDecrypt: e,
              });
          if (r.length === 0) return null;
          var a = await g(r);
          return m(a);
        }),
        (t.getAll = async function (t) {
          var e = !1,
            n = await o("WAWebSchemaMessage")
              .getMessageTable()
              .all({
                limit: t == null ? void 0 : t.limit,
                offset: t == null ? void 0 : t.offset,
                shouldDecrypt: e,
              });
          if (n.length === 0) return null;
          var r = await g(n);
          return m(r);
        }),
        (t.size = function () {
          return o("WAWebSchemaMessage").getMessageTable().count();
        }),
        e
      );
    })();
    l.default = h;
  },
  98,
);
