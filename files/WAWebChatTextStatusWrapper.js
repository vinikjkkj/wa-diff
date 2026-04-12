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
      var a,
        i = t.contactId,
        l = t.waitIdle,
        s = o("WAWebContactCollection").ContactCollection.gadd(i),
        c = s.getStatus(),
        d = o("useWAWebModelValues").useModelValues(
          c,
          ["id", "stale", "status"],
          { isStrong: !1 },
        ),
        m = o("useWAWebContactValues").useContactValues(s.id, [
          (a = o("WAWebFrontendContactGetters")).getTextStatusString,
          a.getTextStatusEmoji,
          a.getTextStatusLastUpdateTime,
          a.getTextStatusExpiryTs,
          a.getTextStatusEphemeralDuration,
        ]),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = m[4],
        y = o("WAWebTextStatusUtils").shouldDisplayTextStatus(p, _, f, g, h),
        C = u.jsx(u.Fragment, {}),
        b = function () {
          if (!y) return C;
          var t;
          if (_ != null) {
            var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(_);
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
                ellipsify: !0,
                titlify: !0,
                text: p != null ? p : "",
                breakWord: !0,
              }),
            ],
          });
        },
        v = f === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED,
        S = !p && !_ && o("WAWebTextStatusUtils").isLegacyAboutNotFetched(d),
        R = o("WAWebUserPrefsMeUser").isMeAccount(i),
        L = function () {
          return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? y
              ? b()
              : !R && !v && o("WAWebTextStatusUtils").hasCustomAboutSet(d)
                ? u.jsx(u.Fragment, { children: d.status })
                : C
            : C;
        },
        E = L(),
        k = function () {
          var e = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              return (
                v
                  ? (e = o("WAWebTextStatusAction").getTextStatus(i, f))
                  : !R &&
                    S &&
                    (e = o(
                      "WAWebTextStatusCollection",
                    ).TextStatusCollection.find(i)),
                e
              );
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return (e(), E);
        };
      return u.jsx(r("WAWebIdleComponent.react"), {
        id: i,
        onComplex: k,
        waitIdle: l,
        children: E,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.willTextStatusDisplayContent = c),
      (l.TextStatus = d));
  },
  98,
);
