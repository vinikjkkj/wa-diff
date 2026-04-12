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
      var t = e.onSaveContact,
        n = e.parsedVcard,
        a = e.thumbnail,
        i = c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(n),
          direction: "auto",
          titlify: !0,
          ellipsify: !0,
          selectable: !0,
        }),
        l = o("WAWebVcardUtils").vcardGetOrganizationString(n),
        u = r("isStringNullOrEmpty")(l) ? void 0 : l,
        m = c.jsx(r("WAWebProfileImage.react"), {
          thumb: a,
          size: o("WAWebDetailImage.react").DetailImageSize.Small,
          wid: o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.getThumbnailWidFromVcard(n),
        });
      if (o("WAWebContactManagementGating").contactManagementEnabled()) {
        var p = o("WAWebContactUtils").getContactDataFromVcard(n),
          _ =
            (p == null ? void 0 : p.phoneNumber) != null &&
            o("WAWebContactUtils").canSaveAsMyContact(
              p == null ? void 0 : p.phoneNumber,
            ),
          f =
            (p == null ? void 0 : p.lid) != null &&
            o("WAWebContactUtils").canSaveAsMyContact(
              p == null ? void 0 : p.lid,
            ),
          g =
            _ ||
            (f &&
              o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).usernameContactUIEnabled());
        if (p && g) {
          var h = function () {
            t && (o("WAWebModalManager").ModalManager.close(), t(p));
          };
          return c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: c.jsx(r("WAWebCellFrame.react"), {
                  image: m,
                  theme: "plain",
                  primary: i,
                  secondary: u,
                }),
              }),
              t &&
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: d.content,
                  children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
                    onClick: h,
                    children: p.isExistingContact
                      ? s._(/*BTDS*/ "View")
                      : s._(/*BTDS*/ "Save"),
                  }),
                }),
            ],
          });
        }
      }
      return c.jsx(r("WAWebCellFrame.react"), {
        image: m,
        theme: "plain",
        primary: i,
        secondary: u,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
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
      var n,
        a,
        i,
        l,
        u,
        f,
        y,
        C,
        b = t.onSaveContact,
        v = t.parsedVcard,
        S = t.thumbnail,
        R = t.username,
        L = o("WAWebVcardParsingUtils").vcardLidWid(v);
      L != null &&
        R == null &&
        o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled() &&
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[WAWebVcardModalDetails] LID in vcard, no username",
            ])),
        );
      var E =
          (n =
            (a = v.TEL) == null
              ? void 0
              : a.filter(function (e) {
                  return e.properties.waid;
                })) != null
            ? n
            : [],
        k =
          (i = v.TEL) == null
            ? void 0
            : i.filter(function (e) {
                return !e.properties.waid;
              }),
        I = [];
      (E.forEach(function (e) {
        var n = o("WAWebWidFactory").createUserWidOrThrow(e.properties.waid[0]),
          r = c.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
            selectable: !0,
            children: o("WAWebWidFormat").widToFormattedUser(n),
          });
        I.push({
          title: r,
          icon: _(n, v),
          checkboxValue: t.includePhoneNumber,
          onCheckboxChange: t.onTogglePhoneNumber,
          text: o("WAWebVcardUtils").vcardGetType(e),
          key: "vCard-" + String(e.index),
        });
      }),
        R != null &&
          L != null &&
          I.push({
            title: "@" + R,
            icon: _(L, v),
            text: s._(/*BTDS*/ "USERNAME"),
            key: "vCard-username",
            checkboxValue: t.includeUsername,
            onCheckboxChange: t.onToggleUsername,
          }),
        (l = v.EMAIL) == null ||
          l.forEach(function (e) {
            I.push({
              title: r("WAWebL10N").forceLTR(e.value),
              text: o("WAWebVcardUtils").vcardGetType(e),
              key: "vCard-" + String(e.index),
              onClick: function () {
                return g(e.value);
              },
            });
          }),
        (u = v.ADR) == null ||
          u.forEach(function (e) {
            var t = m(e.value);
            I.push({
              title: t,
              text: o("WAWebVcardUtils").vcardGetType(e),
              key: "vCard-" + String(e.index),
              onClick: function () {
                return h(e.value);
              },
            });
          }),
        k == null ||
          k.forEach(function (e) {
            I.push({
              title: r("WAWebL10N").forceLTR(e.value),
              text: o("WAWebVcardUtils").vcardGetType(e),
              key: "vCard-" + String(e.index),
            });
          }),
        (f = v.BDAY) == null ||
          f.forEach(function (e) {
            I.push({
              title: o("WAWebVcardParsingUtils").vcardGetDate(e.value),
              text: s._(/*BTDS*/ "Birthday"),
              key: "vCard-" + String(e.index),
            });
          }),
        (y = v.NICKNAME) == null ||
          y.forEach(function (e) {
            I.push({
              title: e.value,
              text: s._(/*BTDS*/ "Nickname"),
              key: "vCard-" + String(e.index),
            });
          }),
        (C = v.SERVICE) == null ||
          C.forEach(function (e) {
            e.type === "WA-LID" ||
              e.type === "WA-BIZ-AUTOMATED-TYPE" ||
              I.push({
                testid: "vcard-service-" + e.type,
                title: e.value,
                text: o("WAWebVcardUtils").vcardGetType(e),
                key: "vCard-" + String(e.index),
              });
          }));
      var T = c.jsx(p, { parsedVcard: v, thumbnail: S, onSaveContact: b }),
        D = I.map(function (e, t) {
          var n = t === I.length - 1,
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
        });
      return c.jsxs("div", {
        className: "x1280gxy",
        children: [
          T,
          c.jsx("div", {
            className: "xexx8yu x1pic42t x18d9i69 x1onr9mi xdj266r x1280gxy",
            children: D,
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
