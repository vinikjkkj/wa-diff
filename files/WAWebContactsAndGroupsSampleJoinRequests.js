__d(
  "WAWebContactsAndGroupsSampleJoinRequests",
  [
    "WATimeUtils",
    "WAWebContactsAndGroupsSampleData",
    "WAWebEventEmitter",
    "WAWebFrontendChatGetters",
    "WAWebGroupMembershipApprovalRequestModel",
    "WAWebRequestMethodType",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 8,
      u = 3600,
      c = new (r("WAWebEventEmitter"))(),
      d = new WeakSet(),
      m = new Set(),
      p = [],
      _ = [],
      f = null;
    function g(e) {
      var t = o("WAWebContactsAndGroupsSampleData").getSampleDataSession();
      return (
        (p.length === 0 ||
          f !== t ||
          p.some(function (t) {
            return !e.includes(t.chat);
          })) &&
          (f !== t && (m = new Set()), (p = R(e)), (_ = v()), (f = t)),
        _
      );
    }
    function h(e) {
      return d.has(e);
    }
    function y(e) {
      (p
        .filter(function (t) {
          return e.includes(t.request);
        })
        .forEach(function (e) {
          return m.add(S(e));
        }),
        (_ = v()),
        c.trigger("change"),
        o("WAWebContactsAndGroupsSampleData").showSampleDataToast());
    }
    function C(e, t) {
      if (e.some(h)) {
        y(e);
        return;
      }
      t();
    }
    function b(e, t) {
      if (e.some(h)) {
        o("WAWebContactsAndGroupsSampleData").showSampleDataToast();
        return;
      }
      t();
    }
    function v() {
      return p.filter(function (e) {
        return !m.has(S(e));
      });
    }
    function S(e) {
      var t = e.chat,
        n = e.request;
      return t.id.toString() + ":" + n.id.toString();
    }
    function R(e) {
      var t = L(e),
        n = o("WAWebContactsAndGroupsSampleData")
          .getSampleContacts()
          .slice(0, s);
      if (t.length === 0 || n.length === 0) return [];
      var a = o("WATimeUtils").unixTime(),
        i = [].concat(
          n.map(function (e) {
            return [t[0], e];
          }),
          t.slice(1).map(function (e, t) {
            return [e, n[t % n.length]];
          }),
        );
      return i.map(function (e, t) {
        var n,
          l = e[0],
          s = e[1],
          c = t % 2 === 1 ? i[(t + 1) % i.length][1] : null,
          m = new (r("WAWebGroupMembershipApprovalRequestModel"))({
            addedBy:
              (n = c == null ? void 0 : c.id) != null
                ? n
                : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            id: s.id,
            requestMethod:
              c != null
                ? o("WAWebRequestMethodType").RequestMethod.NonAdminAdd
                : o("WAWebRequestMethodType").RequestMethod.InviteLink,
            t: a - (t + 1) * u,
          });
        return (d.add(m), { chat: l, request: m });
      });
    }
    function L(t) {
      var n = t.filter(function (e) {
        return !e.isLocked;
      });
      return []
        .concat(
          n.filter(o("WAWebFrontendChatGetters").getIsCommunity).slice(0, 1),
          n.filter(function (e) {
            return !o("WAWebFrontendChatGetters").getIsCommunity(e);
          }),
        )
        .slice(0, e);
    }
    ((l.sampleJoinRequestDecisions = c),
      (l.getSampleJoinRequestRows = g),
      (l.isSampleJoinRequest = h),
      (l.decideSampleJoinRequests = y),
      (l.approveAllUnlessSample = C),
      (l.openRequestsUnlessSample = b));
  },
  98,
);
