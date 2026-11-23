__d(
  "WAWebBizBroadcastProAudienceMemberPhones",
  ["CometRelay", "WAWebBizBroadcastProAudienceMemberPhonesQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 120,
      u = 20,
      c = s * u,
      d =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProAudienceMemberPhonesQuery.graphql"));
    async function m(e, t, n) {
      var r = new Set(),
        o = await p(
          { customAudienceID: t, environment: e, phones: r, signal: n },
          null,
          1,
        );
      return o === "complete" ? { phones: r, status: o } : { status: o };
    }
    async function p(e, t, n) {
      var r,
        a = await o("CometRelay")
          .fetchQuery(
            e.environment,
            d,
            { after: t, caId: e.customAudienceID, first: s },
            { fetchPolicy: "network-only" },
          )
          .toPromise(),
        i = a == null ? void 0 : a.xfb_whatsapp_subscriber_list_members;
      if (i == null) return "unavailable";
      if (((r = i.count) != null ? r : 0) > c) return "incomplete";
      _(e.phones, i);
      var l = f(i, t);
      if (l == null) {
        var m;
        return ((m = i.page_info) == null ? void 0 : m.has_next_page) === !0
          ? "incomplete"
          : "complete";
      }
      return n >= u || e.signal.aborted ? "incomplete" : p(e, l, n + 1);
    }
    function _(e, t) {
      for (var n of (r = t.edges) != null ? r : []) {
        var r,
          o,
          a,
          i =
            (o =
              n == null || (a = n.node) == null || (a = a.phone_number) == null
                ? void 0
                : a.replace(/\D/g, "")) != null
              ? o
              : "";
        i !== "" && e.add(i);
      }
    }
    function f(e, t) {
      var n,
        r,
        o = (n = e.page_info) == null ? void 0 : n.end_cursor;
      return ((r = e.page_info) == null ? void 0 : r.has_next_page) !== !0 ||
        o === t
        ? null
        : o;
    }
    l.fetchAudienceMemberPhones = m;
  },
  98,
);
