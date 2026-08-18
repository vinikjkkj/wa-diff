__d(
  "MWLogSend",
  [
    "ErrorGuard",
    "FBLogger",
    "FbMessageSendAnalyticsFalcoEvent",
    "I64",
    "LSIntEnum",
    "LSMessagingThreadAttributionType",
    "LSMessagingThreadTypeUtil",
    "LSPlatformLsInitLog",
    "MAWODSProxy",
    "MessageSendsClientFalcoEvent",
    "MessagingLoggingUtils",
    "MultipleTabsLogger",
    "Promise",
    "ReQL",
    "WAJids",
    "WAOdsEnums",
    "asyncToGeneratorRuntime",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 0,
      p = 1,
      _ = 2,
      f = 3,
      g = 4,
      h = 5,
      y = 7,
      C = new Set([26, 43, 24, 27]),
      b = "MESSAGE_FORWARD",
      v = "MESSAGE_REPLY",
      S = "STORY_REPLY",
      R = "MESSAGE_RESHARE",
      L = "SHARE_OF_ORIGINAL_USER_CONTENT",
      E = "THIRD_PARTY_RESHARE",
      k = [
        (d = r("LSMessagingThreadAttributionType")).MESSENGER_INBOX_FORWARD,
        d.MESSENGER_CHAT_FORWARD,
        d.MESSENGER_BROADCAST_FLOW_FORWARD_GUTTER,
        d.MESSENGER_BROADCAST_FLOW_FORWARD_LONGCLICK,
      ];
    function I(e) {
      return k.some(function (t) {
        return (u || (u = o("I64"))).equal(
          e,
          (c || (c = o("LSIntEnum"))).ofNumber(t),
        );
      });
    }
    var T = [
      d.FB_FEED_ORGANIC_POST_VIEW_AND_MESSAGE,
      d.MESSENGER_BROADCAST_FLOW_FROM_FB,
      d.SHARESHEET_GENERALIZED_BROADCAST_FLOW,
      d.SHARESHEET_OFF_PLATFORM_SHARING_H_SCROLL,
    ];
    function D(e) {
      return T.some(function (t) {
        return (u || (u = o("I64"))).equal(
          e,
          (c || (c = o("LSIntEnum"))).ofNumber(t),
        );
      });
    }
    var x = [
      d.MESSENGER_BROADCAST_FLOW_FROM_EXTERNAL,
      d.ARMADILLO_THREAD_EXTERNAL_LINK,
      d.EXTERNAL_LINK_XMA,
      d.EXTERNAL_LINK_XMA_FROM_COMPOSER,
      d.EXTERNAL_LINK_XMA_FROM_DEEP_LINKING,
      d.EXTERNAL_LINK_XMA_FROM_SHARE_EXTENSION,
    ];
    function $(e) {
      return x.some(function (t) {
        return (u || (u = o("I64"))).equal(
          e,
          (c || (c = o("LSIntEnum"))).ofNumber(t),
        );
      });
    }
    function P(e) {
      if (e == null || e === "") return [];
      try {
        var t,
          n = JSON.parse(e),
          r = (t = n.logging_metadata) == null ? void 0 : t.feature_tags;
        return r != null && Array.isArray(r) ? r : [];
      } catch (e) {
        return [];
      }
    }
    function N(e, t, n, r) {
      if (e === 20 || e === 27 || e === 98 || e === 3) return g;
      if (e === 12) return h;
      if (e === 17) return y;
      var o = P(n);
      return o.includes(b) || I(r)
        ? _
        : o.includes(v) || o.includes(S)
          ? p
          : o.includes(R) ||
              o.includes(L) ||
              o.includes(E) ||
              D(r) ||
              $(r) ||
              e === 13
            ? f
            : t === !0
              ? p
              : m;
    }
    var M = [];
    function w(e) {
      return function () {
        for (; M.length > 0; ) {
          var t = M.shift();
          t != null &&
            (s || (s = r("ErrorGuard"))).applyWithGuard(B, null, [e, t, !0]);
        }
      };
    }
    var A = !1;
    function F(e, t) {
      (M.push(t),
        A || (o("LSPlatformLsInitLog").onCompleteOrFail(w(e)), (A = !0)));
    }
    function O(e) {
      o("MAWODSProxy").odsBumpEntityKey({
        entity: o("WAOdsEnums").Entity.MAW_DB_DEPRECATION,
        key: "mw_log_send.him_enabled." + e,
      });
    }
    function B(t, a, i) {
      var l = a._mentionedJids,
        s = a.actor,
        c = a.additionalTags,
        d = a.attachmentFbids,
        m = a.attachmentType,
        p = a.backend,
        _ = a.ephemeralDurationInSec,
        f = a.hasReply,
        g = a.igdTargetType,
        h = a.initatingSource,
        y = a.isInstamadilloTTLC,
        b = a.messageSendDataclass,
        v = a.messagingThreadId,
        S = a.msgTtl,
        R = a.offlineThreadingId,
        L = a.sendType,
        E = a.source,
        k = a.threadKey,
        I = a.threadType;
      r("promiseDone")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield (e || (e = n("Promise")))
            .all([
              o("ReQL").toArrayAsync(
                o("ReQL")
                  .fromTableAscending(t.tables.participants)
                  .getKeyRange(k),
              ),
              o("MultipleTabsLogger").hasMultipleTabs(),
            ])
            .then(function (e) {
              var n,
                l = e[0],
                T = e[1],
                D = o("LSPlatformLsInitLog").isPending(),
                x = D ? "ls_init_pending" : "ls_init_complete",
                $ = i === !0 ? "flush" : "no_flush",
                P = o("LSMessagingThreadTypeUtil").isOneToOne(I),
                M = P ? "one_to_one" : "group";
              if (l == null) {
                if (
                  (O("participants_null." + M + "." + x + "." + $),
                  D && i !== !0)
                ) {
                  F(t, a);
                  return;
                }
                i === !0 &&
                  r("FBLogger")("meteora").warn(
                    "LS_INIT completed but participants table is still empty.",
                  );
              }
              var w = l != null ? l : [],
                A = w
                  .filter(function (e) {
                    return !(u || (u = o("I64"))).equal(e.contactId, s);
                  })
                  .map(function (e) {
                    return (u || (u = o("I64"))).to_string(e.contactId);
                  }),
                B = P && w.length > 0 && A.length === 0;
              if (
                (w.length === 0 &&
                  O("participants_unhydrated." + M + "." + x + "." + $),
                P && A.length === 0 && !B)
              ) {
                var W =
                    a.chatJid != null
                      ? o("WAJids").interpretAsUserJid(a.chatJid)
                      : null,
                  q = W != null ? o("WAJids").extractUserId(W) : null;
                if (q != null)
                  (A.push(String(q)), O("recipient_recovered_via_chatjid"));
                else if (
                  (O("deferred.recipient_unresolved." + M + "." + x + "." + $),
                  i !== !0)
                ) {
                  F(t, a);
                  return;
                }
              }
              B && A.push((u || (u = o("I64"))).to_string(s));
              var U = v != null ? v : (u || (u = o("I64"))).to_string(k),
                V =
                  (n = a.waGroupJid) != null
                    ? n
                    : a.chatJid != null
                      ? o("WAJids").interpretAsGroupJid(a.chatJid)
                      : null,
                H =
                  S != null
                    ? (u || (u = o("I64"))).to_string(
                        (u || (u = o("I64"))).of_float(S),
                      )
                    : void 0,
                G = [
                  T === !0 ? 19 : null,
                  _ != null ? 15 : null,
                  y === !0 ? 37 : null,
                ].filter(Boolean);
              (U == null ||
                U === "" ||
                (u || (u = o("I64"))).le(k, (u || (u = o("I64"))).zero)) &&
                (V != null
                  ? r("FBLogger")("mw_log_send").mustfix(
                      "Thread FBID is null and recovered by chatJid in send flow - ThreadKey %s, messagingThreadId %s, send type %s",
                      (u || (u = o("I64"))).to_string(k),
                      v,
                      L,
                    )
                  : r("FBLogger")("mw_log_send").mustfix(
                      "Thread FBID is null in send flow - ThreadKey %s, messagingThreadId %s, send type %s",
                      (u || (u = o("I64"))).to_string(k),
                      v,
                      L,
                    ));
              var z = (c == null ? void 0 : c.includes("is_retry:true")) === !0,
                j = L === 1 && !z && !C.has(m) && r("gkx")("9476");
              if (
                (A.length === 0 &&
                  O("empty_recipients_emitted." + M + "." + x + "." + $),
                r("MessageSendsClientFalcoEvent").log(function () {
                  return {
                    additional_tags: c,
                    backend: p,
                    event_type: L,
                    feature_tags: G,
                    group_thread_subtype: void 0,
                    igd_action: void 0,
                    igd_target_type: g,
                    igd_verb: void 0,
                    initiating_app_id: void 0,
                    initiating_source: h,
                    is_double_logging: j,
                    is_reply: f,
                    message_attachment_fbids: d.map(String),
                    message_id: void 0,
                    message_send_dataclass_logged: b,
                    message_type: m,
                    messaging_thread_fbid: U,
                    messaging_thread_type: (u || (u = o("I64"))).to_int32(I),
                    msg_ttl: H,
                    nav_chain: void 0,
                    nonce: void 0,
                    offline_threading_id: R,
                    recipient_fbids: A,
                    send_attribution: u.to_int32(E),
                    send_attribution_raw: void 0,
                    view_mode: void 0,
                    wa_group_jid: V,
                  };
                }),
                j)
              ) {
                var K = o("MessagingLoggingUtils").deriveTransportThreadFbid(
                    V != null ? V : null,
                    A,
                    U,
                  ),
                  Q = (u || (u = o("I64"))).to_int32(E),
                  X =
                    S != null && S > 0
                      ? JSON.stringify({
                          lifetime_ms: S,
                          send_attribution_int: Q,
                          view_mode: "TIMER_BASED",
                        })
                      : JSON.stringify({ send_attribution_int: Q });
                r("FbMessageSendAnalyticsFalcoEvent").log(function () {
                  return {
                    attachment_types: o(
                      "MessagingLoggingUtils",
                    ).mapAttachmentTypeToFbSendVec(m),
                    is_double_logging: !0,
                    is_encrypted: p === 1,
                    navigation_chain: void 0,
                    offline_threading_id: R != null ? R : "",
                    product_metadata: X,
                    send_action: N(m, f, b, E),
                    thread_fbid: K,
                  };
                });
              }
            });
        })(),
      );
    }
    l.log = B;
  },
  98,
);
