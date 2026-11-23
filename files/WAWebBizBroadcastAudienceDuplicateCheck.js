__d(
  "WAWebBizBroadcastAudienceDuplicateCheck",
  [
    "WAJids",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastProListUtils",
    "WAWebSchemaBroadcastMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 200,
      s = 2e4;
    async function u(e, t) {
      if (e.size === 0) return { status: "unavailable" };
      var n = await p();
      return n == null ? { status: "incomplete" } : _(n, e, t);
    }
    function c() {
      var e,
        t = !1;
      return {
        countSavedAudience: async function (r, o) {
          e != null || (e = d(r));
          var n = await e;
          if (n == null || t) return { status: "incomplete" };
          var a = m(n, o);
          return ((t = a.status === "incomplete"), a);
        },
        markSaveFailed: function () {
          e != null && (e = Promise.resolve(null));
        },
      };
    }
    async function d(e) {
      var t = await p();
      if (
        t == null ||
        !t.some(function (t) {
          return t.id === e && g(t);
        })
      )
        return null;
      var n = { audienceCount: 0, memberCount: 0, recipientSets: [] };
      for (var r of t)
        if (
          r.id !== e &&
          (n.audienceCount++, (n.memberCount += r.recipients.length), g(r))
        ) {
          var o = h(r.recipients);
          if (o == null) return null;
          n.recipientSets.push(o);
        }
      return n;
    }
    function m(t, n) {
      if (t.audienceCount >= e || n.length > s) return { status: "incomplete" };
      var r = new Set(n);
      if (t.memberCount + r.size > s) return { status: "incomplete" };
      var o = h(r);
      if (o == null) return { status: "incomplete" };
      var a = t.recipientSets.filter(function (e) {
        return f(e, o);
      }).length;
      return (
        t.audienceCount++,
        (t.memberCount += r.size),
        t.recipientSets.push(o),
        { count: a, status: "complete" }
      );
    }
    async function p() {
      var t = 0,
        n = await o("WAWebSchemaBroadcastMetadata")
          .getBroadcastMetadataTable()
          .all({ limit: e + 1 }, function (e) {
            return ((t += e.recipients.length), t > s);
          });
      return n.length > e || t > s ? null : n;
    }
    function _(e, t, n) {
      var r = [],
        o = [];
      for (var a of e) {
        var i = t.has(a.id);
        if (!(!i && n != null && !n.has(a.id)) && g(a)) {
          var l = h(a.recipients);
          if (l == null) return { status: "incomplete" };
          i ? r.push(l) : o.push(l);
        }
      }
      if (r.length !== t.size) return { status: "incomplete" };
      var s = o.filter(function (e) {
        return r.some(function (t) {
          return f(t, e);
        });
      }).length;
      return { count: s, status: "complete" };
    }
    function f(e, t) {
      if (e.size !== t.size) return !1;
      for (var n of e) if (!t.has(n)) return !1;
      return !0;
    }
    function g(e) {
      return (
        String(e.id) !== "status@broadcast" &&
        String(e.id) !== "location@broadcast" &&
        !o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(
          e.customAudienceFbid,
        ) &&
        e.audienceExpression.type ===
          o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_EXPLICIT
      );
    }
    function h(e) {
      var t = new Set();
      for (var n of e) {
        var r = o("WAJids").validateLidUserJid(n);
        if (r == null) return null;
        t.add(r);
      }
      return t.size > 0 ? t : null;
    }
    ((l.countMatchingCoreAudiences = u),
      (l.createImportAudienceDuplicateCheck = c));
  },
  98,
);
