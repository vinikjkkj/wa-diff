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
      var t = e.hideWhenNoUnreadStatuses,
        n = e.isHoveredOrActive,
        a = n === void 0 ? !1 : n,
        i = e.photoSize,
        l = e.rowIndex,
        d = e.rowSection,
        m = e.waitIdle,
        p = r("useWAWebIntersection")(),
        _ = p[0],
        f = p[1].isIntersecting,
        g = o("useWAWebContactValues").useContactValues(e.contact.id, [
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getStatusMute,
          o("WAWebContactGetters").getIsMe,
        ]),
        h = g[0],
        y = g[1],
        C = g[2],
        b = u(function () {
          return c(h);
        }),
        v = b[0],
        S = b[1],
        R = function () {
          var e = c(h);
          S(e);
        };
      o("useWAWebListener").useListener(
        o("WAWebStatusGatingUtils").isStatusFirstUploadFixEnabled()
          ? o("WAWebStatusCollection").StatusCollection
          : null,
        ["change:msgsChanged"],
        R,
      );
      var L = s.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: h,
          size: i,
          waitIdle: m,
          ephemeralIcon: "chat-list",
          isHoveredOrActive: a,
        }),
        E =
          C &&
          !o("WAWebABProps").getABPropConfigValue(
            "wa_web_self_profile_photo_fix_enabled",
          ),
        k = !1,
        I = o("WAWebChatCollection").ChatCollection.get(h);
      return (
        I &&
          (k = o(
            "WAWebConversationDeprecatedLidChatUtils",
          ).getLidDeprecatedInfo(I).isLidDeprecated),
        y || k || E
          ? s.jsx("div", { ref: _, children: L })
          : v == null
            ? s.jsx("div", { ref: _, children: L })
            : f
              ? s.jsx("div", {
                  "data-testid": void 0,
                  ref: _,
                  children: s.jsx(r("WAWebStatusProfilePhotoRing.react"), {
                    contactStatus: v,
                    photoSize: i,
                    waitIdle: m,
                    hideWhenNoUnreadStatuses: t,
                    rowSection: d,
                    rowIndex: l,
                  }),
                })
              : s.jsx("div", { ref: _, children: L })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
