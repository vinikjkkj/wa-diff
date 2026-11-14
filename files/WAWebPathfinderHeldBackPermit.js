__d(
  "WAWebPathfinderHeldBackPermit",
  ["WAWebPathfinderHeldBackSurface", "WAWebPathfinderScreenName"],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
        [
          o("WAWebPathfinderHeldBackSurface").HeldBackSurface
            .STATUS_AUDIENCE_SELECTOR,
          {
            eventType: "SELECTION_MADE",
            targetIds: new Set([
              "BottomSheetStatusPrivacy_MyContacts",
              "BottomSheetStatusPrivacy_MyContactsExcept",
              "BottomSheetStatusPrivacy_OnlyShareWith",
            ]),
            appReactionMetadata: { selection_type: "single_select_option" },
            laterHoldsOf: new Set([
              o("WAWebPathfinderHeldBackSurface").HeldBackSurface
                .STATUS_SELECT_CONTACTS,
            ]),
          },
        ],
      ]),
      s = new WeakMap(),
      u = new WeakSet(),
      c = null,
      d = 0;
    function m(t, n, r) {
      var a = e.get(t);
      if (
        a == null ||
        !a.targetIds.has(n) ||
        !(r instanceof Element) ||
        !r.isConnected ||
        g(t)
      )
        return null;
      var i = o("WAWebPathfinderHeldBackSurface").getCoveringHeldBackHolds(r);
      if (
        i.length === 0 ||
        i.some(function (e) {
          return e.name !== t;
        })
      )
        return null;
      var l = babelHelpers.extends({}, a.appReactionMetadata),
        u = {
          eventType: a.eventType,
          timestampMs: Date.now(),
          screenName: t,
          targetTrackingId: n,
          appReactionMetadata: l,
        };
      (Object.freeze(l), Object.freeze(u));
      var c = Object.freeze({});
      return (
        s.set(c, {
          holds: new Set(
            i.map(function (e) {
              return e.token;
            }),
          ),
          holdsBefore: o(
            "WAWebPathfinderHeldBackSurface",
          ).getActiveHeldBackTokens(),
          laterHoldsOf: a.laterHoldsOf,
          row: u,
          surface: t,
          target: new WeakRef(r),
          task: f(),
        }),
        c
      );
    }
    function p(e) {
      var t = s.get(e);
      if (t == null || (s.delete(e), t.task !== f() || g(t.surface)))
        return null;
      var n = t.target.deref();
      if (n == null) return null;
      var r = o("WAWebPathfinderHeldBackSurface")
        .getCoveringHeldBackHolds(n)
        .every(function (e) {
          return (
            t.holds.has(e.token) ||
            (t.laterHoldsOf.has(e.name) && !t.holdsBefore.has(e.token))
          );
        });
      return r ? (u.add(t.row), t.row) : null;
    }
    function _(e) {
      return u.delete(e);
    }
    function f() {
      if (c != null) return c;
      d++;
      var e = d;
      return (
        (c = e),
        queueMicrotask(function () {
          c = null;
        }),
        e
      );
    }
    function g(e) {
      var t = o("WAWebPathfinderScreenName").getCurrentScreenName();
      return t !== e && o("WAWebPathfinderHeldBackSurface").isHeldBackScreen(t);
    }
    ((l.issueHeldBackPermit = m),
      (l.redeemHeldBackPermit = p),
      (l.takePermittedHeldBackRow = _));
  },
  98,
);
