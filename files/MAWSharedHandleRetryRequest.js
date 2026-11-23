__d(
  "MAWSharedHandleRetryRequest",
  [
    "MAWConstants",
    "QPLFlow",
    "WACryptoManager",
    "WACryptoUtils",
    "WAGenReportingMeta",
    "WAGlobals",
    "WAJids",
    "WALoadReceiptApi",
    "WALogger",
    "WAMarkParticipantNeedsKeyApi",
    "WASentBytesCache",
    "WAWap",
    "WAWriteMsgRetryApi",
    "WAWriteMsgRetryCountApi",
    "qpl",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = r("requireDeferred")("WASendMsgInternal").__setRef(
        "MAWSharedHandleRetryRequest",
      );
    function h() {
      var e = 0,
        t = 0,
        n = new Map();
      return {
        getMetrics: function () {
          var r, o, a, i;
          return {
            msgMissing: (r = n.get("msgmissing")) != null ? r : 0,
            msgUnauthorized: (o = n.get("msgunauthorized")) != null ? o : 0,
            msgUnsupported: (a = n.get("msgunsupported")) != null ? a : 0,
            peerAppDataUnsupported:
              (i = n.get("peer_appdata_unsupported")) != null ? i : 0,
            receiptFailures: t,
            receiptSuccesses: e,
          };
        },
        markError: function () {
          return t++;
        },
        markSuccess: function () {
          return e++;
        },
        setError: function (t) {
          var e = n.get(t);
          e != null ? n.set(t, e + 1) : n.set(t, 1);
        },
      };
    }
    function y(e, t) {
      return t + "_" + e;
    }
    async function C(t) {
      if (t.length === 0) return [];
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "bulkHandleRetryRequest called for ",
            "",
          ])),
        t
          .map(function (e) {
            var t = e.externalId;
            return t;
          })
          .join(","),
      );
      var n = o("QPLFlow").startQPLFlow(r("qpl")._(25308942, "164"), {
          annotations: {
            bool: { bulk: !0 },
            int: { receipts: t.length },
            string: { origin: self.location.origin },
          },
        }),
        a = new Set(
          t
            .filter(function (e) {
              return e.category != null || E(e);
            })
            .map(function (e) {
              return e.externalId;
            }),
        ),
        i = t.filter(function (e) {
          return !a.has(e.externalId);
        }),
        l = await v(i);
      n.addPoint("get_msg_for_retry_complete");
      var u = [],
        c = h();
      for (var d of t) {
        var m = l.get(y(d.from.author, d.externalId));
        (a.has(d.externalId)
          ? (n.addPoint("just_ack"),
            c.markError(),
            c.setError(L(d) ? "peer_appdata_unsupported" : "just_ack"),
            k(d))
          : m != null
            ? (n.addPoint("msg_for_retry"),
              await I(d, m, n, !1, c),
              n.addPoint("msg_for_retry_complete"))
            : (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "bulkHandleRetryRequest unexpected receipt",
                  ])),
              ),
              c.markError(),
              c.setError("unexpected_receipt")),
          u.push(R(d)));
      }
      return (
        n.endSuccess({ int: babelHelpers.extends({}, c.getMetrics()) }),
        u
      );
    }
    function b(e) {
      return e.map(function (e) {
        var t = e.externalId,
          n = e.from,
          r = e.recipient,
          a = n.chat;
        if (
          n.type === "device" &&
          o("WAJids").extractUserJid(n.author) ===
            o("WAJids").extractUserJid(o("WAGlobals").getMyDeviceJid())
        ) {
          if (r == null) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Received retry request from peer without recipient set",
                ])),
            );
            return;
          }
          a = r;
        }
        var i = { author: "@me", chat: a, externalId: t };
        return {
          deviceJid: n.author,
          protocolMsgId: i,
          retryCount: e.retryCount,
        };
      });
    }
    async function v(e) {
      if (e.length === 0) return new Map();
      var t = b(e),
        n = e.filter(function (e, n) {
          return t[n] != null;
        }),
        r = t.filter(Boolean),
        a = await o("WASentBytesCache").sentBytesCache().getMsgsForRetry(r),
        i = new Map(
          a.map(function (e, t) {
            return [
              y(r[t].deviceJid, n[t].externalId),
              { msgForRetry: e, retryRequest: r[t] },
            ];
          }),
        );
      return i;
    }
    async function S(e, t) {
      var n = void 0,
        r = await o("WAGlobals")
          .getWaOneQueue()
          .enqueue(
            function (t) {
              var n = t.cryptoManager;
              return o("WACryptoManager").getParticipantInfo(n, e.from.author);
            },
            { flush: !1, operationType: "get_participant_info" },
          );
      if (e.keys != null) {
        var a = e.keys,
          i = e.timestamp,
          l = { baseKey: t.baseKey, keys: a, timestamp: i },
          s = T(e, r);
        s
          ? (n = { session: l, type: "compareTSAndUseSession" })
          : (n = { session: l, type: "useSession" });
      } else {
        var u = r == null || e.regId !== r.regId;
        u && (n = { type: "requestNewSession" });
      }
      return n;
    }
    function R(e) {
      var t,
        n = e.externalId,
        r = e.from;
      return (t = o("WAWap")).wap("ack", {
        class: "receipt",
        id: t.CUSTOM_STRING(n),
        participant: t.PARTICIPANT_JID(r),
        to: t.TO_JID(r),
        type: "retry",
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.category;
      return t === "peer_appdata" || t === "peer";
    }
    function E(e) {
      var t = e.retryCount;
      return t >= o("MAWConstants").MESSAGE_RETRY_COUNT_LIMIT;
    }
    function k(e) {
      if (E(e)) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "handleRetryRequest denied due to retry count",
            ])),
        );
        return;
      }
      if (L(e)) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "Peer appdata retry acked without resend: no sent-appdata store exists",
            ])),
        );
        return;
      }
      if (e.category != null) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "Unknown receipt categories: ",
              "",
            ])),
          e.category,
        );
        return;
      }
    }
    async function I(e, t, n, r, a) {
      var i;
      r === void 0 && (r = !0);
      var l = t.msgForRetry,
        s = t.retryRequest,
        u = e.externalId,
        c = e.from,
        d = e.retryCount,
        m = s.protocolMsgId.chat;
      if (l.type !== "unacked") {
        (r && n.endFail(l.type),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "handleRetryRequest denied with type ",
                "",
              ])),
            l.type,
          ),
          a == null || a.markError(),
          a == null || a.setError("msg" + l.type));
        return;
      }
      if (l.retryCount != null && l.retryCount > 0 && l.retryCount === d) {
        (r && n.endFail("unauthorized"),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "handleRetryRequest denied because (messageId, deviceJID, retryCount) is already executed for retryCount ",
                "",
              ])),
            d,
          ),
          a == null || a.markError(),
          a == null || a.setError("msgunauthorized"));
        return;
      }
      c.type === "group" &&
        (await o("WAMarkParticipantNeedsKeyApi").markParticipantNeedsKey(
          c.chat,
          c.author,
        ),
        n.addPoint("mark_participant_needs_key_complete"));
      var h = l.backupDirective,
        y = l.frankingKey,
        C = l.frankingVersion,
        b = l.isInstamadillo,
        v = l.messageBytes,
        R = l.messageType,
        L = l.protocolMsgId,
        E = l.serverTs,
        k = await o("WALoadReceiptApi")
          .loadReceipt({
            author: L.author,
            chat: L.chat,
            externalId: L.externalId,
          })
          .then(function (e) {
            return e.success ? e.value : null;
          }),
        I =
          k == null || (i = k.permittedIdentitiesPerDevice) == null
            ? void 0
            : i.get(s.deviceJid);
      if (k == null || I == null) {
        (r && n.endFail("unauthorized"),
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "handleRetryRequest denied because receipt is null",
              ])),
          ),
          a == null || a.markError(),
          a == null || a.setError("msgunauthorized"));
        return;
      }
      var T = await S(e, I);
      n.addPoint("get_session_info_complete");
      var D = await o("WAGenReportingMeta").genReportingMeta(v.bytes, y, C),
        x = E != null ? E * 1e3 : void 0,
        $ = await g.load(),
        P = $.sendMessage,
        N = await P(
          {
            backupDirective: h,
            chat: m,
            count: d,
            deviceIdentity: null,
            externalId: u,
            identityKey: I.pubKey,
            messageBytes: v,
            messageType: R,
            originalMsgTimestampMs: x,
            protocolMsgId: L,
            reportingMeta: D,
            sessionInfo: T,
            to: c.author,
            type: "direct",
          },
          n,
          b,
        );
      if (
        (n.addPoint("send_message_complete"),
        d >= 2 && N.success && N.value.baseKey != null)
      ) {
        var M = N.value.baseKey;
        await o("WAWriteMsgRetryApi").writeMsgRetry(
          s.protocolMsgId,
          c.author,
          M,
        );
      }
      (d >= 1 &&
        N.success &&
        (await o("WAWriteMsgRetryCountApi").writeMsgRetryCount(
          s.protocolMsgId,
          c.author,
          d,
        )),
        a == null || a.markSuccess());
    }
    function T(e, t) {
      if (e.offline == null) return !1;
      var n = t == null || e.regId !== t.regId,
        r =
          t != null &&
          e.keys != null &&
          !o("WACryptoUtils").uint8ArraysEqual(t.pubKey, e.keys.identity);
      return n || r;
    }
    l.bulkHandleRetryRequest = C;
  },
  98,
);
