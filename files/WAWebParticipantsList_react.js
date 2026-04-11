__d(
  "WAWebParticipantsList.react",
  [
    "WAShiftTimer",
    "WAWebChatSubtitleText.react",
    "WAWebFbtIntlList",
    "WAWebParticipantListUtils",
    "WAWebSupportChatStrings",
    "react",
    "useLazyRef",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = "sort remove reset add";
    function p(e) {
      var t = e.ariaLabel,
        n = e.groupMetadata,
        a = e.location,
        i = e.overridingText,
        l = e.placeholder,
        u = e.showLockIcon,
        p = o("useWAWebModelValues").useModelValues(n, [
          "hasCapi",
          "owner",
          "participants",
          "support",
          "isOpenBotGroup",
        ]),
        _ = d(function () {
          return o("WAWebParticipantListUtils").calculateParticipantsList(p);
        }),
        f = _[0],
        g = _[1],
        h = r("useWAWebStableCallback")(function () {
          p.participants.ensureSorted();
        }),
        y = r("useWAWebStableCallback")(function () {
          g(o("WAWebParticipantListUtils").calculateParticipantsList(p));
        }),
        C = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(y);
        });
      (c(function () {
        h();
      }, []),
        r("useWAWebOnUnmount")(function () {
          C.current.cancel();
        }));
      var b = function () {
        C.current.debounce(100);
      };
      (o("useWAWebListener").useListener(p.participants, m, b),
        c(
          function () {
            (h(),
              C.current.cancel(),
              g(o("WAWebParticipantListUtils").calculateParticipantsList(p)));
          },
          [h, p, C],
        ));
      var v = p.support
        ? o("WAWebSupportChatStrings").SupportChatSubtitle()
        : i != null
          ? i
          : r("WAWebFbtIntlList")(
              f,
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ) || l;
      return v != null
        ? s.jsx(r("WAWebChatSubtitleText.react"), {
            text: v,
            ariaLabel: t,
            location: a,
            showLockIcon: u,
          })
        : null;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
