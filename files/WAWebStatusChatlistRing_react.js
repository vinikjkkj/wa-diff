__d(
  "WAWebStatusChatlistRing.react",
  [
    "WAWebABProps",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusProfilePhotoRingWrapper.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.contact,
        a = e.isHoveredOrActive,
        i = e.photoSize,
        l = e.rowIndex,
        c = e.rowSection,
        d = e.waitIdle,
        m = a === void 0 ? !1 : a,
        p;
      t[0] !== n.id
        ? ((p = function () {
            return o("WAWebStatusCollection").StatusCollection.get(n.id);
          }),
          (t[0] = n.id),
          (t[1] = p))
        : (p = t[1]);
      var _ = u(p),
        f = _[1],
        g = u(n.id),
        h = g[0],
        y = g[1];
      n.id !== h &&
        (f(o("WAWebStatusCollection").StatusCollection.get(n.id)), y(n.id));
      var C;
      t[2] !== n.id
        ? ((C = function () {
            f(o("WAWebStatusCollection").StatusCollection.get(n.id));
          }),
          (t[2] = n.id),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      (t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["change:msgsChanged"]), (t[4] = v))
        : (v = t[4]),
        o("useWAWebListener").useListener(
          o("WAWebStatusGatingUtils").isStatusFirstUploadFixEnabled()
            ? null
            : o("WAWebStatusCollection").StatusCollection,
          v,
          b,
        ));
      var S;
      t[5] !== n.id
        ? ((S = n.id.toString()), (t[5] = n.id), (t[6] = S))
        : (S = t[6]);
      var R;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = o("WAWebABProps").getABPropConfigValue(
            "wa_web_show_status_ring_for_no_unread",
          )),
          (t[7] = R))
        : (R = t[7]);
      var L;
      return (
        t[8] !== n ||
        t[9] !== m ||
        t[10] !== i ||
        t[11] !== l ||
        t[12] !== c ||
        t[13] !== S ||
        t[14] !== d
          ? ((L = s.jsx(
              r("WAWebStatusProfilePhotoRingWrapper.react"),
              {
                contact: n,
                photoSize: i,
                waitIdle: d,
                hideWhenNoUnreadStatuses: !R,
                rowSection: c,
                rowIndex: l,
                isHoveredOrActive: m,
              },
              S,
            )),
            (t[8] = n),
            (t[9] = m),
            (t[10] = i),
            (t[11] = l),
            (t[12] = c),
            (t[13] = S),
            (t[14] = d),
            (t[15] = L))
          : (L = t[15]),
        L
      );
    }
    l.default = c;
  },
  98,
);
