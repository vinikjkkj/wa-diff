__d(
  "WAWebProcessPhoneNumberMapping",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t = e.data,
        n = e.lid,
        r = e.processingResult,
        o = e.shouldWaitForJob;
      r.push({ jobArgs: { lid: n, data: t }, shouldWaitForJob: o });
    }
    function m(t) {
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = [],
            a = e.author,
            i = e.peerRecipientPn,
            l = e.recipientLatestLid,
            u = e.recipientPn,
            c = m(e),
            p = o("WAWebWidFactory").asUserLidOrThrow(a);
          if (o("WAWebUserUtils").isMeAccount(a)) {
            var _ = t == null ? void 0 : t.origin;
            if (u != null)
              ((n = {
                lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                pn: o("WAWebWidFactory").asUserWidOrThrow(u),
                learningSource: "process-phone-number-mapping",
              }),
                d({
                  lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                  data: { shareOwnPn: !1 },
                  shouldWaitForJob: !0,
                  processingResult: r,
                }));
            else if (i != null)
              l != null
                ? (n = {
                    lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                    pn: i,
                    latestLid: l,
                    learningSource: "recipient-latest-lid",
                  })
                : (n = {
                    lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                    pn: i,
                    learningSource: "peer-lid-message",
                  });
            else if (c.isLid()) {
              var f = yield o("WAWebApiContact").getContactRecord(c);
              (f == null || (f == null ? void 0 : f.shareOwnPn) !== !0) &&
                d({
                  lid: o("WAWebWidFactory").asUserLidOrThrow(c),
                  data: { shareOwnPn: !0 },
                  shouldWaitForJob: !1,
                  processingResult: r,
                });
            } else
              c.isBot() ||
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[extractMappingsForOneToOneLidMessages] peer message with non-LID chat: ",
                        "",
                      ])),
                    c.toLogString(),
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
            d({
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
              d({
                lid: p,
                data: { shareOwnPn: !0 },
                shouldWaitForJob: !0,
                processingResult: r,
              }),
            { mapping: n, lidMetadataUpdates: r }
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.author,
            r = e.peerRecipientLid,
            a = e.recipientLatestLid,
            i = e.recipientLid,
            l = m(e);
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          return i.isLid() ? p(t, n) : f(t);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var r = v(e.bclParticipant);
            return r == null
              ? { lidMetadataUpdates: [] }
              : { mapping: r, lidMetadataUpdates: [] };
          }
          var a,
            i = [],
            l = t.author,
            s = t.participantLid,
            c = t.participantPn;
          c != null
            ? (a = {
                lid: o("WAWebWidFactory").asUserLidOrThrow(l),
                pn: c,
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
              d({
                lid: o("WAWebWidFactory").asUserLidOrThrow(l),
                data: { displayNameLID: m },
                shouldWaitForJob: !0,
                processingResult: i,
              }),
            { mapping: a, lidMetadataUpdates: i }
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
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
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deferredWrites,
            n = e.flushImmediately,
            r = e.mapping,
            a = e.sourceStanzaId,
            i = L(n, t),
            l = yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
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
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return t == null
        ? o("WAWebLidPnMappingWrite").toLidPnMappingWrite(e)
        : e
          ? "with_live_msg"
          : "with_offline_msg";
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgInfo.chat;
          return t.isUser()
            ? h(e)
            : t.isGroup() || t.isBroadcast()
              ? C(e)
              : { lidMetadataUpdates: [] };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            if (
              e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
            ) {
              var i = e.bclParticipants.map(function (n) {
                  return D({ msgInfo: e, msgMeta: t, bclParticipant: n }, r, a);
                }),
                l = yield (c || (c = n("Promise"))).all(i);
              return { type: "peer-broadcast", mappings: l };
            }
            return {
              type: "not-peer-broadcast",
              mapping: yield D({ msgInfo: e, msgMeta: t }, r, a),
            };
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield E(e),
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
          } else yield $(o);
          return (
            a != null &&
              typeof a == "object" &&
              (yield S({
                deferredWrites: n,
                mapping: a,
                flushImmediately: t,
                sourceStanzaId: e.msgInfo.externalId,
              })),
            a
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          (i.length > 0 &&
            o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(i),
            a.length > 0 &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(a)));
        })),
        P.apply(this, arguments)
      );
    }
    l.processPhoneNumberMappings = I;
  },
  98,
);
