__d(
  "WAWebStatusCell.react",
  [
    "WAReplaceRepeatingWhitespace",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebChatCollection",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebMiscGatingUtils",
    "WAWebParticipantListUtils",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebPsaVerifiedIcon.react",
    "WAWebStatusGetters",
    "WAWebStatusThumbnail.react",
    "react",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebStatusValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.contact,
        a = e.contextMenu,
        i = e.isModalView,
        l = i === void 0 ? !0 : i,
        u = e.onClick,
        c = e.onContext,
        d = e.showMutedStatusesDimmed,
        m = d === void 0 ? !0 : d,
        p = e.status,
        _ = o("useWAWebStatusValues").useStatusValues(p.id, [
          o("WAWebStatusGetters").getId,
          o("WAWebStatusGetters").getT,
        ]),
        f = _[0],
        g = _[1],
        h = o("useWAWebContactValues").useContactValues(n.id, [
          o("WAWebFrontendContactGetters").getFormattedName,
          o("WAWebContactGetters").getStatusMute,
          o("WAWebContactGetters").getIsPSA,
        ]),
        y = h[0],
        C = h[1],
        b = h[2],
        v = o("WAWebChatCollection").ChatCollection.get(f),
        S =
          (t = o("useWAWebChatValues").useOptionalChatValues(
            v == null ? void 0 : v.id,
            [o("WAWebFrontendChatGetters").getGroupMetadata],
          )) != null
            ? t
            : [null],
        R = S[0],
        L = y;
      R != null &&
        R.isUnnamed &&
        (L = r("WAReplaceRepeatingWhitespace")(
          o(
            "WAWebParticipantListUtils",
          ).calculateUnnamedGroupFullParticipantsList(R, !0),
        ));
      var E = b ? null : o("WAWebClock").Clock.relativeDateAndTimeStr(g),
        k = b
          ? s.jsxs("span", {
              className: "x1jfb8zj xuce83p x1bft6iq x1i7k8ik xq9mrsl",
              children: [
                y,
                s.jsx("div", {
                  className:
                    "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 xvijh9v x7phf20 x16dsc37",
                  children: o("WAWebMiscGatingUtils").isBlueEnabled()
                    ? s.jsx(
                        o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
                        {},
                      )
                    : s.jsx(
                        o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon,
                        {},
                      ),
                }),
              ],
            })
          : L,
        I = null;
      return (
        c != null
          ? (I = "hidden-status-row-cell")
          : l && (I = "status-list-modal"),
        s.jsx(
          r("WAWebChatCell.react"),
          {
            testid: void 0,
            className: { 0: "", 1: "x1ks1olk" }[!!(m && C) << 0],
            customImage: !0,
            theme: I,
            image: s.jsx(r("WAWebStatusThumbnail.react"), {
              id: p.id,
              contact: n,
              onClick: u,
            }),
            tabIndex: -1,
            handleKeyboardClick: !0,
            focusid: "status-row-item",
            primary: k,
            secondary: E,
            onClick: u,
            contextEnabled:
              c != null
                ? o("WAWebBoolFunc").returnTrue
                : o("WAWebBoolFunc").returnFalse,
            onContext: c,
            contextMenu: a,
          },
          f.toString(),
        )
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
