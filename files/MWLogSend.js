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
    "ReQL",
    "WAJids",
    "WAOdsEnums",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 0,
      m = 1,
      p = 2,
      _ = 3,
      f = 4,
      g = 5,
      h = 7,
      y = new Set([26, 43, 24, 27]),
      C = "MESSAGE_FORWARD",
      b = "MESSAGE_REPLY",
      v = "STORY_REPLY",
      S = "MESSAGE_RESHARE",
      R = "SHARE_OF_ORIGINAL_USER_CONTENT",
      L = "THIRD_PARTY_RESHARE",
      E = [
        (c = r("LSMessagingThreadAttributionType")).MESSENGER_INBOX_FORWARD,
        c.MESSENGER_CHAT_FORWARD,
        c.MESSENGER_BROADCAST_FLOW_FORWARD_GUTTER,
        c.MESSENGER_BROADCAST_FLOW_FORWARD_LONGCLICK,
      ];
    function k(e) {
      return E.some(function (t) {
        return (s || (s = o("I64"))).equal(
          e,
          (u || (u = o("LSIntEnum"))).ofNumber(t),
        );
      });
    }
    var I = [
      c.FB_FEED_ORGANIC_POST_VIEW_AND_MESSAGE,
      c.MESSENGER_BROADCAST_FLOW_FROM_FB,
      c.SHARESHEET_GENERALIZED_BROADCAST_FLOW,
      c.SHARESHEET_OFF_PLATFORM_SHARING_H_SCROLL,
    ];
    function T(e) {
      return I.some(function (t) {
        return (s || (s = o("I64"))).equal(
          e,
          (u || (u = o("LSIntEnum"))).ofNumber(t),
        );
      });
    }
    var D = [
      c.MESSENGER_BROADCAST_FLOW_FROM_EXTERNAL,
      c.ARMADILLO_THREAD_EXTERNAL_LINK,
      c.EXTERNAL_LINK_XMA,
      c.EXTERNAL_LINK_XMA_FROM_COMPOSER,
      c.EXTERNAL_LINK_XMA_FROM_DEEP_LINKING,
      c.EXTERNAL_LINK_XMA_FROM_SHARE_EXTENSION,
    ];
    function x(e) {
      return D.some(function (t) {
        return (s || (s = o("I64"))).equal(
          e,
          (u || (u = o("LSIntEnum"))).ofNumber(t),
        );
      });
    }
    function $(e) {
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
    function P(e, t, n, r) {
      if (e === 20 || e === 27 || e === 98 || e === 3) return f;
      if (e === 12) return g;
      if (e === 17) return h;
      var o = $(n);
      return o.includes(C) || k(r)
        ? p
        : o.includes(b) || o.includes(v)
          ? m
          : o.includes(S) ||
              o.includes(R) ||
              o.includes(L) ||
              T(r) ||
              x(r) ||
              e === 13
            ? _
            : t === !0
              ? m
              : d;
    }
    var N = [];
    function M(t) {
      return function () {
        for (; N.length > 0; ) {
          var n = N.shift();
          n != null &&
            (e || (e = r("ErrorGuard"))).applyWithGuard(O, null, [t, n, !0]);
        }
      };
    }
    var w = !1;
    function A(e, t) {
      (N.push(t),
        w || (o("LSPlatformLsInitLog").onCompleteOrFail(M(e)), (w = !0)));
    }
    function F(e) {
      o("MAWODSProxy").odsBumpEntityKey({
        entity: o("WAOdsEnums").Entity.MAW_DB_DEPRECATION,
        key: "mw_log_send.him_enabled." + e,
      });
    }
    function O(e, t, n) {
      var a = t._mentionedJids,
        i = t.actor,
        l = t.additionalTags,
        u = t.attachmentFbids,
        c = t.attachmentType,
        d = t.backend,
        m = t.ephemeralDurationInSec,
        p = t.hasReply,
        _ = t.igdTargetType,
        f = t.initatingSource,
        g = t.isInstamadilloTTLC,
        h = t.messageSendDataclass,
        C = t.messagingThreadId,
        b = t.msgTtl,
        v = t.offlineThreadingId,
        S = t.sendType,
        R = t.source,
        L = t.threadKey,
        E = t.threadType;
      r("promiseDone")(
        (async function () {
          await Promise.all([
            o("ReQL").toArrayAsync(
              o("ReQL")
                .fromTableAscending(e.tables.participants)
                .getKeyRange(L),
            ),
            o("MultipleTabsLogger").hasMultipleTabs(),
          ]).then(function (a) {
            var k,
              I = a[0],
              T = a[1],
              D = o("LSPlatformLsInitLog").isPending(),
              x = D ? "ls_init_pending" : "ls_init_complete",
              $ = n === !0 ? "flush" : "no_flush",
              N = o("LSMessagingThreadTypeUtil").isOneToOne(E),
              M = N ? "one_to_one" : "group";
            if (I == null) {
              if (
                (F("participants_null." + M + "." + x + "." + $), D && n !== !0)
              ) {
                A(e, t);
                return;
              }
              n === !0 &&
                r("FBLogger")("meteora").warn(
                  "LS_INIT completed but participants table is still empty.",
                );
            }
            var w = I != null ? I : [],
              O = w
                .filter(function (e) {
                  return !(s || (s = o("I64"))).equal(e.contactId, i);
                })
                .map(function (e) {
                  return (s || (s = o("I64"))).to_string(e.contactId);
                }),
              B = N && w.length > 0 && O.length === 0;
            if (
              (w.length === 0 &&
                F("participants_unhydrated." + M + "." + x + "." + $),
              N && O.length === 0 && !B)
            ) {
              var W =
                  t.chatJid != null
                    ? o("WAJids").interpretAsUserJid(t.chatJid)
                    : null,
                q = W != null ? o("WAJids").extractUserId(W) : null;
              if (q != null)
                (O.push(String(q)), F("recipient_recovered_via_chatjid"));
              else if (
                (F("deferred.recipient_unresolved." + M + "." + x + "." + $),
                n !== !0)
              ) {
                A(e, t);
                return;
              }
            }
            B && O.push((s || (s = o("I64"))).to_string(i));
            var U = C != null ? C : (s || (s = o("I64"))).to_string(L),
              V =
                (k = t.waGroupJid) != null
                  ? k
                  : t.chatJid != null
                    ? o("WAJids").interpretAsGroupJid(t.chatJid)
                    : null,
              H =
                b != null
                  ? (s || (s = o("I64"))).to_string(
                      (s || (s = o("I64"))).of_float(b),
                    )
                  : void 0,
              G = [
                T === !0 ? 19 : null,
                m != null ? 15 : null,
                g === !0 ? 37 : null,
              ].filter(Boolean);
            (U == null ||
              U === "" ||
              (s || (s = o("I64"))).le(L, (s || (s = o("I64"))).zero)) &&
              (V != null
                ? r("FBLogger")("mw_log_send").mustfix(
                    "Thread FBID is null and recovered by chatJid in send flow - ThreadKey %s, messagingThreadId %s, send type %s",
                    (s || (s = o("I64"))).to_string(L),
                    C,
                    S,
                  )
                : r("FBLogger")("mw_log_send").mustfix(
                    "Thread FBID is null in send flow - ThreadKey %s, messagingThreadId %s, send type %s",
                    (s || (s = o("I64"))).to_string(L),
                    C,
                    S,
                  ));
            var z = (l == null ? void 0 : l.includes("is_retry:true")) === !0,
              j = S === 1 && !z && !y.has(c) && r("gkx")("9476");
            if (
              (O.length === 0 &&
                F("empty_recipients_emitted." + M + "." + x + "." + $),
              r("MessageSendsClientFalcoEvent").log(function () {
                return {
                  additional_tags: l,
                  backend: d,
                  event_type: S,
                  feature_tags: G,
                  group_thread_subtype: void 0,
                  igd_action: void 0,
                  igd_target_type: _,
                  igd_verb: void 0,
                  initiating_app_id: void 0,
                  initiating_source: f,
                  is_double_logging: j,
                  is_reply: p,
                  message_attachment_fbids: u.map(String),
                  message_id: void 0,
                  message_send_dataclass_logged: h,
                  message_type: c,
                  messaging_thread_fbid: U,
                  messaging_thread_type: (s || (s = o("I64"))).to_int32(E),
                  msg_ttl: H,
                  nav_chain: void 0,
                  nonce: void 0,
                  offline_threading_id: v,
                  recipient_fbids: O,
                  send_attribution: s.to_int32(R),
                  send_attribution_raw: void 0,
                  view_mode: void 0,
                  wa_group_jid: V,
                };
              }),
              j)
            ) {
              var K = o("MessagingLoggingUtils").deriveTransportThreadFbid(
                  V != null ? V : null,
                  O,
                  U,
                ),
                Q = (s || (s = o("I64"))).to_int32(R),
                X =
                  b != null && b > 0
                    ? JSON.stringify({
                        lifetime_ms: b,
                        send_attribution_int: Q,
                        view_mode: "TIMER_BASED",
                      })
                    : JSON.stringify({ send_attribution_int: Q });
              r("FbMessageSendAnalyticsFalcoEvent").log(function () {
                return {
                  attachment_types: o(
                    "MessagingLoggingUtils",
                  ).mapAttachmentTypeToFbSendVec(c),
                  is_double_logging: !0,
                  is_encrypted: d === 1,
                  navigation_chain: void 0,
                  offline_threading_id: v != null ? v : "",
                  product_metadata: X,
                  send_action: P(c, p, h, R),
                  thread_fbid: K,
                };
              });
            }
          });
        })(),
      );
    }
    l.log = O;
  },
  98,
);
