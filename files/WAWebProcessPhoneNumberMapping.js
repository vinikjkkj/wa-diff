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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = [],
            a = e.author,
            i = e.peerRecipientPn,
            l = e.recipientLatestLid,
            s = e.recipientPn,
            u = d(e),
            m = o("WAWebWidFactory").asUserLidOrThrow(a);
          if (o("WAWebUserPrefsMeUser").isMeAccount(a)) {
            var p = t == null ? void 0 : t.origin;
            if (s != null)
              ((n = {
                lid: o("WAWebWidFactory").asUserLidOrThrow(u),
                pn: o("WAWebWidFactory").asUserWidOrThrow(s),
                learningSource: "other",
              }),
                c({
                  lid: o("WAWebWidFactory").asUserLidOrThrow(u),
                  data: { shareOwnPn: !1 },
                  shouldWaitForJob: !0,
                  processingResult: r,
                }));
            else if (i != null)
              l != null
                ? (n = {
                    lid: o("WAWebWidFactory").asUserLidOrThrow(u),
                    pn: i,
                    latestLid: l,
                    learningSource: "recipient-latest-lid",
                  })
                : (n = {
                    lid: o("WAWebWidFactory").asUserLidOrThrow(u),
                    pn: i,
                    learningSource: "peer-lid-message",
                  });
            else {
              var _ = yield o("WAWebApiContact").getContactRecord(u);
              (_ == null || (_ == null ? void 0 : _.shareOwnPn) !== !0) &&
                c({
                  lid: o("WAWebWidFactory").asUserLidOrThrow(u),
                  data: { shareOwnPn: !0 },
                  shouldWaitForJob: !1,
                  processingResult: r,
                });
            }
            if (p !== "ctwa") {
              var f =
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                e.author.isLid() &&
                e.chat.isLid();
              i == null && !f && (n = "missing-peer-recipient-pn");
            }
            return { mapping: n, lidMetadataUpdates: r };
          }
          var g = e.displayName;
          g != null &&
            c({
              lid: m,
              data: { displayNameLID: g },
              shouldWaitForJob: !0,
              processingResult: r,
            });
          var h = e.senderPn;
          return (
            h != null &&
              (n = {
                lid: m,
                pn: o("WAWebWidFactory").asUserWidOrThrow(h),
                learningSource: "other",
              }),
            h == null &&
              c({
                lid: m,
                data: { shareOwnPn: !0 },
                shouldWaitForJob: !0,
                processingResult: r,
              }),
            { mapping: n, lidMetadataUpdates: r }
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.author,
            r = e.peerRecipientLid,
            a = e.recipientLatestLid,
            i = e.recipientLid,
            l = d(e);
          if (o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            var s = o("WAWebWidFactory").asUserWidOrThrow(l);
            i != null
              ? (t = { lid: i, pn: s, learningSource: "other" })
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
                learningSource: "other",
              }),
            { mapping: t, lidMetadataUpdates: [] }
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgInfo,
            n = e.msgMeta,
            r = t.author;
          return r.isLid() ? m(t, n) : _(t);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[extractMappingsForGroupOrStatusBroadcastMessage] participantPn is missing for group message from LID author",
                  ])),
              ),
            e.bclParticipant)
          ) {
            e.msgInfo;
            var r = b(e.bclParticipant);
            return r == null
              ? { lidMetadataUpdates: [] }
              : { mapping: r, lidMetadataUpdates: [] };
          }
          var a,
            i = [],
            l = t.author,
            u = t.participantLid,
            d = t.participantPn;
          d != null
            ? (a = {
                lid: o("WAWebWidFactory").asUserLidOrThrow(l),
                pn: d,
                learningSource: "other",
              })
            : u != null &&
              !n &&
              (a = {
                lid: u,
                pn: o("WAWebWidFactory").asUserWidOrThrow(l),
                learningSource: "other",
              });
          var m = t.displayName;
          return (
            !o("WAWebUserPrefsMeUser").isMeAccount(l) &&
              m != null &&
              c({
                lid: o("WAWebWidFactory").asUserLidOrThrow(l),
                data: { displayNameLID: m },
                shouldWaitForJob: !0,
                processingResult: i,
              }),
            { mapping: a, lidMetadataUpdates: i }
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
    function v(e) {
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
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgInfo.chat;
          return t.isUser()
            ? g(e)
            : t.isGroup() || t.isBroadcast()
              ? y(e)
              : { lidMetadataUpdates: [] };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (
            e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
          ) {
            var a = e.bclParticipants.map(function (n) {
                return k({ msgInfo: e, msgMeta: t, bclParticipant: n }, r);
              }),
              i = yield (u || (u = n("Promise"))).all(a);
            return { type: "peer-broadcast", mappings: i };
          }
          return {
            type: "not-peer-broadcast",
            mapping: yield k({ msgInfo: e, msgMeta: t }, r),
          };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield S(e),
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
              (yield v({ mapping: l, flushImmediately: t })),
            l
          );
        })),
        I.apply(this, arguments)
      );
    }
    l.processPhoneNumberMappings = L;
  },
  98,
);
