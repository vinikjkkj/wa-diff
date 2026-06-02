__d(
  "WAWebProcessPhoneNumberMapping",
  [
    "WAArrayUtils",
    "WALogger",
    "WAWebApiContact",
    "WAWebDBCreateLidPnMappings",
    "WAWebHandleMsgTypes.flow",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = e.data,
        n = e.lid,
        r = e.processingResult,
        o = e.shouldWaitForJob;
      r.push({ jobArgs: { lid: n, data: t }, shouldWaitForJob: o });
    }
    function c(t) {
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
    async function d(e, t) {
      var n,
        r = [],
        a = e.author,
        i = e.peerRecipientPn,
        l = e.recipientLatestLid,
        s = e.recipientPn,
        d = c(e),
        m = o("WAWebWidFactory").asUserLidOrThrow(a);
      if (o("WAWebUserPrefsMeUser").isMeAccount(a)) {
        var p = t == null ? void 0 : t.origin;
        if (s != null)
          ((n = {
            lid: o("WAWebWidFactory").asUserLidOrThrow(d),
            pn: o("WAWebWidFactory").asUserWidOrThrow(s),
            learningSource: "other",
          }),
            u({
              lid: o("WAWebWidFactory").asUserLidOrThrow(d),
              data: { shareOwnPn: !1 },
              shouldWaitForJob: !0,
              processingResult: r,
            }));
        else if (i != null)
          l != null
            ? (n = {
                lid: o("WAWebWidFactory").asUserLidOrThrow(d),
                pn: i,
                latestLid: l,
                learningSource: "recipient-latest-lid",
              })
            : (n = {
                lid: o("WAWebWidFactory").asUserLidOrThrow(d),
                pn: i,
                learningSource: "peer-lid-message",
              });
        else {
          var _ = await o("WAWebApiContact").getContactRecord(d);
          (_ == null || (_ == null ? void 0 : _.shareOwnPn) !== !0) &&
            u({
              lid: o("WAWebWidFactory").asUserLidOrThrow(d),
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
        u({
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
          u({
            lid: m,
            data: { shareOwnPn: !0 },
            shouldWaitForJob: !0,
            processingResult: r,
          }),
        { mapping: n, lidMetadataUpdates: r }
      );
    }
    async function m(e) {
      var t,
        n = e.author,
        r = e.peerRecipientLid,
        a = e.recipientLatestLid,
        i = e.recipientLid,
        l = c(e);
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
    }
    async function p(e) {
      var t = e.msgInfo,
        n = e.msgMeta,
        r = t.author;
      return r.isLid() ? d(t, n) : m(t);
    }
    async function _(e) {
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
        var r = f(e.bclParticipant);
        return r == null
          ? { lidMetadataUpdates: [] }
          : { mapping: r, lidMetadataUpdates: [] };
      }
      var a,
        i = [],
        l = t.author,
        c = t.participantLid,
        d = t.participantPn;
      d != null
        ? (a = {
            lid: o("WAWebWidFactory").asUserLidOrThrow(l),
            pn: d,
            learningSource: "other",
          })
        : c != null &&
          !n &&
          (a = {
            lid: c,
            pn: o("WAWebWidFactory").asUserWidOrThrow(l),
            learningSource: "other",
          });
      var m = t.displayName;
      return (
        !o("WAWebUserPrefsMeUser").isMeAccount(l) &&
          m != null &&
          u({
            lid: o("WAWebWidFactory").asUserLidOrThrow(l),
            data: { displayNameLID: m },
            shouldWaitForJob: !0,
            processingResult: i,
          }),
        { mapping: a, lidMetadataUpdates: i }
      );
    }
    function f(e) {
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
    function g(e) {
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
    async function h(e) {
      var t = e.msgInfo.chat;
      return t.isUser()
        ? p(e)
        : t.isGroup() || t.isBroadcast()
          ? _(e)
          : { lidMetadataUpdates: [] };
    }
    async function y(e, t, n) {
      if (
        e.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
      ) {
        var r = e.bclParticipants.map(function (r) {
            return C({ msgInfo: e, msgMeta: t, bclParticipant: r }, n);
          }),
          a = await Promise.all(r);
        return { type: "peer-broadcast", mappings: a };
      }
      return {
        type: "not-peer-broadcast",
        mapping: await C({ msgInfo: e, msgMeta: t }, n),
      };
    }
    async function C(e, t) {
      var n,
        r,
        a = await h(e),
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
        c.length > 0 && o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(c),
        u.length > 0 &&
          (await o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(u)),
        l != null &&
          typeof l == "object" &&
          (await g({ mapping: l, flushImmediately: t })),
        l
      );
    }
    l.processPhoneNumberMappings = y;
  },
  98,
);
