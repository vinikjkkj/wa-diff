__d(
  "WAWebStatusProfilePhotoRingWrapper.react",
  [
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebContactGetters",
    "WAWebConversationDeprecatedLidChatUtils",
    "WAWebDetailImage.react",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusProfilePhotoRing.react",
    "WAWebWidFactory",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebIntersection",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("WAWebStatusCollection").StatusCollection.get(e);
      if (t != null) return t;
      if (e.isRegularUser()) {
        var n = o("WAWebApiContact").getAlternateUserWid(
          o("WAWebWidFactory").asUserWidOrThrow(e),
        );
        if (n != null)
          return o("WAWebStatusCollection").StatusCollection.get(
            o("WAWebWidFactory").asUserWidOrThrow(n),
          );
      }
      return null;
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(30),
        n = e.hideWhenNoUnreadStatuses,
        a = e.isHoveredOrActive,
        i = e.photoSize,
        l = e.rowIndex,
        d = e.rowSection,
        m = e.waitIdle,
        p = a === void 0 ? !1 : a,
        _ = r("useWAWebIntersection")(),
        f = _[0],
        g = _[1],
        h = g.isIntersecting,
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = [
            o("WAWebContactGetters").getId,
            o("WAWebContactGetters").getStatusMute,
            o("WAWebContactGetters").getIsMe,
          ]),
          (t[0] = y))
        : (y = t[0]);
      var C = o("useWAWebContactValues").useContactValues(e.contact.id, y),
        b = C[0],
        v = C[1],
        S = C[2],
        R;
      t[1] !== b
        ? ((R = function () {
            return c(b);
          }),
          (t[1] = b),
          (t[2] = R))
        : (R = t[2]);
      var L = u(R),
        E = L[0],
        k = L[1],
        I;
      t[3] !== b
        ? ((I = function () {
            var e = c(b);
            k(e);
          }),
          (t[3] = b),
          (t[4] = I))
        : (I = t[4]);
      var T = I,
        D;
      (t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = ["change:msgsChanged"]), (t[5] = D))
        : (D = t[5]),
        o("useWAWebListener").useListener(
          o("WAWebStatusGatingUtils").isStatusFirstUploadFixEnabled()
            ? o("WAWebStatusCollection").StatusCollection
            : null,
          D,
          T,
        ));
      var x;
      t[6] !== b || t[7] !== p || t[8] !== i || t[9] !== m
        ? ((x = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: b,
            size: i,
            waitIdle: m,
            ephemeralIcon: "chat-list",
            isHoveredOrActive: p,
          })),
          (t[6] = b),
          (t[7] = p),
          (t[8] = i),
          (t[9] = m),
          (t[10] = x))
        : (x = t[10]);
      var $ = x,
        P =
          S &&
          !o("WAWebABProps").getABPropConfigValue(
            "wa_web_self_profile_photo_fix_enabled",
          ),
        N = !1,
        M = o("WAWebChatCollection").ChatCollection.get(b);
      if (
        (M &&
          (N = o(
            "WAWebConversationDeprecatedLidChatUtils",
          ).getLidDeprecatedInfo(M).isLidDeprecated),
        v || N || P)
      ) {
        var w;
        return (
          t[11] !== f || t[12] !== $
            ? ((w = s.jsx("div", { ref: f, children: $ })),
              (t[11] = f),
              (t[12] = $),
              (t[13] = w))
            : (w = t[13]),
          w
        );
      }
      if (E == null) {
        var A;
        return (
          t[14] !== f || t[15] !== $
            ? ((A = s.jsx("div", { ref: f, children: $ })),
              (t[14] = f),
              (t[15] = $),
              (t[16] = A))
            : (A = t[16]),
          A
        );
      }
      if (!h) {
        var F;
        return (
          t[17] !== f || t[18] !== $
            ? ((F = s.jsx("div", { ref: f, children: $ })),
              (t[17] = f),
              (t[18] = $),
              (t[19] = F))
            : (F = t[19]),
          F
        );
      }
      var O;
      t[20] !== E ||
      t[21] !== n ||
      t[22] !== i ||
      t[23] !== l ||
      t[24] !== d ||
      t[25] !== m
        ? ((O = s.jsx(r("WAWebStatusProfilePhotoRing.react"), {
            contactStatus: E,
            photoSize: i,
            waitIdle: m,
            hideWhenNoUnreadStatuses: n,
            rowSection: d,
            rowIndex: l,
          })),
          (t[20] = E),
          (t[21] = n),
          (t[22] = i),
          (t[23] = l),
          (t[24] = d),
          (t[25] = m),
          (t[26] = O))
        : (O = t[26]);
      var B;
      return (
        t[27] !== f || t[28] !== O
          ? ((B = s.jsx("div", { "data-testid": void 0, ref: f, children: O })),
            (t[27] = f),
            (t[28] = O),
            (t[29] = B))
          : (B = t[29]),
        B
      );
    }
    l.default = d;
  },
  98,
);
