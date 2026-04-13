__d(
  "WAWebVcardModalDetails.react",
  [
    "fbt",
    "WALogger",
    "WAWebButton.react",
    "WAWebCellFrame.react",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebCopyPasteSelectable.react",
    "WAWebDetailImage.react",
    "WAWebDrawerItem.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebProfileImage.react",
    "WAWebProfilePicThumbCollection",
    "WAWebUnstyledButton.react",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVcardGetNameFromParsed",
    "WAWebVcardParsingUtils",
    "WAWebVcardUtils",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "WDSBaseCheckbox.react",
    "WDSIconWdsIcChatFilled.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        icon: { color: "xhslqc4", $$css: !0 },
        content: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1pic42t",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1onr9mi",
          marginTop: "xdj266r",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        itemWithCheckbox: { paddingInlineStart: "x12w63v0", $$css: !0 },
      };
    function m(e) {
      return e.join(" ");
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.onSaveContact,
        a = e.parsedVcard,
        i = e.thumbnail,
        l;
      t[0] !== a
        ? ((l = o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(a)),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== l
        ? ((u = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: l,
            direction: "auto",
            titlify: !0,
            ellipsify: !0,
            selectable: !0,
          })),
          (t[2] = l),
          (t[3] = u))
        : (u = t[3]);
      var m = u,
        p;
      if (t[4] !== a) {
        var _ = o("WAWebVcardUtils").vcardGetOrganizationString(a);
        ((p = r("isStringNullOrEmpty")(_) ? void 0 : _),
          (t[4] = a),
          (t[5] = p));
      } else p = t[5];
      var f = p,
        g;
      t[6] !== a
        ? ((g = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.getThumbnailWidFromVcard(a)),
          (t[6] = a),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== g || t[9] !== i
        ? ((h = c.jsx(r("WAWebProfileImage.react"), {
            thumb: i,
            size: o("WAWebDetailImage.react").DetailImageSize.Small,
            wid: g,
          })),
          (t[8] = g),
          (t[9] = i),
          (t[10] = h))
        : (h = t[10]);
      var y = h;
      if (o("WAWebContactManagementGating").contactManagementEnabled()) {
        var C, b, v;
        if (t[11] !== a) {
          var S, R, L, E;
          ((b = o("WAWebContactUtils").getContactDataFromVcard(a)),
            (C =
              ((S = b) == null ? void 0 : S.phoneNumber) != null &&
              o("WAWebContactUtils").canSaveAsMyContact(
                (R = b) == null ? void 0 : R.phoneNumber,
              )),
            (v =
              ((L = b) == null ? void 0 : L.lid) != null &&
              o("WAWebContactUtils").canSaveAsMyContact(
                (E = b) == null ? void 0 : E.lid,
              )),
            (t[11] = a),
            (t[12] = C),
            (t[13] = b),
            (t[14] = v));
        } else ((C = t[12]), (b = t[13]), (v = t[14]));
        var k = v,
          I =
            C ||
            (k &&
              o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).usernameContactUIEnabled());
        if (b && I) {
          var T;
          t[15] !== b || t[16] !== n
            ? ((T = function () {
                n && (o("WAWebModalManager").ModalManager.close(), n(b));
              }),
              (t[15] = b),
              (t[16] = n),
              (t[17] = T))
            : (T = t[17]);
          var D = T,
            x;
          t[18] !== y || t[19] !== f || t[20] !== m
            ? ((x = c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: c.jsx(r("WAWebCellFrame.react"), {
                  image: y,
                  theme: "plain",
                  primary: m,
                  secondary: f,
                }),
              })),
              (t[18] = y),
              (t[19] = f),
              (t[20] = m),
              (t[21] = x))
            : (x = t[21]);
          var $;
          t[22] !== b || t[23] !== D || t[24] !== n
            ? (($ =
                n &&
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: d.content,
                  children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                    onClick: D,
                    children: b.isExistingContact
                      ? s._(/*BTDS*/ "View")
                      : s._(/*BTDS*/ "Save"),
                  }),
                })),
              (t[22] = b),
              (t[23] = D),
              (t[24] = n),
              (t[25] = $))
            : ($ = t[25]);
          var P;
          return (
            t[26] !== x || t[27] !== $
              ? ((P = c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  children: [x, $],
                })),
                (t[26] = x),
                (t[27] = $),
                (t[28] = P))
              : (P = t[28]),
            P
          );
        }
      }
      var N;
      return (
        t[29] !== y || t[30] !== f || t[31] !== m
          ? ((N = c.jsx(r("WAWebCellFrame.react"), {
              image: y,
              theme: "plain",
              primary: m,
              secondary: f,
            })),
            (t[29] = y),
            (t[30] = f),
            (t[31] = m),
            (t[32] = N))
          : (N = t[32]),
        N
      );
    }
    var _ = function (t, n) {
        var e = o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(n),
          a = s._(/*BTDS*/ "Message to {contact-name}", [
            s._param("contact-name", e),
          ]),
          i = c.jsx(r("WAWebUnstyledButton.react"), {
            onClick: function () {
              return f(t);
            },
            "aria-label": a,
            children: c.jsx(r("WDSIconWdsIcChatFilled.react"), {
              directional: !0,
              xstyle: d.icon,
              "aria-label": a,
            }),
          });
        return i;
      },
      f = function (t) {
        (o("WAWebModalManager").ModalManager.close(),
          o("WAWebFindChatAction")
            .findOrCreateLatestChat(t, "vCardModalDetails")
            .then(function (e) {
              var t = e.chat;
              o("WAWebCmd")
                .Cmd.openChatFromUnread({ chat: t })
                .then(function (e) {
                  e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                });
            }));
      },
      g = function (t) {
        var e = "mailto:" + t;
        o("WAWebExternalLink.react").openExternalLink(e);
      },
      h = function (t) {
        var e = t.filter(Boolean).map(encodeURIComponent).join(", "),
          n =
            "https://maps.google.com/maps/search/" +
            e +
            "?hl=" +
            r("WAWebL10N").getNormalizedLocale();
        o("WAWebExternalLink.react").openExternalLink(n);
      };
    function y(t) {
      var n = o("react-compiler-runtime").c(20),
        a = t.onSaveContact,
        i = t.parsedVcard,
        l = t.thumbnail,
        u = t.username,
        f;
      if (
        n[0] !== i ||
        n[1] !== t.includePhoneNumber ||
        n[2] !== t.includeUsername ||
        n[3] !== t.onTogglePhoneNumber ||
        n[4] !== t.onToggleUsername ||
        n[5] !== u
      ) {
        var y,
          v,
          S,
          R,
          L,
          E,
          k,
          I,
          T = o("WAWebVcardParsingUtils").vcardLidWid(i);
        T != null &&
          u == null &&
          o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebVcardModalDetails] LID in vcard, no username",
              ])),
          );
        var D =
            (y = (v = i.TEL) == null ? void 0 : v.filter(b)) != null ? y : [],
          x = (S = i.TEL) == null ? void 0 : S.filter(C);
        ((f = []),
          D.forEach(function (e) {
            var n = o("WAWebWidFactory").createUserWidOrThrow(
                e.properties.waid[0],
              ),
              r = c.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
                selectable: !0,
                children: o("WAWebWidFormat").widToFormattedUser(n),
              });
            f.push({
              title: r,
              icon: _(n, i),
              checkboxValue: t.includePhoneNumber,
              onCheckboxChange: t.onTogglePhoneNumber,
              text: o("WAWebVcardUtils").vcardGetType(e),
              key: "vCard-" + String(e.index),
            });
          }),
          u != null &&
            T != null &&
            f.push({
              title: "@" + u,
              icon: _(T, i),
              text: s._(/*BTDS*/ "USERNAME"),
              key: "vCard-username",
              checkboxValue: t.includeUsername,
              onCheckboxChange: t.onToggleUsername,
            }),
          (R = i.EMAIL) == null ||
            R.forEach(function (e) {
              f.push({
                title: r("WAWebL10N").forceLTR(e.value),
                text: o("WAWebVcardUtils").vcardGetType(e),
                key: "vCard-" + String(e.index),
                onClick: function () {
                  return g(e.value);
                },
              });
            }),
          (L = i.ADR) == null ||
            L.forEach(function (e) {
              var t = m(e.value);
              f.push({
                title: t,
                text: o("WAWebVcardUtils").vcardGetType(e),
                key: "vCard-" + String(e.index),
                onClick: function () {
                  return h(e.value);
                },
              });
            }),
          x == null ||
            x.forEach(function (e) {
              f.push({
                title: r("WAWebL10N").forceLTR(e.value),
                text: o("WAWebVcardUtils").vcardGetType(e),
                key: "vCard-" + String(e.index),
              });
            }),
          (E = i.BDAY) == null ||
            E.forEach(function (e) {
              f.push({
                title: o("WAWebVcardParsingUtils").vcardGetDate(e.value),
                text: s._(/*BTDS*/ "Birthday"),
                key: "vCard-" + String(e.index),
              });
            }),
          (k = i.NICKNAME) == null ||
            k.forEach(function (e) {
              f.push({
                title: e.value,
                text: s._(/*BTDS*/ "Nickname"),
                key: "vCard-" + String(e.index),
              });
            }),
          (I = i.SERVICE) == null ||
            I.forEach(function (e) {
              e.type === "WA-LID" ||
                e.type === "WA-BIZ-AUTOMATED-TYPE" ||
                f.push({
                  testid: "vcard-service-" + e.type,
                  title: e.value,
                  text: o("WAWebVcardUtils").vcardGetType(e),
                  key: "vCard-" + String(e.index),
                });
            }),
          (n[0] = i),
          (n[1] = t.includePhoneNumber),
          (n[2] = t.includeUsername),
          (n[3] = t.onTogglePhoneNumber),
          (n[4] = t.onToggleUsername),
          (n[5] = u),
          (n[6] = f));
      } else f = n[6];
      var $;
      n[7] !== a || n[8] !== i || n[9] !== l
        ? (($ = c.jsx(p, { parsedVcard: i, thumbnail: l, onSaveContact: a })),
          (n[7] = a),
          (n[8] = i),
          (n[9] = l),
          (n[10] = $))
        : ($ = n[10]);
      var P = $,
        N;
      n[11] !== f
        ? ((N = f.map(function (e, t) {
            var n = t === f.length - 1,
              a = c.jsx(
                r("WAWebDrawerItem.react"),
                {
                  testid: void 0,
                  title: e.title,
                  icon: e.icon,
                  onClick: e.onClick,
                  isLastItem: n,
                  children: e.text,
                },
                e.key,
              );
            if (e.onCheckboxChange != null) {
              var i;
              return c.jsxs(
                o("WAWebFlex.react").FlexRow,
                {
                  align: "center",
                  gap: 8,
                  xstyle: d.itemWithCheckbox,
                  children: [
                    c.jsx(r("WDSBaseCheckbox.react"), {
                      value: (i = e.checkboxValue) != null ? i : !0,
                      onChange: e.onCheckboxChange,
                    }),
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 1,
                      children: a,
                    }),
                  ],
                },
                e.key,
              );
            }
            return a;
          })),
          (n[11] = f),
          (n[12] = N))
        : (N = n[12]);
      var M = N,
        w;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "x1280gxy" }), (n[13] = w))
        : (w = n[13]);
      var A;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = {
            className: "xexx8yu x1pic42t x18d9i69 x1onr9mi xdj266r x1280gxy",
          }),
          (n[14] = A))
        : (A = n[14]);
      var F;
      n[15] !== M
        ? ((F = c.jsx("div", babelHelpers.extends({}, A, { children: M }))),
          (n[15] = M),
          (n[16] = F))
        : (F = n[16]);
      var O;
      return (
        n[17] !== P || n[18] !== F
          ? ((O = c.jsxs(
              "div",
              babelHelpers.extends({}, w, { children: [P, F] }),
            )),
            (n[17] = P),
            (n[18] = F),
            (n[19] = O))
          : (O = n[19]),
        O
      );
    }
    function C(e) {
      return !e.properties.waid;
    }
    function b(e) {
      return e.properties.waid;
    }
    l.default = y;
  },
  226,
);
