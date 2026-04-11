__d(
  "WAWebUnknownContactSection.react",
  [
    "fbt",
    "WALogger",
    "WAWebApiContact",
    "WAWebBlocklistCollection",
    "WAWebCellFrame.react",
    "WAWebChatContactUtils",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebMiscGatingUtils",
    "WAWebPhoneNumberSearch",
    "WAWebPhoneUtils",
    "WAWebProfileImage.react",
    "WAWebPsaVerifiedBlueIcon.react",
    "WAWebPsaVerifiedIcon.react",
    "WAWebSectionHeader.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUsernameGatingUtils",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c.useMemo,
      p = { overrideEllipsifyFlexGrow: { flexGrow: "x1c4vz4f", $$css: !0 } };
    function _(e) {
      var t = e.onUnknownContactClick,
        n = e.username,
        a = "@" + n,
        i = d.jsx(r("WAWebProfileImage.react"), {});
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(
            r("WAWebSectionHeader.react"),
            { header: r("WAWebFbtCommon")("Not in your contacts") },
            "not-in-your-contacts-header",
          ),
          d.jsx(r("WAWebCellFrame.react"), {
            image: i,
            primary: a,
            onClick: t,
            focusable: !0,
            tabIndex: 0,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var n,
        a = t.contactInfo,
        i = t.disableHeader,
        l = i === void 0 ? !1 : i,
        c = t.onUnknownContactClick,
        f = t.searchText,
        g = m(
          function () {
            return (
              f != null && o("WAWebPhoneNumberSearch").isPhoneNumberLike(f)
            );
          },
          [f],
        );
      if (a.wid == null)
        return o("WAWebUsernameGatingUtils").usernameSearchEnabled()
          ? d.jsx(_, { username: a.username, onUnknownContactClick: c })
          : null;
      var h = a.chat,
        y = a.isBusiness,
        C = a.username,
        b = a.verifiedLevel,
        v = a.verifiedName,
        S = a.wid,
        R =
          (n = h == null ? void 0 : h.contact.isContactBlocked) != null
            ? n
            : !!o("WAWebBlocklistCollection").BlocklistCollection.get(S),
        L = d.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: S,
          waitIdle: !0,
        }),
        E = {
          xstyle: p.overrideEllipsifyFlexGrow,
          ellipsify: !0,
          titlify: !0,
          breakWord: !0,
          direction: "auto",
        },
        k,
        I;
      if (o("WAWebUsernameGatingUtils").usernameSearchEnabled() && C != null)
        ((k = "@" + C), g && (I = s._(/*BTDS*/ "Matches this number")));
      else if (!S.isLid()) k = o("WAWebPhoneUtils").formatPhone(S.user);
      else {
        var T,
          D =
            (T = o("WAWebApiContact").getPhoneNumber(S)) == null
              ? void 0
              : T.user;
        D != null
          ? (k = o("WAWebPhoneUtils").formatPhone(D))
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[UnknownContactSection] PN null for remote LID search",
                  ])),
              )
              .sendLogs("unknownContactSection-pn-null-for-remote-search"),
            (k = s._(/*BTDS*/ "Unknown contact")));
      }
      var x = d.jsx(
        o("WAWebEmojiText.react").EmojiText,
        babelHelpers.extends({ text: k }, E),
      );
      if (h) {
        var $ = h.contact.pushname;
        if (
          ($ || ($ = v != null ? v : ""),
          (I =
            k != null
              ? k
              : o("WAWebChatContactUtils").getFormattedNotifyName($)),
          y)
        ) {
          if (b === "high") {
            var P = d.jsx(
              "div",
              babelHelpers.extends(
                {},
                (u || (u = r("stylex"))).props(
                  o("WAWebUISpacing").uiMargin.top3,
                  o("WAWebUISpacing").uiMargin.start3,
                ),
                {
                  children: o("WAWebMiscGatingUtils").isBlueEnabled()
                    ? d.jsx(
                        o("WAWebPsaVerifiedBlueIcon.react").PsaVerifiedBlueIcon,
                        { width: 16, height: 16 },
                      )
                    : d.jsx(
                        o("WAWebPsaVerifiedIcon.react").PsaVerifiedIcon,
                        {},
                      ),
                },
              ),
            );
            x = d.jsxs(d.Fragment, {
              children: [
                d.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  babelHelpers.extends({ text: v }, E),
                ),
                P,
              ],
            });
          }
          ($ == null || $ === "") && (I = s._(/*BTDS*/ "Business account"));
        }
      }
      return (
        R && (I = s._(/*BTDS*/ "Contact is blocked")),
        d.jsxs(d.Fragment, {
          children: [
            !l &&
              d.jsx(
                r("WAWebSectionHeader.react"),
                { header: r("WAWebFbtCommon")("Not in your contacts") },
                "not-in-your-contacts-header",
              ),
            d.jsx(r("WAWebCellFrame.react"), {
              image: L,
              primary: x,
              secondary:
                I != null
                  ? d.jsx(
                      o("WAWebEmojiText.react").EmojiText,
                      babelHelpers.extends({ text: I }, E),
                    )
                  : null,
              onClick: c,
              focusable: !0,
              tabIndex: 0,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
            }),
          ],
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
