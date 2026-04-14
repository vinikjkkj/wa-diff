__d(
  "WAWebChatTextStatusWrapper",
  [
    "WAWebContactCollection",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebIdleComponent.react",
    "WAWebTextStatusAction",
    "WAWebTextStatusCollection",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t,
        n = o("WAWebContactCollection").ContactCollection.gadd(e),
        r = n.getStatus(),
        a = (t = o("WAWebFrontendContactGetters")).getTextStatusString(n),
        i = t.getTextStatusEmoji(n),
        l = t.getTextStatusLastUpdateTime(n),
        s = t.getTextStatusExpiryTs(n),
        u = t.getTextStatusEphemeralDuration(n),
        c = l === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED;
      if (!o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled())
        return !1;
      if (o("WAWebTextStatusUtils").shouldDisplayTextStatus(a, i, l, s, u))
        return !0;
      if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !1;
      if (!c && o("WAWebTextStatusUtils").hasCustomAboutSet(r)) {
        var d,
          m,
          p = (d = (m = r.status) == null ? void 0 : m.trim()) != null ? d : "";
        return p !== "";
      }
      return !1;
    }
    function d(t) {
      var a = t.contactId,
        i = t.ellipsify,
        l = i === void 0 ? !0 : i,
        s = t.waitIdle,
        c = o("WAWebContactCollection").ContactCollection.gadd(a),
        d = c.getStatus(),
        m = o("useWAWebModelValues").useModelValues(
          d,
          ["id", "stale", "status"],
          { isStrong: !1 },
        ),
        p = o("useWAWebContactValues").useContactValues(c.id, [
          o("WAWebFrontendContactGetters").getTextStatusString,
          o("WAWebFrontendContactGetters").getTextStatusEmoji,
          o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
          o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
          o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration,
        ]),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = p[4],
        C = o("WAWebTextStatusUtils").shouldDisplayTextStatus(_, f, g, h, y),
        b = u.jsx(u.Fragment, {}),
        v = function () {
          if (!C) return b;
          var t;
          if (f != null) {
            var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(f);
            n != null &&
              (t = u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WAWebUISpacing").uiPadding.end5,
                  ),
                  {
                    children: u.jsx(
                      r("WAWebEmoji.react"),
                      { emoji: n, size: "small" },
                      "low-res",
                    ),
                  },
                ),
              ));
          }
          return u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              t,
              u.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                selectable: !0,
                ellipsify: l === !1 ? void 0 : !0,
                titlify: !0,
                text: _ != null ? _ : "",
                breakWord: !0,
              }),
            ],
          });
        },
        S = g === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED,
        R = !_ && !f && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(m),
        L = o("WAWebUserPrefsMeUser").isMeAccount(a),
        E = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? C
              ? v()
              : !L && !S && o("WAWebTextStatusUtils").hasCustomAboutSet(m)
                ? u.jsx(u.Fragment, { children: m.status })
                : b
            : b;
        },
        k = E(),
        I = function () {
          var e = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              return (
                S
                  ? (e = o("WAWebTextStatusAction").getTextStatus(a, g))
                  : !L &&
                    R &&
                    (e = o(
                      "WAWebTextStatusCollection",
                    ).TextStatusCollection.find(a)),
                e
              );
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (e(), k);
        };
      return u.jsx(r("WAWebIdleComponent.react"), {
        id: a,
        onComplex: I,
        waitIdle: s,
        children: k,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.willTextStatusDisplayContent = c),
      (l.TextStatus = d));
  },
  98,
);
