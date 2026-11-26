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
        s.MSG_TYPE.MUSIC,
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
      var n, a, i, l, s, u, m, f, h, y, C, b, v, S, R, L, E, k, I, T, D;
      if (t == null || !p(t)) return null;
      var x = await o("WAWebSchemaMessage")
          .getMessageTable()
          .postflightDecryptSingleRecord(t),
        $ = r("nullthrows")(r("WAWebParseMsgKeyString")(x.id)),
        P = $.remote;
      if (P === "status@broadcast") return null;
      var N = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb").MsgRowOpaqueDataSpec,
          x.msgRowOpaqueData,
        ),
        M =
          (n = (a = N.currentMsg) == null ? void 0 : a.pollOptions) != null
            ? n
            : [],
        w =
          (i =
            (l = N.currentMsg) == null || (l = l.pollVotesSnapshot) == null
              ? void 0
              : l.pollVotes) != null
            ? i
            : [],
        A = [
          (s = N.currentMsg) == null ? void 0 : s.title,
          (u = N.currentMsg) == null ? void 0 : u.description,
          (m = N.currentMsg) == null ? void 0 : m.caption,
          (f = N.currentMsg) == null ? void 0 : f.vcardFormattedName,
          (h = N.currentMsg) == null || (h = h.list) == null ? void 0 : h.title,
          (y = N.currentMsg) == null || (y = y.list) == null
            ? void 0
            : y.description,
          (C = N.currentMsg) == null ? void 0 : C.pollName,
          (b = N.currentMsg) == null ? void 0 : b.eventName,
          (v = N.currentMsg) == null ? void 0 : v.sharableEventInviteTitle,
          (S = N.currentMsg) == null ? void 0 : S.sharableEventInviteCaption,
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
            g(t.type, N.currentMsg),
          )
          .filter(Boolean);
      (t.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        ((I = x.ctwaContext) == null ? void 0 : I.greetingMessageBody) !=
          null &&
        A.push(x.ctwaContext.greetingMessageBody),
        !c.has(t.type) &&
          ((T = N.currentMsg) == null ? void 0 : T.body) != null &&
          N.currentMsg.body !== "" &&
          A.push(N.currentMsg.body),
        d.has(t.type) &&
          x.footer != null &&
          x.footer !== "" &&
          A.push(x.footer));
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
                    o("WAWebRichResponse.flow").RichResponseFragmentType.Table
                  ? e.table
                      .map(function (e) {
                        return e.items.join(" ");
                      })
                      .join(" ")
                  : null;
            },
          );
          U.length > 0 &&
            A.push(
              U.join(`
`),
            );
        }
      }
      try {
        var V = await _(x);
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
        : { id: String(x.rowId), chatId: P, timestamp: x.t, textFragments: A };
    }
    function g(e, t) {
      var n, r;
      return e !== o("WAWebMsgType").MSG_TYPE.MUSIC
        ? []
        : [
            t == null || (n = t.musicData) == null ? void 0 : n.title,
            t == null || (r = t.musicData) == null ? void 0 : r.author,
          ];
    }
    async function h(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = await f(e[n]);
        (t.push(r),
          await o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(n, 100));
      }
      return t;
    }
    var y = (function () {
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
            i = await h(a),
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
          var a = await h(r);
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
          var r = await h(n);
          return m(r);
        }),
        (t.size = function () {
          return o("WAWebSchemaMessage").getMessageTable().count();
        }),
        e
      );
    })();
    l.default = y;
  },
  98,
);
