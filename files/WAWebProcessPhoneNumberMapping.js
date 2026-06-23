__d(
  "WAWebProcessPhoneNumberMapping",
  [
    "Promise",
    "WAArrayUtils",
    "WALogger",
    "WAWebApiContact",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleMsgTypes.flow",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMeUser",
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
          if (o("WAWebUserPrefsMeUser").isMeAccount(a)) {
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
          if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
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
            r = t.author;
          return r.isLid() ? p(t, n) : f(t);
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
              !o("WAWebUserPrefsMeUser").isMeAccount(t.author) &&
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
            !o("WAWebUserPrefsMeUser").isMeAccount(l) &&
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
      var t = e.flushImmediately,
        n = e.mapping;
      return n.learningSource === "recipient-latest-lid"
        ? o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [
              { lid: n.lid, pn: n.pn },
              { lid: n.latestLid, pn: n.pn },
            ],
            flushImmediately: t,
            learningSource: "recipient-latest-lid",
          })
        : o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [{ lid: n.lid, pn: n.pn }],
            flushImmediately: t,
            learningSource: n.learningSource,
          });
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgInfo.chat;
          return t.isUser()
            ? h(e)
            : t.isGroup() || t.isBroadcast()
              ? C(e)
              : { lidMetadataUpdates: [] };
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (
            e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
          ) {
            var a = e.bclParticipants.map(function (n) {
                return I({ msgInfo: e, msgMeta: t, bclParticipant: n }, r);
              }),
              i = yield (c || (c = n("Promise"))).all(a);
            return { type: "peer-broadcast", mappings: i };
          }
          return {
            type: "not-peer-broadcast",
            mapping: yield I({ msgInfo: e, msgMeta: t }, r),
          };
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield R(e),
            i = a.lidMetadataUpdates,
            l = a.mapping,
            s = o("WAArrayUtils").groupByAndMap(
              i,
              function (e) {
                return e.shouldWaitForJob ? "waitForJob" : "fireAndForget";
              },
              function (e) {
                return e.jobArgs;
              },
            ),
            u = (n = s.get("waitForJob")) != null ? n : [],
            c = (r = s.get("fireAndForget")) != null ? r : [];
          return (
            c.length > 0 &&
              o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(c),
            u.length > 0 &&
              (yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(u)),
            l != null &&
              typeof l == "object" &&
              (yield S({ mapping: l, flushImmediately: t })),
            l
          );
        })),
        T.apply(this, arguments)
      );
    }
    l.processPhoneNumberMappings = E;
  },
  98,
);
