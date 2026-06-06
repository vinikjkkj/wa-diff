__d(
  "WAWebChatLockAction",
  ["WAWebChatCollection", "WAWebDBUpdateChatTable", "WAWebLockChatSync"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n,
        r = t ? { isLocked: t, archive: !1, pin: void 0 } : { isLocked: t };
      (await o("WAWebDBUpdateChatTable").updateChatTable(e, r),
        (n = o("WAWebChatCollection").ChatCollection.get(e)) == null ||
          n.set(r));
    }
    async function s(t, n, o) {
      var a = o != null ? o : {},
        i = a.syncWithPrimaries,
        l = i === void 0 ? !0 : i;
      return (
        l && r("WAWebLockChatSync").sendLockMutation(t, { isLocked: n }),
        e(t, n)
      );
    }
    async function u(e, t) {
      return s(e, !0, t);
    }
    async function c(e, t) {
      return s(e, !1, t);
    }
    ((l.setChatAsLocked = u), (l.setChatAsUnlocked = c));
  },
  98,
);
