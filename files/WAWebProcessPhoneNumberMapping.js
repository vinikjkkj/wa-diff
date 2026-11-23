__d(
  "WAWebProcessPhoneNumberMapping",
  [
    "WAArrayUtils",
    "WALogger",
    "WAWebApiContact",
    "WAWebCoexV2PhoneNumberMapping",
    "WAWebDBCreateLidPnMappings",
    "WAWebDecryptsOutsideInboundMsgRows",
    "WAWebHandleMsgTypes",
    "WAWebLidPnMappingWrite",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t = e.data,
        n = e.lid,
        r = e.processingResult,
        o = e.shouldWaitForJob;
      r.push({ jobArgs: { lid: n, data: t }, shouldWaitForJob: o });
    }
    function d(t) {
      return t.preMatChat != null
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[extractMapping] using preMatChat",
              ])),
          ),
          t.preMatChat)
        : t.chat;
    }
    async function m(e, t) {
      var n,
        r = [],
        a = e.author,
        i = e.peerRecipientPn,
        l = e.recipientLatestLid,
        u = e.recipientPn,
        m = d(e),
        p = o("WAWebWidFactory").asUserLidOrThrow(a);
      if (o("WAWebUserUtils").isMeAccount(a)) {
        var _ = t == null ? void 0 : t.origin;
        if (u != null)
          ((n = {
            lid: o("WAWebWidFactory").asUserLidOrThrow(m),
            pn: o("WAWebWidFactory").asUserWidOrThrow(u),
            learningSource: "process-phone-number-mapping",
          }),
            c({
              lid: o("WAWebWidFactory").asUserLidOrThrow(m),
              data: { shareOwnPn: !1 },
              shouldWaitForJob: !0,
              processingResult: r,
            }));
        else if (i != null)
          l != null
            ? (n = {
                lid: o("WAWebWidFactory").asUserLidOrThrow(m),
                pn: i,
                latestLid: l,
                learningSource: "recipient-latest-lid",
              })
            : (n = {
                lid: o("WAWebWidFactory").asUserLidOrThrow(m),
                pn: i,
                learningSource: "peer-lid-message",
              });
        else if (m.isLid()) {
          var f = await o("WAWebApiContact").getContactRecord(m);
          (f == null || (f == null ? void 0 : f.shareOwnPn) !== !0) &&
            c({
              lid: o("WAWebWidFactory").asUserLidOrThrow(m),
              data: { shareOwnPn: !0 },
              shouldWaitForJob: !1,
              processingResult: r,
            });
        } else
          m.isBot() ||
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[extractMappingsForOneToOneLidMessages] peer message with non-LID chat: ",
                    "",
                  ])),
                m.toLogString(),
              )
              .sendLogs("peer-message-non-lid-chat");
        if (_ !== "ctwa") {
          var g =
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            e.author.isLid() &&
            e.chat.isLid();
          i == null && !g && (n = "missing-peer-recipient-pn");
        }
        return { mapping: n, lidMetadataUpdates: r };
      }
      var h = e.displayName;
      h != null &&
        c({
          lid: p,
          data: { displayNameLID: h },
          shouldWaitForJob: !0,
          processingResult: r,
        });
      var y = e.senderPn;
      return (
        y != null &&
          (n = {
            lid: p,
            pn: o("WAWebWidFactory").asUserWidOrThrow(y),
            learningSource: "process-phone-number-mapping",
          }),
        y == null &&
          c({
            lid: p,
            data: { shareOwnPn: !0 },
            shouldWaitForJob: !0,
            processingResult: r,
          }),
        { mapping: n, lidMetadataUpdates: r }
      );
    }
    async function p(e) {
      var t,
        n = e.author,
        r = e.peerRecipientLid,
        a = e.recipientLatestLid,
        i = e.recipientLid,
        l = d(e);
      if (o("WAWebUserUtils").isMeAccount(n)) {
        var s = o("WAWebWidFactory").asUserWidOrThrow(l);
        i != null
          ? (t = {
              lid: i,
              pn: s,
              learningSource: "process-phone-number-mapping",
            })
          : r != null
            ? a != null
              ? (t = {
                  pn: s,
                  lid: r,
                  latestLid: a,
                  learningSource: "recipient-latest-lid",
                })
              : (t = { lid: r, pn: s, learningSource: "peer-pn-message" })
            : (t = "missing-peer-recipient-lid");
      }
      var u = e.senderLid;
      return (
        u != null &&
          (t = {
            lid: o("WAWebWidFactory").asUserLidOrThrow(u),
            pn: o("WAWebWidFactory").asUserWidOrThrow(n),
            learningSource: "process-phone-number-mapping",
          }),
        { mapping: t, lidMetadataUpdates: [] }
      );
    }
    async function _(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = o(
          "WAWebCoexV2PhoneNumberMapping",
        ).maybeGetCoexV2PhoneNumberMappingPlan(t, n);
      if (r != null) {
        var a;
        return {
          mapping: (a = r.mapping) != null ? a : void 0,
          lidMetadataUpdates: [],
        };
      }
      var i = t.author;
      return i.isLid() ? m(t, n) : p(t);
    }
    async function f(e) {
      var t = e.msgInfo,
        n =
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
          t.participantUsername != null;
      if (
        (!n &&
          t.chat.isGroup() &&
          t.author.isLid() &&
          !o("WAWebUserUtils").isMeAccount(t.author) &&
          t.participantPn == null &&
          t.displayName == null &&
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[extractMappingsForGroupOrStatusBroadcastMessage] participantPn is missing for group message from LID author",
              ])),
          ),
        e.bclParticipant)
      ) {
        e.msgInfo;
        var r = g(e.bclParticipant);
        return r == null
          ? { lidMetadataUpdates: [] }
          : { mapping: r, lidMetadataUpdates: [] };
      }
      var a,
        i = [],
        l = t.author,
        s = t.participantLid,
        d = t.participantPn;
      d != null
        ? (a = {
            lid: o("WAWebWidFactory").asUserLidOrThrow(l),
            pn: d,
            learningSource: "process-phone-number-mapping",
          })
        : s != null &&
          !n &&
          (a = {
            lid: s,
            pn: o("WAWebWidFactory").asUserWidOrThrow(l),
            learningSource: "process-phone-number-mapping",
          });
      var m = t.displayName;
      return (
        !o("WAWebUserUtils").isMeAccount(l) &&
          m != null &&
          c({
            lid: o("WAWebWidFactory").asUserLidOrThrow(l),
            data: { displayNameLID: m },
            shouldWaitForJob: !0,
            processingResult: i,
          }),
        { mapping: a, lidMetadataUpdates: i }
      );
    }
    function g(e) {
      var t = e.wid,
        n = e.recipientLatestLid;
      if (t.isLid()) {
        var r = t,
          a = e.peerRecipientPn;
        if (a == null) {
          var i = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
          return i ? null : "missing-peer-recipient-pn";
        }
        return n
          ? {
              lid: r,
              latestLid: n,
              pn: a,
              learningSource: "recipient-latest-lid",
            }
          : { lid: r, pn: a, learningSource: "peer-lid-message" };
      }
      var l = e.peerRecipientLid,
        s = t;
      return l == null
        ? "missing-peer-recipient-lid"
        : n
          ? {
              lid: l,
              latestLid: n,
              pn: s,
              learningSource: "recipient-latest-lid",
            }
          : { lid: l, pn: s, learningSource: "peer-pn-message" };
    }
    async function h(e) {
      var t = e.deferredWrites,
        n = e.flushImmediately,
        r = e.mapping,
        a = e.sourceStanzaId,
        i = y(n, t),
        l = await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings:
            r.learningSource === "recipient-latest-lid"
              ? [
                  { lid: r.lid, pn: r.pn },
                  { lid: r.latestLid, pn: r.pn },
                ]
              : [{ lid: r.lid, pn: r.pn }],
          write: i,
          learningSource: r.learningSource,
          sourceStanzaId: a,
        }),
        s = l.identityChanged;
      s &&
        i === "with_offline_msg" &&
        o(
          "WAWebDecryptsOutsideInboundMsgRows",
        ).noteDecryptOutsideInboundMsgRows();
    }
    function y(e, t) {
      return t == null
        ? o("WAWebLidPnMappingWrite").toLidPnMappingWrite(e)
        : e
          ? "with_live_msg"
          : "with_offline_msg";
    }
    async function C(e) {
      var t = e.msgInfo.chat;
      return t.isUser()
        ? _(e)
        : t.isGroup() || t.isBroadcast()
          ? f(e)
          : { lidMetadataUpdates: [] };
    }
    async function b(e, t, n, r) {
      if (e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST) {
        var a = e.bclParticipants.map(function (o) {
            return v({ msgInfo: e, msgMeta: t, bclParticipant: o }, n, r);
          }),
          i = await Promise.all(a);
        return { type: "peer-broadcast", mappings: i };
      }
      return {
        type: "not-peer-broadcast",
        mapping: await v({ msgInfo: e, msgMeta: t }, n, r),
      };
    }
    async function v(e, t, n) {
      var r = await C(e),
        o = r.lidMetadataUpdates,
        a = r.mapping;
      if (n != null) {
        var i;
        (i = n.lidMetadataUpdates).push.apply(
          i,
          o.map(function (e) {
            var t = e.jobArgs;
            return t;
          }),
        );
      } else await S(o);
      return (
        a != null &&
          typeof a == "object" &&
          (await h({
            deferredWrites: n,
            mapping: a,
            flushImmediately: t,
            sourceStanzaId: e.msgInfo.externalId,
          })),
        a
      );
    }
    async function S(e) {
      var t,
        n,
        r = o("WAArrayUtils").groupByAndMap(
          e,
          function (e) {
            return e.shouldWaitForJob ? "waitForJob" : "fireAndForget";
          },
          function (e) {
            return e.jobArgs;
          },
        ),
        a = (t = r.get("waitForJob")) != null ? t : [],
        i = (n = r.get("fireAndForget")) != null ? n : [];
      (i.length > 0 && o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(i),
        a.length > 0 &&
          (await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(a)));
    }
    l.processPhoneNumberMappings = b;
  },
  98,
);
