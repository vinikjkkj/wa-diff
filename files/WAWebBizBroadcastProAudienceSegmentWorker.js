__d(
  "WAWebBizBroadcastProAudienceSegmentWorker",
  ["JSResourceForInteraction", "WAJids", "WAWebWidFactory", "err"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebBizBroadcastProAudienceSegmentQuery",
      ).__setRef("WAWebBizBroadcastProAudienceSegmentWorker"),
      s = r("JSResourceForInteraction")(
        "WAWebBizBroadcastProAudienceActivityQuery",
      ).__setRef("WAWebBizBroadcastProAudienceSegmentWorker"),
      u = r("JSResourceForInteraction")(
        "WAWebBizBroadcastProChatListAudienceQuery",
      ).__setRef("WAWebBizBroadcastProAudienceSegmentWorker");
    async function c(t) {
      var n = h(t),
        r = await e.load(),
        o = r.resolveProAudienceSegment;
      return o(n);
    }
    async function d(e) {
      var t = g(e),
        n = await s.load(),
        r = n.queryProAudienceActivity;
      return r(t);
    }
    async function m(e) {
      var t = _(e),
        n = await u.load(),
        r = n.queryProChatListCatalog;
      return r(t);
    }
    async function p(e) {
      var t = f(e),
        n = await u.load(),
        r = n.queryProChatListAudience;
      return r(t);
    }
    function _(e) {
      if (e == null || typeof e != "object" || !("candidateLids" in e))
        throw r("err")("[bb-pro] invalid chat list catalog request");
      return { candidateLids: g(e.candidateLids) };
    }
    function f(e) {
      if (
        e == null ||
        typeof e != "object" ||
        !("listId" in e) ||
        typeof e.listId != "string" ||
        e.listId.trim() === ""
      )
        throw r("err")("[bb-pro] invalid chat list audience request");
      var t = e.listId;
      return babelHelpers.extends({}, _(e), { listId: t });
    }
    function g(e) {
      if (!Array.isArray(e))
        throw r("err")("[bb-pro] invalid audience candidate pool");
      return e.map(function (e) {
        if (typeof e != "string")
          throw r("err")("[bb-pro] invalid audience candidate LID");
        return o("WAJids").toLidUserJid(
          o("WAWebWidFactory").createUserLidOrThrow(e).user,
        );
      });
    }
    function h(e) {
      if (
        e == null ||
        typeof e != "object" ||
        !("days" in e) ||
        !("segment" in e) ||
        !("candidateLids" in e)
      )
        throw r("err")("[bb-pro] invalid audience segment request");
      var t = e.candidateLids,
        n = e.days,
        o = e.segment;
      if (!y(n) || !C(o))
        throw r("err")("[bb-pro] invalid audience segment request");
      return { days: n, segment: o, candidateLids: g(t) };
    }
    function y(e) {
      return (
        e === 7 || e === 14 || e === 30 || e === 90 || e === 180 || e === 365
      );
    }
    function C(e) {
      return (
        e === "all_contacts" ||
        e === "active_chats" ||
        e === "inactive_chats" ||
        e === "largest_list"
      );
    }
    ((l.resolveProAudienceSegment = c),
      (l.queryProAudienceActivityMetadata = d),
      (l.queryProChatListCatalog = m),
      (l.queryProChatListAudience = p));
  },
  98,
);
